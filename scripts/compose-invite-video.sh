#!/bin/sh
set -eu
B=/workspace/artifacts/invite_build
O=/workspace/artifacts/overlays
P=/workspace/public/wedding
mkdir -p "$B"

norm() {
  in=$1
  out=$2
  dur=$3
  extra=${4:-}
  if [ -n "$dur" ]; then
    ffmpeg -y -i "$in" -t "$dur" -an \
      -vf "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1,fps=24${extra}" \
      -c:v libx264 -preset veryfast -crf 18 -pix_fmt yuv420p "$out"
  else
    ffmpeg -y -i "$in" -an \
      -vf "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1,fps=24${extra}" \
      -c:v libx264 -preset veryfast -crf 18 -pix_fmt yuv420p "$out"
  fi
}

echo "Normalizing clips..."
norm "$P/atmosphere.mp4" "$B/c1.mp4" 8 ",eq=brightness=-0.06:gamma=0.96"
norm "$B/kb-lanterns.mp4" "$B/c2.mp4" "" ",eq=brightness=-0.08:gamma=0.95"
norm "$B/kb-card.mp4" "$B/c3.mp4" "" ",eq=brightness=-0.10:gamma=0.94"
norm "$P/card-table.mp4" "$B/c4.mp4" 10 ",eq=brightness=-0.08:gamma=0.95"
norm "$B/kb-court.mp4" "$B/c5.mp4" "" ",eq=brightness=-0.06:gamma=0.96"

cat > "$B/concat.txt" <<EOF
file '$B/c1.mp4'
file '$B/c2.mp4'
file '$B/c3.mp4'
file '$B/c4.mp4'
file '$B/c5.mp4'
EOF

echo "Concatenating..."
ffmpeg -y -f concat -safe 0 -i "$B/concat.txt" -c copy "$B/base.mp4"

echo "Preparing audio bed..."
ffmpeg -y -stream_loop -1 -i "$P/atmosphere.mp4" -t 43 -vn \
  -af "volume=0.8,afade=t=in:d=1.4,afade=t=out:st=40.2:d=2.6" \
  -c:a aac -b:a 160k "$B/audio.m4a"

echo "Compositing overlays..."
# Timeline: c1 8s, c2 7s, c3 9s, c4 10s, c5 9s  => 43s
# 0-8 bismillah | 8-15 invited | 15-24 names | 24-34 events | 34-43 venue
ffmpeg -y \
  -i "$B/base.mp4" \
  -loop 1 -t 43 -i "$O/frame.png" \
  -loop 1 -t 7.4 -i "$O/bismillah.png" \
  -itsoffset 8.15 -loop 1 -t 6.6 -i "$O/invited.png" \
  -itsoffset 15.2 -loop 1 -t 8.5 -i "$O/names.png" \
  -itsoffset 24.35 -loop 1 -t 9.3 -i "$O/events.png" \
  -itsoffset 34.2 -loop 1 -t 8.5 -i "$O/venue.png" \
  -i "$B/audio.m4a" \
  -filter_complex "\
    [0:v]fade=t=in:d=1.0,fade=t=out:st=41.4:d=1.5[base]; \
    [1:v]scale=720:1280,format=rgba[frame]; \
    [2:v]scale=720:1280,format=rgba,fade=t=in:st=0:d=0.8:alpha=1,fade=t=out:st=6.5:d=0.8:alpha=1[bism]; \
    [3:v]scale=720:1280,format=rgba,fade=t=in:st=0:d=0.7:alpha=1,fade=t=out:st=5.7:d=0.7:alpha=1[inv]; \
    [4:v]scale=720:1280,format=rgba,fade=t=in:st=0:d=0.7:alpha=1,fade=t=out:st=7.6:d=0.7:alpha=1[names]; \
    [5:v]scale=720:1280,format=rgba,fade=t=in:st=0:d=0.7:alpha=1,fade=t=out:st=8.4:d=0.7:alpha=1[events]; \
    [6:v]scale=720:1280,format=rgba,fade=t=in:st=0:d=0.7:alpha=1,fade=t=out:st=7.5:d=0.8:alpha=1[venue]; \
    [base][frame]overlay=0:0:eof_action=pass[s0]; \
    [s0][bism]overlay=0:0:eof_action=pass[s1]; \
    [s1][inv]overlay=0:0:eof_action=pass[s2]; \
    [s2][names]overlay=0:0:eof_action=pass[s3]; \
    [s3][events]overlay=0:0:eof_action=pass[s4]; \
    [s4][venue]overlay=0:0:eof_action=pass[vout] \
  " \
  -map "[vout]" -map 7:a \
  -c:v libx264 -preset medium -crf 19 -pix_fmt yuv420p \
  -c:a aac -b:a 160k -shortest \
  -movflags +faststart \
  "$P/invitation.mp4"

cp "$P/invitation.mp4" /workspace/artifacts/arzoo-arman-nikah-invitation.mp4
ls -lh "$P/invitation.mp4"
echo "COMPOSE_OK"

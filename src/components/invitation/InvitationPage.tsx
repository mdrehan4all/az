import { useEffect, useRef, useState } from "react";
import {
  CalendarPlus,
  Clock3,
  Download,
  MapPin,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { googleCalendarUrl, wedding } from "@/lib/wedding";
import { CrescentMark, Ornament } from "./Ornament";

export function InvitationPage() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-bg text-ivory">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "url(/wedding/mandala.jpg)",
          backgroundSize: "920px",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Hero />
      <Couple />
      <Celebrations />
      <Venue />
      <Film />
      <Blessing />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/wedding/lanterns.jpg"
      >
        <source src="/wedding/atmosphere.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 hero-veil" />
      <div className="absolute inset-4 border border-gold/35 sm:inset-6" />
      <div className="absolute inset-6 border border-gold/15 sm:inset-8" />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center px-6 py-16 text-center">
        <CrescentMark className="rise-1 mb-5 text-gold-bright ornament-glow" />
        <p className="rise-1 font-arabic text-[1.7rem] leading-snug text-ivory sm:text-[2rem]" lang="ar" dir="rtl">
          {wedding.bismillah}
        </p>
        <p className="rise-2 mt-3 max-w-sm font-display text-sm italic text-ivory-soft sm:text-base">
          {wedding.bismillahEn}
        </p>
        <Ornament className="rise-3 my-7 text-gold-bright" />
        <p className="rise-3 font-formal text-[11px] font-semibold uppercase tracking-[0.42em] text-gold">
          You are invited
        </p>
        <h1 className="rise-4 mt-5 font-display text-5xl italic leading-[1.05] text-ivory sm:text-6xl">
          {wedding.bride.name}
        </h1>
        <p className="rise-4 mt-3 font-script text-4xl text-gold-bright">weds</p>
        <h2 className="rise-5 mt-2 font-display text-5xl italic leading-[1.05] text-ivory sm:text-6xl">
          {wedding.groom.name}
        </h2>
        <p className="rise-6 mt-8 font-formal text-[11px] uppercase tracking-[0.38em] text-gold">
          November 2026
        </p>
        <a
          href="#celebrations"
          className="rise-6 mt-10 inline-flex min-h-11 items-center justify-center border border-gold/50 px-6 font-formal text-[11px] uppercase tracking-[0.28em] text-gold-bright transition-colors duration-200 hover:bg-gold hover:text-bg"
        >
          View celebrations
        </a>
      </div>
    </section>
  );
}

function Couple() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 py-20 text-center">
      <p className="font-formal text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
        The blessed union
      </p>
      <Ornament className="mx-auto my-6 text-gold" />
      <div className="grid gap-10 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
        <div>
          <h3 className="font-display text-4xl italic text-ivory">{wedding.bride.name}</h3>
          <p className="mt-3 font-display text-base text-muted">{wedding.bride.relation}</p>
          <p className="mt-2 font-display text-sm italic text-ivory-soft">{wedding.bride.address}</p>
        </div>
        <p className="font-script text-4xl text-gold-bright">weds</p>
        <div>
          <h3 className="font-display text-4xl italic text-ivory">{wedding.groom.name}</h3>
          <p className="mt-3 font-display text-base text-muted">{wedding.groom.relation}</p>
          <p className="mt-2 font-display text-sm italic text-ivory-soft">{wedding.groom.address}</p>
        </div>
      </div>
    </section>
  );
}

function Celebrations() {
  const grouped = groupEvents();
  return (
    <section id="celebrations" className="relative bg-bg-deep/80 px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-formal text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
          The celebrations
        </p>
        <Ornament className="mx-auto my-6 text-gold" />
        <ul className="space-y-8 text-left">
          {grouped.map((group) => (
            <li key={group.dateLabel}>
              <p className="mb-3 font-formal text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                {group.weekday} · {group.dateLabel}
              </p>
              <div className="divide-y divide-gold/15 overflow-hidden border border-gold/20 bg-surface/70">
                {group.items.map((event) => (
                  <article
                    key={event.name}
                    className="flex items-center gap-3 px-4 py-4 sm:px-5"
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display text-xl italic text-ivory sm:text-2xl">{event.name}</h4>
                      <p className="mt-1 flex items-center gap-2 font-formal text-[11px] uppercase tracking-[0.16em] text-muted">
                        <Clock3 className="size-3.5 shrink-0 text-gold" aria-hidden />
                        {event.time}
                      </p>
                    </div>
                    <a
                      href={googleCalendarUrl(event)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex size-11 shrink-0 items-center justify-center border border-gold/30 text-gold transition-colors duration-150 hover:bg-gold hover:text-bg"
                      aria-label={`Add ${event.name} to Google Calendar`}
                    >
                      <CalendarPlus className="size-4" />
                    </a>
                  </article>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function groupEvents() {
  const map = new Map<
    string,
    {
      dateLabel: string;
      weekday: string;
      items: (typeof wedding.events)[number][];
    }
  >();
  for (const event of wedding.events) {
    const existing = map.get(event.dateLabel);
    if (existing) existing.items.push(event);
    else {
      map.set(event.dateLabel, {
        dateLabel: event.dateLabel,
        weekday: event.weekday,
        items: [event],
      });
    }
  }
  return [...map.values()];
}

function Venue() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/wedding/courtyard.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 venue-veil" />
      <div className="relative mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
        <MapPin className="mb-4 size-6 text-gold" aria-hidden />
        <p className="font-formal text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
          {wedding.venue.title}
        </p>
        <Ornament className="my-6 text-gold-bright" />
        {wedding.venue.lines.map((line) => (
          <p key={line} className="font-display text-3xl italic leading-snug text-ivory">
            {line}
          </p>
        ))}
        <p className="mt-8 max-w-sm font-display text-base italic text-ivory-soft">
          All functions will be held at the family residence. The honour of your presence is requested.
        </p>
      </div>
    </section>
  );
}

function Film() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, []);

  function togglePlay() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  }

  function toggleMute() {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  }

  return (
    <section id="film" className="bg-bg px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-md text-center">
        <p className="font-formal text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
          Wedding film
        </p>
        <Ornament className="mx-auto my-6 text-gold" />
        <p className="mb-8 font-display text-lg italic text-ivory-soft">
          A cinematic invitation for Arzoo Firdos & Md Arman
        </p>
        <div className="film-shadow relative overflow-hidden border border-gold/25 bg-bg-deep">
          <video
            ref={videoRef}
            className="aspect-[9/16] w-full bg-bg-deep object-cover"
            playsInline
            controls={false}
            poster="/wedding/card-bg.jpg"
            preload="metadata"
          >
            <source src="/wedding/invitation.mp4" type="video/mp4" />
          </video>
          <div className="film-veil absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-3 pb-3 pt-10">
            <button
              type="button"
              onClick={togglePlay}
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-gold/40 bg-bg/50 text-ivory transition-transform duration-150 active:scale-[0.96]"
              aria-label={playing ? "Pause invitation video" : "Play invitation video"}
            >
              {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-gold/40 bg-bg/50 text-ivory transition-transform duration-150 active:scale-[0.96]"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
            <a
              href="/wedding/invitation.mp4"
              download="Arzoo-Arman-Nikah-Invitation.mp4"
              className="inline-flex min-h-11 items-center gap-2 border border-gold/50 bg-gold px-4 font-formal text-[10px] uppercase tracking-[0.22em] text-bg transition-transform duration-150 active:scale-[0.96]"
            >
              <Download className="size-3.5" />
              Save video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Blessing() {
  return (
    <footer className="relative px-6 pb-16 pt-4 text-center">
      <div className="gold-rule mx-auto mb-10 max-w-xs" />
      <p className="font-display text-xl italic text-ivory-soft">
        May Allah bless this union with love, faith, and barakah.
      </p>
      <p className="mt-3 font-arabic text-2xl text-gold-bright" lang="ar" dir="rtl">
        آمين
      </p>
      <p className="mt-8 font-formal text-[10px] uppercase tracking-[0.32em] text-muted">
        {wedding.bride.name} · {wedding.groom.name} · {wedding.year}
      </p>
    </footer>
  );
}

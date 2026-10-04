import { mkdirSync } from "node:fs";
import { chromium } from "playwright";

const OUT = "/workspace/artifacts/overlays";
mkdirSync(OUT, { recursive: true });

const scenes = [
  "frame",
  "bismillah",
  "invited",
  "names",
  "events",
  "venue",
];

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <style>
    @font-face { font-family: Amiri; src: url("file:///workspace/public/fonts/Amiri-Regular.ttf") format("truetype"); font-weight: 400; }
    @font-face { font-family: Amiri; src: url("file:///workspace/public/fonts/Amiri-Bold.ttf") format("truetype"); font-weight: 700; }
    @font-face { font-family: Cinzel; src: url("file:///workspace/public/fonts/Cinzel-400.ttf") format("truetype"); font-weight: 400; }
    @font-face { font-family: Cinzel; src: url("file:///workspace/public/fonts/Cinzel-600.ttf") format("truetype"); font-weight: 600; }
    @font-face { font-family: Cinzel; src: url("file:///workspace/public/fonts/Cinzel-700.ttf") format("truetype"); font-weight: 700; }
    @font-face { font-family: Cormorant; src: url("file:///workspace/public/fonts/CormorantGaramond-Regular.ttf") format("truetype"); font-weight: 400; font-style: normal; }
    @font-face { font-family: Cormorant; src: url("file:///workspace/public/fonts/CormorantGaramond-Medium.ttf") format("truetype"); font-weight: 500; font-style: normal; }
    @font-face { font-family: Cormorant; src: url("file:///workspace/public/fonts/CormorantGaramond-SemiBold.ttf") format("truetype"); font-weight: 600; font-style: normal; }
    @font-face { font-family: Cormorant; src: url("file:///workspace/public/fonts/CormorantGaramond-Bold.ttf") format("truetype"); font-weight: 700; font-style: normal; }
    @font-face { font-family: Cormorant; src: url("file:///workspace/public/fonts/CormorantGaramond-Italic.ttf") format("truetype"); font-weight: 400; font-style: italic; }
    @font-face { font-family: Vibes; src: url("file:///workspace/public/fonts/GreatVibes-Regular.ttf") format("truetype"); font-weight: 400; }

    html, body { margin: 0; width: 720px; height: 1280px; background: transparent; overflow: hidden; }
    .scene { display: none; width: 720px; height: 1280px; position: relative; }
    .scene.on { display: block; }

    .frame-outer {
      position: absolute; inset: 26px;
      border: 1.5px solid rgba(228, 197, 122, 0.62);
      box-shadow: inset 0 0 0 8px rgba(20, 8, 10, 0.0);
    }
    .frame-inner {
      position: absolute; inset: 10px;
      border: 1px solid rgba(228, 197, 122, 0.28);
    }
    .corner {
      position: absolute; width: 46px; height: 46px;
      border-color: rgba(228, 197, 122, 0.9);
      border-style: solid;
    }
    .corner.tl { top: 26px; left: 26px; border-width: 2px 0 0 2px; }
    .corner.tr { top: 26px; right: 26px; border-width: 2px 2px 0 0; }
    .corner.bl { bottom: 26px; left: 26px; border-width: 0 0 2px 2px; }
    .corner.br { bottom: 26px; right: 26px; border-width: 0 2px 2px 0; }

    .scrim {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 46%, rgba(12, 4, 8, 0.72) 0%, rgba(12, 4, 8, 0.42) 42%, rgba(12, 4, 8, 0.18) 68%, transparent 82%);
    }
    .center {
      position: absolute; inset: 0;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center; padding: 90px 64px;
      color: #F6E8C8;
    }
    .kicker {
      font-family: Cinzel, serif;
      font-weight: 600;
      letter-spacing: 0.42em;
      text-transform: uppercase;
      font-size: 13px;
      color: #E4C57A;
    }
    .arabic {
      font-family: Amiri, serif;
      font-size: 46px;
      line-height: 1.45;
      color: #F8EDD4;
      direction: rtl;
      text-shadow: 0 2px 18px rgba(0,0,0,0.75);
    }
    .english-soft {
      font-family: Cormorant, serif;
      font-style: italic;
      font-size: 20px;
      color: #E8D5A8;
      letter-spacing: 0.04em;
      margin-top: 18px;
      max-width: 460px;
      line-height: 1.45;
    }
    .display {
      font-family: Cormorant, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 58px;
      line-height: 1.05;
      color: #F7ECD8;
      text-shadow: 0 3px 22px rgba(0,0,0,0.8);
    }
    .weds {
      font-family: Vibes, cursive;
      font-size: 44px;
      color: #E4C57A;
      margin: 10px 0 6px;
      text-shadow: 0 2px 16px rgba(0,0,0,0.7);
    }
    .parent {
      font-family: Cormorant, serif;
      font-size: 18px;
      color: #D9C7A4;
      margin-top: 8px;
      letter-spacing: 0.03em;
      line-height: 1.4;
    }
    .invited-title {
      font-family: Cinzel, serif;
      font-weight: 600;
      font-size: 28px;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: #F6E8C8;
      text-shadow: 0 3px 20px rgba(0,0,0,0.8);
    }
    .sub {
      font-family: Cormorant, serif;
      font-style: italic;
      font-size: 22px;
      color: #E8D5A8;
      margin-top: 16px;
    }
    .ornament { margin: 22px 0; }
    .events-title {
      font-family: Cinzel, serif;
      font-weight: 600;
      letter-spacing: 0.38em;
      font-size: 14px;
      color: #E4C57A;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .day {
      font-family: Cinzel, serif;
      font-weight: 600;
      letter-spacing: 0.22em;
      font-size: 13px;
      color: #E4C57A;
      text-transform: uppercase;
      margin: 18px 0 8px;
    }
    .row {
      width: 430px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 16px;
      font-family: Cormorant, serif;
      font-size: 24px;
      color: #F6E8C8;
      padding: 5px 0;
      border-bottom: 1px solid rgba(228, 197, 122, 0.18);
    }
    .row .name { font-style: italic; text-align: left; }
    .row .time {
      font-family: Cinzel, serif;
      font-size: 12px;
      letter-spacing: 0.16em;
      color: #E4C57A;
      font-weight: 600;
      white-space: nowrap;
    }
    .venue-name {
      font-family: Cinzel, serif;
      font-weight: 600;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-size: 16px;
      color: #E4C57A;
      margin-bottom: 10px;
    }
    .venue-lines {
      font-family: Cormorant, serif;
      font-style: italic;
      font-size: 26px;
      line-height: 1.35;
      color: #F6E8C8;
      text-shadow: 0 2px 16px rgba(0,0,0,0.75);
    }
    .dua {
      font-family: Cormorant, serif;
      font-style: italic;
      font-size: 20px;
      color: #E8D5A8;
      margin-top: 28px;
      max-width: 420px;
    }
    .year {
      font-family: Cinzel, serif;
      letter-spacing: 0.4em;
      font-size: 12px;
      color: #E4C57A;
      margin-top: 18px;
    }
  </style>
</head>
<body>
  <section class="scene" id="frame">
    <div class="frame-outer"><div class="frame-inner"></div></div>
    <div class="corner tl"></div>
    <div class="corner tr"></div>
    <div class="corner bl"></div>
    <div class="corner br"></div>
  </section>

  <section class="scene" id="bismillah">
    <div class="scrim"></div>
    <div class="center">
      <div class="kicker">Bismillah</div>
      <svg class="ornament" width="180" height="18" viewBox="0 0 180 18" fill="none">
        <path d="M8 9H72" stroke="#E4C57A" stroke-width="1"/>
        <path d="M108 9H172" stroke="#E4C57A" stroke-width="1"/>
        <path d="M90 2.5 L97 9 L90 15.5 L83 9 Z" fill="#E4C57A"/>
      </svg>
      <div class="arabic" lang="ar">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
      <div class="english-soft">In the name of Allah, the Most Gracious, the Most Merciful</div>
    </div>
  </section>

  <section class="scene" id="invited">
    <div class="scrim"></div>
    <div class="center">
      <div class="kicker">Nikah Ceremony</div>
      <svg class="ornament" width="180" height="18" viewBox="0 0 180 18" fill="none">
        <path d="M8 9H72" stroke="#E4C57A" stroke-width="1"/>
        <path d="M108 9H172" stroke="#E4C57A" stroke-width="1"/>
        <path d="M90 2.5 L97 9 L90 15.5 L83 9 Z" fill="#E4C57A"/>
      </svg>
      <div class="invited-title">You Are Invited</div>
      <div class="sub">to celebrate the blessed union of</div>
    </div>
  </section>

  <section class="scene" id="names">
    <div class="scrim"></div>
    <div class="center">
      <div class="display">Arzoo Firdos</div>
      <div class="parent">D/O Haji Moulana Shakil Ahmed Habibi</div>
      <div class="weds">weds</div>
      <div class="display">Md Arman</div>
      <div class="parent">S/O Sattar Khan</div>
    </div>
  </section>

  <section class="scene" id="events">
    <div class="scrim"></div>
    <div class="center">
      <div class="events-title">The Celebrations</div>
      <svg class="ornament" width="180" height="18" viewBox="0 0 180 18" fill="none">
        <path d="M8 9H72" stroke="#E4C57A" stroke-width="1"/>
        <path d="M108 9H172" stroke="#E4C57A" stroke-width="1"/>
        <path d="M90 2.5 L97 9 L90 15.5 L83 9 Z" fill="#E4C57A"/>
      </svg>
      <div class="day">24 November</div>
      <div class="row"><span class="name">Milad-un-Nabi</span><span class="time">3:00 PM</span></div>
      <div class="row"><span class="name">Haldi</span><span class="time">5:00 PM</span></div>
      <div class="row"><span class="name">Mehendi</span><span class="time">9:00 PM</span></div>
      <div class="day">25 November</div>
      <div class="row"><span class="name">Nikah</span><span class="time">9:00 PM</span></div>
      <div class="day">29 November</div>
      <div class="row"><span class="name">Reception</span><span class="time">9:00 PM</span></div>
    </div>
  </section>

  <section class="scene" id="venue">
    <div class="scrim"></div>
    <div class="center">
      <div class="venue-name">At Own Residence</div>
      <div class="venue-lines">Dinemar Danga<br/>Garerdhar, Gondalpara</div>
      <svg class="ornament" width="180" height="18" viewBox="0 0 180 18" fill="none">
        <path d="M8 9H72" stroke="#E4C57A" stroke-width="1"/>
        <path d="M108 9H172" stroke="#E4C57A" stroke-width="1"/>
        <path d="M90 2.5 L97 9 L90 15.5 L83 9 Z" fill="#E4C57A"/>
      </svg>
      <div class="dua">We request the honour of your presence<br/>May Allah bless this union</div>
      <div class="year">2026</div>
    </div>
  </section>
</body>
</html>`;

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const page = await browser.newPage({
  viewport: { width: 720, height: 1280 },
  deviceScaleFactor: 2,
});
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(async () => {
  await document.fonts.ready;
});
await page.waitForTimeout(400);

for (const id of scenes) {
  await page.evaluate((sceneId) => {
    document.querySelectorAll(".scene").forEach((el) => el.classList.remove("on"));
    document.getElementById(sceneId)?.classList.add("on");
  }, id);
  await page.waitForTimeout(80);
  await page.screenshot({
    path: `${OUT}/${id}.png`,
    omitBackground: true,
  });
  console.log("wrote", id);
}

await browser.close();
console.log("done");

"use client";

import { Fragment, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { Button } from "./Button";
import { PenNote, PenStroke } from "./Pen";

/** Horizontal nudge per row, so the wall reads as a collage and not a table. */
const OFFSETS = ["-4vw", "6vw", "0", "-9vw", "3vw"];

/**
 * A wall of agreeable phrases. A green pen crosses them out one by one and
 * leaves the headline standing.
 *
 * The switch flips the scene: on YES the cross-outs lift, the wall lights up
 * and the headline is the one that gets struck. NO, the default, is Krevon.
 */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const [honest, setHonest] = useState(true);
  const firstRun = useRef(true);
  const running = useRef<gsap.core.Timeline | null>(null);
  const { hero } = home;

  const { contextSafe } = useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const phrases = gsap.utils.toArray<HTMLElement>("[data-yes]");
      const strikes = phrases.map((phrase) => phrase.querySelector(".strike"));
      const count = phrases.length;
      // A fixed, scattered order: same on every load, never left to right.
      const order = strikes.map((_, i) => strikes[(i * 7 + 3) % count]!);
      const headStrike = "[data-head-strike]";

      if (reduced) {
        gsap.set(strikes, { scaleX: honest ? 1 : 0 });
        gsap.set(headStrike, { scaleX: honest ? 0 : 1 });
        return;
      }

      // A quick second flip must not fight the first one.
      running.current?.kill();
      const tl = gsap.timeline({ delay: firstRun.current ? 0.5 : 0 });
      running.current = tl;
      if (honest) {
        tl.to(headStrike, { scaleX: 0, duration: 0.25, ease: "power2.in" });
        order.forEach((strike, i) => {
          tl.to(strike, { scaleX: 1, duration: 0.3, ease: "power2.out" }, (firstRun.current ? 0 : 0.2) + i * (firstRun.current ? 0.14 : 0.05));
        });
      } else {
        tl.to(strikes, { scaleX: 0, duration: 0.25, ease: "power2.in", stagger: 0.02 }).to(
          headStrike,
          { scaleX: 1, duration: 0.45, ease: "power2.out" },
          ">-0.05"
        );
      }
      firstRun.current = false;
    },
    { scope: rootRef, dependencies: [honest] }
  );

  // Hovering a phrase crosses it out again (NO mode only).
  const redraw = contextSafe((strike: Element | null) => {
    if (!honest || !strike) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.timeline().fromTo(strike, { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.out", overwrite: true });
  });

  return (
    <section ref={rootRef} className="relative flex min-h-svh flex-col overflow-hidden bg-black pt-18 md:pt-22">
      <div className="shell flex items-end justify-between gap-6 pt-6 md:pt-8">
        <p className="eyebrow text-cream/75">{hero.wallLabel}</p>
        <PenNote className="hidden md:inline-block" tilt={-4}>
          {hero.wallNote}
        </PenNote>
      </div>

      <div className="flex flex-1 flex-col justify-center py-5">
        {hero.wall.map((row, r) => (
          <div
            key={r}
            className={`display flex gap-x-[0.4em] whitespace-nowrap px-5 text-[min(20vw,8svh)] md:px-10 md:text-[clamp(3.1rem,min(8.8vw,11.8svh),10.5rem)] xl:px-16 ${
              r === hero.headlineRow ? "flex-wrap md:flex-nowrap" : ""
            }`}
            style={{ marginLeft: r === hero.headlineRow ? 0 : OFFSETS[r % OFFSETS.length] }}
          >
            {r === hero.headlineRow ? (
              <h1 className={`w-full transition-colors duration-300 md:w-auto ${honest ? "text-cream" : "text-cream/45"}`}>
                {/* Each part carries its own stroke, so the cross-out stays on the words when the line breaks. */}
                {hero.headline.map((part, i) => (
                  <Fragment key={part}>
                    <span className="relative inline-block">
                      {part}
                      <span
                        data-head-strike
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[52%] h-[0.06em] bg-green"
                        style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
                      />
                    </span>
                    {i === 0 ? (
                      <>
                        <span className="hidden md:inline"> </span>
                        <br className="md:hidden" />
                      </>
                    ) : null}
                  </Fragment>
                ))}
              </h1>
            ) : null}
            {row.map((phrase) => (
              <span
                key={phrase}
                data-yes
                aria-hidden="true"
                onPointerEnter={(event) => redraw(event.currentTarget.querySelector(".strike"))}
                className={`relative transition-colors duration-300 ${honest ? "text-cream/45" : "text-cream"}`}
              >
                {phrase}
                <span className="strike absolute -inset-x-[2%] top-[52%] h-[0.06em] bg-green" />
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="shell grid grid-cols-1 gap-7 pb-8 md:grid-cols-12 md:items-end md:pb-10">
        <div className="md:col-span-7">
          <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span id="switch-label" className="eyebrow text-cream/75">
              {hero.switch.label}
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={!honest}
              aria-labelledby="switch-label"
              onClick={() => setHonest((value) => !value)}
              className="eyebrow flex cursor-pointer border border-cream/40 text-sm"
            >
              <span className={`px-4 py-2 transition-colors duration-200 ${honest ? "text-cream/75" : "bg-cream text-black"}`}>
                {hero.switch.yes}
              </span>
              <span className={`px-4 py-2 transition-colors duration-200 ${honest ? "bg-green text-black" : "text-cream/75"}`}>
                {hero.switch.no}
              </span>
            </button>
            <span className="flex items-center gap-2 text-green">
              <PenStroke shape="arrow" className="h-5 w-10 -scale-x-100" delay={2.2} weight={2.5} />
              <PenNote tilt={-3}>{honest ? hero.switch.hint : hero.switch.yesNote}</PenNote>
            </span>
          </div>
          <p aria-live="polite" className="max-w-xl text-pretty text-lg leading-snug text-cream md:text-xl">
            {honest ? hero.body : hero.switch.yesBody}
          </p>
        </div>
        <div className="flex md:col-span-5 md:justify-end">
          <Button href={site.cta.href} variant="green" magnetic className="w-full sm:w-auto">
            {site.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

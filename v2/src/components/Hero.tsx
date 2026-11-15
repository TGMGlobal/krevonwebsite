"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { Button } from "./Button";

/** Horizontal nudge per row, so the wall reads as a collage and not a table. */
const OFFSETS = ["-4vw", "6vw", "0", "-9vw", "3vw"];

/**
 * A wall of agreeable phrases. A green pen crosses them out one by one and
 * leaves the headline standing. Hovering a phrase crosses it out again.
 */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const { hero } = home;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const phrases = gsap.utils.toArray<HTMLElement>("[data-yes]");
        const count = phrases.length;
        // A fixed, scattered order: same on every load, never left to right.
        const order = phrases.map((_, i) => phrases[(i * 7 + 3) % count]!);

        const tl = gsap.timeline({ delay: 0.5 });
        order.forEach((phrase, i) => {
          tl.to(phrase.querySelector(".strike"), { scaleX: 1, duration: 0.3, ease: "power2.out" }, i * 0.14);
        });

        const redraw = (event: Event) => {
          const strike = (event.currentTarget as HTMLElement).querySelector(".strike");
          gsap.timeline().fromTo(strike, { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.out" });
        };
        phrases.forEach((phrase) => phrase.addEventListener("pointerenter", redraw));

        const drift = gsap.timeline({
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });
        drift.to("[data-wall-row]", { xPercent: (i) => (i % 2 === 0 ? -4 : 4), ease: "none" });

        return () => phrases.forEach((phrase) => phrase.removeEventListener("pointerenter", redraw));
      });
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="relative flex min-h-svh flex-col overflow-hidden bg-black pt-18 md:pt-22">
      <div className="flex flex-1 flex-col justify-center py-6">
        {hero.wall.map((row, r) => (
          <div
            key={r}
            data-wall-row
            className={`display flex gap-x-[0.4em] whitespace-nowrap px-5 text-[21vw] md:px-10 md:text-[clamp(3.1rem,10.4vw,10.5rem)] xl:px-16 ${
              r === hero.headlineRow ? "flex-wrap md:flex-nowrap" : ""
            }`}
            style={{ marginLeft: r === hero.headlineRow ? 0 : OFFSETS[r % OFFSETS.length] }}
          >
            {r === hero.headlineRow ? (
              <h1 className="w-full text-cream md:w-auto">
                {hero.headline[0]} <br className="md:hidden" />
                {hero.headline[1]}
              </h1>
            ) : null}
            {row.map((phrase) => (
              <span key={phrase} data-yes aria-hidden="true" className="relative text-cream/20">
                {phrase}
                <span className="strike absolute -inset-x-[2%] top-[52%] h-[0.06em] bg-green" />
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="shell grid grid-cols-1 gap-6 pb-8 md:grid-cols-12 md:items-end md:pb-10">
        <div className="md:col-span-6">
          <p className="eyebrow mb-3 text-green">{site.tagline}</p>
          <p className="max-w-md text-pretty text-lg leading-snug text-cream md:text-xl">{hero.body}</p>
        </div>
        <div className="flex md:col-span-6 md:justify-end">
          <Button href={site.cta.href} variant="green" magnetic className="w-full sm:w-auto">
            {site.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

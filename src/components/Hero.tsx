"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { RotatingBadge } from "./RotatingBadge";
import { LogoMark } from "./LogoMark";

const WORDS = [
  { text: "Most", line: 1 },
  { text: "agencies", line: 1 },
  { text: "tell", line: 1 },
  { text: "you", line: 1 },
  { text: "what", line: 2 },
  { text: "you", line: 2 },
  { text: "want", line: 2 },
  { text: "to", line: 2 },
  { text: "hear.", line: 2 },
  { text: "We’d", line: 3 },
  { text: "rather", line: 3 },
  { text: "tell", line: 3 },
  { text: "you", line: 3 },
  { text: "what’s", line: 3 },
  { text: "true.", line: 3 },
];

// Hand-tuned, deterministic — not Math.random() (would mismatch on re-render / SSR).
const SCATTER = [
  { x: -140, y: -70, r: -22 },
  { x: 90, y: 50, r: 16 },
  { x: -60, y: 100, r: -10 },
  { x: 150, y: -40, r: 24 },
  { x: 110, y: 80, r: -18 },
  { x: -100, y: -55, r: 12 },
  { x: 70, y: 110, r: -26 },
  { x: -150, y: 25, r: 20 },
  { x: 45, y: -90, r: -12 },
  { x: -80, y: 65, r: 18 },
  { x: 120, y: -45, r: -24 },
  { x: -35, y: 105, r: 10 },
  { x: 160, y: 35, r: -20 },
  { x: -110, y: -80, r: 26 },
  { x: 25, y: 95, r: -14 },
];

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const words = gsap.utils.toArray<HTMLElement>("[data-hero-word]");
      const rest = gsap.utils.toArray<HTMLElement>("[data-hero-fade]");
      const mark = rootRef.current?.querySelector<HTMLElement>("[data-hero-mark]") ?? undefined;

      if (reduced) {
        gsap.set(words, { clearProps: "all" });
        gsap.set(rest, { clearProps: "all" });
        if (mark) gsap.set(mark, { clearProps: "all" });
        return;
      }

      words.forEach((word, i) => {
        const s = SCATTER[i % SCATTER.length]!;
        gsap.set(word, { x: s.x, y: s.y, rotation: s.r, autoAlpha: 0, scale: 0.9 });
      });
      gsap.set(rest, { autoAlpha: 0, y: 16 });
      if (mark) gsap.set(mark, { rotation: -55, scale: 0.85, autoAlpha: 0 });

      // Chaos snaps into view on load — independent of scroll.
      gsap.to(words, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.025,
        ease: "back.out(1.4)",
      });
      if (mark) gsap.to(mark, { autoAlpha: 1, duration: 1, delay: 0.2 });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=110%",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(words, { x: 0, y: 0, rotation: 0, autoAlpha: 1, stagger: 0.03, ease: "power2.out" }, 0)
          .to(mark ?? [], { rotation: -8, scale: 1, autoAlpha: 1, ease: "power2.out" }, 0)
          .to(rest, { autoAlpha: 1, y: 0, stagger: 0.08, ease: "power2.out" }, 0.55);

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.to(words, { x: 0, y: 0, rotation: 0, autoAlpha: 1, stagger: 0.025, duration: 0.7 })
          .to(mark ?? [], { rotation: -8, scale: 1, autoAlpha: 1, duration: 0.7 }, 0)
          .to(rest, { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.6 }, "-=0.3");
      });

      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: rootRef }
  );

  const lines: Record<number, typeof WORDS> = { 1: [], 2: [], 3: [] };
  WORDS.forEach((w) => lines[w.line]!.push(w));

  return (
    <section
      id="top"
      ref={rootRef}
      className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-paper px-5 pb-8 pt-28 md:px-10 md:pb-10 md:pt-32"
    >
      <div
        data-hero-mark
        className="pointer-events-none absolute -right-10 -top-16 h-[45vw] w-[45vw] max-h-[420px] max-w-[420px] text-olive/15 md:-right-16 md:-top-20"
      >
        <LogoMark className="h-full w-full" />
      </div>

      <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft md:text-xs">
        <span>Krevon Studio — Straight Talk. Built to Lead.</span>
        <span className="hidden md:inline">Strategic · Authentic · Impact&#8209;Driven</span>
      </div>

      <div className="relative flex flex-1 flex-col justify-center py-10 md:py-16">
        <h1 className="font-display text-[11.5vw] font-normal leading-[1.05] tracking-[-0.02em] text-ink md:leading-[1.02] md:text-[6.2vw]">
          <span className="sr-only">
            Krevon Studio — independent creative, strategy and digital
            agency. Most agencies tell you what you want to hear; we&rsquo;d
            rather tell you what&rsquo;s true.
          </span>
          <span aria-hidden="true">
            {[1, 2, 3].map((lineNum) => (
              <span key={lineNum} className="block">
                {lines[lineNum]!.map((w, i) => {
                  const globalIndex = WORDS.indexOf(w);
                  return (
                    <span
                      key={globalIndex}
                      data-hero-word
                      className={`mr-[0.22em] inline-block will-change-transform ${
                        lineNum === 3 ? "italic text-olive" : ""
                      }`}
                    >
                      {w.text}
                    </span>
                  );
                })}
              </span>
            ))}
          </span>
        </h1>
      </div>

      <div data-hero-fade className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md text-pretty text-base leading-relaxed text-ink-soft md:text-lg">
          Agencies that protect the relationship tell clients what they want
          to hear. Krevon protects the outcome — so your brand can lead its
          category instead of just competing in it.
        </p>

        <div className="flex items-center justify-between gap-6 md:justify-end">
          <a
            href="#work"
            className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-olive group-hover:bg-olive group-hover:text-paper md:h-16 md:w-16">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1v14M8 15l6-6M8 15L2 9" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
            <span className="hidden sm:inline">Scroll the work</span>
          </a>

          <RotatingBadge className="h-20 w-20 text-ink/70 md:h-24 md:w-24" />
        </div>
      </div>
    </section>
  );
}

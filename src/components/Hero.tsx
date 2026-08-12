"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { RotatingBadge } from "./RotatingBadge";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const lines = gsap.utils.toArray<HTMLElement>("[data-hero-line]");
      const rest = gsap.utils.toArray<HTMLElement>("[data-hero-fade]");

      if (reduced) {
        gsap.set(lines, { clearProps: "all" });
        gsap.set(rest, { clearProps: "all" });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        lines,
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, stagger: 0.12 }
      ).fromTo(
        rest,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 },
        "-=0.5"
      );
    },
    { scope: rootRef }
  );

  return (
    <section
      id="top"
      ref={rootRef}
      className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-paper px-5 pb-8 pt-28 md:px-10 md:pb-10 md:pt-32"
    >
      <div data-hero-fade className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft md:text-xs">
        <span>Krevon Studio — Straight Talk. Built to Lead.</span>
        <span className="hidden md:inline">Strategic · Authentic · Impact&#8209;Driven</span>
      </div>

      <div className="flex flex-1 flex-col justify-center py-10 md:py-16">
        <h1 className="font-display text-[11.5vw] font-normal leading-[0.94] tracking-[-0.02em] text-ink md:text-[6.2vw]">
          <span className="sr-only">
            Krevon Studio — independent creative, strategy and digital
            agency. Most agencies tell you what you want to hear; we&rsquo;d
            rather tell you what&rsquo;s true.
          </span>
          <span className="block overflow-hidden" aria-hidden="true">
            <span data-hero-line className="block">
              Most agencies tell you
            </span>
          </span>
          <span className="block overflow-hidden" aria-hidden="true">
            <span data-hero-line className="block">
              what you want to hear.
            </span>
          </span>
          <span className="block overflow-hidden" aria-hidden="true">
            <span data-hero-line className="block italic text-olive">
              We&rsquo;d rather tell you what&rsquo;s true.
            </span>
          </span>
        </h1>
      </div>

      <div data-hero-fade className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
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

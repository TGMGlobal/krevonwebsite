"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { Button } from "./Button";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const { hero } = home;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // The headline is readable from first paint. Motion only adds emphasis.
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from("[data-hero-underline]", { scaleX: 0, duration: 0.7, delay: 0.3 })
          .from("[data-hero-rule]", { scaleX: 0, duration: 1.1 }, "-=0.35");

        const drift = gsap.timeline({
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });
        drift.to("[data-hero-headline]", { yPercent: -10, ease: "none" });
      });
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-black pt-18 md:pt-22">
      <div className="shell flex min-h-[calc(100svh-4.5rem)] flex-col justify-between gap-10 pb-10 pt-8 md:min-h-[calc(100svh-5.5rem)] md:gap-16 md:pb-12 md:pt-16">
        <div className="eyebrow flex items-center justify-between gap-6 text-cream/75">
          <span>{hero.eyebrow}</span>
          <span className="hidden sm:inline">{site.locations}</span>
        </div>

        <h1
          data-hero-headline
          className="display text-balance text-[clamp(3.25rem,8vw,7.75rem)] text-cream will-change-transform"
        >
          {hero.headline.before}
          <span className="relative inline-block text-green">
            {hero.headline.accent}
            <span
              data-hero-underline
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-[0.02em] h-[0.06em] origin-left bg-green"
            />
          </span>
          {hero.headline.after}
        </h1>

        <div>
          <div data-hero-rule aria-hidden="true" className="h-px origin-left bg-cream/30" />
          <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-6 xl:col-span-5">
              <p className="eyebrow mb-4 text-green">{site.tagline}</p>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-cream/85 md:text-lg">{hero.body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-6 md:flex-col md:items-end lg:flex-row lg:items-center lg:justify-end xl:col-span-7">
              <Button href={hero.primaryCta.href} variant="green" magnetic>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

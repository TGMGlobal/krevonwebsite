"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const QUOTE =
  "If it doesn't solve a problem, have a reason, and create clarity — it isn't Krevon.";

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!quoteRef.current) return;

      const words = quoteRef.current.querySelectorAll("[data-word]");

      gsap.set(words, { opacity: 0.18 });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(words, {
          opacity: 1,
          stagger: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.to(words, {
          opacity: 1,
          stagger: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: 0.5,
          },
        });
      });

      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="bg-paper px-5 py-24 md:px-10 md:py-40"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="flex items-start gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint md:col-span-3">
          <span>02</span>
          <span>The Filter</span>
        </div>

        <div className="md:col-span-9">
          <p
            ref={quoteRef}
            className="text-balance font-display text-4xl italic leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            {QUOTE.split(" ").map((word, i) => (
              <span key={i} data-word className="mr-[0.22em] inline-block">
                {word}
              </span>
            ))}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2">
            <p className="text-pretty text-base leading-relaxed text-ink-soft md:text-lg">
              Trust is earned, not bought. Attention can be bought with
              budget — trust can&rsquo;t. Every piece of work, including the
              logo and every page of this website, gets checked against
              that filter before it ships.
            </p>
            <p className="text-pretty text-base leading-relaxed text-ink-soft md:text-lg">
              An idea only matters if it changes something — perception,
              behaviour, or understanding. A clever idea that changes
              nothing is decoration. We use trends and tools; we don&rsquo;t
              serve them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

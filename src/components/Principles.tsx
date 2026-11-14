"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { home } from "@/content/home";

export function Principles() {
  const rootRef = useRef<HTMLElement>(null);
  const copy = home.principles;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // The statement brightens word by word as it is scrolled through.
        const statement = gsap.timeline({
          scrollTrigger: {
            trigger: "[data-statement]",
            start: "top 85%",
            end: "bottom 45%",
            scrub: 0.5,
          },
        });
        // 0.45 keeps the dimmed words above the 3:1 contrast needed for large text.
        statement.from("[data-word]", { autoAlpha: 0.45, stagger: 0.4, ease: "none" });

        gsap.utils.toArray<HTMLElement>("[data-principle]").forEach((item) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: item, start: "top 88%", once: true },
          });
          tl.from(item, { y: 28, autoAlpha: 0, duration: 0.8, ease: "power3.out" }).from(
            item.querySelector("[data-principle-rule]"),
            { scaleX: 0, duration: 0.9, ease: "power3.out" },
            0
          );
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="border-t border-cream/15 bg-black">
      <div className="shell py-20 md:py-32">
        <p className="eyebrow mb-8 text-green">{copy.eyebrow}</p>

        <h2 data-statement className="display max-w-[22ch] text-5xl text-cream md:text-7xl xl:text-8xl">
          {copy.statement.split(" ").map((word, i) => (
            <span key={i} data-word className="mr-[0.22em] inline-block">
              {word}
            </span>
          ))}
        </h2>

        <ol className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-24 md:grid-cols-2 md:gap-y-16 xl:ml-[16.666%]">
          {copy.items.map((item, i) => (
            <li key={item.title} data-principle>
              <div data-principle-rule aria-hidden="true" className="h-px origin-left bg-green" />
              <div className="flex gap-5 pt-6">
                <span className="display text-4xl text-green">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="display text-3xl text-cream md:text-4xl">{item.title}</h3>
                  <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-cream/80">{item.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

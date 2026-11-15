"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

/** One thought, set large, that brightens word by word as it is scrolled through. */
export function Statement({ text }: { text: string }) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: rootRef.current, start: "top 80%", end: "center 45%", scrub: 0.5 },
        });
        // 0.45 keeps dimmed words above the 3:1 contrast needed for large text.
        tl.from("[data-word]", { autoAlpha: 0.45, stagger: 0.4, ease: "none" });
      });
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="bg-black">
      <div className="shell py-28 md:py-48">
        <p className="display max-w-[20ch] text-[clamp(2.75rem,7.2vw,7.5rem)] text-cream md:ml-[8.333%]">
          {text.split(" ").map((word, i) => (
            <span key={i} data-word className="mr-[0.22em] inline-block">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

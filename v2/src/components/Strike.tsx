"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

/**
 * A phrase that gets crossed out in green: the same pen as the homepage hero.
 * The line draws when the phrase scrolls into view (or straight away with
 * `immediate`). Screen readers hear it as deleted text.
 */
export function Strike({
  children,
  className = "",
  immediate = false,
}: {
  children: string;
  className?: string;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLModElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline(
          immediate ? { delay: 0.5 } : { scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } }
        );
        tl.to(".strike", { scaleX: 1, duration: 0.45, ease: "power2.out" });
      });
    },
    { scope: ref }
  );

  return (
    <del ref={ref} className={`relative inline-block no-underline ${className}`}>
      {children}
      <span aria-hidden="true" className="strike absolute -inset-x-[2%] top-[52%] h-[0.07em] bg-green" />
    </del>
  );
}

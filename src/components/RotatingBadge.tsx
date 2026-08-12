"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function RotatingBadge({
  text = "STRAIGHT TALK · BUILT TO LEAD · STRAIGHT TALK · BUILT TO LEAD · ",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.to(ref.current, {
        rotation: 360,
        duration: 18,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    },
    { scope: ref }
  );

  const pathId = "badge-circle-path";

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <path id={pathId} d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
      </defs>
      <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeOpacity="0.25" />
      <text fontSize="11.5" letterSpacing="1" fill="currentColor" className="font-mono uppercase">
        <textPath href={`#${pathId}`} startOffset="0%">
          {text}
        </textPath>
      </text>
      <circle cx="100" cy="100" r="6" fill="currentColor" />
    </svg>
  );
}

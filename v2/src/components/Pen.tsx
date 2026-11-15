"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

/**
 * The green pen: hand-drawn strokes and handwritten notes.
 * Strokes draw themselves when they scroll into view. All of it is
 * decoration around real content, so it is hidden from screen readers
 * unless a note carries meaning (see PenNote).
 */

const SHAPES = {
  circle: {
    viewBox: "0 0 200 100",
    d: "M 14 56 C 8 24, 46 6, 100 6 C 154 6, 194 24, 192 52 C 190 82, 148 96, 98 95 C 46 94, 8 80, 12 46 C 15 30, 32 16, 56 12",
  },
  underline: {
    viewBox: "0 0 200 14",
    d: "M 3 8 C 40 3, 72 12, 110 6 S 172 4, 197 9",
  },
  tick: {
    viewBox: "0 0 64 52",
    d: "M 6 30 L 22 46 L 58 6",
  },
  arrow: {
    viewBox: "0 0 120 48",
    d: "M 6 42 C 28 12, 66 6, 108 22 M 92 8 L 110 23 L 90 34",
  },
} as const;

export type PenShape = keyof typeof SHAPES;

/** One drawn stroke, sized by its className. */
export function PenStroke({
  shape,
  className = "",
  delay = 0,
  weight = 3,
}: {
  shape: PenShape;
  className?: string;
  delay?: number;
  weight?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const s = SHAPES[shape];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({
          delay,
          scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
        });
        tl.to(".pen-path", { strokeDashoffset: 0, duration: shape === "circle" ? 0.9 : 0.5, ease: "power2.inOut" });
      });
    },
    { scope: ref }
  );

  return (
    <svg
      ref={ref}
      viewBox={s.viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none overflow-visible ${className}`}
    >
      <path d={s.d} pathLength={1} className="pen-path" stroke="currentColor" strokeWidth={weight} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Wraps its content in a hand-drawn circle. */
export function PenCircle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <PenStroke shape="circle" className="absolute -inset-x-[8%] -inset-y-[14%] h-[128%] w-[116%] text-green" />
    </span>
  );
}

/**
 * A handwritten margin note. Green on dark backgrounds, black on light ones
 * (green text on off-white is too faint to read).
 */
export function PenNote({
  children,
  className = "",
  on = "dark",
  tilt = -3,
}: {
  children: ReactNode;
  className?: string;
  on?: "dark" | "light";
  tilt?: number;
}) {
  return (
    <span
      className={`pen inline-block text-[1.7rem] md:text-4xl ${on === "dark" ? "text-green" : "text-black"} ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {children}
    </span>
  );
}

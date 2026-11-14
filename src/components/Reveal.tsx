"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

/**
 * Fades and lifts its content in when it scrolls into view.
 * With `stagger`, each direct child animates in turn.
 * Content is visible by default: the hidden start state is only applied by
 * GSAP, and only when the visitor has not asked for reduced motion.
 * Use below the fold only.
 */
export function Reveal({
  children,
  className = "",
  stagger = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  as?: "div" | "ul" | "ol" | "section";
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const targets = stagger ? Array.from(el.children) : el;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
        tl.from(targets, {
          y: 28,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: stagger ? 0.09 : 0,
        });
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  );
}

"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

/** A link that leans slightly towards the cursor. Inactive on touch and with reduced motion. */
export function MagneticButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(`${MOTION_OK} and (pointer: fine)`, () => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });

        const handleMove = (e: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          xTo((e.clientX - rect.left - rect.width / 2) * 0.2);
          yTo((e.clientY - rect.top - rect.height / 2) * 0.2);
        };
        const handleLeave = () => {
          xTo(0);
          yTo(0);
        };

        el.addEventListener("pointermove", handleMove);
        el.addEventListener("pointerleave", handleLeave);

        return () => {
          el.removeEventListener("pointermove", handleMove);
          el.removeEventListener("pointerleave", handleLeave);
        };
      });
    },
    { scope: ref }
  );

  return (
    <Link ref={ref} href={href} className={className}>
      {children}
    </Link>
  );
}

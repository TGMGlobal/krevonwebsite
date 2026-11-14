import type { ReactNode } from "react";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";

type Variant = "green" | "black" | "outline" | "outline-dark";

const BASE =
  "group inline-flex items-center justify-center gap-3 whitespace-nowrap px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-200";

const VARIANTS: Record<Variant, string> = {
  /** Primary CTA on black */
  green: "bg-green text-black hover:bg-cream",
  /** CTA on green or off-white */
  black: "bg-black text-cream hover:text-green",
  /** Secondary on black */
  outline: "border border-cream/40 text-cream hover:border-green hover:text-green",
  /** Secondary on off-white */
  "outline-dark": "border border-black/40 text-black hover:bg-black hover:text-offwhite",
};

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
    >
      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "green",
  magnetic = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  magnetic?: boolean;
  className?: string;
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;
  const inner = (
    <>
      {children}
      <Arrow />
    </>
  );

  if (magnetic) {
    return (
      <MagneticButton href={href} className={classes}>
        {inner}
      </MagneticButton>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

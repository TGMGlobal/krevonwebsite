import type { ReactNode } from "react";
import { Strike } from "./Strike";

/** Top of an inner page: label, large heading, one short line. */
export function PageHeader({
  eyebrow,
  heading,
  body,
  struck,
  children,
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  /** A comfortable line shown crossed out above the heading. */
  struck?: string;
  children?: ReactNode;
}) {
  return (
    <header className="bg-black pt-18 md:pt-22">
      <div className="shell pb-14 pt-16 md:pb-20 md:pt-28">
        <p className="eyebrow mb-6 text-green">{eyebrow}</p>
        {struck ? (
          <p className="display mb-2 text-[clamp(1.75rem,5vw,5rem)] text-cream/45">
            <Strike immediate>{struck}</Strike>
          </p>
        ) : null}
        <h1 className="display max-w-[12ch] text-balance text-[clamp(3.5rem,11vw,11.5rem)] text-cream">{heading}</h1>
        {body ? (
          <p className="mt-8 max-w-xl text-pretty text-lg leading-snug text-cream/90 md:ml-[33.333%] md:text-2xl md:leading-snug">
            {body}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}

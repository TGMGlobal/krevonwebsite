import type { ReactNode } from "react";

/** Top of an inner page: label, large heading, one short line. */
export function PageHeader({
  eyebrow,
  heading,
  body,
  children,
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <header className="bg-black pt-18 md:pt-22">
      <div className="shell pb-14 pt-16 md:pb-20 md:pt-28">
        <p className="eyebrow mb-6 text-green">{eyebrow}</p>
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

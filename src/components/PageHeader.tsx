import type { ReactNode } from "react";

/** Top of every inner page: label, large heading, intro line. */
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
      <div className="shell pb-14 pt-14 md:pb-20 md:pt-24">
        <p className="eyebrow mb-6 text-green">{eyebrow}</p>
        <h1 className="display max-w-[16ch] text-balance text-[clamp(3rem,9vw,8.5rem)] text-cream">{heading}</h1>
        {body ? (
          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-cream/85 md:text-xl md:leading-relaxed">
            {body}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}

import { MagneticButton } from "./MagneticButton";
import { RotatingBadge } from "./RotatingBadge";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="grain relative overflow-hidden bg-olive px-5 py-24 text-paper md:px-10 md:py-36"
    >
      <div className="flex flex-col gap-14 md:flex-row md:items-end md:justify-between md:gap-6">
        <div className="max-w-2xl">
          <span className="mb-6 block font-mono text-xs uppercase tracking-[0.2em] text-paper/70">
            05 / Start a brand
          </span>
          <h2 className="text-balance font-display text-5xl italic leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            We build the runway.
            <br />
            You take flight.
          </h2>
        </div>

        <RotatingBadge className="hidden h-28 w-28 shrink-0 text-paper/60 md:block" />
      </div>

      <div className="mt-16 flex flex-col items-start gap-6 border-t border-line-dark pt-10 md:mt-24 md:flex-row md:items-center md:justify-between md:pt-12">
        <MagneticButton
          href="mailto:hello@krevonstudio.com"
          className="inline-block font-display text-[10.5vw] italic leading-none tracking-tight underline decoration-1 underline-offset-[0.12em] transition-colors hover:text-ink sm:text-6xl md:text-7xl"
        >
          hello@krevonstudio.com
        </MagneticButton>

        <p className="max-w-xs text-pretty text-sm leading-relaxed text-paper/80 md:text-right">
          No decks, no jargon. Send a note and we&rsquo;ll reply like humans —
          usually within a day or two.
        </p>
      </div>
    </section>
  );
}

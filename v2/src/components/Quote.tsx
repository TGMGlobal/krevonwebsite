import { home } from "@/content/home";
import { Reveal } from "./Reveal";

type Tone = "green" | "light";

const TONES: Record<Tone, { section: string; muted: string; rule: string }> = {
  green: { section: "bg-green text-black", muted: "text-black", rule: "border-black" },
  light: { section: "bg-offwhite text-black", muted: "text-black/70", rule: "border-black" },
};

/**
 * One client quote filling a screen: the opening words set large, the rest
 * of the sentence and the attribution on a single line beneath.
 * `mirrored` flips the layout so the two quotes on the page read as a pair.
 */
export function Quote({
  opening,
  rest,
  attribution,
  tone,
  mirrored = false,
  note,
}: {
  opening: string;
  rest: string;
  attribution: string;
  tone: Tone;
  mirrored?: boolean;
  note?: string;
}) {
  const t = TONES[tone];

  return (
    <section className={`on-light ${t.section}`}>
      <figure className="shell flex min-h-[86svh] flex-col justify-between gap-14 py-16 md:py-24">
        <p className={`eyebrow ${t.muted} ${mirrored ? "md:text-right" : ""}`}>{home.quotes.eyebrow}</p>

        <blockquote className={mirrored ? "md:ml-auto md:text-right" : ""}>
          <p className="display max-w-[13ch] text-balance text-[clamp(3.25rem,10vw,10.5rem)]">&ldquo;{opening}</p>
        </blockquote>

        <Reveal
          className={`grid grid-cols-1 gap-6 border-t-2 pt-6 md:grid-cols-12 md:gap-8 md:pt-8 ${t.rule}`}
        >
          <blockquote className={`md:col-span-7 ${mirrored ? "md:order-1" : "md:order-2 md:col-start-6"}`}>
            <p className="text-pretty text-xl font-medium leading-snug md:text-2xl md:leading-snug">{rest}&rdquo;</p>
          </blockquote>
          <figcaption
            className={`eyebrow flex flex-col gap-2 md:col-span-4 ${
              mirrored ? "md:order-2 md:col-start-9 md:text-right" : "md:order-1"
            }`}
          >
            <span>{attribution}</span>
            {note ? <span className={`normal-case tracking-normal ${t.muted}`}>{note}</span> : null}
          </figcaption>
        </Reveal>
      </figure>
    </section>
  );
}

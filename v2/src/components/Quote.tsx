import { home } from "@/content/home";
import { PenNote, PenStroke } from "./Pen";
import { Reveal } from "./Reveal";

/**
 * A client quote as a paper note pinned to the page at a slight angle.
 * The whole quote sits in one place, in sentence case, with the telling
 * phrase run over with a highlighter and one handwritten note beside it.
 */
export function Quote({
  before,
  highlight,
  after,
  attribution,
  penNote,
  tone,
  side = "left",
  footnote,
}: {
  before: string;
  highlight: string;
  after: string;
  attribution: string;
  penNote: string;
  /** Background the note is pinned to. */
  tone: "green" | "black";
  side?: "left" | "right";
  footnote?: string;
}) {
  const onGreen = tone === "green";

  return (
    <section className={onGreen ? "on-light bg-green text-black" : "bg-black text-cream"}>
      <div className="shell py-20 md:py-32">
        <p className={`eyebrow mb-10 md:mb-14 ${onGreen ? "text-black" : "text-green"} ${side === "right" ? "md:text-right" : ""}`}>
          {home.quotes.eyebrow}
        </p>

        <div className={`flex flex-col gap-8 md:flex-row md:items-end md:gap-10 ${side === "right" ? "md:flex-row-reverse" : ""}`}>
          <Reveal className="md:w-8/12">
            <figure
              className="on-light relative bg-offwhite p-7 text-black shadow-[10px_10px_0_0_#000000] md:p-12"
              style={{ transform: `rotate(${side === "right" ? 1.2 : -1.2}deg)` }}
            >
              {/* the pin */}
              <span aria-hidden="true" className="absolute left-1/2 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-black" />
              <blockquote>
                <p className="text-pretty text-2xl font-semibold leading-snug md:text-4xl md:leading-[1.25]">
                  &ldquo;{before}
                  <mark className="bg-green box-decoration-clone px-1 text-black">{highlight}</mark>
                  {after}&rdquo;
                </p>
              </blockquote>
              <figcaption className="eyebrow mt-7 text-black/70">{attribution}</figcaption>
            </figure>
          </Reveal>

          <div className={`flex items-center gap-3 md:w-4/12 md:pb-10 ${side === "right" ? "md:justify-end" : ""}`}>
            <PenStroke
              shape="arrow"
              weight={2.5}
              className={`h-7 w-14 shrink-0 ${onGreen ? "text-black" : "text-green"} ${side === "right" ? "" : "-scale-x-100"} ${
                side === "right" ? "md:order-2" : ""
              }`}
            />
            <PenNote on={onGreen ? "light" : "dark"} tilt={side === "right" ? 3 : -4} className="md:text-4xl">
              {penNote}
            </PenNote>
          </div>
        </div>

        {footnote ? <p className={`mt-12 text-sm ${onGreen ? "font-medium" : "text-cream/75"}`}>{footnote}</p> : null}
      </div>
    </section>
  );
}

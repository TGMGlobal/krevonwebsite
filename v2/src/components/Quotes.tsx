import { home } from "@/content/home";
import { Reveal } from "./Reveal";

/** The one full-bleed green screen on the site. */
export function Quotes() {
  const { quotes } = home;

  return (
    <section className="on-light bg-green text-black">
      <div className="shell py-24 md:py-36">
        <h2 className="eyebrow mb-10 md:mb-14">{quotes.eyebrow}</h2>

        <figure>
          <blockquote>
            <p className="display max-w-[14ch] text-[clamp(3.25rem,10vw,10.5rem)]">&ldquo;{quotes.lead.opening}</p>
            <p className="mt-8 max-w-2xl text-pretty text-xl font-medium leading-snug md:ml-[33.333%] md:text-2xl md:leading-snug">
              {quotes.lead.rest}&rdquo;
            </p>
          </blockquote>
          <figcaption className="eyebrow mt-6 md:ml-[33.333%]">{quotes.lead.attribution}</figcaption>
        </figure>

        <Reveal className="mt-20 border-t-2 border-black pt-8 md:mt-28 md:w-7/12">
          <figure>
            <blockquote className="text-pretty text-lg font-medium leading-snug md:text-xl md:leading-snug">
              <p>&ldquo;{quotes.second.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="eyebrow mt-5">{quotes.second.attribution}</figcaption>
          </figure>
        </Reveal>

        <p className="mt-12 text-sm font-medium">{quotes.note}</p>
      </div>
    </section>
  );
}

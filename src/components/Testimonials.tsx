import { home } from "@/content/home";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const copy = home.testimonials;

  return (
    <section className="on-light bg-offwhite text-black">
      <div className="shell py-20 md:py-32">
        <div className="mb-14 md:mb-20">
          <p className="eyebrow mb-6 text-black/70">{copy.eyebrow}</p>
          <h2 className="display max-w-[18ch] text-balance text-5xl md:text-7xl">{copy.heading}</h2>
        </div>

        <div className="flex flex-col gap-14 md:gap-20">
          {copy.items.map((item, i) => (
            <Reveal key={item.attribution} className={i % 2 === 1 ? "md:ml-auto md:w-9/12 xl:w-7/12" : "md:w-10/12 xl:w-8/12"}>
              <figure className="border-l-4 border-black pl-6 md:pl-10">
                <blockquote className="text-pretty text-xl font-medium leading-snug md:text-3xl md:leading-snug">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="eyebrow mt-6 text-black/70">{item.attribution}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-14 text-sm text-black/70 md:mt-20">{copy.note}</p>
      </div>
    </section>
  );
}

import { home } from "@/content/home";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

/** Everything Krevon makes, as one running line. */
export function Capabilities() {
  const copy = home.capabilities;

  return (
    <section className="bg-black">
      <div className="shell py-24 md:py-36">
        <h2 className="eyebrow mb-8 text-green md:mb-12">{copy.eyebrow}</h2>
        <Reveal>
          <ul className="display flex flex-wrap gap-x-[0.3em] gap-y-1 text-[clamp(2.25rem,6vw,6rem)] text-cream">
            {copy.items.map((item, i) => (
              <li key={item} className="flex gap-x-[0.3em]">
                <span className="transition-colors duration-200 hover:text-green">{item}</span>
                {i < copy.items.length - 1 ? (
                  <span aria-hidden="true" className="text-green">
                    /
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between md:mt-14">
          <p className="text-base text-cream/85 md:text-lg">{copy.note}</p>
          <Button href={copy.cta.href} variant="outline">
            {copy.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

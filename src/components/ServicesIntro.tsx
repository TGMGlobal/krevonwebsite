import { home } from "@/content/home";
import { services } from "@/content/approach";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

/** Homepage: short introduction to the sprints and services, on a light background. */
export function ServicesIntro() {
  const copy = home.services;

  return (
    <section className="on-light bg-offwhite text-black">
      <div className="shell grid grid-cols-1 gap-14 py-20 md:grid-cols-12 md:gap-8 md:py-32">
        <div className="md:col-span-6 xl:col-span-5">
          <p className="eyebrow mb-6 text-black/70">{copy.eyebrow}</p>
          <h2 className="display text-balance text-5xl md:text-6xl xl:text-7xl">{copy.heading}</h2>
          <p className="mt-8 max-w-lg text-pretty text-base leading-relaxed text-black/80 md:text-lg">{copy.body}</p>
          <Button href={copy.cta.href} variant="black" className="mt-10">
            {copy.cta.label}
          </Button>
        </div>

        <div className="md:col-span-6 xl:col-start-7">
          <p className="eyebrow mb-4 text-black/70">{copy.listLabel}</p>
          <Reveal as="ol" stagger className="border-t border-black">
            {services.map((service, i) => (
              <li key={service.title} className="flex items-baseline gap-5 border-b border-black/20 py-5">
                <span className="eyebrow w-6 shrink-0 text-black/70">{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-2xl md:text-3xl">{service.title}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

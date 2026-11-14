import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { approach, services } from "@/content/approach";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: approach.meta.title,
  description: approach.meta.description,
  path: "/approach/",
});

export default function ApproachPage() {
  const { hero, sprints, paths, partnership, cta } = approach;

  return (
    <>
      <PageHeader eyebrow={hero.eyebrow} heading={hero.heading} body={hero.body} />

      {/* Diagnostic sprints */}
      <section className="border-t border-cream/15 bg-black">
        <div className="shell py-20 md:py-28">
          <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-7">
              <p className="eyebrow mb-5 text-green">{sprints.eyebrow}</p>
              <h2 className="display text-5xl text-cream md:text-7xl">{sprints.heading}</h2>
            </div>
            <p className="max-w-md text-pretty text-base leading-relaxed text-cream/85 md:col-span-5 md:justify-self-end">
              {sprints.body}
            </p>
          </div>

          <ol className="border-t border-cream/30">
            {sprints.items.map((sprint, i) => (
              <li key={sprint.name} className="border-b border-cream/30">
                <Reveal className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14">
                  <div className="flex items-baseline gap-5 md:col-span-6">
                    <span className="display text-5xl text-green md:text-7xl">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="display text-4xl text-cream md:text-6xl">{sprint.name}</h3>
                      <p className="eyebrow mt-4 inline-block border border-cream/30 px-2.5 py-1 text-cream/85">
                        {sprints.durationLabel}
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <p className="eyebrow mb-3 text-cream/75">{sprints.coversLabel}</p>
                    <p className="text-base leading-relaxed text-cream">{sprint.covers}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="eyebrow mb-3 text-cream/75">{sprints.forLabel}</p>
                    <p className="text-base leading-relaxed text-cream">{sprint.fit}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="mt-20 md:mt-28">
            <p className="eyebrow mb-5 text-green">{paths.eyebrow}</p>
            <h2 className="display max-w-[18ch] text-balance text-4xl text-cream md:text-6xl">{paths.heading}</h2>
            <Reveal as="ol" stagger className="mt-10 grid grid-cols-1 gap-px bg-cream/20 md:mt-14 md:grid-cols-3">
              {paths.items.map((path, i) => (
                <li key={path.title} className="bg-black py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0">
                  <span className="eyebrow text-green">{`${paths.itemLabel} ${i + 1}`}</span>
                  <h3 className="display mt-4 text-3xl text-cream md:text-4xl">{path.title}</h3>
                  <p className="mt-4 max-w-sm text-base leading-relaxed text-cream/85">{path.body}</p>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="on-light bg-offwhite text-black">
        <div className="shell py-20 md:py-28">
          <div className="mb-12 md:mb-16">
            <p className="eyebrow mb-5 text-black/70">{approach.services.eyebrow}</p>
            <h2 className="display text-5xl md:text-7xl">{approach.services.heading}</h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-black/80 md:text-lg">
              {approach.services.body}
            </p>
          </div>

          <Reveal as="ol" stagger className="border-t border-black">
            {services.map((service, i) => (
              <li
                key={service.title}
                className="grid grid-cols-1 gap-3 border-b border-black/20 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
              >
                <span className="eyebrow text-black/70 md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display text-3xl md:col-span-5 md:text-4xl xl:text-5xl">{service.title}</h3>
                <p className="max-w-xl text-pretty text-base leading-relaxed text-black/80 md:col-span-6">{service.body}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Ongoing partnership */}
      <section className="bg-black">
        <div className="shell grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:gap-8 md:py-28">
          <div className="md:col-span-5">
            <p className="eyebrow mb-5 text-green">{partnership.eyebrow}</p>
            <h2 className="display text-5xl text-cream md:text-7xl">{partnership.heading}</h2>
          </div>
          <Reveal className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
            {partnership.body.map((paragraph, i) => (
              <p
                key={paragraph}
                className={
                  i === 0
                    ? "text-pretty text-xl font-medium leading-snug text-cream md:text-2xl md:leading-snug"
                    : "text-pretty text-base leading-relaxed text-cream/85 md:text-lg"
                }
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand heading={cta.heading} body={cta.body} button={cta.button} />
    </>
  );
}

import type { Metadata } from "next";
import { Closing } from "@/components/Closing";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { studio } from "@/content/studio";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: studio.meta.title,
  description: studio.meta.description,
  path: "/studio/",
});

export default function StudioPage() {
  const { hero, sprints, paths, services, staying, cta } = studio;

  return (
    <>
      <PageHeader eyebrow={hero.eyebrow} heading={hero.heading} body={hero.body}>
        <p className="eyebrow mt-6 text-green md:ml-[33.333%]">{hero.aside}</p>
      </PageHeader>

      {/* Sprints */}
      <section className="border-t border-cream/15 bg-black">
        <div className="shell py-20 md:py-28">
          <div className="mb-10 flex items-center justify-between gap-6 md:mb-14">
            <h2 className="eyebrow text-green">{sprints.eyebrow}</h2>
            <span className="eyebrow border border-cream/30 px-3 py-1.5 text-cream/85">{sprints.duration}</span>
          </div>

          <ol className="border-t border-cream/30">
            {sprints.items.map((sprint, i) => (
              <li key={sprint.name} className="border-b border-cream/30">
                <Reveal className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-12">
                  <h3 className="display flex items-baseline gap-5 text-[clamp(2.75rem,7vw,7rem)] text-cream md:col-span-7">
                    <span className="eyebrow text-green">{String(i + 1).padStart(2, "0")}</span>
                    {sprint.name}
                  </h3>
                  <div className="md:col-span-5">
                    <p className="text-lg leading-snug text-cream md:text-xl">{sprint.fit}</p>
                    <p className="mt-2 text-sm leading-relaxed text-cream/75">{sprint.covers}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Three paths */}
      <section className="on-light bg-green text-black">
        <div className="shell py-20 md:py-28">
          <h2 className="eyebrow mb-10 md:mb-14">{paths.eyebrow}</h2>
          <Reveal as="ol" stagger className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {paths.items.map((path) => (
              <li key={path.title} className="border-t-2 border-black pt-5">
                <h3 className="display text-4xl md:text-5xl xl:text-6xl">{path.title}</h3>
                <p className="mt-4 max-w-xs text-base font-medium leading-relaxed">{path.body}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="on-light bg-offwhite text-black">
        <div className="shell py-20 md:py-28">
          <div className="mb-10 flex items-baseline justify-between gap-6 md:mb-14">
            <h2 className="eyebrow text-black/70">{services.eyebrow}</h2>
            <p className="text-sm text-black/70">{services.note}</p>
          </div>
          <Reveal as="ul" stagger className="border-t-2 border-black">
            {services.items.map((service) => (
              <li
                key={service.title}
                className="grid grid-cols-1 gap-1 border-b border-black/25 py-5 md:grid-cols-12 md:items-baseline md:gap-8 md:py-6"
              >
                <h3 className="display text-3xl md:col-span-7 md:text-5xl">{service.title}</h3>
                <p className="text-base text-black/80 md:col-span-5">{service.note}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Ongoing */}
      <section className="bg-black">
        <div className="shell py-24 md:py-40">
          <h2 className="eyebrow mb-8 text-green">{staying.eyebrow}</h2>
          <p className="display max-w-[18ch] text-balance text-[clamp(2.5rem,6.4vw,6.5rem)] text-cream">{staying.heading}</p>
          <p className="mt-8 max-w-md text-base leading-relaxed text-cream/85 md:ml-[33.333%] md:text-lg">{staying.body}</p>
        </div>
      </section>

      <Closing heading={cta.heading} body={cta.body} button={cta.button} />
    </>
  );
}

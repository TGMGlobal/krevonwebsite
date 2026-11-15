import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Button";
import { Closing } from "@/components/Closing";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { caseStudies, workPage } from "@/content/work";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: workPage.meta.title,
  description: workPage.meta.description,
  path: "/work/",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader eyebrow={workPage.eyebrow} heading={workPage.heading} body={workPage.body} />

      <section className="bg-black">
        <Reveal as="ol" stagger className="shell border-t border-cream/30 pb-24 md:pb-36">
          {caseStudies.map((study, i) => (
            <li key={study.slug} className="border-b border-cream/30">
              <Link
                href={`/work/${study.slug}/`}
                className="group grid grid-cols-1 gap-4 py-10 md:grid-cols-12 md:items-end md:gap-8 md:py-14"
              >
                <div className="md:col-span-5">
                  <span className="eyebrow text-green">{String(i + 1).padStart(2, "0")}</span>
                  <p className="display mt-2 text-[clamp(4.5rem,11vw,10.5rem)] text-green transition-transform duration-500 ease-out group-hover:translate-x-3">
                    {study.highlight.value}
                  </p>
                  <p className="text-base text-cream/85">{study.highlight.label}</p>
                </div>
                <div className="md:col-span-5 md:col-start-7">
                  <h2 className="display text-4xl text-cream md:text-5xl">{study.client}</h2>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-cream/85">{study.line}</p>
                  <p className="eyebrow mt-5 text-cream/70">{study.tags.join(" · ")}</p>
                </div>
                <span className="hidden h-12 w-12 items-center justify-center justify-self-end border border-cream/40 text-cream transition-colors duration-300 group-hover:border-green group-hover:bg-green group-hover:text-black md:col-span-1 md:flex">
                  <Arrow />
                  <span className="sr-only">{workPage.labels.open}</span>
                </span>
              </Link>
            </li>
          ))}
        </Reveal>
      </section>

      <Closing heading={workPage.cta.heading} body={workPage.cta.body} button={workPage.cta.button} />
    </>
  );
}

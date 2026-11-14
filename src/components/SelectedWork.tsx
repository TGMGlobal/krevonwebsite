import { home } from "@/content/home";
import { caseStudies } from "@/content/work";
import { Button } from "./Button";
import { CaseTile } from "./CaseTile";
import { Reveal } from "./Reveal";

/** The case study grid. First and last tiles run full width. */
export function WorkGrid({
  priorityFirst = false,
  heading = "h3",
}: {
  priorityFirst?: boolean;
  heading?: "h2" | "h3";
}) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
      {caseStudies.map((study, i) => {
        const wide = i % 3 === 0;
        return (
          <Reveal key={study.slug} className={wide ? "lg:col-span-2" : ""}>
            <CaseTile study={study} index={i} wide={wide} priority={priorityFirst && i === 0} heading={heading} />
          </Reveal>
        );
      })}
    </div>
  );
}

export function SelectedWork() {
  const copy = home.work;

  return (
    <section className="bg-black">
      <div className="shell py-20 md:py-32">
        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-8">
            <p className="eyebrow mb-6 text-green">{copy.eyebrow}</p>
            <h2 className="display max-w-[16ch] text-balance text-5xl md:text-7xl">{copy.heading}</h2>
          </div>
          <p className="max-w-sm text-pretty text-base leading-relaxed text-cream/80 md:col-span-4 md:justify-self-end">
            {copy.body}
          </p>
        </div>

        <WorkGrid />

        <div className="mt-10 flex justify-end md:mt-12">
          <Button href={copy.cta.href} variant="outline">
            {copy.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

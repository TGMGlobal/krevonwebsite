import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: site.notFound.body,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const copy = site.notFound;

  return (
    <section className="bg-black pt-18 md:pt-22">
      <div className="shell flex min-h-[70svh] flex-col justify-center py-20">
        <p className="eyebrow mb-6 text-green">{copy.eyebrow}</p>
        <h1 className="display max-w-[12ch] text-balance text-[clamp(3.25rem,11vw,10rem)] text-cream">{copy.heading}</h1>
        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-cream/85 md:text-lg">{copy.body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={copy.primary.href} variant="green">
            {copy.primary.label}
          </Button>
          <Button href={copy.secondary.href} variant="outline">
            {copy.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

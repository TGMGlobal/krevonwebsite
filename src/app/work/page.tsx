import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WorkGrid } from "@/components/SelectedWork";
import { CtaBand } from "@/components/CtaBand";
import { workPage } from "@/content/work";
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
        <div className="shell pb-20 md:pb-32">
          <WorkGrid heading="h2" priorityFirst />
        </div>
      </section>
      <CtaBand heading={workPage.cta.heading} body={workPage.cta.body} button={workPage.cta.button} />
    </>
  );
}

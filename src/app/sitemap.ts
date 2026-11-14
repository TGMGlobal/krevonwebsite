import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/work";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/work/", priority: 0.9 },
    { path: "/approach/", priority: 0.9 },
    { path: "/contact/", priority: 0.8 },
    ...caseStudies.map((study) => ({ path: `/work/${study.slug}/`, priority: 0.7 })),
  ];

  return pages.map((page) => ({
    url: `${site.url}${page.path}`,
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}

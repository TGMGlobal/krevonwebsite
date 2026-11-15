import type { Metadata } from "next";
import { site } from "@/content/site";

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${site.name}. ${site.tagline}`,
};

/**
 * Full metadata for one page: title, description, canonical URL,
 * Open Graph and Twitter tags. `path` must start and end with "/".
 */
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  /** Use the title exactly as given, without the " | Krevon Studio" suffix. */
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

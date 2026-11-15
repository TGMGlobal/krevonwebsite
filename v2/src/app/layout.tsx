import type { Metadata, Viewport } from "next";
import { Caveat, Montserrat, Rajdhani } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { home } from "@/content/home";
import { ogImage } from "@/lib/seo";
import { asset, isPreview } from "@/lib/paths";
import "./globals.css";

/**
 * Display font. Rajdhani stands in for the brand font, Agency, until a web
 * licence is held. To swap, replace this block with next/font/local:
 *
 *   import localFont from "next/font/local";
 *   const display = localFont({
 *     src: "../fonts/Agency.woff2",
 *     variable: "--font-display-face",
 *     display: "swap",
 *   });
 *
 * Nothing else needs to change: every heading reads --font-display-face.
 */
const display = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Montserrat({
  subsets: ["latin"],
  variable: "--font-body-face",
  display: "swap",
});

/**
 * The pen. Used only for handwritten margin notes (the `pen` class).
 * It is not a brand font: remove this block and the variable below to drop it.
 */
const pen = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-pen-face",
  display: "swap",
  // Notes are decoration: let the headline fonts load first.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: home.meta.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: "/",
    title: home.meta.title,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: home.meta.title,
    description: site.description,
    images: [ogImage.url],
  },
  icons: {
    icon: asset("/brand/krevon-avatar.svg"),
  },
  // Preview builds (GitHub Pages) are kept out of search engines.
  robots: {
    index: !isPreview,
    follow: !isPreview,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${pen.variable}`}>
      <body>
        <a
          href="#main"
          className="fixed left-2 top-2 z-[100] -translate-y-24 bg-green px-4 py-2 text-sm font-semibold text-black transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

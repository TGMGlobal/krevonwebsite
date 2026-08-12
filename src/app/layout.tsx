import type { Metadata } from "next";
import { Fraunces, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const siteUrl = "https://krevonstudio.com";
const title = "Krevon Studio — Straight Talk. Built to Lead.";
const description =
  "Krevon Studio is an independent creative, strategy and digital agency. We tell clients the truth, not what's comfortable — brand strategy, identity, creative, content, websites and growth built to lead a category, not just compete in it.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Krevon Studio",
  },
  description,
  keywords: [
    "Krevon Studio",
    "brand strategy",
    "branding agency",
    "creative agency",
    "digital growth",
    "identity design",
    "performance marketing",
  ],
  authors: [{ name: "Krevon Studio" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Krevon Studio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable} ${spaceMono.variable}`}>
      <body>
        <a
          href="#main"
          className="fixed left-2 top-2 z-[100] -translate-y-24 bg-ink text-paper px-4 py-2 text-sm font-medium focus-visible:translate-y-0 transition-transform"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

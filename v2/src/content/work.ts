/**
 * Case studies. Edit the text between the quotes.
 *
 * IMAGES: put WebP files in public/work/<slug>/ and list them under `images`,
 * e.g. { src: "/work/samyah-wellness/01.webp", alt: "What the image shows" }.
 * A case study with no images is laid out in type alone.
 *
 * MONEY: USD is the main figure with `approx: true`. The rupee original goes
 * in `original`. Do not round the numbers up.
 */

export type CaseImage = { src: string; alt: string };

export type Stat = {
  value: string;
  approx?: boolean;
  original?: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  metaTitle: string;
  metaDescription: string;
  /** One line under the client name. */
  line: string;
  category: string;
  tags: string[];
  /** The single figure or word shown huge on the homepage and work index. */
  highlight: { value: string; label: string };
  brief: string;
  work: string;
  resultsHeading: string;
  resultsNote?: string;
  results: Stat[];
  insight?: string;
  images: CaseImage[];
};

export const workPage = {
  meta: {
    title: "Work",
    description:
      "Four Krevon Studio projects: brand identity and paid growth, a seed pitch deck, performance marketing on Meta and Google, and Shopify catalogue automation.",
  },
  eyebrow: "Work",
  heading: "Four pieces of work.",
  body: "Where a result was measured, the number is here. Where it wasn't, the page says so.",
  labels: {
    brief: "The brief",
    work: "What Krevon did",
    next: "Next",
    approx: "approx.",
    open: "Open",
  },
  cta: {
    heading: "Got one like this?",
    body: "Describe it in a few lines.",
    button: { label: "Start a conversation", href: "/contact/" },
  },
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "samyah-wellness",
    client: "Samyah Wellness",
    metaTitle: "Samyah Wellness: performance marketing",
    metaDescription:
      "45 campaigns over six months for Samyah Wellness: 2,369 enquiries from about $2,200 in ad spend, at an average of about $0.93 per enquiry.",
    line: "Many services. One budget. 45 campaigns run as a single system.",
    category: "Wellness studio, India",
    tags: ["Performance marketing", "Meta", "Google Search"],
    highlight: { value: "2,369", label: "enquiries at approx. $0.93 each" },
    brief:
      "Pilates, yoga, functional training, sound healing, physiotherapy, recovery therapies and community events, all on one ad budget. Each service needed its own steady enquiries, without the cost per enquiry creeping up.",
    work: "45 campaigns across Meta and Google Search from April to September 2026, with separate campaigns for each service. Awareness went first, service-level lead campaigns followed. Once WhatsApp and Instagram DM conversations proved cheaper than form and website leads, most of the spend moved there. Weaker services, Functional Training among them, were cut back and reworked.",
    resultsHeading: "Results",
    resultsNote: "April to September 2026. USD figures are approximate conversions from rupees.",
    results: [
      { value: "2,369", label: "enquiries in six months" },
      { value: "$2,200", approx: true, original: "₹1,93,453", label: "total ad spend" },
      { value: "$0.93", approx: true, original: "₹82", label: "average cost per enquiry" },
      { value: "5.6M", label: "impressions" },
      { value: "1.4M+", label: "people reached by awareness campaigns, at approx. $0.10 per 1,000 people reached (under ₹9)" },
      { value: "342", label: "enquiries from one Sound Healing course launch, at approx. $0.54 each (₹48)" },
      {
        value: "$0.55",
        approx: true,
        original: "₹48",
        label: "per enquiry from event-led campaigns (Drum Circle, Yoga Day, Pilates Party), against a Meta average of approx. $0.90 (₹79)",
      },
      { value: "1,974", label: "messaging conversations at approx. $0.66 each (₹58), versus approx. $1.52 (₹134) per website lead" },
    ],
    insight:
      "Experience-led offers drove the cost down. An event or a course launch gives people a concrete reason to reach out.",
    images: [],
  },
  {
    slug: "jk-cookery-school",
    client: "JK Cookery School",
    metaTitle: "JK Cookery School: brand identity and paid growth",
    metaDescription:
      "Krevon rebuilt the JK Cookery School brand and ran its paid campaigns: 3.5M+ impressions, 12K+ followers in 6 months (90% organic) and 415 leads.",
    line: "A young cooking school, rebuilt to read as the trusted choice.",
    category: "Culinary school, online and offline workshops (India)",
    tags: ["Brand identity", "Paid growth"],
    highlight: { value: "12K+", label: "followers in 6 months, 90% organic" },
    brief:
      "A niche brand with a Gen Z founder, in a crowded category. People want to know a cooking school is reliable before they pay. JK had to read as the trusted choice.",
    work: "Persona research came first. It shaped the brand voice, a redesigned logo and a colour system, which then ran through packaging and menus. A communication strategy and paid campaigns followed.",
    resultsHeading: "Results",
    results: [
      { value: "3.5M+", label: "impressions" },
      { value: "12K+", label: "followers in 6 months, 90% organic" },
      { value: "415", label: "leads" },
      { value: "$11,000", approx: true, original: "~₹10,00,000", label: "in revenue generated" },
    ],
    images: [],
  },
  {
    slug: "us-healthcare-pitch-deck",
    client: "US healthcare startup",
    metaTitle: "Seed pitch deck for a US healthcare startup",
    metaDescription:
      "Krevon built an investor-ready seed deck for an early-stage US healthcare brand, joining medical insight to market opportunity in one data-backed narrative.",
    line: "A seed deck that answers the doctor and the investor at once.",
    category: "Early-stage US healthcare and lifestyle brand (insomnia and productivity)",
    tags: ["Pitch deck", "Investor narrative"],
    highlight: { value: "Seed", label: "round deck, medicine and market in one story" },
    brief:
      "An early-stage US brand working on insomnia and productivity, preparing for a seed round. Investors in this category want medical credibility and a clear market in the same pitch.",
    work: "One data-backed narrative that joins the medical insight to the market opportunity. The deck runs in four parts: problem scale, product concept, competitive landscape, business model.",
    resultsHeading: "Outcome",
    resultsNote: "The client is not named. No claim is made about money raised.",
    results: [
      { value: "1", label: "investor-ready deck, delivered for the founders' seed-round conversations" },
      { value: "4", label: "parts: problem scale, product concept, competitive landscape, business model" },
    ],
    images: [],
  },
  {
    slug: "shopify-catalogue-automation",
    client: "Shopify catalogue automation",
    metaTitle: "Shopify catalogue automation with AI",
    metaDescription:
      "A Krevon automation system for Shopify: AI drafts each product listing, a person approves it, and approved products publish to the store correctly categorised.",
    line: "AI drafts the listing. A person approves it. Shopify gets it.",
    category: "AI and workflow automation for e-commerce and D2C. A Krevon system.",
    tags: ["AI automation", "Shopify", "D2C"],
    highlight: { value: "Days", label: "for a catalogue that takes months by hand" },
    brief:
      "Every new product needs a title, a description, tags and images. Done by hand, a 500-SKU launch turns into months of work.",
    work: "Raw product inputs go in. AI drafts the complete Shopify listing: title, SEO-aware description, tags and imagery. A person approves each one. Approved products publish straight to the store, correctly categorised.",
    resultsHeading: "Built to do",
    resultsNote: "Design targets for the system. These are not measured results from a client.",
    results: [
      { value: "Days", label: "to draft, review and publish a catalogue" },
      { value: "4", label: "parts of every listing drafted by AI: title, description, tags, imagery" },
      { value: "Every", label: "listing approved by a person before it goes live" },
    ],
    insight: "AI handles the volume. Your team handles the judgement.",
    images: [],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudy {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  return caseStudies[(index + 1) % caseStudies.length]!;
}

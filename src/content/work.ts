/**
 * Case studies and Work page copy. Edit the text between the quotes.
 *
 * IMAGES
 * Put image files in public/work/<slug>/ as WebP, then replace `src: null`
 * with the path, e.g. src: "/work/samyah-wellness/cover.webp".
 * While src is null the site shows a marked placeholder.
 * Suggested sizes: cover 2400x1350, gallery 1600x1200.
 *
 * MONEY
 * Show USD as the main value with `approx: true`, and put the original INR
 * figure in `original`. Do not round the numbers up.
 */

export type ImageSlot = {
  /** Path under public/, or null to show a placeholder. */
  src: string | null;
  /** Describes the image for screen readers and search engines. */
  alt: string;
};

export type Stat = {
  value: string;
  /** true shows a small "approx." above the value (used for USD conversions). */
  approx?: boolean;
  /** Original figure in rupees, shown in small type. */
  original?: string;
  label: string;
};

/** Background pattern used while a case study has no cover image. */
export type Pattern = "rings" | "grid" | "stripes" | "dots";

export type CaseStudy = {
  slug: string;
  /** Short name shown on tiles and as the page title. */
  client: string;
  /** One-line description of the project. */
  title: string;
  category: string;
  tags: string[];
  /** The one figure or phrase shown in green on the tile. */
  highlight: { value: string; label: string };
  metaDescription: string;
  pattern: Pattern;
  cover: ImageSlot;
  challengeHeading: string;
  challenge: string[];
  workHeading: string;
  work: string[];
  scope: string[];
  resultsHeading: string;
  /** Optional small note under the results heading. */
  resultsNote?: string;
  results: Stat[];
  /** Optional closing paragraph under the results. */
  resultsSummary?: string;
  insight?: { label: string; text: string };
  gallery: ImageSlot[];
};

export const workPage = {
  meta: {
    title: "Work",
    description:
      "Four Krevon Studio case studies: brand identity and paid growth, a seed pitch deck, performance marketing across Meta and Google, and Shopify catalogue automation.",
  },
  eyebrow: "Work",
  heading: "Four projects. Read the numbers before the adjectives.",
  body: "Brand identity, paid media, an investor deck and an automation system. Each page covers the brief, what Krevon did and what came of it.",
  labels: {
    viewCase: "Read the case study",
    challenge: "The challenge",
    work: "What Krevon did",
    scope: "Scope",
    gallery: "From the project",
    next: "Next case study",
    approx: "approx.",
    placeholder: "Image placeholder",
  },
  cta: {
    heading: "Got a problem like one of these?",
    body: "Describe it in a few lines. Krevon replies within one working day.",
    button: { label: "Start a conversation", href: "/contact/" },
  },
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "jk-cookery-school",
    client: "JK Cookery School",
    title: "Brand identity and paid growth for a culinary school",
    category: "Culinary school, online and offline workshops (India)",
    tags: ["Brand identity", "Paid growth"],
    highlight: { value: "12K+", label: "followers in 6 months, 90% organic" },
    metaDescription:
      "How Krevon rebuilt the JK Cookery School brand and ran its paid campaigns: 3.5M+ impressions, 12K+ followers in 6 months (90% organic) and 415 leads.",
    pattern: "rings",
    cover: { src: null, alt: "JK Cookery School brand identity: logo, colour system and packaging" },
    challengeHeading: "A young brand in a category that rewards the familiar",
    challenge: [
      "JK Cookery School runs cooking workshops online and in person. It is a niche brand with a Gen Z founder, in a category crowded with established names.",
      "People choosing a cooking class want to know the school is reliable before they pay. The brand had to read as the trusted choice.",
    ],
    workHeading: "Research first, then identity, then spend",
    work: [
      "Krevon began with persona research to learn who books a workshop and what makes them hesitate. The answers shaped the brand voice, a redesigned logo and a colour system.",
      "That identity then ran through the packaging and the menus, so the school looked like one brand everywhere a customer met it. A communication strategy set what the school says and where it says it.",
      "Paid campaigns then put the new brand in front of the people the research had described.",
    ],
    scope: [
      "Persona research",
      "Brand voice",
      "Logo redesign",
      "Colour system",
      "Packaging and menu design",
      "Communication strategy",
      "Paid campaigns",
    ],
    resultsHeading: "Results",
    results: [
      { value: "3.5M+", label: "impressions" },
      { value: "12K+", label: "followers in 6 months, 90% of them organic" },
      { value: "415", label: "leads" },
      { value: "$11,000", approx: true, original: "~₹10,00,000", label: "in revenue generated" },
    ],
    gallery: [
      { src: null, alt: "JK Cookery School logo redesign" },
      { src: null, alt: "JK Cookery School packaging and menu design" },
      { src: null, alt: "JK Cookery School campaign creative" },
    ],
  },
  {
    slug: "us-healthcare-pitch-deck",
    client: "US healthcare startup",
    title: "A seed pitch deck for a sleep and productivity brand",
    category: "Early-stage US healthcare and lifestyle brand (insomnia and productivity)",
    tags: ["Pitch deck", "Investor narrative"],
    highlight: { value: "Seed", label: "round deck, built on medical and market data" },
    metaDescription:
      "Krevon built an investor-ready seed deck for an early-stage US healthcare brand, joining medical insight to market opportunity in one data-backed narrative.",
    pattern: "grid",
    cover: { src: null, alt: "Slides from a seed pitch deck for a US healthcare startup" },
    challengeHeading: "Two questions from every investor, asked at the same time",
    challenge: [
      "An early-stage US healthcare and lifestyle brand working on insomnia and productivity was preparing to raise a seed round. The client is not named here.",
      "Investors in this category want medical credibility and a clear market in the same pitch. The founders needed a deck that could answer both without splitting into two separate stories.",
    ],
    workHeading: "One narrative, backed by data",
    work: [
      "Krevon built the story so the medical insight and the market opportunity support each other. Every claim in the deck points back to data.",
      "The structure follows the order investors tend to ask in: how big the problem is, what the product is, who else is in the space, and how the business makes money.",
    ],
    scope: ["Investor narrative", "Problem scale", "Product concept", "Competitive landscape", "Business model", "Deck design"],
    resultsHeading: "Outcome",
    resultsNote: "This page makes no claim about money raised.",
    results: [
      { value: "1", label: "investor-ready deck, delivered for the founders' seed-round conversations" },
      { value: "4", label: "parts to the argument: problem scale, product concept, competitive landscape, business model" },
    ],
    gallery: [
      { src: null, alt: "Pitch deck slide showing the scale of the problem" },
      { src: null, alt: "Pitch deck slide showing the competitive landscape" },
      { src: null, alt: "Pitch deck slide showing the business model" },
    ],
  },
  {
    slug: "samyah-wellness",
    client: "Samyah Wellness",
    title: "Performance marketing across Meta and Google",
    category:
      "Wellness studio, India: Pilates, yoga, functional training, sound healing, physiotherapy and recovery therapies, community events",
    tags: ["Performance marketing", "Meta", "Google Search"],
    highlight: { value: "2,369", label: "enquiries at approx. $0.93 each" },
    metaDescription:
      "45 campaigns over six months for Samyah Wellness: 2,369 enquiries from about $2,200 in ad spend, at an average of about $0.93 per enquiry.",
    pattern: "stripes",
    cover: { src: null, alt: "Samyah Wellness campaign creative across Meta and Google" },
    challengeHeading: "Many services, one budget",
    challenge: [
      "Samyah Wellness offers Pilates, yoga, functional training, sound healing, physiotherapy, recovery therapies and community events. All of it shares a single ad budget.",
      "General awareness would not fill classes. The studio needed steady enquiries for each service, and it needed them without the cost per enquiry creeping up month after month.",
    ],
    workHeading: "45 campaigns, run as one system",
    work: [
      "Over six months, from April to September 2026, Krevon ran 45 campaigns across Meta (Facebook and Instagram) and Google Search. Each service got its own campaigns, so each could be judged on its own numbers.",
      "Awareness campaigns went first to build familiarity. Service-level lead campaigns followed.",
      "Once WhatsApp and Instagram DM conversations proved cheaper than form and website leads, most of the spend moved there. Weaker services, Functional Training in particular, were cut back and reworked over successive iterations.",
    ],
    scope: [
      "Meta ads (Facebook and Instagram)",
      "Google Search ads",
      "Campaign structure per service",
      "Awareness and lead campaigns",
      "WhatsApp and Instagram DM campaigns",
      "Ongoing iteration",
    ],
    resultsHeading: "Results",
    resultsNote: "April to September 2026. USD figures are approximate conversions from rupees.",
    results: [
      { value: "2,369", label: "enquiries in six months" },
      { value: "$2,200", approx: true, original: "₹1,93,453", label: "total ad spend" },
      { value: "$0.93", approx: true, original: "₹82", label: "average cost per enquiry" },
      { value: "5.6M", label: "impressions" },
      {
        value: "1.4M+",
        label: "people reached by awareness campaigns, at approx. $0.10 per 1,000 people reached (under ₹9)",
      },
      {
        value: "342",
        label: "enquiries from a single Sound Healing course launch, at approx. $0.54 each (₹48)",
      },
      {
        value: "$0.55",
        approx: true,
        original: "₹48",
        label:
          "per enquiry from event-led campaigns (Drum Circle, Yoga Day, Pilates Party), against a Meta average of approx. $0.90 (₹79)",
      },
      {
        value: "1,974",
        label:
          "conversations from messaging campaigns at approx. $0.66 each (₹58), versus approx. $1.52 (₹134) per website lead",
      },
    ],
    insight: {
      label: "What drove the cost down",
      text: "Experience-led offers. An event or a course launch gives people a concrete reason to reach out today, and those campaigns brought enquiries in well below the Meta average.",
    },
    gallery: [
      { src: null, alt: "Samyah Wellness awareness campaign creative" },
      { src: null, alt: "Samyah Wellness Sound Healing course launch creative" },
      { src: null, alt: "Samyah Wellness event campaign creative" },
    ],
  },
  {
    slug: "shopify-catalogue-automation",
    client: "Shopify catalogue automation",
    title: "An AI system that drafts, reviews and publishes product listings",
    category: "AI and workflow automation for e-commerce and D2C. A Krevon system.",
    tags: ["AI automation", "Shopify", "D2C"],
    highlight: { value: "Days", label: "to publish a catalogue that takes months by hand" },
    metaDescription:
      "A Krevon automation system for Shopify: AI drafts each product listing, a person approves it, and approved products publish to the store correctly categorised.",
    pattern: "dots",
    cover: { src: null, alt: "Diagram of the Shopify catalogue automation workflow" },
    challengeHeading: "The bottleneck nobody budgets for",
    challenge: [
      "Catalogue work is a hidden bottleneck for D2C brands. Every new product needs a title, a description, tags and images before it can go live.",
      "Done by hand, a 500-SKU launch turns into months of work. The products exist, the stock exists, and the store still shows nothing.",
    ],
    workHeading: "AI handles the volume. Your team handles the judgement.",
    work: [
      "The system takes raw product inputs and has AI draft the complete Shopify listing: title, SEO-aware description, tags and imagery.",
      "Each draft then goes to a person for approval. Nothing reaches the store unreviewed, which is how quality holds while the catalogue grows.",
      "Approved products publish straight to Shopify, already sorted into the right categories.",
    ],
    scope: [
      "Raw product input intake",
      "AI-drafted titles and descriptions",
      "Tags and imagery",
      "Human approval step",
      "Direct publishing to Shopify",
      "Automatic categorisation",
    ],
    resultsHeading: "What it is built to do",
    resultsNote: "These are design targets for the system. They are not measured results from a client.",
    results: [
      { value: "Days", label: "to draft, review and publish a catalogue, where a manual pipeline takes months" },
      { value: "4", label: "parts of every listing drafted by AI: title, description, tags and imagery" },
      { value: "Every", label: "listing approved by a person before it goes live" },
    ],
    gallery: [
      { src: null, alt: "Product listing drafted by the automation system" },
      { src: null, alt: "Approval step in the catalogue automation workflow" },
      { src: null, alt: "Published Shopify product page" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudy {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  return caseStudies[(index + 1) % caseStudies.length]!;
}

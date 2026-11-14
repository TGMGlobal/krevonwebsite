/**
 * Homepage copy. Edit the text between the quotes.
 * Case study tiles are pulled from src/content/work.ts.
 */

export type Client = {
  name: string;
  /** Path to a logo in public/clients/, e.g. "/clients/estancia.svg". null shows the name as text. */
  logo: string | null;
};

export const home = {
  meta: {
    title: "Krevon Studio | Straight talk. Built to lead.",
    description:
      "Krevon Studio tells founders and marketing teams the truth about their brand, then builds the fix: strategy, identity, websites, paid media and automation. 3 years, 50+ clients.",
  },

  hero: {
    eyebrow: "Creative, strategy and automation studio",
    /** The headline is split so one word can be shown in green. */
    headline: { before: "The ", accent: "truth", after: " about your brand, before your market says it for you." },
    body: "Krevon looks at your brand, funnel and spend, tells you plainly what is holding them back, and then builds the fix. That is how a brand gets to lead its category and stop trading blows inside it.",
    primaryCta: { label: "Start a conversation", href: "/contact/" },
    secondaryCta: { label: "See the work", href: "/work/" },
  },

  proof: {
    stats: [
      { value: "3", label: "years of client work" },
      { value: "50+", label: "clients served" },
    ],
    marketsLabel: "Markets served",
    clientsLabel: "Brands Krevon has worked with",
  },

  clients: [
    { name: "Mahindra TEQO", logo: null },
    { name: "Samyah Wellness", logo: null },
    { name: "JK Cookery School", logo: null },
    { name: "Estancia", logo: null },
    { name: "ResVenture Xperts", logo: null },
    { name: "Nivve", logo: null },
  ] satisfies Client[],

  services: {
    eyebrow: "What Krevon does",
    heading: "Start with a diagnosis. Build what it calls for.",
    body: "The usual way in is a diagnostic sprint: one to two weeks, a scored review, and a fix list in priority order. From there you can run the list yourself, work through it with Krevon, or hand it over.",
    listLabel: "What gets built",
    cta: { label: "See the approach", href: "/approach/" },
  },

  work: {
    eyebrow: "Selected work",
    heading: "Four projects, with the numbers left in.",
    body: "Where a result was measured, it is on the page. Where it wasn't, the page says so.",
    cta: { label: "All work", href: "/work/" },
  },

  principles: {
    eyebrow: "How Krevon thinks",
    statement: "Most brand problems are easy to see from the outside. Krevon's job is to say them out loud.",
    items: [
      {
        title: "The honest diagnosis comes first",
        body: "Before any creative work starts, Krevon scores what you already have and tells you where it is weak. One client says it can feel rude at the start. The same client says they learned a lot. Their words are further down this page.",
      },
      {
        title: "Decisions over deliverables",
        body: "A logo, a deck or a campaign is only useful if it settles something: who you are for, what you charge, where the budget goes. If a piece of work changes no decision, Krevon will tell you to skip it.",
      },
      {
        title: "Systems over one-off campaigns",
        body: "For Samyah Wellness, 45 campaigns ran as one system for six months. Weak services were cut or reworked, spend moved to the channels that proved cheaper, and the average cost per enquiry came out at about $0.93.",
      },
      {
        title: "Patterns from 50+ brands",
        body: "After three years and 50+ clients, the same problems keep turning up under new names. That pattern recognition is why a Krevon diagnosis takes one to two weeks.",
      },
    ],
  },

  testimonials: {
    eyebrow: "In clients' words",
    heading: "What clients say, including the unflattering part.",
    note: "Client names are withheld at their request.",
    items: [
      {
        quote:
          "They're a bunch of naysayers, and I ended up learning a lot about how to approach brands and marketing. It can feel rude at the start, but as you work together you understand they're working for the brand, not trying to impress you to keep the account.",
        attribution: "Co-founder, real estate",
      },
      {
        quote:
          "The team does all the heavy lifting and nurtures the bonds of friendship, even celebrating their clients' birthdays like family. The timelines, deliverables and approach the team brings are appreciated.",
        attribution: "Owner and Founder, F&B brand",
      },
    ],
  },

  finalCta: {
    heading: "Tell Krevon what isn't working.",
    body: "You'll get a straight answer within one working day.",
    cta: { label: "Start a conversation", href: "/contact/" },
  },
};

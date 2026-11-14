/**
 * Approach page copy: sprints, services, ongoing partnership.
 * Edit the text between the quotes. No prices on this page.
 */

export type Service = { title: string; body: string };

export const services: Service[] = [
  {
    title: "Brand strategy and identity",
    body: "Persona research, voice, logo, colour system and packaging. For JK Cookery School this work sat behind 12K+ followers in six months, 90% of them organic.",
  },
  {
    title: "Websites and landing pages",
    body: "Pages designed, written and built in one place, so the message a visitor reads on the page matches the ad that sent them there.",
  },
  {
    title: "Performance marketing",
    body: "Meta and Google campaigns structured per service or product, with the weak ones cut quickly. For Samyah Wellness: 2,369 enquiries at about $0.93 each.",
  },
  {
    title: "Social media and content",
    body: "Content planned around what your buyers need to believe before they enquire, and judged on enquiries and sales ahead of follower counts.",
  },
  {
    title: "Pitch decks and investor presentations",
    body: "Data-backed narratives for fundraising. Problem scale, product, competition and business model, in the order an investor asks about them.",
  },
  {
    title: "AI and workflow automation",
    body: "Systems that take repetitive work off your team and keep a person on every approval. One example drafts, reviews and publishes Shopify listings.",
  },
];

export const approach = {
  meta: {
    title: "Approach",
    description:
      "How Krevon Studio works: three diagnostic sprints of one to two weeks, six services built on what the sprints find, and an ongoing partnership run on decisions and experiments.",
  },

  hero: {
    eyebrow: "Approach",
    heading: "Find the problem first. Then decide who fixes it.",
    body: "An engagement with Krevon can start small: a diagnostic sprint that scores your brand, funnel or spend against fixed modules. The scoring draws on patterns seen across 50+ brands, so you hear what is wrong in the first fortnight.",
  },

  sprints: {
    eyebrow: "The entry point",
    heading: "Three diagnostic sprints",
    body: "Each sprint runs one to two weeks, is scored against the same fixed modules every time, and ends with a fix list in priority order.",
    durationLabel: "1 to 2 weeks",
    coversLabel: "What gets scored",
    forLabel: "Right for you if",
    items: [
      {
        name: "Growth System Sprint",
        covers: "Positioning, funnel, spend and operations, each one scored.",
        fit: "Growth has stalled and you can't say which part of the business is causing it.",
      },
      {
        name: "Revenue Funnel Sprint",
        covers: "Paid media and website conversion.",
        fit: "You are spending on Meta or Google ads and suspect the money leaks somewhere between the click and the sale.",
      },
      {
        name: "Brand Trust Sprint",
        covers: "How your brand is perceived, and how consistent it is across every touchpoint.",
        fit: "Your website, your deck and your social feed look like three different companies.",
      },
    ],
  },

  paths: {
    eyebrow: "After the sprint",
    heading: "Every sprint ends with the same three paths.",
    /** Shown before each number: "Path 1", "Path 2", "Path 3". */
    itemLabel: "Path",
    items: [
      {
        title: "Do it yourself",
        body: "Take the fix list and run it with your own team. The sprint is complete on its own and nothing further is owed.",
      },
      {
        title: "Done with you",
        body: "Your team does the work. Krevon stays alongside to steer, review and keep the priorities honest.",
      },
      {
        title: "Done for you",
        body: "Krevon builds the fixes, in the order the sprint set out.",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "What Krevon builds",
    body: "After a sprint, or on its own if you already know what you need.",
  },

  partnership: {
    eyebrow: "Ongoing partnership",
    heading: "For clients who stay",
    body: [
      "Some clients carry on after the first project. That work is organised around decisions and experiments: what to test this month, what the result means, what to stop doing.",
      "There is no content calendar to fill for its own sake. If the most useful thing Krevon can give you in a month is a recommendation to pause spend, that is what you'll get.",
    ],
  },

  cta: {
    heading: "Which one sounds like your problem?",
    body: "Tell Krevon which sprint or service you have in mind. If you can't tell yet, say so. \"Not sure yet\" is an option on the form.",
    button: { label: "Start a conversation", href: "/contact/" },
  },
};

/**
 * Homepage copy. Edit the text between the quotes. Keep it short:
 * every screen on this page carries one thought.
 */

export type Client = {
  name: string;
  /** Link to a case study page, if one exists. */
  href?: string;
  /** Path to a logo in public/clients/. Leave out to show the name in type. */
  logo?: string;
};

export const home = {
  meta: {
    title: "Krevon Studio | Straight talk. Built to lead.",
    description:
      "Yes is cheap. Krevon Studio tells founders and marketing teams what is wrong with their brand, then builds what fixes it. 50+ brands in three years.",
  },

  hero: {
    /** Two parts: on phones the headline breaks between them. */
    headline: ["Yes is", "cheap."],
    /**
     * The agreeable phrases that fill the screen and get crossed out.
     * One list per row. The headline sits at the start of row 3.
     */
    wall: [
      ["Love it.", "Looks great.", "No notes.", "So good."],
      ["On brand.", "Totally.", "Ship it.", "Nailed it."],
      ["Perfect.", "Agreed."],
      ["Great idea.", "Sounds good.", "Approved.", "Yes."],
      ["Whatever you think.", "Amazing.", "Yes. Yes."],
    ],
    headlineRow: 2,
    body: "Krevon is the studio that says the other thing. Then builds what fixes it.",
  },

  statement: "Krevon works for your brand. Some days that means disagreeing with you.",

  clients: {
    eyebrow: "50+ brands in three years. Six of them:",
    caseLabel: "Case study",
    items: [
      { name: "Mahindra TEQO" },
      { name: "Samyah Wellness", href: "/work/samyah-wellness/" },
      { name: "JK Cookery School", href: "/work/jk-cookery-school/" },
      { name: "Estancia" },
      { name: "ResVenture Xperts" },
      { name: "Nivve" },
    ] satisfies Client[],
  },

  work: {
    eyebrow: "Evidence",
    heading: "Four pieces of work.",
    allLabel: "All work",
  },

  rules: {
    eyebrow: "House rules",
    items: [
      { line: "Diagnose before you decorate.", note: "Every engagement can start with a scored review of what you already have." },
      { line: "If it changes no decision, don't make it.", note: "A deck, a logo or a campaign has to settle something." },
      { line: "One campaign is a guess. A system learns.", note: "For Samyah Wellness, 45 campaigns ran as one." },
    ],
  },

  capabilities: {
    eyebrow: "What gets made",
    items: [
      "Brand strategy",
      "Identity",
      "Websites",
      "Performance marketing",
      "Social and content",
      "Pitch decks",
      "AI automation",
    ],
    note: "Usually after a two-week diagnostic sprint.",
    cta: { label: "How it works", href: "/studio/" },
  },

  quotes: {
    eyebrow: "Clients, unprompted",
    note: "Names withheld at their request.",
    lead: {
      /** The first sentence is set large. */
      opening: "They're a bunch of naysayers,",
      rest: "and I ended up learning a lot about how to approach brands and marketing. It can feel rude at the start, but as you work together you understand they're working for the brand, not trying to impress you to keep the account.",
      attribution: "Co-founder, real estate",
    },
    second: {
      quote:
        "The team does all the heavy lifting and nurtures the bonds of friendship, even celebrating their clients' birthdays like family. The timelines, deliverables and approach the team brings are appreciated.",
      attribution: "Owner and Founder, F&B brand",
    },
  },

  closing: {
    heading: "Bring the idea you're sure about.",
    body: "You'll hear back within one working day.",
    cta: { label: "Start a conversation", href: "/contact/" },
  },
};

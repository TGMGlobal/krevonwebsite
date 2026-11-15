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
  /** A short handwritten result beside the name. Use only real numbers. */
  note?: string;
};

export const home = {
  meta: {
    title: "Krevon Studio | Yes is cheap.",
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
    /** Small label above the wall, so a first-time visitor knows whose words these are. */
    wallLabel: "Heard in every agency meeting",
    /** Handwritten note beside the wall. */
    wallNote: "free with every retainer.",
    body: "Krevon is a creative, strategy and automation studio that says the other thing. Then builds what fixes it.",
    /**
     * The switch. NO is Krevon and is the default. YES shows what an
     * agreeable agency would have written here instead.
     */
    switch: {
      label: "What your agency says",
      yes: "Yes",
      no: "No",
      hint: "try it.",
      yesBody: "Krevon is a full-service, passionate, results-driven studio that loves everything about your brand. No notes.",
      yesNote: "see? cheap. flip it back.",
    },
  },

  clients: {
    heading: "50+ brands in three years. Six of them:",
    /** A logo replaces the name once `logo` is set on a client below. `note` is a handwritten result. */
    caseLabel: "Case study",
    items: [
      { name: "Mahindra" },
      { name: "Samyah Wellness", href: "/work/samyah-wellness/", note: "2,369 enquiries" },
      { name: "JK Cookery School", href: "/work/jk-cookery-school/", note: "12K+ followers" },
      { name: "Estancia" },
      { name: "ResVenture Xperts" },
      { name: "Nivve" },
    ] satisfies Client[],
  },

  work: {
    eyebrow: "Evidence",
    heading: "Four pieces of work.",
    note: "numbers left in.",
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

  /** Two client quotes. `first` sits high on the page in green, `second` near the end. */
  quotes: {
    eyebrow: "A client, in their words",
    note: "Names withheld at their request.",
    first: {
      /** `highlight` is the part marked with the highlighter. The three parts join into one quote. */
      before: "",
      highlight: "They're a bunch of naysayers,",
      after: " and I ended up learning a lot about how to approach brands and marketing. It can feel rude at the start, but as you work together you understand they're working for the brand, not trying to impress you to keep the account.",
      attribution: "Co-founder, real estate",
      penNote: "we'll take it.",
    },
    second: {
      before: "The team does all the heavy lifting and nurtures the bonds of friendship, even ",
      highlight: "celebrating their clients' birthdays like family.",
      after: " The timelines, deliverables and approach the team brings are appreciated.",
      penNote: "also true.",
      attribution: "Owner and Founder, F&B brand",
    },
  },

  closing: {
    heading: "Bring the idea you're sure about.",
    penNote: "we'll be gentle. (we won't.)",
    body: "You'll hear back within one working day.",
    cta: { label: "Start a conversation", href: "/contact/" },
  },
};

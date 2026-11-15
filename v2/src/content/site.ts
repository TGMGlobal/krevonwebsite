/**
 * Site-wide settings and copy. Edit the text between the quotes.
 */

export type NavLink = { label: string; href: string };

export const site = {
  name: "Krevon Studio",
  shortName: "Krevon",
  url: "https://krevonstudio.com",
  email: "hello@krevonstudio.com",
  tagline: "Straight talk. Built to lead.",
  description:
    "Krevon Studio is a creative, strategy and automation studio. It tells you what is wrong with your brand, then builds what fixes it.",

  locations: "Indore and Mumbai",
  /** Shown beside the live clock in the footer. */
  clockLabel: "Studio time",
  timeZone: "Asia/Kolkata",

  nav: [
    { label: "Work", href: "/work/" },
    { label: "Studio", href: "/studio/" },
    { label: "Contact", href: "/contact/" },
  ] satisfies NavLink[],

  cta: { label: "Start a conversation", href: "/contact/" },

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/krevonstudio/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/krevon-studio/" },
  ],

  menu: { open: "Menu", close: "Close" },

  footer: {
    copyright: "© 2026 Krevon Studio",
  },

  notFound: {
    eyebrow: "404",
    heading: "Nothing here.",
    body: "The link is wrong, or the page has moved.",
    primary: { label: "Home", href: "/" },
    secondary: { label: "Work", href: "/work/" },
  },
};

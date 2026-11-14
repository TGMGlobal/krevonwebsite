/**
 * Site-wide settings and copy: name, contact details, navigation, footer, 404.
 * Edit the text between the quotes. Keep the punctuation around it as it is.
 */

export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string };

export const site = {
  name: "Krevon Studio",
  shortName: "Krevon",
  url: "https://krevonstudio.com",
  email: "hello@krevonstudio.com",
  tagline: "Straight talk. Built to lead.",
  descriptor: "Creative, strategy and automation studio",

  /** Default search and social description. Each page also has its own. */
  description:
    "Krevon Studio is a creative, strategy and automation studio in Indore and Mumbai. Honest diagnosis first, then the brand, website, paid media and automation work that fixes what it finds.",

  locations: "Indore and Mumbai, India",
  markets: ["US", "UK", "Canada", "UAE", "Australia", "New Zealand", "Europe"],

  nav: [
    { label: "Work", href: "/work/" },
    { label: "Approach", href: "/approach/" },
    { label: "Contact", href: "/contact/" },
  ] satisfies NavLink[],

  cta: { label: "Start a conversation", href: "/contact/" },

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/krevonstudio/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/krevon-studio/" },
  ] satisfies SocialLink[],

  footer: {
    line: "Based in Indore and Mumbai. Working with founders and marketing teams in the US, UK, Canada, UAE, Australia, New Zealand and Europe.",
    pagesLabel: "Pages",
    contactLabel: "Contact",
    copyright: "© 2026 Krevon Studio",
  },

  menu: {
    open: "Menu",
    close: "Close",
  },

  notFound: {
    eyebrow: "Error 404",
    heading: "This page doesn't exist.",
    body: "Straight talk: the link is wrong, or the page has moved. The work and the contact form are both still where they should be.",
    primary: { label: "Back to home", href: "/" },
    secondary: { label: "See the work", href: "/work/" },
  },
};

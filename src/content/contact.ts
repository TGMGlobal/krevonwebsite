/**
 * Contact page copy and form labels. Edit the text between the quotes.
 * The form posts to Web3Forms using NEXT_PUBLIC_WEB3FORMS_KEY (see .env.example).
 */

export const contact = {
  meta: {
    title: "Contact",
    description:
      "Tell Krevon Studio what isn't working with your brand, funnel or ad spend. You'll get a reply within one working day.",
  },

  eyebrow: "Contact",
  heading: "Say what's going on.",
  body: "A few lines is enough. Krevon replies within one working day, with a straight answer on whether it can help.",

  emailLabel: "Email",
  socialLabel: "Elsewhere",
  locationLabel: "Studio",

  form: {
    /** Subject line of the email Krevon receives. */
    emailSubject: "New enquiry from krevonstudio.com",
    requiredNote: "Fields marked * are required.",
    fields: {
      name: { label: "Name", placeholder: "Your name" },
      email: { label: "Work email", placeholder: "you@company.com" },
      company: { label: "Company", placeholder: "Company name" },
      website: { label: "Website", placeholder: "https://" },
      need: { label: "What do you need?" },
      message: { label: "Message", placeholder: "What's happening, and what have you already tried?" },
    },
    needOptions: [
      "Growth System Sprint",
      "Revenue Funnel Sprint",
      "Brand Trust Sprint",
      "Brand and identity",
      "Website",
      "Performance marketing",
      "Pitch deck",
      "Automation",
      "Not sure yet",
    ],
    defaultNeed: "Not sure yet",
    submit: "Send message",
    sending: "Sending",
    success: {
      heading: "Message received.",
      body: "Krevon will reply within one working day, at the email address you gave.",
      again: "Send another message",
    },
    error: {
      heading: "That didn't send.",
      body: "Please try again in a moment, or email hello@krevonstudio.com directly.",
    },
  },
};

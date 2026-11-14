import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: contact.meta.title,
  description: contact.meta.description,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <section className="bg-black pt-18 md:pt-22">
      <div className="shell grid grid-cols-1 gap-12 pb-20 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-24">
        <div className="flex flex-col justify-between gap-12 lg:col-span-5">
          <div>
            <p className="eyebrow mb-6 text-green">{contact.eyebrow}</p>
            <h1 className="display max-w-[10ch] text-balance text-[clamp(3.25rem,9vw,7.5rem)] text-cream">
              {contact.heading}
            </h1>
            <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-cream/85 md:text-lg">{contact.body}</p>
          </div>

          <dl className="grid grid-cols-1 gap-8 border-t border-cream/20 pt-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="eyebrow mb-3 text-cream/75">{contact.emailLabel}</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-base text-cream underline underline-offset-4 hover:text-green">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-3 text-cream/75">{contact.socialLabel}</dt>
              <dd className="flex flex-col gap-2">
                {site.socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-fit text-sm text-cream underline underline-offset-4 hover:text-green"
                  >
                    {social.label}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-3 text-cream/75">{contact.locationLabel}</dt>
              <dd className="text-sm text-cream">{site.locations}</dd>
            </div>
          </dl>
        </div>

        <div className="on-light bg-offwhite p-6 sm:p-10 lg:col-span-7 xl:p-14">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

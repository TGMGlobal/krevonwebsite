"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/contact";
import { site } from "@/content/site";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type Status = "idle" | "sending" | "success" | "error";

const LABEL = "eyebrow mb-2 block text-black";
const FIELD =
  "block w-full border-0 border-b-2 border-black/30 bg-transparent px-0 py-3 text-base text-black placeholder:text-black/55 focus:border-black focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const { form } = contact;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);

    // Honeypot: real visitors never see or tick this box.
    if (data.get("botcheck")) return;

    setStatus("sending");

    try {
      if (!ACCESS_KEY) throw new Error("NEXT_PUBLIC_WEB3FORMS_KEY is not set");

      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: form.emailSubject,
          from_name: site.name,
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          website: data.get("website"),
          need: data.get("need"),
          message: data.get("message"),
          botcheck: "",
        }),
      });
      const result: { success?: boolean } = await response.json();
      if (!response.ok || !result.success) throw new Error("Web3Forms rejected the submission");

      formEl.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form:", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="flex min-h-80 flex-col justify-center">
        <h2 className="display text-5xl text-black md:text-6xl">{form.success.heading}</h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-black/80">{form.success.body}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 w-fit cursor-pointer text-sm font-semibold text-black underline underline-offset-4"
        >
          {form.success.again}
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" aria-busy={sending}>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={LABEL}>
            {form.fields.name.label} *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={form.fields.name.placeholder}
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={LABEL}>
            {form.fields.email.label} *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={form.fields.email.placeholder}
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="cf-company" className={LABEL}>
            {form.fields.company.label} *
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder={form.fields.company.placeholder}
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="cf-website" className={LABEL}>
            {form.fields.website.label}
          </label>
          <input
            id="cf-website"
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder={form.fields.website.placeholder}
            className={FIELD}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-need" className={LABEL}>
          {form.fields.need.label}
        </label>
        <select id="cf-need" name="need" defaultValue={form.defaultNeed} className={`${FIELD} cursor-pointer`}>
          {form.needOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className={LABEL}>
          {form.fields.message.label} *
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder={form.fields.message.placeholder}
          className={`${FIELD} resize-y`}
        />
      </div>

      {/* Honeypot field, hidden from people and assistive tech. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div aria-live="polite">
        {status === "error" ? (
          <div role="alert" className="border-l-4 border-black bg-black/5 px-5 py-4">
            <p className="text-base font-bold text-black">{form.error.heading}</p>
            <p className="mt-1 text-sm leading-relaxed text-black/80">{form.error.body}</p>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex cursor-pointer items-center justify-center gap-3 bg-green px-8 py-5 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors duration-200 hover:bg-black hover:text-green disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? (
            <>
              <span
                aria-hidden="true"
                className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-black border-t-transparent"
              />
              {form.sending}
            </>
          ) : (
            form.submit
          )}
        </button>
        <p className="text-xs text-black/70">{form.requiredNote}</p>
      </div>
    </form>
  );
}

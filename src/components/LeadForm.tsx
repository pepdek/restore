"use client";

import { useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-green bg-cream p-6 text-jet">
        Thanks — we&rsquo;ve received your request and a technician will follow up shortly. For anything urgent,
        please call instead.
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={async (e) => {
        e.preventDefault();
        setError(false);
        const form = e.currentTarget;
        try {
          const res = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
          });
          if (!res.ok) throw new Error("submit failed");
          setSubmitted(true);
        } catch {
          setError(true);
        }
      }}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-green"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-green"
          />
        </div>
      </div>
      <div>
        <label htmlFor="address" className="text-sm font-semibold text-ink">
          Property Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-green"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          What happened?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-green"
        />
      </div>
      {error && (
        <p className="text-sm text-error">Something went wrong submitting the form — please call instead.</p>
      )}
      <button
        type="submit"
        className="rounded-md bg-green px-6 py-3 font-semibold text-jet hover:bg-green-dark"
      >
        Request a Callback
      </button>
    </form>
  );
}

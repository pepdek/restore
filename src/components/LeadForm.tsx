"use client";

import { useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-teal bg-teal-light p-6 text-teal-dark">
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
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
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
            className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-teal"
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
            className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-teal"
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
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-teal"
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
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-teal"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-teal px-6 py-3 font-semibold text-white hover:bg-teal-dark"
      >
        Request a Callback
      </button>
    </form>
  );
}

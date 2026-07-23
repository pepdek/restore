"use client";

import { useState } from "react";

export default function StormSignupForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border-2 border-midnight bg-paper-raised p-6 text-jet">
        You&rsquo;re signed up for storm priority notifications.
      </div>
    );
  }

  return (
    <form
      name="storm-signup"
      method="POST"
      data-netlify="true"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input type="hidden" name="form-name" value="storm-signup" />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        className="flex-1 rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-midnight"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        className="flex-1 rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-midnight"
      />
      <button
        type="submit"
        className="shine shrink-0 rounded-md bg-green px-6 py-2 text-xl font-bold text-midnight hover:bg-green-dark hover:text-white"
      >
        Sign Up
      </button>
    </form>
  );
}

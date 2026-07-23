"use client";

import { useState } from "react";

export default function FastTrackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border-2 border-midnight bg-paper-raised p-6 text-jet">
        Thanks — we&rsquo;ve received your Fast-Track request and will follow up to schedule your assessment.
      </div>
    );
  }

  return (
    <form
      name="fast-track"
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
      <input type="hidden" name="form-name" value="fast-track" />
      <div>
        <label htmlFor="ft-name" className="text-sm font-semibold text-ink">
          Your Name
        </label>
        <input
          id="ft-name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-midnight"
        />
      </div>
      <div>
        <label htmlFor="ft-address" className="text-sm font-semibold text-ink">
          Property Address
        </label>
        <input
          id="ft-address"
          name="address"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-midnight"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ft-timeline" className="text-sm font-semibold text-ink">
            Closing / Timeline Date
          </label>
          <input
            id="ft-timeline"
            name="timeline"
            type="date"
            className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-midnight"
          />
        </div>
        <div>
          <label htmlFor="ft-damage" className="text-sm font-semibold text-ink">
            Damage Type
          </label>
          <select
            id="ft-damage"
            name="damageType"
            className="mt-1 w-full rounded-md border border-line bg-paper-raised px-3 py-2 text-ink outline-none focus:border-midnight"
          >
            <option>Water</option>
            <option>Fire / Smoke</option>
            <option>Mold</option>
            <option>Reconstruction / Other</option>
          </select>
        </div>
      </div>
      {error && (
        <p className="text-sm text-ink">
          <strong>Error:</strong> Something went wrong submitting the form — please call instead.
        </p>
      )}
      <button
        type="submit"
        className="rounded-md bg-green px-6 py-3 text-xl font-bold text-midnight shine hover:bg-green-dark hover:text-white"
      >
        Submit Fast-Track Request
      </button>
    </form>
  );
}

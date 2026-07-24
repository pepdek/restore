"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const serviceOptions = ["Water Damage", "Fire & Smoke Damage", "Mold Remediation", "Reconstruction", "Not Sure"];
const emergencyOptions = ["Yes - need help now", "No - can schedule ahead"];
const insuranceOptions = ["Yes", "No", "Not sure yet"];

export default function ServiceRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  if (submitted) {
    return (
      <div className="shine rounded-2xl border-2 border-green bg-paper-raised p-8 text-center">
        <p className="text-xl font-bold text-ink">Got it — thank you.</p>
        <p className="mt-2 text-ink/70">A member of our team will call you within the hour.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setError(false);
        setSubmitting(true);
        const data = new FormData(e.currentTarget);
        const { error: insertError } = await supabase.from("service_requests").insert({
          first_name: data.get("first_name") as string,
          last_name: data.get("last_name") as string,
          phone: data.get("phone") as string,
          email: (data.get("email") as string) || null,
          address: data.get("address") as string,
          service_needed: data.get("service_needed") as string,
          is_emergency: data.get("is_emergency") as string,
          insurance_claim: data.get("insurance_claim") as string,
          details: (data.get("details") as string) || null,
        });
        setSubmitting(false);
        if (insertError) {
          setError(true);
          return;
        }
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="text-sm font-semibold text-ink">
            First Name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
          />
        </div>
        <div>
          <label htmlFor="last_name" className="text-sm font-semibold text-ink">
            Last Name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
          />
        </div>
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
          inputMode="tel"
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-ink">
          Email <span className="font-normal text-ink/60">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
        />
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
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
        />
      </div>

      <div>
        <label htmlFor="service_needed" className="text-sm font-semibold text-ink">
          Service Needed
        </label>
        <select
          id="service_needed"
          name="service_needed"
          required
          defaultValue=""
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="is_emergency" className="text-sm font-semibold text-ink">
          Is This an Emergency?
        </label>
        <select
          id="is_emergency"
          name="is_emergency"
          required
          defaultValue=""
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
        >
          <option value="" disabled>
            Select one
          </option>
          {emergencyOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="insurance_claim" className="text-sm font-semibold text-ink">
          Filing an Insurance Claim?
        </label>
        <select
          id="insurance_claim"
          name="insurance_claim"
          required
          defaultValue=""
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
        >
          <option value="" disabled>
            Select one
          </option>
          {insuranceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className="text-sm font-semibold text-ink">
          Details <span className="font-normal text-ink/60">(optional)</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={3}
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
        />
      </div>

      {error && (
        <p className="text-sm text-ink">
          <strong>Error:</strong> Something went wrong submitting this — please call instead.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="shine w-full rounded-md bg-green px-6 py-4 text-xl font-bold text-midnight hover:bg-green-dark hover:text-white disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request Services"}
      </button>
    </form>
  );
}

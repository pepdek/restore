"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const damageTypes = ["Water", "Mold", "Fire", "Other"] as const;
const severities = ["Minor", "Moderate", "Severe"] as const;

function PillGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <span className="text-sm font-semibold text-ink">{label}</span>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt === value;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              aria-pressed={active}
              className={
                active
                  ? "rounded-full bg-green px-5 py-3 text-base font-bold text-midnight"
                  : "rounded-full border border-line bg-paper-raised px-5 py-3 text-base font-semibold text-ink/70"
              }
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PartnerReferralForm() {
  const searchParams = useSearchParams();
  const partnerSlug = searchParams.get("partner") ?? "";
  const prefillName = partnerSlug
    ? partnerSlug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";

  const [partnerName, setPartnerName] = useState(prefillName);
  const [damageType, setDamageType] = useState<(typeof damageTypes)[number]>("Water");
  const [severity, setSeverity] = useState<(typeof severities)[number]>("Moderate");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  if (submitted) {
    return (
      <div className="shine rounded-2xl border-2 border-green bg-paper-raised p-8 text-center">
        <p className="text-xl font-bold text-ink">Got it — thank you.</p>
        <p className="mt-2 text-ink/70">We&rsquo;ll call within the hour.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setError(false);
        setSubmitting(true);
        const form = e.currentTarget;
        const data = new FormData(form);
        const { error: insertError } = await supabase.from("referrals").insert({
          partner_name: data.get("partner_name") as string,
          partner_slug: partnerSlug || null,
          homeowner_name: data.get("homeowner_name") as string,
          phone: data.get("phone") as string,
          address: data.get("address") as string,
          damage_type: damageType,
          severity: severity,
          notes: (data.get("notes") as string) || null,
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
      <div>
        <label htmlFor="partner_name" className="text-sm font-semibold text-ink">
          Your Name / Company
        </label>
        <input
          id="partner_name"
          name="partner_name"
          type="text"
          required
          value={partnerName}
          onChange={(e) => setPartnerName(e.target.value)}
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
        />
      </div>

      <div>
        <label htmlFor="homeowner_name" className="text-sm font-semibold text-ink">
          Homeowner Name
        </label>
        <input
          id="homeowner_name"
          name="homeowner_name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-semibold text-ink">
          Homeowner Phone
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

      <PillGroup label="Damage Type" options={damageTypes} value={damageType} onChange={setDamageType} />
      <PillGroup label="Severity" options={severities} value={severity} onChange={setSeverity} />

      <div>
        <label htmlFor="notes" className="text-sm font-semibold text-ink">
          Notes <span className="font-normal text-ink/60">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="mt-1 w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-lg text-ink outline-none focus:border-midnight"
        />
      </div>

      {error && (
        <p className="text-sm text-ink">
          <strong>Error:</strong> Something went wrong submitting this referral — please call it in instead.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="shine w-full rounded-md bg-green px-6 py-4 text-xl font-bold text-midnight hover:bg-green-dark hover:text-white disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send Referral"}
      </button>
    </form>
  );
}

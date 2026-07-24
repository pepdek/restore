import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallCta } from "@/components/Cta";
import { CheckIcon, ClockIcon, DocumentIcon, ShieldIcon } from "@/components/icons";
import MidPageCta from "@/components/MidPageCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real-Time Claim Documentation for Insurance Adjusters",
  description:
    "Adjuster Status Links, Xactimate-format scope sheets, and Time-to-Mitigation Certificates from RESTORA — real-time, no-login claim documentation for the South Puget Sound.",
};

const scopeSheetRows = [
  { category: "WTR", item: "Water extraction, wet carpet — per SF", qty: "480", unit: "SF" },
  { category: "WTR", item: "Air mover — per 24-hour period", qty: "6", unit: "EA" },
  { category: "WTR", item: "Dehumidifier, LGR — per 24-hour period", qty: "2", unit: "EA" },
  { category: "DRY", item: "Drywall removal, below flood cut — per LF", qty: "42", unit: "LF" },
  { category: "MIT", item: "Antimicrobial application — per SF", qty: "480", unit: "SF" },
];

export default function ForAdjustersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Real-Time Claim Documentation for Insurance Adjusters | RESTORA",
    description: metadata.description,
    publisher: { "@type": "LocalBusiness", name: site.name },
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: "For Adjusters", href: "/resources/for-adjusters" },
        ]}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-20 sm:px-6">
          <div className="shine flex h-16 w-16 items-center justify-center rounded-xl bg-paper-raised">
            <ShieldIcon className="h-9 w-9 text-midnight" />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">Resources for Insurance Adjusters</h1>
          <p className="mt-4 text-lg text-ink/70">
            RESTORA documents every water damage, fire damage, and mold remediation claim the same way, every
            time — real-time job status, timestamped readings, and estimate formats built for how adjusters
            actually review a file.
          </p>
          <div className="mt-6">
            <CallCta label="Talk to Our Claims Team" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="flex items-center gap-3">
          <ClockIcon className="h-7 w-7 text-midnight" />
          <h2 className="text-2xl font-bold text-ink">Adjuster Status Link</h2>
        </div>
        <p className="mt-4 text-ink/70">
          Every active RESTORA job gets a real-time, no-login status link you can open from a claim number — no
          portal account, no password. It shows dispatch and arrival time, timestamped job photos, and moisture-log
          or clearance readings as the job progresses, so you can check status between calls instead of waiting on
          a callback.
        </p>
        <div className="mt-6">
          <Link
            href="/resources/for-adjusters/demo"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-ink px-6 py-3 text-base font-semibold text-ink hover:bg-ink hover:text-paper"
          >
            See a Placeholder Example
          </Link>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="flex items-center gap-3">
            <DocumentIcon className="h-7 w-7 text-midnight" />
            <h2 className="text-2xl font-bold text-ink">Xactimate-Format Scope Sheet</h2>
          </div>
          <p className="mt-4 text-ink/70">
            Every estimate is delivered in a line-item, category-coded format consistent with how Xactimate scope
            sheets are structured, so it drops directly into your existing review process. Below is a placeholder
            example of the format &mdash; not a real claim.
          </p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-paper-raised text-ink">
                <tr>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Line Item</th>
                  <th className="px-4 py-3 font-semibold">Qty</th>
                  <th className="px-4 py-3 font-semibold">Unit</th>
                </tr>
              </thead>
              <tbody>
                {scopeSheetRows.map((r, i) => (
                  <tr key={i} className="border-t border-line">
                    <td className="px-4 py-3 font-semibold text-midnight">{r.category}</td>
                    <td className="px-4 py-3 text-ink/70">{r.item}</td>
                    <td className="px-4 py-3 text-ink/70">{r.qty}</td>
                    <td className="px-4 py-3 text-ink/70">{r.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink/60">Placeholder data shown for format illustration only.</p>
        </div>
      </section>

      <MidPageCta />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="flex items-center gap-3">
          <CheckIcon className="h-7 w-7 text-green" />
          <h2 className="text-2xl font-bold text-ink">Time-to-Mitigation Certificate</h2>
        </div>
        <p className="mt-4 text-ink/70">
          On request, we issue a timestamped certificate confirming when mitigation work began relative to the
          loss and first notice of loss &mdash; useful documentation when response time itself is part of the claim
          file.
        </p>
        <div className="shine mt-6 rounded-lg border border-line bg-paper-raised p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/60">Placeholder Example</p>
          <p className="mt-2 font-bold text-ink">Time-to-Mitigation Certificate</p>
          <dl className="mt-3 grid gap-2 text-sm text-ink/70 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-midnight">Claim #</dt>
              <dd>PLACEHOLDER-00000</dd>
            </div>
            <div>
              <dt className="font-semibold text-midnight">First Notice of Loss</dt>
              <dd>8:02 AM</dd>
            </div>
            <div>
              <dt className="font-semibold text-midnight">Mitigation Started</dt>
              <dd>8:52 AM</dd>
            </div>
            <div>
              <dt className="font-semibold text-midnight">Time to Mitigation</dt>
              <dd>50 minutes</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-t border-line bg-midnight">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-cream">Become a Preferred Partner</h2>
          <p className="mt-3 text-cream/80">
            If you handle claims across the South Puget Sound and want a direct line to our claims team, get in
            touch and we&rsquo;ll set up your agency as a preferred partner.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={`mailto:${site.email}?subject=Adjuster%20Preferred%20Partner%20Inquiry`}
              className="shine inline-flex items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-xl font-bold text-midnight hover:bg-green-dark hover:text-white"
            >
              Email Our Claims Team
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-lg font-bold text-ink">Related Service Pages</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/services/water-damage" className="rounded-md border border-line bg-paper-raised px-4 py-2 font-semibold text-midnight hover:border-midnight">
            Water Damage Restoration Process
          </Link>
          <Link href="/services/fire-damage" className="rounded-md border border-line bg-paper-raised px-4 py-2 font-semibold text-midnight hover:border-midnight">
            Fire Damage Restoration Process
          </Link>
          <Link href="/services/mold-remediation" className="rounded-md border border-line bg-paper-raised px-4 py-2 font-semibold text-midnight hover:border-midnight">
            Mold Remediation &amp; Documentation
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

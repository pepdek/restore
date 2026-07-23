import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckIcon, ClockIcon, DocumentIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Adjuster Status Link — Example",
  description: "A placeholder example of RESTORA's real-time, no-login Adjuster Status Link job page.",
  robots: { index: false, follow: true },
};

const timeline = [
  { time: "8:14 AM", label: "Job dispatched", detail: "Technician assigned, en route to property." },
  { time: "8:52 AM", label: "Technician on site", detail: "Arrival photo logged. Initial assessment started." },
  { time: "9:20 AM", label: "Moisture readings logged", detail: "Living room subfloor: 62% → flagged for extraction." },
  { time: "11:05 AM", label: "Extraction complete", detail: "412 gallons extracted. Drying equipment staged." },
  { time: "Day 2, 9:00 AM", label: "Moisture reading", detail: "Living room subfloor: 31%. Drying continues." },
  { time: "Day 4, 9:15 AM", label: "Final verification", detail: "All materials confirmed dry. Documentation packet ready." },
];

export default function AdjusterDemoPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: "For Adjusters", href: "/resources/for-adjusters" },
          { label: "Example", href: "/resources/for-adjusters/demo" },
        ]}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-20 sm:px-6">
          <p className="inline-block rounded-md bg-paper-raised px-3 py-1 text-xs font-semibold uppercase tracking-wide text-midnight">
            Placeholder Example — Not a Real Job
          </p>
          <h1 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">Adjuster Status Link</h1>
          <p className="mt-2 text-ink/70">Job #RST-24601 · 118 Placeholder Ave, Tacoma, WA</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="shine rounded-lg border border-line bg-paper-raised p-4">
            <ClockIcon className="h-6 w-6 text-midnight" />
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/70">Response Time</p>
            <p className="font-bold text-ink">38 minutes</p>
          </div>
          <div className="shine rounded-lg border border-line bg-paper-raised p-4">
            <DocumentIcon className="h-6 w-6 text-midnight" />
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/70">Status</p>
            <p className="font-bold text-ink">Drying — Day 2 of 4</p>
          </div>
          <div className="shine rounded-lg border border-line bg-paper-raised p-4">
            <CheckIcon className="h-6 w-6 text-green" />
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/70">Documentation</p>
            <p className="font-bold text-ink">6 entries logged</p>
          </div>
        </div>

        <h2 className="mt-12 text-xl font-bold text-ink">Job Timeline</h2>
        <ol className="mt-6 space-y-6 border-l border-line pl-6">
          {timeline.map((t) => (
            <li key={t.label} className="relative">
              <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-green" />
              <p className="text-sm font-semibold text-midnight">{t.time}</p>
              <p className="font-bold text-ink">{t.label}</p>
              <p className="mt-1 text-sm text-ink/70">{t.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-lg border border-dashed border-line bg-paper-raised p-6 text-center text-sm text-ink/70">
          [Placeholder — timestamped job photos and moisture-log readings would render here on a live job link]
        </div>

        <p className="mt-8 text-sm text-ink/60">
          This is a static example built with placeholder data to illustrate the concept. Live, per-job Adjuster
          Status Links (accessible via a no-login magic link sent with your claim number) are issued on active
          RESTORA jobs.
        </p>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { CallCta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How Restora tracks response time and documents every restoration job, hour by hour.",
};

const hours = [
  { time: "Hour 0", title: "You call", body: "A local technician answers directly — the call is logged the moment it comes in, which starts our response-time clock." },
  { time: "Hour 1", title: "Technician on site", body: "Our internal standard is on-site within 60 minutes for the South Sound core service area. Arrival time is recorded on the job file." },
  { time: "Hour 1-2", title: "Assessment & documentation", body: "Photos, moisture readings, and a written scope of damage are logged before any work begins — this becomes the record your insurer works from." },
  { time: "Day 1-5", title: "Mitigation work", body: "Extraction, drying, demolition, or containment, with daily readings logged so equipment isn't pulled early or left running longer than needed." },
  { time: "Ongoing", title: "Insurance communication", body: "Documentation is shared with your adjuster as the job progresses, not bundled at the end — fewer surprises, fewer disputes." },
  { time: "Completion", title: "Final walkthrough", body: "A closing report ties every step back to the original scope, signed off with you before the job is marked complete." },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-line bg-paper-raised">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">How It Works</h1>
          <p className="mt-4 text-lg text-ink-light">
            &ldquo;Fastest restoration team&rdquo; is a claim anyone can make. Here&rsquo;s how we make it provable —
            what gets tracked, what gets documented, and what happens hour by hour on a real job.
          </p>
          <div className="mt-6">
            <CallCta />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <ol className="space-y-10 border-l border-line pl-8">
          {hours.map((h) => (
            <li key={h.title} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-midnight" />
              <p className="text-sm font-bold uppercase tracking-wide text-midnight">{h.time}</p>
              <h2 className="mt-1 text-xl font-bold text-ink">{h.title}</h2>
              <p className="mt-2 text-ink-light">{h.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line bg-midnight-light">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-ink">See it in action</h2>
          <p className="mt-3 text-ink-light">
            Call now and the same documented process starts with your dispatch.
          </p>
          <div className="mt-6 flex justify-center">
            <CallCta />
          </div>
        </div>
      </section>
    </>
  );
}

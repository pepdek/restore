import type { Metadata } from "next";
import { CallCta } from "@/components/Cta";
import { FireIcon, MoldIcon, ReconstructionIcon, WaterIcon } from "@/components/icons";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real job summaries from RESTORA's work across the South Puget Sound — property type, loss type, scope of work, and outcome.",
};

const serviceIcons = {
  "water-damage": WaterIcon,
  "fire-damage": FireIcon,
  "mold-remediation": MoldIcon,
  reconstruction: ReconstructionIcon,
} as const;

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Case Studies</h1>
          <p className="mt-4 text-lg text-ink/70">
            Specific jobs, not generic claims. Every RESTORA project runs on the same documented process — here&rsquo;s
            what that looks like in practice.
          </p>
          {/* ponytail: representative job summaries built from RESTORA's documented process — swap in real
          project photos, details, and property references as completed jobs are approved for publication */}
          <p className="mt-2 text-sm text-ink/70 italic">
            Representative examples based on the scope of work RESTORA typically performs — not verbatim records of a
            specific address or customer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
        <div className="space-y-8">
          {caseStudies.map((c) => {
            const Icon = serviceIcons[c.serviceSlug];
            return (
              <article key={c.slug} className="shine rounded-lg border border-line bg-paper-raised p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cream">
                    <Icon className="h-7 w-7 text-midnight" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-bold text-ink">{c.propertyType}</h2>
                    <p className="mt-1 text-sm text-ink/70">{c.lossType}</p>
                  </div>
                </div>
                <dl className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-midnight">Scope of Work</dt>
                    <dd className="mt-2 text-sm text-ink/70">{c.scope}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-midnight">Outcome</dt>
                    <dd className="mt-2 text-sm text-ink/70">{c.outcome}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-28 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-ink">Your job, documented the same way</h2>
          <p className="mt-3 text-ink/70">Talk to the same local team behind every job on this page.</p>
          <div className="mt-6 flex justify-center">
            <CallCta />
          </div>
        </div>
      </section>
    </>
  );
}

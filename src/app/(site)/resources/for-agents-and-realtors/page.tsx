import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FastTrackForm from "@/components/FastTrackForm";
import { ClockIcon, DocumentIcon } from "@/components/icons";
import MidPageCta from "@/components/MidPageCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fast-Track Restoration Assessments for Real Estate Deadlines",
  description:
    "RESTORA's Fast-Track Intake gets real estate agents and inspectors a restoration assessment and estimate within 24-48 hours, built for transaction timelines.",
};

export default function ForAgentsAndRealtorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Fast-Track Restoration Assessments for Real Estate Deadlines | RESTORA",
    description: metadata.description,
    publisher: { "@type": "LocalBusiness", name: site.name },
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: "For Agents & Realtors", href: "/resources/for-agents-and-realtors" },
        ]}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-20 sm:px-6">
          <div className="shine flex h-16 w-16 items-center justify-center rounded-xl bg-paper-raised">
            <DocumentIcon className="h-9 w-9 text-midnight" />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">For Agents &amp; Realtors</h1>
          <p className="mt-4 text-lg text-ink/70">
            A pre-sale inspection finding, a mold problem discovered during due diligence, or fire or water damage
            on a listing doesn&rsquo;t wait for a normal contractor queue &mdash; and neither does a closing date.
            Fast-Track Intake gets your restoration assessment moving immediately.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="flex items-center gap-3">
          <ClockIcon className="h-7 w-7 text-midnight" />
          <h2 className="text-2xl font-bold text-ink">24-48 Hour Assessment Turnaround</h2>
        </div>
        <p className="mt-4 text-ink/70">
          Submit a Fast-Track request and RESTORA schedules a site assessment and delivers a written estimate
          within 24 to 48 hours &mdash; built specifically around real estate transaction timelines, where a scope
          and estimate need to exist before a closing date, not after. This is the same documented process behind
          our{" "}
          <Link href="/services/reconstruction" className="text-midnight underline">
            restoration reconstruction services
          </Link>
          , just prioritized for transaction deadlines.
        </p>
      </section>

      <MidPageCta />

      <section className="border-t border-line">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
          <h2 className="text-xl font-bold text-ink">Submit a Fast-Track Request</h2>
          <p className="mt-2 text-sm text-ink/70">
            Tell us about the property and timeline, and we&rsquo;ll follow up to schedule the assessment.
          </p>
          <div className="mt-6">
            <FastTrackForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-lg font-bold text-ink">Related Resources</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/resources/for-property-managers" className="rounded-md border border-line bg-paper-raised px-4 py-2 font-semibold text-midnight hover:border-midnight">
            For Property Managers
          </Link>
          <Link href="/services/reconstruction" className="rounded-md border border-line bg-paper-raised px-4 py-2 font-semibold text-midnight hover:border-midnight">
            Restoration Reconstruction
          </Link>
          <a href={site.phoneHref} className="rounded-md border border-line bg-paper-raised px-4 py-2 font-semibold text-midnight hover:border-midnight">
            Call {site.phone}
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

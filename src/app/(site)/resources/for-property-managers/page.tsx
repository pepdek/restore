import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckIcon, ClockIcon, ShieldIcon } from "@/components/icons";
import MidPageCta from "@/components/MidPageCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Standing-Response Agreements for Property Managers & HOAs",
  description:
    "A pre-negotiated response-time commitment and priority dispatch for property management companies and HOAs across the South Puget Sound.",
};

const points = [
  { Icon: ClockIcon, text: "A pre-negotiated response-time commitment, agreed before an event happens" },
  { Icon: ShieldIcon, text: "Priority dispatch across your entire portfolio, not a queue you join after the fact" },
  { Icon: CheckIcon, text: "One documented process across every unit and building you manage" },
];

export default function ForPropertyManagersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Standing-Response Agreements for Property Managers & HOAs | RESTORA",
    description: metadata.description,
    publisher: { "@type": "LocalBusiness", name: site.name },
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: "For Property Managers", href: "/resources/for-property-managers" },
        ]}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-20 sm:px-6">
          <div className="shine flex h-16 w-16 items-center justify-center rounded-xl bg-paper-raised">
            <ShieldIcon className="h-9 w-9 text-midnight" />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">For Property Managers</h1>
          <p className="mt-4 text-lg text-ink/70">
            A Standing-Response Agreement puts response-time commitments and priority dispatch in place for your
            whole portfolio before you ever need to make an emergency call.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">What a Standing-Response Agreement Covers</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.text} className="shine rounded-lg border border-line bg-paper-raised p-6">
              <p.Icon className="h-8 w-8 text-midnight" />
              <p className="mt-3 text-sm text-ink/70">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-ink/70">
          This is a relationship, not a self-serve tool — every agreement is scoped to your portfolio (unit count,
          buildings, typical loss types) in a conversation with our team, covering the same{" "}
          <Link href="/services/water-damage" className="text-midnight underline">
            water damage restoration
          </Link>
          ,{" "}
          <Link href="/services/reconstruction" className="text-midnight underline">
            restoration reconstruction
          </Link>
          , and mold and fire services we run on every RESTORA job.
        </p>
      </section>

      <MidPageCta />

      <section className="border-t border-line bg-midnight">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-cream">Schedule a Conversation</h2>
          <p className="mt-3 text-cream/80">
            Tell us about your portfolio and we&rsquo;ll set up a time to talk through a Standing-Response
            Agreement.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={`mailto:${site.email}?subject=Standing-Response%20Agreement%20Inquiry`}
              className="shine inline-flex items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-xl font-bold text-midnight hover:bg-green-dark hover:text-white"
            >
              Email Our Team
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

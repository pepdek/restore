import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import { CheckIcon, ClockIcon, DocumentIcon, ShieldIcon } from "@/components/icons";
import { resourceLinks } from "@/lib/resources";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources for Referral Partners",
  description:
    "Tools and resources for RESTORA's referral partners — insurance adjusters, real estate agents, property managers, and inspectors — in the South Puget Sound.",
};

const audiences = [
  { name: "Insurance Professionals" as const, Icon: ShieldIcon },
  { name: "Real Estate & Inspectors" as const, Icon: DocumentIcon },
  { name: "Property Managers" as const, Icon: CheckIcon },
  { name: "Storm Preparedness" as const, Icon: ClockIcon },
];

const faqs = [
  {
    q: "Does RESTORA work directly with insurance adjusters?",
    a: "Yes. RESTORA documents every job with timestamped photos and moisture or clearance readings from the first hour, and bills carriers directly wherever a direction to pay is available. Our for-adjusters resources page covers the specific tools we provide, including real-time job status links and scope sheet templates.",
  },
  {
    q: "How fast can RESTORA respond during a real estate transaction deadline?",
    a: "Our Fast-Track Intake for agents and realtors targets a 24-48 hour assessment and estimate turnaround specifically because transaction timelines don't move. See the For Agents & Realtors page for how to submit a Fast-Track request.",
  },
  {
    q: "Can property managers set up a standing response agreement?",
    a: "Yes — the Standing-Response Agreement pre-negotiates response-time commitments and priority dispatch for property management companies and HOAs before an event happens, rather than starting from scratch on every call.",
  },
];

export default function ResourcesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Resources for Referral Partners | RESTORA",
    description: metadata.description,
    publisher: { "@type": "LocalBusiness", name: site.name },
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }]} />

      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-20 sm:px-6">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Resources</h1>
          <p className="mt-4 text-lg text-ink/70">
            Tools and resources for our referral partners — adjusters, agents, property managers, and trade
            partners working alongside RESTORA on water damage, fire damage, mold remediation, and reconstruction
            jobs across the South Puget Sound.
          </p>
        </div>
      </section>

      {audiences.map(({ name, Icon }) => {
        const links = resourceLinks.filter((r) => r.audience === name);
        return (
          <section key={name} className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="flex items-center gap-3">
              <Icon className="h-7 w-7 text-midnight" />
              <h2 className="text-xl font-bold text-ink">{name}</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {links.map((r) => (
                <Link
                  key={r.slug}
                  href={r.href}
                  className="shine rounded-lg border border-line bg-paper-raised p-6 hover:border-midnight"
                >
                  <h3 className="font-bold text-midnight">{r.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{r.description}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <Faq items={faqs} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

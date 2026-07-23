import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckIcon, FireIcon, MoldIcon, WaterIcon } from "@/components/icons";
import PrintButton from "@/components/PrintButton";
import { serviceContent } from "@/lib/serviceContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The First 24 Hours: Water, Fire & Mold Damage Guide",
  description:
    "A printable, co-brandable one-pager covering what to do before help arrives for water damage, fire damage, and mold — from RESTORA.",
};

const sections = [
  { slug: "water-damage", Icon: WaterIcon, href: "/services/water-damage" },
  { slug: "fire-damage", Icon: FireIcon, href: "/services/fire-damage" },
  { slug: "mold-remediation", Icon: MoldIcon, href: "/services/mold-remediation" },
] as const;

export default function First24HoursPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The First 24 Hours: Water, Fire & Mold Damage Guide | RESTORA",
    description: metadata.description,
    publisher: { "@type": "LocalBusiness", name: site.name },
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "First 24 Hours", href: "/resources/first-24-hours" }]} />

      <section className="border-b border-line print:border-none">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-20 sm:px-6">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">The First 24 Hours</h1>
          <p className="mt-4 text-lg text-ink/70">
            What to do &mdash; and what to avoid &mdash; before restoration help arrives, for water damage, fire
            damage, and mold. Shareable and co-brandable: insurance agents and real estate agents are welcome to
            forward this page to their own clients.
          </p>
          <div className="mt-6 print:hidden">
            <PrintButton />
          </div>
        </div>
      </section>

      {sections.map(({ slug, Icon, href }) => {
        const content = serviceContent[slug];
        return (
          <section key={slug} className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
            <div className="flex items-center gap-3">
              <Icon className="h-8 w-8 text-midnight" />
              <h2 className="text-2xl font-bold text-ink">{content.name}</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-bold text-midnight">Do</h3>
                <ul className="mt-3 space-y-2">
                  {content.doList.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink/70">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-midnight">Don&rsquo;t</h3>
                <ul className="mt-3 space-y-2">
                  {content.dontList.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink/70">
                      <span className="mt-0.5 shrink-0 font-bold text-midnight/40">&times;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href={href} className="mt-4 inline-block text-sm font-semibold text-midnight underline print:hidden">
              Full {content.name} process &rarr;
            </Link>
          </section>
        );
      })}

      <section className="border-t border-line bg-midnight print:hidden">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-xl font-bold text-cream">Active damage right now?</h2>
          <div className="mt-6 flex justify-center">
            <a
              href={site.phoneHref}
              className="shine inline-flex items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-xl font-bold text-midnight hover:bg-green-dark hover:text-white"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

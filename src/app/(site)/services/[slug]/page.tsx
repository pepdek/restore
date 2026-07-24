import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ComparisonBlock from "@/components/ComparisonBlock";
import { CallCta } from "@/components/Cta";
import DoDontChecklist from "@/components/DoDontChecklist";
import Faq from "@/components/Faq";
import GuaranteeBlock from "@/components/GuaranteeBlock";
import HeroImage from "@/components/HeroImage";
import OfferBlock from "@/components/OfferBlock";
import QuickLinks from "@/components/QuickLinks";
import WhyRestora from "@/components/WhyRestora";
import { FireIcon, MoldIcon, ReconstructionIcon, WaterIcon } from "@/components/icons";
import { images } from "@/lib/images";
import { serviceContent } from "@/lib/serviceContent";
import { services, site } from "@/lib/site";

const serviceIcons = {
  "water-damage": WaterIcon,
  "fire-damage": FireIcon,
  "mold-remediation": MoldIcon,
  reconstruction: ReconstructionIcon,
} as const;

const serviceHeroImages = {
  "water-damage": images.waterDamage,
  "fire-damage": images.fireDamage,
  "mold-remediation": images.moldRemediation,
  reconstruction: images.reconstruction,
} as const;

const relatedResources: Record<string, { href: string; label: string }[]> = {
  "water-damage": [
    { href: "/resources/for-adjusters", label: "Real-time documentation for adjusters on water damage claims" },
    { href: "/resources/first-24-hours", label: "The First 24 Hours guide for water damage" },
    { href: "/resources/for-property-managers", label: "Standing-Response Agreements for property managers" },
  ],
  "fire-damage": [
    { href: "/resources/for-adjusters", label: "Real-time documentation for adjusters on fire damage claims" },
    { href: "/resources/first-24-hours", label: "The First 24 Hours guide for fire and smoke damage" },
  ],
  "mold-remediation": [
    { href: "/resources/for-adjusters", label: "Scope sheets and clearance documentation for mold claims" },
    { href: "/resources/first-24-hours", label: "The First 24 Hours guide for a mold problem" },
  ],
  reconstruction: [
    { href: "/resources/for-agents-and-realtors", label: "Fast-Track reconstruction assessments for real estate deadlines" },
    { href: "/resources/for-property-managers", label: "Standing-Response Agreements for property managers" },
  ],
};

export function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = serviceContent[slug];
  if (!content) return {};
  return { title: content.name, description: content.metaDescription };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = serviceContent[slug];
  if (!content) notFound();
  const Icon = serviceIcons[slug as keyof typeof serviceIcons];
  const heroImage = serviceHeroImages[slug as keyof typeof serviceHeroImages];
  const relatedServices = services.filter((s) => s.slug !== slug);
  const resources = relatedResources[slug] ?? [];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: content.name,
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone },
    areaServed: "South Puget Sound, WA",
    description: content.metaDescription,
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: content.name, href: `/services/${slug}` }]} />

      {/* 1. Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:py-20 sm:px-6 md:grid-cols-2 md:items-center lg:py-28">
          <div>
            <div className="shine flex h-16 w-16 items-center justify-center rounded-xl bg-paper-raised">
              <Icon className="h-9 w-9 text-midnight" />
            </div>
            <h1 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">{content.name}</h1>
            <p className="mt-4 text-lg text-ink/70">{content.whyItMatters}</p>
            <div className="mt-6">
              <CallCta />
            </div>
          </div>
          <HeroImage image={heroImage} priority className="aspect-[4/3] md:order-last" />
        </div>
      </section>

      {/* 2. Quick-answer intro */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-lg text-ink/70">{content.quickAnswer}</p>
      </section>

      {/* 3. Quick links */}
      <QuickLinks />

      {/* 4. What is X? */}
      <section id="what-is" className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Is {content.name}?</h2>
        <div className="mt-6 space-y-4">
          {content.whatIsBody.map((p, i) => (
            <p key={i} className="text-ink/70">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* 5. Why RESTORA */}
      <div className="border-t border-line bg-paper">
        <WhyRestora />
      </div>

      {/* 6. Do / Don't checklist */}
      <DoDontChecklist doList={content.doList} dontList={content.dontList} />

      {/* 7. Process */}
      <section id="process" className="border-t border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The RESTORA Process</h2>
          <ol className="mt-6 space-y-4">
            {content.process.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper-raised text-sm font-bold text-midnight">
                  {i + 1}
                </span>
                <span className="pt-1 text-ink/70">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Comparison block */}
      <ComparisonBlock />

      {/* 9. Insurance */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
        <div className="shine rounded-2xl bg-paper-raised p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-ink">Insurance &amp; Billing</h2>
          <p className="mt-4 text-ink/70">{content.insurance}</p>
        </div>
      </section>

      {/* 10. Offer */}
      <OfferBlock name={content.offerName} bullets={content.offerBullets} />

      {/* Guarantee */}
      <GuaranteeBlock name={content.guaranteeName} body={content.guaranteeBody} />

      {/* 11. FAQ */}
      <div id="faq">
        <Faq items={content.faqs} />
      </div>

      {/* 12. Related resources */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 sm:px-6">
          <h2 className="text-xl font-bold text-ink">Related Services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-lg border border-line bg-paper-raised p-4 text-sm font-semibold text-midnight hover:border-midnight"
              >
                {s.name}
              </Link>
            ))}
            <Link
              href="/insurance-claims"
              className="rounded-lg border border-line bg-paper-raised p-4 text-sm font-semibold text-midnight hover:border-midnight"
            >
              Insurance Claims &amp; Direct Billing
            </Link>
          </div>

          {resources.length > 0 && (
            <>
              <h2 className="mt-12 text-xl font-bold text-ink">Resources for This Job Type</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {resources.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="rounded-lg border border-line bg-paper-raised p-4 text-sm font-semibold text-midnight hover:border-midnight"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Final CTA band */}
      <section className="border-t border-line bg-midnight">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-xl font-bold text-cream">Need help right now?</h2>
          <p className="mt-2 text-cream/70">A local technician is available 24/7.</p>
          <div className="mt-6 flex justify-center">
            <CallCta />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}

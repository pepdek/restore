import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CallCta } from "@/components/Cta";
import Faq from "@/components/Faq";
import HeroImage from "@/components/HeroImage";
import { FireIcon, MoldIcon, ReconstructionIcon, WaterIcon } from "@/components/icons";
import { images } from "@/lib/images";
import { serviceContent } from "@/lib/serviceContent";
import { site } from "@/lib/site";

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

      <section className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">The RESTORA Process</h2>
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
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
          <div className="shine rounded-2xl bg-paper-raised p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-ink">Insurance &amp; Billing</h2>
            <p className="mt-4 text-ink/70">{content.insurance}</p>
          </div>
        </div>
      </section>

      <Faq items={content.faqs} />

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <div className="shine rounded-lg border border-line bg-paper-raised p-8 text-center">
          <h2 className="text-xl font-bold text-ink">Need help right now?</h2>
          <p className="mt-2 text-ink/70">A local technician is available 24/7.</p>
          <div className="mt-6">
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

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CallCta } from "@/components/Cta";
import Faq from "@/components/Faq";
import { serviceContent } from "@/lib/serviceContent";
import { site } from "@/lib/site";

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
      <section className="border-b border-line bg-paper-raised">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">{content.name}</h1>
          <p className="mt-4 text-lg text-ink-light">{content.whyItMatters}</p>
          <div className="mt-6">
            <CallCta />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">The Restora Process</h2>
        <ol className="mt-6 space-y-4">
          {content.process.map((step, i) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-light text-sm font-bold text-teal-dark">
                {i + 1}
              </span>
              <span className="pt-1 text-ink-light">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-teal-light">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">Insurance &amp; Billing</h2>
          <p className="mt-4 text-ink-light">{content.insurance}</p>
        </div>
      </section>

      <Faq items={content.faqs} />

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <div className="rounded-lg border border-line bg-paper-raised p-8 text-center">
          <h2 className="text-xl font-bold text-ink">Need help right now?</h2>
          <p className="mt-2 text-ink-light">A local technician is available 24/7.</p>
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

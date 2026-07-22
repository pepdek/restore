export type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">Frequently Asked Questions</h2>
      <div className="mt-8 divide-y divide-line border-t border-line">
        {items.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span className="text-teal group-open:rotate-45 transition-transform">+</span>
              </span>
            </summary>
            <p className="mt-3 text-ink-light">{item.a}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}

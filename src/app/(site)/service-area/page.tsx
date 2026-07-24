import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallCta } from "@/components/Cta";
import HeroImage from "@/components/HeroImage";
import MapPlaceholder from "@/components/MapPlaceholder";
import { images } from "@/lib/images";
import { serviceAreaCities, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Area",
  description: "RESTORA provides 24/7 restoration service across Tacoma, Lakewood, Puyallup, and the greater South Puget Sound.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  telephone: site.phone,
  areaServed: serviceAreaCities.map((city) => ({ "@type": "City", name: city })),
};

export default function ServiceAreaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Service Area", href: "/service-area" }]} />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:py-20 sm:px-6 md:grid-cols-2 md:items-center lg:py-28">
          <div>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Service Area</h1>
            <p className="mt-4 text-lg text-ink/70">
              RESTORA dispatches locally across the South Puget Sound. Coverage list below is current as of publish
              — call to confirm service at your address.
            </p>
            <div className="mt-6">
              <CallCta />
            </div>
          </div>
          <HeroImage image={images.serviceArea} priority className="aspect-[4/3] md:order-last" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {serviceAreaCities.map((city) => (
            <div key={city} className="rounded-md border border-line bg-paper-raised px-4 py-3 text-ink/70">
              {city}, WA
            </div>
          ))}
        </div>

        {/* ponytail: static embed placeholder, swap for a real Maps embed key once client confirms coverage */}
        <MapPlaceholder label="South Puget Sound coverage area" className="mt-10 h-72" />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  );
}

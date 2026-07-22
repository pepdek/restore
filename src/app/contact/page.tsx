import type { Metadata } from "next";
import { CallCta } from "@/components/Cta";
import LeadForm from "@/components/LeadForm";
import MapPlaceholder from "@/components/MapPlaceholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach RESTORA 24/7 for emergency water, fire, and mold restoration in the South Puget Sound.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-jet text-cream">
        <div className="mx-auto max-w-4xl px-4 py-6 text-center sm:px-6">
          <p className="font-bold">
            In an active emergency? Call now — a technician is available 24/7.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Contact RESTORA</h1>
        <p className="mt-4 text-lg text-ink/70">
          Phone is fastest for anything urgent. The form below is for non-emergency questions or to schedule an
          assessment.
        </p>
        <div className="mt-6">
          <CallCta />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <LeadForm />
          <div>
            <div className="shine rounded-lg border border-line bg-paper-raised p-6">
              <p className="font-semibold text-ink">{site.name}</p>
              <p className="mt-2 text-sm text-ink/70">{site.address}</p>
              <a href={site.phoneHref} className="mt-2 block text-sm font-semibold text-midnight">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-midnight">
                {site.email}
              </a>
            </div>
            {/* ponytail: static map placeholder, swap for an embedded map once the client confirms an address to publish */}
            <MapPlaceholder label={site.address} className="mt-6 h-56" />
          </div>
        </div>
      </section>
    </>
  );
}

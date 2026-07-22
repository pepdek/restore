import type { Metadata } from "next";
import { CallCta } from "@/components/Cta";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Restora 24/7 for emergency water, fire, and mold restoration in the South Puget Sound.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-alert text-white">
        <div className="mx-auto max-w-4xl px-4 py-6 text-center sm:px-6">
          <p className="font-bold">In an active emergency? Call now — a technician is available 24/7.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Contact Restora</h1>
        <p className="mt-4 text-lg text-ink-light">
          Phone is fastest for anything urgent. The form below is for non-emergency questions or to schedule an
          assessment.
        </p>
        <div className="mt-6">
          <CallCta />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <LeadForm />
          <div>
            <div className="rounded-lg border border-line bg-paper-raised p-6">
              <p className="font-semibold text-ink">{site.name}</p>
              <p className="mt-2 text-sm text-ink-light">{site.address}</p>
              <a href={site.phoneHref} className="mt-2 block text-sm font-semibold text-teal">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-teal">
                {site.email}
              </a>
            </div>
            {/* ponytail: static map placeholder, swap for an embedded map once the client confirms an address to publish */}
            <div className="mt-6 flex h-56 items-center justify-center rounded-lg border border-dashed border-line bg-teal-light text-sm text-teal-dark">
              Map placeholder
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

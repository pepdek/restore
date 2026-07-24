import type { Metadata } from "next";
import { CallCta } from "@/components/Cta";
import HeroImage from "@/components/HeroImage";
import PartnerLogos from "@/components/PartnerLogos";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "RESTORA is a locally owned restoration company in the South Puget Sound — IICRC certified, licensed, and independent.",
};

const credentials = [
  { title: "IICRC Certified", body: "Technicians hold current IICRC certifications in water damage restoration, fire and smoke restoration, and applied microbial remediation." },
  { title: "Licensed & Insured", body: `Washington State Contractor License ${site.license}. Fully bonded and insured for residential and commercial work.` },
  { title: "Locally Owned & Operated", body: "RESTORA is independently owned and based in Tacoma — not a franchise territory of a national chain." },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:py-20 sm:px-6 md:grid-cols-2 md:items-center lg:py-28">
          <div>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">About RESTORA</h1>
            <p className="mt-4 text-lg text-ink/70">
              National restoration chains sell you a franchise territory and a call center. We&rsquo;re a local team
              that answers our own phones, drives our own trucks, and stands behind our own work.
            </p>
          </div>
          <HeroImage image={images.about} priority className="aspect-[4/3] md:order-last" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Local, Not a Franchise</h2>
        <p className="mt-4 text-ink/70">
          Franchise restoration brands look consistent from the outside, but the crew that shows up is often a
          subcontractor operating under a licensing agreement, with response times set by a national dispatch queue.
          RESTORA is independently owned in Tacoma. The person who answers your call, the technician who shows up,
          and the owner who stands behind the invoice are the same local operation — which is also why we can commit
          to tracked response times instead of a national average.
        </p>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
          <div className="shine rounded-2xl bg-paper-raised p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-ink">Certifications &amp; Licensing</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {credentials.map((c) => (
                <div key={c.title}>
                  <h3 className="font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{c.body}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-12 text-sm font-semibold uppercase tracking-wide text-ink/70">
              Regulatory &amp; Industry Affiliations
            </h3>
            <PartnerLogos />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:py-28 text-center sm:px-6">
        <h2 className="text-xl font-bold text-ink">Talk to a local technician</h2>
        <div className="mt-6 flex justify-center">
          <CallCta />
        </div>
      </section>
    </>
  );
}

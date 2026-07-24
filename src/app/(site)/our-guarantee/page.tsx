import type { Metadata } from "next";
import { CallCta } from "@/components/Cta";
import Faq from "@/components/Faq";
import { ShieldIcon } from "@/components/icons";
import { serviceContent } from "@/lib/serviceContent";

export const metadata: Metadata = {
  title: "Our Guarantee",
  description:
    "RESTORA's guarantee stack — a clearance test and workmanship guarantee on every water, fire, mold, and reconstruction job.",
};

const guarantees = Object.values(serviceContent).map((c) => ({
  service: c.name,
  name: c.guaranteeName,
  body: c.guaranteeBody,
}));

const faqs = [
  {
    q: "What does the guarantee cover?",
    a: "Each guarantee covers the specific source and area RESTORA treated on your job. If the post-work verification or clearance test for that scope doesn't pass, we return and complete additional work at no charge until it does.",
  },
  {
    q: "What doesn't the guarantee cover?",
    a: "The guarantee does not cover new contamination or damage caused by a new or unresolved moisture, fire, or structural source that the customer hasn't addressed — for example, an ongoing roof leak, an unrepaired plumbing issue, or a second unrelated event. It covers the work we performed, not conditions outside our original scope.",
  },
  {
    q: "How is the guarantee verified?",
    a: "Every guarantee is backed by third-party post-work verification — a clearance test for mold and smoke odor jobs, a moisture verification for water damage, and a final walkthrough for reconstruction — documented the same way on every job, not a visual check.",
  },
  {
    q: "Is the guarantee an extra cost?",
    a: "No. Verification and the guarantee are bundled into the offer package for each service, not sold as an add-on.",
  },
];

export default function OurGuaranteePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
          <div className="shine flex h-16 w-16 items-center justify-center rounded-xl bg-paper-raised">
            <ShieldIcon className="h-9 w-9 text-midnight" />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">Our Guarantee</h1>
          <p className="mt-4 text-lg text-ink/70">
            Every RESTORA job includes third-party verification bundled in, not sold as an add-on — and a guarantee
            that if that verification doesn&rsquo;t pass, we come back and finish the job at no additional charge.
          </p>
          <div className="mt-6">
            <CallCta />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">The Guarantee Stack</h2>
        <div className="mt-8 space-y-6">
          {guarantees.map((g) => (
            <div key={g.service} className="shine rounded-lg border border-line bg-paper-raised p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-green">{g.service}</p>
              <h3 className="mt-1 font-bold text-ink">{g.name}</h3>
              <p className="mt-2 text-ink/70">{g.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqs} />
    </>
  );
}

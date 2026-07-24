import { Suspense } from "react";
import type { Metadata } from "next";
import PartnerReferralForm from "@/components/PartnerReferralForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quick Referral",
  description: "Submit a homeowner referral to RESTORA in under 20 seconds — for trade partners on-site.",
};

export default function PartnerReferralPage() {
  return (
    <section className="mx-auto max-w-lg px-4 py-10 sm:py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold text-ink">Quick Referral</h1>
      <p className="mt-2 text-ink/70">Send us a homeowner in under 20 seconds. We&rsquo;ll take it from here.</p>
      <div className="mt-8">
        <Suspense fallback={null}>
          <PartnerReferralForm />
        </Suspense>
      </div>
      <p className="mt-8 text-center text-sm text-ink/60">
        Need to talk to someone instead?{" "}
        <a href={site.phoneHref} className="font-semibold text-midnight underline">
          Call {site.phone}
        </a>
      </p>
    </section>
  );
}

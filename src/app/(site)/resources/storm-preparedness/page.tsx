import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import StormSignupForm from "@/components/StormSignupForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Storm Preparedness Priority Notification",
  description: "Sign up for priority notification from RESTORA ahead of forecasted storm events in the South Puget Sound.",
};

export default function StormPreparednessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Storm Preparedness Priority Notification | RESTORA",
    description: metadata.description,
    publisher: { "@type": "LocalBusiness", name: site.name },
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Storm Preparedness", href: "/resources/storm-preparedness" }]} />

      <section className="mx-auto max-w-2xl px-4 py-12 sm:py-20 sm:px-6">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Storm Preparedness</h1>
        <p className="mt-4 text-ink/70">
          Sign up ahead of a forecasted storm and we&rsquo;ll notify you directly if severe weather is expected in
          your area &mdash; useful for property managers, agents, and homeowners who want a head start before storm
          damage calls surge.
        </p>
        <div className="mt-8">
          <StormSignupForm />
        </div>
        <p className="mt-6 text-sm text-ink/60">
          Already dealing with storm damage right now?{" "}
          <a href={site.phoneHref} className="font-semibold text-midnight underline">
            Call {site.phone}
          </a>{" "}
          instead of signing up here.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

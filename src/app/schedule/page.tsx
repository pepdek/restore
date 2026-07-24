import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CallCta, RequestServicesCta } from "@/components/Cta";
import Faq from "@/components/Faq";
import Logo from "@/components/Logo";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import { CheckIcon, DocumentIcon, ShieldIcon } from "@/components/icons";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule Restoration Service",
  description:
    "One local RESTORA team handles your water, fire, mold, or reconstruction job start to finish — insurance handled, every step verified.",
};

const benefits = [
  {
    Icon: ShieldIcon,
    title: "One Team, Start to Finish",
    body: "The same local RESTORA crew from first call to final walkthrough — never a rotating subcontractor.",
  },
  {
    Icon: DocumentIcon,
    title: "Insurance Handled For You",
    body: "We bill your carrier directly and manage the paperwork, so you never have to call your adjuster yourself.",
  },
  {
    Icon: CheckIcon,
    title: "Every Step Verified",
    body: "Third-party clearance testing on every job, backed by our guarantee — not just our word for it.",
  },
];

const faqs = [
  {
    q: "How fast can RESTORA get to my property?",
    a: "Response time is tracked and logged on every dispatch. For active emergencies, call directly — for scheduled work, submit the form below and a team member will call within the hour.",
  },
  {
    q: "Do I have to deal with my insurance company myself?",
    a: "No. RESTORA documents every job and bills your carrier directly wherever a direction to pay is available, so you're not managing the claim alone.",
  },
  {
    q: "What if I'm not sure what kind of damage I have?",
    a: "Select \"Not Sure\" on the form and describe what you're seeing in the details field — we'll assess on-site and confirm scope before any work begins.",
  },
  {
    q: "Is there a guarantee on the work?",
    a: "Yes — every job includes a guarantee tied to third-party verification. See our full guarantee terms for what's covered and what isn't.",
  },
];

export default function SchedulePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Schedule Restoration Service | RESTORA",
    description: metadata.description,
    publisher: { "@type": "LocalBusiness", name: site.name },
  };

  return (
    <>
      {/* Minimal header — logo + phone CTA only, no full site nav, deliberate single conversion path */}
      <header className="border-b border-line bg-midnight">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/">
            <Logo className="text-2xl" />
          </Link>
          <CallCta />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:py-20 sm:px-6 md:grid-cols-2 md:items-center lg:py-28">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-midnight">South Puget Sound Restoration</p>
              <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
                Get Your Home Back — One Team, Start to Finish
              </h1>
              <p className="mt-4 text-lg text-ink/70">
                Water, fire, mold, or reconstruction — the same local RESTORA crew handles it all, insurance
                included, every step verified.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CallCta />
                <RequestServicesCta />
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-ink/70">
                <span className="flex text-midnight" aria-hidden>
                  {"★★★★★"}
                </span>
                <span>Rated by South Sound homeowners &mdash; reviews coming soon</span>
              </div>
            </div>
            <div className="shine relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={images.home.src} alt={images.home.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
            </div>
          </div>
        </section>

        {/* Video placeholder */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-ink">See How RESTORA Works</h2>
          <div className="shine relative mt-6 flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-midnight">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green">
              <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9 text-midnight" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="absolute bottom-4 rounded-md bg-jet/60 px-3 py-1 text-xs font-semibold text-cream">
              Video placeholder — coming soon
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-line">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.title} className="shine rounded-lg border border-line bg-paper-raised p-6 text-center">
                  <b.Icon className="mx-auto h-10 w-10 text-midnight" />
                  <h3 className="mt-4 font-bold text-ink">{b.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee band */}
        <section className="bg-midnight">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <ShieldIcon className="mx-auto h-12 w-12 text-green" />
            <h2 className="mt-3 text-2xl font-bold text-cream sm:text-3xl">The Clearance Test Guarantee</h2>
            <p className="mt-3 text-cream/80">
              If the post-work verification on your job doesn&rsquo;t pass, we come back and finish the work at no
              additional charge until it does.{" "}
              <Link href="/our-guarantee" className="font-semibold text-cream underline">
                See full guarantee terms
              </Link>
              .
            </p>
            <div className="mt-6 flex justify-center">
              <RequestServicesCta />
            </div>
          </div>
        </section>

        {/* Lead capture form */}
        <section id="request-service" className="border-b border-line">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Request Services</h2>
            <p className="mt-2 text-ink/70">Tell us what&rsquo;s going on and we&rsquo;ll call within the hour.</p>
            <div className="mt-8">
              <ServiceRequestForm />
            </div>
          </div>
        </section>

        <Faq items={faqs} />

        {/* Testimonials — placeholder only, no fabricated reviews */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Homeowners Say</h2>
            <p className="mt-2 text-sm text-ink/60">Placeholder — real testimonials will replace these as reviews come in.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg border border-dashed border-line bg-paper-raised p-6">
                  <span className="flex text-midnight" aria-hidden>
                    {"★★★★★"}
                  </span>
                  <p className="mt-3 text-sm text-ink/70">
                    [Placeholder testimonial {i} — real customer feedback will appear here]
                  </p>
                  <p className="mt-4 text-sm font-semibold text-ink/60">Placeholder Reviewer</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-midnight">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="text-2xl font-bold text-cream">Ready When You Are</h2>
            <div className="mt-6 flex justify-center">
              <CallCta />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-midnight">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-cream/70 sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.license}
          </p>
          <Link href="/" className="mt-2 inline-block underline">
            Visit the full RESTORA site
          </Link>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

import type { Metadata } from "next";
import { CallCta } from "@/components/Cta";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Insurance Claims & Direct Billing",
  description: "How Restora bills insurance directly, what a direction to pay is, and how to start a restoration claim.",
};

const faqs = [
  { q: "What does \"direct billing\" actually mean?", a: "It means we invoice your insurance carrier directly for covered work, instead of you paying out of pocket and waiting on reimbursement. You're still responsible for your deductible." },
  { q: "What is a \"direction to pay\"?", a: "It's a form you sign authorizing your insurer to pay Restora directly for the approved scope of work, rather than issuing the claim check to you. We provide this form and walk you through it." },
  { q: "Do I still need to call my insurance company myself?", a: "Yes — the claim itself has to be opened by you (or sometimes us, with your authorization) with your carrier. We provide the documentation your adjuster needs once the claim is open." },
  { q: "What if my insurer disputes part of the scope?", a: "Our job documentation — photos, moisture logs, written scope — is built specifically to support the claim if anything is questioned. We'll work directly with your adjuster to resolve it." },
];

export default function InsuranceClaimsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Insurance Claims &amp; Direct Billing</h1>
          <p className="mt-4 text-lg text-ink/70">
            Most restoration claims come down to one question: will the documentation hold up. Here&rsquo;s how our
            process works with your insurance carrier, in plain language.
          </p>
          <div className="mt-6">
            <CallCta />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="font-bold text-ink">1. Start the claim</h2>
            <p className="mt-2 text-sm text-ink/70">
              Call your insurance carrier (or ask us to help) to open a claim and get a claim number.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-ink">2. We document everything</h2>
            <p className="mt-2 text-sm text-ink/70">
              Photos, moisture logs, and a written scope are collected from the first hour and shared with your
              adjuster.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-ink">3. We bill your carrier directly</h2>
            <p className="mt-2 text-sm text-ink/70">
              With a signed direction to pay, we invoice your insurer for the approved scope. You typically only pay
              your deductible.
            </p>
          </div>
        </div>
      </section>

      <Faq items={faqs} />
    </>
  );
}

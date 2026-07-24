import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}</p>
      <h2>Agreement to Terms</h2>
      <p>
        By using this website or engaging {site.name} for restoration services, you agree to the terms outlined
        here. These terms govern use of the website; a separate work authorization governs any on-site services.
      </p>
      <h2>Estimates &amp; Scope of Work</h2>
      <p>
        Estimates provided prior to inspection are preliminary. Final scope and pricing are confirmed after
        assessment and documented in a written work authorization before mitigation begins.
      </p>
      <h2>Insurance Billing</h2>
      <p>
        Direct billing to an insurance carrier is subject to a signed direction to pay and the carrier&rsquo;s
        approval of the submitted scope. The property owner remains responsible for any deductible or non-covered
        charges.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        {site.name} is not liable for pre-existing conditions, code-required upgrades not covered by insurance, or
        damage arising from a customer&rsquo;s delay in authorizing recommended work.
      </p>
      <h2>Contact</h2>
      <p>Questions about these terms can be directed to {site.email}.</p>
    </LegalPage>
  );
}

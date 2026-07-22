import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}</p>
      <h2>Information We Collect</h2>
      <p>
        We collect the information you submit through our contact form (name, phone, address, and job details) and
        standard analytics data (pages visited, general location, device type) via cookies described in our{" "}
        <a href="/legal/cookies" className="text-teal underline">
          Cookie Policy
        </a>
        .
      </p>
      <h2>How We Use It</h2>
      <p>
        Contact form submissions are used solely to respond to your request for service. We do not sell or share
        your information with third parties for marketing purposes.
      </p>
      <h2>Insurance-Related Documentation</h2>
      <p>
        Job documentation (photos, moisture logs, scope of work) collected during a restoration project may be
        shared with your insurance carrier and adjuster as part of the claims process, with your authorization.
      </p>
      <h2>Data Retention</h2>
      <p>
        Contact form submissions and job records are retained as required for insurance, warranty, and legal
        record-keeping purposes.
      </p>
      <h2>Contact</h2>
      <p>Questions about this policy can be directed to {site.email}.</p>
    </LegalPage>
  );
}

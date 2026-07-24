import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy">
      <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}</p>
      <h2>What Cookies We Use</h2>
      <p>
        This site uses only functional and analytics cookies — nothing that tracks you across other websites, and
        nothing sold to advertisers. Analytics cookies help us understand which pages are useful so we can improve
        the site.
      </p>
      <h2>No Dark Patterns</h2>
      <p>
        We don&rsquo;t use pre-checked consent boxes, disguised reject buttons, or repeated consent prompts designed
        to wear you down. Your choice is respected and stored for future visits.
      </p>
      <h2>Managing Cookies</h2>
      <p>
        You can disable cookies at any time through your browser settings. Disabling analytics cookies does not
        affect your ability to browse the site or submit a contact request.
      </p>
      <h2>Contact</h2>
      <p>Questions about this policy can be directed to {site.email}.</p>
    </LegalPage>
  );
}

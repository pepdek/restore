import type { Metadata } from "next";
import { ClockIcon, DocumentIcon, PhoneIcon, ShieldIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Restora team — a locally owned restoration company in the South Puget Sound.",
};

const values = [
  { Icon: ShieldIcon, title: "Real training", body: "IICRC certification support and hands-on training from day one, not a franchise script." },
  { Icon: ClockIcon, title: "Local dispatch", body: "You work the South Puget Sound, not a rotating multi-state territory." },
  { Icon: DocumentIcon, title: "Documented process", body: "Every job runs on the same tracked process, so you're never guessing what's expected." },
  { Icon: PhoneIcon, title: "Direct access to ownership", body: "A locally owned shop means the owner is reachable, not a regional office three states away." },
];

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Careers at Restora</h1>
          <p className="mt-4 text-lg text-ink/70">
            We&rsquo;re a locally owned restoration company in Tacoma, hiring technicians and support staff who want
            real training and steady local work — not a franchise territory.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Why Restora</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg border border-line bg-paper-raised p-6">
              <v.Icon className="h-8 w-8 text-midnight" />
              <h3 className="mt-4 font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-ink">Open Positions</h2>
          <p className="mt-3 text-ink/70">
            {/* ponytail: no ATS integration yet — direct applicants to email/phone until a real job board is wired up */}
            We don&rsquo;t have open roles posted online yet. Send your resume directly and we&rsquo;ll reach out
            when a position opens.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${site.email}?subject=Careers%20Inquiry`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-base font-bold text-jet shadow-sm hover:opacity-90"
            >
              Email Your Resume
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink px-6 py-3 text-base font-semibold text-ink hover:bg-ink hover:text-paper"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import HeroImage from "@/components/HeroImage";
import { ClockIcon, DocumentIcon, PhoneIcon, ShieldIcon } from "@/components/icons";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the RESTORA team — a locally owned restoration company in the South Puget Sound.",
};

const values = [
  { Icon: ShieldIcon, title: "Real training", body: "IICRC certification support and hands-on training from day one, not a franchise script." },
  { Icon: ClockIcon, title: "Local dispatch", body: "You work the South Puget Sound, not a rotating multi-state territory." },
  { Icon: DocumentIcon, title: "Documented process", body: "Every job runs on the same tracked process, so you're never guessing what's expected." },
  { Icon: PhoneIcon, title: "Direct access to ownership", body: "A locally owned shop means the owner is reachable, not a regional office three states away." },
];

const openPositions = [
  { title: "Water Damage Technician", teaser: "Front-line extraction, drying, and moisture documentation on residential and commercial water calls." },
  { title: "Restoration Supervisor / Crew Chief", teaser: "Lead a crew on-site, own the job from first call to final walkthrough, and keep the documentation standard tight." },
  { title: "Construction Superintendent / Project Manager", teaser: "Run the rebuild phase of mitigation jobs — scope, scheduling, and trade coordination under one roof." },
  { title: "Construction Estimator / Project Manager", teaser: "Turn approved mitigation scope into accurate rebuild estimates that hold up with adjusters." },
  { title: "Project Coordinator", teaser: "Keep job files, scheduling, and insurer communication organized across active projects." },
];

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:py-20 sm:px-6 md:grid-cols-2 md:items-center lg:py-28">
          <div>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Careers at RESTORA</h1>
            <p className="mt-4 text-lg text-ink/70">
              We&rsquo;re a locally owned restoration company in Tacoma, hiring technicians and support staff who
              want real training and steady local work — not a franchise territory.
            </p>
          </div>
          <HeroImage image={images.careers} priority className="aspect-[4/3] md:order-last" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Why RESTORA</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="shine rounded-lg border border-line bg-paper-raised p-6">
              <v.Icon className="h-8 w-8 text-midnight" />
              <h3 className="mt-4 font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">Open Positions</h2>
          <p className="mt-3 text-ink/70">
            {/* ponytail: no ATS integration yet — applicants email/call directly until a real job board is wired up */}
            All positions are based in Tacoma, WA. Email your resume and the role you&rsquo;re interested in.
          </p>
          <div className="mt-8 space-y-4">
            {openPositions.map((p) => (
              <div
                key={p.title}
                className="shine flex flex-col justify-between gap-3 rounded-lg border border-line bg-paper-raised p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-bold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{p.teaser}</p>
                  <p className="mt-1 text-sm text-ink/70">Tacoma, WA</p>
                </div>
                <a
                  href={`mailto:${site.email}?subject=Application: ${encodeURIComponent(p.title)}`}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-ink px-5 py-2.5 text-sm font-semibold text-ink hover:bg-ink hover:text-paper"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={`mailto:${site.email}?subject=Careers%20Inquiry`}
              className="shine inline-flex items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-lg text-white hover:opacity-90"
            >
              Email Your Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

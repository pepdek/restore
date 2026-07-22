import Link from "next/link";
import { CallCta } from "@/components/Cta";
import TrustBar from "@/components/TrustBar";
import {
  ClockIcon,
  DocumentIcon,
  FireIcon,
  MoldIcon,
  PhoneIcon,
  ReconstructionIcon,
  ShieldIcon,
  WaterIcon,
} from "@/components/icons";
import { caseStudies } from "@/lib/caseStudies";
import { serviceAreaCities, services } from "@/lib/site";

const serviceIcons = {
  "water-damage": WaterIcon,
  "fire-damage": FireIcon,
  "mold-remediation": MoldIcon,
  reconstruction: ReconstructionIcon,
} as const;

export default function Home() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              The Right Choice in Cleanup &amp; Restoration
            </h1>
            <p className="mt-4 text-xl font-semibold text-midnight">
              When you call a national franchise, you don&rsquo;t know who&rsquo;s showing up. When you call
              Restora, you already do.
            </p>
            <p className="mt-4 text-ink/70">
              The same local team, the same standard, every job documented and verified — from first call to
              final invoice, so you and your adjuster always know exactly where things stand.
            </p>
            <div className="mt-8">
              <CallCta />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-midnight p-8">
            <ShieldIcon className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 text-cream/5" />
            <p className="text-sm font-semibold uppercase tracking-wide text-green">Why Choose Restora</p>
            <ul className="mt-5 space-y-4">
              {[
                { Icon: ShieldIcon, text: "One local team, every time — never a subcontractor roulette" },
                { Icon: DocumentIcon, text: "Every job documented and verifiable, start to finish" },
                { Icon: PhoneIcon, text: "Direct insurance billing, no surprises" },
                { Icon: ClockIcon, text: "Response time tracked and logged on every dispatch" },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-cream">
                  <Icon className="h-6 w-6 shrink-0 text-green" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Restoration Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = serviceIcons[s.slug as keyof typeof serviceIcons];
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-lg border border-line bg-paper-raised p-6 transition-colors hover:border-midnight"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-cream">
                  <Icon className="h-8 w-8 text-midnight" />
                </div>
                <h3 className="mt-4 font-bold text-ink">{s.name}</h3>
                <p className="mt-2 text-sm text-ink/70">{s.blurb}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-midnight">Learn more →</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Recent Jobs</h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            Specific jobs, not generic claims — property type, scope of work, and outcome.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((c) => (
              <div key={c.slug} className="rounded-lg border border-line bg-paper-raised p-6">
                <h3 className="font-bold text-ink">{c.propertyType}</h3>
                <p className="mt-2 text-sm text-ink/70">{c.lossType}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink px-6 py-3 text-base font-semibold text-ink hover:bg-ink hover:text-paper"
            >
              Read the Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-2xl bg-paper-raised p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Serving the South Puget Sound</h2>
            <p className="mt-4 max-w-2xl text-ink/70">
              {serviceAreaCities.slice(0, 6).join(", ")}, and more — dispatched from a local base, not a
              regional call center.
            </p>
            <div className="mt-8">
              <Link
                href="/service-area"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-ink px-6 py-3 text-base font-semibold text-ink hover:bg-ink hover:text-paper"
              >
                View Full Coverage Area
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

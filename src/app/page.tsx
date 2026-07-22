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
      <section className="border-b border-line bg-paper-raised">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              The Right Choice in Cleanup &amp; Restoration
            </h1>
            <p className="mt-4 text-xl font-semibold text-cream">
              The South Sound&rsquo;s fastest restoration team — with the response times and documentation to prove it.
            </p>
            <p className="mt-4 text-ink/70">
              Locally owned water, fire, and mold restoration. Every job is tracked from first call to
              final invoice, so you and your adjuster always know exactly where things stand.
            </p>
            <div className="mt-8">
              <CallCta />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-cream p-8">
            <ShieldIcon className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 text-jet/5" />
            <p className="text-sm font-semibold uppercase tracking-wide text-midnight">24/7 Emergency Response</p>
            <ul className="mt-5 space-y-4">
              {[
                { Icon: ClockIcon, text: "Response time tracked on every dispatch" },
                { Icon: DocumentIcon, text: "Direct billing to your insurance carrier" },
                { Icon: ShieldIcon, text: "IICRC certified technicians, not subcontractors" },
                { Icon: PhoneIcon, text: "Locally owned — a real person answers" },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-jet">
                  <Icon className="h-6 w-6 shrink-0 text-midnight" />
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
                className="group rounded-lg border border-line bg-paper-raised p-6 transition-colors hover:border-green"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-cream">
                  <Icon className="h-8 w-8 text-midnight" />
                </div>
                <h3 className="mt-4 font-bold text-ink">{s.name}</h3>
                <p className="mt-2 text-sm text-ink/70">{s.blurb}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-green">Learn more →</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-midnight">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-cream sm:text-3xl">Serving the South Puget Sound</h2>
          <p className="mt-4 max-w-2xl text-cream/80">
            {serviceAreaCities.slice(0, 6).join(", ")}, and more — dispatched from a local base, not a
            regional call center.
          </p>
          <div className="mt-8">
            <Link
              href="/service-area"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-cream px-6 py-3 text-base font-semibold text-cream hover:bg-cream hover:text-jet"
            >
              View Full Coverage Area
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

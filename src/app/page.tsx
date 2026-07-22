import Link from "next/link";
import { CallCta, SecondaryCta } from "@/components/Cta";
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

const steps = [
  { title: "Call", body: "A local technician answers — day or night. Not a call center.", Icon: PhoneIcon },
  { title: "Assess & Document", body: "Moisture readings, photos, and a written scope logged from minute one.", Icon: DocumentIcon },
  { title: "Restore", body: "Extraction, drying, cleanup, or rebuild — tracked against a response-time standard.", Icon: ShieldIcon },
  { title: "Insurance Handles Payment", body: "We bill your carrier directly using the documentation we collected.", Icon: ClockIcon },
];

const reviews = [
  { quote: "They had a crew at our house within the hour. Everything was documented for our adjuster before we even called the insurance company.", name: "Marci T., Lakewood" },
  { quote: "No pressure, no upsell — just people who knew exactly what they were doing and showed their work.", name: "Dave R., Puyallup" },
  { quote: "We looked at a national chain first. Restora called back in ten minutes and actually showed up when they said they would.", name: "Angela P., Tacoma" },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-line bg-paper-raised">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              The Right Choice in Cleanup &amp; Restoration
            </h1>
            <p className="mt-4 text-xl font-semibold text-midnight-dark">
              The South Sound&rsquo;s fastest restoration team — with the response times and documentation to prove it.
            </p>
            <p className="mt-4 text-ink-light">
              Locally owned water, fire, and mold restoration. Every job is tracked from first call to
              final invoice, so you and your adjuster always know exactly where things stand.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallCta />
              <SecondaryCta href="/how-it-works" label="See How It Works" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-jet p-8">
            <ShieldIcon className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 text-white/5" />
            <p className="text-sm font-semibold uppercase tracking-wide text-green">24/7 Emergency Response</p>
            <ul className="mt-5 space-y-4">
              {[
                { Icon: ClockIcon, text: "Response time tracked on every dispatch" },
                { Icon: DocumentIcon, text: "Direct billing to your insurance carrier" },
                { Icon: ShieldIcon, text: "IICRC certified technicians, not subcontractors" },
                { Icon: PhoneIcon, text: "Locally owned — a real person answers" },
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
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-midnight-light">
                  <Icon className="h-8 w-8 text-midnight" />
                </div>
                <h3 className="mt-4 font-bold text-ink">{s.name}</h3>
                <p className="mt-2 text-sm text-ink-light">{s.blurb}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-midnight">Learn more →</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-midnight-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">How It Works</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper-raised">
                  <step.Icon className="h-6 w-6 text-midnight" />
                </div>
                <span className="mt-3 block text-sm font-bold text-green-dark">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <SecondaryCta href="/how-it-works" label="See the Full Process" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Neighbors Are Saying</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-lg border border-line bg-paper-raised p-6">
              <p className="text-ink-light">&ldquo;{r.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-ink">{r.name}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-8">
          <SecondaryCta href="/reviews" label="Read More Reviews" />
        </div>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 text-paper sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Serving the South Puget Sound</h2>
          <p className="mt-4 max-w-2xl text-paper/80">
            {serviceAreaCities.slice(0, 6).join(", ")}, and more — dispatched from a local base, not a
            regional call center.
          </p>
          <div className="mt-8">
            <SecondaryCta href="/service-area" label="View Full Coverage Area" dark />
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { FireIcon, MoldIcon, ReconstructionIcon, WaterIcon } from "@/components/icons";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Restoration Services",
  description: "Water damage, fire damage, mold remediation, and reconstruction services across the South Puget Sound.",
};

const serviceIcons = {
  "water-damage": WaterIcon,
  "fire-damage": FireIcon,
  "mold-remediation": MoldIcon,
  reconstruction: ReconstructionIcon,
} as const;

export default function ServicesHub() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Restoration Services</h1>
      <p className="mt-4 max-w-2xl text-ink-light">
        Every service below follows the same documented process — response tracked, damage logged, insurer billed
        directly.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((s) => {
          const Icon = serviceIcons[s.slug as keyof typeof serviceIcons];
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-lg border border-line bg-paper-raised p-6 transition-colors hover:border-midnight"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-midnight-light">
                <Icon className="h-8 w-8 text-midnight" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-ink">{s.name}</h2>
              <p className="mt-2 text-sm text-ink-light">{s.blurb}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-midnight">Learn more →</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

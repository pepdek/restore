import { CallCta } from "@/components/Cta";
import { CheckIcon } from "@/components/icons";

export default function OfferBlock({ name, bullets }: { name: string; bullets: string[] }) {
  return (
    <section id="offer" className="mx-auto max-w-4xl px-4 py-20 sm:py-28 sm:px-6">
      <div className="shine rounded-2xl border-2 border-green bg-paper-raised p-8 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-green">The Offer</p>
        <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">{name}</h2>
        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 text-ink/70">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-green" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink/70">
          Call for a scope assessment — every job is priced after inspection, not off a generic rate card.
        </p>
        <div className="mt-6">
          <CallCta />
        </div>
      </div>
    </section>
  );
}

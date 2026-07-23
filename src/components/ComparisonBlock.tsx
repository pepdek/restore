import { CheckIcon } from "@/components/icons";

const restoraPoints = [
  "The same local RESTORA crew handles your job — not a rotating pool of subcontractors",
  "Every step is documented and photographed, so you have proof of the work, not just a claim",
  "One local owner is directly reachable, not a regional office in another state",
  "Response time and moisture/clearance readings are logged, not estimated after the fact",
];

const franchisePoints = [
  "The crew that shows up depends on which subcontractor is available that day",
  "Documentation practices vary by whichever franchisee or subcontractor is dispatched",
  "Ownership sits behind a corporate call center, not someone you can call directly",
  "Response time is a marketing claim, not something you can verify on your own job",
];

export default function ComparisonBlock() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 sm:px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">A RESTORA Team vs. Franchise Roulette</h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          A national franchise brand is a promise made by one of thousands of independently owned operators — you
          don&rsquo;t know in advance which one you&rsquo;re getting. Here&rsquo;s the practical difference.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="shine rounded-lg bg-midnight p-6 sm:p-8">
            <h3 className="font-bold text-cream">A RESTORA Team</h3>
            <ul className="mt-4 space-y-3">
              {restoraPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-cream/90">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-line bg-paper-raised p-6 sm:p-8">
            <h3 className="font-bold text-midnight">Franchise Roulette</h3>
            <ul className="mt-4 space-y-3">
              {franchisePoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-ink/70">
                  <span className="mt-0.5 shrink-0 font-bold text-midnight/40">&times;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

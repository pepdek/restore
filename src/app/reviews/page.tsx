import type { Metadata } from "next";
import { CallCta } from "@/components/Cta";
import { FireIcon, MoldIcon, ReconstructionIcon, WaterIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What South Sound homeowners and property managers say about working with Restora.",
};

const reviews = [
  { quote: "They had a crew at our house within the hour. Everything was documented for our adjuster before we even called the insurance company.", name: "Marci T.", location: "Lakewood" },
  { quote: "No pressure, no upsell — just people who knew exactly what they were doing and showed their work.", name: "Dave R.", location: "Puyallup" },
  { quote: "We looked at a national chain first. Restora called back in ten minutes and actually showed up when they said they would.", name: "Angela P.", location: "Tacoma" },
  { quote: "Mold remediation on our rental came with paperwork our buyer's inspector actually accepted without follow-up questions.", name: "James K.", location: "Federal Way" },
  { quote: "Direct billing meant we weren't floating thousands of dollars while waiting on a reimbursement check.", name: "Sarah L.", location: "University Place" },
  { quote: "Fire damage is stressful enough without chasing three different companies. One team from board-up to the final coat of paint.", name: "Tom H.", location: "Gig Harbor" },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="border-b border-line bg-paper-raised">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Reviews</h1>
          <p className="mt-4 text-lg text-ink-light">
            {/* ponytail: static quotes — swap for a live Google Reviews embed once the client's profile has volume */}
            What homeowners and property managers across the South Sound say after working with us.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-lg border border-line bg-paper-raised p-6">
              <p className="text-ink-light">&ldquo;{r.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-ink">
                {r.name}, {r.location}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-xl font-bold text-ink">Before &amp; After</h2>
        {/* ponytail: icon placeholders standing in for real before/after photography, swap once the client supplies job photos */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Water — Living Room", Icon: WaterIcon },
            { label: "Fire — Kitchen", Icon: FireIcon },
            { label: "Mold — Basement", Icon: MoldIcon },
            { label: "Reconstruction — Bathroom", Icon: ReconstructionIcon },
          ].map(({ label, Icon }) => (
            <div
              key={label}
              className="flex h-40 flex-col items-center justify-center gap-3 rounded-md bg-cream px-2 text-center text-xs font-semibold text-jet"
            >
              <Icon className="h-10 w-10 text-midnight" />
              {label}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-midnight-light">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-ink">Need help now?</h2>
          <div className="mt-6 flex justify-center">
            <CallCta />
          </div>
        </div>
      </section>
    </>
  );
}

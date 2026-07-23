import { CheckmarkIcon, ClockIcon, DocumentIcon, ShieldIcon } from "@/components/icons";

const items = [
  { Icon: ShieldIcon, label: "One local team, every time", body: "Never a subcontractor roulette — the same crew, every job." },
  { Icon: DocumentIcon, label: "Every job documented", body: "Verifiable, start to finish, so nothing is just your word against theirs." },
  { Icon: CheckmarkIcon, label: "Direct insurance billing", body: "No surprises, no fronting restoration costs out of pocket." },
  { Icon: ClockIcon, label: "Response time tracked", body: "Logged on every dispatch, not just claimed after the fact." },
];

export default function WhyRestora() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28 sm:px-6">
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">Why RESTORA</h2>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ Icon, label, body }) => (
          <div key={label} className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-paper-raised">
              <Icon className="h-8 w-8 text-midnight" />
            </div>
            <h3 className="mt-4 font-bold text-ink">{label}</h3>
            <p className="mt-2 text-sm text-ink/70">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

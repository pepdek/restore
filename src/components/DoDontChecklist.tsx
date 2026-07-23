import { CheckIcon } from "@/components/icons";

export default function DoDontChecklist({ doList, dontList }: { doList: string[]; dontList: string[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28 sm:px-6">
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">What To Do &mdash; And Not To Do &mdash; Until Help Arrives</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="shine rounded-lg border border-line bg-paper-raised p-6 sm:p-8">
          <h3 className="font-bold text-midnight">Do</h3>
          <ul className="mt-4 space-y-3">
            {doList.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink/70">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="shine rounded-lg border border-line bg-paper-raised p-6 sm:p-8">
          <h3 className="font-bold text-midnight">Don&rsquo;t</h3>
          <ul className="mt-4 space-y-3">
            {dontList.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink/70">
                <span className="mt-0.5 shrink-0 font-bold text-midnight/40">&times;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

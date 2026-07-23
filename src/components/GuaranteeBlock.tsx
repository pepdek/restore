import Link from "next/link";
import { ShieldIcon } from "@/components/icons";

export default function GuaranteeBlock({ name, body }: { name: string; body: string }) {
  return (
    <section className="border-y border-line bg-paper-raised">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
        <div className="shine flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-paper">
          <ShieldIcon className="h-8 w-8 text-midnight" />
        </div>
        <div>
          <h2 className="font-bold text-ink">{name}</h2>
          <p className="mt-1 text-sm text-ink/70">
            {body}{" "}
            <Link href="/our-guarantee" className="font-semibold text-midnight underline">
              See full guarantee terms
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

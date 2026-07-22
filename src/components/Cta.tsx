import { site } from "@/lib/site";

export function CallCta({ label = "Call for Immediate Help" }: { label?: string }) {
  return (
    <a
      href={site.phoneHref}
      className="inline-flex items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-base font-bold text-jet shadow-sm hover:opacity-90"
    >
      ☎ {label} — {site.phone}
    </a>
  );
}

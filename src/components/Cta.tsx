import Link from "next/link";
import { site } from "@/lib/site";

export function CallCta({ label = "Call for Immediate Help" }: { label?: string }) {
  return (
    <a
      href={site.phoneHref}
      className="inline-flex items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-base font-bold text-jet shadow-sm hover:bg-green-dark"
    >
      ☎ {label} — {site.phone}
    </a>
  );
}

export function SecondaryCta({ href, label, dark = false }: { href: string; label: string; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={
        dark
          ? "inline-flex items-center justify-center gap-2 rounded-md border border-white px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-ink"
          : "inline-flex items-center justify-center gap-2 rounded-md border border-ink px-6 py-3 text-base font-semibold text-ink hover:bg-ink hover:text-paper"
      }
    >
      {label}
    </Link>
  );
}

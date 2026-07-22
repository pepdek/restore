import { site } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <a
      href={site.phoneHref}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-green px-4 py-4 text-xl font-bold text-jet shadow-[0_-2px_10px_rgba(0,0,0,0.15)] lg:hidden"
    >
      ☎ Call Now — {site.phone}
    </a>
  );
}

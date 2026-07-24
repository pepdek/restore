import { site } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <a
      href={site.phoneHref}
      className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center justify-center gap-0.5 bg-green py-2 text-midnight hover:bg-green-dark hover:text-white shadow-[0_-2px_10px_rgba(0,0,0,0.15)] lg:hidden"
    >
      <span className="text-xl font-bold uppercase tracking-wide">Call to Schedule</span>
      <span className="text-[19px] font-bold">{site.phone}</span>
    </a>
  );
}

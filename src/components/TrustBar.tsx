import Link from "next/link";
import { CheckIcon } from "@/components/icons";

const items = [
  "IICRC Certified Technicians",
  "Licensed & Insured in WA",
  "Locally Owned & Operated",
  "Direct Insurance Billing",
];

export default function TrustBar() {
  return (
    <div className="border-y border-line bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-sm font-semibold text-ink sm:grid-cols-3 sm:px-6 lg:grid-cols-5">
        {items.map((label) => (
          <div key={label} className="flex items-center gap-2">
            <CheckIcon className="h-5 w-5 shrink-0 text-green" />
            <span>{label}</span>
          </div>
        ))}
        <Link href="/our-guarantee" className="flex items-center gap-2 hover:underline">
          <CheckIcon className="h-5 w-5 shrink-0 text-green" />
          <span>Backed by Our Guarantee</span>
        </Link>
      </div>
    </div>
  );
}

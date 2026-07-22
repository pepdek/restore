import { ClockIcon, DocumentIcon, PhoneIcon, ShieldIcon } from "@/components/icons";

const items = [
  { Icon: ShieldIcon, label: "IICRC Certified Technicians" },
  { Icon: DocumentIcon, label: "Licensed & Insured in WA" },
  { Icon: PhoneIcon, label: "Locally Owned & Operated" },
  { Icon: ClockIcon, label: "Direct Insurance Billing" },
];

export default function TrustBar() {
  return (
    <div className="bg-midnight">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center text-sm font-semibold text-cream sm:px-6 md:grid-cols-4">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <Icon className="h-8 w-8 text-green" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

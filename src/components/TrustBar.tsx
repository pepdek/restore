const items = [
  "IICRC Certified Technicians",
  "Licensed & Insured in WA",
  "Locally Owned & Operated",
  "Direct Insurance Billing",
];

export default function TrustBar() {
  return (
    <div className="border-y border-line bg-paper-raised">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-center text-sm font-semibold text-ink-light sm:px-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="flex items-center justify-center gap-2">
            <span className="text-teal">✓</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}

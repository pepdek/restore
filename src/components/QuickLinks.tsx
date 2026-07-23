const links = [
  { href: "#what-is", label: "What It Is" },
  { href: "#process", label: "Our Process" },
  { href: "#offer", label: "The Package" },
  { href: "#faq", label: "FAQ" },
];

export default function QuickLinks() {
  return (
    <nav aria-label="Quick links" className="border-b border-line bg-paper-raised">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-4 py-4 text-sm font-semibold text-midnight sm:px-6">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:underline">
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

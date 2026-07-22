import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-ink">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-light lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-md bg-alert px-3 py-2 text-sm font-bold text-white shadow-sm sm:px-4"
          >
            <span aria-hidden>☎</span>
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
          <Link
            href="/contact"
            className="hidden rounded-md border border-ink px-4 py-2 text-sm font-semibold text-ink hover:bg-ink hover:text-paper md:inline-block"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { navLinks, serviceAreaCities, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink text-paper/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-2 text-sm">{site.tagline}</p>
          <a href={site.phoneHref} className="mt-4 block text-lg font-bold text-white">
            {site.phone}
          </a>
          <p className="mt-1 text-sm">{site.address}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[...navLinks, { href: "/contact", label: "Contact" }, { href: "/insurance-claims", label: "Insurance Claims" }].map(
              (link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Service Area</p>
          <p className="mt-3 text-sm leading-relaxed">{serviceAreaCities.join(", ")}, and surrounding areas.</p>
          <Link href="/service-area" className="mt-2 inline-block text-sm underline">
            Full coverage map
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. IICRC Certified · Licensed &amp; Insured · {site.license}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/legal/safety-data-sheets" className="hover:text-white">
              Safety Data Sheets
            </Link>
            <Link href="/legal/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/legal/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/legal/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

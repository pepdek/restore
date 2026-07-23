import Link from "next/link";
import Logo from "@/components/Logo";
import { resourceLinks } from "@/lib/resources";
import { navLinks, serviceAreaCities, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-midnight text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-5">
        <div>
          <Logo className="text-xl" />
          <p className="mt-2 text-sm">{site.tagline}</p>
          <a href={site.phoneHref} className="mt-4 block text-lg font-bold text-cream">
            {site.phone}
          </a>
          <p className="mt-1 text-sm">{site.address}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-cream">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-cream">
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-cream">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ...navLinks,
              { href: "/our-guarantee", label: "Our Guarantee" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact" },
            ].map(
              (link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-cream">Resources</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/resources" className="hover:text-cream">
                Resources Hub
              </Link>
            </li>
            {resourceLinks.map((r) => (
              <li key={r.slug}>
                <Link href={r.href} className="hover:text-cream">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-cream">Service Area</p>
          <p className="mt-3 text-sm leading-relaxed">{serviceAreaCities.join(", ")}, and surrounding areas.</p>
          <Link href="/service-area" className="mt-2 inline-block text-sm underline">
            Full coverage map
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10 pb-16 lg:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. IICRC Certified · Licensed &amp; Insured · {site.license}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/legal/safety-data-sheets" className="hover:text-cream">
              Safety Data Sheets
            </Link>
            <Link href="/legal/terms" className="hover:text-cream">
              Terms
            </Link>
            <Link href="/legal/privacy" className="hover:text-cream">
              Privacy
            </Link>
            <Link href="/legal/cookies" className="hover:text-cream">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

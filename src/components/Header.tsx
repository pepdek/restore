"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { navLinks, services, site } from "@/lib/site";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-midnight">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/">
          <Logo className="text-2xl" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-cream/80 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen(true)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1 hover:text-cream"
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-lg bg-paper-raised py-2 shadow-lg">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-4 py-2 text-jet hover:bg-cream"
                  >
                    {s.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="block border-t border-line px-4 py-2 mt-1 pt-2 font-semibold text-midnight"
                >
                  All Services
                </Link>
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-cream">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-md bg-green px-3 py-2 text-xl font-bold text-jet hover:opacity-90 lg:flex"
          >
            <span aria-hidden>☎</span>
            <span>{site.phone}</span>
          </a>
          <Link
            href="/contact"
            className="hidden rounded-md border border-cream px-4 py-2 text-sm font-semibold text-cream hover:bg-cream hover:text-jet md:inline-block"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Rentals", href: "/rentals" },
  { label: "Academy", href: "/academy" },
  { label: "Quote", href: "/quote" },
];

function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/portfolio/logo.jpg"
        alt="Fancy Nanci Balloons logo"
        width={150}
        height={150}
        priority
        className="h-10 w-auto rounded-md shadow-sm"
      />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-tight text-brand-slate">
          Fancy <span className="text-brand-champagne">Nanci</span>
        </span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-brand-muted">
          Balloons
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50 border-b border-brand-sand/60 bg-brand-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <Wordmark />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-brand-slate/80 transition-colors duration-200 hover:text-brand-champagne"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/quote"
            className="hidden h-10 items-center rounded-full bg-brand-slate px-5 text-sm font-medium text-brand-cream transition-all duration-300 hover:bg-brand-champagne hover:text-brand-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream sm:inline-flex"
          >
            Get a Quote
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-slate transition-colors duration-200 hover:bg-brand-sand/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="glass border-t border-brand-sand/60 bg-brand-cream/95 backdrop-blur-md md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-base font-medium text-brand-slate transition-colors duration-200 hover:bg-brand-sand/60 hover:text-brand-champagne"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brand-slate px-5 py-3 text-center text-base font-medium text-brand-cream transition-colors duration-300 hover:bg-brand-champagne hover:text-brand-slate"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

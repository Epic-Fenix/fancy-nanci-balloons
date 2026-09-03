"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reels", href: "#reels" },
  { label: "Rentals", href: "#rentals" },
  { label: "Academy", href: "#academy" },
];

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className={`fixed bottom-8 left-1/2 z-[60] max-w-[90vw] -translate-x-1/2 transition-all duration-300 sm:bottom-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ul className="glass flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-brand-champagne/40 bg-brand-cream/85 px-2 py-1.5 shadow-sm backdrop-blur-md [scrollbar-width:none] sm:gap-1">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="block rounded-full px-3 py-1.5 text-xs font-medium text-brand-slate transition-colors duration-200 hover:bg-brand-champagne/20 hover:text-brand-champagne sm:text-sm"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

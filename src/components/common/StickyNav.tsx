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
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className={`fixed left-1/2 top-4 z-40 -translate-x-1/2 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <ul className="glass flex items-center gap-1 rounded-full border border-brand-champagne/40 bg-brand-cream/85 px-2 py-1.5 shadow-sm backdrop-blur-md">
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

import Image from "next/image";

import { CalendarClock, Clock, MessageCircle } from "lucide-react";

import { WHATSAPP_PHONE } from "@/lib/whatsapp";

const INSTAGRAM_HANDLE = "fancy_nanci_balloons";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  "Hi Fancy Nanci Balloons! I'd love more info for my event. 🎈",
)}`;

/** Inline Instagram glyph (lucide v1 removed brand icons). */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-sand bg-brand-slate text-brand-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand synthesis */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/portfolio/logo.jpg"
                alt="Fancy Nanci Balloons logo"
                width={150}
                height={150}
                loading="lazy"
                className="h-10 w-auto rounded-md shadow-sm"
              />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-semibold tracking-tight">
                  Fancy <span className="text-brand-champagne">Nanci</span>
                </span>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-brand-cream/60">
                  Balloons
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-6 text-brand-cream/70">
              High-end balloon artistry, organic arches, and full event styling
              — turning special moments into magical memories.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-cream/90">
              Connect
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2.5 text-sm text-brand-cream/80 transition-colors duration-200 hover:text-brand-champagne"
              >
                <InstagramIcon className="h-4 w-4" />@{INSTAGRAM_HANDLE}
              </a>
              <a
                href="tel:15623254921"
                className="text-neutral-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
              >
                📞 (562) 325-4921
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                Message us on WhatsApp
              </a>
            </div>
          </div>

          {/* Hours & booking */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-cream/90">
              Hours & Booking
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-cream/80">
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-brand-champagne" />
                <span>
                  Mon – Fri: 9am – 6pm
                  <br />
                  Sat: 10am – 4pm · Sun: Closed
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CalendarClock className="mt-0.5 h-4 w-4 flex-none text-brand-champagne" />
                <span>By appointment only · Bookings open 2–4 weeks in advance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-cream/15 pt-6 text-xs text-brand-cream/60 sm:flex-row">
          <p>© {year} Fancy Nanci Balloons. All rights reserved.</p>
          <p>Handcrafted balloon design · United States</p>
        </div>
      </div>
    </footer>
  );
}

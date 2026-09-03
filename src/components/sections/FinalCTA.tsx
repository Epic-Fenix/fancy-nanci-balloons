import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { WHATSAPP_PHONE } from "@/lib/whatsapp";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  "Hi Fancy Nanci Balloons! 🎈 I'd love a quote for my event.",
)}`;

export default function FinalCTA() {
  return (
    <section className="bg-brand-cream pb-16 pt-12 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-brand-slate px-6 py-14 text-center shadow-xl sm:px-12">
          {/* soft glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-champagne/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand-blush/20 blur-3xl"
          />

          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-brand-cream sm:text-4xl">
            Ready to make your celebration unforgettable?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-8 text-brand-cream/70">
            Tell us about your event and we&apos;ll craft a custom quote — or
            message us directly on WhatsApp.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-champagne px-7 text-base font-semibold text-brand-slate transition-all duration-300 hover:bg-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-slate"
            >
              Start Your Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-slate"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

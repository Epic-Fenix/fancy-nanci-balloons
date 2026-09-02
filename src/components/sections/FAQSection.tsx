"use client";

import { useState } from "react";
import { ChevronDown, MapPin, MessageCircle, Sparkles } from "lucide-react";

import { faqs } from "@/data/faq";
import { WHATSAPP_PHONE } from "@/lib/whatsapp";

const SERVICE_AREAS: { region: string; cities: string[] }[] = [
  {
    region: "Los Angeles County",
    cities: ["Whittier", "Pasadena", "Downey", "Long Beach", "DTLA", "Glendale"],
  },
  {
    region: "Orange County",
    cities: ["Anaheim", "Fullerton", "Brea", "Buena Park", "Irvine"],
  },
];

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  "Hi Fancy Nanci Balloons! I have a quick question about my event. 🎈",
)}`;

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="scroll-mt-24 bg-brand-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-brand-muted">
            <Sparkles className="h-4 w-4 text-brand-champagne" />
            Good to Know
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-5xl">
            FAQ &amp; delivery coverage
          </h2>
          <p className="mt-4 text-pretty text-lg leading-8 text-brand-muted">
            Everything you need to know before booking your Southern California
            celebration.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => {
              const open = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-brand-sand bg-white/70"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : faq.id)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${faq.id}`}
                      id={`faq-trigger-${faq.id}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne"
                    >
                      <span className="font-medium text-brand-slate">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 flex-none text-brand-champagne transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${faq.id}`}
                    className={`grid transition-all duration-300 ease-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 leading-7 text-brand-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Service areas + CTA */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-brand-sand bg-brand-sand/30 p-7">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-champagne" />
                <h3 className="text-lg font-semibold text-brand-slate">
                  Service Areas
                </h3>
              </div>

              <div className="mt-5 flex flex-col gap-5">
                {SERVICE_AREAS.map((area) => (
                  <div key={area.region}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                      {area.region}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {area.cities.map((city) => (
                        <span
                          key={city}
                          className="rounded-full border border-brand-sand bg-white/70 px-3 py-1 text-sm font-medium text-brand-slate"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-brand-muted">
                …and surrounding areas across the Inland Empire.
              </p>
            </div>

            {/* Micro CTA */}
            <div className="rounded-3xl border border-brand-champagne/30 bg-brand-blush/30 p-7 text-center">
              <p className="text-pretty font-medium text-brand-slate">
                Have a specific question? Message us directly on WhatsApp.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

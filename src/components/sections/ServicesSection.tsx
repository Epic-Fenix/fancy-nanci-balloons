"use client";

import {
  Armchair,
  ArrowUpRight,
  Check,
  Frame,
  Lightbulb,
  Sparkles,
  Wind,
  Crown,
  type LucideIcon,
} from "lucide-react";

import { services, type ServiceItem } from "@/data/services";

const ICONS: Record<ServiceItem["iconName"], LucideIcon> = {
  arches: Wind,
  backdrops: Frame,
  marquee: Lightbulb,
  styling: Crown,
  rentals: Armchair,
};

export default function ServicesSection() {
  const handleInquire = (service: ServiceItem) => {
    // Preselect the style in the wizard, then let the anchor scroll take over.
    window.dispatchEvent(
      new CustomEvent("fnb:prefill-style", {
        detail: { style: service.prefillStyle },
      }),
    );
  };

  return (
    <section id="services" className="scroll-mt-24 bg-brand-cream py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-brand-muted">
            <Sparkles className="h-4 w-4 text-brand-champagne" />
            What We Create
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-5xl">
            Signature services
          </h2>
          <p className="mt-4 text-pretty text-lg leading-8 text-brand-muted">
            From a single statement arch to full venue styling — thoughtfully
            designed and expertly installed.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = ICONS[service.iconName];
            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-3xl border border-brand-sand bg-white/70 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-champagne/50 hover:shadow-xl hover:shadow-black/5 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sand text-brand-slate transition-colors duration-300 group-hover:bg-brand-champagne group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-brand-blush/60 px-3 py-1 text-sm font-semibold text-brand-slate">
                    {service.startingPrice}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-brand-slate">
                  {service.title}
                </h3>
                <p className="mt-2 text-pretty leading-7 text-brand-muted">
                  {service.description}
                </p>

                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-brand-slate"
                    >
                      <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-champagne/15">
                        <Check className="h-3.5 w-3.5 text-brand-champagne" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cotizador"
                  onClick={() => handleInquire(service)}
                  className="group/btn mt-7 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-brand-slate/15 bg-brand-cream text-sm font-medium text-brand-slate transition-all duration-300 hover:bg-brand-slate hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
                >
                  Inquire This Style
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

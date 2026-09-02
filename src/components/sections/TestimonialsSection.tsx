import { BadgeCheck, Quote, Star } from "lucide-react";

import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-brand-blush/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-brand-muted">
            <Star className="h-4 w-4 fill-brand-champagne text-brand-champagne" />
            Loved by Hosts
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-5xl">
            Kind words from our clients
          </h2>
          <p className="mt-4 text-pretty text-lg leading-8 text-brand-muted">
            Real celebrations, real reactions — here&apos;s what hosts across
            the country are saying.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="relative flex flex-col rounded-3xl border border-brand-sand bg-brand-cream p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 sm:p-8"
            >
              <Quote className="absolute right-6 top-6 h-9 w-9 text-brand-champagne/20" />

              <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-champagne text-brand-champagne"
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-8 text-brand-slate">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-brand-sand pt-5">
                <div>
                  <p className="font-semibold text-brand-slate">{t.name}</p>
                  <p className="text-sm text-brand-muted">{t.date}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-champagne/15 px-3 py-1.5 text-xs font-medium text-brand-slate">
                  <BadgeCheck className="h-3.5 w-3.5 text-brand-champagne" />
                  {t.event}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

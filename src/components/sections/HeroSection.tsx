import Link from "next/link";
import { ArrowRight, Star, Trophy } from "lucide-react";

/**
 * Landing hero. Soft blurred balloons in the background and CTAs to the
 * quote wizard and the portfolio gallery.
 */
const QUICK_LINKS = [
  { emoji: "🎈", title: "Luxury Styling", hint: "Arches & backdrops", href: "/portfolio" },
  { emoji: "🪑", title: "Rentals & Supplies", hint: "Tables, chairs & more", href: "/rentals" },
  { emoji: "🎓", title: "Masterclasses", hint: "Learn from Nanci", href: "/academy" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-brand-cream"
    >
      {/* Blurred balloons background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-brand-blush blur-3xl opacity-70 [animation:brand-float_9s_ease-in-out_infinite]" />
        <div className="absolute right-[-4rem] top-10 h-80 w-80 rounded-full bg-brand-champagne/30 blur-3xl opacity-60 [animation:brand-float_11s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-6rem] left-1/3 h-96 w-96 rounded-full bg-brand-sand blur-3xl opacity-80 [animation:brand-float_13s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-1/4 h-56 w-56 rounded-full bg-brand-blush/70 blur-3xl opacity-60 [animation:brand-float_10s_ease-in-out_infinite]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24 text-center sm:py-32">
        <span className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-brand-champagne/40 bg-brand-cream/60 px-4 py-1.5 text-sm font-medium text-brand-muted backdrop-blur">
          <Star className="h-4 w-4 fill-brand-champagne text-brand-champagne" />
          5.0 Rating on Yelp · Serving Whittier, Los Angeles &amp; Orange County
        </span>

        <p className="mx-auto mb-8 flex max-w-2xl items-center justify-center gap-2 text-sm font-medium text-brand-slate/70">
          <Trophy className="h-4 w-4 flex-none text-brand-champagne" />
          Award-Winning Balloon Artistry · Competed in New York · Serving
          Whittier &amp; Southern California
        </p>

        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-brand-slate sm:text-6xl">
          We turn special moments into{" "}
          <span className="text-brand-champagne">magical memories</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-brand-muted">
          Organic arches, themed backdrops, and full venue styling — custom
          designed for your celebration. Every detail, made to wow.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-slate px-7 text-base font-medium text-brand-cream shadow-lg shadow-brand-slate/20 transition-all duration-300 hover:bg-brand-champagne hover:text-brand-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center rounded-full border border-brand-sand bg-brand-cream px-7 text-base font-medium text-brand-slate transition-all duration-300 hover:border-brand-champagne hover:bg-brand-sand/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
          >
            View Portfolio
          </Link>
        </div>

        {/* Quick-access intent selector */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {QUICK_LINKS.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="group flex items-center gap-3 rounded-2xl border border-brand-sand bg-white/60 px-4 py-3 text-left backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-champagne/60 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne sm:flex-col sm:items-start sm:gap-1.5"
            >
              <span className="text-2xl">{q.emoji}</span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-brand-slate">
                  {q.title}
                </span>
                <span className="text-xs text-brand-muted">{q.hint}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

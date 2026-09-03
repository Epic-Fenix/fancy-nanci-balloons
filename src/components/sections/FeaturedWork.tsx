import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { portfolioProjects } from "@/data/portfolio";

const FEATURED = portfolioProjects.slice(0, 4);

export default function FeaturedWork() {
  return (
    <section className="bg-brand-cream py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-brand-muted">
              <Sparkles className="h-4 w-4 text-brand-champagne" />
              Featured Work
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
              A taste of our setups
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex h-11 items-center gap-2 rounded-full border border-brand-slate/15 bg-white/70 px-5 text-sm font-semibold text-brand-slate transition-all duration-300 hover:bg-brand-slate hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne"
          >
            Explore Full Portfolio
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {FEATURED.map((project) => (
            <Link
              key={project.id}
              href="/portfolio"
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-sand shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:shadow-xl hover:shadow-black/10"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-slate/70 via-brand-slate/10 to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[11px] font-medium uppercase tracking-wider text-brand-cream/80">
                  {project.category}
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

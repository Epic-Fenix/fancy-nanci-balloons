"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, X } from "lucide-react";

import {
  portfolioProjects,
  type PortfolioCategory,
  type PortfolioProject,
} from "@/data/portfolio";

type Filter = "All" | PortfolioCategory;

const FILTERS: Filter[] = [
  "All",
  "Birthdays",
  "Baby Showers & Reveals",
  "Weddings & Galas",
  "Corporate Events",
];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const projects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = projects.length > visibleCount;

  // Close on Escape + lock body scroll while the lightbox is open.
  useEffect(() => {
    if (!selected) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  return (
    <section id="galeria" className="scroll-mt-20 bg-brand-cream py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/40 bg-white/50 px-4 py-1.5 text-sm font-medium text-brand-muted">
            <Sparkles className="h-4 w-4 text-brand-champagne" />
            Our Portfolio
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-5xl">
            Setups worth celebrating
          </h2>
          <p className="mt-4 text-pretty text-lg leading-8 text-brand-muted">
            A glimpse of recent installations — every arch, garland, and
            backdrop styled to fit the moment.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(6);
                }}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream ${
                  isActive
                    ? "bg-brand-slate text-brand-cream shadow-md shadow-brand-slate/20"
                    : "border border-brand-sand bg-white/60 text-brand-slate hover:border-brand-champagne hover:bg-brand-sand/60"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Masonry grid */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {visibleProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelected(project)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-3xl bg-brand-sand text-left shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:shadow-xl hover:shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={project.width}
                height={project.height}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Satin overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-slate/70 via-brand-slate/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Caption + tags */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-brand-cream/80">
                  {project.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <div className="mt-3 flex translate-y-1 flex-wrap gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount(projects.length)}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-brand-slate/15 bg-white/70 px-6 text-sm font-semibold text-brand-slate transition-all duration-300 hover:bg-brand-slate hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
            >
              Explore More Work
            </button>
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-slate/70 p-4 backdrop-blur-sm sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-brand-cream shadow-2xl md:grid-cols-[1.4fr_1fr]"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-brand-slate shadow-md transition-transform duration-200 hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative h-[45vh] w-full bg-brand-slate/5 md:h-[90vh]">
              <Image
                src={selected.imageUrl}
                alt={selected.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain md:object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-6 overflow-y-auto p-7 sm:p-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-brand-champagne">
                  {selected.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-brand-slate">
                  {selected.title}
                </h3>
                <p className="mt-4 text-pretty leading-7 text-brand-muted">
                  {selected.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-sand bg-white/70 px-3 py-1 text-xs font-medium text-brand-slate"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#cotizador"
                onClick={() => setSelected(null)}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-slate px-6 text-base font-medium text-brand-cream transition-all duration-300 hover:bg-brand-champagne hover:text-brand-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
              >
                Request Similar Setup
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

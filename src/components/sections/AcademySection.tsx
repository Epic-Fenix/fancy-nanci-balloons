"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Check, GraduationCap, Sparkles } from "lucide-react";

import { setIntentAcademy } from "@/lib/quoteIntent";

const WORKSHOP_POINTS = [
  "Organic styling & color theory",
  "Rigging, structure & safe install",
  "Pricing & booking strategy",
];

export default function AcademySection() {
  const handleInquire = () => {
    // Flag interest for the quote wizard on the /quote route.
    setIntentAcademy();
  };

  return (
    <section
      id="academy"
      className="scroll-mt-24 bg-brand-slate py-12 text-brand-cream md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-black/30 shadow-2xl ring-1 ring-brand-champagne/30">
              <Image
                src="/portfolio/nanci-instructor.jpg"
                alt="Nancy Díaz, founder and master balloon stylist"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Satin badge */}
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-brand-champagne/40 bg-brand-cream/95 px-4 py-2 text-sm font-semibold text-brand-slate shadow-lg backdrop-blur">
              <Award className="h-4 w-4 text-brand-champagne" />
              National Competitor · NYC
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-cream/80">
              <Sparkles className="h-4 w-4 text-brand-champagne" />
              Meet Nanci · Master Stylist &amp; Academy
            </span>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-cream sm:text-4xl">
              Nancy Díaz
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-brand-cream">
                National Balloon Competitor · New York
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-brand-cream">
                10+ Years of Event Experience
              </span>
            </div>

            <p className="mt-5 text-pretty leading-8 text-brand-cream/70">
              From competing on national stages in New York to styling hundreds
              of private celebrations across Southern California, Nancy brings
              high-fashion artistry and structural excellence to every
              installation.
            </p>

            {/* Workshop card */}
            <div className="mt-7 rounded-3xl border border-brand-champagne/30 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-brand-champagne" />
                <h3 className="text-lg font-semibold text-brand-cream">
                  Hands-on Balloon Masterclasses
                </h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-brand-cream/70">
                1-on-1 &amp; small group sessions. Learn organic styling,
                rigging, and pricing strategy directly from Nanci.
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {WORKSHOP_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-brand-cream"
                  >
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-champagne/20">
                      <Check className="h-3.5 w-3.5 text-brand-champagne" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href="/quote"
                onClick={handleInquire}
                className="group mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-champagne px-6 text-sm font-semibold text-brand-slate transition-all duration-300 hover:bg-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-slate"
              >
                Inquire About Masterclasses
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

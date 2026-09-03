"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Check,
  Minus,
  Palette,
  PartyPopper,
  Plus,
  ShoppingBag,
  Sparkles,
  Star,
  Wind,
  type LucideIcon,
} from "lucide-react";

import { rentals, type RentalItem } from "@/data/rentals";
import { supplies, type SupplyItem } from "@/data/supplies";
import { addIntentRental } from "@/lib/quoteIntent";

type Tab = "equipment" | "supplies";

const INITIAL_RENTALS = 3;

const SUPPLY_ICONS: Record<string, LucideIcon> = {
  "garland-kit": Wind,
  "foil-shapes": Star,
  "swatch-packs": Palette,
};

function addToQuote(name: string, quantity: number) {
  // Stored for the quote wizard, which lives on the /quote route.
  addIntentRental(name, quantity);
}

function QuantityStepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-brand-sand bg-white">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
        className="flex h-9 w-9 items-center justify-center rounded-full text-brand-slate transition-colors hover:bg-brand-sand/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-8 text-center text-sm font-semibold text-brand-slate">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
        className="flex h-9 w-9 items-center justify-center rounded-full text-brand-slate transition-colors hover:bg-brand-sand/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

function AddButton({ onAdd }: { onAdd: () => void }) {
  const [added, setAdded] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        onAdd();
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1500);
      }}
      className={`inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream ${
        added
          ? "bg-brand-champagne text-brand-slate"
          : "bg-brand-slate text-brand-cream hover:bg-brand-champagne hover:text-brand-slate"
      }`}
    >
      {added ? (
        <>
          <Check className="h-4 w-4" /> Added
        </>
      ) : (
        "Add to Event Quote"
      )}
    </button>
  );
}

function RentalCard({ item }: { item: RentalItem }) {
  const [qty, setQty] = useState(1);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-sand bg-white/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
      <div className="relative h-48 w-full overflow-hidden bg-brand-sand">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-cream/90 px-3 py-1 text-xs font-medium text-brand-slate backdrop-blur">
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-brand-slate">{item.name}</h3>
          <span className="whitespace-nowrap font-semibold text-brand-champagne">
            ${item.price.toFixed(2)}
            <span className="text-xs font-normal text-brand-muted">
              /{item.unit}
            </span>
          </span>
        </div>

        <ul className="mt-3 flex flex-1 flex-col gap-1.5">
          {item.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-sm text-brand-muted"
            >
              <Check className="h-3.5 w-3.5 flex-none text-brand-champagne" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-3">
          <QuantityStepper value={qty} onChange={setQty} />
          <AddButton onAdd={() => addToQuote(item.name, qty)} />
        </div>
      </div>
    </article>
  );
}

function SupplyCard({ item }: { item: SupplyItem }) {
  const [qty, setQty] = useState(1);
  const Icon = SUPPLY_ICONS[item.id] ?? Sparkles;
  return (
    <article className="flex h-full flex-col rounded-3xl border border-brand-sand bg-white/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blush/60 text-brand-slate">
          <Icon className="h-6 w-6" />
        </span>
        <span className="whitespace-nowrap font-semibold text-brand-champagne">
          ${item.price.toFixed(2)}
          <span className="text-xs font-normal text-brand-muted">
            /{item.unit}
          </span>
        </span>
      </div>

      <h3 className="mt-4 font-semibold text-brand-slate">{item.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-brand-muted">
        {item.description}
      </p>

      <div className="mt-5 flex items-center gap-3">
        <QuantityStepper value={qty} onChange={setQty} />
        <AddButton onAdd={() => addToQuote(item.name, qty)} />
      </div>
    </article>
  );
}

export default function RentalsSection() {
  const [tab, setTab] = useState<Tab>("equipment");
  const [showAll, setShowAll] = useState(false);

  const visibleRentals = showAll ? rentals : rentals.slice(0, INITIAL_RENTALS);

  return (
    <section id="rentals" className="scroll-mt-24 bg-brand-sand/40 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-brand-muted">
            <ShoppingBag className="h-4 w-4 text-brand-champagne" />
            Rentals & Party Store
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-5xl">
            Everything for your celebration
          </h2>
          <p className="mt-4 text-pretty text-lg leading-8 text-brand-muted">
            Rent commercial-grade equipment or grab a DIY kit — add anything to
            your quote and we&apos;ll handle the rest.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-brand-sand bg-white/70 p-1">
            <button
              type="button"
              onClick={() => setTab("equipment")}
              aria-pressed={tab === "equipment"}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne ${
                tab === "equipment"
                  ? "bg-brand-slate text-brand-cream shadow-sm"
                  : "text-brand-slate hover:text-brand-champagne"
              }`}
            >
              Party Equipment Rentals
            </button>
            <button
              type="button"
              onClick={() => setTab("supplies")}
              aria-pressed={tab === "supplies"}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne ${
                tab === "supplies"
                  ? "bg-brand-slate text-brand-cream shadow-sm"
                  : "text-brand-slate hover:text-brand-champagne"
              }`}
            >
              DIY Supplies &amp; Kits
            </button>
          </div>
        </div>

        {/* Grids: horizontal snap-scroll on mobile, grid on larger screens */}
        {tab === "equipment" ? (
          <>
            <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
              {visibleRentals.map((item) => (
                <div
                  key={item.id}
                  className="w-[78%] flex-none snap-start sm:w-auto"
                >
                  <RentalCard item={item} />
                </div>
              ))}
            </div>

            {rentals.length > INITIAL_RENTALS && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setShowAll((v) => !v)}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-brand-slate/15 bg-white/70 px-6 text-sm font-semibold text-brand-slate transition-all duration-300 hover:bg-brand-slate hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
                >
                  {showAll
                    ? "Show Less"
                    : "View Full Rental Inventory (+)"}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
            {supplies.map((item) => (
              <div
                key={item.id}
                className="w-[78%] flex-none snap-start sm:w-auto"
              >
                <SupplyCard item={item} />
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/quote"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-slate px-7 text-sm font-semibold text-brand-cream transition-all duration-300 hover:bg-brand-champagne hover:text-brand-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
          >
            Continue to Your Quote &rarr;
          </Link>
        </div>

        <p className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-2 text-center text-sm text-brand-muted">
          <PartyPopper className="h-4 w-4 flex-none text-brand-champagne" />
          Delivery, setup &amp; pickup available across LA &amp; Orange County.
        </p>
      </div>
    </section>
  );
}

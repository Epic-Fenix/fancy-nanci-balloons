"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Building2,
  Cake,
  Check,
  Crown,
  Frame,
  Heart,
  LayoutGrid,
  Lightbulb,
  PartyPopper,
  Send,
  Sparkles,
  Wind,
  Armchair,
  Castle,
  GraduationCap,
  Package,
  X,
  type LucideIcon,
} from "lucide-react";

import { generateWhatsAppQuoteLink } from "@/lib/whatsapp";
import type {
  BalloonServiceStyle,
  BudgetRange,
  EventType,
  QuoteFormData,
} from "@/types/quote";

const EVENT_TYPES: { value: EventType; label: string; icon: LucideIcon }[] = [
  { value: "Birthday", label: "Birthday", icon: Cake },
  { value: "Baby Shower / Reveal", label: "Baby Shower / Reveal", icon: Baby },
  { value: "Wedding / Sweet 16", label: "Wedding / Sweet 16", icon: Heart },
  { value: "Corporate", label: "Corporate", icon: Building2 },
  { value: "Other", label: "Other", icon: PartyPopper },
];

const SERVICE_STYLES: {
  value: BalloonServiceStyle;
  icon: LucideIcon;
}[] = [
  { value: "Organic Garland", icon: Wind },
  { value: "Full Backdrop & Arch", icon: Frame },
  { value: "Marquee Numbers/Letters", icon: Lightbulb },
  { value: "Custom Balloon Wall", icon: LayoutGrid },
  { value: "Full Venue Styling", icon: Crown },
  { value: "Tables & Chairs Rental", icon: Armchair },
  { value: "Bounce House Rental", icon: Castle },
  { value: "Party Supplies Package", icon: Package },
];

const BUDGETS: BudgetRange[] = [
  "$300 - $600",
  "$600 - $1,200",
  "$1,200+",
  "Flexible",
];

const TOTAL_STEPS = 3;

const INITIAL: QuoteFormData = {
  name: "",
  phone: "",
  eventType: "",
  serviceStyles: [],
  eventDate: "",
  location: "",
  estimatedBudget: "",
  notes: "",
  rentals: [],
  academyInterest: false,
};

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteFormData>(INITIAL);

  const update = <K extends keyof QuoteFormData>(
    key: K,
    value: QuoteFormData[K],
  ) => setData((prev) => ({ ...prev, [key]: value }));

  const toggleStyle = (style: BalloonServiceStyle) =>
    setData((prev) => ({
      ...prev,
      serviceStyles: prev.serviceStyles.includes(style)
        ? prev.serviceStyles.filter((s) => s !== style)
        : [...prev.serviceStyles, style],
    }));

  const removeRental = (name: string) =>
    setData((prev) => ({
      ...prev,
      rentals: prev.rentals.filter((r) => r.name !== name),
    }));

  const canContinue =
    (step === 1 && data.eventType !== "") ||
    (step === 2 && data.serviceStyles.length > 0) ||
    step === 3;

  const canSubmit =
    data.name.trim().length > 0 && data.phone.trim().length > 0;

  const whatsappLink = useMemo(() => generateWhatsAppQuoteLink(data), [data]);

  const progress = (step / TOTAL_STEPS) * 100;

  // Preselect a style and jump to step 2 when a service card requests it.
  useEffect(() => {
    const handler = (e: Event) => {
      const style = (e as CustomEvent<{ style?: BalloonServiceStyle }>).detail
        ?.style;
      if (!style) return;
      setData((prev) => ({
        ...prev,
        serviceStyles: prev.serviceStyles.includes(style)
          ? prev.serviceStyles
          : [...prev.serviceStyles, style],
      }));
      setStep(2);
    };
    window.addEventListener("fnb:prefill-style", handler);
    return () => window.removeEventListener("fnb:prefill-style", handler);
  }, []);

  // Accept rentals/supplies and masterclass interest from other sections.
  useEffect(() => {
    const onRental = (e: Event) => {
      const detail = (e as CustomEvent<{ name?: string; quantity?: number }>)
        .detail;
      if (!detail?.name) return;
      const name = detail.name;
      const qty = detail.quantity && detail.quantity > 0 ? detail.quantity : 1;
      setData((prev) => {
        const exists = prev.rentals.some((r) => r.name === name);
        const rentals = exists
          ? prev.rentals.map((r) =>
              r.name === name ? { ...r, quantity: r.quantity + qty } : r,
            )
          : [...prev.rentals, { name, quantity: qty }];
        return { ...prev, rentals };
      });
    };
    const onAcademy = () =>
      setData((prev) => ({ ...prev, academyInterest: true }));

    window.addEventListener("fnb:add-rental", onRental);
    window.addEventListener("fnb:academy-interest", onAcademy);
    return () => {
      window.removeEventListener("fnb:add-rental", onRental);
      window.removeEventListener("fnb:academy-interest", onAcademy);
    };
  }, []);

  return (
    <section
      id="cotizador"
      className="scroll-mt-20 bg-brand-sand/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-brand-muted">
            <Sparkles className="h-4 w-4 text-brand-champagne" />
            Get a Quote
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-5xl">
            Let&apos;s design your setup
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-muted">
            Three quick steps — we&apos;ll send your details straight to our
            team on WhatsApp.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-10">
          <div className="mb-2 flex items-center justify-between text-sm font-medium text-brand-muted">
            <span>Step {step} of {TOTAL_STEPS}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-brand-sand">
            <div
              className="h-full rounded-full bg-brand-champagne transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="mt-8 rounded-3xl border border-brand-sand bg-brand-cream p-6 shadow-sm sm:p-9">
          {/* Step 1 - Event Type */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold text-brand-slate">
                What are we celebrating?
              </h3>
              <p className="mt-1 text-sm text-brand-muted">
                Pick the option that fits best.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {EVENT_TYPES.map(({ value, label, icon: Icon }) => {
                  const active = data.eventType === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => update("eventType", value)}
                      aria-pressed={active}
                      className={`flex flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne ${
                        active
                          ? "border-brand-champagne bg-white shadow-md shadow-brand-champagne/20"
                          : "border-brand-sand bg-white/50 hover:border-brand-champagne/60 hover:bg-white"
                      }`}
                    >
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 ${
                          active
                            ? "bg-brand-champagne text-white"
                            : "bg-brand-sand text-brand-slate"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-sm font-medium text-brand-slate">
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2 - Styling & Services */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold text-brand-slate">
                Styling &amp; services
              </h3>
              <p className="mt-1 text-sm text-brand-muted">
                Select all that interest you — mix and match freely.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {SERVICE_STYLES.map(({ value, icon: Icon }) => {
                  const active = data.serviceStyles.includes(value);
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => toggleStyle(value)}
                      aria-pressed={active}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne ${
                        active
                          ? "border-brand-champagne bg-brand-champagne/15 text-brand-slate"
                          : "border-brand-sand bg-white/60 text-brand-slate hover:border-brand-champagne/60 hover:bg-white"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full transition-all duration-300 ${
                          active
                            ? "bg-brand-champagne text-white"
                            : "bg-brand-sand text-brand-muted"
                        }`}
                      >
                        {active ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          <Icon className="h-3 w-3" />
                        )}
                      </span>
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3 - Event Details & Contact */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold text-brand-slate">
                Event details &amp; contact
              </h3>
              <p className="mt-1 text-sm text-brand-muted">
                A few details so we can tailor your quote.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name">
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone / WhatsApp">
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="(305) 555-0123"
                    className={inputClass}
                  />
                </Field>
                <Field label="Event Date">
                  <input
                    type="date"
                    value={data.eventDate}
                    onChange={(e) => update("eventDate", e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="City / Zip Code">
                  <input
                    type="text"
                    value={data.location}
                    onChange={(e) => update("location", e.target.value)}
                    placeholder="e.g., Whittier, Pasadena, Long Beach, LA (Zip Code)"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <span className="mb-2 block text-sm font-medium text-brand-slate">
                  Estimated Budget
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {BUDGETS.map((budget) => {
                    const active = data.estimatedBudget === budget;
                    return (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => update("estimatedBudget", budget)}
                        aria-pressed={active}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne ${
                          active
                            ? "border-brand-champagne bg-brand-champagne/15 text-brand-slate"
                            : "border-brand-sand bg-white/60 text-brand-slate hover:border-brand-champagne/60 hover:bg-white"
                        }`}
                      >
                        {budget}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5">
                <Field label="Special Notes">
                  <textarea
                    value={data.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={3}
                    placeholder="Theme, colors, inspiration, guest count…"
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>

              {(data.rentals.length > 0 || data.academyInterest) && (
                <div className="mt-6 rounded-2xl border border-brand-sand bg-white/60 p-4">
                  <p className="text-sm font-semibold text-brand-slate">
                    Added to your quote
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {data.rentals.map((r) => (
                      <span
                        key={r.name}
                        className="inline-flex items-center gap-2 rounded-full bg-brand-sand/70 px-3 py-1 text-sm text-brand-slate"
                      >
                        {r.name}{" "}
                        <span className="text-brand-muted">x{r.quantity}</span>
                        <button
                          type="button"
                          onClick={() => removeRental(r.name)}
                          aria-label={`Remove ${r.name}`}
                          className="text-brand-muted transition-colors hover:text-brand-slate"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </span>
                    ))}
                    {data.academyInterest && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-brand-champagne/15 px-3 py-1 text-sm text-brand-slate">
                        <GraduationCap className="h-3.5 w-3.5 text-brand-champagne" />
                        Masterclass interest
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium text-brand-slate transition-all duration-300 hover:bg-brand-sand/70 disabled:pointer-events-none disabled:opacity-0"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            {step < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={() => canContinue && setStep((s) => s + 1)}
                disabled={!canContinue}
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-brand-slate px-6 text-sm font-medium text-brand-cream transition-all duration-300 hover:bg-brand-champagne hover:text-brand-slate disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-brand-slate disabled:hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
              >
                Continue
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            ) : (
              <a
                href={canSubmit ? whatsappLink : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!canSubmit}
                onClick={(e) => {
                  if (!canSubmit) e.preventDefault();
                }}
                className={`inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream ${
                  canSubmit
                    ? "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:brightness-105"
                    : "cursor-not-allowed bg-brand-sand text-brand-muted"
                }`}
              >
                <Send className="h-4 w-4" />
                Send Inquiry via WhatsApp
              </a>
            )}
          </div>
        </div>

        {step === 3 && !canSubmit && (
          <p className="mt-3 text-center text-sm text-brand-muted">
            Please add your name and phone to send your inquiry.
          </p>
        )}
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-brand-sand bg-white/70 px-4 py-2.5 text-sm text-brand-slate placeholder:text-brand-muted/60 outline-none transition-colors duration-200 focus:border-brand-champagne focus:bg-white focus:ring-2 focus:ring-brand-champagne/30";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-brand-slate">
        {label}
      </span>
      {children}
    </label>
  );
}

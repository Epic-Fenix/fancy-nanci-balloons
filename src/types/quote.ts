/**
 * Types for the Fancy Nanci Balloons inquiry / quote wizard.
 * Market: United States (US English, USD).
 */

/** High-level type of celebration. */
export type EventType =
  | "Birthday"
  | "Baby Shower / Reveal"
  | "Wedding / Sweet 16"
  | "Corporate"
  | "Other";

/** Balloon styling & service options (multi-select). */
export type BalloonServiceStyle =
  | "Organic Garland"
  | "Full Backdrop & Arch"
  | "Marquee Numbers/Letters"
  | "Custom Balloon Wall"
  | "Full Venue Styling"
  | "Tables & Chairs Rental"
  | "Bounce House Rental"
  | "Party Supplies Package";

/** Estimated budget ranges in USD. */
export type BudgetRange =
  | "$300 - $600"
  | "$600 - $1,200"
  | "$1,200+"
  | "Flexible";

/** A rental/supply line added to the quote from the store. */
export interface QuoteRentalSelection {
  name: string;
  quantity: number;
}

/** Full payload collected by the multi-step wizard. */
export interface QuoteFormData {
  /** Client full name. */
  name: string;
  /** Phone / WhatsApp number. */
  phone: string;
  /** Selected event type (empty until chosen). */
  eventType: EventType | "";
  /** One or more selected styling services. */
  serviceStyles: BalloonServiceStyle[];
  /** Tentative event date (ISO string, e.g. "2026-12-24"). */
  eventDate: string;
  /** City / Zip code / venue. */
  location: string;
  /** Estimated budget range (empty until chosen). */
  estimatedBudget: BudgetRange | "";
  /** Special notes or requests. */
  notes: string;
  /** Equipment/supply rentals added from the store. */
  rentals: QuoteRentalSelection[];
  /** Whether the client is interested in a masterclass/workshop. */
  academyInterest: boolean;
}

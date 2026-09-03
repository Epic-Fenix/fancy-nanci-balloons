import type { QuoteFormData } from "@/types/quote";

/**
 * Business WhatsApp number (international format, no "+").
 * Temporary test line for Fancy Nanci Balloons.
 */
export const WHATSAPP_PHONE = "15623254921";

/**
 * Builds a wa.me link with the inquiry details laid out as an elegant,
 * WhatsApp-formatted message (bold via *asterisks*, italics via _underscores_).
 *
 * @param data - Data collected by the quote wizard.
 * @returns URL that opens WhatsApp with the message pre-filled.
 */
export function generateWhatsAppQuoteLink(data: QuoteFormData): string {
  const {
    name,
    phone,
    eventType,
    serviceStyles,
    eventDate,
    location,
    estimatedBudget,
    notes,
    rentals,
    academyInterest,
  } = data;

  const styles =
    serviceStyles && serviceStyles.length > 0 ? serviceStyles.join(", ") : "—";

  const rentalsText =
    rentals && rentals.length > 0
      ? rentals.map((r) => `${r.name} x${r.quantity}`).join(", ")
      : "";

  const divider = "-----------------------------------------";

  const lines: string[] = [
    "✨ *New Event Quote - Fancy Nanci Balloons* ✨",
    divider,
    `👤 *Client:* ${name || "—"}`,
    `📱 *Phone:* ${phone || "—"}`,
    `🎉 *Event Type:* ${eventType || "—"}`,
    `🎈 *Selected Styles:* ${styles}`,
    `📅 *Tentative Date:* ${eventDate || "—"}`,
    `📍 *Location / Zip Code:* ${location || "—"}`,
    `💰 *Budget Range:* ${estimatedBudget || "—"}`,
  ];

  if (rentalsText) {
    lines.push(`🪑 *Equipment Rentals:* ${rentalsText}`);
  }
  if (academyInterest) {
    lines.push("🎓 *Academy/Masterclass Interest:* Yes");
  }

  lines.push(
    `📝 *Notes:* ${notes && notes.trim() ? notes.trim() : "—"}`,
    divider,
    "_Sent from the website inquiry form_",
  );

  const message = lines.join("\n");

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

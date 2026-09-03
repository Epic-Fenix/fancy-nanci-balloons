/**
 * Cross-page quote intent bridge.
 *
 * Since the store (rentals), the academy page and the quote wizard now live on
 * separate routes, selections are carried between pages through sessionStorage
 * and merged into the wizard when it mounts.
 */

export interface QuoteIntent {
  styles?: string[];
  rentals?: { name: string; quantity: number }[];
  academy?: boolean;
}

const KEY = "fnb_quote_intent";

export function readQuoteIntent(): QuoteIntent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as QuoteIntent) : null;
  } catch {
    return null;
  }
}

export function clearQuoteIntent(): void {
  try {
    window.sessionStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}

function write(next: QuoteIntent): void {
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
}

export function addIntentStyle(style: string): void {
  const cur = readQuoteIntent() ?? {};
  const styles = new Set(cur.styles ?? []);
  styles.add(style);
  write({ ...cur, styles: Array.from(styles) });
}

export function addIntentRental(name: string, quantity: number): void {
  const cur = readQuoteIntent() ?? {};
  const rentals = [...(cur.rentals ?? [])];
  const existing = rentals.find((r) => r.name === name);
  if (existing) {
    existing.quantity += quantity;
  } else {
    rentals.push({ name, quantity });
  }
  write({ ...cur, rentals });
}

export function setIntentAcademy(): void {
  const cur = readQuoteIntent() ?? {};
  write({ ...cur, academy: true });
}

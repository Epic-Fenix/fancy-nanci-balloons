import type { BalloonServiceStyle } from "@/types/quote";

/**
 * Signature services for Fancy Nanci Balloons.
 * `iconName` maps to a Lucide icon in ServicesSection.
 * `prefillStyle` links the card to the quote wizard's style selection.
 */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  startingPrice: string;
  features: string[];
  iconName: "arches" | "backdrops" | "marquee" | "styling" | "rentals";
  prefillStyle: BalloonServiceStyle;
}

export const services: ServiceItem[] = [
  {
    id: "organic-arches",
    title: "Organic Balloon Arches & Garlands",
    description:
      "Custom organic installations for entrances, photo walls, and stage frames — sculpted to flow with your space.",
    startingPrice: "Starting at $250",
    features: [
      "Custom color palette",
      "Half or full arches",
      "Indoor & outdoor setups",
      "Delivery & on-site install",
    ],
    iconName: "arches",
    prefillStyle: "Organic Garland",
  },
  {
    id: "themed-backdrops",
    title: "Themed Backdrops & Arch Rentals",
    description:
      "Circular mampara backdrops, shimmer walls, and themed structures that turn any corner into the main event.",
    startingPrice: "Starting at $350",
    features: [
      "Round & square backdrops",
      "Shimmer & sequin walls",
      "Themed prop styling",
      "Rental + styling options",
    ],
    iconName: "backdrops",
    prefillStyle: "Full Backdrop & Arch",
  },
  {
    id: "marquee-letters",
    title: "Marquee Letters & Numbers",
    description:
      "Giant illuminated numbers and letters for milestone birthdays, Sweet 16s, and galas — impossible to miss.",
    startingPrice: "Starting at $180",
    features: [
      "4 ft light-up letters",
      "Warm or bright LEDs",
      "Custom placement",
      "Pairs with any arch",
    ],
    iconName: "marquee",
    prefillStyle: "Marquee Numbers/Letters",
  },
  {
    id: "full-styling",
    title: "Full Event & Corporate Styling",
    description:
      "End-to-end venue styling and brand activations — cohesive design from the entrance to the dessert table.",
    startingPrice: "Starting at $900",
    features: [
      "Full venue concept",
      "Brand color matching",
      "Coordinated props & signage",
      "Setup & teardown included",
    ],
    iconName: "styling",
    prefillStyle: "Full Venue Styling",
  },
  {
    id: "party-rentals",
    title: "Tables, Chairs & Party Rentals",
    description:
      "Complete your celebration setup with our commercial-grade tables, luxury chiavari/foldable chairs, linens, and marquee decor.",
    startingPrice: "Packages from $150",
    features: [
      "Clean & sanitized equipment",
      "Round & rectangular tables",
      "Kid & adult chair options",
      "Delivery, setup & pickup in LA County",
    ],
    iconName: "rentals",
    prefillStyle: "Tables & Chairs Rental",
  },
];

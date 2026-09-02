/**
 * Curated portfolio dataset for Fancy Nanci Balloons.
 * Photography: real event work stored locally in /public/portfolio.
 */

export type PortfolioCategory =
  | "Birthdays"
  | "Baby Showers & Reveals"
  | "Weddings & Galas"
  | "Corporate Events";

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  imageUrl: string;
  /** Intrinsic pixel dimensions of the source photo (for next/image). */
  width: number;
  height: number;
  description: string;
  tags: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "quinceanera-backdrop",
    title: "Sweet 16 & Quinceañera Backdrop",
    category: "Weddings & Galas",
    imageUrl: "/portfolio/quinceanera-backdrop.jpg",
    width: 3024,
    height: 3024,
    description:
      "A statement backdrop styled for a Sweet 16 and quinceañera — layered balloons framing the guest of honor for an unforgettable entrance.",
    tags: ["Backdrop", "Sweet 16", "Quinceañera"],
  },
  {
    id: "50th-birthday",
    title: "50th Milestone Celebration Arch",
    category: "Birthdays",
    imageUrl: "/portfolio/50th-birthday.jpg",
    width: 2268,
    height: 3024,
    description:
      "An elegant organic arch designed for a milestone 50th — refined tones and a photo-ready focal point for the celebration.",
    tags: ["Milestone", "Organic Arch", "Elegant"],
  },
  {
    id: "baby-baby-shower",
    title: "Bespoke Pastel Baby Shower Arch",
    category: "Baby Showers & Reveals",
    imageUrl: "/portfolio/baby-baby-shower.jpg",
    width: 1290,
    height: 2294,
    description:
      "A soft pastel arch custom built for a baby shower — gentle blush and cream tones for a warm, welcoming celebration.",
    tags: ["Pastel", "Baby Shower", "Custom Arch"],
  },
  {
    id: "marquee-16",
    title: "Illuminated Marquee Numbers & Backdrop",
    category: "Birthdays",
    imageUrl: "/portfolio/marquee-16.jpg",
    width: 1215,
    height: 2160,
    description:
      "Giant light-up marquee numbers paired with a full balloon backdrop — bold, bright, and impossible to miss.",
    tags: ["Marquee Numbers", "Illuminated", "Backdrop"],
  },
  {
    id: "bounce-house",
    title: "Luxury Bounce House & Balloon Decor",
    category: "Birthdays",
    imageUrl: "/portfolio/bounce-house.jpg",
    width: 3024,
    height: 3024,
    description:
      "A luxe bounce house dressed with coordinated balloon decor — playful fun with a boutique, elevated finish.",
    tags: ["Bounce House", "Kids Party", "Full Decor"],
  },
  {
    id: "organic-arch",
    title: "Organic Sculpted Balloon Installation",
    category: "Corporate Events",
    imageUrl: "/portfolio/organic-arch.jpg",
    width: 640,
    height: 1136,
    description:
      "A sculpted organic installation engineered for a corporate setting — clean lines and brand-ready color for activations and launches.",
    tags: ["Installation", "Corporate", "Brand Colors"],
  },
];

/**
 * Curated portfolio dataset for Fancy Nanci Balloons.
 * Photography: real event work (local) + high-end Unsplash showcase.
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

const CROP = "?auto=format&fit=crop&w=1000&h=1250&q=80";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "quinceanera-backdrop",
    title: "Sweet 16 & Quinceanera Backdrop",
    category: "Weddings & Galas",
    imageUrl: "/portfolio/quinceanera-backdrop.jpg",
    width: 3024,
    height: 3024,
    description:
      "A statement backdrop styled for a Sweet 16 and quinceanera - layered balloons framing the guest of honor for an unforgettable entrance.",
    tags: ["Backdrop", "Sweet 16", "Quinceanera"],
  },
  {
    id: "50th-birthday",
    title: "50th Milestone Celebration Arch",
    category: "Birthdays",
    imageUrl: "/portfolio/50th-birthday.jpg",
    width: 2268,
    height: 3024,
    description:
      "An elegant organic arch designed for a milestone 50th - refined tones and a photo-ready focal point for the celebration.",
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
      "A soft pastel arch custom built for a baby shower - gentle blush and cream tones for a warm, welcoming celebration.",
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
      "Giant light-up marquee numbers paired with a full balloon backdrop - bold, bright, and impossible to miss.",
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
      "A luxe bounce house dressed with coordinated balloon decor - playful fun with a boutique, elevated finish.",
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
      "A sculpted organic installation engineered for a corporate setting - clean lines and brand-ready color for activations and launches.",
    tags: ["Installation", "Corporate", "Brand Colors"],
  },
  {
    id: "black-tie-gala",
    title: "Black-Tie Gala Entrance",
    category: "Weddings & Galas",
    imageUrl: `https://images.unsplash.com/photo-1780586382191-bef9c740798e${CROP}`,
    width: 1000,
    height: 1250,
    description:
      "An ivory and clear-bubble installation framing a black-tie gala entrance - restrained, luminous, and unmistakably luxe.",
    tags: ["Gala", "Ivory", "Entrance"],
  },
  {
    id: "milestone-40th",
    title: "Milestone 40th Celebration",
    category: "Birthdays",
    imageUrl: `https://images.unsplash.com/photo-1602328790041-ee36d98e677c${CROP}`,
    width: 1000,
    height: 1250,
    description:
      "A jewel-tone organic backdrop built for a milestone 40th - bold color styled with an editorial hand.",
    tags: ["Milestone", "Organic", "Bold Palette"],
  },
  {
    id: "brand-activation-wall",
    title: "Corporate Brand Activation Wall",
    category: "Corporate Events",
    imageUrl: `https://images.unsplash.com/photo-1560128411-79892dd93bf8${CROP}`,
    width: 1000,
    height: 1250,
    description:
      "A branded balloon wall engineered for a corporate activation - clean geometry and precise color matching for photo moments.",
    tags: ["Activation", "Brand Colors", "Photo Wall"],
  },
  {
    id: "grand-ballroom",
    title: "Grand Ballroom Reception",
    category: "Weddings & Galas",
    imageUrl: `https://images.unsplash.com/photo-1511285560929-80b456fea0bc${CROP}`,
    width: 1000,
    height: 1250,
    description:
      "Organic garlands woven through a ballroom reception - a soft, romantic finish scaled for a grand space.",
    tags: ["Reception", "Romantic", "Large Scale"],
  },
  {
    id: "illuminated-20th",
    title: "Illuminated 20th Birthday",
    category: "Birthdays",
    imageUrl: `https://images.unsplash.com/photo-1774290687117-eb1769c33df3${CROP}`,
    width: 1000,
    height: 1250,
    description:
      "Marquee numbers glowing against a layered balloon backdrop - a milestone moment made for the camera.",
    tags: ["Marquee Numbers", "Illuminated", "Backdrop"],
  },
  {
    id: "product-launch-arch",
    title: "Product Launch Statement Arch",
    category: "Corporate Events",
    imageUrl: `https://images.unsplash.com/photo-1769867627452-46a2f513e05a${CROP}`,
    width: 1000,
    height: 1250,
    description:
      "A full statement arch welcoming guests to a product launch - high impact, built for foot traffic and press photos.",
    tags: ["Full Arch", "Launch", "Statement"],
  },
];

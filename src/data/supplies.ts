/**
 * DIY party supplies & kits available for purchase.
 * `price` is in USD.
 */
export interface SupplyItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
}

export const supplies: SupplyItem[] = [
  {
    id: "garland-kit",
    name: "DIY Organic Garland Kits",
    price: 45,
    unit: "kit",
    description:
      "Everything you need to build a boutique-style organic garland at home — balloons, strip tape, and a how-to guide.",
  },
  {
    id: "foil-shapes",
    name: '18" Foil Helium Shapes',
    price: 2.5,
    unit: "each",
    description:
      "Hearts, stars, and number shapes in premium foil — helium-ready for instant sparkle.",
  },
  {
    id: "swatch-packs",
    name: "Themed Color Swatch Packs",
    price: 18,
    unit: "pack",
    description:
      "Curated latex color palettes to perfectly match your theme, mood, and venue.",
  },
];

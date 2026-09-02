/**
 * Party equipment available for rent from Fancy Nanci Balloons.
 * `price` is in USD; `unit` describes the billing basis ("day", "each").
 */
export interface RentalItem {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  features: string[];
  imageUrl: string;
}

const U = "?auto=format&fit=crop&w=1000&q=80";

export const rentals: RentalItem[] = [
  {
    id: "round-tables",
    name: 'Round 60" Banquet Tables',
    category: "Tables",
    price: 12,
    unit: "day",
    features: ["Seats up to 8 guests", "60-inch round", "Commercial grade"],
    imageUrl: `https://images.unsplash.com/photo-1519167758481-83f550bb49b3${U}`,
  },
  {
    id: "resin-chairs",
    name: "White Resin Folding Chairs",
    category: "Chairs",
    price: 3.5,
    unit: "day",
    features: ["Indoor & outdoor", "Cleaned & sanitized", "Easy to stack"],
    imageUrl: `https://images.unsplash.com/photo-1597451828211-09604cfa296a${U}`,
  },
  {
    id: "castle-bounce",
    name: "Luxury White Castle Bounce House",
    category: "Bounce Houses",
    price: 250,
    unit: "day",
    features: ["Elegant neutral design", "Delivery & setup", "Fully sanitized"],
    imageUrl: "/portfolio/bounce-house.jpg",
  },
  {
    id: "marquee-numbers",
    name: "4ft Marquee Numbers / Letters",
    category: "Marquee",
    price: 50,
    unit: "each",
    features: ["4 ft tall", "Warm LED glow", "Any number or letter"],
    imageUrl: "/portfolio/marquee-16.jpg",
  },
  {
    id: "shimmer-walls",
    name: "Shimmer Walls & Backdrop Frameworks",
    category: "Backdrops",
    price: 180,
    unit: "day",
    features: ["Sequin shimmer panels", "Round & square frames", "Setup included"],
    imageUrl: "/portfolio/quinceanera-backdrop.jpg",
  },
];

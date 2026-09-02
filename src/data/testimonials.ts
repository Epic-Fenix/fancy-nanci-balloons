/**
 * Client testimonials for Fancy Nanci Balloons.
 */
export interface Testimonial {
  id: string;
  name: string;
  event: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "ashley-dallas",
    name: "Ashley Morgan",
    event: "Baby Shower in Whittier, CA",
    rating: 5,
    quote:
      "Absolutely breathtaking. The blush organic garland was the first thing every guest mentioned — it made our whole shower feel like a magazine cover.",
    date: "2 weeks ago",
  },
  {
    id: "priya-miami",
    name: "Priya Sharma",
    event: "Sweet 16 in Pasadena, CA",
    rating: 5,
    quote:
      "The marquee numbers and backdrop were pure magic. Setup was flawless and right on time. My daughter cried happy tears when she walked in.",
    date: "1 month ago",
  },
  {
    id: "danielle-atlanta",
    name: "Danielle Carter",
    event: "Corporate Activation in Downtown LA",
    rating: 5,
    quote:
      "They matched our brand colors perfectly and elevated the entire venue. Professional, punctual, and genuinely creative. We're already booking the next one.",
    date: "1 month ago",
  },
  {
    id: "sofia-houston",
    name: "Sofia Ramirez",
    event: "Milestone 50th Birthday in Downey, CA",
    rating: 5,
    quote:
      "Elegant, refined, and exactly the vibe we wanted for my mom's 50th. The gold and ivory arch made the whole room feel special. Worth every penny.",
    date: "2 months ago",
  },
];

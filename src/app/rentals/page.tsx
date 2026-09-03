import type { Metadata } from "next";

import RentalsSection from "@/components/sections/RentalsSection";

export const metadata: Metadata = {
  title: "Rentals & Party Store | Fancy Nanci Balloons",
  description:
    "Rent commercial-grade tables, chairs, bounce houses, marquee numbers, and shimmer walls, or grab DIY balloon kits — delivery across LA & Orange County.",
  alternates: { canonical: "/rentals" },
};

export default function RentalsPage() {
  return (
    <main className="flex-1 bg-brand-cream pt-6">
      <RentalsSection />
    </main>
  );
}

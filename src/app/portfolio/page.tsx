import type { Metadata } from "next";

import PortfolioGallery from "@/components/sections/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio | Fancy Nanci Balloons",
  description:
    "Browse our full portfolio of organic balloon arches, backdrops, marquee installations, and gala setups across Southern California.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <main className="flex-1 bg-brand-cream pt-6">
      <PortfolioGallery />
    </main>
  );
}

import FeaturedWork from "@/components/sections/FeaturedWork";
import FinalCTA from "@/components/sections/FinalCTA";
import HeroSection from "@/components/sections/HeroSection";
import ReelsShowcase from "@/components/sections/ReelsShowcase";

export default function Home() {
  return (
    <main className="flex-1 bg-brand-cream">
      <HeroSection />
      <FeaturedWork />
      <ReelsShowcase />
      <FinalCTA />
    </main>
  );
}

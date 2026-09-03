import type { Metadata } from "next";

import AcademySection from "@/components/sections/AcademySection";

export const metadata: Metadata = {
  title: "Meet Nanci · Master Stylist & Academy | Fancy Nanci Balloons",
  description:
    "Nancy Díaz — national balloon competitor in New York with 10+ years of experience. Book 1-on-1 and small-group balloon masterclasses.",
  alternates: { canonical: "/academy" },
};

export default function AcademyPage() {
  return (
    <main className="flex-1 bg-brand-cream pt-6">
      <AcademySection />
    </main>
  );
}

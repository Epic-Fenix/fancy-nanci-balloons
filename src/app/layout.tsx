import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import JsonLd from "@/components/common/JsonLd";
import Navbar from "@/components/common/Navbar";
import StickyNav from "@/components/common/StickyNav";
import WhatsAppFloating from "@/components/common/WhatsAppFloating";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.fancynanciballoons.com";
const SITE_TITLE =
  "Fancy Nanci Balloons | Luxury Balloon Styling & Party Rentals in Whittier, CA";
const SITE_DESCRIPTION =
  "High-end organic balloon garlands, backdrops, marquee numbers, tables & chairs rentals in Whittier, LA & Orange County. Award-winning balloon artistry.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "balloon styling whittier",
    "party rentals los angeles",
    "organic balloon arches orange county",
    "quinceanera backdrops",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Fancy Nanci Balloons",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Navbar />
        <StickyNav />
        {children}
        <Footer />
        <WhatsAppFloating />
        <BackToTop />
      </body>
    </html>
  );
}

import type { MetadataRoute } from "next";

const SITE_URL = "https://www.fancynanciballoons.com";

const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/rentals", priority: 0.8 },
  { path: "/academy", priority: 0.8 },
  { path: "/quote", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}

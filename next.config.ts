import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: { exclude: ["error"] },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    // Path-form equivalents of the old single-page anchors.
    // (Hash fragments like /#galeria are handled client-side by HashRedirect,
    // since the server never receives the URL fragment.)
    return [
      { source: "/galeria", destination: "/portfolio", permanent: true },
      { source: "/gallery", destination: "/portfolio", permanent: true },
      { source: "/cotizador", destination: "/quote", permanent: true },
      { source: "/services", destination: "/quote", permanent: true },
      { source: "/reviews", destination: "/quote", permanent: true },
      { source: "/faq", destination: "/quote", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;

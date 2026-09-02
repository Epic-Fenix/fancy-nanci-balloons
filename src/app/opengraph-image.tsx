import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt =
  "Fancy Nanci Balloons — Luxury Balloon Styling & Party Rentals in Whittier, CA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette
const CREAM = "#FAF7F2";
const SAND = "#EFE9DF";
const CHAMPAGNE = "#D4AF37";
const SLATE = "#2C2A29";
const MUTED = "#7A7571";

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/portfolio/logo.jpg"),
  );
  const logoSrc = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: CREAM,
          padding: "72px",
          position: "relative",
        }}
      >
        {/* Frame */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: `2px solid ${SAND}`,
            borderRadius: 28,
            display: "flex",
          }}
        />

        {/* Rating pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 22px",
            borderRadius: 999,
            border: `1px solid ${CHAMPAGNE}`,
            color: MUTED,
            fontSize: 26,
            marginBottom: 34,
          }}
        >
          <span style={{ color: CHAMPAGNE }}>★</span>
          5.0 on Yelp · Award-Winning Balloon Artistry
        </div>

        {/* Logo */}
        <img
          src={logoSrc}
          alt="Fancy Nanci Balloons logo"
          width={132}
          height={132}
          style={{
            width: 132,
            height: 132,
            borderRadius: 20,
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            marginBottom: 30,
          }}
        />

        {/* Title */}
        <div style={{ display: "flex", fontSize: 74, fontWeight: 700, color: SLATE }}>
          Fancy&nbsp;<span style={{ color: CHAMPAGNE }}>Nanci</span>&nbsp;Balloons
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 32,
            color: MUTED,
            textAlign: "center",
          }}
        >
          Luxury Balloon Styling &amp; Party Rentals · Whittier, CA
        </div>
      </div>
    ),
    { ...size },
  );
}

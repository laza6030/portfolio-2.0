import { ImageResponse } from "next/og";

import { Locale } from "@/app/lib/i18n";
import { author } from "@/app/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage(locale: Locale) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#1b263b",
        color: "#e0e1dd",
      }}
    >
      <div style={{ fontSize: 76, letterSpacing: -2 }}>{author.name}</div>

      <div style={{ marginTop: 16, fontSize: 40, color: "#778da9" }}>
        {author.jobTitle[locale]}
      </div>

      <div
        style={{
          marginTop: 48,
          width: 160,
          height: 8,
          backgroundColor: "#415a77",
        }}
      />
    </div>,
    ogSize,
  );
}

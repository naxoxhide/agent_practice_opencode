import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          backgroundColor: "#05050f",
          border: "12px solid #e6e6f5",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            backgroundImage: "linear-gradient(100deg, #8b5cf6, #22d3ee 50%, #ec4899)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          tripleS
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#e6e6f5", marginTop: 16 }}>
          Into the Dimension
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "#9797b8", marginTop: 24 }}>
          La historia completa, 2022 — 2026
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const alt = "AUGUSTO VALMONT";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafafa",
          color: "#111111",
          padding: "64px",
          border: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#525252",
          }}
        >
          <span>AV</span>
          <span>Personal brand website</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 94,
              lineHeight: 0.96,
              letterSpacing: "-0.05em",
            }}
          >
            Augusto Valmont
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.3, color: "#525252", maxWidth: "920px" }}>
            Entrepreneur, engineer and builder focused on companies, systems and
            technology with long-term intent.
          </div>
        </div>
      </div>
    ),
    size
  );
}
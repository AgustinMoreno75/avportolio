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
          background: "#ffffff",
          color: "#000000",
          padding: "64px",
          border: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#666666",
          }}
        >
          <span>AV</span>
          <span>Filosofía personal</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 108,
              lineHeight: 0.95,
              letterSpacing: "-0.06em",
            }}
          >
            AUGUSTO VALMONT
          </div>
          <div style={{ fontSize: 34, color: "#666666" }}>
            Autodominio. Disciplina estratégica. Crecimiento implacable.
          </div>
        </div>
      </div>
    ),
    size
  );
}
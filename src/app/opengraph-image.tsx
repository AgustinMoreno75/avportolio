import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "AUGUSTO VALMONT";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoPath = path.join(process.cwd(), "assets", "avlogo.jpeg");
  const logoBuffer = await readFile(logoPath);
  const logoDataUrl = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;

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
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={logoDataUrl}
          alt=""
          width="560"
          height="560"
          style={{
            position: "absolute",
            left: "-48px",
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.08,
            filter: "blur(18px)",
            objectFit: "contain",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#525252",
            position: "relative",
          }}
        >
          <img src={logoDataUrl} alt="AV" width="54" height="54" style={{ objectFit: "contain" }} />
          <span>Personal brand website</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, position: "relative" }}>
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
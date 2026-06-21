import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default async function Icon() {
  const logoPath = path.join(process.cwd(), "assets", "avlogo.jpeg");
  const logoBuffer = await readFile(logoPath);
  const logoDataUrl = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <img src={logoDataUrl} alt="AV" width="64" height="64" style={{ objectFit: "contain" }} />
      </div>
    ),
    size
  );
}
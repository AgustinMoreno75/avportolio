import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          color: "#000000",
          border: "1px solid #e5e5e5",
          fontSize: 28,
          letterSpacing: "0.28em",
        }}
      >
        AV
      </div>
    ),
    size
  );
}
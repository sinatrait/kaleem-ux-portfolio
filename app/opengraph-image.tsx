import { ImageResponse } from "next/og";

export const alt = "Abdul Kaleem — UX and product design portfolio";
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
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          color: "black",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "2px solid black",
            padding: "56px",
          }}
        >
          <div style={{ fontSize: 28, letterSpacing: 4 }}>
            UX &amp; PRODUCT DESIGN
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: -4,
              lineHeight: 1,
            }}
          >
            <span>Abdul Kaleem</span>
            <span style={{ fontSize: 36, fontWeight: 400, letterSpacing: 0 }}>
              Principal UX / Product Designer
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

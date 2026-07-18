import { ImageResponse } from "next/og";

export const alt = "Kuyumcumsun";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "#14120f",
          backgroundImage:
            "radial-gradient(circle at 88% 8%, rgba(201,162,39,0.25), transparent 55%), radial-gradient(circle at 6% 96%, rgba(201,162,39,0.2), transparent 55%)",
          position: "relative",
        }}
      >
        <svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="#c9a227" strokeWidth="1.5">
          <path d="M11 9h10l6.5 8-11 12L5 17z" strokeLinejoin="round" />
          <path d="M5 17h22" />
          <path d="M11 9 16 17 21 9" />
          <line x1="16" y1="17" x2="16" y2="29" />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 86,
            fontWeight: 600,
            color: "#faf7f0",
            letterSpacing: -1,
            marginTop: 28,
          }}
        >
          Kuyumcum<span style={{ color: "#c9a227" }}>sun</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#a79e8c",
            marginTop: 14,
          }}
        >
          Kuyumcular için dijital vitrin
        </div>
      </div>
    ),
    { ...size }
  );
}

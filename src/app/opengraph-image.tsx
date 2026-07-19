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
        <svg width="100" height="73" viewBox="0 0 508.47 373.4" fill="#c9a227">
          <path d="M243.06,367.01c-8.51,7.15-19.01,7.64-28.47,4.72l-76.8-23.77-126.53-39.13c-4.66-1.44-7.85-4.11-9.56-7.73-2.5-5.27-2.01-9.94.02-15.17l39.44-101.61c3.79-9.76,11.7-15.23,19.79-20.39L309.5,5.15c8.15-5.21,16.49-6.19,25.39-4.19l112.7,25.3c8.24,1.85,16.86,5.71,20.79,14.54l37.9,85.12c3.72,8.36,2.94,17.31-4.08,23.2l-41.81,35.13-217.33,182.75ZM200.58,249.76l21.86,94.91c.27,1.19,1.82,1.9,2.41,1.62s1.26-1.32,1.14-2.79l-7.3-91.06c-.85-10.61.37-21.66,8.53-28.1l27.1-21.39,92.03-72.55,90.79-72.09c3.09-2.45,5.72-4.29,7.44-8.04-3.02-.09-4.88,1.36-7.03,2.86l-67.9,47.37-148.28,104.51c-8.1,5.71-16.99,10.88-26.63,8.76l-48.03-10.54-78.41-16.94c-1.33-.29-2.29.95-2.13,1.67.09.42.69,1.1,1.35,1.34l33.53,12.3,82.65,29.13c8.22,2.9,14.65,9.32,16.88,19.03Z" />
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
          kuyumcum<span style={{ color: "#c9a227" }}>sun</span>
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

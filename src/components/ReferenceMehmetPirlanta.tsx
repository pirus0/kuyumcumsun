"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const DIAMOND_PATHS = [
  "M6.5 4.5h11L21 9.5 12 20.5 3 9.5z",
  "M3 9.5h18",
  "M8.5 4.5 6.5 9.5 12 20.5",
  "M15.5 4.5 17.5 9.5 12 20.5",
  "M9.5 4.5 12 9.5 14.5 4.5",
];

function DiamondIcon({ size = 22, color }: { size?: number; color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {DIAMOND_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const SWATCHES = [
  { name: "diamond-900", hex: "#142236" },
  { name: "diamond-700", hex: "#1D3C5C" },
  { name: "diamond-500", hex: "#3F7FA8" },
  { name: "diamond-300", hex: "#8ECBE3" },
  { name: "diamond-50", hex: "#EEF8FB" },
];

const CHIP =
  "inline-flex items-center gap-1.5 text-xs border rounded-full px-3 py-1.5 transition-colors";

export default function ReferenceMehmetPirlanta() {
  const [showBrand, setShowBrand] = useState(false);

  return (
    <div className="border border-[var(--line)] rounded-lg p-6 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="shrink-0 w-11 h-11 rounded-full bg-[#eef8fb] flex items-center justify-center">
          <DiamondIcon size={22} color="#1d3c5c" />
        </span>
        <div>
          <p className={`${cormorant.className} text-lg text-fg leading-tight`}>
            Mehmet Pırlanta
          </p>
          <p className="text-xs text-fg-dim">Pırlanta &amp; altın takı</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className={`${CHIP} border-[var(--line)] text-fg-faint cursor-default`}>
          Harita Kayıt
        </span>
        <a
          href="https://mehmetpirlanta.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={`${CHIP} border-[var(--line)] text-fg hover:border-[var(--gold-3)] hover:text-[var(--gold-3)]`}
        >
          Website ↗
        </a>
        <button
          type="button"
          onClick={() => setShowBrand((v) => !v)}
          aria-expanded={showBrand}
          className={`${CHIP} ${
            showBrand
              ? "border-[var(--gold-3)] text-[var(--gold-3)]"
              : "border-[var(--line)] text-fg hover:border-[var(--gold-3)] hover:text-[var(--gold-3)]"
          }`}
        >
          Kurumsal Kimlik
        </button>
      </div>

      {showBrand && (
        <div className="hairline-t pt-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-[#142236] flex items-center justify-center shrink-0">
              <DiamondIcon size={18} color="#eef8fb" />
            </span>
            <p className={`${cormorant.className} text-2xl text-fg`}>Mehmet Pırlanta</p>
          </div>

          <div className="flex gap-2">
            {SWATCHES.map((s) => (
              <span
                key={s.hex}
                title={`${s.name} · ${s.hex}`}
                className="w-8 h-8 rounded-md border border-[var(--line)]"
                style={{ background: s.hex }}
              />
            ))}
          </div>

          <div
            className="h-8 rounded-md"
            style={{
              background:
                "linear-gradient(135deg, #142236 0%, #1D3C5C 32%, #3F7FA8 58%, #8ECBE3 82%, #EEF8FB 100%)",
            }}
          />

          <p className="text-xs text-fg-faint">Cormorant Garamond · Manrope</p>
        </div>
      )}
    </div>
  );
}

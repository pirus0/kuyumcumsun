"use client";

import { useEffect, useState } from "react";
import { IconGem, IconTrendUp, IconTrendDown } from "./icons";
import type { GoldPrice } from "@/lib/gold";

const POLL_MS = 90_000;

function formatPrice(n: number) {
  return n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function GoldTicker() {
  const [price, setPrice] = useState<GoldPrice | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/altin", { cache: "no-store" });
        if (!res.ok) throw new Error("unavailable");
        const data: GoldPrice = await res.json();
        if (!cancelled) {
          setPrice(data);
          setFailed(false);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    load();
    const id = window.setInterval(load, POLL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  if (failed && !price) return null;

  const up = (price?.changePercent ?? 0) >= 0;

  return (
    <div
      className="gold-fill fixed top-0 inset-x-0 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold px-4"
      style={{ height: "var(--ticker-h)", zIndex: 1020 }}
    >
      <IconGem size={15} className="shrink-0" />
      <span className="uppercase tracking-[0.08em] hidden sm:inline">24 Ayar Gram</span>
      {price ? (
        <>
          <span className="tabular-nums">₺{formatPrice(price.sell)}</span>
          <span
            className={`inline-flex items-center gap-1 tabular-nums ${
              up ? "text-emerald-900" : "text-red-900"
            }`}
          >
            {up ? <IconTrendUp size={13} /> : <IconTrendDown size={13} />}
            %{formatPrice(Math.abs(price.changePercent))}
          </span>
        </>
      ) : (
        <span className="opacity-70">yükleniyor…</span>
      )}
    </div>
  );
}

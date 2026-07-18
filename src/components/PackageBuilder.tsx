"use client";

import { useState } from "react";
import { SERVICES } from "@/data/services";
import { formatTRY } from "@/lib/currency";
import { whatsappLink } from "@/lib/whatsapp";
import {
  IconPin,
  IconGlobe,
  IconPalette,
  IconInstagram,
  IconCamera,
  IconCheck,
  IconWhatsApp,
} from "./icons";

const ICONS = {
  pin: IconPin,
  globe: IconGlobe,
  palette: IconPalette,
  instagram: IconInstagram,
  camera: IconCamera,
};

function extraKey(slug: string, index: number) {
  return `${slug}:${index}`;
}

export default function PackageBuilder() {
  const [selectedPkgs, setSelectedPkgs] = useState<Set<string>>(new Set());
  const [selectedExtras, setSelectedExtras] = useState<Set<string>>(new Set());
  const [shakeSlug, setShakeSlug] = useState<string | null>(null);

  function togglePkg(slug: string) {
    setSelectedPkgs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  function toggleExtra(key: string) {
    const slug = key.split(":")[0];
    if (!selectedPkgs.has(slug)) {
      setShakeSlug(slug);
      window.setTimeout(() => setShakeSlug((s) => (s === slug ? null : s)), 450);
      return;
    }
    setSelectedExtras((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const chosenPkgs = SERVICES.filter((s) => selectedPkgs.has(s.slug));
  const chosenExtras = SERVICES.flatMap((s) =>
    s.extras
      .map((e, i) => ({ ...e, key: extraKey(s.slug, i) }))
      .filter((e) => selectedExtras.has(e.key))
  );
  const total =
    chosenPkgs.reduce((sum, s) => sum + s.price, 0) +
    chosenExtras.reduce((sum, e) => sum + e.price, 0);

  const message =
    chosenPkgs.length === 0 && chosenExtras.length === 0
      ? "Merhaba, Kuyumcumsun hizmetleri hakkında bilgi almak istiyorum."
      : [
          "Merhaba, aşağıdaki hizmetlerle ilgileniyorum:",
          ...chosenPkgs.map((s) => `• ${s.title} — ${formatTRY(s.price)}`),
          ...chosenExtras.map((e) => `• ${e.label} — ${formatTRY(e.price)}`),
          `Toplam: ${formatTRY(total)}`,
        ].join("\n");

  return (
    <div className="flex flex-col gap-6">
      {SERVICES.map((service) => {
        const Icon = ICONS[service.icon];
        const pkgChecked = selectedPkgs.has(service.slug);
        return (
          <div
            key={service.slug}
            id={service.slug}
            className={`glass p-6 sm:p-8 scroll-mt-24 ${shakeSlug === service.slug ? "shake" : ""}`}
          >
            <label className="flex items-start gap-4 cursor-pointer">
              <Checkbox checked={pkgChecked} onChange={() => togglePkg(service.slug)} />
              <div className="flex-1 flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-[10px] bg-[var(--gold-3)]/12 text-[var(--gold-2)] shrink-0">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h2 className="font-heading text-lg font-medium">{service.title}</h2>
                    <p className="text-sm text-mist">{service.tagline}</p>
                  </div>
                </div>
                <span className="font-heading font-semibold text-[var(--gold-2)] tabular-nums">
                  {formatTRY(service.price)}
                </span>
              </div>
            </label>

            <div className="grid sm:grid-cols-2 gap-8 mt-6 sm:pl-[60px]">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold-2)]">
                  İçerik
                </span>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {service.content.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <IconCheck size={15} className="text-[var(--gold-2)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-mist/70">
                  Ek Hizmetler
                </span>
                <div className="mt-3 flex flex-col gap-1">
                  {service.extras.map((extra, i) => {
                    const key = extraKey(service.slug, i);
                    const checked = selectedExtras.has(key);
                    return (
                      <label
                        key={key}
                        className="flex items-center justify-between gap-3 cursor-pointer py-1.5"
                      >
                        <span className="flex items-center gap-3">
                          <Checkbox checked={checked} onChange={() => toggleExtra(key)} small />
                          <span className="text-sm text-ink">{extra.label}</span>
                          {extra.recommended && (
                            <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-[var(--gold-3)]/15 text-[var(--gold-2)] shrink-0">
                              Önerilir
                            </span>
                          )}
                        </span>
                        <span className="text-sm text-mist shrink-0 tabular-nums">
                          +{formatTRY(extra.price)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="glass p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-mist/70">
            Toplam
          </p>
          <p className="font-heading text-3xl font-semibold text-[var(--gold-2)] mt-1 tabular-nums">
            {formatTRY(total)}
          </p>
          <p className="text-xs text-mist mt-2 max-w-sm">
            Fiyatlar yaklaşık olup projenin kapsamına göre kesinleşir.
          </p>
        </div>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary justify-center shrink-0 self-start sm:self-auto"
        >
          <IconWhatsApp size={20} />
          İletişime Geç
        </a>
      </div>
    </div>
  );
}

function Checkbox({
  checked,
  onChange,
  small = false,
}: {
  checked: boolean;
  onChange: () => void;
  small?: boolean;
}) {
  const size = small ? "w-4 h-4" : "w-5 h-5";
  return (
    <span className={`relative ${size} shrink-0 mt-0.5`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
      <span
        className={`flex items-center justify-center w-full h-full rounded-[6px] border transition-colors ${
          checked ? "gold-fill border-transparent" : "border-mist/30"
        }`}
      >
        {checked && <IconCheck size={small ? 11 : 13} />}
      </span>
    </span>
  );
}

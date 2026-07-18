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
    <div className="hairline-t">
      {SERVICES.map((service) => {
        const Icon = ICONS[service.icon];
        const pkgChecked = selectedPkgs.has(service.slug);
        return (
          <div
            key={service.slug}
            id={service.slug}
            className={`hairline-b py-10 scroll-mt-24 ${shakeSlug === service.slug ? "shake" : ""}`}
          >
            <label className="flex items-start gap-4 cursor-pointer">
              <Checkbox checked={pkgChecked} onChange={() => togglePkg(service.slug)} />
              <div className="flex-1 flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-fg-faint shrink-0" />
                  <div>
                    <h2 className="font-medium">{service.title}</h2>
                    <p className="text-sm text-fg-dim">{service.tagline}</p>
                  </div>
                </div>
                <span className="font-semibold text-[var(--gold-3)] tabular-nums">
                  {formatTRY(service.price)}
                </span>
              </div>
            </label>

            <div className="grid sm:grid-cols-2 gap-8 mt-6 sm:pl-9">
              <div>
                <span className="text-xs text-fg-faint">İçerik</span>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {service.content.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-fg">
                      <IconCheck size={14} className="text-fg-faint mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs text-fg-faint">Ek Hizmetler</span>
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
                          <span className="text-sm text-fg">{extra.label}</span>
                          {extra.recommended && (
                            <span className="text-[10px] uppercase tracking-wide text-[var(--gold-3)] shrink-0">
                              Önerilir
                            </span>
                          )}
                        </span>
                        <span className="text-sm text-fg-dim shrink-0 tabular-nums">
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

      <div className="py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-xs text-fg-faint">Toplam</p>
          <p className="text-3xl font-semibold text-[var(--gold-3)] mt-1 tabular-nums">
            {formatTRY(total)}
          </p>
          <p className="text-xs text-fg-dim mt-2 max-w-sm">
            Fiyatlar yaklaşık olup projenin kapsamına göre kesinleşir.
          </p>
        </div>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary justify-center shrink-0 self-start sm:self-auto"
        >
          <IconWhatsApp size={18} />
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
          checked ? "gold-fill border-transparent" : "border-[var(--line-strong)]"
        }`}
      >
        {checked && <IconCheck size={small ? 11 : 13} />}
      </span>
    </span>
  );
}

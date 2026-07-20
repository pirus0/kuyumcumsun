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

// Tüm paketler + tüm ek hizmetler (adet başına ücretlenenler hariç) birlikte
// alındığında geçerli olan sabit fiyat. Normal toplamı biz hesaplıyoruz,
// burada sadece indirimli hedef fiyatı tutuyoruz.
const BUNDLE_ALL_IN_PRICE = 44000;

// 5 paket + tüm sabit ek hizmetlerin (adet başına ücretlenenler hariç)
// indirimsiz toplamı — veriden hesaplanır, elle güncellenmesi gerekmez.
const FULL_BUNDLE_RAW_TOTAL = SERVICES.reduce((sum, s) => {
  const fixedExtrasTotal = s.extras
    .filter((e) => !e.perUnit)
    .reduce((s2, e) => s2 + e.price, 0);
  return sum + s.price + fixedExtrasTotal;
}, 0);

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

  const allFixedExtraKeys = SERVICES.flatMap((s) =>
    s.extras
      .map((e, i) => ({ ...e, key: extraKey(s.slug, i) }))
      .filter((e) => !e.perUnit)
      .map((e) => e.key)
  );
  const bundleActive =
    chosenPkgs.length === SERVICES.length &&
    allFixedExtraKeys.every((key) => selectedExtras.has(key));

  const rawTotal =
    chosenPkgs.reduce((sum, s) => sum + s.price, 0) +
    chosenExtras.reduce((sum, e) => sum + e.price, 0);
  const perUnitCost = chosenExtras
    .filter((e) => e.perUnit)
    .reduce((sum, e) => sum + e.price, 0);
  const total = bundleActive ? BUNDLE_ALL_IN_PRICE + perUnitCost : rawTotal;
  const savings = bundleActive ? rawTotal - total : 0;

  const message =
    chosenPkgs.length === 0 && chosenExtras.length === 0
      ? "Merhaba, Kuyumcumsun hizmetleri hakkında bilgi almak istiyorum."
      : [
          "Merhaba, aşağıdaki hizmetlerle ilgileniyorum:",
          ...chosenPkgs.map((s) => `• ${s.title} — ${formatTRY(s.price)}`),
          ...chosenExtras.map((e) => `• ${e.label} — ${formatTRY(e.price)}`),
          ...(bundleActive ? [`Tüm paketler indirimi uygulandı (-${formatTRY(savings)})`] : []),
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
                    {service.note && (
                      <p className="text-xs text-fg-faint mt-1.5 max-w-sm">{service.note}</p>
                    )}
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

      <div className="hairline-b py-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-wide text-[var(--gold-3)]">
            Tam Hizmet
          </span>
          <p className="text-sm text-fg-dim mt-1">
            5 paketin ve tüm ek hizmetlerin tamamını alın.
          </p>
        </div>
        <div className="flex items-baseline gap-3 shrink-0">
          <span className="text-sm text-fg-faint line-through tabular-nums">
            {formatTRY(FULL_BUNDLE_RAW_TOTAL)}
          </span>
          <span className="text-xl font-semibold text-[var(--gold-3)] tabular-nums">
            {formatTRY(BUNDLE_ALL_IN_PRICE)}
          </span>
        </div>
      </div>

      <div className="py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-xs text-fg-faint">Toplam</p>
          <div className="flex items-baseline gap-3 mt-1">
            {bundleActive && (
              <span className="text-lg text-fg-faint line-through tabular-nums">
                {formatTRY(rawTotal)}
              </span>
            )}
            <p className="text-3xl font-semibold text-[var(--gold-3)] tabular-nums">
              {formatTRY(total)}
            </p>
          </div>
          <p className="text-xs text-fg-dim mt-2 max-w-sm">
            {bundleActive
              ? `Tüm paketler bir arada: ${formatTRY(savings)} indirim uygulandı.`
              : "Gördüğünüz fiyat kesin fiyattır, ek ücret çıkmaz."}
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

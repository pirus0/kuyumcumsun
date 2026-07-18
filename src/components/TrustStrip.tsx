import { IconBolt, IconLayers, IconCheck } from "./icons";

const BADGES = [
  { Icon: IconBolt, label: "WhatsApp'tan kısa sürede yanıt" },
  { Icon: IconLayers, label: "Harita, site, sosyal medya tek elden" },
  { Icon: IconCheck, label: "Fiyatlar sitede, sürpriz yok" },
];

export default function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-fg-dim">
      {BADGES.map((b) => (
        <span key={b.label} className="inline-flex items-center gap-2">
          <b.Icon size={15} className="text-fg-faint" />
          {b.label}
        </span>
      ))}
    </div>
  );
}

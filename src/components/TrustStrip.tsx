import { IconBolt, IconLayers, IconCheck } from "./icons";

const BADGES = [
  {
    Icon: IconBolt,
    title: "Hızlı Dönüş",
    desc: "WhatsApp'tan kısa sürede yanıt",
  },
  {
    Icon: IconLayers,
    title: "Tek Elden Vitrin",
    desc: "Harita, site, sosyal medya bir arada",
  },
  {
    Icon: IconCheck,
    title: "Şeffaf Fiyat",
    desc: "Fiyatlar sitede, sürpriz yok",
  },
];

export default function TrustStrip() {
  return (
    <div className="fade-up delay-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
      {BADGES.map((b) => (
        <div key={b.title} className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] bg-[var(--gold-3)]/12 text-[var(--gold-3)] shrink-0">
            <b.Icon size={19} />
          </span>
          <div className="text-left">
            <p className="font-heading font-medium text-sm text-paper">{b.title}</p>
            <p className="text-xs text-mist-dark">{b.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

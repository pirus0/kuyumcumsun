import { IconSearch, IconLayers, IconGoldBar, IconCheck } from "./icons";

const STEPS = [
  {
    Icon: IconSearch,
    title: "İnceleme",
    desc: "Kuyumcunuzu ve dijitalde neye ihtiyacınız olduğunu dinliyoruz.",
  },
  {
    Icon: IconLayers,
    title: "Planlama",
    desc: "Hangi paketi, ne zaman ve nasıl devreye alacağımızı belirliyoruz.",
  },
  {
    Icon: IconGoldBar,
    title: "Kurulum",
    desc: "Harita, website, kimlik ve Instagram kurulumlarını devreye alıyoruz.",
  },
  {
    Icon: IconCheck,
    title: "Teslim",
    desc: "Kontrol edilmiş, çalışır durumdaki vitrini size teslim ediyoruz.",
  },
];

export default function ProcessSection() {
  return (
    <section className="hairline-t max-w-5xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <div className="fade-up max-w-xl mb-16">
        <span className="text-xs text-fg-dim">Süreç</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-3">
          Dört adımda devreye alıyoruz
        </h2>
        <p className="text-sm text-fg-dim mt-3">Ortalama 7 iş günü içinde teslim.</p>
      </div>

      <div className="fade-up delay-1 grid grid-cols-1 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)]">
        {STEPS.map((step, i) => (
          <div key={step.title} className="flex flex-col gap-3 py-8 sm:py-0 sm:px-8 first:sm:pl-0">
            <step.Icon size={20} className="text-fg-faint" />
            <span className="text-xs text-fg-faint mt-2">0{i + 1}</span>
            <h3 className="font-medium">{step.title}</h3>
            <p className="text-sm text-fg-dim leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

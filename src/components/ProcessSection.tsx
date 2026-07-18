import { IconSearch, IconLayers, IconGem, IconCheck } from "./icons";

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
    Icon: IconGem,
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
    <section className="bg-paper py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="fade-up text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold-2)]">
            Süreç
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-medium mt-3">
            Dört adımda devreye alıyoruz
          </h2>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-6">
          <div className="hidden sm:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-[var(--gold-3)]/25" />

          {STEPS.map((step, i) => (
            <div key={step.title} className={`fade-up delay-${i + 1} relative flex flex-col items-center text-center gap-4`}>
              <span className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-full glass text-[var(--gold-2)]">
                <step.Icon size={24} />
              </span>
              <div>
                <span className="text-xs text-[var(--gold-2)]">0{i + 1}</span>
                <h3 className="font-heading font-medium mt-1">{step.title}</h3>
                <p className="text-sm text-mist mt-2 leading-relaxed max-w-[220px] mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

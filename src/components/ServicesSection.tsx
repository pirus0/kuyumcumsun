import { SERVICES } from "@/data/services";
import { ServiceCardCompact } from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <div className="fade-up text-center max-w-xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold-2)]">
          Hizmetler
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-medium mt-3">
          Beş pakette dijital vitrininiz hazır
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((service, i) => (
          <div key={service.slug} className={`fade-up delay-${(i % 4) + 1} h-full`}>
            <ServiceCardCompact service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}

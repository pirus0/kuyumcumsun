import { SERVICES } from "@/data/services";
import { ServiceCardCompact } from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="hairline-t max-w-5xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <div className="fade-up max-w-xl mb-16">
        <span className="text-xs text-fg-dim">Hizmetler</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-3">
          Beş pakette dijital vitrininiz hazır
        </h2>
      </div>

      <div className="fade-up delay-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--line)]">
        {SERVICES.map((service) => (
          <ServiceCardCompact key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}

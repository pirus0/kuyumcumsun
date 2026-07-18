import Link from "next/link";
import { Service } from "@/data/services";
import { IconPin, IconGlobe, IconPalette, IconInstagram, IconCamera, IconArrowRight } from "./icons";

const ICONS = {
  pin: IconPin,
  globe: IconGlobe,
  palette: IconPalette,
  instagram: IconInstagram,
  camera: IconCamera,
};

export function ServiceCardCompact({ service }: { service: Service }) {
  const Icon = ICONS[service.icon];
  return (
    <Link
      href={`/hizmetler#${service.slug}`}
      className="glass card-hover flex flex-col gap-4 p-7 group h-full"
    >
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-[var(--gold-3)]/12 text-[var(--gold-2)]">
        <Icon size={24} />
      </span>
      <h3 className="font-heading text-lg font-medium">{service.benefit}</h3>
      <p className="text-sm text-mist">{service.title}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-[var(--gold-2)]">
        Detayları incele
        <IconArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

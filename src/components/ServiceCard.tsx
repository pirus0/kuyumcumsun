import Link from "next/link";
import { Service } from "@/data/services";
import { formatTRY } from "@/lib/currency";
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
      className="group flex flex-col gap-3 p-8 border-r border-b border-[var(--line)] hover:bg-bg-raised transition-colors"
    >
      <Icon size={20} className="text-fg-faint" />
      <h3 className="font-medium mt-1">{service.title}</h3>
      <p className="text-sm text-fg-dim leading-relaxed">{service.tagline}</p>
      <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-sm text-[var(--gold-3)] font-light italic">
        {formatTRY(service.price)}
        <IconArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

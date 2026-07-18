import Link from "next/link";
import { IconGem } from "./icons";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-heading font-medium tracking-wide text-paper ${className}`}
      aria-label="Kuyumcumsun anasayfa"
    >
      <IconGem size={24} className="text-[var(--gold-3)]" />
      <span className="text-lg">Kuyumcumsun</span>
    </Link>
  );
}

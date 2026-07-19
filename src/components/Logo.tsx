import Link from "next/link";
import { IconGem } from "./icons";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-semibold tracking-tight text-fg ${className}`}
      aria-label="Kuyumcumsun anasayfa"
    >
      <IconGem size={20} className="text-[var(--gold-3)]" />
      <span className="font-heading text-[17px] lowercase">Kuyumcumsun</span>
    </Link>
  );
}

import Link from "next/link";
import { IconArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-6 py-32 text-center flex flex-col items-center">
      <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold-2)]">404</span>
      <h1 className="font-heading text-3xl font-medium mt-4">
        Aradığınız sayfa bulunamadı
      </h1>
      <p className="text-mist mt-3">
        Belki de vitrinin başka bir köşesindedir.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Anasayfaya dön
        <IconArrowRight size={16} />
      </Link>
    </div>
  );
}

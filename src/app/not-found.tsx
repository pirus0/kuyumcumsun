import Link from "next/link";
import { IconArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-6 py-32 text-center flex flex-col items-center">
      <span className="text-xs text-fg-dim">404</span>
      <h1 className="text-3xl font-semibold tracking-tight mt-4">
        Aradığınız sayfa bulunamadı
      </h1>
      <p className="text-fg-dim mt-3">
        Belki de vitrinin başka bir köşesindedir.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Anasayfaya dön
        <IconArrowRight size={16} />
      </Link>
    </div>
  );
}

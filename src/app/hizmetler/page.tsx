import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import PackageBuilder from "@/components/PackageBuilder";
import { SITE_NAME } from "@/lib/site";

const TITLE = "Hizmetler";
const DESCRIPTION =
  "Harita kayıt, canlı altın kurlu website, kurumsal kimlik, Instagram ve ürün çekimi paketleri — fiyatlar açık, anında görün.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

export default function HizmetlerPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
      <div className="fade-up max-w-2xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold-2)]">
          Hizmetler
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-medium mt-3 text-balance">
          Dijital vitrininizi oluşturan beş paket
        </h1>
        <p className="text-mist mt-4 leading-relaxed">
          Fiyatlar açıkça gösterilir, sürpriz yoktur. İstediğiniz paketleri
          ve ek hizmetleri seçin, toplamı anında görün; seçtiklerinizle tek
          dokunuşla WhatsApp&apos;tan iletişime geçin.
        </p>
      </div>

      <nav className="fade-up delay-1 flex flex-wrap gap-3 mt-10">
        {SERVICES.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="text-sm px-4 py-2 rounded-[10px] border border-mist/15 text-mist hover:border-[var(--gold-3)] hover:text-[var(--gold-2)] transition-colors"
          >
            {s.title}
          </a>
        ))}
      </nav>

      <div className="fade-up delay-2 mt-10">
        <PackageBuilder />
      </div>
    </div>
  );
}

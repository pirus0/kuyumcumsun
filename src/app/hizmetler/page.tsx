import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import PackageBuilder from "@/components/PackageBuilder";
import Faq from "@/components/Faq";
import FaqJsonLd from "@/components/FaqJsonLd";
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
        <span className="text-xs text-fg-dim">Hizmetler</span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3 text-balance">
          Dijital vitrininizi oluşturan beş paket
        </h1>
        <p className="text-fg-dim mt-4 leading-relaxed">
          Fiyatlar açıkça gösterilir, sürpriz yoktur. Ek hizmetlerin hepsi
          gerçekten işinize yarar — size gerekmeyecek bir şeyi hiç
          listelemeyiz. İstediğiniz paketleri ve ek hizmetleri seçin,
          toplamı anında görün; tümünü birden alırsanız hesaplayıcı özel
          indirimli fiyatı otomatik gösterir.
        </p>
      </div>

      <nav className="fade-up delay-1 flex flex-wrap gap-x-6 gap-y-2 mt-10">
        {SERVICES.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="text-sm text-fg-dim hover:text-[var(--gold-3)] transition-colors"
          >
            {s.title}
          </a>
        ))}
      </nav>

      <div className="fade-up delay-2 mt-6">
        <PackageBuilder />
      </div>

      <div className="mt-20 sm:mt-28">
        <span className="text-xs text-fg-dim">Sıkça Sorulan Sorular</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-3">
          Merak edilenler
        </h2>
        <div className="mt-8">
          <Faq />
        </div>
      </div>

      <FaqJsonLd />
    </div>
  );
}

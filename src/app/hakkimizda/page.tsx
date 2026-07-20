import type { Metadata } from "next";
import Glow from "@/components/Glow";
import Reveal from "@/components/Reveal";
import ReferenceMehmetPirlanta from "@/components/ReferenceMehmetPirlanta";
import { SITE_NAME } from "@/lib/site";

const TITLE = "Hakkımızda";
const DESCRIPTION =
  "Kuyumcumsun sadece kuyumcularla çalışan bir reklam ajansıdır — başka sektörden gelen teklifleri görmeden reddediyoruz.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/hakkimizda" },
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

export default function HakkimizdaPage() {
  return (
    <div>
      <section className="relative overflow-hidden max-w-3xl mx-auto px-6 sm:px-8 pt-20 sm:pt-28 pb-24 sm:pb-32 text-center">
        <Glow className="w-[440px] h-[440px] -top-44 left-1/2 -translate-x-1/2" />
        <span className="fade-up text-xs text-fg-dim">Hakkımızda</span>

        <Reveal className="mt-5">
          <p className="text-2xl sm:text-3xl font-medium leading-snug tracking-tight text-balance">
            Biz sadece kuyumcularla çalışıyoruz.{" "}
            <span className="text-fg-dim">
              Başka bir sektörden gelen teklifi görmeden reddediyoruz — sizi
              gerçekten anlamak, herkese çalışmamaktan geçiyor.
            </span>
          </p>
        </Reveal>

        <p className="fade-up delay-1 text-fg-dim text-sm sm:text-base mt-8 max-w-lg mx-auto">
          Kuyumcu vitrinlerinin nasıl çalıştığını, altın kurunun neden her
          gün önemli olduğunu, müşterinin neye güvenip neye güvenmediğini
          biliyoruz — çünkü tek uğraştığımız iş bu.
        </p>
      </section>

      <section className="hairline-t max-w-3xl mx-auto px-6 sm:px-8 py-20 sm:py-24">
        <span className="fade-up text-xs text-fg-dim">Referanslar</span>
        <h2 className="fade-up delay-1 text-2xl sm:text-3xl font-semibold tracking-tight mt-3">
          Birlikte çalıştığımız kuyumcular
        </h2>

        <div className="fade-up delay-2 grid sm:grid-cols-2 gap-4 mt-10">
          <ReferenceMehmetPirlanta />

          <div className="relative aspect-[4/3] border border-[var(--line)] rounded-lg overflow-hidden flex items-center justify-center">
            <div
              aria-hidden
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 blur-md select-none"
            >
              <div className="w-28 h-4 rounded bg-fg-faint/30" />
              <div className="w-36 h-3 rounded bg-fg-faint/20" />
              <div className="w-24 h-3 rounded bg-fg-faint/20" />
            </div>
            <p className="relative text-sm text-fg-dim text-center px-8">
              Bu müşterimiz, anonim kalmak istiyor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import ProductPreview from "./ProductPreview";
import TrustStrip from "./TrustStrip";
import { IconWhatsApp, IconArrowRight } from "./icons";
import { whatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-20 sm:pt-28 pb-20 sm:pb-28">
      <div className="text-center flex flex-col items-center">
        <span className="fade-up text-xs text-fg-dim">
          Kuyumcular için dijital vitrin
        </span>

        <h1 className="fade-up delay-1 font-semibold text-[2.75rem] sm:text-6xl md:text-[4.5rem] leading-[1.02] tracking-tight mt-5 max-w-3xl text-balance">
          Vitrininiz dijitalde de{" "}
          <span className="gold-text">parlasın</span>
        </h1>

        <p className="fade-up delay-2 text-fg-dim text-base sm:text-lg mt-6 max-w-xl">
          Harita kaydından canlı altın kurlu web sitenize kadar, kuyumcunuzun
          dijitalde ihtiyaç duyduğu her şeyi kuruyoruz.
        </p>

        <div className="fade-up delay-3 flex flex-wrap items-center justify-center gap-2 mt-9">
          <a
            href={whatsappLink("Merhaba, Kuyumcumsun hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <IconWhatsApp size={18} />
            WhatsApp&apos;tan Yaz
          </a>
          <Link href="/hizmetler" className="btn-ghost">
            Hizmetleri incele
            <IconArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="fade-up delay-4 mt-16 sm:mt-20 max-w-2xl mx-auto">
        <ProductPreview />
      </div>

      <div className="mt-16 sm:mt-20">
        <TrustStrip />
      </div>
    </section>
  );
}

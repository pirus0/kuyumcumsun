import Link from "next/link";
import HeroVisual from "./HeroVisual";
import TrustStrip from "./TrustStrip";
import { IconWhatsApp, IconArrowRight } from "./icons";
import { whatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="bg-ink text-paper">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 text-center flex flex-col items-center">
        <div className="fade-in">
          <HeroVisual />
        </div>

        <span className="fade-up text-xs uppercase tracking-[0.3em] text-[var(--gold-3)] mt-8">
          Kuyumcular İçin Dijital Vitrin
        </span>

        <h1 className="fade-up delay-1 font-heading font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.1] mt-5 max-w-3xl text-balance">
          Vitrininiz camekânda kalmasın,{" "}
          <span className="gold-text">dijitalde de parlasın</span>
        </h1>

        <p className="fade-up delay-2 text-mist-dark text-base sm:text-lg leading-relaxed mt-6 max-w-2xl">
          Harita kayıtlarından canlı altın kurlu web sitenize, kurumsal kimlikten
          Instagram&apos;a kadar kuyumcunuzun dijitalde ihtiyaç duyduğu her şeyi
          kuruyoruz. Müşteriniz sizi kolayca bulsun, ürünlerinizi güncel fiyatla
          görsün, güvenle yazsın.
        </p>

        <div className="fade-up delay-3 flex flex-wrap justify-center gap-4 mt-9">
          <a
            href={whatsappLink("Merhaba, Kuyumcumsun hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center min-w-[210px]"
          >
            <IconWhatsApp size={20} />
            WhatsApp&apos;tan Yaz
          </a>
          <Link href="/hizmetler" className="btn-outline justify-center min-w-[210px]">
            Hizmetleri İncele
            <IconArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 sm:mt-16">
          <TrustStrip />
        </div>
      </div>
    </section>
  );
}

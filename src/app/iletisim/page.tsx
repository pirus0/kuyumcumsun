import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { IconWhatsApp } from "@/components/icons";
import { SITE_NAME } from "@/lib/site";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const TITLE = "İletişim";
const DESCRIPTION = "Kuyumcumsun ile WhatsApp üzerinden hemen iletişime geçin.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/iletisim" },
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

export default function IletisimPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 sm:px-8 py-20">
      <div className="fade-up">
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold-2)]">
          İletişim
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-medium mt-3">
          Kuyumcunuzu konuşalım
        </h1>
        <p className="text-mist mt-4 leading-relaxed">
          En hızlı dönüş WhatsApp üzerinden olur. Formu doldurun, mesajınız
          WhatsApp&apos;a iletilsin.
        </p>
      </div>

      <div className="fade-up delay-1 glass p-8 sm:p-10 mt-10">
        <ContactForm />
      </div>

      <div className="fade-up delay-2 mt-8">
        <a
          href={whatsappLink("Merhaba, Kuyumcumsun hakkında bilgi almak istiyorum.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-mist hover:text-[var(--gold-2)] transition-colors"
        >
          <IconWhatsApp size={18} />
          {WHATSAPP_DISPLAY}
        </a>
      </div>
    </div>
  );
}

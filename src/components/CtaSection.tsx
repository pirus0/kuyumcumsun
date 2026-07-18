import { IconWhatsApp } from "./icons";
import { whatsappLink } from "@/lib/whatsapp";

export default function CtaSection() {
  return (
    <section className="hairline-t py-24 sm:py-32">
      <div className="fade-up text-center flex flex-col items-center max-w-xl mx-auto px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Vitrininizi dijitalde de kurup parlatalım
        </h2>
        <p className="text-fg-dim text-sm sm:text-base mt-3">
          Birkaç dakikanızı ayırın, ihtiyacınızı dinleyelim.
        </p>
        <a
          href={whatsappLink("Merhaba, Kuyumcumsun hakkında bilgi almak istiyorum.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          <IconWhatsApp size={18} />
          WhatsApp&apos;tan Yaz
        </a>
      </div>
    </section>
  );
}

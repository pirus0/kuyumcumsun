import Glow from "./Glow";
import { IconWhatsApp } from "./icons";
import { whatsappLink } from "@/lib/whatsapp";

export default function CtaSection() {
  return (
    <section className="hairline-t relative overflow-hidden py-24 sm:py-32">
      <Glow className="w-[400px] h-[400px] -bottom-52 left-1/2 -translate-x-1/2" />
      <div className="relative fade-up text-center flex flex-col items-center max-w-xl mx-auto px-6 sm:px-8">
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

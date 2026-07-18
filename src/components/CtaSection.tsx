import { IconWhatsApp } from "./icons";
import { whatsappLink } from "@/lib/whatsapp";

export default function CtaSection() {
  return (
    <section className="bg-ink text-paper py-24 sm:py-36">
      <div className="fade-up text-center flex flex-col items-center max-w-2xl mx-auto px-6 sm:px-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-medium max-w-xl">
          Vitrininizi dijitalde de kurup parlatalım
        </h2>
        <p className="text-mist-dark text-sm sm:text-base mt-4 max-w-lg">
          Birkaç dakikanızı ayırın, ihtiyacınızı dinleyelim ve size uygun
          paketi birlikte belirleyelim.
        </p>
        <a
          href={whatsappLink("Merhaba, Kuyumcumsun hakkında bilgi almak istiyorum.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          <IconWhatsApp size={20} />
          WhatsApp&apos;tan Yaz
        </a>
      </div>
    </section>
  );
}

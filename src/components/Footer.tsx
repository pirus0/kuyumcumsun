import Logo from "./Logo";
import { IconWhatsApp, IconGem } from "./icons";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-paper/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-mist-dark max-w-xs leading-relaxed">
            Kuyumcunuzun dijital vitrinini kuruyoruz — haritadan Instagram&apos;a,
            canlı altın kurlu web sitenize kadar.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-mist-dark/70">
            Sayfalar
          </span>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist-dark hover:text-[var(--gold-3)] transition-colors w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-mist-dark/70">
            İletişim
          </span>
          <a
            href={whatsappLink("Merhaba, Kuyumcumsun hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-mist-dark hover:text-[var(--gold-3)] transition-colors w-fit"
          >
            <IconWhatsApp size={19} />
            {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-8 flex items-center gap-2 text-xs text-mist-dark/45">
        <IconGem size={13} />
        <p>© {new Date().getFullYear()} Kuyumcumsun. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}

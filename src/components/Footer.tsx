import Logo from "./Logo";
import { IconWhatsApp } from "./icons";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="hairline-t">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-fg-dim max-w-xs leading-relaxed">
            Kuyumcunuzun dijital vitrinini kuruyoruz — haritadan Instagram&apos;a,
            canlı altın kurlu web sitenize kadar.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs text-fg-faint">Sayfalar</span>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-dim hover:text-fg transition-colors w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs text-fg-faint">İletişim</span>
          <a
            href={whatsappLink("Merhaba, Kuyumcumsun hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-fg-dim hover:text-fg transition-colors w-fit"
          >
            <IconWhatsApp size={17} />
            {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-10 text-xs text-fg-faint">
        © {new Date().getFullYear()} Kuyumcumsun. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

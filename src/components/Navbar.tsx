"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { IconWhatsApp } from "./icons";
import { whatsappLink } from "@/lib/whatsapp";

const LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="glass-strong fixed inset-x-0 flex items-center justify-between px-5 sm:px-8"
        style={{ top: "var(--ticker-h)", height: "var(--nav-h)", zIndex: 1010 }}
      >
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-sm text-mist-dark hover:text-paper transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink("Merhaba, Kuyumcumsun hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <IconWhatsApp size={20} />
            WhatsApp&apos;tan Yaz
          </a>
        </div>

        <button
          className={`hamburger md:hidden ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={`panel-backdrop md:hidden ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <div className={`side-panel md:hidden ${open ? "open" : ""}`}>
        <div className="side-panel-inner">
          <nav className="panel-menu">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="panel-menu-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Merhaba, Kuyumcumsun hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center mt-4"
              onClick={() => setOpen(false)}
            >
              <IconWhatsApp size={20} />
              WhatsApp&apos;tan Yaz
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

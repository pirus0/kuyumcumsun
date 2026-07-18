"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { IconArrowRight } from "./icons";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Merhaba, ben ${name || "..."}.`,
      business ? `Kuyumcum: ${business}.` : null,
      message || "Kuyumcumsun hizmetleri hakkında bilgi almak istiyorum.",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join(" ")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-mist/70">
          Adınız
        </label>
        <input
          id="name"
          className="form-input mt-2"
          placeholder="Adınız Soyadınız"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="business" className="text-xs uppercase tracking-[0.15em] text-mist/70">
          Kuyumcunuzun adı
        </label>
        <input
          id="business"
          className="form-input mt-2"
          placeholder="İşletmenizin adı"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-mist/70">
          Mesajınız
        </label>
        <textarea
          id="message"
          className="form-input mt-2 min-h-32 resize-none"
          placeholder="Hangi hizmetle ilgilendiğinizi kısaca yazın"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-primary justify-center mt-2">
        WhatsApp&apos;ta Devam Et
        <IconArrowRight size={16} />
      </button>
      <p className="text-xs text-mist/50">
        Gönder&apos;e bastığınızda mesajınız WhatsApp üzerinden bize iletilir.
      </p>
    </form>
  );
}

import { SERVICES } from "@/data/services";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description:
      "Kuyumcular için harita kaydı, canlı altın kurlu web sitesi, kurumsal kimlik, Instagram kurulumu ve ürün çekimi hizmetleri.",
    areaServed: "TR",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: WHATSAPP_DISPLAY,
        areaServed: "TR",
        availableLanguage: ["Turkish"],
      },
    ],
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      price: s.price,
      priceCurrency: "TRY",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.tagline,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

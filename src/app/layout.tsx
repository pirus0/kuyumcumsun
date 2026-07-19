import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoldTicker from "@/components/GoldTicker";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kuyumcumsun | Kuyumcular İçin Dijital Vitrin",
    template: "%s | Kuyumcumsun",
  },
  description:
    "Kuyumcular için harita kaydı, canlı altın kurlu web sitesi, kurumsal kimlik, Instagram kurulumu ve ürün çekimi — dijital vitrininizi tek elden kuruyoruz.",
  openGraph: {
    title: SITE_NAME,
    description:
      "Kuyumcunuzun dijital vitrinini kuruyoruz: harita, canlı altın kurlu web sitesi, kurumsal kimlik, Instagram.",
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Kuyumcunuzun dijital vitrinini kuruyoruz: harita, canlı altın kurlu web sitesi, kurumsal kimlik, Instagram.",
  },
  verification: {
    google: "ds0AbcauM9leXi5n5yoAT21U4V5TlXb4p5xUQXZ7OSg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        <GoldTicker />
        <Navbar />
        <main
          className="flex-1"
          style={{ paddingTop: "calc(var(--ticker-h) + var(--nav-h))" }}
        >
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

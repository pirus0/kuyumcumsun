import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LogicSection from "@/components/LogicSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <LogicSection />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
    </div>
  );
}

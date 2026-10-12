import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustValueStrip from "@/components/TrustValueStrip";
import RealProblemsSection from "@/components/RealProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsBento from "@/components/SolutionsBento";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import KnowledgePreviewSection from "@/components/KnowledgePreviewSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { getTestimonialsSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gayatri Technology | Software Built Around How Your Business Works",
  description:
    "We build custom websites, ERP systems, business applications and digital products for growing businesses. Instead of forcing your workflow into generic software, we build around the way your team actually works. Rajkot, Gujarat.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const testimonialsSchema = getTestimonialsSchema();

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-[#f8f9ff] overflow-x-hidden md:overflow-x-clip w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonialsSchema),
        }}
      />
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden md:overflow-x-clip">
        <HeroSection />
        <TrustValueStrip />
        <RealProblemsSection />
        <ServicesSection />
        <SolutionsBento />
        <PortfolioSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <KnowledgePreviewSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

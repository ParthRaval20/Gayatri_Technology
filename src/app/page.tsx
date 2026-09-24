import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustValueStrip from "@/components/TrustValueStrip";
import ServicesSection from "@/components/ServicesSection";
import SolutionsBento from "@/components/SolutionsBento";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gayatri Technology | Custom Web Development & Enterprise Software Solutions",
  description:
    "We design and develop bespoke websites, high-performance web applications, and industrial ERP systems tailored to your business goals. Engineering excellence from Rajkot, Gujarat.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-[#f8f9ff] overflow-x-hidden md:overflow-x-clip w-full">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden md:overflow-x-clip">
        <HeroSection />
        <TrustValueStrip />
        <ServicesSection />
        <SolutionsBento />
        <PortfolioSection />
        <WhyChooseUsSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

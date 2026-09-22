import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustValueStrip from "@/components/TrustValueStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CustomSolutionsSection from "@/components/CustomSolutionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import SolutionsBento from "@/components/SolutionsBento";
import IndustriesSection from "@/components/IndustriesSection";
import TechStackSection from "@/components/TechStackSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustValueStrip />
        <AboutSection />
        <ServicesSection />
        <CustomSolutionsSection />
        <WhyChooseUsSection />
        <SolutionsBento />
        <IndustriesSection />
        <TechStackSection />
        <PortfolioSection />
        <ProcessSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

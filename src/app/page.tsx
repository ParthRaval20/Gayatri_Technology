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
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig, getTestimonialsSchema, getFaqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gayatri Technology | Custom Business Software & ERP Rajkot",
  description:
    "Custom ERP systems, mobile software, and web applications built around your business workflow in Rajkot, Gujarat. 100% owned, zero per-seat fees.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Gayatri Technology | Custom Business Software & ERP Rajkot",
    description:
      "Custom ERP systems, mobile software, and web applications built around your business workflow in Rajkot, Gujarat. 100% owned, zero per-seat fees.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gayatri Technology | Custom Business Software & ERP Rajkot",
    description:
      "Custom ERP systems, mobile software, and web applications built around your business workflow in Rajkot, Gujarat. 100% owned, zero per-seat fees.",
  },
};

const homepageFaqs = [
  {
    q: "What types of custom software does Gayatri Technology build?",
    a: "Gayatri Technology specializes in building custom operational software, factory-floor manufacturing ERPs, Android stockyard apps with instant weight calculators, B2B wholesale portals, and automated WhatsApp delivery challan systems for Indian businesses.",
  },
  {
    q: "How does custom software compare to ready-made SaaS like Zoho or SAP?",
    a: "Unlike generic SaaS which charges recurring ₹1,500–₹5,000 per user every month and forces teams into rigid templates, our custom software gives you 100% source code ownership, zero per-seat fees, and screens designed for your team's exact workflow.",
  },
  {
    q: "Can our existing Tally accounting system connect with your software?",
    a: "Yes. We design custom operational front-ends that manage client orders, inventory allocation, and dispatch dispatches on the floor, while syncing clean invoice data directly into Tally for GST filing and accounting.",
  },
  {
    q: "How long does a typical custom software project take to deliver?",
    a: "Most custom operational systems and portals are delivered in 4 to 8 weeks through phased milestone sprints. Critical workflows are deployed first so your team starts benefiting immediately.",
  },
  {
    q: "Where is Gayatri Technology located and what areas do you serve?",
    a: "Our software engineering studio is located at 1st Floor, Gayatri Technology, Street No. 7, above Gayatri Industries, Panchsheel Wadi, Samrat Industrial Area, Rajkot, Gujarat 360004. We serve manufacturing, trading, and industrial clients across Rajkot, Jamnagar, Ahmedabad, Gujarat, India, and internationally.",
  },
];

export default function Home() {
  const testimonialsSchema = getTestimonialsSchema();
  const faqSchema = getFaqSchema(homepageFaqs);

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-paper overflow-x-clip w-full">
      <JsonLd data={testimonialsSchema} id="testimonials-schema" />
      <JsonLd data={faqSchema} id="homepage-faq-schema" />
      <Navbar />
      <main className="flex-1 w-full overflow-x-clip">
        <HeroSection />
        <TrustValueStrip />
        <RealProblemsSection />
        <PortfolioSection />
        <SolutionsBento />
        <ServicesSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <KnowledgePreviewSection />

        {/* Home Page Synchronized FAQ Section (AEO Standard) */}
        <section className="scroll-section py-14 sm:py-20 bg-paper border-b border-rule">
          <div className="screen-container max-w-4xl mx-auto">
            <div className="mb-10 text-left">
              <span className="text-accent font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
                FREQUENTLY ASKED QUESTIONS &bull; AEO STANDARDS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight font-display mb-3">
                Questions Business Owners Ask Before Building Custom Software
              </h2>
              {/* Standalone 40-60 Word Direct Answer Block for AEO */}
              <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
                Gayatri Technology designs tailored software and ERP systems in Rajkot, Gujarat. We replace fragmented spreadsheets and high-cost SaaS tools with 100% owned, mobile-friendly applications engineered around how your production, stockyard, and commercial teams actually work, backed by fixed-milestone pricing and direct engineer access.
              </p>
            </div>

            <FaqAccordion items={homepageFaqs} defaultOpenIndex={0} />
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

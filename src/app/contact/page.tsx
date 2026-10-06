import React from "react";
import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { siteConfig, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us | Have a Business Problem Software Could Solve?",
  description:
    "Get in touch directly with Parth Raval and the Gayatri Technology software studio in Rajkot, Gujarat. Discuss your workflow, ERP requirements, or custom web application.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Gayatri Technology | Software Built Around Your Workflow",
    description:
      "Tell us what you're trying to build or what isn't working today. Direct conversation with engineers who understand business problems.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Gayatri Technology",
    description:
      "Direct technical consultation with Parth Raval and the Gayatri Technology engineering studio.",
  },
};

const onboardingSteps = [
  {
    step: "01",
    title: "Tell Us What You Need",
    desc: "Share your current workflow, what tools you use today (Excel, paper, WhatsApp), and what isn't working.",
  },
  {
    step: "02",
    title: "Practical Discussion",
    desc: "We review your actual process—not buzzwords—and discuss whether custom software makes business sense.",
  },
  {
    step: "03",
    title: "Clear Plan & Scope",
    desc: "We map out screens, features, timeline, and exact cost before writing a single line of code.",
  },
  {
    step: "04",
    title: "Direct Collaboration",
    desc: "You work directly with the developers building your software until launch, handover, and beyond.",
  },
];

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-[#F8FAFC] overflow-x-hidden md:overflow-x-clip w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-18 custom-grid-bg border-b border-[#E2E8F0]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(71,197,110,0.12),transparent_70%)] pointer-events-none -z-10" />

          <div className="screen-container max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00875A]" />
              <span>Direct Founder &amp; Developer Access • Rajkot, Gujarat</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#091C0F] tracking-tight leading-tight font-display">
              Have a Business Problem Software Could Solve?
            </h1>

            <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              Tell us what you&apos;re trying to build or what isn&apos;t working today. We will help you figure out what makes sense, whether that&apos;s a custom ERP, a web application, or a simple internal tool.
            </p>
          </div>
        </section>

        {/* What Happens Next Pipeline */}
        <section className="py-8 sm:py-12 bg-white border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-1 font-mono">
                CLEAR EXPECTATIONS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                What Happens After You Inquire
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {onboardingSteps.map((item) => (
                <div
                  key={item.step}
                  className="p-3.5 sm:p-5 rounded-2xl bg-[#FAFCFF] border border-[#E2E8F0] space-y-1.5 sm:space-y-2 relative"
                >
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-[#00875A] bg-[#47C56E]/12 px-2 py-0.5 rounded-md inline-block">
                    {item.step}
                  </span>
                  <h3 className="text-xs sm:text-base font-bold text-[#091C0F] font-display pt-0.5 sm:pt-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-sm text-[#475569] leading-relaxed hidden min-[360px]:block">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Interactive Contact Form & Cards Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

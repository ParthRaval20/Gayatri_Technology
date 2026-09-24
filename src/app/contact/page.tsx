import React from "react";
import { Metadata } from "next";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { siteConfig, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us & Project Inquiry | Gayatri Technology",
  description:
    "Get in touch with the Gayatri Technology engineering team. Request an architectural project consultation, schedule an operational review, or contact our Rajkot office.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Gayatri Technology | Software & Web Architecture",
    description:
      "Schedule a project discovery call with our software architects. Prompt 24-hour turnaround on technical requirements and scope blueprints.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Gayatri Technology",
    description:
      "Request an architectural consultation or schedule an operational review with our senior engineers.",
  },
};

const onboardingSteps = [
  {
    step: "01",
    title: "Requirement Submission",
    desc: "Submit your project requirements, target timeline, and operational objectives via our portal.",
  },
  {
    step: "02",
    title: "Architectural Review",
    desc: "Our lead software engineers audit your technical requirements and formulate a preliminary scope within 24 hours.",
  },
  {
    step: "03",
    title: "Discovery & Blueprint",
    desc: "We host a 30-minute discovery call to clarify database structures, integrations, and milestones.",
  },
  {
    step: "04",
    title: "Fixed Scope & Launch",
    desc: "You receive an exact milestone-driven contract and engineering roadmap with zero hidden costs.",
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
              <span>Direct Architect Response • 24-Hour Turnaround</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#091C0F] tracking-tight leading-tight font-display">
              Let&apos;s Engineer Your Digital Platform
            </h1>

            <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              Have an upcoming website, enterprise web application, or custom ERP requirement? Fill out the project brief below to discuss your architecture.
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

import React from "react";
import { Metadata } from "next";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import InteractiveArchitecture from "@/components/InteractiveArchitecture";
import CtaBanner from "@/components/CtaBanner";
import { siteConfig, getBreadcrumbSchema } from "@/lib/seo";
import { portfolioMetrics } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Custom Software Built For Real Operations",
  description:
    "Explore Gayatri Technology's production software case studies, including the Gujarat Brahm Samaj ERP (v2.4.0) and Gayatri Steel mobile operations ERP suite, with real workflows, UI screens, and delivered features.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Our Work & Case Studies | Gayatri Technology",
    description:
      "Production case studies of custom business software, institutional ERPs, mobile platforms, and operational tools built around how teams actually work.",
    url: `${siteConfig.url}/portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work & Case Studies | Gayatri Technology",
    description:
      "Production case studies of custom business software and mobile operations systems.",
  },
};

const metricIcons = [Layers, Zap, ShieldCheck, Award];

export default function PortfolioPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
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
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-18 lg:py-24 custom-grid-bg border-b border-[#E2E8F0]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(71,197,110,0.12),transparent_70%)] pointer-events-none -z-10" />

          <div className="screen-container max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00875A]" />
              <span>Real Work • Delivered Systems • Authentic Screenshots</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#091C0F] tracking-tight leading-tight font-display">
              Software Built For Real Operations
            </h1>

            <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              We build custom software for businesses and institutions that have outgrown spreadsheets, WhatsApp groups, and disconnected paper binders. Explore what we built, the exact problem it solved, and the screens used every day.
            </p>
          </div>
        </section>

        {/* Quantifiable Impact Metrics */}
        <section className="py-8 sm:py-12 bg-white border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {portfolioMetrics.map((item, idx) => {
                const Icon = metricIcons[idx % metricIcons.length];
                return (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-6 rounded-2xl bg-[#FAFCFF] border border-[#E2E8F0] text-center flex flex-col items-center justify-center space-y-1.5 sm:space-y-2 hover:border-[#47C56E]/60 transition-all shadow-xs"
                  >
                    <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] mb-0.5 sm:mb-1">
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <span className="text-2xl sm:text-4xl font-extrabold text-[#091C0F] font-mono tracking-tight">
                      {item.metric}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#091C0F] font-display">
                      {item.label}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#64748B] max-w-[220px] hidden min-[360px]:block">
                      {item.sub}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Portfolio Interactive Section */}
        <div className="bg-[#F8FAFC]">
          <PortfolioSection />
        </div>

        {/* Interactive Architecture & Pipeline Explorer (Woyce.ai inspiration) */}
        <InteractiveArchitecture />

        {/* CTA Banner */}
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}

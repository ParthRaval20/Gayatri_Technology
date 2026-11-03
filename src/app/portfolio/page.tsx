import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InteractiveArchitecture from "@/components/InteractiveArchitecture";
import CtaBanner from "@/components/CtaBanner";
import { getBreadcrumbSchema, getTestimonialsSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Production Systems & Architecture Case Studies",
  description:
    "Explore Gayatri Technology's production software case studies, including the Gujarat Brahm Samaj ERP (v2.4.0) and Gayatri Steel mobile operations ERP suite, with real workflows, UI screens, and delivered features.",
  path: "/portfolio",
  openGraphTitle: "Production Systems & Architecture Case Studies | Gayatri Technology",
  openGraphDescription:
    "Production case studies of custom business software, institutional ERPs, mobile platforms, and operational tools built around how teams actually work.",
});

export default function PortfolioPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
  ]);
  const testimonialsSchema = getTestimonialsSchema();

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-[#F8FAFC] overflow-x-hidden md:overflow-x-clip w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonialsSchema),
        }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Compact Architectural Header with Inline Metrics */}
        <section className="pt-8 pb-10 sm:pt-12 sm:pb-14 bg-white border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00875A]">
                  PRODUCTION CASE STUDIES &bull; RAJKOT &amp; GUJARAT
                </span>
                <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#091C0F] tracking-tight font-display leading-[1.15]">
                  Production Systems &amp; Architecture Case Studies
                </h1>
                <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
                  Real operational systems engineered for factory stockyards, community trust administration, and industrial sales teams. Inspect delivered UIs, mathematical engines, and live architectures.
                </p>
              </div>

              {/* Inline 4 Summary Metrics Bar */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 sm:gap-3">
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-left">
                  <span className="text-xl min-[360px]:text-2xl font-extrabold text-[#091C0F] font-mono">4</span>
                  <p className="text-[11px] min-[360px]:text-xs font-bold text-[#091C0F] mt-0.5 truncate">Production Deployments</p>
                  <p className="text-[9px] min-[360px]:text-[10px] text-slate-500 truncate">ERPs &amp; commercial portals</p>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-left">
                  <span className="text-xl min-[360px]:text-2xl font-extrabold text-[#091C0F] font-mono">12+</span>
                  <p className="text-[11px] min-[360px]:text-xs font-bold text-[#091C0F] mt-0.5 truncate">Production Screens</p>
                  <p className="text-[9px] min-[360px]:text-[10px] text-slate-500 truncate">Live operational interfaces</p>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-left">
                  <span className="text-xl min-[360px]:text-2xl font-extrabold text-[#091C0F] font-mono">28+</span>
                  <p className="text-[11px] min-[360px]:text-xs font-bold text-[#091C0F] mt-0.5 truncate">Alloy Standards</p>
                  <p className="text-[9px] min-[360px]:text-[10px] text-slate-500 truncate">Calculated metallurgical grades</p>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-left">
                  <span className="text-xl min-[360px]:text-2xl font-extrabold text-[#00875A] font-mono">&lt;15ms</span>
                  <p className="text-[11px] min-[360px]:text-xs font-bold text-[#091C0F] mt-0.5 truncate">Math Engine Latency</p>
                  <p className="text-[9px] min-[360px]:text-[10px] text-slate-500 truncate">Shape-aware weight formulas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Portfolio Interactive Section (Screenshots visible above the fold) */}
        <div className="bg-[#F8FAFC]">
          <PortfolioSection />
        </div>

        {/* Interactive Architecture & Pipeline Explorer (Promoted directly below project cards) */}
        <InteractiveArchitecture />

        {/* Client Testimonials Section */}
        <TestimonialsSection
          title="What Our Clients Say About These Systems"
          subtitle="Direct feedback from the operators, commercial executives, and trust administrators who rely on our delivered software every day."
        />

        {/* CTA Banner */}
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
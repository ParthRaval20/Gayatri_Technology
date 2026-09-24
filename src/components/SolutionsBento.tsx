"use client";

import React from "react";
import { Check } from "lucide-react";

export default function SolutionsBento() {
  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="screen-container">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            Solutions That Solve Real Business Problems
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            High-performance applications tailored to eliminate specific operational bottlenecks.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-3 px-1">
          <span>← Swipe horizontally to browse systems →</span>
          <span className="font-mono text-slate-400 text-[11px]">6 Modules</span>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {/* Bento Card A (Large Span 2 cols) */}
          <div className="w-[88vw] max-w-[360px] sm:w-[360px] md:w-auto md:min-w-0 snap-center md:col-span-2 lg:col-span-2 bg-white p-5 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between shrink-0 md:shrink h-auto">
            <div>
              <span className="px-3 sm:px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-[11px] sm:text-xs font-bold">
                Enterprise System
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#091C0F] mt-3 sm:mt-4 mb-2 font-display">
                Custom Business Applications
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5 sm:mb-6">
                Comprehensive internal software engines replacing fragmented spreadsheets:
                multi-warehouse inventory systems, automated approvals, field worker consoles, and
                proprietary back-office logic.
              </p>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-[#091C0F]">Integrated Data Pipelines</span>
              <span className="text-[#00875A] font-bold">Custom API Connectors</span>
            </div>
          </div>

          {/* Bento Card B */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-auto md:min-w-0 snap-center bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between shrink-0 md:shrink h-auto">
            <div>
              <span className="px-3 sm:px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-[11px] sm:text-xs font-bold">
                Conversion
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mt-3 sm:mt-4 mb-2 font-display">
                Lead Gen Platforms
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Ultra-fast landing environments engineered for maximum ad conversion and automated CRM sync.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 mt-5 sm:mt-6 text-xs font-bold text-[#00875A]">
              Sub-second Page Speeds
            </div>
          </div>

          {/* Bento Card C */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-auto md:min-w-0 snap-center bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between shrink-0 md:shrink h-auto">
            <div>
              <span className="px-3 sm:px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-[11px] sm:text-xs font-bold">
                Client Facing
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mt-3 sm:mt-4 mb-2 font-display">
                Customer Portals
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Secure client self-service hubs with bill pay, ticket generation, and real-time status tracking.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 mt-5 sm:mt-6 text-xs font-bold text-[#00875A]">
              Role-Based Access Control
            </div>
          </div>

          {/* Bento Card D */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-auto md:min-w-0 snap-center bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between shrink-0 md:shrink h-auto">
            <div>
              <span className="px-3 sm:px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-[11px] sm:text-xs font-bold">
                Intelligence
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mt-3 sm:mt-4 mb-2 font-display">
                Admin Dashboards
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Telemetry command centers visualizing KPIs, revenue forecasting, and employee output.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 mt-5 sm:mt-6 text-xs font-bold text-[#00875A]">
              Live Stream Architecture
            </div>
          </div>

          {/* Bento Card E */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-auto md:min-w-0 snap-center bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between shrink-0 md:shrink h-auto">
            <div>
              <span className="px-3 sm:px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-[11px] sm:text-xs font-bold">
                Operations
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mt-3 sm:mt-4 mb-2 font-display">
                Booking &amp; Reservation
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Real-time slot scheduling engines with SMS alerts, WhatsApp triggers, and payment gateway hold.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 mt-5 sm:mt-6 text-xs font-bold text-[#00875A]">
              Zero Double-Booking Guarantee
            </div>
          </div>

          {/* Bento Card F (Large Span 2 cols) */}
          <div className="w-[88vw] max-w-[360px] sm:w-[360px] md:w-auto md:min-w-0 snap-center md:col-span-2 lg:col-span-2 bg-white p-5 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between shrink-0 md:shrink h-auto">
            <div>
              <span className="px-3 sm:px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-[11px] sm:text-xs font-bold">
                Wholesale &amp; Retail
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#091C0F] mt-3 sm:mt-4 mb-2 font-display">
                Scalable E-Commerce &amp; B2B Portals
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Custom digital storefronts supporting dynamic wholesale tier pricing, bulk order matrix
                uploads, invoice generating pipelines, and ERP inventory syncing.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#00875A] pt-2">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#47C56E]" /> Multi-currency
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#47C56E]" /> ERP Sync
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#47C56E]" /> Automated Invoicing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

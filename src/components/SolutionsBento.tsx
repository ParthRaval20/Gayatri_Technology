"use client";

import React from "react";
import { Check } from "lucide-react";

export default function SolutionsBento() {
  return (
    <section id="solutions" className="py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            Solutions That Solve Real Business Problems
          </h2>
          <p className="text-lg text-[#475569]">
            High-performance applications tailored to eliminate specific operational bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Bento Card A (Large Span 2 cols) */}
          <div className="md:col-span-2 lg:col-span-2 bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                Enterprise System
              </span>
              <h3 className="text-2xl font-bold text-[#091C0F] mt-4 mb-2 font-display">
                Custom Business Applications
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Comprehensive internal software engines replacing fragmented spreadsheets:
                multi-warehouse inventory systems, automated approvals, field worker consoles, and
                proprietary back-office logic.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-[#091C0F]">Integrated Data Pipelines</span>
              <span className="text-[#00875A] font-bold">Custom API Connectors</span>
            </div>
          </div>

          {/* Bento Card B */}
          <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                Conversion
              </span>
              <h3 className="text-xl font-bold text-[#091C0F] mt-4 mb-2 font-display">
                Lead Gen Platforms
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Ultra-fast landing environments engineered for maximum ad conversion and automated CRM sync.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 mt-6 text-xs font-bold text-[#00875A]">
              Sub-second Page Speeds
            </div>
          </div>

          {/* Bento Card C */}
          <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                Client Facing
              </span>
              <h3 className="text-xl font-bold text-[#091C0F] mt-4 mb-2 font-display">
                Customer Portals
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Secure client self-service hubs with bill pay, ticket generation, and real-time status tracking.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 mt-6 text-xs font-bold text-[#00875A]">
              Role-Based Access Control
            </div>
          </div>

          {/* Bento Card D */}
          <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                Intelligence
              </span>
              <h3 className="text-xl font-bold text-[#091C0F] mt-4 mb-2 font-display">
                Admin Dashboards
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Telemetry command centers visualizing KPIs, revenue forecasting, and employee output.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 mt-6 text-xs font-bold text-[#00875A]">
              Live Stream Architecture
            </div>
          </div>

          {/* Bento Card E */}
          <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                Operations
              </span>
              <h3 className="text-xl font-bold text-[#091C0F] mt-4 mb-2 font-display">
                Booking & Reservation
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Real-time slot scheduling engines with SMS alerts, WhatsApp triggers, and payment gateway hold.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 mt-6 text-xs font-bold text-[#00875A]">
              Zero Double-Booking Guarantee
            </div>
          </div>

          {/* Bento Card F (Large Span 2 cols) */}
          <div className="md:col-span-2 lg:col-span-2 bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all flex flex-col justify-between">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                Wholesale & Retail
              </span>
              <h3 className="text-2xl font-bold text-[#091C0F] mt-4 mb-2 font-display">
                Scalable E-Commerce & B2B Portals
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
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

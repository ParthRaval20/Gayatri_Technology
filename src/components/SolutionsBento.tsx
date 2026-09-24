"use client";

import React from "react";
import {
  Server,
  Zap,
  Users,
  Gauge,
  CalendarCheck,
  ShoppingBag,
  CheckCircle2,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

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
          <span>Swipe horizontally to browse systems</span>
          <span>→</span>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {/* Bento Card A (Span 2 cols) */}
          <div className="w-[88vw] max-w-[360px] sm:w-[360px] md:w-auto md:min-w-0 snap-center md:col-span-2 lg:col-span-2 bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0">
                  <Server className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#47C56E]/10 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                  Enterprise Architecture
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#091C0F] mb-2.5 font-display">
                Custom Business Applications
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                Comprehensive internal software engines replacing fragmented spreadsheets:
                multi-warehouse inventory tracking, automated managerial approval chains, field worker
                consoles, and proprietary back-office logic.
              </p>

              {/* Feature pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {[
                  "Multi-Warehouse Stock Sync",
                  "Automated GST Challan Vault",
                  "Role-Based Permission Matrix",
                  "Field Staff Mobile Console",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47C56E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-[#091C0F] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#00875A]" />
                Integrated Data Pipelines
              </span>
              <span className="text-[#00875A] font-bold font-mono">Custom API Connectors</span>
            </div>
          </div>

          {/* Bento Card B */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-auto md:min-w-0 snap-center bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#47C56E]/10 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                  Conversion
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mb-2 font-display">
                High-Velocity Lead Platforms
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                Ultra-fast landing environments engineered for maximum ad conversion and automated CRM sync.
              </p>

              {/* Feature pills */}
              <div className="space-y-2 mb-6">
                {[
                  "Sub-second Core Web Vitals",
                  "Automated CRM & Webhook Sync",
                  "Instant WhatsApp Inbound Trigger",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47C56E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
              <span className="text-[#475569]">Performance</span>
              <span className="text-[#00875A] font-bold font-mono">100/100 Lighthouse</span>
            </div>
          </div>

          {/* Bento Card C */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-auto md:min-w-0 snap-center bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#47C56E]/10 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                  Client Facing
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mb-2 font-display">
                Client Self-Service Portals
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                Secure client hubs eliminating phone and email back-and-forth for invoices, tickets, and shipment tracking.
              </p>

              {/* Feature pills */}
              <div className="space-y-2 mb-6">
                {[
                  "Strict RBAC Role Isolation",
                  "Document & Invoice Vault",
                  "Real-Time Dispatch Telemetry",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47C56E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
              <span className="text-[#475569] flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#00875A]" /> Security
              </span>
              <span className="text-[#00875A] font-bold font-mono">OWASP AA Tested</span>
            </div>
          </div>

          {/* Bento Card D */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-auto md:min-w-0 snap-center bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0">
                  <Gauge className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#47C56E]/10 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                  Intelligence
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mb-2 font-display">
                Executive Command Dashboards
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                Telemetry command centers visualizing KPIs, revenue forecasting, inventory velocity, and employee output.
              </p>

              {/* Feature pills */}
              <div className="space-y-2 mb-6">
                {[
                  "Live Streaming Telemetry",
                  "Automated PDF & CSV Exports",
                  "Multi-Branch Consolidation",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47C56E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
              <span className="text-[#475569]">Sync Cycle</span>
              <span className="text-[#00875A] font-bold font-mono">Sub-100ms Feeds</span>
            </div>
          </div>

          {/* Bento Card E */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-auto md:min-w-0 snap-center bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#47C56E]/10 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                  Operations
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mb-2 font-display">
                Intelligent Scheduling Engines
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                Slot booking and appointment engines with automated SMS and WhatsApp confirmation triggers.
              </p>

              {/* Feature pills */}
              <div className="space-y-2 mb-6">
                {[
                  "Zero Double-Booking Locks",
                  "Automated WhatsApp Reminders",
                  "Integrated Payment Gateway Pre-Auth",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47C56E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
              <span className="text-[#475569] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#00875A]" /> Conflict Guard
              </span>
              <span className="text-[#00875A] font-bold font-mono">Atomic Locks</span>
            </div>
          </div>

          {/* Bento Card F (Span 2 cols) */}
          <div className="w-[88vw] max-w-[360px] sm:w-[360px] md:w-auto md:min-w-0 snap-center md:col-span-2 lg:col-span-2 bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#47C56E]/10 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                  Wholesale &amp; Retail
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#091C0F] mb-2.5 font-display">
                Scalable E-Commerce &amp; B2B Portals
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                Custom digital storefronts supporting dynamic wholesale tier volume pricing, bulk order matrix
                uploads, invoice generating pipelines, and real-time ERP inventory syncing.
              </p>

              {/* Feature pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {[
                  "Client-Specific Credit Limits",
                  "Automated Tax & GST Invoicing",
                  "Multi-Currency Gateways (UPI/Stripe)",
                  "Live Warehouse Inventory Reserve",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47C56E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-[#091C0F] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#00875A]" />
                High-Concurrency Checkout
              </span>
              <span className="text-[#00875A] font-bold font-mono">ERP Inventory Sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

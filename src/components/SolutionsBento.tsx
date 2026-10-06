"use client";

import React from "react";
import {
  Boxes,
  Truck,
  Calculator,
  Building2,
  Users,
  ShoppingBag,
  CheckCircle2,
  Smartphone,
  Sparkles,
} from "lucide-react";

export default function SolutionsBento() {
  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="screen-container">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            WORKFLOW MODULES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            Built to eliminate everyday operational headaches
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            We build modular systems that tackle the exact points where your business wastes time or
            loses track of data.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-3 px-1">
          <span>Swipe horizontally to browse systems</span>
          <span>→</span>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {/* Bento Card A: Multi-Warehouse Inventory (Span 2 cols) */}
          <div className="w-[88vw] max-w-[360px] sm:w-[360px] md:w-full md:max-w-none md:min-w-0 snap-center md:col-span-2 lg:col-span-2 bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0">
                  <Boxes className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#47C56E]/10 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                  Stock Control
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#091C0F] mb-2.5 font-display">
                Multi-Warehouse &amp; Piece Inventory
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                Replaces scattered spreadsheets with live piece-by-piece counters, low-stock warnings,
                and shape-based stock tracking across multiple yards, godowns, and branches.
              </p>

              {/* Feature pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {[
                  "Live Piece Counting & Total Tonnage",
                  "Low-Stock Automated Warnings",
                  "Grade & Specification Indexing",
                  "Mobile Shop-Floor Stock Updates",
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
                <Smartphone className="w-3.5 h-3.5 text-[#00875A]" />
                Used daily on factory floor
              </span>
              <span className="text-[#00875A] font-bold font-mono">Real-Time Sync</span>
            </div>
          </div>

          {/* Bento Card B: Paperless Delivery Challans */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-full md:max-w-none md:min-w-0 snap-center bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#47C56E]/10 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                  Dispatch &amp; Transport
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mb-2 font-display">
                Digital Delivery Challans
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                Issue clean, GST-compliant paperless delivery challans with customer details, lorry numbers,
                and weight breakdowns in seconds.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Vehicle & Lorry Transport Details",
                  "Customer GSTIN & PO Validation",
                  "1-Click PDF Generation & WhatsApp Send",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47C56E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
              <span className="text-[#475569]">Documentation</span>
              <span className="text-[#00875A] font-bold">Zero Paper Waste</span>
            </div>
          </div>

          {/* Bento Card C: Industrial Calculators */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-full md:max-w-none md:min-w-0 snap-center bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#47C56E]/10 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                  Formulas
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mb-2 font-display">
                Shape-Aware Calculators
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                Automated formula calculators that compute piece weight and batch tonnage for round,
                flat, pipe, and sheet profiles on the fly.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Eliminates Manual Reference Charts",
                  "Material Density Presets (Steel, SS, Al)",
                  "Instant Total Batch Costing in ₹",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47C56E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
              <span className="text-[#475569]">Accuracy</span>
              <span className="text-[#00875A] font-bold">Zero Human Error</span>
            </div>
          </div>

          {/* Bento Card D: Multi-Company Group Switcher */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-full md:max-w-none md:min-w-0 snap-center bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#47C56E]/10 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                  Multi-Entity
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mb-2 font-display">
                Multi-Company Switcher
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                Run multiple sister companies or partner firms within one application while keeping
                GST, inventory, and invoices strictly separated.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Instant 1-Click Entity Switcher",
                  "Isolated Invoicing & Ledger Records",
                  "Unified Owner Dashboard Overview",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47C56E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
              <span className="text-[#475569]">Structure</span>
              <span className="text-[#00875A] font-bold">Role-Based Access</span>
            </div>
          </div>

          {/* Bento Card E: Customer Self-Service Portals */}
          <div className="w-[85vw] max-w-[340px] sm:w-[320px] md:w-full md:max-w-none md:min-w-0 snap-center bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
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
                Eliminate endless phone calls for bills and challans by giving frequent buyers a secure
                portal to check dispatches and download statements.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Historical Challan & Invoice Vault",
                  "Live Order Status & Dispatch Notice",
                  "Pending Balance & Payment Ledgers",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47C56E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
              <span className="text-[#475569]">Support Calls</span>
              <span className="text-[#00875A] font-bold">Reduced Friction</span>
            </div>
          </div>

          {/* Bento Card F: B2B Wholesale & Ordering (Span 2 cols) */}
          <div className="w-[88vw] max-w-[360px] sm:w-[360px] md:w-full md:max-w-none md:min-w-0 snap-center md:col-span-2 lg:col-span-2 bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between shrink-0 md:shrink h-auto group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#47C56E]/10 border border-[#47C56E]/20 text-[#00875A] text-xs font-bold">
                  Wholesale &amp; Distribution
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#091C0F] mb-2.5 font-display">
                B2B Ordering &amp; Wholesale Portals
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                Digital ordering catalogs built for commercial buyers with tier pricing, credit terms,
                quotation generation, and immediate stock reservation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {[
                  "Customer-Specific Price Lists",
                  "Credit Limit & Payment Status Rules",
                  "Instant WhatsApp Order Confirmations",
                  "Live Inventory Reservation",
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
                Connected directly to warehouse
              </span>
              <span className="text-[#00875A] font-bold font-mono">B2B Commerce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


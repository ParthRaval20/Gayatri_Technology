"use client";

import React from "react";
import {
  FileSpreadsheet,
  MessageCircle,
  Building2,
  FileCheck2,
  XCircle,
  CheckCircle2,
} from "lucide-react";

interface ComparisonRow {
  title: string;
  icon: React.ElementType;
  before: {
    tool: string;
    description: string;
  };
  after: {
    system: string;
    description: string;
  };
}

const comparisonRows: ComparisonRow[] = [
  {
    title: "Double Entry & Copying Data",
    icon: FileSpreadsheet,
    before: {
      tool: "Handwritten Diary & Excel Sheets",
      description:
        "Staff write orders in pocket notebooks, re-type them into an inventory spreadsheet, and copy them once more for billing or dispatch.",
    },
    after: {
      system: "Unified Operational Core",
      description:
        "One single touchpoint on phone or PC updates live stock, reserves pieces, and generates GST delivery challans automatically.",
    },
  },
  {
    title: "WhatsApp Chaos & Client Inquiries",
    icon: MessageCircle,
    before: {
      tool: "Scattered WhatsApp Chats & Calls",
      description:
        "Photos of bills, dimension scribbles, and lorry details get buried in group chats. Customers call repeatedly to check order status.",
    },
    after: {
      system: "Automated WhatsApp API Triggers",
      description:
        "Customers automatically receive a clean branded message with vehicle number and live download link for their PDF delivery challan.",
    },
  },
  {
    title: "Inventory Tracking & Multi-Branch Sync",
    icon: Building2,
    before: {
      tool: "Disconnected Files Across Godowns",
      description:
        "Stock counts in Rajkot and Jamnagar differ from physical yard piles. Promised material gets double-allocated or delayed at the gate.",
    },
    after: {
      system: "Live Multi-Branch Inventory",
      description:
        "Real-time piece counters, low-stock warnings, and isolated company ledgers across all sister entities on one single screen.",
    },
  },
  {
    title: "Manual Reports & Rigid Off-the-Shelf Tools",
    icon: FileCheck2,
    before: {
      tool: "3-Day Month-End Excel Consolidation",
      description:
        "Off-the-shelf ERPs demand 20 irrelevant fields, forcing staff to abandon the software and spend days manually stitching spreadsheets.",
    },
    after: {
      system: "Fast, Tailored Floor Systems",
      description:
        "Touch-friendly screens built for actual operators. Instant automated reports on tonnage, dispatches, and balances in 1 click.",
    },
  },
];

export default function RealProblemsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFCFF] border-b border-[#E2E8F0] overflow-hidden">
      <div className="screen-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 scroll-reveal">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
            OPERATIONAL REALITIES &bull; BEFORE VS. AFTER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#091C0F] tracking-tight font-display mb-3">
            Has your business outgrown Excel, WhatsApp and disconnected tools?
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Most growing businesses don&apos;t slow down because of sales. They slow down because manual,
            disconnected systems break down when order volumes increase.
          </p>
        </div>

        {/* 2-Column Split Ledger Comparison Table */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs overflow-hidden">
          {/* Table Header */}
          <div className="hidden md:grid md:grid-cols-12 bg-[#091C0F] text-white py-3.5 px-6 sm:px-8 text-xs font-mono font-bold tracking-wider uppercase border-b border-[#163820]">
            <div className="col-span-5 text-rose-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span>How It Runs Today (Excel + WhatsApp + Diary)</span>
            </div>
            <div className="col-span-2 text-center text-slate-400">
              Workflow Friction
            </div>
            <div className="col-span-5 text-[#86EFAC] flex items-center gap-2 justify-end">
              <span className="w-2 h-2 rounded-full bg-[#47C56E]" />
              <span>How It Runs On A Custom Engineered System</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-[#E2E8F0]">
            {comparisonRows.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-7 md:py-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-5 md:gap-6 items-stretch md:items-center hover:bg-slate-50/70 transition-colors"
                >
                  {/* Center: Workflow Pillar Badge (Rendered First on Mobile for Instant Context) */}
                  <div className="order-1 md:order-2 md:col-span-2 flex flex-row md:flex-col items-center justify-start md:justify-center text-left md:text-center gap-2.5 md:gap-0 pb-1 md:py-0 border-b md:border-b-0 md:border-x border-slate-100 md:px-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F0FDF4] border border-[#86EFAC]/60 flex items-center justify-center text-[#00875A] shrink-0 md:mb-1.5 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-[11px] font-bold text-[#091C0F] font-display">
                      {row.title}
                    </span>
                  </div>

                  {/* Left: How It Runs Today (Muted Red/Slate) */}
                  <div className="order-2 md:order-1 md:col-span-5 space-y-1.5 bg-rose-50/60 md:bg-transparent p-3.5 sm:p-4 md:p-0 rounded-xl border border-rose-100 md:border-0">
                    <div className="flex items-center gap-2 text-rose-800 md:text-slate-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span className="md:hidden text-[9px] font-mono font-bold uppercase tracking-wider text-rose-700 bg-rose-200/60 px-1.5 py-0.5 rounded">
                        BEFORE
                      </span>
                      <span className="text-xs font-bold font-mono uppercase tracking-wide truncate">
                        {row.before.tool}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pl-6">
                      {row.before.description}
                    </p>
                  </div>

                  {/* Right: How It Runs on Unified System (Crisp Dark/Green) */}
                  <div className="order-3 md:order-3 md:col-span-5 space-y-1.5 bg-emerald-50/70 md:bg-transparent p-3.5 sm:p-4 md:p-0 rounded-xl border border-emerald-100 md:border-0">
                    <div className="flex items-center gap-2 text-[#00875A]">
                      <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
                      <span className="md:hidden text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/60 px-1.5 py-0.5 rounded">
                        AFTER
                      </span>
                      <span className="text-xs font-bold font-mono uppercase tracking-wide truncate">
                        {row.after.system}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#091C0F] font-medium leading-relaxed pl-6">
                      {row.after.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
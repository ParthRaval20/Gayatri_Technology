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
    <section className="py-16 sm:py-20 lg:py-24 bg-paper-2 border-b border-rule overflow-hidden">
      <div className="screen-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 scroll-reveal">
          <span className="text-accent font-semibold text-xs block mb-2">
            Operational realities: before vs. after
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight font-display mb-3">
            Has your business outgrown Excel, WhatsApp and disconnected tools?
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Most growing businesses don&apos;t slow down because of sales. They slow down because manual,
            disconnected systems break down when order volumes increase.
          </p>
        </div>

        {/* 2-Column Split Ledger Comparison Table */}
        <div className="bg-paper rounded-2xl sm:rounded-3xl border border-rule shadow-xs overflow-hidden">
          {/* Table Header */}
          <div className="hidden lg:grid lg:grid-cols-12 bg-ink text-white py-3.5 px-6 sm:px-8 text-xs font-medium border-b border-rule-dark">
            <div className="col-span-5 text-rose-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span>How it runs today (Excel, WhatsApp, paper)</span>
            </div>
            <div className="col-span-2 text-center text-slate-400">
              Workflow friction
            </div>
            <div className="col-span-5 text-accent-mint flex items-center gap-2 justify-end">
              <span className="w-2 h-2 rounded-full bg-accent-light" />
              <span>How it runs on custom engineered software</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-rule">
            {comparisonRows.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-7 lg:py-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5 lg:gap-6 items-stretch lg:items-center hover:bg-slate-50/70 transition-colors"
                >
                  {/* Center: Workflow Pillar Badge (Rendered First on Mobile for Instant Context) */}
                  <div className="order-1 lg:order-2 lg:col-span-2 flex flex-row lg:flex-col items-center justify-start lg:justify-center text-left lg:text-center gap-2.5 lg:gap-0 pb-1 lg:py-0 border-b lg:border-b-0 lg:border-x border-slate-100 lg:px-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-accent shrink-0 lg:mb-1.5 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-[11px] font-bold text-ink font-display">
                      {row.title}
                    </span>
                  </div>

                  {/* Left: How It Runs Today (Muted Red/Slate) */}
                  <div className="order-2 lg:order-1 lg:col-span-5 space-y-1.5 bg-rose-50/60 lg:bg-transparent p-3.5 sm:p-4 lg:p-0 rounded-xl border border-rose-100 lg:border-0">
                    <div className="flex items-center gap-2 text-rose-800 lg:text-slate-700 flex-wrap">
                      <span className="lg:hidden text-[10px] font-semibold text-rose-700 bg-rose-200/70 border border-rose-300/60 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                        <XCircle className="w-3 h-3 text-rose-700 shrink-0" />
                        <span>Today&apos;s manual bottleneck</span>
                      </span>
                      <div className="hidden lg:flex items-center gap-1.5 text-rose-600">
                        <XCircle className="w-4 h-4 shrink-0" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 truncate">
                        {row.before.tool}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed lg:pl-5">
                      {row.before.description}
                    </p>
                  </div>

                  {/* Right: How It Runs on Unified System (Crisp Dark/Green) */}
                  <div className="order-3 lg:order-3 lg:col-span-5 space-y-1.5 bg-emerald-50/70 lg:bg-transparent p-3.5 sm:p-4 lg:p-0 rounded-xl border border-emerald-100 lg:border-0">
                    <div className="flex items-center gap-2 text-accent flex-wrap">
                      <span className="lg:hidden text-[10px] font-semibold text-emerald-800 bg-emerald-200/70 border border-emerald-300/60 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-800 shrink-0" />
                        <span>Custom system fix</span>
                      </span>
                      <div className="hidden lg:flex items-center gap-1.5 text-accent">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                      </div>
                      <span className="text-xs font-semibold text-ink truncate">
                        {row.after.system}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed lg:pl-5">
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
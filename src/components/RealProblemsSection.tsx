"use client";

import React from "react";
import Link from "next/link";
import {
  Copy,
  Layers,
  FileSpreadsheet,
  Building,
  MessageCircle,
  Clock,
  ArrowRight,
  GitFork,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const problems = [
  {
    icon: Copy,
    title: "Same data entered multiple times",
    desc: "Your team creates an order in a diary, re-enters it into Excel for stock, and types it again for accounting or billing.",
    solution: "One single entry that flows automatically across your whole operation.",
  },
  {
    icon: Layers,
    title: "Inventory difficult to track accurately",
    desc: "Nobody is 100% sure what is physically in the warehouse vs. what has already been promised or dispatched.",
    solution: "Live piece-by-piece and batch inventory visible to your whole team in real time.",
  },
  {
    icon: FileSpreadsheet,
    title: "Manual reports take days to compile",
    desc: "At the end of every week or month, business owners wait for staff to manually combine multiple spreadsheets.",
    solution: "Automated, instant reports showing stock, dispatches, and pending balances.",
  },
  {
    icon: Building,
    title: "Multiple branches running separate systems",
    desc: "Your Rajkot facility, Jamnagar depot, and head office have isolated records with zero automatic sync.",
    solution: "Centralized multi-company and multi-branch software accessible securely from any device.",
  },
  {
    icon: Clock,
    title: "Customers constantly asking for updates",
    desc: "Clients call and message repeatedly to ask: 'Is my order ready? Has the lorry left? What is the challan number?'",
    solution: "Instant digital challans and automated status tracking dispatched straight to WhatsApp.",
  },
  {
    icon: GitFork,
    title: "Existing software doesn't fit your workflow",
    desc: "Off-the-shelf software forces you to change the way you run your business, requiring confusing manual workarounds.",
    solution: "Custom software engineered around the exact steps your team already follows.",
  },
  {
    icon: MessageCircle,
    title: "Critical processes depend entirely on WhatsApp",
    desc: "Photos of challans, stock inquiries, and payment proofs get lost in chaotic chat histories.",
    solution: "Organized digital records that link WhatsApp directly to your core operational system.",
  },
  {
    icon: AlertCircle,
    title: "Teams constantly copy data between tools",
    desc: "Valuable working hours are wasted copying data back and forth between spreadsheets, PDFs, and accounting tools.",
    solution: "Connected workflows that eliminate manual data transfer and costly human errors.",
  },
];

export default function RealProblemsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="screen-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            REAL BUSINESS REALITIES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#091C0F] tracking-tight leading-tight font-display mb-4">
            Has your business outgrown Excel, WhatsApp and disconnected tools?
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Most growing businesses don&apos;t fail because of sales. They slow down because manual,
            disconnected systems break down when order volumes increase.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-3 px-1">
          <span>← Swipe horizontally to browse problems →</span>
          <span className="font-mono text-slate-400 text-[11px]">8 Realities</span>
        </div>

        {/* Problem Matrix Grid (Swipeable on Mobile, 4-Col Grid on Desktop) */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="w-[85vw] max-w-[340px] md:w-auto shrink-0 md:shrink snap-center p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#47C56E]/60 hover:bg-[#F0FDF4]/50 hover:-translate-y-1 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group shadow-2xs h-auto"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#00875A] mb-3.5 shadow-2xs group-hover:scale-105 group-hover:border-[#47C56E]/40 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#091C0F] mb-2 font-display leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[#091C0F] leading-tight">
                    {item.solution}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Bridge */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#091C0F] text-white border border-[#163820] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-[#86EFAC] uppercase tracking-wider block">
              THE GAYATRI TECHNOLOGY APPROACH
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              We turn those workflows into software your team can actually use.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              No bloated manuals. No months of painful training. We design interfaces so intuitive
              that warehouse staff and busy business owners can run them from a phone in seconds.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#47C56E] text-[#091C0F] px-6 py-3.5 rounded-full text-sm font-bold shadow-md hover:bg-[#3db863] transition-all shrink-0 active:scale-95"
          >
            <span>Tell Us What Isn&apos;t Working</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

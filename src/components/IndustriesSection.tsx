"use client";

import React from "react";
import Link from "next/link";
import {
  Factory,
  Boxes,
  Truck,
  Briefcase,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface IndustryItem {
  icon: React.ElementType;
  name: string;
  tagline: string;
  focus: string[];
  desc: string;
  ctaText: string;
  ctaHref: string;
}

const industries: IndustryItem[] = [
  {
    icon: Factory,
    name: "Manufacturing & Metals",
    tagline: "Metals, Engineering, Fabrication & Industrial Goods",
    focus: [
      "Shape-aware piece & tonnage inventory",
      "Shop-floor production recording on mobile",
      "Digital delivery challans with vehicle logs",
      "Multi-facility sync (e.g. Rajkot & Jamnagar)",
    ],
    desc: "Built for factory and yard environments where staff need fast, rugged inputs rather than confusing multi-step forms.",
    ctaText: "See Our Manufacturing ERP Work",
    ctaHref: "/portfolio",
  },
  {
    icon: Boxes,
    name: "Wholesale & Distribution",
    tagline: "Dealers, Stockists & Bulk Distributors",
    focus: [
      "Customer-specific tier pricing & credit rules",
      "Live godown stock allocation & hold tags",
      "Instant WhatsApp order receipts & invoices",
      "Customer ledger statements & balance lookups",
    ],
    desc: "Replaces chaotic telephone orders and memory-based price lists with structured catalogs connected to warehouse stock.",
    ctaText: "Discuss Your Inventory & Dispatch Setup",
    ctaHref: "/contact",
  },
  {
    icon: Truck,
    name: "Multi-Branch Operations",
    tagline: "Depots, Stockyards & Transit Operations",
    focus: [
      "Driver, lorry, and carrier transport documentation",
      "Automated GSTIN, PO, and delivery challan PDFs",
      "Instant dispatch confirmation to customer WhatsApp",
      "Tare weight and batch consignment verification",
    ],
    desc: "Accelerates turnaround time at the gate by generating error-free transit papers in under 30 seconds.",
    ctaText: "Discuss Multi-Branch Sync",
    ctaHref: "/contact",
  },
  {
    icon: Briefcase,
    name: "Service & Trade",
    tagline: "Contractors, Commercial Suppliers & Specialized Trade",
    focus: [
      "Client inquiry tracking & quotation vault",
      "Internal multi-step approval workflows",
      "Role-based staff consoles & task dispatch",
      "Operational executive telemetry dashboards",
    ],
    desc: "Brings messy email threads and disconnected spreadsheets into one clear operational dashboard.",
    ctaText: "Automate Your Quotations & Billing",
    ctaHref: "/contact",
  },
  {
    icon: Rocket,
    name: "Startups & Growing Products",
    tagline: "Founders Launching Digital Products & MVPs",
    focus: [
      "Rapid, disciplined MVP development",
      "Clean Next.js, React, and Python architectures",
      "Mobile-ready progressive web applications",
      "Rock-solid database schemas that scale gracefully",
    ],
    desc: "We build prototypes and MVPs with production-grade engineering so you don't have to throw away code when traffic grows.",
    ctaText: "Scope Your MVP or Product Build",
    ctaHref: "/contact",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E2E8F0] overflow-hidden">
      <div className="screen-container">
        <div className="max-w-3xl mb-10 sm:mb-14 scroll-reveal">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
            BUSINESS SECTORS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#091C0F] tracking-tight mb-3 font-display">
            Where we have genuine domain experience
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            We only claim industries where we have spent real hours understanding the actual day-to-day
            workflows, challans, and commercial habits.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-3 px-1">
          <span>← Swipe horizontally across sectors →</span>
          <span className="font-mono text-slate-400 text-[11px]">5 Sectors</span>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`w-[85vw] max-w-[340px] md:w-auto shrink-0 md:shrink snap-center p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between group shadow-2xs h-auto ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors shrink-0 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#091C0F] font-display">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#E2E8F0] mb-5">
                    {item.focus.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-[#334155]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00875A] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={item.ctaHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00875A] hover:text-[#091C0F] group-hover:gap-2.5 transition-all pt-2"
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
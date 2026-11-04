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
    ctaHref: "/portfolio?filter=erp#portfolio",
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
    <section id="industries" className="scroll-section py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E2E8F0] overflow-hidden">
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
        <div className="flex md:hidden items-center justify-between text-xs text-accent font-semibold mb-3 px-1 scroll-reveal">
          <span>← Swipe horizontally across sectors →</span>
          <span className="font-mono text-muted text-[11px]">5 Sectors</span>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            const delayClass = (idx % 3 === 1) ? "delay-100" : (idx % 3 === 2) ? "delay-200" : "";
            return (
              <div
                key={idx}
                className={`scroll-popup ${delayClass} w-[85vw] max-w-[340px] md:w-auto shrink-0 md:shrink snap-center p-6 sm:p-7 rounded-2xl bg-paper-2 border border-rule hover:border-accent-light/60 transition-all duration-200 flex flex-col justify-between group shadow-2xs h-auto ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-paper border border-rule flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors shrink-0 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-ink font-display">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted font-medium">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-rule mb-5">
                    {item.focus.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5 text-xs text-ink-2 bg-paper sm:bg-transparent p-1.5 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-rule">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="leading-tight">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={item.ctaHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-ink group-hover:gap-2.5 transition-all pt-2 focus-visible:outline-2 focus-visible:outline-accent"
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
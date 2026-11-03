"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  Truck,
  Calculator,
  Building2,
  Globe,
  CheckCircle2,
  ArrowRight,
  Eye,
} from "lucide-react";

interface WorkflowModule {
  id: string;
  tabLabel: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  imageSrc: string;
  aspectRatio: "mobile" | "desktop";
  bullets: string[];
  operationalImpact: string;
}

const modules: WorkflowModule[] = [
  {
    id: "piece-inventory",
    tabLabel: "Piece Inventory",
    icon: Boxes,
    title: "Warehouse Piece & Tonnage Inventory Tracking",
    subtitle: "Real-time stock reservation and godown balance",
    imageSrc: "/portfolio/gayatri-app/5-inventory-tracker.png",
    aspectRatio: "mobile",
    bullets: [
      "Real-time piece counters categorized by diameter, thickness, and standard lengths.",
      "Automated low-stock warning thresholds prevent accidental double-commitments.",
      "Instant synchronization between yard supervisors and commercial sales desks.",
    ],
    operationalImpact: "Eliminates physical yard walk-arounds just to confirm available piece stock.",
  },
  {
    id: "digital-challans",
    tabLabel: "Digital Challans",
    icon: Truck,
    title: "Paperless GST Delivery Challan Generation",
    subtitle: "Created on warehouse phone in under 30 seconds",
    imageSrc: "/portfolio/gayatri-app/8-digital-challan.png",
    aspectRatio: "mobile",
    bullets: [
      "Generated directly from an Android or iOS phone right as the lorry is being loaded.",
      "Auto-populates verified buyer GSTIN, carrier name, PO reference, and vehicle number.",
      "Instantly delivers a branded, tamper-proof PDF challan to the customer's WhatsApp.",
    ],
    operationalImpact: "Cuts lorry gate wait time from 45 minutes to under 3 minutes.",
  },
  {
    id: "shape-calculator",
    tabLabel: "Shape Weight Calculator",
    icon: Calculator,
    title: "Shape-Aware Metallurgical Formula Engine",
    subtitle: "Sub-15ms theoretical weight from physical dimensions",
    imageSrc: "/portfolio/gayatri-app/10-industrial-calculator.png",
    aspectRatio: "mobile",
    bullets: [
      "Built-in density presets for Tool Steel (7.85 g/cm³), Stainless (7.75), and Aluminium (2.7).",
      "Instant geometry formulas for round bars, flats, squares, and hollow seamless pipes.",
      "Eliminates reliance on worn paper density charts and pocket calculator errors.",
    ],
    operationalImpact: "Zero billing disputes caused by manual 15-20 kg calculation errors.",
  },
  {
    id: "multi-company",
    tabLabel: "Multi-Company Switcher",
    icon: Building2,
    title: "Multi-Tenant Enterprise Group Switching",
    subtitle: "5 sister companies running on one unified mobile app",
    imageSrc: "/portfolio/gayatri-app/1-company-selection.png",
    aspectRatio: "mobile",
    bullets: [
      "Central group switcher toggles between 5 sister entities without requiring re-login.",
      "Completely isolated GST credentials, material accounts, and client ledgers per entity.",
      "Unified executive oversight for owners managing multiple manufacturing and trading firms.",
    ],
    operationalImpact: "Single interface replacing 5 different software accounts or ledgers.",
  },
  {
    id: "b2b-portals",
    tabLabel: "B2B Portals & Metallurgy",
    icon: Globe,
    title: "Technical Steel Grade Catalog & Chemistry Matrix",
    subtitle: "28+ Tool steel grades with DIN, AISI & JIS equivalents",
    imageSrc: "/portfolio/gayatri-app/4-chemical-composition.png",
    aspectRatio: "mobile",
    bullets: [
      "Visual metallurgical percentage bars for Carbon, Chromium, Molybdenum, and Vanadium.",
      "Instant international cross-standard mapping helping machinists verify mill test standards.",
      "One-tap prefilled WhatsApp RFQ routing directly to sales leadership desks.",
    ],
    operationalImpact: "Saves sales teams hours of sending blurry brochure photos over WhatsApp.",
  },
];

export default function SolutionsBento() {
  const [activeTab, setActiveTab] = useState<string>("piece-inventory");

  const currentModule = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
      <div className="screen-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-12 scroll-reveal">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
            INTERACTIVE SYSTEM SHOWCASE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#091C0F] tracking-tight mb-3 font-display">
            Workflow modules engineered to eliminate daily headaches
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#475569]">
            Select a module below to inspect real production screens and the operational bottlenecks they solve.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-2.5 px-1">
          <span>← Swipe to switch modules →</span>
          <span className="font-mono text-slate-400 text-[11px]">5 Modules</span>
        </div>

        {/* Horizontal Tab Bar */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap mb-6 sm:mb-8 scroll-reveal delay-100">
          {modules.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap min-h-[44px] ${
                  isActive
                    ? "bg-[#091C0F] text-white shadow-md shadow-black/10"
                    : "text-[#475569] bg-white border border-[#CBD5E1]/60 hover:text-[#091C0F] hover:bg-slate-50"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#86EFAC]" : "text-slate-500"}`} />
                <span>{item.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Showcase Card: 1 Real Screenshot + 3 Bullet Points */}
        <div
          key={activeTab}
          className="bg-white rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-sm p-4 sm:p-7 md:p-10 animate-fade-in"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column: Real UI Screenshot in Phone Frame */}
            <div className="lg:col-span-5 flex justify-center py-2 sm:py-0">
              <div className="relative w-[185px] min-[360px]:w-[210px] min-[400px]:w-[230px] sm:w-[250px] bg-black rounded-[28px] sm:rounded-[32px] p-2 sm:p-2.5 shadow-2xl border-4 border-slate-800 select-none">
                {/* Speaker notch */}
                <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-2.5 sm:h-3 bg-black rounded-full z-20" />

                <div className="w-full aspect-[9/18] rounded-[20px] sm:rounded-[22px] overflow-hidden bg-slate-950 relative">
                  <Image
                    src={currentModule.imageSrc}
                    alt={currentModule.title}
                    fill
                    sizes="(max-width: 640px) 240px, 260px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Title + 3 Clear Bullet Points + Operational Impact */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="space-y-1 sm:space-y-1.5">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#00875A]">
                  PRODUCTION SCREEN &bull; {currentModule.tabLabel.toUpperCase()}
                </span>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#091C0F] font-display leading-snug">
                  {currentModule.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {currentModule.subtitle}
                </p>
              </div>

              {/* 3 Bullet Points */}
              <div className="space-y-2.5 sm:space-y-3 pt-1">
                {currentModule.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Operational Impact Box */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#F0FDF4] border border-[#86EFAC]/60 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00875A] block">
                  MEASURED ON-FLOOR IMPACT
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#091C0F]">
                  {currentModule.operationalImpact}
                </p>
              </div>

              {/* Case Study Link */}
              <div className="pt-2 flex flex-col min-[420px]:flex-row min-[420px]:items-center gap-2.5 sm:gap-4">
                <Link
                  href="/portfolio?project=gayatri-steel-app#case-studies"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#091C0F] hover:bg-[#163820] text-white text-xs font-bold transition-all shadow-xs min-h-[44px]"
                >
                  <Eye className="w-3.5 h-3.5 text-[#47C56E]" />
                  <span>Inspect All 10 Screens</span>
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#00875A] hover:text-[#091C0F] inline-flex items-center justify-center min-[420px]:justify-start gap-1 transition-colors min-h-[44px]"
                >
                  <span>Discuss Your Custom Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
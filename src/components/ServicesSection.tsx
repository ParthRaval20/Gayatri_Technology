"use client";

import React from "react";
import Link from "next/link";
import {
  Factory,
  Smartphone,
  Globe,
  ArrowRight,
  Boxes,
  Cpu,
  ShoppingBag,
} from "lucide-react";

interface Pillar {
  title: string;
  tag: string;
  icon: React.ElementType;
  description: string;
  linkText: string;
  linkHref: string;
  metrics: string[];
}

const pillars: Pillar[] = [
  {
    title: "Custom ERP & Multi-Branch Operations",
    tag: "MANUFACTURING & STOCK",
    icon: Factory,
    description:
      "Replaces scattered Excel sheets with centralized piece-by-piece inventory, live godown reservations, and isolated GST accounting across all sister entities. Everything connects directly to your dispatch gate.",
    linkText: "See how Gayatri Steel runs 5 companies on 1 mobile app",
    linkHref: "/portfolio?project=gayatri-steel-app#case-studies",
    metrics: ["Live Piece & Tonnage Counts", "Multi-Company Switcher", "Zero Per-Seat Monthly Fees"],
  },
  {
    title: "Shop-Floor Mobile & WhatsApp Automation",
    tag: "MOBILE & DISPATCH",
    icon: Smartphone,
    description:
      "Rugged, touch-friendly mobile tools engineered for warehouse staff wearing gloves in noisy bays. Calculate alloy weights in milliseconds and dispatch GST-compliant PDF delivery challans straight to customer WhatsApp.",
    linkText: "See how delivery challans print on phone in 30 seconds",
    linkHref: "/portfolio?project=gayatri-steel-app#case-studies",
    metrics: ["<15ms Math Formula Engine", "Instant WhatsApp PDF Delivery", "Offline-Tolerant Cache"],
  },
  {
    title: "Technical B2B Portals & Dealer Catalogs",
    tag: "COMMERCIAL & SALES",
    icon: Globe,
    description:
      "High-speed digital product portals that display chemical compositions, international standard cross-references (DIN, AISI, JIS), and custom dealer pricing tiers. Stop WhatsApping blurry brochure photos.",
    linkText: "See how 28+ steel grades are cataloged with chem specs",
    linkHref: "/portfolio?project=gayatri-steel-web#case-studies",
    metrics: ["Interactive Metallurgy Specs", "One-Tap WhatsApp RFQs", "Sub-second Page Speeds"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="screen-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 scroll-reveal">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
            CORE ENGINEERING CAPABILITIES
          </span>
          <h2 className="text-2xl min-[360px]:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#091C0F] tracking-tight mb-3 font-display">
            Three pillars engineered for industrial workflows
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#475569]">
            We don&apos;t build generic software. Every system is built around the exact physical steps,
            measurements, and customer communications your team handles every day.
          </p>
        </div>

        {/* 3-Pillar Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 items-stretch">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFCFF] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E2E8F0] hover:border-[#47C56E]/70 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-[#091C0F] text-[#86EFAC] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#00875A] bg-[#47C56E]/12 border border-[#47C56E]/25 px-2.5 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-[#091C0F] font-display mb-2.5 sm:mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 border-t border-[#E2E8F0] pt-4 mb-6">
                    {pillar.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs text-[#091C0F] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00875A] shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={pillar.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00875A] hover:text-[#091C0F] group-hover:gap-2.5 transition-all"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
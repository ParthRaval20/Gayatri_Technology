"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
  Globe,
  Smartphone,
  ShieldCheck,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface AppScreenshot {
  src: string;
  title: string;
  subtitle: string;
  category: string;
  feature: string;
}

const appScreenshots: AppScreenshot[] = [
  {
    src: "/portfolio/gayatri-app/1-company-selection.png",
    title: "Multi-Company Architecture",
    subtitle: "Enterprise Group Switcher",
    category: "Security & Multi-Tenant",
    feature:
      "Centralized group switcher providing isolated workspace access across 5 industrial entities: Gayatri Steel, VK Industries, Gayatri Corporation, Gayatri Enterprise, and Gayatri Industries.",
  },
  {
    src: "/portfolio/gayatri-app/2-login-auth.png",
    title: "GST-Authenticated Secure Login",
    subtitle: "Enterprise Access Control",
    category: "Security & Multi-Tenant",
    feature:
      "Protected portal entry bound to registered industrial GSTIN credentials (24AESPR4095L1ZO) with administrator provisioning and session tokens.",
  },
  {
    src: "/portfolio/gayatri-app/3-materials-catalog.png",
    title: "28+ Steel Grades & Heat Treatments",
    subtitle: "Hardness & Standard Classifications",
    category: "Metallurgy & Standards",
    feature:
      "Interactive material library covering Plastic Mould, Hot Work, and Cold Work steel grades (1.2083 ESR, 1.2311 P20, 1.2316) with annealed & hardened HRC ratings.",
  },
  {
    src: "/portfolio/gayatri-app/4-chemical-composition.png",
    title: "Chemical Composition & Cross-Standards",
    subtitle: "EN • AISI • DIN • JIS • GB Equivalents",
    category: "Metallurgy & Standards",
    feature:
      "Visual metallurgical percentage bars for Carbon, Silicon, Manganese, Chromium, Phosphorus, and Sulphur with international grade cross-referencing.",
  },
  {
    src: "/portfolio/gayatri-app/5-inventory-tracker.png",
    title: "Real-Time Warehouse Stock Overview",
    subtitle: "Live Sync & Low-Stock Warnings",
    category: "Inventory Management",
    feature:
      "Real-time piece counters, low-stock alerts, cloud sync status indicator, and instant grade inventory summaries for warehouse supervisors.",
  },
  {
    src: "/portfolio/gayatri-app/6-add-inventory-modal.png",
    title: "Shape-Aware Stock Entry & Auto Weight",
    subtitle: "Round, Flat & Pipe Dimension Engine",
    category: "Inventory Management",
    feature:
      "Automated metallurgical formula engine that computes piece weight (kg) on the fly based on diameter, length, and shape with custom reorder threshold alerts.",
  },
  {
    src: "/portfolio/gayatri-app/7-inventory-stock-breakdown.png",
    title: "Precision Piece Counting & Weight Tracking",
    subtitle: "Live Tally (+ / -) & Total Tonnage",
    category: "Inventory Management",
    feature:
      "Granular stock increment/decrement interface displaying piece weight (e.g. 7.707 kg/pc), cumulative tonnage (192.7 kg), items sold, and dispatch status.",
  },
  {
    src: "/portfolio/gayatri-app/8-digital-challan.png",
    title: "Digital Delivery Challans & Dispatch",
    subtitle: "Customer GSTIN, PO & Lorry Transport",
    category: "Challan & Logistics",
    feature:
      "Generates paperless delivery challans recording customer name, GSTIN, PO number, vehicle/lorry registration, transport carrier, and shape-aware materials.",
  },
  {
    src: "/portfolio/gayatri-app/9-ai-stock-advisor.png",
    title: "Gayatri Steel AI Stock Advisor",
    subtitle: "Conversational Inventory Intelligence",
    category: "AI & Smart Tools",
    feature:
      "Built-in AI advisor trained on Gayatri Steel inventory that provides intelligent purchasing recommendations, stock trend queries, and reorder alerts.",
  },
  {
    src: "/portfolio/gayatri-app/10-industrial-calculator.png",
    title: "Industrial Metal Weight & Cost Calculator",
    subtitle: "Density Specs for Tool, Stainless & Alloy Steel",
    category: "AI & Smart Tools",
    feature:
      "Dual calculation mode (By Length & By Weight) with presets for Tool Steel (7.8), Stainless (7.75), and Aluminium (2.7) calculating total batch cost in ₹.",
  },
];

interface CaseStudy {
  sysCode: string;
  sector: string;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
  tech: string;
  url?: string;
  badge: string;
  isLive: boolean;
  type: "web" | "app";
  screenshots?: AppScreenshot[];
}

const caseStudies: CaseStudy[] = [
  {
    sysCode: "GAYATRI-STEEL-WEB",
    sector: "INDUSTRIAL METALS",
    title: "Gayatri Steel Group",
    desc: "Commercial web platform & steel grade catalog for Gujarat's leading supplier, connecting multi-facility inventory across Rajkot and Jamnagar.",
    metric: "5+ Facilities",
    metricLabel: "Integrated Multi-Branch Operations",
    tech: "React • Tailwind CSS • Vite • Vercel",
    url: "https://gayatri-steel.vercel.app/",
    badge: "LIVE WEB PLATFORM",
    isLive: true,
    type: "web",
  },
  {
    sysCode: "TDR-STUDIO-FORGE",
    sector: "AI & CREATIVE TECH",
    title: "The Divine Roar Studio",
    desc: "Cinematic digital agency & bespoke software forge delivering high-performance AI integrations, 3D web experiences, and enterprise platforms.",
    metric: "Sub-Second",
    metricLabel: "Real-Time Interactive Performance",
    tech: "React • Canvas & 3D • Tailwind CSS • Vite",
    url: "https://tdrstudio.vercel.app/",
    badge: "LIVE WEB PLATFORM",
    isLive: true,
    type: "web",
  },
  {
    sysCode: "GAYATRI-STEEL-APP",
    sector: "ENTERPRISE MOBILITY",
    title: "Gayatri Steel Digital Suite",
    desc: "10-module mobile ERP for 5 group companies with live inventory sync, shape-aware auto weight, digital challans, and AI Stock Advisor.",
    metric: "10 Modules",
    metricLabel: "5 Companies • Mobile ERP & AI Advisor",
    tech: "React Native • Cloud APIs • AI Assistant",
    badge: "10-MODULE MOBILE ERP",
    isLive: false,
    type: "app",
    screenshots: appScreenshots,
  },
];

export default function PortfolioSection() {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number | null>(null);

  const openScreenshotModal = (idx: number = 0) => {
    setActiveScreenshotIdx(idx);
  };

  const closeScreenshotModal = () => {
    setActiveScreenshotIdx(null);
  };

  const nextScreenshot = () => {
    if (activeScreenshotIdx === null) return;
    setActiveScreenshotIdx((prev) => ((prev ?? 0) + 1) % appScreenshots.length);
  };

  const prevScreenshot = () => {
    if (activeScreenshotIdx === null) return;
    setActiveScreenshotIdx((prev) =>
      (prev ?? 0) === 0 ? appScreenshots.length - 1 : (prev ?? 0) - 1
    );
  };

  // Keyboard navigation & scroll lock per skills.md accessibility standards
  React.useEffect(() => {
    if (activeScreenshotIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveScreenshotIdx(null);
      } else if (e.key === "ArrowRight") {
        setActiveScreenshotIdx((prev) => ((prev ?? 0) + 1) % appScreenshots.length);
      } else if (e.key === "ArrowLeft") {
        setActiveScreenshotIdx((prev) =>
          (prev ?? 0) === 0 ? appScreenshots.length - 1 : (prev ?? 0) - 1
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeScreenshotIdx]);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#E2E8F0] relative">
      <div className="screen-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div>
            <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
              PROVEN RESULTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight font-display">
              Work That Solves Business Problems
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2 max-w-xl">
              Real-world digital platforms and custom mobile software engineered to streamline operations and drive measurable business growth.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#00875A] hover:text-[#47C56E] font-bold text-xs sm:text-sm mt-4 md:mt-0 group min-h-[44px]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-3 px-1">
          <span>← Swipe horizontally to view case studies →</span>
          <span className="font-mono text-slate-400 text-[11px]">3 Deployments</span>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {caseStudies.map((item, idx) => (
            <div
              key={idx}
              className="w-[88vw] max-w-[360px] sm:w-[380px] md:w-auto md:min-w-0 snap-center bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#47C56E]/60 transition-all duration-300 group h-auto md:h-full shrink-0 md:shrink"
            >
              {/* Card Top Section (Grows equally) */}
              <div className="flex flex-col flex-1">
                {/* 1. Monogram Header Bar */}
                <div className="min-h-12 py-2.5 sm:py-0 sm:h-14 bg-[#091C0F] px-4 sm:px-5 border-b border-[#163820] flex items-center justify-between text-[#E2E8F0] shrink-0">
                  <div className="flex items-center gap-2">
                    {item.type === "web" ? (
                      <Globe className="w-3.5 h-3.5 text-[#86EFAC]" />
                    ) : (
                      <Smartphone className="w-3.5 h-3.5 text-[#86EFAC]" />
                    )}
                    <span className="text-xs font-mono text-[#86EFAC] tracking-wider">
                      {item.sysCode}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.isLive && (
                      <span className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#163820] text-[#86EFAC] border border-[#225430]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#47C56E] animate-pulse"></span>
                        LIVE
                      </span>
                    )}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.title}`}
                        className="text-[#94A3B8] hover:text-[#47C56E] transition-colors p-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {item.type === "app" && (
                      <button
                        onClick={() => openScreenshotModal(0)}
                        className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 hover:bg-emerald-900 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3 h-3" />
                        <span>10 Screens</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* 2. Main Card Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  {/* Sector & Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-2 shrink-0">
                    <span className="text-[11px] font-bold text-[#00875A] tracking-wider uppercase">
                      {item.sector}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-white border border-[#E2E8F0] px-2 py-0.5 rounded shrink-0">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title Row */}
                  <div className="min-h-[44px] md:h-12 flex items-center mb-2 shrink-0">
                    <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] font-display group-hover:text-[#00875A] transition-colors leading-snug">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="min-h-[54px] md:min-h-[68px] flex items-start mb-4 shrink-0">
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Metric Box */}
                  <div className="min-h-[76px] md:h-[88px] bg-white p-3 sm:p-4 rounded-xl border border-[#E2E8F0] shadow-xs mb-4 flex flex-col justify-center shrink-0">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#47C56E] font-display leading-tight">
                      {item.metric}
                    </span>
                    <p className="text-[11px] sm:text-xs text-[#475569] mt-0.5 font-medium leading-tight">
                      {item.metricLabel}
                    </p>
                  </div>

                  {/* 3. Showcase / Feature Container */}
                  {idx === 0 && (
                    <div className="min-h-[176px] h-auto bg-[#091C0F] rounded-xl p-3 sm:p-3.5 border border-[#163820] flex flex-col justify-between shrink-0 gap-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px] sm:text-xs">
                          <Globe className="w-3.5 h-3.5 shrink-0" />
                          <span>Live Steel Portal &amp; Catalog</span>
                        </span>
                        <a
                          href="https://gayatri-steel.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] sm:text-[11px] text-[#86EFAC] hover:underline font-medium flex items-center gap-1 shrink-0"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 my-auto">
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">TOOL &amp; ALLOY</span>
                          <span className="truncate block font-medium">H13, D2, P20</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">FACILITIES</span>
                          <span className="truncate block font-medium">Rajkot &amp; Jamnagar</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">INQUIRIES</span>
                          <span className="truncate block font-medium">Digital Specs</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">DEPLOYMENT</span>
                          <span className="truncate block font-medium text-emerald-300">Vercel Prod</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] sm:text-[11px] text-slate-400">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#47C56E] animate-pulse"></span>
                          Production Ready
                        </span>
                        <span>Multi-Facility Sync</span>
                      </div>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="min-h-[176px] h-auto bg-[#091C0F] rounded-xl p-3 sm:p-3.5 border border-[#163820] flex flex-col justify-between shrink-0 gap-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px] sm:text-xs">
                          <Sparkles className="w-3.5 h-3.5 shrink-0" />
                          <span>AI &amp; Creative Studio</span>
                        </span>
                        <a
                          href="https://tdrstudio.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] sm:text-[11px] text-[#86EFAC] hover:underline font-medium flex items-center gap-1 shrink-0"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 my-auto">
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">CINEMATIC 3D</span>
                          <span className="truncate block font-medium">WebGL &amp; Canvas FX</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">AI FORGE</span>
                          <span className="truncate block font-medium">High-Speed Apps</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">STACK</span>
                          <span className="truncate block font-medium">TypeScript &amp; Vite</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">PERFORMANCE</span>
                          <span className="truncate block font-medium text-emerald-300">Sub-Second</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] sm:text-[11px] text-slate-400">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#47C56E] animate-pulse"></span>
                          Live Interactive Site
                        </span>
                        <span>Bespoke Forge</span>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="min-h-[176px] h-auto bg-[#091C0F] rounded-xl p-3 sm:p-3.5 border border-[#163820] flex flex-col justify-between shrink-0 gap-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px] sm:text-xs">
                          <Smartphone className="w-3.5 h-3.5 shrink-0" />
                          <span>Mobile ERP Suite &amp; AI</span>
                        </span>
                        <button
                          onClick={() => openScreenshotModal(0)}
                          className="text-[10px] sm:text-[11px] text-[#86EFAC] hover:underline font-medium cursor-pointer flex items-center gap-1 shrink-0"
                        >
                          <span>10 Screens</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 my-auto">
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">MULTI-TENANT</span>
                          <span className="truncate block font-medium">5 Group Entities</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">STOCK SYNC</span>
                          <span className="truncate block font-medium">Auto-Weight Tally</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">METALLURGY</span>
                          <span className="truncate block font-medium">28+ Grades DB</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] block">SMART TOOLS</span>
                          <span className="truncate block font-medium text-emerald-300">AI Advisor</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] sm:text-[11px] text-slate-400">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#47C56E] animate-pulse"></span>
                          Bilingual (EN/GUJ)
                        </span>
                        <button
                          onClick={() => openScreenshotModal(0)}
                          className="text-emerald-400 hover:text-[#86EFAC] font-medium transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>View Gallery (10)</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 4. Bottom Footer */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 border-t border-[#E2E8F0]/70 flex flex-col gap-2.5 shrink-0">
                <span className="min-h-5 sm:h-8 flex items-center text-[11px] sm:text-xs text-[#64748B] font-mono leading-tight">
                  {item.tech}
                </span>

                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 sm:h-11 inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-[#091C0F] hover:bg-[#00875A] text-white text-xs font-semibold tracking-wide transition-colors group/btn shadow-xs"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <button
                    onClick={() => openScreenshotModal(0)}
                    className="h-10 sm:h-11 inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-[#091C0F] hover:bg-[#00875A] text-white text-xs font-semibold tracking-wide transition-colors shadow-xs cursor-pointer"
                  >
                    <Smartphone className="w-3.5 h-3.5 text-[#86EFAC]" />
                    <span>Explore App UI &amp; Screenshots (10)</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Mobile App Showcase Modal */}
      {activeScreenshotIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-app-title"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 pt-safe pb-safe pl-safe pr-safe"
          onClick={closeScreenshotModal}
        >
          <div
            className="relative bg-[#091C0F] border border-[#163820] rounded-2xl sm:rounded-3xl max-w-4xl w-full p-4 sm:p-6 md:p-8 text-white shadow-2xl overflow-hidden max-h-[92vh] max-h-[92dvh] sm:max-h-[95vh] sm:max-h-[95dvh] flex flex-col overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#163820] pb-3 sm:pb-4 mb-3 sm:mb-4 shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-[#163820] border border-[#225430] flex items-center justify-center text-[#86EFAC] shrink-0">
                  <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <h3 id="modal-app-title" className="font-bold text-sm sm:text-lg font-display text-white">
                      Gayatri Steel Digital Management Suite
                    </h3>
                    <span className="text-[9px] sm:text-[10px] bg-emerald-950 text-[#86EFAC] px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-700 font-mono">
                      Mobile ERP
                    </span>
                    <span className="text-[9px] sm:text-[10px] bg-[#163820] text-slate-300 px-1.5 sm:px-2 py-0.5 rounded-full border border-slate-700 font-medium">
                      {appScreenshots[activeScreenshotIdx].category}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-400">
                    Screen {activeScreenshotIdx + 1} of {appScreenshots.length}:{" "}
                    {appScreenshots[activeScreenshotIdx].title}
                  </p>
                </div>
              </div>

              <button
                onClick={closeScreenshotModal}
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-[#163820] hover:bg-[#225430] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 min-w-[36px] min-h-[36px]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Device Frame + Information Panel */}
            <div className="grid md:grid-cols-12 gap-5 sm:gap-6 items-center overflow-y-auto momentum-scroll overscroll-contain pr-1">
              {/* Phone Device Mockup Container */}
              <div className="md:col-span-5 flex justify-center py-2">
                <div className="relative w-[200px] min-[400px]:w-[230px] sm:w-[250px] h-[400px] min-[400px]:h-[460px] sm:h-[500px] bg-black rounded-[32px] sm:rounded-[36px] p-2 sm:p-2.5 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/50 shrink-0">
                  {/* Speaker notch */}
                  <div className="absolute top-3.5 sm:top-4 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-3.5 sm:h-4 bg-black rounded-full z-20 flex items-center justify-center">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-900 mr-1 sm:mr-1.5" />
                    <div className="w-6 sm:w-8 h-1 bg-slate-800 rounded-full" />
                  </div>

                  <div className="w-full h-full rounded-[24px] sm:rounded-[26px] overflow-hidden bg-[#0A0A0A] relative">
                    <Image
                      src={appScreenshots[activeScreenshotIdx].src}
                      alt={appScreenshots[activeScreenshotIdx].title}
                      width={360}
                      height={780}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Information & Feature Breakdown */}
              <div className="md:col-span-7 flex flex-col justify-between h-full space-y-3 sm:space-y-4">
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#163820] text-[#86EFAC] text-[11px] sm:text-xs font-semibold">
                    <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    <span>{appScreenshots[activeScreenshotIdx].subtitle}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-display">
                    {appScreenshots[activeScreenshotIdx].title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0c2415] p-3 sm:p-4 rounded-xl border border-[#1b4829]">
                    {appScreenshots[activeScreenshotIdx].feature}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 sm:space-y-2 pt-1 text-[11px] sm:text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#47C56E] shrink-0" />
                      <span>5-Company isolated workspaces with GST security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#47C56E] shrink-0" />
                      <span>Shape-aware auto weight calculation (Round, Flat, Pipe)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#47C56E] shrink-0" />
                      <span>Paperless dispatch challans & AI conversational stock assistant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#47C56E] shrink-0" />
                      <span>Full bilingual support in English & Gujarati (A/અ)</span>
                    </div>
                  </div>
                </div>

                {/* Navigation and Thumbnails */}
                <div className="pt-3 sm:pt-4 border-t border-[#163820] space-y-2.5 sm:space-y-3">
                  {/* Thumbnail Row (All 10 Screens) */}
                  <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {appScreenshots.map((scr, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveScreenshotIdx(idx)}
                        className={`w-9 sm:w-11 h-14 sm:h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer relative ${
                          activeScreenshotIdx === idx
                            ? "border-[#47C56E] scale-105 shadow-md shadow-emerald-900/50"
                            : "border-slate-700 opacity-60 hover:opacity-100"
                        }`}
                        title={scr.title}
                      >
                        <Image
                          src={scr.src}
                          alt={scr.title}
                          width={44}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[7px] sm:text-[8px] font-mono text-emerald-300 text-center">
                          {idx + 1}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={prevScreenshot}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-[#163820] hover:bg-[#225430] text-white text-xs font-semibold transition-colors cursor-pointer min-h-[40px]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>

                    <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                      {activeScreenshotIdx + 1} / {appScreenshots.length}
                    </span>

                    <button
                      onClick={nextScreenshot}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-[#00875A] hover:bg-[#47C56E] hover:text-[#091C0F] text-white text-xs font-semibold transition-colors cursor-pointer min-h-[40px]"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}



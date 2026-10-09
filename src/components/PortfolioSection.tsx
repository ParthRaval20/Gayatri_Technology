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
  Monitor,
} from "lucide-react";
import {
  caseStudies,
  gayatriAppScreenshots,
  brahmSamajScreenshots,
  ProjectScreenshot,
} from "@/lib/portfolio";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "erp" | "web">("all");
  const [activeProjectScreenshots, setActiveProjectScreenshots] = useState<ProjectScreenshot[]>(gayatriAppScreenshots);
  const [activeProjectTitle, setActiveProjectTitle] = useState<string>("Gayatri Steel Operations Suite");
  const [activeProjectBadge, setActiveProjectBadge] = useState<string>("Mobile ERP");
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const thumbnailContainerRef = React.useRef<HTMLDivElement>(null);
  const modalScrollRef = React.useRef<HTMLDivElement>(null);

  const filteredCaseStudies = caseStudies.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const openScreenshotModal = (
    screenshots: ProjectScreenshot[],
    title: string,
    badge: string,
    idx: number = 0
  ) => {
    setActiveProjectScreenshots(screenshots);
    setActiveProjectTitle(title);
    setActiveProjectBadge(badge);
    setActiveScreenshotIdx(idx);
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTop = 0;
    }
  };

  const closeScreenshotModal = () => {
    setActiveScreenshotIdx(null);
  };

  const nextScreenshot = () => {
    if (activeScreenshotIdx === null) return;
    setActiveScreenshotIdx((prev) => ((prev ?? 0) + 1) % activeProjectScreenshots.length);
  };

  const prevScreenshot = () => {
    if (activeScreenshotIdx === null) return;
    setActiveScreenshotIdx((prev) =>
      (prev ?? 0) === 0 ? activeProjectScreenshots.length - 1 : (prev ?? 0) - 1
    );
  };

  // Touch swipe gesture handlers for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      nextScreenshot();
    } else if (distance < -minSwipeDistance) {
      prevScreenshot();
    }
  };

  // Auto-scroll active thumbnail into view
  React.useEffect(() => {
    if (activeScreenshotIdx === null) return;
    const container = thumbnailContainerRef.current;
    if (!container) return;
    const activeThumb = container.children[activeScreenshotIdx] as HTMLElement;
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeScreenshotIdx]);

  // Keyboard navigation & scroll lock per skills.md accessibility standards
  React.useEffect(() => {
    if (activeScreenshotIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveScreenshotIdx(null);
      } else if (e.key === "ArrowRight") {
        setActiveScreenshotIdx((prev) => ((prev ?? 0) + 1) % activeProjectScreenshots.length);
      } else if (e.key === "ArrowLeft") {
        setActiveScreenshotIdx((prev) =>
          (prev ?? 0) === 0 ? activeProjectScreenshots.length - 1 : (prev ?? 0) - 1
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
  }, [activeScreenshotIdx, activeProjectScreenshots.length]);

  // Reset modal scroll position to top when screenshot changes
  React.useEffect(() => {
    if (activeScreenshotIdx !== null && modalScrollRef.current) {
      modalScrollRef.current.scrollTop = 0;
    }
  }, [activeScreenshotIdx]);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#E2E8F0] relative overflow-hidden">
      <div className="screen-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-xs font-bold shadow-2xs mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#00875A]" />
              <span className="font-mono uppercase tracking-wider">REAL WORK &bull; ZERO FABRICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight font-display">
              Real Work That Solves Business Problems
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2 max-w-xl">
              Authentic software and web platforms built for businesses in Gujarat. Inspect actual screens,
              problem breakdowns, and delivered functionality.
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

        {/* Filter Tabs & Category Bar (Woyce.ai inspiration) */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[#E2E8F0]">
          <div className="flex overflow-x-auto sm:flex-wrap items-center gap-1.5 sm:gap-2 p-1 bg-[#F1F5F9] rounded-xl border border-[#E2E8F0] no-scrollbar max-w-full">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${
                selectedCategory === "all"
                  ? "bg-[#091C0F] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#091C0F]"
              }`}
            >
              All Projects ({caseStudies.length})
            </button>
            <button
              onClick={() => setSelectedCategory("erp")}
              className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${
                selectedCategory === "erp"
                  ? "bg-[#091C0F] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#091C0F]"
              }`}
            >
              Enterprise &amp; Institutional ERP (2)
            </button>
            <button
              onClick={() => setSelectedCategory("web")}
              className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${
                selectedCategory === "web"
                  ? "bg-[#091C0F] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#091C0F]"
              }`}
            >
              Commercial Web Platforms (2)
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-[#47C56E] animate-pulse" />
            <span>4 Production Systems Documented</span>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-3 px-1">
          <span>← Swipe horizontally to view case studies →</span>
          <span className="font-mono text-slate-400 text-[11px]">{filteredCaseStudies.length} Deployments</span>
        </div>

        {/* Case Studies Card Grid */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {filteredCaseStudies.map((item, idx) => (
            <div
              key={idx}
              className="w-[88vw] max-w-[360px] sm:w-[380px] md:w-auto md:min-w-0 snap-center bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#47C56E]/60 transition-all duration-300 group h-full shrink-0 md:shrink hover:-translate-y-1.5"
            >
              {/* Card Top Section */}
              <div className="flex flex-col flex-1">
                {/* 1. Header Bar with Strict Fixed Height */}
                <div className="h-14 bg-[#091C0F] px-4 sm:px-5 border-b border-[#163820] flex items-center justify-between text-[#E2E8F0] shrink-0">
                  <div className="flex items-center gap-2">
                    {item.type === "web" ? (
                      <Globe className="w-3.5 h-3.5 text-[#86EFAC]" />
                    ) : item.type === "erp" ? (
                      <Monitor className="w-3.5 h-3.5 text-[#86EFAC]" />
                    ) : (
                      <Smartphone className="w-3.5 h-3.5 text-[#86EFAC]" />
                    )}
                    <span className="text-xs font-mono text-[#86EFAC] tracking-wider font-semibold">
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
                    {item.screenshots && (
                      <button
                        onClick={() =>
                          openScreenshotModal(
                            item.screenshots || [],
                            item.title,
                            item.type === "erp" ? "Institutional ERP" : "Mobile ERP",
                            0
                          )
                        }
                        className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 hover:bg-emerald-900 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3 h-3" />
                        <span>{item.screenshots.length} Screens</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* 2. Main Card Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 space-y-3.5">
                  {/* Relationship & Sector */}
                  <div className="flex items-center justify-between gap-2 h-6 shrink-0">
                    <span className="text-[11px] font-bold text-[#00875A] tracking-wider uppercase font-mono">
                      {item.relationship}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-600 bg-white border border-[#E2E8F0] px-2 py-0.5 rounded shrink-0 truncate max-w-[170px]">
                      {item.sector}
                    </span>
                  </div>

                  {/* Title & Tagline Container */}
                  <div className="h-[76px] sm:h-[80px] flex flex-col justify-start shrink-0">
                    <h3 className="text-base sm:text-lg font-bold text-[#091C0F] font-display group-hover:text-[#00875A] transition-colors leading-snug line-clamp-1">
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
                    <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed line-clamp-2">
                      {item.tagline}
                    </p>
                  </div>

                  {/* The Problem & What We Built */}
                  <div className="bg-white p-3.5 rounded-xl border border-[#E2E8F0] flex flex-col justify-between h-[165px] text-xs shadow-2xs shrink-0">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">
                        The Problem:
                      </span>
                      <p className="text-[#475569] leading-relaxed mt-0.5 line-clamp-2 text-xs">
                        {item.problem}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#E2E8F0]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00875A] block">
                        What We Built:
                      </span>
                      <p className="text-[#334155] leading-relaxed mt-0.5 line-clamp-2 text-xs font-medium">
                        {item.whatWeBuilt}
                      </p>
                    </div>
                  </div>

                  {/* Delivered Functionality Box */}
                  <div className="bg-[#F0FDF4] p-3 rounded-xl border border-[#86EFAC]/40 text-xs h-[72px] flex flex-col justify-center shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00875A] block">
                      Delivered Functionality:
                    </span>
                    <p className="text-[#091C0F] font-medium leading-snug mt-0.5 line-clamp-2 text-[11px] sm:text-xs">
                      {item.deliveredFunctionality}
                    </p>
                  </div>

                  {/* 3. Showcase Container - Strict 192px Height Across All Cards */}
                  {item.sysCode === "GAYATRI-STEEL-APP" && (
                    <div className="h-[192px] bg-[#091C0F] rounded-xl p-3 sm:p-3.5 border border-[#163820] flex flex-col justify-between shrink-0">
                      <div className="flex items-center justify-between text-xs h-6">
                        <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px]">
                          <Smartphone className="w-3.5 h-3.5 shrink-0" />
                          <span>Mobile ERP Suite &amp; Operations</span>
                        </span>
                        <button
                          onClick={() =>
                            openScreenshotModal(
                              gayatriAppScreenshots,
                              item.title,
                              "Mobile ERP",
                              0
                            )
                          }
                          className="text-[10px] text-[#86EFAC] hover:underline font-medium cursor-pointer flex items-center gap-1 shrink-0"
                        >
                          <span>10 Screens</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 my-auto">
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">MULTI-TENANT</span>
                          <span className="truncate block font-medium">5 Group Entities</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">STOCK SYNC</span>
                          <span className="truncate block font-medium">Auto-Weight Tally</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">METALLURGY</span>
                          <span className="truncate block font-medium">28+ Grades DB</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">DISPATCH</span>
                          <span className="truncate block font-medium text-emerald-300">Digital Challans</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 h-6">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#47C56E] animate-pulse"></span>
                          Shop-Floor Ready
                        </span>
                        <button
                          onClick={() =>
                            openScreenshotModal(
                              gayatriAppScreenshots,
                              item.title,
                              "Mobile ERP",
                              0
                            )
                          }
                          className="text-emerald-400 hover:text-[#86EFAC] font-medium transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>View Gallery (10)</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}

                  {item.sysCode === "BRAHM-SAMAJ-ERP" && (
                    <div className="h-[192px] bg-[#091C0F] rounded-xl p-3 sm:p-3.5 border border-[#163820] flex flex-col justify-between shrink-0">
                      <div className="flex items-center justify-between text-xs h-6">
                        <span className="text-amber-400 font-semibold flex items-center gap-1.5 text-[11px]">
                          <Monitor className="w-3.5 h-3.5 shrink-0" />
                          <span>Brahm Samaj ERP Portal</span>
                        </span>
                        <button
                          onClick={() =>
                            openScreenshotModal(
                              brahmSamajScreenshots,
                              item.title,
                              "Institutional ERP",
                              0
                            )
                          }
                          className="text-[10px] text-amber-300 hover:underline font-medium cursor-pointer flex items-center gap-1 shrink-0"
                        >
                          <span>{item.screenshots?.length || 3} Screens</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 my-auto">
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-amber-400 font-semibold text-[9px] block">DASHBOARD</span>
                          <span className="truncate block font-medium">Executive Board</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-amber-400 font-semibold text-[9px] block">CENSUS FORMS</span>
                          <span className="truncate block font-medium">Form GBS Series</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-amber-400 font-semibold text-[9px] block">PDF ENGINE</span>
                          <span className="truncate block font-medium">Photo ID Print</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-amber-400 font-semibold text-[9px] block">VERIFICATION</span>
                          <span className="truncate block font-medium text-amber-300">Gayatri Tech Dev</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 h-6">
                        <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#47C56E] animate-pulse"></span>
                          Online &bull; v1.0 Live
                        </span>
                        <button
                          onClick={() =>
                            openScreenshotModal(
                              brahmSamajScreenshots,
                              item.title,
                              "Institutional ERP",
                              0
                            )
                          }
                          className="text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>Inspect UI ({item.screenshots?.length || 3})</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}

                  {item.sysCode === "GAYATRI-STEEL-WEB" && (
                    <div className="h-[192px] bg-[#091C0F] rounded-xl p-3 sm:p-3.5 border border-[#163820] flex flex-col justify-between shrink-0">
                      <div className="flex items-center justify-between text-xs h-6">
                        <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px]">
                          <Globe className="w-3.5 h-3.5 shrink-0" />
                          <span>Live Steel Portal &amp; Catalog</span>
                        </span>
                        <a
                          href="https://gayatri-steel.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-[#86EFAC] hover:underline font-medium flex items-center gap-1 shrink-0"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 my-auto">
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">TOOL &amp; ALLOY</span>
                          <span className="truncate block font-medium">H13, D2, P20</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">FACILITIES</span>
                          <span className="truncate block font-medium">Rajkot &amp; Jamnagar</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">INQUIRIES</span>
                          <span className="truncate block font-medium">Digital Specs</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">DEPLOYMENT</span>
                          <span className="truncate block font-medium text-emerald-300">Vercel Prod</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 h-6">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#47C56E] animate-pulse"></span>
                          Production Ready
                        </span>
                        <span>Multi-Facility Sync</span>
                      </div>
                    </div>
                  )}

                  {item.sysCode === "TDR-STUDIO-FORGE" && (
                    <div className="h-[192px] bg-[#091C0F] rounded-xl p-3 sm:p-3.5 border border-[#163820] flex flex-col justify-between shrink-0">
                      <div className="flex items-center justify-between text-xs h-6">
                        <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px]">
                          <Sparkles className="w-3.5 h-3.5 shrink-0" />
                          <span>Creative Digital Studio</span>
                        </span>
                        <a
                          href="https://tdrstudio.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-[#86EFAC] hover:underline font-medium flex items-center gap-1 shrink-0"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 my-auto">
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">CINEMATIC 3D</span>
                          <span className="truncate block font-medium">WebGL &amp; Canvas</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">AI PRODUCTION</span>
                          <span className="truncate block font-medium">Storytelling</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">TECH STACK</span>
                          <span className="truncate block font-medium">React &amp; Vite</span>
                        </div>
                        <div className="bg-[#122e1a] border border-[#1c4d29] rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                          <span className="text-emerald-400 font-semibold text-[9px] block">PERFORMANCE</span>
                          <span className="truncate block font-medium text-emerald-300">Sub-Second Load</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 h-6">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#47C56E] animate-pulse"></span>
                          Live Platform
                        </span>
                        <span>Creative Agency</span>
                      </div>
                    </div>
                  )}

                  {/* Micro-Badges Row (Woyce.ai inspiration) */}
                  <div className="flex flex-wrap gap-1 pt-1 h-6 overflow-hidden">
                    {item.techBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-[#E2E8F0]/70 text-[#334155]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Bottom Footer */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 border-t border-[#E2E8F0]/70 flex flex-col justify-between h-[92px] shrink-0">
                <span className="h-5 flex items-center text-[11px] text-[#64748B] font-mono leading-tight truncate">
                  {item.tech}
                </span>

                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-[#091C0F] hover:bg-[#00875A] text-white text-xs font-semibold tracking-wide transition-colors group/btn shadow-xs"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <button
                    onClick={() =>
                      openScreenshotModal(
                        item.screenshots || [],
                        item.title,
                        item.type === "erp" ? "Institutional ERP v2.4.0" : "Mobile ERP",
                        0
                      )
                    }
                    className="h-11 inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-[#091C0F] hover:bg-[#00875A] text-white text-xs font-semibold tracking-wide transition-colors shadow-xs cursor-pointer"
                  >
                    {item.type === "erp" ? (
                      <Monitor className="w-3.5 h-3.5 text-amber-300" />
                    ) : (
                      <Smartphone className="w-3.5 h-3.5 text-[#86EFAC]" />
                    )}
                    <span>
                      {item.type === "erp"
                        ? `Explore ERP Screens (${item.screenshots?.length || 2})`
                        : `Explore App UI (${item.screenshots?.length || 10})`}
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Screen Showcase Modal (Supports Phone Bezel AND Desktop ERP Window) */}
      {activeScreenshotIdx !== null && activeProjectScreenshots.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-app-title"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 pt-safe pb-safe pl-safe pr-safe animate-fade-in"
          onClick={closeScreenshotModal}
        >
          <div
            className="relative bg-[#091C0F] border border-[#163820] rounded-2xl sm:rounded-3xl max-w-5xl w-full p-3 sm:p-5 md:p-8 text-white shadow-2xl overflow-hidden max-h-[96vh] max-h-[96dvh] flex flex-col overscroll-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#163820] pb-2.5 sm:pb-4 mb-2.5 sm:mb-4 shrink-0 gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 pr-1">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#163820] border border-[#225430] flex items-center justify-center text-[#86EFAC] shrink-0">
                  {activeProjectScreenshots[activeScreenshotIdx]?.aspectRatio === "desktop" ? (
                    <Monitor className="w-4 sm:w-5 h-4 sm:h-5 text-amber-300" />
                  ) : (
                    <Smartphone className="w-4 sm:w-5 h-4 sm:h-5 text-[#86EFAC]" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <h3 id="modal-app-title" className="font-bold text-xs sm:text-base md:text-lg font-display text-white truncate max-w-[170px] min-[360px]:max-w-[210px] min-[420px]:max-w-[280px] sm:max-w-none">
                      {activeProjectTitle}
                    </h3>
                    <span className="text-[9px] sm:text-[10px] bg-emerald-950 text-[#86EFAC] px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-700 font-mono shrink-0">
                      {activeProjectBadge}
                    </span>
                    <span className="hidden min-[420px]:inline text-[9px] sm:text-[10px] bg-[#163820] text-slate-300 px-1.5 sm:px-2 py-0.5 rounded-full border border-slate-700 font-medium truncate max-w-[150px]">
                      {activeProjectScreenshots[activeScreenshotIdx]?.category}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-400 truncate">
                    Screen {activeScreenshotIdx + 1} of {activeProjectScreenshots.length}:{" "}
                    {activeProjectScreenshots[activeScreenshotIdx]?.title}
                  </p>
                </div>
              </div>

              <button
                onClick={closeScreenshotModal}
                className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-[#163820] hover:bg-[#225430] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 min-w-[32px] min-h-[32px]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Device Frame + Information Panel */}
            <div
              ref={modalScrollRef}
              className="flex flex-col md:grid md:grid-cols-12 gap-4 sm:gap-6 items-center overflow-y-auto momentum-scroll overscroll-contain pr-1 pb-2 w-full"
            >
              {/* Device Frame Display (Adaptive for Mobile Phone vs Desktop Window) */}
              <div
                className={`${
                  activeProjectScreenshots[activeScreenshotIdx]?.aspectRatio === "desktop"
                    ? "md:col-span-7"
                    : "md:col-span-5"
                } flex flex-col items-center justify-center py-1 sm:py-2 w-full shrink-0`}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {activeProjectScreenshots[activeScreenshotIdx]?.aspectRatio === "desktop" ? (
                  /* Desktop / Tablet App Window Frame */
                  <div className="relative w-full max-w-[540px] bg-[#0A0E17] rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 shadow-2xl border-2 sm:border-4 border-slate-700 ring-1 ring-slate-600/50 shrink-0 select-none flex flex-col">
                    {/* Window Titlebar */}
                    <div className="h-6 sm:h-7 bg-[#111827] rounded-t-lg sm:rounded-t-xl px-2.5 sm:px-3 flex items-center justify-between border-b border-slate-800 text-[10px] font-mono text-slate-400 mb-1.5 shrink-0">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <span className="truncate max-w-[150px] min-[360px]:max-w-[200px] text-slate-300">
                        {activeProjectScreenshots[activeScreenshotIdx]?.title}
                      </span>
                      <span className="text-[9px] text-emerald-400 whitespace-nowrap">● LIVE ERP</span>
                    </div>

                    {/* Window Canvas */}
                    <div className="w-full aspect-[16/9] sm:aspect-[16/10] rounded-lg overflow-hidden bg-[#0A0A0A] relative flex items-center justify-center">
                      <Image
                        src={activeProjectScreenshots[activeScreenshotIdx]?.src || ""}
                        alt={activeProjectScreenshots[activeScreenshotIdx]?.title || ""}
                        width={1024}
                        height={575}
                        priority
                        className="w-full h-full object-contain bg-slate-950 transition-opacity duration-150"
                      />

                      {/* Quick Floating Prev Button Inset in Canvas */}
                      <button
                        onClick={prevScreenshot}
                        className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#091C0F]/90 hover:bg-[#163820] text-white border border-[#47C56E]/40 shadow-xl flex items-center justify-center transition-transform active:scale-90 cursor-pointer z-20 backdrop-blur-xs"
                        aria-label="Previous screen"
                      >
                        <ChevronLeft className="w-4.5 h-4.5 text-[#86EFAC]" />
                      </button>

                      {/* Quick Floating Next Button Inset in Canvas */}
                      <button
                        onClick={nextScreenshot}
                        className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#091C0F]/90 hover:bg-[#163820] text-white border border-[#47C56E]/40 shadow-xl flex items-center justify-center transition-transform active:scale-90 cursor-pointer z-20 backdrop-blur-xs"
                        aria-label="Next screen"
                      >
                        <ChevronRight className="w-4.5 h-4.5 text-[#86EFAC]" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Smartphone Bezel Frame */
                  <div className="relative w-[175px] min-[360px]:w-[190px] min-[400px]:w-[215px] sm:w-[235px] md:w-[250px] h-[330px] min-[360px]:h-[365px] min-[400px]:h-[410px] sm:h-[450px] md:h-[490px] bg-black rounded-[28px] sm:rounded-[36px] p-2 sm:p-2.5 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/50 shrink-0 select-none">
                    {/* Speaker notch */}
                    <div className="absolute top-2.5 sm:top-3.5 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-3 sm:h-4 bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-900 mr-1 sm:mr-1.5" />
                      <div className="w-6 sm:w-8 h-1 bg-slate-800 rounded-full" />
                    </div>

                    <div className="w-full h-full rounded-[20px] sm:rounded-[26px] overflow-hidden bg-[#0A0A0A] relative">
                      <Image
                        src={activeProjectScreenshots[activeScreenshotIdx]?.src || ""}
                        alt={activeProjectScreenshots[activeScreenshotIdx]?.title || ""}
                        width={360}
                        height={780}
                        priority
                        className="w-full h-full object-cover transition-opacity duration-150"
                      />
                    </div>

                    {/* Quick Floating Prev Button Beside Mockup */}
                    <button
                      onClick={prevScreenshot}
                      className="absolute -left-3 min-[400px]:-left-4 sm:-left-5 top-1/2 -translate-y-1/2 w-8 h-8 min-[400px]:w-9 min-[400px]:h-9 sm:w-10 sm:h-10 rounded-full bg-[#091C0F]/95 hover:bg-[#163820] text-white border border-[#47C56E]/40 shadow-xl flex items-center justify-center transition-transform active:scale-90 cursor-pointer z-30"
                      aria-label="Previous screen"
                    >
                      <ChevronLeft className="w-4.5 h-4.5 text-[#86EFAC]" />
                    </button>

                    {/* Quick Floating Next Button Beside Mockup */}
                    <button
                      onClick={nextScreenshot}
                      className="absolute -right-3 min-[400px]:-right-4 sm:-right-5 top-1/2 -translate-y-1/2 w-8 h-8 min-[400px]:w-9 min-[400px]:h-9 sm:w-10 sm:h-10 rounded-full bg-[#091C0F]/95 hover:bg-[#163820] text-white border border-[#47C56E]/40 shadow-xl flex items-center justify-center transition-transform active:scale-90 cursor-pointer z-30"
                      aria-label="Next screen"
                    >
                      <ChevronRight className="w-4.5 h-4.5 text-[#86EFAC]" />
                    </button>
                  </div>
                )}

                {/* Mobile Quick Pagination Dots */}
                <div className="flex md:hidden items-center justify-center gap-1.5 mt-2.5">
                  {activeProjectScreenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreenshotIdx(idx)}
                      className={`transition-all duration-200 cursor-pointer ${
                        activeScreenshotIdx === idx
                          ? "w-5 h-1.5 bg-[#47C56E] rounded-full"
                          : "w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400 rounded-full"
                      }`}
                      aria-label={`Jump to screen ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Mobile Swipe Hint */}
                <div className="flex md:hidden items-center justify-center gap-1.5 mt-1 text-[10px] text-[#86EFAC] font-mono">
                  <span>Swipe image or tap arrows to navigate</span>
                </div>
              </div>

              {/* Information & Feature Breakdown */}
              <div
                className={`${
                  activeProjectScreenshots[activeScreenshotIdx]?.aspectRatio === "desktop"
                    ? "md:col-span-5"
                    : "md:col-span-7"
                } flex flex-col justify-between w-full space-y-3 sm:space-y-4`}
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#163820] text-[#86EFAC] text-[11px] sm:text-xs font-semibold">
                    <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    <span>{activeProjectScreenshots[activeScreenshotIdx]?.subtitle}</span>
                  </div>

                  <h4 className="text-base sm:text-xl md:text-2xl font-bold text-white font-display">
                    {activeProjectScreenshots[activeScreenshotIdx]?.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0c2415] p-3 sm:p-4 rounded-xl border border-[#1b4829]">
                    {activeProjectScreenshots[activeScreenshotIdx]?.feature}
                  </p>

                  {/* Highlights checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 pt-1 text-[11px] sm:text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#47C56E] shrink-0" />
                      <span>Production Verified Deployment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#47C56E] shrink-0" />
                      <span>Zero Generic Templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#47C56E] shrink-0" />
                      <span>Engineered For Real Operators</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#47C56E] shrink-0" />
                      <span>Direct Founder Architecture</span>
                    </div>
                  </div>
                </div>

                {/* Navigation and Thumbnails */}
                <div className="pt-2.5 sm:pt-4 border-t border-[#163820] space-y-2.5 sm:space-y-3">
                  {/* Thumbnail Row */}
                  <div
                    ref={thumbnailContainerRef}
                    className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-thin no-scrollbar"
                  >
                    {activeProjectScreenshots.map((scr, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveScreenshotIdx(idx)}
                        className={`w-10 sm:w-12 h-14 sm:h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer relative ${
                          activeScreenshotIdx === idx
                            ? "border-[#47C56E] scale-105 shadow-md shadow-emerald-900/50"
                            : "border-slate-700 opacity-60 hover:opacity-100"
                        }`}
                        title={scr.title}
                      >
                        <Image
                          src={scr.src}
                          alt={scr.title}
                          width={48}
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
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={prevScreenshot}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-[#163820] hover:bg-[#225430] text-white text-xs font-semibold transition-colors cursor-pointer min-h-[40px]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>

                    <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                      {activeScreenshotIdx + 1} / {activeProjectScreenshots.length}
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

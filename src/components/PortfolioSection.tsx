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
  ChevronDown,
  ChevronUp,
  Terminal,
  Layers,
  Monitor,
  Star,
} from "lucide-react";
import {
  caseStudies,
  gayatriAppScreenshots,
  brahmSamajScreenshots,
  ProjectScreenshot,
} from "@/lib/portfolio";

interface PortfolioSectionProps {
  hideHeader?: boolean;
}

export default function PortfolioSection({ hideHeader = false }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "erp" | "web">("all");
  const [expandedCode, setExpandedCode] = useState<string | null>(null);
  const [activeProjectScreenshots, setActiveProjectScreenshots] = useState<ProjectScreenshot[]>(gayatriAppScreenshots);
  const [activeProjectTitle, setActiveProjectTitle] = useState<string>("Gayatri Steel Operations Suite");
  const [activeProjectBadge, setActiveProjectBadge] = useState<string>("Mobile ERP");
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const thumbnailContainerRef = React.useRef<HTMLDivElement>(null);
  const modalScrollRef = React.useRef<HTMLDivElement>(null);

  const toggleExpandCode = (code: string) => {
    setExpandedCode((prev) => (prev === code ? null : code));
  };

  // Sync category filter & project expand with URL query params if present (e.g. from sector card clicks)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const filterParam = params.get("filter");
    if (filterParam === "erp" || filterParam === "web" || filterParam === "all") {
      setSelectedCategory(filterParam);
    }
    const projectParam = params.get("project");
    if (projectParam) {
      const match = caseStudies.find(
        (c) =>
          c.sysCode.toLowerCase() === projectParam.toLowerCase() ||
          c.sysCode.toLowerCase().includes(projectParam.toLowerCase())
      );
      if (match) {
        setExpandedCode(match.sysCode);
        if (match.category !== "all") {
          setSelectedCategory(match.category);
        }
      }
    }
  }, []);

  const filteredCaseStudies = caseStudies.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const activeCaseStudy = caseStudies.find(
    (item) =>
      item.title.toLowerCase().includes(activeProjectTitle.toLowerCase().slice(0, 10)) ||
      (item.screenshots && item.screenshots === activeProjectScreenshots)
  );

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
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-paper border-y border-rule relative overflow-hidden">
      <div className="screen-container">
        {/* Section Header */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 scroll-reveal">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink text-white text-xs font-semibold shadow-2xs mb-2">
                <Terminal className="w-3.5 h-3.5 text-accent-mint" />
                <span className="text-[11px] font-medium">Production systems</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ink tracking-tight font-display">
                Real Work That Solves Business Problems
              </h2>
              <p className="text-muted text-xs sm:text-sm md:text-base mt-2 max-w-xl">
                Authentic software and web platforms built for businesses in Gujarat. Inspect actual screens,
                problem breakdowns, and delivered functionality.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-accent hover:text-ink font-bold text-xs sm:text-sm mt-4 md:mt-0 group min-h-[44px] transition-colors focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Sticky Filter Tabs & Category Bar */}
        <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 border-b border-rule shadow-xs flex flex-wrap items-center justify-between gap-3 transition-colors">
          <div className="flex overflow-x-auto sm:flex-wrap items-center gap-1.5 sm:gap-2 p-1 bg-paper-2 rounded-xl border border-rule no-scrollbar max-w-full">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 min-h-[36px] focus-visible:outline-2 focus-visible:outline-accent ${
                selectedCategory === "all"
                  ? "bg-ink text-white shadow-xs"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              All Projects ({caseStudies.length})
            </button>
            <button
              onClick={() => setSelectedCategory("erp")}
              className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 min-h-[36px] focus-visible:outline-2 focus-visible:outline-accent ${
                selectedCategory === "erp"
                  ? "bg-ink text-white shadow-xs"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              Enterprise ERP ({caseStudies.filter((c) => c.type === "erp").length})
            </button>
            <button
              onClick={() => setSelectedCategory("web")}
              className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 min-h-[36px] focus-visible:outline-2 focus-visible:outline-accent ${
                selectedCategory === "web"
                  ? "bg-ink text-white shadow-xs"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              Commercial Web ({caseStudies.filter((c) => c.type === "web").length})
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-accent-light motion-safe:animate-pulse motion-reduce:animate-none" />
            <span>4 production systems documented</span>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-accent font-semibold mb-3 px-1 scroll-reveal">
          <span>&larr; Swipe horizontally to view case studies &rarr;</span>
          <span className="text-slate-400 text-[11px]">{filteredCaseStudies.length} deployments</span>
        </div>

        {/* Case Studies Card Grid */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-start scroll-reveal delay-150">
          {filteredCaseStudies.map((item, idx) => {
            const isExpanded = expandedCode === item.sysCode;

            return (
              <article
                key={idx}
                onClick={() => toggleExpandCode(item.sysCode)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpandCode(item.sysCode);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                className={`w-[88vw] max-w-[360px] sm:w-[380px] md:w-auto md:min-w-0 snap-center rounded-2xl border overflow-hidden flex flex-col justify-between transition-colors motion-safe:transition-transform duration-300 group shrink-0 md:shrink cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent ${
                  isExpanded
                    ? "border-accent-light shadow-xl ring-1 ring-accent-light/40 bg-paper min-h-[500px] sm:min-h-[515px]"
                    : "bg-paper-2 border-rule shadow-xs hover:border-accent-light/60 hover:shadow-md hover:-translate-y-1 h-[500px] sm:h-[515px]"
                }`}
              >
                {/* Card Top Section */}
                <div className="flex flex-col flex-1">
                  {/* 1. Header Bar with Strict Fixed Height */}
                  <div className="h-13 sm:h-14 bg-ink px-4 sm:px-5 border-b border-rule-dark flex items-center justify-between text-rule shrink-0">
                    <div className="flex items-center gap-2">
                      {item.type === "web" ? (
                        <Globe className="w-3.5 h-3.5 text-accent-mint" />
                      ) : item.type === "erp" ? (
                        <Monitor className="w-3.5 h-3.5 text-accent-mint" />
                      ) : (
                        <Smartphone className="w-3.5 h-3.5 text-accent-mint" />
                      )}
                      <span className="text-xs text-accent-mint font-medium">
                        {item.shortLabel || item.title.split(" ")[0]} {item.type === "web" ? "Web" : item.type === "erp" ? "ERP" : "Mobile"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.isLive && (
                        <span className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rule-dark text-accent-mint border border-emerald-900">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-light motion-safe:animate-pulse motion-reduce:animate-none"></span>
                          LIVE
                        </span>
                      )}
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit live website"
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-400 hover:text-accent-light transition-colors p-1 focus-visible:outline-2 focus-visible:outline-accent"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {item.screenshots && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openScreenshotModal(
                              item.screenshots || [],
                              item.title,
                              item.type === "erp" ? "Institutional ERP" : "Mobile ERP",
                              0
                            );
                          }}
                          className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 hover:bg-emerald-900 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
                        >
                          <Eye className="w-3 h-3" />
                          <span>{item.screenshots.length} Screens</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* 2. Main Card Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Sector Tag */}
                      <div className="flex items-center justify-between gap-2 h-5 shrink-0 mb-1.5">
                        <span className="text-[10px] font-semibold text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full shrink-0">
                          {item.sector}
                        </span>
                      </div>

                      {/* Title & Tagline Container */}
                      <div className="min-h-[64px] sm:min-h-[68px] shrink-0 mb-2 flex flex-col justify-start">
                        <h3 className="text-base sm:text-lg font-bold text-ink font-display group-hover:text-accent transition-colors leading-snug line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed line-clamp-2">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Collapsed State: Short Preview */}
                    {!isExpanded ? (
                      <div className="space-y-3 pt-1 flex flex-col justify-between flex-1">
                        {/* 2 Quick Highlight Metrics */}
                        {item.highlightMetrics && item.highlightMetrics.length > 0 && (
                          <div className="grid grid-cols-2 gap-2 shrink-0">
                            {item.highlightMetrics.slice(0, 2).map((m, mIdx) => (
                              <div
                                key={mIdx}
                                className="bg-paper rounded-lg p-2.5 border border-rule text-center shadow-2xs flex flex-col justify-center"
                              >
                                <span className="block text-xs sm:text-sm font-extrabold text-ink font-mono leading-tight">
                                  {m.value}
                                </span>
                                <span className="block text-[9px] text-slate-500 font-medium leading-tight mt-1 truncate">
                                  {m.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Delivered Functionality Box */}
                        <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-xs min-h-[76px] flex flex-col justify-center shrink-0">
                          <span className="text-[10px] font-semibold text-accent block mb-0.5">
                            Key outcome:
                          </span>
                          <p className="text-ink font-medium leading-relaxed line-clamp-2 text-[11px] sm:text-xs">
                            {item.deliveredFunctionality}
                          </p>
                        </div>

                        {/* Tech Badges Preview */}
                        <div className="flex flex-wrap gap-1.5 min-h-[26px] items-center shrink-0">
                          {item.techBadges.slice(0, 3).map((badge, bIdx) => (
                            <span
                              key={bIdx}
                              className="text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-rule/70 text-ink-2"
                            >
                              {badge}
                            </span>
                          ))}
                          {item.techBadges.length > 3 && (
                            <span className="text-[10px] font-sans font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                              +{item.techBadges.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Expanded State: Full Story Breakdown */
                      <div className="space-y-3.5 pt-1 animate-in fade-in duration-200">
                        {/* The Problem & What We Built */}
                        <div className="bg-paper p-3.5 rounded-xl border border-rule flex flex-col justify-between text-xs shadow-2xs">
                          <div className="mb-2">
                            <span className="text-[10px] font-semibold text-rose-600 block">
                              The problem:
                            </span>
                            <p className="text-muted leading-relaxed mt-0.5 text-xs">
                              {item.problem}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-rule">
                            <span className="text-[10px] font-semibold text-accent block">
                              What we built:
                            </span>
                            <p className="text-ink-2 leading-relaxed mt-0.5 text-xs font-medium">
                              {item.whatWeBuilt}
                            </p>
                          </div>
                        </div>

                        {/* Delivered Functionality Box */}
                        <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-xs">
                          <span className="text-[10px] font-semibold text-accent block">
                            Delivered functionality:
                          </span>
                          <p className="text-ink font-medium leading-snug mt-0.5 text-[11px] sm:text-xs">
                            {item.deliveredFunctionality}
                          </p>
                        </div>

                        {/* Showcase Container - Project Specific Features */}
                        {item.sysCode === "GAYATRI-STEEL-APP" && (
                          <div className="h-[192px] bg-surface-terminal rounded-xl p-3 sm:p-3.5 border border-rule-dark flex flex-col justify-between shrink-0">
                            <div className="flex items-center justify-between text-xs h-6">
                              <span className="text-accent-light font-semibold flex items-center gap-1.5 text-[11px]">
                                <Smartphone className="w-3.5 h-3.5 shrink-0" />
                                <span>Mobile ERP Suite &amp; Operations</span>
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openScreenshotModal(
                                    gayatriAppScreenshots,
                                    item.title,
                                    "Mobile ERP",
                                    0
                                  );
                                }}
                                className="text-[10px] text-accent-mint hover:underline font-medium cursor-pointer flex items-center gap-1 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                              >
                                <span>10 Screens</span>
                                <ExternalLink className="w-3 h-3" />
                              </button>
                            </div>

                            <div className="grid grid-cols-2 gap-1.5 my-auto">
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">MULTI-TENANT</span>
                                <span className="truncate block font-medium">5 Group Entities</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">STOCK SYNC</span>
                                <span className="truncate block font-medium">Auto-Weight Tally</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">METALLURGY</span>
                                <span className="truncate block font-medium">28+ Grades DB</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">DISPATCH</span>
                                <span className="truncate block font-medium text-emerald-300">Digital Challans</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 h-6">
                              <span className="flex items-center gap-1.5 text-accent-mint font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-light motion-safe:animate-pulse motion-reduce:animate-none"></span>
                                Shop-Floor Ready
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openScreenshotModal(
                                    gayatriAppScreenshots,
                                    item.title,
                                    "Mobile ERP",
                                    0
                                  );
                                }}
                                className="text-accent-mint hover:text-white font-medium transition-colors cursor-pointer flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                              >
                                <span>View Gallery (10)</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        )}

                        {item.sysCode === "BRAHM-SAMAJ-ERP" && (
                          <div className="h-[192px] bg-surface-terminal rounded-xl p-3 sm:p-3.5 border border-rule-dark flex flex-col justify-between shrink-0">
                            <div className="flex items-center justify-between text-xs h-6">
                              <span className="text-amber-400 font-semibold flex items-center gap-1.5 text-[11px]">
                                <Monitor className="w-3.5 h-3.5 shrink-0" />
                                <span>Brahm Samaj ERP Portal</span>
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openScreenshotModal(
                                    brahmSamajScreenshots,
                                    item.title,
                                    "Institutional ERP",
                                    0
                                  );
                                }}
                                className="text-[10px] text-amber-300 hover:underline font-medium cursor-pointer flex items-center gap-1 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                              >
                                <span>{item.screenshots?.length || 3} Screens</span>
                                <ExternalLink className="w-3 h-3" />
                              </button>
                            </div>

                            <div className="grid grid-cols-2 gap-1.5 my-auto">
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-amber-400 font-semibold text-[9px] block">DASHBOARD</span>
                                <span className="truncate block font-medium">Executive Board</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-amber-400 font-semibold text-[9px] block">CENSUS FORMS</span>
                                <span className="truncate block font-medium">Form GBS Series</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-amber-400 font-semibold text-[9px] block">PDF ENGINE</span>
                                <span className="truncate block font-medium">Photo ID Print</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-amber-400 font-semibold text-[9px] block">VERIFICATION</span>
                                <span className="truncate block font-medium text-amber-300">Gayatri Tech Dev</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 h-6">
                              <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-light motion-safe:animate-pulse motion-reduce:animate-none"></span>
                                Online · v1.0 Live
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openScreenshotModal(
                                    brahmSamajScreenshots,
                                    item.title,
                                    "Institutional ERP",
                                    0
                                  );
                                }}
                                className="text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                              >
                                <span>Inspect UI ({item.screenshots?.length || 3})</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        )}

                        {item.sysCode === "GAYATRI-STEEL-WEB" && (
                          <div className="h-[192px] bg-surface-terminal rounded-xl p-3 sm:p-3.5 border border-rule-dark flex flex-col justify-between shrink-0">
                            <div className="flex items-center justify-between text-xs h-6">
                              <span className="text-accent-mint font-semibold flex items-center gap-1.5 text-[11px]">
                                <Globe className="w-3.5 h-3.5 shrink-0" />
                                <span>Live Steel Portal &amp; Catalog</span>
                              </span>
                              <a
                                href="https://gayatri-steel.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[10px] text-accent-mint hover:underline font-medium flex items-center gap-1 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                              >
                                <span>Live Site</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>

                            <div className="grid grid-cols-2 gap-1.5 my-auto">
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">TOOL &amp; ALLOY</span>
                                <span className="truncate block font-medium">H13, D2, P20</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">FACILITIES</span>
                                <span className="truncate block font-medium">Rajkot &amp; Jamnagar</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">INQUIRIES</span>
                                <span className="truncate block font-medium">Digital Specs</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">DEPLOYMENT</span>
                                <span className="truncate block font-medium text-emerald-300">Vercel Prod</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 h-6">
                              <span className="flex items-center gap-1.5 text-accent-mint font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-light motion-safe:animate-pulse motion-reduce:animate-none"></span>
                                Production Ready
                              </span>
                              <span>Multi-Facility Sync</span>
                            </div>
                          </div>
                        )}

                        {item.sysCode === "TDR-STUDIO-FORGE" && (
                          <div className="h-[192px] bg-surface-terminal rounded-xl p-3 sm:p-3.5 border border-rule-dark flex flex-col justify-between shrink-0">
                            <div className="flex items-center justify-between text-xs h-6">
                              <span className="text-accent-mint font-semibold flex items-center gap-1.5 text-[11px]">
                                <Layers className="w-3.5 h-3.5 shrink-0" />
                                <span>Creative Digital Studio</span>
                              </span>
                              <a
                                href="https://tdrstudio.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[10px] text-accent-mint hover:underline font-medium flex items-center gap-1 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                              >
                                <span>Live Site</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>

                            <div className="grid grid-cols-2 gap-1.5 my-auto">
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">CINEMATIC 3D</span>
                                <span className="truncate block font-medium">WebGL &amp; Canvas</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">AI PRODUCTION</span>
                                <span className="truncate block font-medium">Storytelling</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">TECH STACK</span>
                                <span className="truncate block font-medium">React &amp; Vite</span>
                              </div>
                              <div className="bg-surface-terminal-card border border-surface-terminal-card-border rounded-lg p-2 text-[10px] sm:text-[11px] text-slate-200">
                                <span className="text-accent-mint font-semibold text-[9px] block">PERFORMANCE</span>
                                <span className="truncate block font-medium text-emerald-300">Sub-Second Load</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 h-6">
                              <span className="flex items-center gap-1.5 text-accent-mint font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-light motion-safe:animate-pulse motion-reduce:animate-none"></span>
                                Live Platform
                              </span>
                              <span>Creative Agency</span>
                            </div>
                          </div>
                        )}

                        {/* All 4 Highlight Metrics */}
                        {item.highlightMetrics && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1">
                            {item.highlightMetrics.map((m, mIdx) => (
                              <div
                                key={mIdx}
                                className="bg-paper rounded-lg p-2 border border-rule text-center shadow-2xs"
                              >
                                <span className="block text-xs sm:text-sm font-extrabold text-ink font-mono leading-tight">
                                  {m.value}
                                </span>
                                <span className="block text-[9px] text-slate-500 font-medium leading-tight mt-0.5">
                                  {m.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Client Feedback Quote snippet */}
                        {item.testimonial && (
                          <div className="bg-paper-2 p-3 rounded-xl border border-rule text-xs">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-ink text-xs">{item.testimonial.name}</span>
                                <span className="text-[10px] text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                                  Verified Client
                                </span>
                              </div>
                              <div className="flex text-amber-400">
                                {[...Array(item.testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-ink-2 italic text-[11px] leading-relaxed">
                              &ldquo;{item.testimonial.quote.trim()}&rdquo;
                            </p>
                          </div>
                        )}

                        {/* Micro-Badges Row */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {item.techBadges.map((badge, bIdx) => (
                            <span
                              key={bIdx}
                              className="text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-rule/70 text-ink-2"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Bottom Footer & Toggle Strip */}
                <div className="px-4 sm:px-5 pt-3.5 pb-4 sm:pb-5 border-t border-rule/80 flex flex-col justify-between shrink-0 bg-paper-2/90">
                  <div className="flex items-center justify-between text-[11px] text-muted leading-tight mb-3">
                    <span className="text-[11px] font-sans text-muted font-medium">
                      {item.relationship}
                    </span>
                    <span className="text-accent font-sans font-semibold text-xs shrink-0 flex items-center gap-1 hover:text-ink transition-colors">
                      {isExpanded ? (
                        <>
                          <span>Show less</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>Expand details</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </span>
                  </div>

                  {/* Primary CTA */}
                  <div onClick={(e) => e.stopPropagation()}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 sm:h-11 inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-ink hover:bg-accent text-white text-xs font-semibold tracking-wide transition-colors group/btn shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <span>Visit Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          openScreenshotModal(
                            item.screenshots || [],
                            item.title,
                            item.type === "erp" ? "Institutional ERP v2.4.0" : "Mobile ERP",
                            0
                          )
                        }
                        className="h-10 sm:h-11 inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-ink hover:bg-accent text-white text-xs font-semibold tracking-wide transition-colors shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {item.type === "erp" ? (
                          <Monitor className="w-3.5 h-3.5 text-amber-300" />
                        ) : (
                          <Smartphone className="w-3.5 h-3.5 text-accent-mint" />
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
              </article>
            );
          })}
        </div>
      </div>

      {/* Dynamic Screen Showcase Modal (Supports Phone Bezel AND Desktop ERP Window) */}
      {activeScreenshotIdx !== null && activeProjectScreenshots.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-app-title"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4 md:p-6 pt-safe pb-safe pl-safe pr-safe animate-fade-in"
          onClick={closeScreenshotModal}
        >
          <div
            className="relative bg-ink border border-rule-dark rounded-2xl sm:rounded-3xl max-w-5xl w-full p-3 sm:p-5 md:p-8 text-white overflow-hidden max-h-[96vh] max-h-[96dvh] flex flex-col overscroll-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-rule-dark pb-2.5 sm:pb-4 mb-2.5 sm:mb-4 shrink-0 gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 pr-1">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-rule-dark border border-rule-dark flex items-center justify-center text-accent-mint shrink-0">
                  {activeProjectScreenshots[activeScreenshotIdx]?.aspectRatio === "desktop" ? (
                    <Monitor className="w-4 sm:w-5 h-4 sm:h-5 text-amber-300" />
                  ) : (
                    <Smartphone className="w-4 sm:w-5 h-4 sm:h-5 text-accent-mint" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <h3 id="modal-app-title" className="font-bold text-xs sm:text-base md:text-lg font-display text-white truncate max-w-[170px] min-[360px]:max-w-[210px] min-[420px]:max-w-[280px] sm:max-w-none">
                      {activeProjectTitle}
                    </h3>
                    <span className="text-[9px] sm:text-[10px] bg-emerald-950 text-accent-mint px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-700 font-mono shrink-0">
                      {activeProjectBadge}
                    </span>
                    <span className="hidden min-[420px]:inline text-[9px] sm:text-[10px] bg-rule-dark text-slate-300 px-1.5 sm:px-2 py-0.5 rounded-full border border-slate-700 font-medium truncate max-w-[150px]">
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
                className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-rule-dark hover:bg-rule-dark/80 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 min-w-[32px] min-h-[32px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
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
                  <div className="relative w-full max-w-[540px] bg-slate-950 rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 shadow-2xl border-2 sm:border-4 border-slate-700 ring-1 ring-slate-600/50 shrink-0 select-none flex flex-col">
                    {/* Window Titlebar */}
                    <div className="h-6 sm:h-7 bg-slate-900 rounded-t-lg sm:rounded-t-xl px-2.5 sm:px-3 flex items-center justify-between border-b border-slate-800 text-[10px] font-sans text-slate-400 mb-1.5 shrink-0">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <span className="truncate max-w-[150px] min-[360px]:max-w-[200px] text-slate-300">
                        {activeProjectScreenshots[activeScreenshotIdx]?.title}
                      </span>
                      <span className="text-[9px] text-emerald-400 whitespace-nowrap">Live ERP</span>
                    </div>

                    {/* Window Canvas */}
                    <div className="w-full aspect-[16/9] sm:aspect-[16/10] rounded-lg overflow-hidden bg-black relative flex items-center justify-center">
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
                        className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-ink hover:bg-rule-dark text-white border border-accent-light/40 shadow-xl flex items-center justify-center transition-transform active:scale-90 cursor-pointer z-20 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                        aria-label="Previous screen"
                      >
                        <ChevronLeft className="w-4.5 h-4.5 text-accent-mint" />
                      </button>

                      {/* Quick Floating Next Button Inset in Canvas */}
                      <button
                        onClick={nextScreenshot}
                        className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-ink hover:bg-rule-dark text-white border border-accent-light/40 shadow-xl flex items-center justify-center transition-transform active:scale-90 cursor-pointer z-20 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                        aria-label="Next screen"
                      >
                        <ChevronRight className="w-4.5 h-4.5 text-accent-mint" />
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

                    <div className="w-full h-full rounded-[20px] sm:rounded-[26px] overflow-hidden bg-black relative">
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
                      className="absolute -left-3 min-[400px]:-left-4 sm:-left-5 top-1/2 -translate-y-1/2 w-8 h-8 min-[400px]:w-9 min-[400px]:h-9 sm:w-10 sm:h-10 rounded-full bg-ink/95 hover:bg-rule-dark text-white border border-accent-light/40 shadow-xl flex items-center justify-center transition-transform active:scale-90 cursor-pointer z-30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                      aria-label="Previous screen"
                    >
                      <ChevronLeft className="w-4.5 h-4.5 text-accent-mint" />
                    </button>

                    {/* Quick Floating Next Button Beside Mockup */}
                    <button
                      onClick={nextScreenshot}
                      className="absolute -right-3 min-[400px]:-right-4 sm:-right-5 top-1/2 -translate-y-1/2 w-8 h-8 min-[400px]:w-9 min-[400px]:h-9 sm:w-10 sm:h-10 rounded-full bg-ink/95 hover:bg-rule-dark text-white border border-accent-light/40 shadow-xl flex items-center justify-center transition-transform active:scale-90 cursor-pointer z-30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                      aria-label="Next screen"
                    >
                      <ChevronRight className="w-4.5 h-4.5 text-accent-mint" />
                    </button>
                  </div>
                )}

                {/* Mobile Quick Pagination Dots */}
                <div className="flex md:hidden items-center justify-center gap-1.5 mt-2.5">
                  {activeProjectScreenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreenshotIdx(idx)}
                      className={`transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                        activeScreenshotIdx === idx
                          ? "w-5 h-1.5 bg-accent-light rounded-full"
                          : "w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400 rounded-full"
                      }`}
                      aria-label={`Jump to screen ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Mobile Swipe Hint */}
                <div className="flex md:hidden items-center justify-center gap-1.5 mt-1 text-[10px] text-accent-mint font-sans">
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
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-rule-dark text-accent-mint text-[11px] sm:text-xs font-semibold">
                    <Layers className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    <span>{activeProjectScreenshots[activeScreenshotIdx]?.subtitle}</span>
                  </div>

                  <h4 className="text-base sm:text-xl md:text-2xl font-bold text-white font-display">
                    {activeProjectScreenshots[activeScreenshotIdx]?.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-surface-terminal-subtle p-3 sm:p-4 rounded-xl border border-rule-dark">
                    {activeProjectScreenshots[activeScreenshotIdx]?.feature}
                  </p>

                  {/* Highlights checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 pt-1 text-[11px] sm:text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent-light shrink-0" />
                      <span>Active Production Deployment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent-light shrink-0" />
                      <span>Tailored Shop-Floor Workflow</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent-light shrink-0" />
                      <span>Sub-second Response Times</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent-light shrink-0" />
                      <span>Direct Lead Engineer Architecture</span>
                    </div>
                  </div>

                  {/* Verified Client Feedback Callout */}
                  {activeCaseStudy?.testimonial && (
                    <div className="bg-surface-terminal-card rounded-xl p-3 sm:p-3.5 border border-rule-dark space-y-1.5 shadow-2xs">
                      <div className="flex items-center justify-between text-xs flex-wrap gap-1">
                        <div className="flex items-center gap-1.5 text-accent-mint font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                          <span>Client Feedback: {activeCaseStudy.testimonial.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {activeCaseStudy.testimonial.role.split(",")[0]}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-300 italic leading-relaxed">
                        &ldquo;{activeCaseStudy.testimonial.quote.trim()}&rdquo;
                      </p>
                    </div>
                  )}
                </div>

                {/* Navigation and Thumbnails */}
                <div className="pt-2.5 sm:pt-4 border-t border-rule-dark space-y-2.5 sm:space-y-3">
                  {/* Thumbnail Row */}
                  <div
                    ref={thumbnailContainerRef}
                    className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-thin no-scrollbar"
                  >
                    {activeProjectScreenshots.map((scr, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveScreenshotIdx(idx)}
                        className={`w-10 sm:w-12 h-14 sm:h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-transform duration-150 cursor-pointer relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          activeScreenshotIdx === idx
                            ? "border-accent-light scale-105 shadow-md shadow-emerald-900/50"
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
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-rule-dark hover:bg-rule-dark/80 text-white text-xs font-semibold transition-colors cursor-pointer min-h-[40px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>

                    <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                      {activeScreenshotIdx + 1} / {activeProjectScreenshots.length}
                    </span>

                    <button
                      onClick={nextScreenshot}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-accent hover:bg-accent-light hover:text-ink text-white text-xs font-semibold transition-colors cursor-pointer min-h-[40px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
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

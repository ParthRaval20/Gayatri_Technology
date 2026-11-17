"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  Smartphone,
  CheckCircle2,
  MessageSquareCode,
  Layers,
  RotateCcw,
  UtensilsCrossed,
  Briefcase,
  Scissors,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Search,
  TableProperties,
  LayoutGrid,
  ChevronDown,
  Zap,
} from "lucide-react";
import { DEMOS_DATA, DEMO_CATEGORIES } from "@/lib/demos-data";

export default function DemosClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Technical Matrix interactive states (Expandable teardowns & mobile representation)
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [mobileMatrixMode, setMobileMatrixMode] = useState<"cards" | "table">("cards");

  // Mobile carousel & accordion states (UI/UX Mobile Optimization)
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({});

  const toggleSpecs = (demoId: string) => {
    setExpandedSpecs((prev) => ({
      ...prev,
      [demoId]: !prev[demoId],
    }));
  };

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, offsetWidth } = carouselRef.current;
    const index = Math.round(scrollLeft / (offsetWidth * 0.88));
    setActiveCarouselIndex(Math.max(0, Math.min(index, filteredDemos.length - 1)));
  };

  const scrollToDemo = (index: number) => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.children[index] as HTMLElement | undefined;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveCarouselIndex(index);
    }
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setActiveCarouselIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // Interactive mini-states for live in-card widget previews (Doherty Threshold <100ms feedback)
  const [restaurantSampleDish, setRestaurantSampleDish] = useState("Scottish Sake Nigiri");
  const [b2bProduct, setB2bProduct] = useState("Insulated Tumbler");
  const [b2bQty, setB2bQty] = useState("100 pcs");
  const [salonStylist, setSalonStylist] = useState("Sofia Rahman");
  const [salonSlot, setSalonSlot] = useState("01:00 PM");
  const [preschoolProgram, setPreschoolProgram] = useState("Creative Kids (2.5 – 4 Yrs)");

  // Compute category counts dynamically
  const categoryCounts = DEMO_CATEGORIES.map((cat) => ({
    ...cat,
    count:
      cat.id === "all"
        ? DEMOS_DATA.length
        : DEMOS_DATA.filter((d) => d.category === cat.id).length,
  }));

  // Filter demos based on category and search query
  const filteredDemos = DEMOS_DATA.filter((demo) => {
    const matchesCategory =
      selectedCategory === "all" || demo.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      demo.title.toLowerCase().includes(q) ||
      demo.subtitle.toLowerCase().includes(q) ||
      demo.description.toLowerCase().includes(q) ||
      demo.clientType.toLowerCase().includes(q) ||
      demo.heroFeatureTag.toLowerCase().includes(q) ||
      demo.keyFeatures.some((f) => f.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-8 sm:py-16">
      <div className="screen-container">
        {/* Top Control Bar: Search Input & View Switcher (Hick's Law & Fitts's Law) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6">
          {/* Quick Keyword Filter Input */}
          <div className="relative flex-1 w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by workflow, feature, or tech (e.g. WhatsApp, booking, MOQ)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00875A] focus:ring-2 focus:ring-[#00875A]/20 transition-all min-h-[44px]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-mono px-1 py-0.5"
              >
                Clear
              </button>
            )}
          </div>

          {/* View Mode Toggle: Interactive Cards vs Architectural Matrix */}
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-1 bg-slate-200/80 p-1 rounded-xl w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                viewMode === "grid"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Interactive Cards</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                viewMode === "table"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <TableProperties className="w-3.5 h-3.5" />
              <span>Technical Matrix</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tablist (WCAG 2.1 AA Accessible Single Horizontal Scroll on Mobile) */}
        <div
          role="tablist"
          aria-label="Filter interactive demos by industry category"
          className="flex items-center gap-2 mb-6 sm:mb-10 pb-2 border-b border-slate-200 overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {categoryCounts.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                id={`demo-tab-${cat.id}`}
                aria-selected={isSelected}
                aria-controls="demos-grid-panel"
                tabIndex={0}
                onClick={() => handleSelectCategory(cat.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00875A] focus-visible:ring-offset-2 ${
                  isSelected
                    ? "bg-[#091C0F] text-white shadow-xs"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-950 border border-slate-300"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-white/20 text-white font-bold"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 5 Mandatory UI States: Empty State if search or category matches nothing */}
        {filteredDemos.length === 0 ? (
          <div
            id="demos-grid-panel"
            role="tabpanel"
            aria-labelledby={`demo-tab-${selectedCategory}`}
            className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-8 sm:p-12 text-center max-w-lg mx-auto space-y-4 my-8 shadow-xs"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#00875A] flex items-center justify-center mx-auto border border-emerald-100">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#091C0F]">
              No Demos Match Your Filter
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We continually build bespoke prototypes for specific client workflows. Try clearing your search keyword or reset the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#091C0F] hover:bg-[#122E1A] text-white text-xs font-bold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00875A] focus-visible:ring-offset-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : viewMode === "table" ? (
          /* Technical Matrix / Specification Table (AEO / GEO Table Standard with Mobile Spec Cards & Frozen Left Column) */
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mb-8">
            {/* Matrix Header Banner */}
            <div className="p-4 sm:p-6 bg-slate-50/90 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00875A]" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                    Architectural Benchmark Matrix
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    {filteredDemos.length} Prototypes Loaded
                  </span>
                </div>
                <h3 className="text-base sm:text-xl font-black text-[#091C0F] font-display">
                  Technical &amp; Business Specifications
                </h3>
                <p className="text-xs text-slate-600">
                  Verifiable performance benchmarks, direct lead pipelines, and zero-commission architecture across industries.
                </p>
              </div>

              {/* Mobile Sub-Mode Switcher (< md) */}
              <div className="flex md:hidden items-center justify-between pt-2 border-t border-slate-200/80">
                <span className="text-[11px] font-mono text-slate-500">Mobile Layout:</span>
                <div className="flex items-center gap-1 bg-slate-200/80 p-0.5 rounded-lg text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setMobileMatrixMode("cards")}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      mobileMatrixMode === "cards"
                        ? "bg-white text-slate-900 shadow-2xs font-bold"
                        : "text-slate-600"
                    }`}
                  >
                    Spec Cards
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileMatrixMode("table")}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      mobileMatrixMode === "table"
                        ? "bg-white text-slate-900 shadow-2xs font-bold"
                        : "text-slate-600"
                    }`}
                  >
                    Frozen Table
                  </button>
                </div>
              </div>
            </div>

            {/* 1. Mobile Spec Sheet Cards Mode (< md: active when mobileMatrixMode === "cards") */}
            <div className={`${mobileMatrixMode === "cards" ? "block md:hidden" : "hidden"} p-3.5 space-y-3.5 bg-slate-100/50`}>
              {filteredDemos.map((demo) => {
                const isExpanded = expandedRowId === demo.id;
                return (
                  <div
                    key={demo.id}
                    className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-3 transition-all"
                  >
                    {/* Top: Category + Title + Speed Pill */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                          style={{
                            backgroundColor: demo.colorTheme.badgeBg,
                            color: demo.colorTheme.badgeText,
                          }}
                        >
                          {demo.id === "restaurant" && <UtensilsCrossed className="w-2.5 h-2.5" />}
                          {demo.id === "b2b" && <Briefcase className="w-2.5 h-2.5" />}
                          {demo.id === "salon" && <Scissors className="w-2.5 h-2.5" />}
                          {demo.id === "preschool" && <GraduationCap className="w-2.5 h-2.5" />}
                          <span>{demo.categoryLabel}</span>
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mt-1 font-display leading-snug">
                          {demo.title}
                        </h4>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-mono text-[10px] font-bold">
                        <Zap className="w-3 h-3 text-emerald-600" />
                        <span>{demo.technicalSpecs[1]?.value || "380ms"}</span>
                      </span>
                    </div>

                    {/* 2-Column Key Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block font-semibold">
                          Primary Bottleneck
                        </span>
                        <span className="text-slate-800 font-medium text-[11px] leading-tight block mt-0.5 line-clamp-2">
                          {demo.businessProblemSolved}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block font-semibold">
                          Core Architecture
                        </span>
                        <span className="text-emerald-800 font-bold text-[11px] leading-tight block mt-0.5">
                          {demo.heroFeatureTag}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block font-semibold">
                          Lead Channel
                        </span>
                        <span className="text-slate-800 font-mono font-bold text-[11px] block mt-0.5">
                          {demo.technicalSpecs[2]?.value || "WhatsApp API"}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block font-semibold">
                          Codebase Ownership
                        </span>
                        <span className="text-slate-900 font-mono font-bold text-[11px] block mt-0.5">
                          100% Client IP
                        </span>
                      </div>
                    </div>

                    {/* Expandable Capabilities Drawer */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => setExpandedRowId(isExpanded ? null : demo.id)}
                        className="w-full text-left text-[11px] font-bold text-slate-700 hover:text-slate-900 flex items-center justify-between py-1.5 px-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? "Hide Technical Breakdown" : "Inspect Architectural Breakdown"}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform text-slate-500 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>

                      {isExpanded && (
                        <div className="p-3 mt-2 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-2.5">
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                              Built-in Capabilities:
                            </span>
                            <ul className="mt-1 space-y-1">
                              {demo.keyFeatures.map((f, i) => (
                                <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-2 border-t border-slate-800">
                            <span className="text-[10px] font-mono text-slate-400">Target Segment: </span>
                            <span className="text-[11px] text-slate-200 font-medium">{demo.clientType}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Mobile Action Row (Fitts's Law >= 44px) */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      <Link
                        href={demo.liveUrl}
                        className="min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#091C0F] text-white text-xs font-bold transition-all text-center"
                      >
                        <span>Launch Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={demo.previewUrl}
                        className="min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold transition-colors text-center"
                      >
                        <Smartphone className="w-3.5 h-3.5 text-slate-500" />
                        <span>Chassis View</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 2. Sticky-Column Comparison Table (Active on Desktop/Tablet, and Mobile when in "table" mode) */}
            <div className={`${mobileMatrixMode === "table" ? "block" : "hidden md:block"} overflow-x-auto`}>
              {/* Horizontal Swipe Prompt for Mobile Table mode */}
              <div className="flex md:hidden items-center justify-between px-4 py-2 bg-emerald-50/70 border-b border-emerald-100 text-[11px] font-mono text-emerald-900">
                <span>&larr; Left column frozen. Swipe row to compare &rarr;</span>
                <span className="font-bold">6 Columns</span>
              </div>

              <table className="w-full text-left text-xs text-slate-700 min-w-[760px] border-collapse">
                <thead className="bg-slate-50/95 backdrop-blur-md text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 sticky top-0 z-30">
                  <tr>
                    <th scope="col" className="p-3.5 sm:px-6 sticky left-0 z-30 bg-slate-50 border-r border-slate-200/80 shadow-[2px_0_6px_rgba(0,0,0,0.04)] min-w-[190px] sm:min-w-[240px]">
                      Industry &amp; Prototype
                    </th>
                    <th scope="col" className="p-3.5 sm:px-6 min-w-[200px]">
                      Primary Bottleneck Solved
                    </th>
                    <th scope="col" className="p-3.5 sm:px-6 min-w-[180px]">
                      Core Architecture
                    </th>
                    <th scope="col" className="p-3.5 sm:px-6 min-w-[150px]">
                      Benchmark Speed
                    </th>
                    <th scope="col" className="p-3.5 sm:px-6 min-w-[140px]">
                      Direct Lead Route
                    </th>
                    <th scope="col" className="p-3.5 sm:px-6 text-right min-w-[140px]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredDemos.map((demo) => {
                    const isExpanded = expandedRowId === demo.id;

                    return (
                      <React.Fragment key={demo.id}>
                        <tr className={`hover:bg-emerald-50/30 transition-colors group ${isExpanded ? "bg-emerald-50/40" : ""}`}>
                          {/* Sticky Left Column */}
                          <td className="p-3.5 sm:px-6 sticky left-0 z-20 bg-white group-hover:bg-slate-50/95 border-r border-slate-200/80 shadow-[2px_0_6px_rgba(0,0,0,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ backgroundColor: demo.colorTheme.primary }}
                              />
                              <div className="font-bold text-slate-900 text-sm leading-tight">
                                {demo.title}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold border border-slate-200/60 inline-flex items-center gap-1">
                                {demo.id === "restaurant" && <UtensilsCrossed className="w-2.5 h-2.5" />}
                                {demo.id === "b2b" && <Briefcase className="w-2.5 h-2.5" />}
                                {demo.id === "salon" && <Scissors className="w-2.5 h-2.5" />}
                                {demo.id === "preschool" && <GraduationCap className="w-2.5 h-2.5" />}
                                <span>{demo.categoryLabel}</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => setExpandedRowId(isExpanded ? null : demo.id)}
                                className="text-[10px] font-mono text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
                              >
                                {isExpanded ? "Close" : "Specs +"}
                              </button>
                            </div>
                          </td>

                          {/* Data Columns */}
                          <td className="p-3.5 sm:px-6 leading-relaxed max-w-xs">
                            <span className="text-slate-800 font-medium">
                              {demo.businessProblemSolved}
                            </span>
                          </td>

                          <td className="p-3.5 sm:px-6">
                            <span className="font-mono text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg font-bold border border-emerald-200/80 inline-flex items-center gap-1 text-[11px]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00875A]" />
                              <span>{demo.heroFeatureTag}</span>
                            </span>
                          </td>

                          <td className="p-3.5 sm:px-6 font-mono">
                            <div className="flex items-center gap-1.5 text-slate-900 font-black text-xs">
                              <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{demo.technicalSpecs[1]?.value || "~380ms"}</span>
                            </div>
                            <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                              100 Lighthouse &bull; 0% Lag
                            </div>
                          </td>

                          <td className="p-3.5 sm:px-6 font-mono text-slate-700">
                            <div className="font-bold text-xs text-slate-900">
                              {demo.technicalSpecs[2]?.value || "WhatsApp"}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Direct API / Webhook
                            </div>
                          </td>

                          {/* Actions Column */}
                          <td className="p-3.5 sm:px-6 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1.5">
                              <Link
                                href={demo.liveUrl}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#091C0F] hover:bg-[#122E1A] text-white text-xs font-bold transition-all shadow-2xs min-h-[34px]"
                                title={`Open full ${demo.title} demo`}
                              >
                                <span>Launch</span>
                                <ExternalLink className="w-3 h-3" />
                              </Link>

                              <Link
                                href={demo.previewUrl}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors border border-slate-300 min-h-[34px]"
                                title="Preview in device chassis simulator"
                              >
                                <Smartphone className="w-3 h-3 text-slate-500" />
                                <span className="hidden lg:inline">Frame</span>
                              </Link>
                            </div>
                          </td>
                        </tr>

                        {/* Expanded Detailed Teardown Row */}
                        {isExpanded && (
                          <tr className="bg-slate-900 text-slate-200">
                            <td colSpan={6} className="p-4 sm:p-6 space-y-3">
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                                <div className="md:col-span-4 space-y-1">
                                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                                    Target Enterprise Profile
                                  </div>
                                  <div className="text-sm font-bold text-white">
                                    {demo.clientType}
                                  </div>
                                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                                    {demo.description}
                                  </p>
                                </div>

                                <div className="md:col-span-5 space-y-1.5">
                                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                                    Engineered Capabilities in This Build
                                  </div>
                                  <ul className="grid grid-cols-1 gap-1 text-xs text-slate-300">
                                    {demo.keyFeatures.map((feat, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="md:col-span-3 space-y-2 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                                    Architecture Stack
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                    {["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript", "0% Lock-in"].map((tech) => (
                                      <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-700">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                  <a
                                    href={`https://wa.me/919328437392?text=${encodeURIComponent(demo.whatsappMessage)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00875A] hover:bg-[#00704A] text-white text-xs font-bold transition-all shadow-xs mt-2"
                                  >
                                    <MessageSquareCode className="w-3.5 h-3.5" />
                                    <span>Discuss Build</span>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Bespoke Asymmetrical Cards Grid (Mobile Horizontal Snap Carousel + Desktop Vertical Stack) */
          <div>
            {/* Mobile Carousel Status & Controls (< md) */}
            {filteredDemos.length > 1 && (
              <div className="flex md:hidden items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00875A] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-800">
                    Prototype {activeCarouselIndex + 1} of {filteredDemos.length}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono hidden min-[360px]:inline">
                    &bull; Swipe
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-1 mr-1">
                    {filteredDemos.map((d, idx) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => scrollToDemo(idx)}
                        aria-label={`Jump to ${d.title}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          activeCarouselIndex === idx
                            ? "w-4 bg-[#00875A]"
                            : "w-1.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    disabled={activeCarouselIndex === 0}
                    onClick={() => scrollToDemo(activeCarouselIndex - 1)}
                    className="w-7 h-7 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-slate-700 disabled:opacity-30 disabled:pointer-events-none text-xs font-bold transition-colors cursor-pointer"
                    aria-label="Previous prototype"
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    disabled={activeCarouselIndex === filteredDemos.length - 1}
                    onClick={() => scrollToDemo(activeCarouselIndex + 1)}
                    className="w-7 h-7 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-slate-700 disabled:opacity-30 disabled:pointer-events-none text-xs font-bold transition-colors cursor-pointer"
                    aria-label="Next prototype"
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            )}

            <div
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              id="demos-grid-panel"
              role="tabpanel"
              aria-labelledby={`demo-tab-${selectedCategory}`}
              className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar gap-4 md:gap-0 md:space-y-12 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
            >
              {filteredDemos.map((demo) => {
                const whatsappUrl = `https://wa.me/919328437392?text=${encodeURIComponent(
                  demo.whatsappMessage
                )}`;

                return (
                  <article
                    key={demo.id}
                    className="w-[88vw] sm:w-[84vw] md:w-full max-w-[440px] md:max-w-none shrink-0 snap-center md:shrink bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col lg:flex-row group"
                  >
                    {/* Left Column: Visual Snapshot & In-Card Interactive Preview */}
                    <div className="lg:w-5/12 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-4 sm:p-6 lg:p-8 flex flex-col justify-between space-y-3 sm:space-y-6">
                      <div>
                        {/* Demo Visual Header - Compact on mobile to save vertical space */}
                        <div className="relative h-32 sm:h-40 md:aspect-16/10 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xs mb-3 sm:mb-5">
                          <Image
                            src={demo.heroImage}
                            alt={demo.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover group-hover:scale-103 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span
                              className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold shadow-xs flex items-center gap-1.5"
                              style={{
                                backgroundColor: demo.colorTheme.badgeBg,
                                color: demo.colorTheme.badgeText,
                              }}
                            >
                              {demo.id === "restaurant" && <UtensilsCrossed className="w-3 h-3" />}
                              {demo.id === "b2b" && <Briefcase className="w-3 h-3" />}
                              {demo.id === "salon" && <Scissors className="w-3 h-3" />}
                              {demo.id === "preschool" && <GraduationCap className="w-3 h-3" />}
                              <span>{demo.categoryLabel}</span>
                            </span>
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                              PRIMARY WORKFLOW
                            </span>
                            <span className="text-xs sm:text-sm font-bold truncate block">
                              {demo.heroFeatureTag}
                            </span>
                          </div>
                        </div>

                        {/* In-Card Interactive Mini Demonstration Component */}
                        {demo.id === "restaurant" && (
                          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 sm:space-y-3">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                              <span className="font-bold text-slate-800">Direct QR &amp; Table Booking</span>
                              <span className="text-emerald-700 font-semibold">0% Commission</span>
                            </div>
                            <div className="text-[11px] text-slate-600 font-medium">
                              Select tasting course:
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {[
                                { name: "Scottish Sake Nigiri", price: "₹1,150" },
                                { name: "Toro Tasting", price: "₹2,600" },
                                { name: "Yakitori", price: "₹1,450" },
                              ].map((dish) => (
                                <button
                                  key={dish.name}
                                  type="button"
                                  onClick={() => setRestaurantSampleDish(dish.name)}
                                  className={`min-h-[34px] flex-1 min-w-[90px] px-2 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer text-center truncate ${
                                    restaurantSampleDish === dish.name
                                      ? "bg-[#091C0F] text-white font-bold"
                                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                  }`}
                                >
                                  {dish.name} &bull; {dish.price}
                                </button>
                              ))}
                            </div>
                            <div className="p-2 sm:p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[10px] font-mono text-slate-700 flex items-center justify-between">
                              <span className="truncate mr-2">Selected: <strong>{restaurantSampleDish}</strong></span>
                              <span className="text-[#00875A] font-bold shrink-0">Seat Ready ✓</span>
                            </div>
                          </div>
                        )}

                        {demo.id === "b2b" && (
                          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 sm:space-y-3">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                              <span className="font-bold text-slate-800">Wholesale MOQ &amp; Proof Engine</span>
                              <span className="text-indigo-600 font-semibold">Tiered Wholesale</span>
                            </div>
                            <div className="text-[11px] text-slate-600 font-medium">
                              Select merchandise &amp; bulk tier:
                            </div>
                            <div className="grid grid-cols-2 gap-1.5">
                              {["Insulated Tumbler", "Organic Hoodie", "Tech Backpack", "Curated Swag Box"].map((p) => (
                                <button
                                  key={p}
                                  type="button"
                                  onClick={() => setB2bProduct(p)}
                                  className={`min-h-[32px] px-2 py-1 rounded-lg text-[10px] font-medium text-left transition-all cursor-pointer truncate ${
                                    b2bProduct === p
                                      ? "bg-[#5B4DFB] text-white font-bold"
                                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                  }`}
                                >
                                  {p}
                                </button>
                              ))}
                            </div>
                            <div className="grid grid-cols-4 gap-1 pt-0.5">
                              {["50 pcs", "100 pcs", "250 pcs", "500 pcs"].map((q) => (
                                <button
                                  key={q}
                                  type="button"
                                  onClick={() => setB2bQty(q)}
                                  className={`min-h-[30px] py-1 rounded text-[10px] font-mono text-center transition-all cursor-pointer ${
                                    b2bQty === q
                                      ? "bg-[#091C0F] text-white font-bold"
                                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                  }`}
                                >
                                  {q}
                                </button>
                              ))}
                            </div>
                            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 text-slate-200 text-[10px] font-mono flex items-center justify-between">
                              <span className="truncate mr-2">
                                {b2bProduct} &bull; {b2bQty}
                              </span>
                              <span className="text-emerald-400 font-bold shrink-0">Proof Ready</span>
                            </div>
                          </div>
                        )}

                        {demo.id === "salon" && (
                          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 sm:space-y-3">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                              <span className="font-bold text-slate-800">24/7 Stylist Slot Booking</span>
                              <span className="text-emerald-700 font-semibold">Zero Phone Tag</span>
                            </div>
                            <div className="text-[11px] text-slate-600 font-medium">
                              Choose specialist &amp; pick appointment slot:
                            </div>
                            <div className="grid grid-cols-2 gap-1.5">
                              {["Sofia Rahman", "Mikhail Chen"].map((st) => (
                                <button
                                  key={st}
                                  type="button"
                                  onClick={() => setSalonStylist(st)}
                                  className={`min-h-[32px] py-1 px-2 rounded-lg text-[10px] font-semibold transition-all cursor-pointer text-center truncate ${
                                    salonStylist === st
                                      ? "bg-[#111827] text-white font-bold"
                                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                  }`}
                                >
                                  {st}
                                </button>
                              ))}
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                              {["10:00 AM", "01:00 PM", "04:00 PM"].map((slot) => (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setSalonSlot(slot)}
                                  className={`min-h-[30px] py-1 rounded text-[10px] font-mono text-center transition-all cursor-pointer ${
                                    salonSlot === slot
                                      ? "bg-[#00875A] text-white font-bold"
                                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                  }`}
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>
                            <div className="p-2 sm:p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[10px] font-mono text-slate-700 flex items-center justify-between">
                              <span className="truncate mr-2">Locked: {salonStylist} @ {salonSlot}</span>
                              <span className="text-[#00875A] font-bold shrink-0">Reserved ✓</span>
                            </div>
                          </div>
                        )}

                        {demo.id === "preschool" && (
                          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 sm:space-y-3">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                              <span className="font-bold text-slate-800">Campus Visit Scheduling</span>
                              <span className="text-orange-600 font-semibold">Direct Intake</span>
                            </div>
                            <div className="text-[11px] text-slate-600 font-medium">
                              Select age group for campus walkthrough:
                            </div>
                            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-1.5">
                              {[
                                { label: "Little Explorers (1.5-2.5 Y)", full: "Little Explorers (1.5 – 2.5 Yrs)" },
                                { label: "Creative Kids (2.5-4 Y)", full: "Creative Kids (2.5 – 4 Yrs)" },
                                { label: "Bright Learners (4-6 Y)", full: "Bright Learners (4 – 6 Yrs)" },
                              ].map((prog) => (
                                <button
                                  key={prog.full}
                                  type="button"
                                  onClick={() => setPreschoolProgram(prog.full)}
                                  className={`min-h-[32px] w-full py-1 px-2.5 rounded-lg text-[10px] font-semibold text-center transition-all cursor-pointer truncate ${
                                    preschoolProgram === prog.full
                                      ? "bg-[#FF7834] text-white font-bold"
                                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                  }`}
                                >
                                  {prog.label}
                                </button>
                              ))}
                            </div>
                            <div className="p-2 sm:p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-[10px] font-mono text-orange-950 flex items-center justify-between">
                              <span className="truncate mr-2">Tour Slot: Tomorrow 10:00 AM</span>
                              <span className="font-bold text-orange-700 shrink-0">Free Pass ✓</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="text-[10px] sm:text-[11px] text-slate-500 font-mono flex items-center gap-1.5 pt-1">
                        <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#00875A] shrink-0" />
                        <span>Live production React 19 engine</span>
                      </div>
                    </div>

                    {/* Right Column: Grounded Copy, Verifiable Tech Specs & Business Mechanics */}
                    <div className="lg:w-7/12 p-4 sm:p-6 lg:p-8 flex flex-col justify-between space-y-4 sm:space-y-6">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="space-y-1">
                          <div className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                            {demo.subtitle}
                          </div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#091C0F] tracking-tight font-display">
                            {demo.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {demo.description}
                        </p>

                        {/* Mobile Collapsible Specs Drawer (< md) */}
                        <div className="md:hidden pt-1">
                          <button
                            type="button"
                            onClick={() => toggleSpecs(demo.id)}
                            aria-expanded={!!expandedSpecs[demo.id]}
                            className="w-full min-h-[42px] flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 transition-colors cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00875A]" />
                              <span>{expandedSpecs[demo.id] ? "Hide Engineering Specs" : "View Specs, Bottleneck & Capabilities"}</span>
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                                expandedSpecs[demo.id] ? "rotate-180 text-emerald-700" : ""
                              }`}
                            />
                          </button>

                          {expandedSpecs[demo.id] && (
                            <div className="space-y-3 pt-3">
                              {/* Business Problem Solved Banner */}
                              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/90 text-xs text-slate-700 space-y-1">
                                <div className="font-bold text-[#091C0F] uppercase text-[10px] tracking-wider font-mono flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#00875A] shrink-0" />
                                  Business Problem Solved
                                </div>
                                <p className="text-slate-600 leading-relaxed text-xs">
                                  {demo.businessProblemSolved}
                                </p>
                              </div>

                              {/* Verifiable Technical Specs Strip */}
                              <div>
                                <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                                  Engineering Specifications:
                                </div>
                                <div className="grid grid-cols-3 gap-1.5">
                                  {demo.technicalSpecs.map((spec, sIdx) => (
                                    <div
                                      key={sIdx}
                                      className="p-2 rounded-lg bg-white border border-slate-200 text-left shadow-2xs overflow-hidden"
                                    >
                                      <div className="text-[9px] text-slate-500 font-medium leading-tight truncate">
                                        {spec.label}
                                      </div>
                                      <div className="text-xs font-black text-[#091C0F] font-mono mt-0.5 truncate">
                                        {spec.value}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Key Interactive Functions Included */}
                              <div className="space-y-1.5 pt-1">
                                <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                                  Key Capabilities in This Build:
                                </div>
                                <ul className="space-y-1 text-xs text-slate-700">
                                  {demo.keyFeatures.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00875A] shrink-0 mt-0.5" />
                                      <span className="leading-snug text-xs">{feat}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Desktop Expanded Specs (>= md: Always Visible) */}
                        <div className="hidden md:block space-y-4 pt-1">
                          {/* Business Problem Solved Banner */}
                          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 text-xs text-slate-700 space-y-1">
                            <div className="font-bold text-[#091C0F] uppercase text-[10px] tracking-wider font-mono flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#00875A] shrink-0" />
                              Business Problem Solved
                            </div>
                            <p className="text-slate-600 leading-relaxed text-xs">
                              {demo.businessProblemSolved}
                            </p>
                          </div>

                          {/* Verifiable Technical Specs Strip */}
                          <div>
                            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                              Engineering Specifications:
                            </div>
                            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                              {demo.technicalSpecs.map((spec, sIdx) => (
                                <div
                                  key={sIdx}
                                  className="p-2 sm:p-3 rounded-xl bg-white border border-slate-200 text-left shadow-2xs overflow-hidden"
                                >
                                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight truncate">
                                    {spec.label}
                                  </div>
                                  <div className="text-xs sm:text-base font-black text-[#091C0F] font-mono mt-0.5 truncate">
                                    {spec.value}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Key Interactive Functions Included */}
                          <div className="space-y-2 pt-1">
                            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                              Key Capabilities in This Build:
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs text-slate-700">
                              {demo.keyFeatures.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#00875A] shrink-0 mt-0.5" />
                                  <span className="leading-snug text-xs">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Card Action Footer (Fitts's Law >= 44px) - Two-button grid on mobile */}
                      <div className="pt-3 sm:pt-4 border-t border-slate-200 space-y-2 sm:space-y-3">
                        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:items-center sm:gap-2.5">
                          <Link
                            href={demo.liveUrl}
                            aria-label={`Launch full interactive demo for ${demo.title}`}
                            className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl bg-[#091C0F] hover:bg-[#122E1A] text-white text-xs sm:text-sm font-bold transition-all shadow-xs hover:shadow-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00875A] focus-visible:ring-offset-2 active:scale-98"
                          >
                            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">Launch Demo</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-60 hidden sm:inline" />
                          </Link>

                          <Link
                            href={demo.previewUrl}
                            aria-label={`Preview ${demo.title} inside device frame simulator`}
                            className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold transition-colors border border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00875A] focus-visible:ring-offset-2 active:scale-98"
                            title="Preview in Mobile / Tablet / Desktop simulator"
                          >
                            <Smartphone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                            <span className="truncate">Device Frame</span>
                          </Link>
                        </div>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Discuss custom website build like ${demo.title} on WhatsApp`}
                          className="hidden md:inline-flex w-full min-h-[44px] items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs sm:text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00875A] focus-visible:ring-offset-2 active:scale-98 text-center"
                        >
                          <MessageSquareCode className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span className="truncate">Discuss a Similar Build on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* Dedicated AEO & GEO FAQ Section (Answer Engine Optimized) */}
        <div className="mt-12 sm:mt-24 pt-10 sm:pt-12 border-t border-slate-200">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00875A] uppercase block mb-1">
              QUESTIONS &amp; ANSWERS
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-[#091C0F] font-display">
              Frequently Asked Technical Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1.5">
              Clear engineering facts on codebase ownership, custom integrations, and development timelines.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl">
            {[
              {
                q: "How are these custom Next.js prototypes different from ready-made WordPress or Shopify templates?",
                a: "Unlike WordPress or Shopify themes that rely on dozens of heavy third-party plugins that slow down mobile devices, our custom Next.js prototypes are compiled React Server Components with sub-400ms loading, zero plugin bloat, and bespoke database workflows.",
              },
              {
                q: "Can we deploy these interactive features (booking, carts, WhatsApp lead delivery) to our own domain?",
                a: "Yes. Every prototype represents production-ready architecture that we tailor to your exact business workflow, brand identity, and domain, with direct WhatsApp webhook alerts and 100% intellectual property ownership.",
              },
              {
                q: "Can these custom web apps integrate with our existing ERP, POS, or Google Sheets?",
                a: "Yes. Because every build uses modern TypeScript and API routes, we easily synchronize form submissions, reservations, and inventory with your existing ERP, billing software, CRM, or Google Sheets via webhooks and REST APIs.",
              },
              {
                q: "What is the typical development timeline for a custom Next.js website?",
                a: "Standard production websites and direct ordering portals typically deploy within 2 to 4 weeks from architecture sign-off, complete with speed optimization, SEO metadata, and staff onboarding.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer min-h-[48px]"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      activeFaq === index ? "rotate-180 text-[#00875A]" : ""
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Smartphone,
  Globe,
  Monitor,
  Building2,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { testimonials, Testimonial } from "@/lib/testimonials";

interface TestimonialsSectionProps {
  id?: string;
  showAllByDefault?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function TestimonialsSection({
  id = "testimonials",
  title = "What Business Owners & Leaders Say",
  subtitle = "Real feedback from the people who use our custom software on the factory floor, in the sales office, and across community administration every single day.",
  className = "",
}: TestimonialsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredTestimonials = testimonials.filter((item) => {
    if (activeFilter === "all") return true;
    return item.id === activeFilter;
  });

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setActiveIdx(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.firstElementChild?.clientWidth || 320;
    const newIdx = Math.round(scrollLeft / (cardWidth + 16));
    if (newIdx !== activeIdx && newIdx >= 0 && newIdx < filteredTestimonials.length) {
      setActiveIdx(newIdx);
    }
  };

  const scrollToIdx = (idx: number) => {
    const el = sliderRef.current;
    if (!el || !el.children[idx]) return;
    const targetChild = el.children[idx] as HTMLElement;
    targetChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveIdx(idx);
  };

  const scrollPrev = () => {
    const prevIdx = Math.max(0, activeIdx - 1);
    scrollToIdx(prevIdx);
  };

  const scrollNext = () => {
    const nextIdx = Math.min(filteredTestimonials.length - 1, activeIdx + 1);
    scrollToIdx(nextIdx);
  };

  const getProjectIcon = (type: "app" | "web" | "erp") => {
    switch (type) {
      case "app":
        return <Smartphone className="w-4 h-4 text-[#00875A]" />;
      case "web":
        return <Globe className="w-4 h-4 text-[#00875A]" />;
      case "erp":
        return <Monitor className="w-4 h-4 text-[#00875A]" />;
    }
  };

  return (
    <section
      id={id}
      aria-labelledby="testimonials-heading"
      className={`relative py-16 sm:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden ${className}`}
    >
      {/* Decorative background glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#47C56E]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 bg-[#00875A]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="screen-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00875A]" />
            <span>Verified Client Feedback • Real Deployments</span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#091C0F] tracking-tight leading-tight font-display"
          >
            {title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Social Proof Trust Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-[#334155]">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-[#091C0F] text-sm">5.0 / 5.0</span>
              <span className="text-slate-500 font-normal">Rating</span>
            </div>
            <div className="hidden sm:block text-slate-300">•</div>
            <div className="flex items-center gap-1.5 text-slate-600">
              <ShieldCheck className="w-4 h-4 text-[#00875A]" />
              <span>100% Production Implementations</span>
            </div>
            <div className="hidden sm:block text-slate-300">•</div>
            <div className="flex items-center gap-1.5 text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-[#00875A]" />
              <span>Zero Generic Template Software</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2 mb-6 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            type="button"
            onClick={() => handleFilterChange("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-2 border shrink-0 ${
              activeFilter === "all"
                ? "bg-[#091C0F] text-white border-[#091C0F] shadow-sm"
                : "bg-[#FAFCFF] text-[#475569] border-[#E2E8F0] hover:text-[#091C0F] hover:border-slate-300"
            }`}
          >
            <span>All Testimonials</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                activeFilter === "all" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
              }`}
            >
              3
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange("gayatri-steel-app")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-2 border shrink-0 ${
              activeFilter === "gayatri-steel-app"
                ? "bg-[#091C0F] text-white border-[#091C0F] shadow-sm"
                : "bg-[#FAFCFF] text-[#475569] border-[#E2E8F0] hover:text-[#091C0F] hover:border-slate-300"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
            <span>Gayatri Steel App</span>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">(Kaushik)</span>
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange("gayatri-steel-web")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-2 border shrink-0 ${
              activeFilter === "gayatri-steel-web"
                ? "bg-[#091C0F] text-white border-[#091C0F] shadow-sm"
                : "bg-[#FAFCFF] text-[#475569] border-[#E2E8F0] hover:text-[#091C0F] hover:border-slate-300"
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-teal-500" />
            <span>Gayatri Steel Website</span>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">(Vaibhav)</span>
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange("brahm-samaj-erp")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-2 border shrink-0 ${
              activeFilter === "brahm-samaj-erp"
                ? "bg-[#091C0F] text-white border-[#091C0F] shadow-sm"
                : "bg-[#FAFCFF] text-[#475569] border-[#E2E8F0] hover:text-[#091C0F] hover:border-slate-300"
            }`}
          >
            <Monitor className="w-3.5 h-3.5 text-amber-500" />
            <span>Brahm Samaj ERP</span>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">(Vishnu)</span>
          </button>
        </div>

        {/* Mobile Swipe Hint & Count Indicator */}
        <div className="flex md:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-3 px-1">
          <span>← Swipe horizontally to read reviews →</span>
          <span className="font-mono text-slate-500 text-[11px]">
            {activeIdx + 1} of {filteredTestimonials.length}
          </span>
        </div>

        {/* Testimonials Container: Horizontal on mobile, Grid on desktop */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-start"
        >
          {filteredTestimonials.map((item: Testimonial) => {
            const isExpanded = expandedId === item.id;

            return (
              <article
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                aria-expanded={isExpanded}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpand(item.id);
                  }
                }}
                className={`w-[84vw] max-w-[340px] sm:w-[360px] md:w-auto md:min-w-0 snap-center shrink-0 md:shrink bg-[#FAFCFF] rounded-2xl sm:rounded-3xl border transition-all duration-300 relative group cursor-pointer select-none flex flex-col justify-between ${
                  isExpanded
                    ? "border-[#47C56E] shadow-xl ring-1 ring-[#47C56E]/40 p-4 sm:p-6 bg-white min-h-[265px] sm:min-h-[275px]"
                    : "border-[#E2E8F0] shadow-xs hover:border-[#47C56E]/60 hover:shadow-md hover:-translate-y-0.5 p-4 sm:p-5 h-[265px] sm:h-[275px]"
                }`}
              >
                {/* Decorative Quote Icon Background */}
                <div
                  className="absolute top-4 right-4 text-slate-100 group-hover:text-emerald-50 transition-colors pointer-events-none -z-0"
                  aria-hidden="true"
                >
                  <Quote className="w-8 h-8 rotate-180 opacity-40" />
                </div>

                <div className="relative z-10 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Top Meta: Badge & Rating */}
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-2.5">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[11px] font-bold text-[#091C0F] shadow-2xs">
                        {getProjectIcon(item.projectType)}
                        <span>{item.projectBadge}</span>
                      </div>

                      <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                        <div className="flex text-amber-400">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-amber-900 font-mono ml-0.5">5.0</span>
                      </div>
                    </div>

                    {/* Client Profile Header */}
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div
                        className={`w-9 h-9 rounded-full ${item.avatarBgColor} text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 font-display`}
                      >
                        {item.avatarInitials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-extrabold text-sm text-[#091C0F] leading-tight truncate">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                            Verified Client
                          </span>
                        </div>
                        <p className="text-[11px] font-semibold text-[#00875A] truncate leading-tight mt-0.5">
                          {item.role}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate leading-tight flex items-center gap-1 mt-0.5">
                          <Building2 className="w-2.5 h-2.5 shrink-0 text-slate-400" />
                          <span className="truncate">{item.organization}</span>
                        </p>
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xs sm:text-sm font-bold text-[#091C0F] font-display tracking-tight leading-snug mb-2 h-[38px] sm:h-[42px] line-clamp-2">
                      &ldquo;{item.headline}&rdquo;
                    </h3>

                    {/* Collapsed Snippet vs Expanded Full Story */}
                    {!isExpanded && (
                      <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed line-clamp-2 italic mb-2 h-[34px]">
                        &ldquo;{item.shortSnippet}&rdquo;
                      </p>
                    )}
                  </div>

                  {isExpanded && (
                    <div className="space-y-3 pt-2 border-t border-[#E2E8F0] mt-2 animate-in fade-in duration-200">
                      <blockquote className="text-xs sm:text-sm text-[#334155] leading-relaxed italic border-l-2 border-[#47C56E] pl-2.5 py-0.5">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>

                      {/* Impact Metrics Strip */}
                      <div className="grid grid-cols-3 gap-1.5 pt-1">
                        {item.impactMetrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-white rounded-lg p-1.5 sm:p-2 border border-[#E2E8F0] text-center shadow-2xs"
                          >
                            <span className="block text-xs sm:text-sm font-extrabold text-[#091C0F] font-mono leading-tight">
                              {metric.value}
                            </span>
                            <span className="block text-[9px] text-slate-500 font-medium leading-tight mt-0.5">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Location & Verification footer */}
                      <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1.5 border-t border-dashed border-[#E2E8F0]">
                        <span className="flex items-center gap-1 font-medium text-emerald-700">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{item.verifiedText}</span>
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-2.5 h-2.5" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Case study direct link */}
                      <div className="pt-0.5" onClick={(e) => e.stopPropagation()}>
                        <Link
                          href={`/portfolio?project=${item.sysCode.toLowerCase()}#case-studies`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#00875A] hover:text-[#091C0F] transition-colors group/link cursor-pointer min-h-[30px]"
                        >
                          <span>View Case Study & Screens</span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Toggle Bar */}
                <div className="relative z-10 pt-2.5 mt-2 border-t border-[#E2E8F0]/80 flex items-center justify-between text-[11px] font-bold text-[#00875A] group-hover:text-[#091C0F] transition-colors">
                  <span className="flex items-center gap-1">
                    {isExpanded ? "Show less" : "Read full review"}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      isExpanded
                        ? "bg-[#091C0F] text-white"
                        : "bg-emerald-50 text-[#00875A] group-hover:bg-emerald-100"
                    }`}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile Pagination Dots & Arrow Controls */}
        {filteredTestimonials.length > 1 && (
          <div className="flex md:hidden items-center justify-between pt-3 px-1">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToIdx(idx)}
                  className={`transition-all duration-200 cursor-pointer ${
                    activeIdx === idx
                      ? "w-6 h-2 bg-[#00875A] rounded-full"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400 rounded-full"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={activeIdx === 0}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 disabled:opacity-30 transition-colors cursor-pointer active:scale-95 shadow-2xs"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={activeIdx === filteredTestimonials.length - 1}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 disabled:opacity-30 transition-colors cursor-pointer active:scale-95 shadow-2xs"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Banner with Direct Callout */}
        <div className="mt-12 sm:mt-16 bg-[#091C0F] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#163820]">
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#86EFAC] font-semibold">
              Practical Software • Zero Fluff
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white font-display">
              Have a workflow that ready-made software fails to support?
            </h3>
            <p className="text-xs sm:text-sm text-[#E2E8F0]/80">
              We sit with your team, study how you actually operate, and build custom systems that make your day-to-day work faster.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/portfolio"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs sm:text-sm font-bold text-white transition-all min-h-[44px] flex items-center gap-2 cursor-pointer"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#47C56E] hover:bg-[#3db361] text-[#091C0F] text-xs sm:text-sm font-extrabold transition-all shadow-md hover:shadow-lg min-h-[44px] flex items-center gap-2 cursor-pointer"
            >
              <span>Discuss Your Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

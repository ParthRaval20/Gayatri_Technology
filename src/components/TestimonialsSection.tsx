"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Globe,
  Monitor,
  Building2,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Factory,
  Landmark,
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
  subtitle = "Direct feedback from the operators, commercial executives, and trust administrators who rely on our delivered software every day.",
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
        return <Smartphone className="w-4 h-4 text-accent" />;
      case "web":
        return <Globe className="w-4 h-4 text-accent" />;
      case "erp":
        return <Monitor className="w-4 h-4 text-accent" />;
    }
  };

  const getClientLogoMark = (item: Testimonial) => {
    if (item.clientType === "institutional" || item.id === "brahm-samaj-erp") {
      return (
        <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-300 border border-amber-800/80 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
          <Landmark className="w-5 h-5 text-amber-300" />
        </div>
      );
    }
    if (item.id === "gayatri-steel-app") {
      return (
        <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-800/80 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
          <Factory className="w-5 h-5 text-accent-mint" />
        </div>
      );
    }
    return (
      <div className="w-10 h-10 rounded-xl bg-teal-950 text-teal-300 border border-teal-800/80 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
        <Building2 className="w-5 h-5 text-teal-300" />
      </div>
    );
  };

  return (
    <section
      id={id}
      aria-labelledby="testimonials-heading"
      className={`relative py-16 sm:py-24 bg-paper border-b border-rule overflow-hidden ${className}`}
    >
      <div className="screen-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink text-white text-xs font-semibold shadow-2xs mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-mint" />
            <span className="text-[11px] font-medium">Production verified client feedback</span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-tight font-display"
          >
            {title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl mt-3 leading-relaxed">
            {subtitle}
          </p>

          {/* Social Proof Trust Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-ink text-sm">5.0</span>
              <span className="text-muted font-normal">Average Rating</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Production Systems Running Daily</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-start gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2 mb-6 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scroll-reveal delay-100">
          <button
            type="button"
            onClick={() => handleFilterChange("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-accent cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-2 border shrink-0 ${
              activeFilter === "all"
                ? "bg-ink text-white border-ink shadow-sm"
                : "bg-paper-2 text-muted border-rule hover:text-ink hover:border-slate-300"
            }`}
          >
            <span>All Case Reviews</span>
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
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-accent cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-2 border shrink-0 ${
              activeFilter === "gayatri-steel-app"
                ? "bg-ink text-white border-ink shadow-sm"
                : "bg-paper-2 text-muted border-rule hover:text-ink hover:border-slate-300"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
            <span>Gayatri Steel App</span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">(Kaushik Patel)</span>
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange("gayatri-steel-web")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-accent cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-2 border shrink-0 ${
              activeFilter === "gayatri-steel-web"
                ? "bg-ink text-white border-ink shadow-sm"
                : "bg-paper-2 text-muted border-rule hover:text-ink hover:border-slate-300"
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-teal-500" />
            <span>Gayatri Steel Web</span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">(Vaibhav Mehta)</span>
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange("brahm-samaj-erp")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-accent cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-2 border shrink-0 ${
              activeFilter === "brahm-samaj-erp"
                ? "bg-ink text-white border-ink shadow-sm"
                : "bg-paper-2 text-muted border-rule hover:text-ink hover:border-slate-300"
            }`}
          >
            <Monitor className="w-3.5 h-3.5 text-amber-500" />
            <span>Brahm Samaj ERP</span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">(Vishnu Vyas)</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-start scroll-reveal delay-150"
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
                className={`w-[88vw] max-w-[360px] sm:w-[380px] md:w-auto md:min-w-0 snap-center rounded-2xl sm:rounded-3xl border p-5 sm:p-7 flex flex-col justify-between transition-colors motion-safe:transition-transform duration-300 group shrink-0 md:shrink cursor-pointer shadow-xs select-none focus-visible:outline-2 focus-visible:outline-accent ${
                  isExpanded
                    ? "bg-paper border-accent-light shadow-xl ring-1 ring-accent-light/40"
                    : "bg-paper-2 border-rule hover:border-accent-light/60 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <div className="relative z-10 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Top Meta: Badge & Rating */}
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-paper border border-rule text-[11px] font-bold text-ink shadow-2xs">
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

                    {/* Client Profile Header with Real Organization Emblem */}
                    <div className="flex items-center gap-3 mb-3.5">
                      {getClientLogoMark(item)}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-extrabold text-sm sm:text-base text-ink leading-tight truncate">
                            {item.fullName}
                          </span>
                        </div>
                        <p className="text-[11px] font-semibold text-accent truncate leading-tight mt-0.5">
                          {item.role}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate leading-tight flex items-center gap-1 mt-0.5">
                          <Building2 className="w-2.5 h-2.5 shrink-0 text-slate-400" />
                          <span className="truncate">{item.organization}</span>
                        </p>
                      </div>
                    </div>

                    {/* Headline without extra inner spacing */}
                    <h3 className="text-xs sm:text-sm font-bold text-ink font-display tracking-tight leading-snug mb-2.5">
                      &ldquo;{item.headline.trim()}&rdquo;
                    </h3>

                    {/* Collapsed Snippet */}
                    {!isExpanded && (
                      <p className="text-[11px] sm:text-xs text-muted leading-relaxed line-clamp-3 italic mb-2">
                        &ldquo;{item.shortSnippet.trim()}&rdquo;
                      </p>
                    )}
                  </div>

                  {isExpanded && (
                    <div className="space-y-3 pt-3 border-t border-rule mt-2 animate-in fade-in duration-200">
                      <blockquote className="text-xs sm:text-sm text-ink-2 leading-relaxed italic border-l-2 border-accent-light pl-2.5 py-0.5">
                        &ldquo;{item.quote.trim()}&rdquo;
                      </blockquote>

                      {/* Impact Metrics Strip */}
                      <div className="grid grid-cols-3 gap-1.5 pt-1">
                        {item.impactMetrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-paper rounded-lg p-1.5 sm:p-2 border border-rule text-center shadow-2xs"
                          >
                            <span className="block text-xs sm:text-sm font-extrabold text-ink font-mono leading-tight">
                              {metric.value}
                            </span>
                            <span className="block text-[9px] text-slate-500 font-medium leading-tight mt-0.5">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Location & Verification footer */}
                      <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1.5 border-t border-dashed border-rule">
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
                          className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:text-ink transition-colors group/link cursor-pointer min-h-[30px] focus-visible:outline-2 focus-visible:outline-accent"
                        >
                          <span>View Case Study &amp; Screens</span>
                          <ArrowRight className="w-3 h-3 motion-safe:transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Toggle Bar */}
                <div className="relative z-10 pt-3 mt-3 border-t border-rule/80 flex items-center justify-between text-[11px] font-bold text-accent group-hover:text-ink transition-colors">
                  <span className="flex items-center gap-1">
                    {isExpanded ? "Show less" : "Read full review"}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      isExpanded
                        ? "bg-ink text-white"
                        : "bg-emerald-50 text-accent group-hover:bg-emerald-100"
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
            <div className="flex items-center gap-1.5">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToIdx(idx)}
                  className={`transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    activeIdx === idx
                      ? "w-6 h-2 bg-accent rounded-full"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400 rounded-full"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

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
      </div>
    </section>
  );
}
"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroTypewriter from "./HeroTypewriter";
import {
  ArrowRight,
  Eye,
  CheckCircle2,
  FileText,
  Zap,
  ShieldCheck,
  Layers,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface HeroShowcaseItem {
  id: string;
  tabLabel: string;
  shortTab: string;
  badge: string;
  deviceType: "phone" | "desktop";
  imageSrc: string;
  imageAlt: string;
  backDoc: {
    title: string;
    badge: string;
    meta1Label: string;
    meta1Val: string;
    meta2Label: string;
    meta2Val: string;
    itemLabel: string;
    itemVal: string;
    weightLabel: string;
    weightVal: string;
  };
  callout: {
    icon: React.ElementType;
    title: string;
    desc: string;
    highlight: string;
    statPrefix?: string;
    stat: string;
  };
  linkHref: string;
}

const showcases: HeroShowcaseItem[] = [
  {
    id: "steel-app",
    tabLabel: "Gayatri Steel ERP",
    shortTab: "01 Steel ERP",
    badge: "MOBILE ERP",
    deviceType: "phone",
    imageSrc: "/portfolio/gayatri-app/8-digital-challan.png",
    imageAlt: "Gayatri Steel Mobile Digital Delivery Challan Screen",
    backDoc: {
      title: "TAX DELIVERY CHALLAN",
      badge: "DISPATCHED",
      meta1Label: "Entity",
      meta1Val: "Gayatri Steel (Rajkot)",
      meta2Label: "Vehicle No",
      meta2Val: "GJ-03-BW-8419",
      itemLabel: "Item • Specification",
      itemVal: "EN31 Round Bar (Ø90 × 2100mm)",
      weightLabel: "Computed Weight",
      weightVal: "1,048.5 kg",
    },
    callout: {
      icon: Zap,
      title: "METALLURGY ENGINE",
      desc: "Auto-calculated from",
      highlight: "7.85 g/cm³",
      statPrefix: "in ",
      stat: "<15ms",
    },
    linkHref: "/portfolio?project=gayatri-steel-app#case-studies",
  },
  {
    id: "brahm-samaj",
    tabLabel: "Brahm Samaj ERP",
    shortTab: "02 Samaj Portal",
    badge: "GOVERNANCE ERP",
    deviceType: "desktop",
    imageSrc: "/portfolio/brahm-samaj/1-dashboard-portal.png",
    imageAlt: "Gujarat Brahm Samaj Executive ERP Dashboard",
    backDoc: {
      title: "MEMBER CENSUS REGISTRY",
      badge: "OFFICIAL GT",
      meta1Label: "Chapter",
      meta1Val: "Sabarkantha (Idar)",
      meta2Label: "Form No",
      meta2Val: "GBS-000001",
      itemLabel: "System Architecture",
      itemVal: "Native Gujarati Unicode & QR ID",
      weightLabel: "Local Query",
      weightVal: "<30ms DB",
    },
    callout: {
      icon: ShieldCheck,
      title: "DATA SOVEREIGNTY",
      desc: "Local SQLite offline autonomy",
      highlight: "Zero Cloud Rent",
      statPrefix: "• ",
      stat: "100% Owned",
    },
    linkHref: "/portfolio?project=brahm-samaj-erp#case-studies",
  },
  {
    id: "metals-web",
    tabLabel: "Metals B2B Platform",
    shortTab: "03 Metals B2B",
    badge: "B2B CATALOG",
    deviceType: "phone",
    imageSrc: "/portfolio/gayatri-app/4-chemical-composition.png",
    imageAlt: "Tool Steel Chemical Composition & Standards Matrix",
    backDoc: {
      title: "CROSS-STANDARD SPEC",
      badge: "28+ GRADES",
      meta1Label: "Steel Standard",
      meta1Val: "DIN 1.2083 ESR (P20)",
      meta2Label: "Equivalents",
      meta2Val: "AISI 420 • JIS SUS420",
      itemLabel: "Alloy Chemistry Matrix",
      itemVal: "C: 0.38-0.42% • Cr: 12.5-13.5%",
      weightLabel: "Sales Hand-off",
      weightVal: "1-Tap RFQ",
    },
    callout: {
      icon: Layers,
      title: "COMMERCIAL RFQ ENGINE",
      desc: "Prefilled dimension quotes direct to",
      highlight: "Sales Desk",
      statPrefix: "via ",
      stat: "WhatsApp API",
    },
    linkHref: "/portfolio?project=gayatri-steel-web#case-studies",
  },
];

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [revealedStep, setRevealedStep] = useState<number>(0);
  const isMounted = useIsClient();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const current = showcases[activeIdx];
  const CalloutIcon = current.callout.icon;

  // Auto-cycle through project proofs every 5.5s
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % showcases.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      // Swiped left -> next
      setActiveIdx((prev) => (prev + 1) % showcases.length);
    } else if (distance < -40) {
      // Swiped right -> prev
      setActiveIdx((prev) => (prev === 0 ? showcases.length - 1 : prev - 1));
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-6 pb-8 sm:pt-12 sm:pb-16 lg:py-16 bg-paper border-b border-rule"
    >
      <div className="screen-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols — Left-Aligned Human-Engineered Hero) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Small monospace eyebrow */}
            <div className="inline-flex items-center gap-1.5 min-[380px]:gap-2 font-mono text-[10px] min-[380px]:text-[11px] font-bold tracking-wider uppercase text-accent bg-accent/10 border border-accent/25 px-2.5 min-[380px]:px-3 py-1 rounded-full max-w-full">
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <span>RAJKOT, GUJARAT &bull; CUSTOM ERP &amp; INDUSTRIAL SOFTWARE</span>
            </div>

            {/* Main Headline with Industrial Typewriter Reveal Engine */}
            <HeroTypewriter onStepChange={setRevealedStep} />

            {/* Subtitle with Staggered Fade-in */}
            <p
              className={`text-[length:var(--text-lead)] text-ink-2 max-w-2xl leading-relaxed transition-all duration-700 ease-out ${
                !isMounted || revealedStep >= 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3 pointer-events-none"
              }`}
            >
              We build custom websites, ERP systems, business applications and digital products for
              growing businesses. Instead of forcing your workflow into generic software, we build
              around the way your team actually works.
            </p>

            {/* Buttons (2 Max: Solid dark/green + Clean outline) with Staggered Fade-in */}
            <div
              className={`flex flex-col min-[440px]:flex-row min-[440px]:items-center gap-3 pt-2 transition-all duration-700 ease-out delay-75 ${
                !isMounted || revealedStep >= 2
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3 pointer-events-none"
              }`}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 bg-ink hover:bg-slate-900 text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-black/10 transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 active:scale-95 group min-h-[44px] sm:min-h-[48px] text-center"
              >
                <span>Tell Us What You Need</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-light group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-paper text-ink border border-rule px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold hover:bg-paper-2 hover:border-ink transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 min-h-[44px] sm:min-h-[48px] text-center"
              >
                <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" />
                <span>Inspect Live Systems (4)</span>
              </Link>
            </div>

            {/* Trust Footer: Clean mobile list, inline on desktop with Staggered Fade-in */}
            <div
              className={`pt-3 border-t border-rule text-xs text-muted flex flex-col min-[520px]:flex-row min-[520px]:items-center gap-2 min-[520px]:gap-4 transition-all duration-700 ease-out delay-150 ${
                !isMounted || revealedStep >= 3
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Direct access to lead engineers</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>100% source code ownership</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Built for mobile and shop floor</span>
              </span>
            </div>
          </div>

          {/* Right Column (5 cols — Synchronized Live Project Proof Switcher) */}
          <div
            className={`lg:col-span-5 relative flex flex-col items-center justify-center pt-2 lg:pt-0 transition-all duration-1000 ease-out ${
              !isMounted || revealedStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Ambient subtle backdrop */}
            <div className="absolute inset-0 sm:-inset-4 bg-gradient-to-tr from-accent/15 via-paper-2 to-transparent rounded-3xl -z-10 blur-xl pointer-events-none" />

            {/* Mobile Swipe / Tap Indicator */}
            <div className="w-full max-w-[460px] flex lg:hidden items-center justify-between text-xs font-semibold text-accent mb-2 px-1">
              <span className="inline-flex items-center gap-1">
                <span>Swipe or tap to preview</span>
                <span className="text-muted">&rarr;</span>
              </span>
              <span className="text-muted font-mono text-[11px]">3 live systems</span>
            </div>

            {/* Top Carousel Navigation Micro-Pills */}
            <div className="w-full max-w-[460px] flex items-center justify-between gap-1.5 mb-3 px-1">
              <div className="flex items-center gap-1 sm:gap-1.5" role="tablist" aria-label="System showcases">
                {showcases.map((sc, sIdx) => {
                  const isActive = activeIdx === sIdx;
                  return (
                    <button
                      key={sc.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveIdx(sIdx)}
                      className={`relative px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold transition-colors cursor-pointer min-h-[32px] flex items-center focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${isActive
                          ? "bg-ink text-accent-mint shadow-xs"
                          : "bg-paper-2 text-ink-2 hover:bg-paper-3"
                        }`}
                      aria-label={`Show ${sc.tabLabel}`}
                    >
                      <span>{sc.shortTab}</span>
                      {isActive && (
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] bg-accent-light rounded-full transition-transform motion-reduce:animate-none ${isPaused ? "w-full" : "w-full animate-progress"
                            }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev === 0 ? showcases.length - 1 : prev - 1))}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-paper-2 hover:bg-paper-3 text-ink flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
                  aria-label="Previous project proof"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev + 1) % showcases.length)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-paper-2 hover:bg-paper-3 text-ink flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
                  aria-label="Next project proof"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Proof Composition Stage */}
            <div className="relative w-full max-w-[460px] h-[340px] sm:h-[460px]">
              {/* Back Sheet: Matching Physical / Official Document */}
              <div
                key={`back-${current.id}`}
                className="absolute top-1 sm:top-2 right-1 sm:right-3 w-[78%] min-[390px]:w-[80%] sm:w-[90%] bg-paper rounded-xl sm:rounded-2xl border border-rule shadow-sm p-3 sm:p-5 text-ink rotate-1.5 sm:rotate-3 translate-x-0 sm:translate-x-6 select-none transition-opacity duration-300 animate-fade-in"
              >
                <div className="flex items-center justify-between border-b border-rule pb-1.5 sm:pb-2 mb-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent" />
                    <span className="text-[10px] min-[360px]:text-[11px] font-mono font-bold tracking-tight text-ink truncate max-w-[110px] min-[360px]:max-w-[130px] sm:max-w-none">
                      {current.backDoc.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20 shrink-0">
                    {current.backDoc.badge}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] text-ink-2 mb-2 font-mono">
                  <div>
                    <span className="block text-muted text-[10px]">{current.backDoc.meta1Label}</span>
                    <span className="font-bold text-ink truncate block">{current.backDoc.meta1Val}</span>
                  </div>
                  <div className="text-right sm:text-left">
                    <span className="block text-muted text-[10px]">{current.backDoc.meta2Label}</span>
                    <span className="font-bold text-ink block truncate">{current.backDoc.meta2Val}</span>
                  </div>
                </div>

                {/* Back sheet line item */}
                <div className="bg-paper-2 rounded-lg p-2 sm:p-2.5 border border-rule text-[10px] sm:text-[11px] space-y-1 font-mono">
                  <div className="flex justify-between text-muted text-[10px]">
                    <span>{current.backDoc.itemLabel}</span>
                    <span className="text-right">{current.backDoc.weightLabel}</span>
                  </div>
                  <div className="flex justify-between font-bold text-ink pt-0.5">
                    <span className="truncate max-w-[100px] min-[390px]:max-w-[130px] sm:max-w-[210px]">{current.backDoc.itemVal}</span>
                    <span className="text-accent shrink-0 font-bold ml-1 tabular-nums">{current.backDoc.weightVal}</span>
                  </div>
                </div>
              </div>

              {/* Front Frame: Adaptive Smartphone Bezel vs Desktop Window Frame */}
              {current.deviceType === "desktop" ? (
                /* Desktop / Tablet ERP Portal Window */
                <div
                  key={`front-desktop-${current.id}`}
                  className="absolute bottom-2 sm:bottom-6 left-1 sm:left-2 w-[84%] min-[390px]:w-[86%] sm:w-[360px] bg-paper-dark rounded-xl sm:rounded-2xl p-1.5 sm:p-2 border-2 sm:border-3 border-rule-dark ring-1 ring-white/10 -rotate-1 sm:-rotate-2 select-none z-20 transition-transform duration-300 animate-scale-in"
                >
                  {/* Window Titlebar */}
                  <div className="h-5 sm:h-6 bg-ink rounded-t-lg px-2 sm:px-2.5 flex items-center justify-between border-b border-rule-dark text-[10px] font-sans text-paper-2 mb-1 shrink-0">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="truncate max-w-[120px] sm:max-w-[170px] text-paper-2 text-[10px] sm:text-[11px] font-mono">
                      brahm-samaj.portal: v2.4.0
                    </span>
                  </div>

                  <div className="w-full aspect-[16/10] rounded-lg overflow-hidden bg-paper-dark relative">
                    <Image
                      src={current.imageSrc}
                      alt={current.imageAlt}
                      fill
                      sizes="(max-width: 640px) 300px, 360px"
                      priority
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              ) : (
                /* Smartphone Bezel Frame */
                <div
                  key={`front-phone-${current.id}`}
                  className="absolute bottom-2 sm:bottom-6 left-1 sm:left-2 w-[148px] min-[390px]:w-[165px] sm:w-[205px] bg-black rounded-[24px] sm:rounded-[32px] p-1.5 sm:p-2.5 border-3 sm:border-4 border-rule-dark -rotate-1 sm:-rotate-2 select-none z-20 transition-transform duration-300 animate-scale-in"
                >
                  {/* Speaker pill / Dynamic island */}
                  <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-2 sm:h-3 bg-black rounded-full z-30 border border-neutral-900" />

                  <div className="w-full aspect-[9/16] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-slate-950 relative">
                    <Image
                      src={current.imageSrc}
                      alt={current.imageAlt}
                      fill
                      sizes="(max-width: 640px) 180px, 220px"
                      priority
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              )}

              {/* Desktop Synchronized Engineering Formula Callout Tag (Floats over lower-right of stage) */}
              <div
                key={`callout-desktop-${current.id}`}
                className="hidden sm:block absolute bottom-2 right-2 z-30 bg-ink text-paper p-2.5 sm:p-3 rounded-xl border border-rule-dark max-w-[240px] space-y-1 transition-opacity duration-300 animate-fade-in"
              >
                <div className="flex items-center gap-1.5 text-accent-mint text-[11px] font-mono font-bold">
                  <CalloutIcon className="w-3.5 h-3.5 shrink-0 text-accent-mint" />
                  <span>{current.callout.title}</span>
                </div>
                <p className="text-xs font-sans font-medium text-paper-2 leading-snug">
                  {current.callout.desc}{" "}
                  <span className="font-mono font-bold text-white">{current.callout.highlight}</span>{" "}
                  {current.callout.statPrefix || ""}<span className="font-mono font-bold text-accent-mint tabular-nums">{current.callout.stat}</span>
                </p>
              </div>
            </div>

            {/* Mobile Synchronized Engineering Formula Callout Tag (Clean full-width flow below stage so it never collides with device frame) */}
            <div
              key={`callout-mobile-${current.id}`}
              className="block sm:hidden w-full max-w-[460px] mt-3 bg-ink text-paper p-3 rounded-xl border border-rule-dark space-y-1 transition-opacity duration-300 animate-fade-in"
            >
              <div className="flex items-center gap-1.5 text-accent-mint text-[11px] font-mono font-bold">
                <CalloutIcon className="w-3.5 h-3.5 shrink-0 text-accent-mint" />
                <span>{current.callout.title}</span>
              </div>
              <p className="text-xs font-sans font-medium text-paper-2 leading-snug">
                {current.callout.desc}{" "}
                <span className="font-mono font-bold text-white">{current.callout.highlight}</span>{" "}
                {current.callout.statPrefix || ""}<span className="font-mono font-bold text-accent-mint tabular-nums">{current.callout.stat}</span>
              </p>
            </div>

            {/* Quick Link to inspect current system */}
            <div className="w-full max-w-[460px] pt-3 flex items-center justify-between text-xs text-muted px-1">
              <span className="text-[11px] text-muted truncate max-w-[150px] min-[380px]:max-w-none">
                System {activeIdx + 1} of {showcases.length} | {current.badge}
              </span>
              <Link
                href={current.linkHref}
                className="text-accent hover:text-ink font-bold inline-flex items-center gap-1 transition-colors focus-visible:outline-2 focus-visible:outline-accent shrink-0"
              >
                <span>Inspect full architecture</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  CheckCircle2,
  Monitor,
  Tablet,
  Smartphone,
  Check,
  Cpu,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-20 lg:py-24 custom-grid-bg border-b border-[#E2E8F0]"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(71,197,110,0.12),transparent_70%)] pointer-events-none -z-10" />

      <div className="screen-container grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Narrative Column */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-[11px] sm:text-xs font-bold shadow-xs max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#47C56E] animate-pulse shrink-0" />
            <span className="truncate">Bespoke Engineering • Business-First Technology</span>
          </div>

          <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#091C0F] tracking-tight leading-[1.14] font-display">
            Technology Built Around Your{" "}
            <span className="text-[#00875A] relative inline-block">
              Business.
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#47C56E]/20 -z-10 rounded-full" />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#475569] max-w-2xl leading-relaxed">
            We design and develop custom websites and web applications tailored to your business
            requirements, operational workflows, and customers.
          </p>

          <div className="flex flex-col min-[480px]:flex-row items-stretch min-[480px]:items-center gap-3 sm:gap-4 pt-2">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#47C56E] text-[#091C0F] px-6 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold shadow-md shadow-[#47C56E]/25 hover:bg-[#3db863] hover:shadow-lg hover:shadow-[#47C56E]/35 transition-all duration-200 active:scale-95 group min-h-[48px]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#091C0F] border border-[#E2E8F0] px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-bold hover:bg-[#F0FDF4] hover:border-[#47C56E]/50 transition-all duration-200 shadow-xs min-h-[48px]"
            >
              <Compass className="w-4 sm:w-5 h-4 sm:h-5 text-[#00875A]" />
              <span>Explore Our Services</span>
            </Link>
          </div>

          <div className="flex items-start sm:items-center gap-2 text-xs sm:text-sm text-[#475569] pt-1 sm:pt-2">
            <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-[#00875A] shrink-0 mt-0.5 sm:mt-0" />
            <span>From high-converting business websites to custom enterprise web applications.</span>
          </div>
        </div>

        {/* Right Interactive Architecture Preview */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-[#091C0F] rounded-2xl p-4 sm:p-6 text-[#E2E8F0] shadow-2xl border border-[#47C56E]/25 relative overflow-hidden">
            {/* Terminal Window Chrome */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#163820] mb-4 sm:mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ba1a1a]" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#f59e0b]" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#47C56E]" />
                <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-mono text-[#86EFAC]/70 truncate max-w-[140px] sm:max-w-none">
                  core-architecture-engine.ts
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-[#47C56E]/15 border border-[#47C56E]/30 text-[#86EFAC] text-[10px] sm:text-xs font-mono shrink-0">
                <Cpu className="w-3 h-3 text-[#47C56E]" />
                <span>Active Node</span>
              </div>
            </div>

            {/* Live Code Snippet (Horizontal Scroll Safe on Foldables) */}
            <div className="font-mono text-[11px] sm:text-xs text-[#E2E8F0]/90 space-y-1 bg-[#040C07] p-3 sm:p-4 rounded-xl border border-[#163820] mb-4 sm:mb-5 leading-relaxed overflow-x-auto">
              <p>
                <span className="text-[#86EFAC]">interface</span>{" "}
                <span className="text-[#47C56E]">BusinessBlueprint</span> {"{"}
              </p>
              <p className="pl-3 sm:pl-4">
                tenantId:{" "}
                <span className="text-[#34D399]">&quot;GT-ENTERPRISE-2026&quot;</span>;
              </p>
              <p className="pl-3 sm:pl-4">
                workflow:{" "}
                <span className="text-[#86EFAC]">&quot;Custom Web Architecture&quot;</span>;
              </p>
              <p className="pl-3 sm:pl-4">
                database: <span className="text-[#47C56E]">PostgreSQLClient</span>;
              </p>
              <p className="pl-3 sm:pl-4">
                securitySLA: <span className="text-[#86EFAC]">true</span>;{" "}
                <span className="text-[#64748B]">{"// 99.98% Guarantee"}</span>
              </p>
              <p>{"}"}</p>
            </div>

            {/* Telemetry & Active Deployment Indicator */}
            <div className="grid grid-cols-1 min-[340px]:grid-cols-2 gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div className="bg-[#0F2317]/70 p-3 sm:p-3.5 rounded-xl border border-[#163820]">
                <span className="text-[11px] sm:text-xs text-[#86EFAC]/70 block">Live Throughput</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-lg sm:text-xl font-bold text-white font-display">99.98%</span>
                  <span className="text-[10px] sm:text-[11px] text-[#47C56E] font-medium">Uptime SLA</span>
                </div>
              </div>

              <div className="bg-[#0F2317]/70 p-3 sm:p-3.5 rounded-xl border border-[#163820]">
                <span className="text-[11px] sm:text-xs text-[#86EFAC]/70 block">Multi-tenant CRM</span>
                <div className="flex items-center gap-1.5 mt-1 text-xs sm:text-sm font-semibold text-[#86EFAC]">
                  <span className="w-4 h-4 rounded-full bg-[#47C56E]/20 text-[#47C56E] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>Deployed</span>
                </div>
              </div>
            </div>

            {/* Multi-device Responsive Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#163820] text-[11px] sm:text-xs text-[#86EFAC]/70">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="flex items-center gap-1 text-[#E2E8F0]">
                  <Monitor className="w-3.5 h-3.5 text-[#47C56E]" /> Desktop
                </span>
                <span className="flex items-center gap-1 text-[#E2E8F0]">
                  <Tablet className="w-3.5 h-3.5 text-[#47C56E]" /> Tablet
                </span>
                <span className="flex items-center gap-1 text-[#E2E8F0]">
                  <Smartphone className="w-3.5 h-3.5 text-[#47C56E]" /> Mobile
                </span>
              </div>
              <span className="text-[#47C56E] font-medium">All Screens Supported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

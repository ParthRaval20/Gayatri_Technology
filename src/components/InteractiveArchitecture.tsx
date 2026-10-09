"use client";

import React, { useState } from "react";
import {
  Layers,
  Database,
  Cpu,
  FileCheck2,
  Printer,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  Building2,
  Users,
  CheckCircle2,
} from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
  badge: string;
  icon: React.ElementType;
}

interface ArchitectureSystem {
  id: string;
  sysCode: string;
  title: string;
  subtitle: string;
  client: string;
  sector: string;
  systemBadge: string;
  overview: string;
  techStack: string[];
  specs: { label: string; value: string }[];
  steps: WorkflowStep[];
  highlightBox: {
    title: string;
    description: string;
    tags: string[];
  };
}

const architectureSystems: ArchitectureSystem[] = [
  {
    id: "industrial-erp",
    sysCode: "GAYATRI-STEEL-APP",
    title: "Industrial Auto-Weight & Dispatch Engine",
    subtitle: "Mobile-First Shop Floor Operations Architecture",
    client: "Gayatri Steel Group",
    sector: "Metals & Manufacturing ERP",
    systemBadge: "10-MODULE MOBILE SUITE",
    overview:
      "Eliminated paper density charts and manual math by implementing a shape-aware metallurgical formula engine directly on warehouse Android and iOS phones.",
    techStack: ["React Native", "FastAPI / Python", "PostgreSQL", "Offline Cache", "GSTIN Engine"],
    specs: [
      { label: "Calculation Latency", value: "<15ms" },
      { label: "Supported Geometries", value: "Round, Flat, Hex, Pipe" },
      { label: "Sister Entities", value: "5 Isolated Accounts" },
      { label: "Dispatch Speed", value: "<30 seconds" },
    ],
    steps: [
      {
        step: "01",
        title: "Dimension & Shape Ingestion",
        desc: "Warehouse operator inputs material diameter/thickness (mm) and length (mm). The app automatically recognizes cross-sectional geometry.",
        badge: "INPUT LAYER",
        icon: Cpu,
      },
      {
        step: "02",
        title: "Metallurgical Formula Engine",
        desc: "Applies density coefficients (e.g. 7.85 g/cm³ for Tool Steel, 7.75 for Stainless) calculating exact unit weight per piece instantly.",
        badge: "CORE LOGIC",
        icon: Zap,
      },
      {
        step: "03",
        title: "Live Piece Tally & Stock Reservation",
        desc: "Physical counts increment/decrement on the floor with live tallying. Cumulative tonnage updates across all 5 group entities.",
        badge: "STATE SYNC",
        icon: Database,
      },
      {
        step: "04",
        title: "GSTIN Paperless Challan Dispatch",
        desc: "Generates tamper-proof digital delivery challan with PO number, buyer GSTIN, carrier name, lorry registration, and auto-computed gross weight.",
        badge: "DISPATCH OUTPUT",
        icon: FileCheck2,
      },
    ],
    highlightBox: {
      title: "Real Floor Impact",
      description:
        "Truck drivers previously waited 45 minutes for hand-written bills. With this mobile workflow, trucks are weighed, loaded, and dispatched with paperless challans in under 3 minutes.",
      tags: ["0 Calculation Errors", "Instant Lorry PO Match", "Works on Low 4G"],
    },
  },
  {
    id: "brahm-samaj-erp",
    sysCode: "BRAHM-SAMAJ-ERP",
    title: "Institutional Census & ID Print Pipeline",
    subtitle: "Trust Membership & Chapter Management Architecture (v2.4.0)",
    client: "Shree Samast Gujarat Brahm Samaj (Sabarkantha)",
    sector: "Institutional & Community ERP",
    systemBadge: "PRODUCTION ERP v2.4.0",
    overview:
      "Central management board for President & Admin featuring real-time census tracking, standardized digital registration (Form GBS series), 1-click PDF ID card generation, and local offline backups with verified Gayatri Technology attribution.",
    techStack: ["Python", "SQLite / PostgreSQL", "ReportLab PDF Engine", "Gujarati & English UI", "Offline Backup"],
    specs: [
      { label: "Deployment Build", value: "v1.0 Production" },
      { label: "Language Mode", value: "Gujarati & English" },
      { label: "ID Card Generation", value: "Instant 300-DPI PDF" },
      { label: "Data Resilience", value: "1-Click Offline Backup" },
    ],
    steps: [
      {
        step: "01",
        title: "Bilingual GBS Registration Form",
        desc: "Captures member records with surname-first validation (અટક પહેલા લખવી), native Gujarati district/village inputs, blood group, and qualification.",
        badge: "DATA CAPTURE",
        icon: Users,
      },
      {
        step: "02",
        title: "Executive Dashboard & Census Metrics",
        desc: "Live board displaying total registered members, daily additions, family units, QR smart cards issued, and quick launchpad modules.",
        badge: "GOVERNANCE BOARD",
        icon: ShieldCheck,
      },
      {
        step: "03",
        title: "Multi-Criteria Community Directory",
        desc: "Instant search across thousands of trust records by blood group (for urgent community hospital requests), city/village, or family head name.",
        badge: "CENSUS SEARCH",
        icon: Database,
      },
      {
        step: "04",
        title: "One-Click PDF ID & Certificate Print",
        desc: "Compiles verified member data, QR verification code, and official chapter credentials into high-resolution printable ID cards and certificates.",
        badge: "PDF ENGINE",
        icon: Printer,
      },
    ],
    highlightBox: {
      title: "Verified Gayatri Technology Production Development",
      description:
        "The software includes official footer verification ('Software Developed by Gayatri Technology') and features an offline backup & restore engine ensuring complete autonomy, zero recurring cloud rent, and total data sovereignty.",
      tags: ["Official GT Attribution", "Offline Autonomy", "Emergency Blood Donor Match"],
    },
  },
  {
    id: "commercial-catalog",
    sysCode: "GAYATRI-STEEL-WEB",
    title: "Interactive Steel Catalog & WhatsApp RFQ",
    subtitle: "High-Performance Commercial Web Platform",
    client: "Gayatri Steel Group",
    sector: "Metals & Manufacturing Web",
    systemBadge: "LIVE WEB PLATFORM",
    overview:
      "A fast, responsive web platform enabling buyers across Gujarat and western India to inspect 28+ tool steel grades, examine chemical composition percentages, and submit instant RFQs.",
    techStack: ["React", "Vite", "Tailwind CSS", "Vercel Edge SSG", "WhatsApp Web API"],
    specs: [
      { label: "Core Web Vitals", value: "100/100 Mobile" },
      { label: "Grade Catalog", value: "28+ Indexed Grades" },
      { label: "RFQ Hand-off", value: "Prefilled WhatsApp" },
      { label: "Deploy Time", value: "Sub-second Edge SSG" },
    ],
    steps: [
      {
        step: "01",
        title: "Grade & Metallurgy Catalog",
        desc: "Indexed library of Plastic Mould, Hot Work, and Cold Work steel grades with hardness ratings (annealed/hardened HRC) and international DIN equivalents.",
        badge: "CATALOG SPEC",
        icon: Building2,
      },
      {
        step: "02",
        title: "Chemical Composition Visualizer",
        desc: "Dynamic metallurgical percentage bars for Carbon, Chromium, Molybdenum, and Vanadium helping engineers confirm alloy suitability.",
        badge: "VISUAL MATRIX",
        icon: Zap,
      },
      {
        step: "03",
        title: "Multi-Yard Depot Locator",
        desc: "Direct coordination routes connecting Rajkot main yard and Jamnagar depot for same-day cutting and truck collection.",
        badge: "DEPOT DISPATCH",
        icon: Layers,
      },
      {
        step: "04",
        title: "One-Tap WhatsApp RFQ Pipeline",
        desc: "Converts selected steel grades, cut dimensions, and quantity into formatted WhatsApp messages sent straight to the sales director's desk.",
        badge: "INSTANT INQUIRY",
        icon: ArrowRight,
      },
    ],
    highlightBox: {
      title: "Zero Sales Friction",
      description:
        "Buyers no longer call asking 'Do you have P20 in stock? What is the hardness?'. They review the exact chemistry online and send an inquiry with their exact dimensions in 2 taps.",
      tags: ["Sub-second Loading", "Direct WhatsApp Inquiries", "Edge Prerendered"],
    },
  },
];

export default function InteractiveArchitecture() {
  const [activeTab, setActiveTab] = useState<string>("industrial-erp");

  const currentSystem =
    architectureSystems.find((sys) => sys.id === activeTab) || architectureSystems[0];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFCFF] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-100/40 via-transparent to-transparent pointer-events-none rounded-full blur-3xl -z-10" />

      <div className="screen-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-xs font-bold shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00875A]" />
            <span className="font-mono uppercase tracking-wider">System Architecture &amp; Workflow Inspection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#091C0F] tracking-tight font-display">
            How Our Systems Actually Work Under the Hood
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
            We don&apos;t just design screens. We engineer end-to-end data pipelines that connect shop-floor workers, office administrators, and customers without bottlenecks.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-2.5 px-1">
          <span>← Swipe tabs to switch systems →</span>
          <span className="font-mono text-slate-400 text-[11px]">3 Systems</span>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex overflow-x-auto sm:flex-wrap items-center gap-2 sm:gap-3 p-1.5 bg-[#E2E8F0]/60 rounded-2xl mb-8 max-w-full sm:max-w-fit border border-[#CBD5E1]/60 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-1.5">
          {architectureSystems.map((sys) => {
            const isActive = activeTab === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => setActiveTab(sys.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#091C0F] text-white shadow-md shadow-emerald-950/20"
                    : "text-[#475569] hover:text-[#091C0F] hover:bg-white/70"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? "bg-[#47C56E]" : "bg-slate-400"}`} />
                <span className="font-display">{sys.title.split("&")[0]}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isActive ? "bg-[#163820] text-[#86EFAC]" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {sys.sysCode}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Architecture Display Canvas */}
        <div key={activeTab} className="bg-white rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden animate-scale-in">
          {/* Top Banner Meta */}
          <div className="p-6 sm:p-8 bg-[#091C0F] text-white border-b border-[#163820]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#163820] text-[#86EFAC] border border-[#225430] font-bold">
                    {currentSystem.sysCode}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 bg-white/10 px-2.5 py-1 rounded">
                    {currentSystem.sector}
                  </span>
                  <span className="text-xs font-bold text-[#47C56E]">
                    Client: {currentSystem.client}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white">
                  {currentSystem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                  {currentSystem.overview}
                </p>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap lg:flex-col lg:items-end gap-1.5 shrink-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#86EFAC] font-bold mb-1">
                  Engineered With:
                </span>
                <div className="flex flex-wrap gap-1.5 max-w-xs">
                  {currentSystem.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#163820] text-[#86EFAC] border border-[#225430]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-6 border-t border-slate-800">
              {currentSystem.specs.map((spec, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#0F2916] border border-[#1b4829]">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5 block truncate">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Interactive Pipeline Flow */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider block font-mono">
                DATA PIPELINE EXECUTION
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-[#091C0F] mt-1 font-display">
                Four-Stage Operational Data Flow
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentSystem.steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAFCFF] border border-[#E2E8F0] flex flex-col justify-between space-y-3 relative group hover:border-[#47C56E]/60 hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono font-bold text-[#00875A] bg-[#47C56E]/12 px-2.5 py-0.5 rounded-md border border-[#47C56E]/20">
                          STAGE {step.step}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#00875A] group-hover:bg-[#091C0F] group-hover:text-[#86EFAC] group-hover:border-[#091C0F] transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                        {step.badge}
                      </span>
                      <h5 className="text-sm font-bold text-[#091C0F] font-display mt-1">
                        {step.title}
                      </h5>
                      <p className="text-xs text-[#475569] leading-relaxed mt-2">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E2E8F0]/70 flex items-center text-[11px] text-[#00875A] font-semibold gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified In Production</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Highlight Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F0FDF4] border border-[#86EFAC]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider font-mono">
                  {currentSystem.highlightBox.title}
                </span>
                <p className="text-xs sm:text-sm text-[#091C0F] max-w-2xl leading-relaxed">
                  {currentSystem.highlightBox.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 shrink-0">
                {currentSystem.highlightBox.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#00875A] border border-[#86EFAC] shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

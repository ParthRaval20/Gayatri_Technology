"use client";

import React from "react";
import {
  Search,
  Layout,
  Code2,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";

interface Phase {
  phase: string;
  timeline: string;
  title: string;
  desc: string;
  deliverables: string[];
  icon: React.ElementType;
}

const phases: Phase[] = [
  {
    phase: "PHASE 01",
    timeline: "Week 1",
    title: "Operational Audit & Floor Discovery",
    desc: "We spend time with your actual operators, examining physical registers, WhatsApp logs, Excel formulas, and paper challans to pinpoint where transactions stall.",
    deliverables: ["Process Bottleneck Audit", "Data Flow Blueprint", "Fixed-Scope Specification"],
    icon: Search,
  },
  {
    phase: "PHASE 02",
    timeline: "Weeks 2 – 3",
    title: "Interactive Prototype & Schema Architecture",
    desc: "We design click-through mobile and desktop wireframes with realistic fields and validation rules before writing backend code, aligning all stakeholders.",
    deliverables: ["Clickable UI Prototype", "Relational Database Schema", "API Contract Definition"],
    icon: Layout,
  },
  {
    phase: "PHASE 03",
    timeline: "Weeks 4 – 7",
    title: "Agile Milestone Engineering",
    desc: "Bi-weekly sprint iterations building core modules: offline sync, shape-aware auto-weight formulas, role permissions, and PDF export engines.",
    deliverables: ["Production TypeScript/Python Code", "Staging Environment Access", "Bi-Weekly Progress Demos"],
    icon: Code2,
  },
  {
    phase: "PHASE 04",
    timeline: "Week 8",
    title: "Floor Pilot, UAT & Zero-Downtime Deployment",
    desc: "We test the software on shop-floor phones and office PCs with real data. We train your staff, migrate legacy records, and launch without interrupting daily business.",
    deliverables: ["Legacy Data Migration", "On-Prem / Cloud Deployment", "Staff Workflow Training"],
    icon: Rocket,
  },
  {
    phase: "PHASE 05",
    timeline: "Post-Launch",
    title: "30-Day On-Floor Warranty & Direct SLA",
    desc: "Founder Parth Raval provides dedicated direct engineering support to resolve edge cases, refine UI ergonomics, and ensure 100% team adoption.",
    deliverables: ["30-Day Floor Warranty", "Direct Founder Access", "Full Source Code Handover"],
    icon: ShieldCheck,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
      <div className="screen-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-xs font-bold shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00875A]" />
            <span className="font-mono uppercase tracking-wider">DELIVERY METHODOLOGY &bull; SPRINT TIMELINES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            Predictable Turnaround from Problem to Production
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            Transparent 8-week engineering lifecycle with tangible deliverables at every sprint.
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#00875A] md:hidden">
            <span>Swipe sprint phases</span>
            <span>→</span>
          </div>
        </div>

        {/* Phase Cards */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {phases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="w-[85vw] max-w-[320px] md:w-auto shrink-0 md:shrink snap-center md:snap-align-none bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#47C56E]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-[#00875A] bg-[#47C56E]/12 px-2.5 py-1 rounded-md border border-[#47C56E]/20">
                      {item.phase}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#091C0F] bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      <Clock className="w-3 h-3 text-[#00875A]" />
                      <span>{item.timeline}</span>
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#091C0F] text-[#86EFAC] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-[#091C0F] mb-2 font-display leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-[11px] text-[#334155]">
                    {item.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#47C56E] shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#091C0F] text-[#E2E8F0] border border-[#163820] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#47C56E] shrink-0" />
            <span>
              <strong>Guaranteed Code Ownership:</strong> You receive 100% rights to your source code, schemas, and deployed containers. Zero recurring licensing or artificial hostage fees.
            </span>
          </div>
          <span className="font-mono text-[#86EFAC] text-xs font-bold shrink-0">
            Direct Founder Oversight
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import {
  ClipboardList,
  BrainCircuit,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  ArrowRight,
} from "lucide-react";

const pipelineSteps = [
  {
    step: "01 STEP",
    icon: ClipboardList,
    title: "Business Requirement",
    desc: "Stakeholder intake & audit",
  },
  {
    step: "02 STEP",
    icon: BrainCircuit,
    title: "Strategy",
    desc: "Tech stack & scope definition",
  },
  {
    step: "03 STEP",
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered prototyping",
  },
  {
    step: "04 STEP",
    icon: Code2,
    title: "Development",
    desc: "Modular, clean codebases",
  },
  {
    step: "05 STEP",
    icon: CheckCircle2,
    title: "Testing & QA",
    desc: "Cross-browser & security checks",
  },
  {
    step: "06 STEP",
    icon: Rocket,
    title: "Launch & Support",
    desc: "SLA & continuous ops",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            ABOUT GAYATRI TECHNOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-4 font-display">
            Your Business. Your Requirements. Your Technology.
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Every business is different. That&apos;s why we don&apos;t believe in one-size-fits-all websites.
            Gayatri Technology works closely with clients to understand their business, challenges,
            customers, and goals — then turns those requirements into practical digital solutions.
          </p>
        </div>

        {/* Pipeline Flowchart Container */}
        <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-xl font-bold text-[#091C0F] font-display">
              Requirement-to-Execution Pipeline
            </h3>
            <span className="text-xs font-bold px-3 py-1 bg-[#47C56E]/12 border border-[#47C56E]/25 text-[#00875A] rounded-full w-fit">
              Deterministic 6-Step Delivery
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#47C56E]/60 hover:bg-[#F0FDF4] transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#00875A] tracking-wider">
                      {step.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#47C56E]/40 group-hover:bg-[#47C56E]" />
                  </div>

                  <div className="my-4">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#00875A] shadow-xs group-hover:scale-105 transition-transform mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-sm font-semibold text-[#091C0F] font-display leading-snug">
                      {step.title}
                    </p>
                  </div>

                  <span className="text-xs text-[#475569] leading-normal">
                    {step.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 text-[#00875A] hover:text-[#47C56E] text-base font-bold group transition-colors"
          >
            <span>Learn About Our Capabilities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

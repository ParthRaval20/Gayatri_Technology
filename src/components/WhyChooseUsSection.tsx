"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Business-First Thinking",
    desc: "We align technical decisions directly with commercial revenue, customer retention, and operational efficiency.",
  },
  {
    num: "02",
    title: "Custom Development",
    desc: "Tailored architecture built specifically to your enterprise specifications without the bloat of generic off-the-shelf templates.",
  },
  {
    num: "03",
    title: "User-Centered Design",
    desc: "Interfaces designed to minimize friction, increase daily user engagement, and drive higher transaction conversions.",
  },
  {
    num: "04",
    title: "Scalable Technology",
    desc: "Robust backends and optimized frontend bundles prepared to effortlessly absorb millions of monthly interactions.",
  },
  {
    num: "05",
    title: "Transparent Communication",
    desc: "Bi-weekly sprint demos, milestone velocity tracking, and direct access to senior system architects.",
  },
  {
    num: "06",
    title: "Long-Term Partnership",
    desc: "Comprehensive maintenance SLAs, continuous feature enhancements, and 24/7 proactive security monitoring.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Telemetry Dashboard */}
          <div className="lg:col-span-5 bg-[#F8FAFC] p-8 rounded-2xl border border-[#E2E8F0] shadow-xs">
            <div className="border-b border-[#E2E8F0] pb-4 mb-6">
              <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider block font-display">
                Operational Track Record
              </span>
              <h3 className="text-2xl font-bold text-[#091C0F] mt-1 font-display">
                Verified Performance
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs">
                <span className="text-3xl font-extrabold text-[#091C0F] font-display">
                  120+
                </span>
                <p className="text-xs text-[#475569] mt-1 font-medium">Projects Delivered</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs">
                <span className="text-3xl font-extrabold text-[#47C56E] font-display">
                  99.4%
                </span>
                <p className="text-xs text-[#475569] mt-1 font-medium">Client Retention</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs">
                <span className="text-3xl font-extrabold text-[#091C0F] font-display">
                  4.9/5
                </span>
                <p className="text-xs text-[#475569] mt-1 font-medium">Rating Across Clients</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs">
                <span className="text-3xl font-extrabold text-[#47C56E] font-display">
                  100%
                </span>
                <p className="text-xs text-[#475569] mt-1 font-medium">Zero Template Policy</p>
              </div>
            </div>

            <div className="bg-[#091C0F] text-white p-4 rounded-xl flex items-center justify-between shadow-md border border-[#47C56E]/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#47C56E]/20 flex items-center justify-center text-[#47C56E]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Enterprise SLA Standards</p>
                  <p className="text-xs text-[#94A3B8]">ISO compliant code workflows</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#86EFAC] bg-[#47C56E]/20 px-2.5 py-1 rounded-full border border-[#47C56E]/30">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Right Column: 6 Value Pillars */}
          <div className="lg:col-span-7">
            <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
              THE ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#091C0F] tracking-tight mb-8 font-display">
              Why Businesses Choose Gayatri Technology
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-xs font-bold text-[#00875A] bg-[#47C56E]/12 px-2.5 py-1 rounded-md h-fit border border-[#47C56E]/25 shrink-0">
                    {pillar.num}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-[#091C0F] mb-1 font-display">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Wrench, TrendingUp, Zap, Cloud, ShieldCheck } from "lucide-react";

const valueProps = [
  { icon: Wrench, label: "Custom-Built Solutions" },
  { icon: TrendingUp, label: "Business-Focused Approach" },
  { icon: Zap, label: "Responsive & Fast" },
  { icon: Cloud, label: "Scalable Cloud Architecture" },
  { icon: ShieldCheck, label: "Long-Term Support & SLA" },
];

export default function TrustValueStrip() {
  return (
    <section className="bg-white py-8 border-b border-[#E2E8F0] shadow-xs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-[#091C0F] tracking-tight font-display">
            Built for businesses that want more than a template.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 text-center">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center gap-2.5 p-3.5 rounded-xl hover:bg-[#F0FDF4] transition-all duration-200 group ${
                  idx === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#47C56E]/10 group-hover:bg-[#47C56E]/20 flex items-center justify-center text-[#00875A] transition-colors">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-semibold text-[#091C0F]">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Wrench, Users, Smartphone, ShieldCheck, MapPin } from "lucide-react";

const valueProps = [
  {
    icon: Wrench,
    label: "Built For Your Workflow",
    desc: "No forced templates or rigid software",
  },
  {
    icon: Users,
    label: "Talk Directly With Builders",
    desc: "Direct access to lead software engineers",
  },
  {
    icon: Smartphone,
    label: "Factory & Mobile Ready",
    desc: "Simple interfaces your team can use on phone",
  },
  {
    icon: ShieldCheck,
    label: "100% Code & Data Ownership",
    desc: "Full intellectual property and data rights",
  },
  {
    icon: MapPin,
    label: "Rooted in Rajkot, Gujarat",
    desc: "Serving businesses locally & beyond",
  },
];

export default function TrustValueStrip() {
  return (
    <section className="scroll-section bg-paper py-8 sm:py-12 border-b border-rule shadow-xs">
      <div className="screen-container">
        <div className="text-center mb-6 sm:mb-8 scroll-reveal max-w-2xl mx-auto space-y-1.5">
          <span className="text-accent font-bold text-xs uppercase tracking-wider block font-mono">
            THE GAYATRI STANDARD &bull; DIRECT RESPONSIBILITY
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-ink tracking-tight font-display text-balance">
            Why growing businesses choose to build with us
          </h2>
          <p className="text-xs sm:text-sm text-muted max-w-lg mx-auto text-balance">
            Direct lead engineer access, zero subscription lock-in, and software tailored to your shop floor.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[340px]:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5 text-center">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            const delayClass = idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : idx === 3 ? "delay-300" : idx === 4 ? "delay-400" : "";
            return (
              <div
                key={idx}
                className={`scroll-reveal ${delayClass} flex flex-col items-center gap-2 p-3 sm:p-3.5 rounded-xl bg-paper-2 border border-rule hover:border-accent-light/50 hover:bg-emerald-50/50 hover:-translate-y-0.5 transition-colors motion-safe:transition-transform motion-reduce:transform-none duration-200 group ${
                  idx === 4 ? "min-[340px]:col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-paper border border-rule group-hover:bg-accent-light group-hover:text-ink flex items-center justify-center text-accent transition-colors shrink-0 shadow-2xs">
                  <Icon className="w-4.5 h-4.5 group-hover:scale-105 motion-safe:transition-transform motion-reduce:scale-none" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs sm:text-sm font-bold text-ink block font-display leading-tight">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-muted block leading-tight">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


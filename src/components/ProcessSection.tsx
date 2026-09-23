"use client";

import React from "react";

const phases = [
  {
    phase: "PHASE 01",
    title: "Discovery",
    desc: "Deep-dive interviews to understand your operational model, user pain points, and commercial targets.",
  },
  {
    phase: "PHASE 02",
    title: "Planning",
    desc: "Architecting technical specifications, database schemas, API contracts, and delivery milestones.",
  },
  {
    phase: "PHASE 03",
    title: "UI/UX Design",
    desc: "Clickable design systems, high-fidelity user journeys, and usability reviews prior to code creation.",
  },
  {
    phase: "PHASE 04",
    title: "Development",
    desc: "Agile bi-weekly sprints, clean code standard compliance, and continuous deployment environments.",
  },
  {
    phase: "PHASE 05",
    title: "Testing & QA",
    desc: "Automated regression suites, mobile responsiveness validation, and load stress testing.",
  },
  {
    phase: "PHASE 06",
    title: "Launch & Support",
    desc: "Seamless production transition, DNS management, staff training, and proactive 24/7 SLA coverage.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="screen-container">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            OUR METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            From Idea to Launch
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            A structured, predictable 6-phase engineering lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {phases.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#47C56E]/60 hover:shadow-md transition-all duration-200"
            >
              <span className="text-xs font-bold text-[#00875A] font-mono tracking-wider">
                {item.phase}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mt-2 mb-2 sm:mb-3 font-display">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

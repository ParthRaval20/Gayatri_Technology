"use client";

import React from "react";
import { Search, Layers, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "We learn about your business, customers, workflow, and goals. We conduct thorough discovery interviews to define measurable technical metrics.",
    tagIcon: Search,
    tagLabel: "Business Context & Audit",
  },
  {
    num: "02",
    title: "Design",
    desc: "We transform requirements into intuitive and effective digital experiences. Wireframes, high-fidelity mockups, and interactive workflows ensure total alignment.",
    tagIcon: Layers,
    tagLabel: "Interactive Prototyping",
  },
  {
    num: "03",
    title: "Build",
    desc: "We develop, test, launch, and continuously improve your solution. Production-ready deployments backed by rigorous QA and dedicated support agreements.",
    tagIcon: Rocket,
    tagLabel: "Engineering & Rollout",
  },
];

export default function CustomSolutionsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="screen-container">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            TAILORED ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            Don&apos;t Fit Your Business Into a Template
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            We build around your exact requirements, constraints, and growth ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {steps.map((item, idx) => {
            const TagIcon = item.tagIcon;
            return (
              <div
                key={idx}
                className="bg-white p-5 sm:p-8 rounded-2xl border border-[#E2E8F0] relative overflow-hidden shadow-xs hover:shadow-md hover:border-[#47C56E]/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#CBD5E1] mb-3 sm:mb-4 font-display">
                    {item.num}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#091C0F] mb-2 sm:mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-[#E2E8F0] flex items-center text-xs font-bold text-[#00875A] gap-2">
                  <TagIcon className="w-4 h-4 text-[#47C56E] shrink-0" />
                  <span>{item.tagLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

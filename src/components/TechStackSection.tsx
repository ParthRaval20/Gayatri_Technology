"use client";

import React from "react";
import { Code2, Server, Database, Smartphone } from "lucide-react";

const stacks = [
  {
    icon: Code2,
    title: "Web Frontends",
    desc: "Fast, search-optimized interfaces that load quickly even on standard mobile internet.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Single codebase apps that work reliably for warehouse supervisors and field staff.",
    skills: ["React Native", "Android & iOS", "Offline-Ready"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "Clean business logic, formula engines, and direct WhatsApp integrations.",
    skills: ["Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases & Storage",
    desc: "Strict relational integrity for customer balances, stock counts, and GST challans.",
    skills: ["PostgreSQL", "Redis", "Cloud Backups"],
  },
];

export default function TechStackSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F8FAFC]">
      <div className="screen-container">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            OUR USUAL STACK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            The tools we use to build durable software
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            We choose technology based on the project rather than forcing every business into the same
            stack. Only technologies we genuinely understand and maintain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stacks.map((stack, idx) => {
            const Icon = stack.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-2xs hover:border-[#47C56E]/60 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#47C56E]/10 flex items-center justify-center text-[#00875A] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#091C0F] font-display">
                      {stack.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {stack.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E2E8F0]">
                  {stack.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[#091C0F] text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import { Code2, Server, Database, Network } from "lucide-react";

const stacks = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Python", "FastAPI", "Django", "Node.js", "Express"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Supabase"],
  },
  {
    icon: Network,
    title: "Architecture",
    skills: [
      "REST APIs",
      "GraphQL",
      "Cloud Deployments",
      "Microservices",
      "Security & Auth",
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F8FAFC]">
      <div className="screen-container">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            PRODUCTION TECH
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            Modern Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            Proven, enterprise-grade technologies chosen for durability, performance, and security.
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#00875A] sm:hidden">
            <span>Swipe tech layers horizontally</span>
            <span>→</span>
          </div>
        </div>

        <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar pb-3 sm:pb-0 items-stretch">
          {stacks.map((stack, idx) => {
            const Icon = stack.icon;
            return (
              <div
                key={idx}
                className="w-[82vw] max-w-[320px] sm:w-auto shrink-0 sm:shrink snap-center sm:snap-align-none bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#47C56E]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-[#47C56E]/10 flex items-center justify-center text-[#00875A] shrink-0">
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#091C0F] font-display">
                      {stack.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {stack.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#47C56E]/10 text-[#00875A] text-[11px] sm:text-xs font-bold hover:bg-[#47C56E] hover:text-[#091C0F] transition-colors duration-150 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

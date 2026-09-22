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
    <section className="py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            PRODUCTION TECH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            Modern Technology Stack
          </h2>
          <p className="text-lg text-[#475569]">
            Proven, enterprise-grade technologies chosen for durability, performance, and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((stack, idx) => {
            const Icon = stack.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#47C56E]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#47C56E]/10 flex items-center justify-center text-[#00875A]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#091C0F] font-display">
                      {stack.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-[#47C56E]/10 text-[#00875A] text-xs font-bold hover:bg-[#47C56E] hover:text-[#091C0F] transition-colors duration-150 cursor-default"
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

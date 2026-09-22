"use client";

import React from "react";
import {
  Store,
  HeartPulse,
  GraduationCap,
  Factory,
  Building2,
  Landmark,
  Truck,
  Hotel,
  Briefcase,
  Rocket,
} from "lucide-react";

const industries = [
  {
    icon: Store,
    name: "Retail",
    desc: "Omnichannel inventory and high-speed checkout flows.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    desc: "HIPAA-ready patient portals and diagnostic appointment tools.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "Custom LMS platforms, student onboarding, and grading systems.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Supply chain visibility tools and real-time plant telemetry.",
  },
  {
    icon: Building2,
    name: "Real Estate",
    desc: "Interactive property catalogs, virtual viewings, and CRM broker sync.",
  },
  {
    icon: Landmark,
    name: "Finance",
    desc: "Secure advisory interfaces, calculation tools, and statement vaults.",
  },
  {
    icon: Truck,
    name: "Logistics",
    desc: "GPS tracking portals, freight dispatchers, and route monitors.",
  },
  {
    icon: Hotel,
    name: "Hospitality",
    desc: "Booking engines, dynamic pricing modules, and guest concierge apps.",
  },
  {
    icon: Briefcase,
    name: "Services",
    desc: "Corporate credibility portals, client onboarding, and NDA workflows.",
  },
  {
    icon: Rocket,
    name: "Startups",
    desc: "Rapid MVP development and scalable infrastructure foundations.",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-24 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            SECTOR EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            Technology for Different Business Needs
          </h2>
          <p className="text-lg text-[#475569]">
            Deep vertical domain knowledge applied across mission-critical industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#47C56E]/60 hover:bg-[#F0FDF4] hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#00875A] group-hover:text-[#47C56E] mb-4 shadow-xs group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#091C0F] mb-1 font-display">
                  {item.name}
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

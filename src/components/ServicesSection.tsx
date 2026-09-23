"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Terminal,
  ShoppingBag,
  LayoutTemplate,
  RefreshCw,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Website Development",
    desc: "Professional websites designed to establish your authoritative brand, attract qualified customers, and generate business opportunities.",
    tag: "Brand & Conversion",
  },
  {
    icon: Terminal,
    title: "Custom Web Application Development",
    desc: "Powerful web applications built around your unique internal workflows, operational requirements, and multi-user data structures.",
    tag: "Enterprise Systems",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Development",
    desc: "Scalable digital storefronts and B2B ordering portals designed to simplify catalog management and create seamless customer checkouts.",
    tag: "Retail & Wholesale",
  },
  {
    icon: LayoutTemplate,
    title: "UI/UX Design",
    desc: "User-focused interfaces that make your digital products simple, intuitive, and engaging with high-fidelity interactive wireframes.",
    tag: "Product Prototyping",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Transform outdated legacy websites into modern, lightning-fast, responsive, and high-performing enterprise experiences.",
    tag: "Modernization",
  },
  {
    icon: ShieldAlert,
    title: "Website Maintenance & Support",
    desc: "Reliable ongoing support, continuous improvements, automated backups, security patches, and 99.98% SLA performance optimization.",
    tag: "24/7 SLA Operations",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#E2E8F0]">
      <div className="screen-container">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            Digital solutions designed around the way your business operates and grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 sm:p-8 rounded-2xl border border-[#E2E8F0] hover:border-[#47C56E]/60 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-[#47C56E]/10 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors duration-200 shrink-0">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#00875A] bg-[#47C56E]/12 border border-[#47C56E]/20 px-2 sm:px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mb-2 sm:mb-3 font-display">
                    {service.title}
                  </h3>
                  <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    {service.desc}
                  </p>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[#00875A] text-xs sm:text-sm font-bold hover:gap-2.5 transition-all group-hover:text-[#47C56E] min-h-[44px]"
                >
                  <span>Request Solution Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

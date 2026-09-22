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
    <section id="services" className="py-20 lg:py-24 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            What We Build
          </h2>
          <p className="text-lg text-[#475569]">
            Digital solutions designed around the way your business operates and grows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#E2E8F0] hover:border-[#47C56E]/60 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#47C56E]/10 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#00875A] bg-[#47C56E]/12 border border-[#47C56E]/20 px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#091C0F] mb-3 font-display">
                    {service.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[#00875A] text-sm font-bold hover:gap-2.5 transition-all group-hover:text-[#47C56E]"
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

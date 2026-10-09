"use client";

import React from "react";
import Link from "next/link";
import {
  AppWindow,
  Factory,
  Globe,
  Smartphone,
  ShoppingBag,
  Cpu,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: AppWindow,
    title: "Custom Business Software",
    whoNeedsIt: "Growing companies with internal steps unique to their business",
    problem: "Disconnected spreadsheets, manual reports, and repetitive data entry slow down operations.",
    whatWeBuild: "Centralized internal software engines, approval pipelines, customer ledgers, and team consoles.",
    useCase: "Replacing 6 separate Excel files with one centralized system everyone can access.",
    tag: "Internal Operations",
  },
  {
    icon: Factory,
    title: "ERP & Operations Systems",
    whoNeedsIt: "Manufacturers, metal suppliers, fabricators, and multi-unit businesses",
    problem: "Difficult to track physical stock, machine output, dispatches, and multi-branch operations.",
    whatWeBuild: "Inventory piece tracking, shape-aware auto weight calculators, digital delivery challans, and GST sync.",
    useCase: "A multi-branch steel supplier tracking stock across Rajkot and Jamnagar with instant delivery challans.",
    tag: "Manufacturing & Stock",
  },
  {
    icon: Globe,
    title: "Websites & Web Applications",
    whoNeedsIt: "Businesses needing an authoritative digital presence and qualified inbound inquiries",
    problem: "Slow, generic website templates that don't explain what you do or rank properly on Google.",
    whatWeBuild: "Fast, custom websites, customer request portals, interactive product catalogs, and quote tools.",
    useCase: "An engineering company launching an interactive technical catalog that brings in qualified buyer inquiries.",
    tag: "Brand & Inquiries",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    whoNeedsIt: "Teams with field agents, factory staff, or warehouse supervisors",
    problem: "Workers can't carry laptops to the shop floor or delivery truck to record inventory.",
    whatWeBuild: "Fast mobile apps for scanning stock, raising delivery receipts, checking customer balances, and taking orders.",
    useCase: "Warehouse supervisors updating steel stock and generating paperless challans directly from a mobile phone.",
    tag: "Mobile-First",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & B2B Portals",
    whoNeedsIt: "Wholesalers, distributors, and brands selling directly to business customers",
    problem: "Orders taken manually over phone calls and WhatsApp, leading to wrong items and delayed dispatches.",
    whatWeBuild: "B2B ordering portals with customer-specific pricing tiers, credit limits, and instant GST invoices.",
    useCase: "Dealers logging into their dedicated portal to place repeat bulk orders and download historical ledger statements.",
    tag: "Wholesale & Retail",
  },
  {
    icon: Cpu,
    title: "Automation & Workflow Tools",
    whoNeedsIt: "Businesses drowning in daily manual WhatsApp follow-ups and copy-pasting",
    problem: "Staff spending half the day answering: 'What is our current stock?' or 'Send me the delivery challan.'",
    whatWeBuild: "Automated WhatsApp document triggers, database connectors, and smart stock inquiry assistants.",
    useCase: "Automated WhatsApp message sent to the client with live PDF challan as soon as a lorry is loaded.",
    tag: "Time Savers",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#E2E8F0] overflow-hidden">
      <div className="screen-container">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            WHAT WE BUILD
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            Software built around business outcomes
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            We don&apos;t just build technology for the sake of it. Every system exists to solve a
            specific business bottleneck.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-3 px-1">
          <span>← Swipe horizontally to browse services →</span>
          <span className="font-mono text-slate-400 text-[11px]">6 Services</span>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="w-[85vw] max-w-[340px] sm:w-[340px] md:w-auto md:min-w-0 snap-center bg-white p-5 sm:p-7 rounded-2xl border border-[#E2E8F0] hover:border-[#47C56E]/60 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group shrink-0 md:shrink h-auto"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#47C56E]/10 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors duration-200 shrink-0">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#00875A] bg-[#47C56E]/12 border border-[#47C56E]/20 px-2 sm:px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] mb-2 font-display">
                    {service.title}
                  </h3>

                  <div className="space-y-3 mb-5">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Problem it solves:
                      </span>
                      <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mt-0.5">
                        {service.problem}
                      </p>
                    </div>

                    <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0] text-xs space-y-1">
                      <span className="text-[10px] font-bold text-[#00875A] uppercase tracking-wider block">
                        Example Use Case:
                      </span>
                      <p className="text-[#334155] leading-snug">
                        {service.useCase}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[#00875A] text-xs sm:text-sm font-bold hover:gap-2.5 transition-all group-hover:text-[#47C56E] min-h-[44px]"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-[11px] text-slate-400 font-medium hidden min-[360px]:inline">
                    Custom Built
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All Services Action Bar */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#FAFCFF] border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#091C0F] font-display">
              Have a workflow problem you don&apos;t see listed here?
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              Because we write custom code rather than using canned software, we can build around any operational process.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#091C0F] hover:bg-[#163820] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 shrink-0"
          >
            <span>Tell Us What You Need</span>
            <ArrowRight className="w-4 h-4 text-[#47C56E]" />
          </Link>
        </div>
      </div>
    </section>
  );
}


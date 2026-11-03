"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";

const compactPrinciples = [
  {
    num: "01",
    title: "Understand Before Building",
    summary: "Audit physical registers & Excel before writing code.",
  },
  {
    num: "02",
    title: "Build For The Workflow",
    summary: "Software adapts to the factory floor, never vice-versa.",
  },
  {
    num: "03",
    title: "Keep It Practical",
    summary: "Large touch buttons for operators wearing gloves.",
  },
  {
    num: "04",
    title: "Build For The Long Term",
    summary: "Clean TypeScript/Python with 100% code ownership.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="screen-container space-y-12 sm:space-y-16">
        {/* Founder Commitment: Signed Personal Letter on the Left + Direct Access */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Founder Letter */}
          <div className="lg:col-span-7 bg-[#FAFCFF] p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <span className="text-xs font-mono font-bold text-[#00875A] uppercase tracking-wider">
                FOUNDER COMMITMENT &bull; DIRECT RESPONSIBILITY
              </span>
              <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-[#E2E8F0]">
                Rajkot, Gujarat
              </span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
              <p>
                &ldquo;Gayatri Technology started with a simple observation in Rajkot: growing
                businesses were spending good money on software that created more work instead of less.
                Generic templates and off-the-shelf software forced people into unnatural workflows.&rdquo;
              </p>
              <p>
                &ldquo;We take personal responsibility for every system we build. You talk directly
                to the people designing and coding your application, and we stick with you until it
                actually runs smoothly in your daily operations.&rdquo;
              </p>
            </div>

            {/* Signed Footer */}
            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-3.5">
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-2xl bg-[#091C0F] text-[#86EFAC] font-display font-black flex items-center justify-center text-sm sm:text-base border-2 border-[#47C56E]/40 shadow-xs shrink-0">
                  PR
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#091C0F] font-display">Parth Raval</h4>
                  <p className="text-xs text-[#00875A] font-semibold">Founder &amp; Lead Software Engineer</p>
                </div>
              </div>

              {/* Direct access phone & whatsapp */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                <a
                  href="tel:+919328437392"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white border border-[#E2E8F0] hover:border-[#091C0F] text-xs font-bold text-[#091C0F] transition-all min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00875A]" />
                  <span>+91 93284 37392</span>
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-bold text-[#128C7E] hover:bg-[#25D366]/20 transition-all min-h-[44px]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Reassurances */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block font-mono">
              DIRECT ACCOUNTABILITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#091C0F] font-display leading-tight">
              Engineers who care about your balance sheet, not billable hours.
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Every project is backed by direct lead engineer access, transparent milestone billing,
              a 30-day on-floor warranty, and 100% source code ownership.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-2.5 text-xs text-[#091C0F] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
                <span>100% Source code handover upon project completion</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-2.5 text-xs text-[#091C0F] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
                <span>Zero recurring per-user software licensing taxes</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-2.5 text-xs text-[#091C0F] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
                <span>30-Day post-deployment floor adoption warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Principles Condensed: Compact 4-Column Horizontal Strip */}
        <div className="pt-6 border-t border-[#E2E8F0]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-[#00875A] uppercase tracking-wider">
                OUR ENGINEERING PRINCIPLES
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] font-display mt-0.5">
                Four rules behind every system we ship
              </h3>
            </div>
            <Link
              href="/about"
              className="text-xs font-bold text-[#00875A] hover:text-[#091C0F] inline-flex items-center gap-1 transition-colors"
            >
              <span>Read Our Full Philosophy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {compactPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAFCFF] border border-[#E2E8F0] space-y-1.5 hover:border-[#47C56E]/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#00875A] bg-[#47C56E]/12 px-2 py-0.5 rounded border border-[#47C56E]/20">
                    {item.num}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#47C56E]" />
                </div>
                <h4 className="text-sm font-bold text-[#091C0F] font-display">
                  {item.title}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
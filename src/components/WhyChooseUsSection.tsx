"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";

const principles = [
  {
    num: "01",
    title: "Understand Before Building",
    desc: "We don't write a single line of code until we understand how your business makes money, where bottlenecks happen, and what information your team needs every day.",
  },
  {
    num: "02",
    title: "Build For The Workflow",
    desc: "Software should adapt to the way your business already operates, not force your team to abandon working habits just to fit into rigid software templates.",
  },
  {
    num: "03",
    title: "Keep It Practical",
    desc: "Technology should solve a real operational headache. We eliminate unnecessary complexity so warehouse staff, operators, and managers can use it without resistance.",
  },
  {
    num: "04",
    title: "Build For The Long Term",
    desc: "We build with proven, standard frameworks and clean architecture so your system stays fast, secure, and maintainable as your business expands.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="screen-container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Founder Accountability Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="border-b border-[#E2E8F0] pb-4">
              <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider block font-display">
                FOUNDER COMMITMENT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#091C0F] mt-1 font-display">
                Engineers who care about business outcomes
              </h3>
            </div>

            <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
              <p>
                &ldquo;Gayatri Technology started with a simple observation in Rajkot: growing
                businesses were spending money on software that created more work instead of less.
                Generic templates and off-the-shelf software forced people into unnatural workflows.&rdquo;
              </p>
              <p>
                &ldquo;We take personal responsibility for every system we build. You talk directly
                to the people designing and coding your application, and we stick with you until it
                actually runs smoothly in your daily operations.&rdquo;
              </p>
            </div>

            {/* Founder Profile Card */}
            <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#091C0F] text-[#86EFAC] font-display font-extrabold flex items-center justify-center text-sm border-2 border-[#47C56E]/40">
                  PR
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#091C0F] font-display">Parth Raval</h4>
                  <p className="text-xs text-[#00875A] font-semibold">Founder &amp; Lead Engineer</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-[#64748B] bg-[#F8FAFC] px-3 py-1.5 rounded-full border border-[#E2E8F0]">
                <MapPin className="w-3.5 h-3.5 text-[#00875A]" />
                <span>Rajkot, Gujarat</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-[#F0FDF4] text-[#00875A] border border-[#86EFAC]/50 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#DCFCE7] transition-colors"
              >
                <span>Read Our Story &amp; Principles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-[#075E54] text-xs font-bold px-3 py-2.5 rounded-xl hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Talk on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Practical Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
                HOW WE OPERATE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#091C0F] tracking-tight font-display">
                Four principles behind every line of code
              </h2>
              <p className="text-sm sm:text-base text-[#475569] mt-2">
                We measure our success by whether your business runs faster and with fewer errors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {principles.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2.5 shadow-2xs hover:border-[#47C56E]/60 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00875A] bg-[#47C56E]/12 px-2.5 py-1 rounded-md border border-[#47C56E]/20">
                      {item.num}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#47C56E]" />
                  </div>
                  <h3 className="text-base font-bold text-[#091C0F] font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#64748B]">
              <ShieldCheck className="w-4 h-4 text-[#00875A] shrink-0" />
              <span>Full source code handover &bull; No proprietary lock-in &bull; Direct founder oversight</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


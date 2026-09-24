"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="screen-container">
        <div className="bg-[#091C0F] text-[#E2E8F0] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 border border-[#47C56E]/20">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#47C56E]/15 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-2xl">
            <span className="text-[#86EFAC] font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
              GET STARTED
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2 sm:mb-3 font-display">
              Have a Business Requirement?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#E2E8F0]/85 leading-relaxed">
              Let&apos;s turn your idea into a digital solution built specifically for your business.
            </p>
          </div>

          <div className="flex flex-col min-[480px]:flex-row items-stretch min-[480px]:items-center gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#47C56E] text-[#091C0F] px-6 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold hover:bg-[#3db863] transition-all active:scale-95 shadow-lg shadow-[#47C56E]/30 group min-h-[48px]"
            >
              <span>Start a Conversation</span>
              <MessageSquare className="w-4 h-4 text-[#091C0F]" />
            </Link>

            <a
              href="mailto:info@gayatritechnology.in?subject=New%20Business%20Requirement%20%7C%20Gayatri%20Technology&body=Hello%20Gayatri%20Technology%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20our%20business%20requirements%20for%20an%20upcoming%20project.%0A%0AProject%20Overview%3A%20%0ATimeline%3A%20%0AContact%20Number%3A%20"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-[#163820] hover:border-[#47C56E]/50 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-bold hover:bg-white/5 transition-colors cursor-pointer min-h-[48px]"
            >
              <span>Tell Us Your Requirement</span>
              <ArrowRight className="w-4 h-4 text-[#47C56E]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

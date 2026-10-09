"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function CtaBanner() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="screen-container">
        <div className="bg-[#091C0F] text-[#E2E8F0] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 border border-[#47C56E]/20">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#47C56E]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-gentle" />

          <div className="max-w-2xl space-y-2">
            <span className="text-[#86EFAC] font-bold text-xs uppercase tracking-wider block font-mono">
              LET&apos;S TALK
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              Have a business problem that software could solve?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#E2E8F0]/85 leading-relaxed">
              Tell us what you&apos;re trying to build or what isn&apos;t working today. We&apos;ll help
              you figure out what makes sense.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
              <a
                href={`tel:${siteConfig.contact.telephone.replace(/\s+/g, "")}`}
                className="hover:text-[#47C56E] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#47C56E]" />
                <span>{siteConfig.contact.telephone}</span>
              </a>
              <span>&bull;</span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-[#47C56E] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#47C56E]" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <span>&bull;</span>
              <span>Rajkot, Gujarat</span>
            </div>
          </div>

          <div className="flex flex-col min-[480px]:flex-row items-stretch min-[480px]:items-center gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#47C56E] text-[#091C0F] px-6 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold hover:bg-[#3db863] transition-all active:scale-95 shadow-lg shadow-[#47C56E]/30 group min-h-[48px] btn-shimmer"
            >
              <span>Tell Us What You Need</span>
              <ArrowRight className="w-4 h-4 text-[#091C0F] group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366]/20 text-[#86EFAC] border border-[#25D366]/40 hover:bg-[#25D366]/30 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-bold transition-colors cursor-pointer min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Talk on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


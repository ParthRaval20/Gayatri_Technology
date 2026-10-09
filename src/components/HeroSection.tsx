"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 custom-grid-bg border-b border-[#E2E8F0]"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(71,197,110,0.12),transparent_70%)] pointer-events-none -z-10" />

      <div className="screen-container max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-xs sm:text-sm font-bold shadow-xs animate-fade-in-down">
          <span className="w-2 h-2 rounded-full bg-[#47C56E] animate-pulse shrink-0" />
          <span>Founder-Led Software Company • Rajkot, Gujarat</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#091C0F] tracking-tight leading-[1.12] font-display animate-fade-in-up delay-75">
          Software built around the way your business{" "}
          <span className="text-[#00875A] relative inline-block">
            actually works.
            <span className="absolute bottom-1 left-0 w-full h-3 bg-[#47C56E]/20 -z-10 rounded-full" />
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-150">
          We build custom websites, ERP systems, business applications and digital products for
          growing businesses. Instead of forcing your workflow into generic software, we build
          around the way your team actually works.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 animate-fade-in-up delay-200">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#47C56E] text-[#091C0F] px-8 py-4 rounded-full text-base font-bold shadow-md shadow-[#47C56E]/25 hover:bg-[#3db863] hover:shadow-lg hover:shadow-[#47C56E]/35 transition-all duration-200 active:scale-95 group min-h-[50px] btn-shimmer"
          >
            <span>Tell Us What You Need</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#091C0F] border border-[#E2E8F0] px-7 py-4 rounded-full text-base font-bold hover:bg-[#F0FDF4] hover:border-[#47C56E]/50 transition-all duration-200 shadow-xs min-h-[50px] hover:-translate-y-0.5"
          >
            <Eye className="w-4 h-4 text-[#00875A]" />
            <span>See Our Work</span>
          </Link>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-4 rounded-full text-base font-bold hover:bg-[#20ba59] transition-all shadow-md shadow-[#25D366]/20 min-h-[50px] hover:-translate-y-0.5"
            aria-label="Chat with Gayatri Technology on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Reassurance commitments */}
        <div className="flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs sm:text-sm text-[#475569] pt-6 border-t border-[#E2E8F0]/70 max-w-3xl mx-auto animate-fade-in delay-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
            <span>Direct communication with engineers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
            <span>Full code &amp; data ownership</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
            <span>Factory &amp; mobile ready</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
            <span>Rooted in Rajkot • Serving businesses across India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

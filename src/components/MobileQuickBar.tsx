"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Calendar, ArrowRight, X } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function MobileQuickBar() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {/* Minimized Floating Trigger for Tablets and Desktop */}
      {isMinimized ? (
        <aside
          aria-label="Quick contact trigger"
          className="hidden sm:flex fixed bottom-5 right-5 z-40 items-center gap-2"
        >
          <button
            type="button"
            onClick={() => setIsMinimized(false)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#091C0F] text-white text-xs font-bold shadow-lg shadow-black/20 hover:bg-[#163820] border border-[#163820] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Open quick contact bar"
            title="Open quick contact bar"
          >
            <span className="w-2 h-2 rounded-full bg-[#47C56E] animate-pulse" />
            <span>Quick Connect</span>
            <span className="text-[#86EFAC] text-xs font-mono ml-0.5">↑</span>
          </button>
        </aside>
      ) : (
        /* Universal Responsive Sticky / Floating Quick Bar */
        <aside
          aria-label="Quick action bar"
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] shadow-[0_-4px_24px_rgba(0,0,0,0.08)] px-2.5 pt-2 pb-[max(8px,calc(var(--sab)+8px))] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:bottom-4 md:bottom-5 lg:bottom-6 sm:w-auto sm:max-w-xl lg:max-w-3xl sm:rounded-full sm:border sm:border-slate-200/90 sm:shadow-[0_12px_40px_rgba(9,28,15,0.12)] sm:px-3 sm:py-2 lg:px-4 lg:py-2.5 flex items-center justify-between sm:justify-center gap-1.5 sm:gap-2.5 transition-all duration-300"
        >
          {/* 1. Phone Call Action */}
          <a
            href={`tel:${siteConfig.contact.telephone.replace(/\s+/g, "")}`}
            className="flex items-center justify-center gap-1.5 h-11 px-3 sm:px-3.5 rounded-full border border-slate-200 bg-white text-[#091C0F] text-xs font-bold hover:bg-[#F0FDF4] hover:border-[#47C56E]/60 transition-all shrink-0 active:scale-95 shadow-2xs group"
            aria-label={`Call Gayatri Technology at ${siteConfig.contact.telephone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#00875A] shrink-0 group-hover:rotate-12 transition-transform duration-200" />
            <span className="shrink-0">Call</span>
            <span className="hidden xl:inline text-[11px] font-medium text-slate-500">
              ({siteConfig.contact.telephone})
            </span>
          </a>

          {/* 2. WhatsApp Direct Action */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 h-11 px-3 sm:px-4 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all shrink-0 active:scale-95 shadow-xs group"
            aria-label="Chat with Gayatri Technology on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0 group-hover:scale-110 transition-transform duration-200" />
            <span className="shrink-0">WhatsApp</span>
            <span className="hidden lg:inline text-[11px] font-medium text-white/90">
              Chat
            </span>
          </a>

          {/* 3. Primary Requirement Intake CTA */}
          <Link
            href="/contact"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 h-11 min-w-0 px-3 sm:px-4 lg:px-5 rounded-full bg-[#47C56E] text-[#091C0F] text-xs font-bold shadow-md shadow-[#47C56E]/20 hover:bg-[#3db863] transition-all active:scale-95 text-center group truncate"
          >
            <Calendar className="w-3.5 h-3.5 text-[#091C0F] shrink-0" />
            {/* Adaptive text: compact label on narrow mobile (<390px), full on standard mobile and desktop */}
            <span className="hidden xs:inline truncate">Tell Us What You Need</span>
            <span className="xs:hidden">Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#091C0F] shrink-0 group-hover:translate-x-1 transition-transform hidden sm:inline" />
          </Link>

          {/* 4. Desktop & Tablet Minimize Button */}
          <button
            type="button"
            onClick={() => setIsMinimized(true)}
            className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors ml-0.5 shrink-0 cursor-pointer"
            aria-label="Minimize quick action bar"
            title="Minimize"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}
    </>
  );
}

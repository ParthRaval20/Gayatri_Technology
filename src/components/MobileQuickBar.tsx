"use client";

import React from "react";
import Link from "next/link";
import { Phone, Calendar, ArrowRight } from "lucide-react";

export default function MobileQuickBar() {
  return (
    <aside
      aria-label="Mobile quick action bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] px-4 pt-2.5 pb-[calc(env(safe-area-inset-bottom,0px)+14px)] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] flex items-center justify-between gap-2.5"
    >
      <a
        href="tel:+919328437392"
        className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full border border-[#E2E8F0] bg-white text-[#091C0F] text-xs font-bold hover:bg-[#F0FDF4] transition-colors shrink-0 min-h-[44px]"
        aria-label="Call Gayatri Technology at +91 93284 37392"
      >
        <Phone className="w-3.5 h-3.5 text-[#00875A]" />
        <span>Call</span>
      </a>

      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#47C56E] text-[#091C0F] text-xs font-bold shadow-md shadow-[#47C56E]/25 hover:bg-[#3db863] transition-all active:scale-95 min-h-[44px]"
      >
        <Calendar className="w-3.5 h-3.5 text-[#091C0F]" />
        <span>Let&apos;s Talk — Project Scope</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </aside>
  );
}

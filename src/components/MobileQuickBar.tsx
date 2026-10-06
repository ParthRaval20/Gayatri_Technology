"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Calendar } from "lucide-react";

export default function MobileQuickBar() {
  return (
    <aside
      aria-label="Mobile quick action bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] px-3 pt-2 pb-[calc(env(safe-area-inset-bottom,0px)+10px)] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] flex items-center justify-between gap-2"
    >
      <a
        href="tel:+919328437392"
        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border border-[#E2E8F0] bg-white text-[#091C0F] text-xs font-bold hover:bg-[#F0FDF4] transition-colors shrink-0 min-h-[44px]"
        aria-label="Call Gayatri Technology at +91 93284 37392"
      >
        <Phone className="w-3.5 h-3.5 text-[#00875A]" />
        <span>Call</span>
      </a>

      <a
        href="https://wa.me/919328437392"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all shrink-0 min-h-[44px] shadow-xs"
        aria-label="Chat with Gayatri Technology on WhatsApp"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-full bg-[#47C56E] text-[#091C0F] text-xs font-bold shadow-md shadow-[#47C56E]/20 hover:bg-[#3db863] transition-all active:scale-95 min-h-[44px] text-center"
      >
        <Calendar className="w-3.5 h-3.5 text-[#091C0F] shrink-0" />
        <span className="truncate">Tell Us What You Need</span>
      </Link>
    </aside>
  );
}

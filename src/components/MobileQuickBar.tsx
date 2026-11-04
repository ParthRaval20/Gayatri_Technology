"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function MobileQuickBar() {
  const pathname = usePathname();

  // Hide completely on the contact page
  if (pathname === "/contact") {
    return null;
  }

  return (
    <aside
      aria-label="Mobile quick action bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-paper/95 backdrop-blur-md border-t border-rule shadow-[0_-4px_24px_rgba(0,0,0,0.08)] px-2.5 pt-2 pb-[max(8px,calc(var(--sab)+8px))] flex items-center justify-between gap-1.5 transition-all duration-300"
    >
      {/* 1. Phone Call Action */}
      <a
        href={`tel:${siteConfig.contact.telephone.replace(/\s+/g, "")}`}
        className="flex items-center justify-center gap-1.5 h-11 px-3 rounded-full border border-rule bg-paper text-ink text-xs font-bold hover:bg-paper-2 hover:border-accent/60 transition-all shrink-0 active:scale-95 shadow-2xs group"
        aria-label={`Call Gayatri Technology at ${siteConfig.contact.telephone}`}
      >
        <Phone className="w-3.5 h-3.5 text-accent shrink-0 group-hover:rotate-12 transition-transform duration-200" />
        <span className="shrink-0">Call</span>
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
      </a>

      {/* 3. Primary Requirement Intake CTA */}
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-1.5 h-11 min-w-0 px-3 rounded-full bg-accent hover:bg-accent-light text-white text-xs font-bold shadow-md shadow-accent/20 transition-all active:scale-95 text-center group truncate"
      >
        <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
        <span className="hidden xs:inline truncate">Tell Us What You Need</span>
        <span className="xs:hidden">Let&apos;s Talk</span>
        <ArrowRight className="w-3.5 h-3.5 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
      </Link>
    </aside>
  );
}

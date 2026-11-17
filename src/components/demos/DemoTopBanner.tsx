"use client";

import React, { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowLeft, MessageSquareCode } from "lucide-react";

interface DemoTopBannerProps {
  demoTitle: string;
  industry: string;
  whatsappMessage: string;
  previewUrl?: string;
}

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.self !== window.top ||
    window.location.search.includes("preview=true") ||
    window.location.search.includes("embed=1")
  );
}

function getServerSnapshot(): boolean {
  return false;
}

export default function DemoTopBanner({
  demoTitle,
  industry,
  whatsappMessage,
}: DemoTopBannerProps) {
  const isInsideIframe = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (isInsideIframe) {
    return null;
  }

  const whatsappUrl = `https://wa.me/919328437392?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <aside
      id="demo-top-banner"
      aria-label="Demo Navigation Bar"
      className="relative z-50 w-full bg-[#07170C]/95 backdrop-blur-md text-white border-b border-[#1C4D29] shadow-sm px-2.5 sm:px-6 py-2"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 text-xs">
        {/* Left: Back Link & Demo Identifier */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
          <Link
            href="/demos"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-[#122E1A] hover:bg-[#1C4D29] text-emerald-300 font-semibold transition-colors border border-[#1C4D29] min-h-[44px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            title="Return to Gayatri Technology Demo Gallery"
            aria-label="Return to All Demos Gallery"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-bold">All Demos</span>
            <span className="sm:hidden font-bold text-[11px]">Hub</span>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-800/60 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>LIVE DEMO</span>
            </span>
            <span className="font-bold text-white truncate max-w-[200px] min-[380px]:max-w-[260px] sm:max-w-[420px]">
              {demoTitle}
            </span>
            <span className="hidden md:inline text-slate-300 text-[11px] truncate">
              &bull; {industry}
            </span>
          </div>
        </div>

        {/* Right: WhatsApp Conversion CTA */}
        <div className="flex items-center shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[#00875A] hover:bg-[#00704A] text-white font-bold transition-all shadow-xs hover:shadow-sm min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 text-xs shrink-0"
            aria-label="Get a website like this (opens WhatsApp in new tab)"
          >
            <MessageSquareCode className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Get a Website Like This</span>
            <span className="sm:hidden text-[11px] font-bold">Get This Site</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

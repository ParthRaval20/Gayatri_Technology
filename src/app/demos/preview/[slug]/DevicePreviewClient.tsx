"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  ArrowLeft,
  MessageSquareCode,
  RotateCcw,
  ChevronDown,
  UtensilsCrossed,
  Briefcase,
  Scissors,
  GraduationCap,
  Check,
} from "lucide-react";
import { DemoItem, DEMOS_DATA } from "@/lib/demos-data";

interface DevicePreviewClientProps {
  demo: DemoItem;
}

type DeviceMode = "desktop" | "tablet" | "mobile";

export default function DevicePreviewClient({ demo }: DevicePreviewClientProps) {
  const [device, setDevice] = useState<DeviceMode>("desktop");
  const [key, setKey] = useState(0); // To reload iframe if needed
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/919328437392?text=${encodeURIComponent(demo.whatsappMessage)}`;

  // Close dropdown on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && switcherOpen) {
        setSwitcherOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSwitcherOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [switcherOpen]);

  // Determine container width style
  const getDeviceStyle = () => {
    switch (device) {
      case "mobile":
        return "w-[390px] h-[820px] rounded-[42px] border-[10px] border-slate-900 shadow-2xl my-6";
      case "tablet":
        return "w-[768px] h-[920px] rounded-[32px] border-[10px] border-slate-900 shadow-2xl my-6";
      case "desktop":
      default:
        return "w-full h-full border-0 rounded-none shadow-none my-0";
    }
  };

  return (
    <div className="flex flex-col h-screen h-[100dvh] bg-[#091C0F] text-white overflow-hidden select-none">
      {/* Top Agency Sandbox Bar (WCAG 2.1 AA Compliant with >=44px touch targets) */}
      <header className="h-16 sm:h-18 bg-[#07170C]/95 backdrop-blur-md border-b border-[#1C4D29] px-2 sm:px-4 md:px-6 flex items-center justify-between gap-2 sm:gap-4 shrink-0 z-30">
        {/* Left: Hub Link & Demo Switcher Dropdown */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
          <Link
            href="/demos"
            className="min-h-[44px] inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-xl bg-[#122E1A] hover:bg-[#1C4D29] text-emerald-300 font-semibold text-xs transition-colors border border-[#1C4D29] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            title="Return to Gayatri Technology Demo Gallery"
            aria-label="Return to all interactive demos"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline font-bold">All Demos</span>
            <span className="sm:hidden text-[11px] font-bold">Hub</span>
          </Link>

          {/* Demo Dropdown Switcher */}
          <div className="relative shrink min-w-0" ref={dropdownRef}>
            <button
              onClick={() => setSwitcherOpen(!switcherOpen)}
              aria-haspopup="listbox"
              aria-expanded={switcherOpen}
              aria-label={`Current demo: ${demo.title}. Click to switch demo.`}
              className="min-h-[44px] flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 rounded-xl bg-[#122E1A]/90 hover:bg-[#1C4D29] text-white text-xs font-semibold border border-[#1C4D29] transition-all cursor-pointer truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate max-w-[110px] min-[380px]:max-w-[150px] sm:max-w-[220px] md:max-w-[280px] font-bold">
                {demo.title}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-emerald-400 shrink-0 transition-transform duration-200 ${
                  switcherOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {switcherOpen && (
              <div
                role="listbox"
                aria-label="Available industry website demos"
                className="absolute left-0 mt-2 w-72 sm:w-80 rounded-2xl bg-[#0B2113] border border-[#1C4D29] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between text-[10px] uppercase font-mono font-bold text-slate-400 px-3 py-1.5 border-b border-[#1C4D29]/60 mb-1">
                  <span>Switch Active Prototype</span>
                  <span className="text-emerald-400">4 Demos</span>
                </div>
                {DEMOS_DATA.map((d) => {
                  const isCurrent = d.id === demo.id;
                  return (
                    <Link
                      key={d.id}
                      href={d.previewUrl}
                      role="option"
                      aria-selected={isCurrent}
                      onClick={() => setSwitcherOpen(false)}
                      className={`min-h-[44px] flex items-center justify-between gap-2 p-2.5 rounded-xl text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                        isCurrent
                          ? "bg-[#1C4D29] text-white font-bold shadow-xs"
                          : "text-slate-300 hover:bg-[#122E1A] hover:text-white"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="font-semibold truncate flex items-center gap-1.5">
                          {d.id === "restaurant" && <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                          {d.id === "b2b" && <Briefcase className="w-3.5 h-3.5 text-indigo-400 shrink-0" />}
                          {d.id === "salon" && <Scissors className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                          {d.id === "preschool" && <GraduationCap className="w-3.5 h-3.5 text-orange-400 shrink-0" />}
                          <span className="truncate">{d.title}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                          {d.categoryLabel} &bull; {d.technicalSpecs[1]?.value || "Fast"}
                        </div>
                      </div>
                      {isCurrent && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Center: Device Viewport Switcher (Responsive on all screen sizes) */}
        <div
          role="group"
          aria-label="Device viewport preview mode"
          className="flex items-center gap-1 bg-[#051108] p-1 rounded-xl border border-[#1C4D29] shrink-0"
        >
          <button
            onClick={() => setDevice("desktop")}
            aria-pressed={device === "desktop"}
            className={`min-h-[38px] flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
              device === "desktop"
                ? "bg-[#00875A] text-white shadow-xs font-bold"
                : "text-slate-400 hover:text-white"
            }`}
            title="Desktop 100% Fluid View"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Desktop</span>
          </button>

          <button
            onClick={() => setDevice("tablet")}
            aria-pressed={device === "tablet"}
            className={`min-h-[38px] flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
              device === "tablet"
                ? "bg-[#00875A] text-white shadow-xs font-bold"
                : "text-slate-400 hover:text-white"
            }`}
            title="Tablet Chassis (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Tablet</span>
          </button>

          <button
            onClick={() => setDevice("mobile")}
            aria-pressed={device === "mobile"}
            className={`min-h-[38px] flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
              device === "mobile"
                ? "bg-[#00875A] text-white shadow-xs font-bold"
                : "text-slate-400 hover:text-white"
            }`}
            title="Mobile Chassis (390px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Mobile</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Reload simulator */}
          <button
            onClick={() => setKey((k) => k + 1)}
            aria-label="Reload demo frame"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-slate-400 hover:text-white hover:bg-[#122E1A] transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            title="Reload Demo View"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Open full screen standalone */}
          <Link
            href={demo.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open demo in a new browser tab"
            className="hidden sm:inline-flex min-h-[44px] items-center gap-1.5 px-3 py-2 rounded-xl bg-[#122E1A] hover:bg-[#1C4D29] text-slate-200 text-xs font-semibold transition-colors border border-[#1C4D29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            title="Open Demo in Fullscreen Tab"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden lg:inline">Fullscreen</span>
          </Link>

          {/* Primary High-Converting CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discuss getting a website like this on WhatsApp"
            className="min-h-[44px] inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[#00875A] hover:bg-[#00704A] text-white text-xs font-bold transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shrink-0"
          >
            <MessageSquareCode className="w-4 h-4 shrink-0" />
            <span className="hidden min-[480px]:inline">Get This Site</span>
            <span className="min-[480px]:hidden">Order</span>
          </a>
        </div>
      </header>

      {/* Simulator Viewport Container */}
      <main className="flex-1 bg-[#06140A] flex items-center justify-center overflow-auto p-0 md:p-4">
        <div
          className={`transition-all duration-300 ease-in-out bg-white overflow-hidden relative ${getDeviceStyle()}`}
        >
          {/* Mobile Speaker Notch Simulation */}
          {device === "mobile" && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-40 pointer-events-none" />
          )}

          {/* Tablet Camera Dot Simulation */}
          {device === "tablet" && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-800 rounded-full z-40 pointer-events-none" />
          )}

          <iframe
            key={key}
            src={`${demo.liveUrl}?preview=true`}
            title={demo.title}
            className="w-full h-full border-0 select-auto"
          />
        </div>
      </main>
    </div>
  );
}

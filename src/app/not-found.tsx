import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Home, ArrowLeft, Briefcase, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The requested page could not be found on Gayatri Technology. Return to our home page to explore custom web development, enterprise solutions, and portfolio projects.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#07170C] text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163820] text-[#86EFAC] text-xs font-semibold border border-[#47C56E]/30">
            <span>ERROR 404 • RESOURCE NOT LOCATED</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#47C56E] tracking-tight font-display">
            404
          </h1>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Page Not Found
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              The page or resource you are looking for has been relocated, renamed, or is temporarily unavailable. Let&apos;s get you back on track.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#47C56E] hover:bg-[#3bb560] text-[#091C0F] text-sm font-bold transition-all shadow-lg shadow-[#47C56E]/20"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/10 transition-all"
            >
              <Briefcase className="w-4 h-4" />
              <span>Explore Projects</span>
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-medium border border-white/5 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#47C56E] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to previous view</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

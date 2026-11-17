"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DemoTopBanner from "@/components/demos/DemoTopBanner";
import {
  X,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Play,
  MessageCircle,
  Loader2,
} from "lucide-react";

export default function PreschoolDemoPage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tourSubmitted, setTourSubmitted] = useState(false);
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [childAgeGroup, setChildAgeGroup] = useState("Creative Kids (2.5 – 4 Yrs)");
  const [preferredDay, setPreferredDay] = useState("Tomorrow Morning (10:00 AM)");
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Close tour modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isTourModalOpen) {
        setIsTourModalOpen(false);
        setTourSubmitted(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTourModalOpen]);

  // Doherty Threshold (< 400ms immediate visual feedback)
  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !parentPhone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setTourSubmitted(true);
    }, 350);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3] text-[#1E293B] font-sans antialiased selection:bg-[#FF7834] selection:text-white">
      {/* Gayatri Tech Global Demo Banner */}
      <DemoTopBanner
        demoTitle="Little Bloom International Preschool"
        industry="Early Childhood Education & Daycare"
        previewUrl="/demos/preview/preschool"
        whatsappMessage="Hello Gayatri Technology, I saw the Little Bloom Preschool Demo on your website. I want a website like this for our school."
      />

      {/* FULL-WIDTH IMMERSIVE HERO WITH SKY, CLOUDS & LUSH GREEN HILL */}
      <div className="relative overflow-hidden bg-linear-to-b from-[#3B9DF8] via-[#52ACFD] to-[#5DB5FD] text-white">
        {/* Soft atmospheric cloud puffs */}
        <div className="absolute top-6 left-12 w-32 h-12 bg-white/20 rounded-full blur-md pointer-events-none" />
        <div className="absolute top-16 right-24 w-44 h-16 bg-white/25 rounded-full blur-md pointer-events-none" />
        <div className="absolute top-36 left-1/3 w-28 h-10 bg-white/15 rounded-full blur-sm pointer-events-none" />

        {/* Header Navigation */}
        <header className="relative z-40 max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo with Cute Chick Mascot */}
          <a
            href="#"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl p-1"
          >
            <span className="w-10 h-10 rounded-2xl bg-white text-[#FF7834] flex items-center justify-center text-xl font-black shadow-md group-hover:rotate-6 transition-transform">
              🐥
            </span>
            <div>
              <span className="text-2xl font-black tracking-tight text-white block leading-none font-display">
                Little Bloom
              </span>
              <span className="text-[10px] font-bold text-white/80 tracking-widest uppercase block mt-1">
                Preschool &bull; Est. 2016
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-white/95">
            <a
              href="#about"
              className="hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-1.5 py-0.5"
            >
              About Us
            </a>
            <a
              href="#programs"
              className="hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-1.5 py-0.5"
            >
              Programs
            </a>
            <a
              href="#features"
              className="hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-1.5 py-0.5"
            >
              More Than Childcare
            </a>
            <a
              href="#activities"
              className="hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-1.5 py-0.5"
            >
              Activities
            </a>
            <a
              href="#testimonials"
              className="hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-1.5 py-0.5"
            >
              Reviews
            </a>
          </nav>

          {/* Right Action Button (Fitts's Law >= 44px) */}
          <button
            onClick={() => setIsTourModalOpen(true)}
            className="min-h-[44px] px-6 py-2.5 rounded-full bg-[#FF7834] hover:bg-[#F26720] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-orange-600/30 hover:scale-105 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            Book a Tour
          </button>
        </header>

        {/* Hero Canvas: Text in Sky & Cardboard Airplane on Hill */}
        <section className="relative z-30 pt-6 pb-4 sm:pt-10 sm:pb-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Top Text floating in Sky */}
            <div className="max-w-xl space-y-4 mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] font-display text-white drop-shadow-xs">
                Where Little <br />
                Minds Shine <br />
                <span className="text-[#FEF08A] underline decoration-wavy decoration-[#FF7834]">
                  Bright!
                </span>
              </h1>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium max-w-md">
                A warm, playful early learning sanctuary blending Montessori sensory inquiry with gentle, certified childcare.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsTourModalOpen(true)}
                  className="min-h-[44px] px-7 py-3.5 rounded-full bg-[#FF7834] hover:bg-[#F26720] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-orange-600/40 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                >
                  <span>Explore Programs</span>
                </button>
              </div>
            </div>

            {/* Immersive Green Hill Meadow Composite */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 aspect-16/9 sm:aspect-21/9 bg-[#419E47]">
              {/* Background Landscape Photo: Grass, daisies & happy child */}
              <Image
                src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1600&q=80"
                alt="Child playing happily outdoors in sunny green grass"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />

              {/* Floating Grass Badge 1: Left Certified Teachers */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-lg flex items-center gap-2 text-xs font-bold text-[#1E293B]">
                <ShieldCheck className="w-4 h-4 text-[#25A169]" />
                <span>100% Certified Teachers</span>
              </div>

              {/* Floating Grass Badge 2: Center 500+ Happy Families */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:top-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-xl flex items-center gap-2 text-xs font-bold text-[#1E293B]">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <div className="w-5 h-5 rounded-full bg-amber-400 border border-white flex items-center justify-center text-[9px] font-black">A</div>
                  <div className="w-5 h-5 rounded-full bg-sky-400 border border-white flex items-center justify-center text-[9px] font-black">K</div>
                  <div className="w-5 h-5 rounded-full bg-emerald-400 border border-white flex items-center justify-center text-[9px] font-black">R</div>
                </div>
                <span>500+ Happy Families</span>
              </div>

              {/* Floating Grass Badge 3: Right Inset Video Card */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-amber-100 max-w-[210px]">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 group cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=150&q=80"
                    alt="Classroom blocks video"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                </div>
                <div className="text-left text-[11px] leading-tight">
                  <span className="font-extrabold text-[#1E293B] block">Interactive STEM</span>
                  <span className="text-[#FF7834] font-bold text-[10px] block mt-0.5">Watch Campus Video</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scalloped Cloud Wave Transition */}
        <div className="w-full overflow-hidden leading-none z-20">
          <svg
            className="relative block w-full h-14 sm:h-20 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,90 350,-40 500,60 C650,150 900,-30 1200,40 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* SECTION 2: STATS STRIP (SITTING IN THE WHITE CLOUD) */}
      <section className="bg-white py-6 sm:py-8 border-b border-[#F0EBE5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl sm:text-5xl font-black text-[#0284C7] font-display">10</div>
              <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1">Years of Care</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black text-[#FF7834] font-display">500+</div>
              <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black text-[#8B5CF6] font-display">25+</div>
              <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1">Expert Teachers</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "A Happy Place to Learn, Play & Grow" (ABOUT) */}
      <section id="about" className="py-16 sm:py-24 bg-[#FFF8F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            {/* Left: Heading */}
            <div className="lg:col-span-4 space-y-3 text-center lg:text-left">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#FF7834]">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-snug font-display">
                A Happy Place to Learn, Play &amp; Grow
              </h2>
            </div>

            {/* Center: Overlapping Kids Tilted Photo Cards + Perched Owl */}
            <div className="lg:col-span-4 flex justify-center relative">
              <div className="relative w-64 h-72 sm:w-72 sm:h-80">
                {/* Back Photo (children reading) */}
                <div className="absolute top-0 left-0 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-lg border-4 border-white -rotate-6 bg-amber-100 z-10">
                  <Image
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
                    alt="Child reading picture book"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>

                {/* Front Overlapping Photo (playing with blocks) */}
                <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-3 bg-emerald-100 z-20">
                  <Image
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=500&q=80"
                    alt="Children building with colorful blocks"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                  {/* Owl Mascot Perched on the top right */}
                  <div className="absolute top-2 right-2 text-2xl z-30 drop-shadow-md">
                    🦉
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative Text & Action Button */}
            <div className="lg:col-span-4 space-y-5 text-center lg:text-left">
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                At Little Bloom, we believe every child learns differently. Our caring educators create a safe and inspiring environment where natural curiosity leads to joyful learning, friendships bloom naturally, and every milestone is celebrated.
              </p>
              <div>
                <button
                  onClick={() => setIsTourModalOpen(true)}
                  className="min-h-[44px] px-6 py-2.5 rounded-full bg-[#FF7834] hover:bg-[#F26720] text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7834] focus-visible:ring-offset-2"
                >
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: "Little Minds, Big Discoveries" (3 PASTEL CARDS WITH ARCHED/CIRCULAR CUTOUTS) */}
      <section id="programs" className="py-16 sm:py-24 bg-white border-y border-[#F0EBE5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#FF7834]">
              ACADEMIC PATHWAYS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight font-display mt-1">
              Little Minds, Big Discoveries
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Three age-calibrated developmental programs designed with Montessori &amp; Scandinavian early learning principles.
            </p>
          </div>

          {/* 3 Pastel Program Cards with Exact Reference Cutouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: Little Explorers (Soft Aqua/Mint + Circular Cutout + Fox Mascot) */}
            <div className="bg-[#CEF0E3] rounded-3xl p-6 sm:p-7 border border-emerald-200/60 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between relative group">
              {/* Mascot perched on circular frame */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-3xl z-20">
                🦊
              </div>

              <div className="space-y-4 pt-4 text-center">
                {/* Circular Photo Cutout Frame */}
                <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
                    alt="Toddler in colorful sensory ball pit"
                    fill
                    sizes="144px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#25A169] text-white">
                    Age 1.5 – 2.5 Years
                  </span>
                  <h3 className="text-xl font-black text-[#1E293B] font-display pt-2">
                    Little Explorers
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed pt-1">
                    Sensory discovery, early balance, language emergence, and gentle peer socialization.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-emerald-300/40 text-center">
                <button
                  onClick={() => {
                    setChildAgeGroup("Little Explorers (1.5 – 2.5 Yrs)");
                    setIsTourModalOpen(true);
                  }}
                  className="w-full min-h-[44px] py-2.5 rounded-full bg-white hover:bg-[#1E293B] hover:text-white text-[#1E293B] font-bold text-xs transition-colors shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25A169]"
                >
                  Select Program
                </button>
              </div>
            </div>

            {/* Card 2: Creative Kids (Soft Lilac + Arched Cutout + Squirrel Mascot - Slightly Raised) */}
            <div className="bg-[#E2D6F8] rounded-3xl p-6 sm:p-7 border border-purple-200/60 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group md:-translate-y-2">
              {/* Mascot perched on arched frame */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-3xl z-20">
                🐿️
              </div>

              <div className="space-y-4 pt-4 text-center">
                {/* Arched / Oval Cutout Frame */}
                <div className="relative w-36 h-44 mx-auto rounded-t-full rounded-b-2xl overflow-hidden border-4 border-white shadow-md bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=500&q=80"
                    alt="Children playing inside colorful play tent"
                    fill
                    sizes="144px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#7C3AED] text-white">
                    Age 2.5 – 4 Years
                  </span>
                  <h3 className="text-xl font-black text-[#1E293B] font-display pt-2">
                    Creative Kids
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed pt-1">
                    Phonics foundations, creative arts, interactive storytelling, and cooperative playground games.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-purple-300/40 text-center">
                <button
                  onClick={() => {
                    setChildAgeGroup("Creative Kids (2.5 – 4 Yrs)");
                    setIsTourModalOpen(true);
                  }}
                  className="w-full min-h-[44px] py-2.5 rounded-full bg-[#FF7834] hover:bg-[#F26720] text-white font-bold text-xs transition-colors shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
                >
                  Select Program
                </button>
              </div>
            </div>

            {/* Card 3: Bright Learners (Soft Butter Yellow + Circular Cutout + Deer Mascot) */}
            <div className="bg-[#FDF2C7] rounded-3xl p-6 sm:p-7 border border-amber-200/60 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between relative group">
              {/* Mascot perched on circular frame */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-3xl z-20">
                🦌
              </div>

              <div className="space-y-4 pt-4 text-center">
                {/* Circular Photo Cutout Frame */}
                <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
                    alt="Child solving wooden alphabet puzzle"
                    fill
                    sizes="144px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#D97706] text-white">
                    Age 4 – 6 Years
                  </span>
                  <h3 className="text-xl font-black text-[#1E293B] font-display pt-2">
                    Bright Learners
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed pt-1">
                    STEAM inquiry, numerical confidence, literacy readiness, and grade school social preparation.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-amber-300/40 text-center">
                <button
                  onClick={() => {
                    setChildAgeGroup("Bright Learners (4 – 6 Yrs)");
                    setIsTourModalOpen(true);
                  }}
                  className="w-full min-h-[44px] py-2.5 rounded-full bg-white hover:bg-[#1E293B] hover:text-white text-[#1E293B] font-bold text-xs transition-colors shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706]"
                >
                  Select Program
                </button>
              </div>
            </div>
          </div>

          {/* Reference Arrow Buttons: Fitts's Law w-11 h-11 */}
          <div className="flex items-center justify-center gap-3 pt-10">
            <button
              onClick={() => setIsTourModalOpen(true)}
              className="w-11 h-11 rounded-full bg-[#1E293B] text-white flex items-center justify-center shadow-md hover:bg-black transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7834]"
              title="Previous Programs"
              aria-label="Previous programs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsTourModalOpen(true)}
              className="w-11 h-11 rounded-full bg-[#FF7834] text-white flex items-center justify-center shadow-md hover:bg-[#F26720] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E293B]"
              title="Next Programs"
              aria-label="Next programs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: "More Than Childcare" (3-PART MONTAGE + SCALLOPED FEATURE BADGES) */}
      <section id="features" className="py-16 sm:py-24 bg-[#FFF8F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left: 2 Stacked Classroom Photos + Duck Mascot on the Floor */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-left mb-4">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#FF7834]">
                  CORE VALUES
                </span>
                <h2 className="text-3xl font-black text-[#1E293B] tracking-tight font-display mt-0.5">
                  More Than Childcare
                </h2>
              </div>

              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80"
                  alt="Children learning with teacher"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80"
                  alt="Sensory learning beads"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
                {/* Hand-drawn white duck mascot on the floor */}
                <div className="absolute -bottom-3 -right-2 text-3xl drop-shadow-md">
                  🦆
                </div>
              </div>
            </div>

            {/* Center: Tall Vertical Portrait of Boy Holding Basket of Balls */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-amber-50">
                <Image
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80"
                  alt="Boy happily holding a colorful basket of sensory balls"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: 4 Feature Cards with Scalloped Flower Badge Icons */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* Feature 1: Safe & Caring */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0EBE5] shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D8F3E5] text-[#25A169] flex items-center justify-center text-2xl shrink-0 font-bold shadow-xs">
                  🛡️
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1E293B]">Safe &amp; Caring</h3>
                  <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                    A secure and nurturing environment where your child feels like family with 24/7 CCTV transparency.
                  </p>
                </div>
              </div>

              {/* Feature 2: Learning Through Play */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0EBE5] shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center text-2xl shrink-0 font-bold shadow-xs">
                  🎡
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1E293B]">Learning Through Play</h3>
                  <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                    Fun activities designed to develop key motor skills, logic curiosity, and natural problem-solving.
                  </p>
                </div>
              </div>

              {/* Feature 3: Caring Educators */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0EBE5] shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFE4E6] text-[#E11D48] flex items-center justify-center text-2xl shrink-0 font-bold shadow-xs">
                  👩‍🏫
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1E293B]">Caring Educators</h3>
                  <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                    Passionate certified teachers with pediatric first-aid certification dedicated to every child.
                  </p>
                </div>
              </div>

              {/* Feature 4: Happy Community */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0EBE5] shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center text-2xl shrink-0 font-bold shadow-xs">
                  🌟
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1E293B]">Happy Community</h3>
                  <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                    A welcoming family network where lifelong childhood memories and joyful friendships take root.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: "Every Day is an Adventure" (WAVY PASTEL BLUE ACTIVITIES ARENA) */}
      <section id="activities" className="py-16 sm:py-24 bg-[#DFF2FE] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#0284C7]">
                DISCOVERY TIME
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight font-display mt-0.5">
                Every Day is an Adventure
              </h2>
            </div>
            {/* Directional Circle Buttons: Fitts's Law 44px */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsTourModalOpen(true)}
                aria-label="Previous activities"
                className="w-11 h-11 rounded-full bg-[#1E293B] text-white flex items-center justify-center text-sm shadow-xs cursor-pointer hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7834]"
              >
                &larr;
              </button>
              <button
                onClick={() => setIsTourModalOpen(true)}
                aria-label="Next activities"
                className="w-11 h-11 rounded-full bg-[#FF7834] text-white flex items-center justify-center text-sm shadow-xs cursor-pointer hover:bg-[#F26720] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E293B]"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Activity 1: Art & Creativity */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
                    alt="Girl painting with orange paints"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Mascot Bear Perched */}
                  <div className="absolute top-3 left-3 text-2xl drop-shadow-md">
                    🧸
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="inline-block px-3.5 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider bg-[#FF7834]">
                    Art &amp; Creativity
                  </span>
                  <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                    Finger painting, paper crafts, and organic clay modeling that unlock limitless imagination.
                  </p>
                </div>
              </div>
            </div>

            {/* Activity 2: Learning Games */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                    alt="Child matching colored beads"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Mascot Puzzle */}
                  <div className="absolute top-3 left-3 text-2xl drop-shadow-md">
                    🧩
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="inline-block px-3.5 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider bg-[#38BDF8]">
                    Learning Games
                  </span>
                  <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                    Tactile counting beads, alphabet blocks, and sensory sorting games that make learning joyful.
                  </p>
                </div>
              </div>
            </div>

            {/* Activity 3: Music & Movement */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
                    alt="Children playing acoustic guitar and drums"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Mascot Music */}
                  <div className="absolute top-3 left-3 text-2xl drop-shadow-md">
                    🎵
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="inline-block px-3.5 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider bg-[#10B981]">
                    Music &amp; Movement
                  </span>
                  <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                    Acoustic rhyme circles, bongo drumming, and rhythmic movement that cultivate motor coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: "Loved by Little Learners" (3 PASTEL TESTIMONIAL CARDS) */}
      <section id="testimonials" className="py-16 sm:py-24 bg-[#FFF8F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#FF7834]">
              PARENT REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight font-display mt-0.5">
              Loved by Little Learners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Mint */}
            <div className="bg-[#D6F4E8] rounded-3xl p-6 sm:p-7 border border-emerald-200/50 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="text-3xl font-serif text-[#25A169]/30 leading-none">
                  &ldquo;
                </div>
                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed font-medium">
                  &ldquo;Little Bloom has become my daughter&apos;s favorite place. She comes home excited to tell us everything she learned that day!&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-200/50 flex items-center justify-between text-xs">
                <div>
                  <div className="font-black text-[#1E293B]">Priya Sharma</div>
                  <div className="text-[11px] text-[#64748B]">Mother of Anaya</div>
                </div>
                <span className="text-[10px] font-mono text-[#64748B]">May 12, 2026</span>
              </div>
            </div>

            {/* Card 2: Peach / Soft Rose */}
            <div className="bg-[#FFE2E6] rounded-3xl p-6 sm:p-7 border border-rose-200/50 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="text-3xl font-serif text-[#E11D48]/30 leading-none">
                  &ldquo;
                </div>
                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed font-medium">
                  &ldquo;The teachers are incredibly caring, and we&apos;ve seen such a positive leap in our son&apos;s confidence and curiosity.&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-rose-200/50 flex items-center justify-between text-xs">
                <div>
                  <div className="font-black text-[#1E293B]">Rajesh Patel</div>
                  <div className="text-[11px] text-[#64748B]">Father of Kabir</div>
                </div>
                <span className="text-[10px] font-mono text-[#64748B]">June 4, 2026</span>
              </div>
            </div>

            {/* Card 3: Soft Butter Yellow */}
            <div className="bg-[#FEF4C8] rounded-3xl p-6 sm:p-7 border border-amber-200/50 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="text-3xl font-serif text-[#D97706]/30 leading-none">
                  &ldquo;
                </div>
                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed font-medium">
                  &ldquo;A beautiful environment with caring teachers and thoughtful activities. It truly feels like a second home.&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-amber-200/50 flex items-center justify-between text-xs">
                <div>
                  <div className="font-black text-[#1E293B]">Neha Mehta</div>
                  <div className="text-[11px] text-[#64748B]">Mother of Aarav</div>
                </div>
                <span className="text-[10px] font-mono text-[#64748B]">July 18, 2026</span>
              </div>
            </div>
          </div>

          {/* Slider Dots with Fitts's Law min touch target (w-11 h-11 container with pill) */}
          <div
            role="tablist"
            aria-label="Testimonial slides"
            className="flex justify-center items-center gap-1 pt-8"
          >
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={activeTestimonialIdx === idx}
                aria-label={`Testimonial slide ${idx + 1}`}
                onClick={() => setActiveTestimonialIdx(idx)}
                className="w-11 h-11 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7834] rounded-full"
              >
                <span
                  className={`h-2.5 rounded-full transition-all ${
                    activeTestimonialIdx === idx ? "w-7 bg-[#FF7834]" : "w-2.5 bg-[#CBD5E1]"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: DARK SCALLOPED CLOUD FOOTER WITH GIANT MINT WORDMARK */}
      <footer className="bg-[#0E1E2C] text-white relative pt-12 pb-16">
        {/* Scalloped Cloud Top Border in Deep Navy */}
        <div className="absolute top-0 left-0 right-0 -translate-y-full w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12 sm:h-16 text-[#0E1E2C]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C150,-30 350,110 500,20 C650,-50 900,120 1200,30 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Col 1: Brand Info */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐥</span>
                <span className="text-xl font-black uppercase tracking-tight text-white font-display">
                  Little Bloom
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] max-w-sm leading-relaxed">
                A joyful, caring preschool where curiosity blooms into lifelong confidence. Open admissions for the 2026-27 academic batch.
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-3 space-y-2 text-xs">
              <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-2">
                Quick Links
              </div>
              <div><a href="#about" className="text-[#94A3B8] hover:text-white transition-colors">Home &bull; About Us</a></div>
              <div><a href="#programs" className="text-[#94A3B8] hover:text-white transition-colors">Academic Programs</a></div>
              <div><a href="#activities" className="text-[#94A3B8] hover:text-white transition-colors">Daily Activities</a></div>
              <div><a href="#testimonials" className="text-[#94A3B8] hover:text-white transition-colors">Parent Reviews</a></div>
            </div>

            {/* Col 3: Campus & Contact */}
            <div className="md:col-span-4 space-y-3 text-xs">
              <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-2">
                Campus Location
              </div>
              <p className="text-[#94A3B8]">
                123 Blue Ribbon Street, Green Valley &bull; Rajkot Landmark, Gujarat 360004
              </p>
              <div className="text-[#94A3B8] font-mono">+91 93284 37392 &bull; hello@littlebloom.com</div>
              <a
                href="https://wa.me/919328437392?text=Hello%20Gayatri%20Technology%2C%20I%20saw%20the%20Little%20Bloom%20Preschool%20Demo.%20I%20want%20a%20website%20like%20this%20for%20our%20school."
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF7834] hover:bg-[#F26720] text-white font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7834] focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 93284 37392)</span>
              </a>
            </div>
          </div>

          {/* GIANT CUTE BRAND FOOTER WORDMARK IN PASTEL MINT WITH DUCK MASCOT */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-4xl sm:text-7xl lg:text-8xl font-black text-[#80E5D4] tracking-tight font-display flex items-baseline gap-2 leading-none">
              <span>Little Bloom</span>
              <span className="text-4xl sm:text-5xl -translate-y-2">🦆</span>
            </div>
            <div className="text-[11px] text-[#64748B]">
              Designed &amp; Engineered by Gayatri Technology &bull; Custom Preschool Portals
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Tour Booking Modal (Accessible Dialog with Escape Key & Loading State) */}
      {isTourModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="tour-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-amber-100 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setIsTourModalOpen(false);
                setTourSubmitted(false);
              }}
              className="w-10 h-10 rounded-xl absolute top-4 right-4 text-slate-400 hover:text-slate-800 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7834]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {tourSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                  🎉
                </div>
                <h3 id="tour-modal-title" className="text-xl font-black text-[#1E293B] font-display">
                  Campus Tour Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Thank you, <span className="font-bold text-[#1E293B]">{parentName}</span>! We look forward to meeting you and your little one for the <span className="font-bold">{childAgeGroup}</span> walkthrough on <span className="font-bold">{preferredDay}</span>.
                </p>
                <div className="p-3 bg-amber-50 rounded-xl text-[11px] text-amber-900 border border-amber-200">
                  ⚡ <strong>Interactive Demo Note:</strong> In production, this form alerts your admissions coordinator on WhatsApp and enters your CRM pipeline.
                </div>
                <button
                  onClick={() => {
                    setIsTourModalOpen(false);
                    setTourSubmitted(false);
                  }}
                  className="w-full min-h-[44px] py-2.5 rounded-full bg-[#1E293B] text-white text-xs font-bold hover:bg-black transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7834]"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleTourSubmit} className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#FF7834] bg-orange-100 px-2.5 py-0.5 rounded-full mb-1">
                    Admissions 2026-27 &bull; Free Campus Visit
                  </div>
                  <h3 id="tour-modal-title" className="text-xl font-black text-[#1E293B] font-display">
                    Book Your School Tour
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Experience our Montessori rooms, soft play arena &amp; meet our teachers.
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7834]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      WhatsApp Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7834]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Program Grade
                    </label>
                    <select
                      value={childAgeGroup}
                      onChange={(e) => setChildAgeGroup(e.target.value)}
                      className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7834]"
                    >
                      <option>Little Explorers (1.5 – 2.5 Yrs)</option>
                      <option>Creative Kids (2.5 – 4 Yrs)</option>
                      <option>Bright Learners (4 – 6 Yrs)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Preferred Visit Day &amp; Time
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7834]"
                  >
                    <option>Tomorrow Morning (10:00 AM)</option>
                    <option>Tomorrow Afternoon (02:30 PM)</option>
                    <option>This Saturday Morning (11:00 AM)</option>
                    <option>Next Week Weekday</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[44px] py-3.5 rounded-full bg-[#FF7834] hover:bg-[#F26720] disabled:opacity-75 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer mt-2 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E293B] focus-visible:ring-offset-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scheduling School Tour...</span>
                    </>
                  ) : (
                    <span>Confirm Tour Booking &bull; Free Visit</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

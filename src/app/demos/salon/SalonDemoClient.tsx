"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DemoTopBanner from "@/components/demos/DemoTopBanner";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  Star,
  Clock,
  Phone,
  Mail,
  X,
  MessageCircle,
  Loader2,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  price: string;
  description: string;
  featured?: boolean;
}

const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    number: "01",
    title: "Haircut",
    price: "From ₹1,200",
    description: "Precision cut tailored to your face shape, personal aesthetic and natural texture.",
  },
  {
    id: "s2",
    number: "02",
    title: "Color",
    price: "From ₹3,500",
    description: "Expert color and dimensional tone techniques using ammonia-free organic formulas.",
  },
  {
    id: "s3",
    number: "03",
    title: "Styling",
    price: "From ₹1,500",
    description: "Blowout and styling for every special occasion, gala, or weekly self-care routine.",
  },
  {
    id: "s4",
    number: "04",
    title: "Treatment",
    price: "From ₹2,800",
    description: "Deep conditioning, keratin infusion and organic scalp repair detox therapy.",
    featured: true,
  },
];

const STYLISTS = [
  {
    id: "st-1",
    name: "Sofia Rahman",
    role: "Master Colorist",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "st-2",
    name: "Aisha Anderson",
    role: "Hair Specialist",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "st-3",
    name: "Mikhail Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=700&q=80",
  },
];

const PACKAGES = [
  {
    id: "pkg-1",
    name: "Essential",
    price: "₹3,500",
    dollar: "$120",
    features: [
      "Haircut & Wash",
      "Standard Styling Blowout",
      "Scalp Massage (10 mins)",
      "Hydrating Mask",
    ],
    isPopular: false,
  },
  {
    id: "pkg-2",
    name: "Signature",
    price: "₹6,500",
    dollar: "$240",
    features: [
      "Haircut",
      "Full Balayage / Color",
      "Deep Protein Treatment",
      "Precision Styling",
      "Take-Home Serum",
    ],
    isPopular: true,
  },
  {
    id: "pkg-3",
    name: "Ultimate",
    price: "₹9,900",
    dollar: "$360",
    features: [
      "Haircut",
      "Full Color & Gloss",
      "Keratin Treatment",
      "Luxury Styling",
      "Full Home Care Kit",
    ],
    isPopular: false,
  },
];

const REVIEWS = [
  {
    name: "Emma Davis",
    quote: "The best salon experience I have ever had. Master Sofia understood my exact color vision instantly.",
    rating: 5,
  },
  {
    name: "Rachel Green",
    quote: "The atmosphere is so calm and luxurious. You leave not just looking great, but feeling thoroughly restored.",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    quote: "A true sanctuary in the city. The organic products smell incredible and my hair has never felt healthier.",
    rating: 5,
  },
  {
    name: "Chloe Chen",
    quote: "Mikhail cut my layers with surgical precision. It falls into place naturally every morning with zero fuss.",
    rating: 5,
  },
];

const TIME_SLOTS = [
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80",
];

export default function SalonDemoClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedService, setSelectedService] = useState("Signature Package");
  const [selectedStylist, setSelectedStylist] = useState("Sofia Rahman (Master Colorist)");
  const [selectedSlot, setSelectedSlot] = useState("01:00 PM");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  // Close booking modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isBookingOpen) {
        setIsBookingOpen(false);
        setBookingConfirmed(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isBookingOpen]);

  const handleOpenBooking = (serviceName?: string, stylistName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    if (stylistName) setSelectedStylist(stylistName);
    setIsBookingOpen(true);
  };

  // Doherty Threshold (< 400ms immediate visual feedback)
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmed(true);
    }, 350);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111827] font-sans antialiased selection:bg-[#111827] selection:text-white">
      {/* Gayatri Tech Global Demo Banner */}
      <DemoTopBanner
        demoTitle="Salon Studio & Hair Artistry"
        industry="Hair Care, Color Artistry & Styling"
        previewUrl="/demos/preview/salon"
        whatsappMessage="Hello Gayatri Technology, I saw the Salon Studio Demo on your website. I want a modern appointment booking website for my salon."
      />

      {/* Clean Minimalist Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] rounded-md p-1"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight uppercase text-[#111827] font-display">
              Salon Studio
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
            <a
              href="#services"
              className="hover:text-[#111827] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] rounded-md px-1.5 py-1"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-[#111827] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] rounded-md px-1.5 py-1"
            >
              About
            </a>
            <a
              href="#team"
              className="hover:text-[#111827] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] rounded-md px-1.5 py-1"
            >
              Team
            </a>
            <a
              href="#pricing"
              className="hover:text-[#111827] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] rounded-md px-1.5 py-1"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-[#111827] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] rounded-md px-1.5 py-1"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Button (Fitts's Law >= 44px) */}
          <button
            onClick={() => handleOpenBooking()}
            className="min-h-[44px] px-5 py-2 rounded-full border border-[#111827] hover:bg-[#111827] hover:text-white text-[#111827] text-xs font-semibold tracking-wider transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] focus-visible:ring-offset-2"
          >
            Book Appointment
          </button>
        </div>
      </header>

      {/* Hero Section: "Expert Hair Treatments & Styling" */}
      <section className="pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            {/* Left Column: Heading, Subtext, Buttons & Metrics */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#6B7280] uppercase block mb-2">
                  MODERN &amp; PROFESSIONAL
                </span>
                <h1 className="text-4xl sm:text-6xl font-black text-[#111827] tracking-tight leading-[1.08] font-display">
                  Expert Hair Treatments &amp; Styling
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[#4B5563] max-w-md leading-relaxed font-normal">
                Experience personalized hair care in a serene, contemporary environment. Our master stylists deliver exceptional results tailored to you.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => handleOpenBooking()}
                  className="min-h-[44px] px-7 py-3 rounded-full bg-[#111827] hover:bg-black text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] focus-visible:ring-offset-2"
                >
                  Book Now
                </button>
                <a
                  href="#services"
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111827] hover:text-[#4B5563] transition-colors py-2 px-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]"
                >
                  <span>View Services</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Numbers / Stats Strip */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E5E7EB] max-w-sm">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#111827] font-display">15+</div>
                  <div className="text-[11px] text-[#6B7280] font-medium mt-0.5">Years Exp</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#111827] font-display">8K+</div>
                  <div className="text-[11px] text-[#6B7280] font-medium mt-0.5">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#111827] font-display">4.9</div>
                  <div className="text-[11px] text-[#6B7280] font-medium mt-0.5">Star Rating</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Portrait of Hair Wash Basin Station */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 bg-[#F3F4F6] border border-[#E5E7EB]">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                  alt="Client enjoying relaxing hair wash at salon basin"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: "What We Offer" (4 Numbered Services Strip) */}
      <section id="services" className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left mb-12">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#6B7280] uppercase block mb-1">
              OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight font-display">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                tabIndex={0}
                role="button"
                aria-label={`Book service ${srv.title} - ${srv.price}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenBooking(srv.title);
                  }
                }}
                onClick={() => handleOpenBooking(srv.title)}
                className={`bg-white rounded-2xl p-6 sm:p-7 border transition-all cursor-pointer flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] ${
                  srv.featured
                    ? "border-[#111827] shadow-md ring-1 ring-[#111827]"
                    : "border-[#E5E7EB] hover:border-[#111827] shadow-2xs hover:shadow-sm"
                }`}
              >
                <div className="space-y-4">
                  <div className="text-2xl sm:text-3xl font-black text-[#9CA3AF] font-display group-hover:text-[#111827] transition-colors">
                    {srv.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#111827]">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F3F4F6] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#111827] font-mono">
                    {srv.price}
                  </span>
                  <span className="text-[11px] text-[#6B7280] group-hover:text-[#111827] font-semibold flex items-center gap-0.5">
                    Book <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: "Creating Beautiful Transformations" (Story & 4-Photo Collage) */}
      <section id="about" className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            {/* Left: Narrative */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#6B7280] uppercase block mb-1">
                  OUR STORY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight font-display leading-tight">
                  Creating Beautiful Transformations
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                With a passion for hair artistry and client care, we craft looks that reflect your individual style and confidence. Every appointment begins with an in-depth consultation to understand your hair health, routine, and visual vision.
              </p>

              <div>
                <a
                  href="#gallery"
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111827] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] rounded-md px-2"
                >
                  <span>View Gallery</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: 4-Photo Mosaic Collage (2x2 Grid) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {/* 1: Curling hair */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xs border border-[#E5E7EB]">
                  <Image
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                    alt="Stylist curling blonde hair with iron"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>

                {/* 2: Salon interior mirrors */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xs border border-[#E5E7EB]">
                  <Image
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80"
                    alt="Modern salon interior with round illuminated mirrors"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>

                {/* 3: Scissor precision cutting */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xs border border-[#E5E7EB]">
                  <Image
                    src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80"
                    alt="Scissors precision cutting dark hair"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>

                {/* 4: Blow drying */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xs border border-[#E5E7EB]">
                  <Image
                    src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80"
                    alt="Stylist blow-drying client's hair with round brush"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: "Our Stylists" (3 Team Showcase Cards) */}
      <section id="team" className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left mb-12">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#6B7280] uppercase block mb-1">
              MEET THE TEAM
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight font-display">
              Our Stylists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {STYLISTS.map((st) => (
              <div
                key={st.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-2xs hover:shadow-md transition-all group"
              >
                <div className="relative aspect-4/5 w-full bg-[#F3F4F6] overflow-hidden">
                  <Image
                    src={st.image}
                    alt={st.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#111827]">
                      {st.name}
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-0.5 font-medium">
                      {st.role}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenBooking(undefined, st.name)}
                    className="min-h-[44px] px-5 py-2 rounded-full border border-[#111827] hover:bg-[#111827] hover:text-white text-[#111827] text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: "What Makes Us Different" (Interior Split Section) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            {/* Left: Full Interior Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 sm:aspect-square bg-[#F3F4F6] border border-[#E5E7EB]">
                <Image
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern chic salon interior with leather chairs and wood paneling"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Why Us & 4 Feature Checkmarks */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#6B7280] uppercase block mb-1">
                  WHY US
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight font-display">
                  What Makes Us Different
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111827]">Premium Products</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">High-end organic, ammonia-free and sulfate-free formulations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111827]">Expert Stylists</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">Decades of collective international salon &amp; color experience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111827]">Personalized Care</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">Comprehensive hair &amp; scalp consultation before every service.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111827]">Relaxing Vibe</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">Thoughtfully designed, peaceful, and unhurried sanctuary.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: "Service Packages" (3 Pricing Cards) */}
      <section id="pricing" className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left mb-12">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#6B7280] uppercase block mb-1">
              PRICING
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight font-display">
              Service Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl p-6 sm:p-8 border flex flex-col justify-between relative transition-all ${
                  pkg.isPopular
                    ? "border-[#111827] shadow-xl ring-2 ring-[#111827] md:-translate-y-2"
                    : "border-[#E5E7EB] shadow-2xs hover:shadow-md"
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#111827] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}

                <div className="space-y-5">
                  <div className="border-b border-[#F3F4F6] pb-4">
                    <h3 className="text-lg font-black text-[#111827]">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-3xl sm:text-4xl font-black text-[#111827] font-display">
                        {pkg.price}
                      </span>
                      <span className="text-xs font-medium text-[#6B7280]">
                        ({pkg.dollar})
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs text-[#4B5563]">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#111827] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleOpenBooking(`${pkg.name} Package`)}
                    className={`w-full min-h-[44px] py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] focus-visible:ring-offset-2 ${
                      pkg.isPopular
                        ? "bg-[#111827] hover:bg-black text-white shadow-sm"
                        : "border border-[#111827] hover:bg-[#111827] hover:text-white text-[#111827]"
                    }`}
                  >
                    Book {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: "Client Reviews" (4 Testimonial Cards in 2x2 Grid) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left mb-12">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#6B7280] uppercase block mb-1">
              TESTIMONIALS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight font-display">
              Client Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((rev, rIdx) => (
              <div
                key={rIdx}
                className="bg-[#FAFAFA] rounded-2xl p-6 sm:p-7 border border-[#E5E7EB] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex gap-1 text-[#111827]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#111827] text-[#111827]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E5E7EB]">
                  <span className="text-xs font-bold text-[#111827]">{rev.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: "Recent Work" (8-Photo Portfolio Grid) */}
      <section id="gallery" className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left mb-10">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#6B7280] uppercase block mb-1">
              GALLERY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight font-display">
              Recent Work
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-2xl overflow-hidden bg-[#F3F4F6] border border-[#E5E7EB] group"
              >
                <Image
                  src={img}
                  alt={`Salon work ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: "Ready to Transform Your Look?" (Pre-Footer CTA) */}
      <section className="py-16 sm:py-24 bg-white text-center border-b border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-[#111827] tracking-tight font-display">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
            Book your appointment today and experience professional hair care in a relaxing environment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#6B7280] font-medium pt-2">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#111827]" />
              <span>+91 93284 37392</span>
            </div>
            <span>&bull;</span>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#111827]" />
              <span>hello@salonstudio.com</span>
            </div>
            <span>&bull;</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#111827]" />
              <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleOpenBooking()}
              className="min-h-[44px] px-8 py-3.5 rounded-full bg-[#111827] hover:bg-black text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] focus-visible:ring-offset-2"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Minimalist Editorial Footer */}
      <footer id="contact" className="bg-[#FFFFFF] py-14 px-4 sm:px-6 text-xs border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 space-y-3">
              <span className="text-base font-black tracking-tight uppercase text-[#111827] font-display">
                Salon Studio
              </span>
              <p className="text-[#6B7280] max-w-sm leading-relaxed">
                Expert hair care, color artistry, and transformative cuts in a calm contemporary space.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <div className="font-bold text-[#111827] uppercase tracking-wider text-[11px] mb-2">
                Navigation
              </div>
              <div><a href="#services" className="text-[#6B7280] hover:text-[#111827] transition-colors">Services</a></div>
              <div><a href="#about" className="text-[#6B7280] hover:text-[#111827] transition-colors">About Us</a></div>
              <div><a href="#team" className="text-[#6B7280] hover:text-[#111827] transition-colors">Master Stylists</a></div>
              <div><a href="#pricing" className="text-[#6B7280] hover:text-[#111827] transition-colors">Service Packages</a></div>
            </div>

            <div className="md:col-span-3 space-y-3">
              <div className="font-bold text-[#111827] uppercase tracking-wider text-[11px] mb-2">
                Studio Address
              </div>
              <p className="text-[#6B7280]">
                123 Fashion Blvd, Suite 200 &bull; Rajkot Landmark, Gujarat 360004
              </p>
              <a
                href="https://wa.me/919328437392?text=Hello%20Gayatri%20Technology%2C%20I%20saw%20the%20Salon%20Studio%20Demo.%20I%20want%20a%20modern%20website%20like%20this%20for%20our%20salon."
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111827] hover:bg-black text-white font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 93284 37392)</span>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-3 text-[#9CA3AF] text-[11px]">
            <div>&copy; 2026 Salon Studio. All rights reserved.</div>
            <div>Designed &amp; Engineered by Gayatri Technology &bull; Custom Salon Portals</div>
          </div>
        </div>
      </footer>

      {/* Interactive Appointment Booking Modal (Accessible Dialog with Escape Key & Loading State) */}
      {isBookingOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#E5E7EB] relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setIsBookingOpen(false);
                setBookingConfirmed(false);
              }}
              className="w-10 h-10 rounded-xl absolute top-4 right-4 text-slate-400 hover:text-slate-800 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingConfirmed ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 id="booking-modal-title" className="text-xl font-black text-[#111827] font-display">
                  Appointment Reserved!
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  Thank you, <span className="font-bold text-[#111827]">{clientName}</span>! Your slot for <span className="font-bold text-[#111827]">{selectedService}</span> with <span className="font-bold text-[#111827]">{selectedStylist}</span> is tentatively locked for <span className="font-bold text-[#111827]">{selectedSlot}</span>.
                </p>
                <div className="p-3 bg-neutral-100 rounded-xl text-[11px] text-[#374151] border border-neutral-200">
                  ⚡ <strong>Interactive Demo Note:</strong> In production, this appointment sends an automated WhatsApp confirmation &amp; Google Calendar sync to the client and stylist.
                </div>
                <button
                  onClick={() => {
                    setIsBookingOpen(false);
                    setBookingConfirmed(false);
                  }}
                  className="w-full min-h-[44px] py-2.5 rounded-full bg-[#111827] text-white text-xs font-bold hover:bg-black transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#111827] bg-[#F3F4F6] px-2.5 py-0.5 rounded-full mb-1">
                    Salon Studio &bull; Online Booking
                  </div>
                  <h3 id="booking-modal-title" className="text-xl font-black text-[#111827] font-display">
                    Reserve Your Appointment
                  </h3>
                  <p className="text-xs text-[#6B7280]">
                    Select your service, specialist, and preferred time slot.
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#374151] block mb-1">
                    Service / Package
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-[#D1D5DB] text-xs bg-white text-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]"
                  >
                    <option>Haircut &amp; Finish</option>
                    <option>Balayage &amp; Dimension Color</option>
                    <option>Essential Package (₹3,500)</option>
                    <option>Signature Package (₹6,500)</option>
                    <option>Ultimate Package (₹9,900)</option>
                    <option>Deep Conditioning &amp; Scalp Detox</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#374151] block mb-1">
                    Preferred Stylist
                  </label>
                  <select
                    value={selectedStylist}
                    onChange={(e) => setSelectedStylist(e.target.value)}
                    className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-[#D1D5DB] text-xs bg-white text-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]"
                  >
                    {STYLISTS.map((s) => (
                      <option key={s.id} value={`${s.name} (${s.role})`}>
                        {s.name} ({s.role})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#374151] block mb-1">
                    Select Time Slot
                  </label>
                  <div
                    role="group"
                    aria-label="Available appointment time slots"
                    className="grid grid-cols-3 gap-2"
                  >
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => setSelectedSlot(slot)}
                          className={`min-h-[44px] py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] ${
                            isSelected
                              ? "bg-[#111827] text-white font-bold shadow-xs"
                              : "bg-[#F3F4F6] text-[#4B5563] hover:text-[#111827] hover:bg-[#E5E7EB]"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#374151] block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Meera Patel"
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-[#D1D5DB] text-xs text-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#374151] block mb-1">
                      WhatsApp Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-[#D1D5DB] text-xs text-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[44px] py-3.5 rounded-full bg-[#111827] hover:bg-black disabled:opacity-75 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer mt-2 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] focus-visible:ring-offset-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Reserving Appointment Slot...</span>
                    </>
                  ) : (
                    <span>Confirm Appointment</span>
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

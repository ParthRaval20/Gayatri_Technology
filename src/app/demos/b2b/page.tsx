"use client";

import React, { useState } from "react";
import Image from "next/image";
import DemoTopBanner from "@/components/demos/DemoTopBanner";
import {
  Search,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Truck,
  ArrowRight,
  Star,
  Box,
  Leaf,
  Package,
  Flame,
  X,
  ChevronDown,
  Plus,
  Minus,
  Send,
  Eye,
  Phone,
  Tag,
  Gift,
} from "lucide-react";

// Product Data Models
interface SwagProduct {
  id: string;
  name: string;
  category: "drinkware" | "apparel" | "bags" | "tech" | "office" | "eco";
  categoryLabel: string;
  moq: number;
  basePrice: number; // in INR per unit at 100 pcs
  image: string;
  badge: "Bestseller" | "New" | "Eco Choice" | "48h Rush" | "Popular";
  rating: number;
  reviewsCount: number;
  colors: { name: string; hex: string }[];
  brandingMethods: string[];
  description: string;
}

const PRODUCTS: SwagProduct[] = [
  {
    id: "p1",
    name: "Apex 900ml Vacuum Insulated Tumbler",
    category: "drinkware",
    categoryLabel: "Drinkware",
    moq: 50,
    basePrice: 380,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 312,
    colors: [
      { name: "Matte Navy", hex: "#1E3A8A" },
      { name: "Gunmetal Black", hex: "#1F2937" },
      { name: "Sage Green", hex: "#4B6B56" },
      { name: "Cream White", hex: "#F3F4F6" },
    ],
    brandingMethods: ["Precision Laser Engraving", "Pantone Screen Print"],
    description: "Double-wall 18/8 stainless steel, copper vacuum insulated. Keeps cold 24h, hot 12h. Ergonomic comfort handle.",
  },
  {
    id: "p2",
    name: "Heavyweight 380 GSM Organic Cotton Hoodie",
    category: "apparel",
    categoryLabel: "Apparel",
    moq: 25,
    basePrice: 680,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    rating: 5.0,
    reviewsCount: 184,
    colors: [
      { name: "Oatmeal Heather", hex: "#D6D3D1" },
      { name: "Deep Charcoal", hex: "#262626" },
      { name: "Classic Navy", hex: "#1E293B" },
      { name: "Forest Moss", hex: "#2A4736" },
    ],
    brandingMethods: ["High-Density 3D Embroidery", "Soft Hand Plastisol Print"],
    description: "Retail-grade combed organic cotton, pre-shrunk fleece. Double-layered hood with antique brass eyelets.",
  },
  {
    id: "p3",
    name: "Aerotech Weatherproof Commuter Backpack 22L",
    category: "bags",
    categoryLabel: "Bags",
    moq: 20,
    basePrice: 890,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    rating: 4.8,
    reviewsCount: 220,
    colors: [
      { name: "Stealth Black", hex: "#111827" },
      { name: "Stone Slate", hex: "#64748B" },
      { name: "Olive Drift", hex: "#3F4E3E" },
    ],
    brandingMethods: ["Debossed Leather Patch", "Reflective Silk Print"],
    description: "Ballistic water-resistant ripstop nylon. Dedicated padded 16\" laptop compartment, luggage trolley pass-through.",
  },
  {
    id: "p4",
    name: "Seed-Paper Hardcover Eco Journal & Bamboo Pen",
    category: "eco",
    categoryLabel: "Eco-Friendly",
    moq: 50,
    basePrice: 240,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    badge: "Eco Choice",
    rating: 4.9,
    reviewsCount: 145,
    colors: [
      { name: "Natural Kraft", hex: "#D7C4A5" },
      { name: "Earth Brown", hex: "#78533B" },
      { name: "Sage Grass", hex: "#7B9E87" },
    ],
    brandingMethods: ["Blind Debossing", "Eco Soy-Ink Print"],
    description: "192 ruled pages of 100% post-consumer recycled paper. Cover embeds wildflower seeds—plant after use.",
  },
  {
    id: "p5",
    name: "SnapMag 10,000mAh Magnetic Wireless Power Bank",
    category: "tech",
    categoryLabel: "Tech",
    moq: 30,
    basePrice: 750,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    badge: "48h Rush",
    rating: 4.9,
    reviewsCount: 98,
    colors: [
      { name: "Titanium Gray", hex: "#4B5563" },
      { name: "Glacier White", hex: "#F9FAFB" },
      { name: "Midnight Black", hex: "#18181B" },
    ],
    brandingMethods: ["Backlit LED Logo", "Full Color UV Print"],
    description: "15W MagSafe fast charging + 20W PD Type-C output. Dual-device charging with airline carry-on safety certification.",
  },
  {
    id: "p6",
    name: "Vintage Washed Cotton Twill Dad Cap",
    category: "apparel",
    categoryLabel: "Apparel",
    moq: 50,
    basePrice: 220,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    badge: "New",
    rating: 4.7,
    reviewsCount: 76,
    colors: [
      { name: "Washed Navy", hex: "#2C3E50" },
      { name: "Faded Olive", hex: "#556B2F" },
      { name: "Mustard Gold", hex: "#D4AC0D" },
      { name: "Vintage Black", hex: "#2C2C2C" },
    ],
    brandingMethods: ["Raised 3D Puff Embroidery", "Woven Label"],
    description: "100% garment-washed cotton. Unstructured 6-panel low profile fit with brass buckle adjustable strap.",
  },
  {
    id: "p7",
    name: "Ceramic Matte Speckle Coffee Mug (400ml)",
    category: "drinkware",
    categoryLabel: "Drinkware",
    moq: 50,
    basePrice: 195,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    rating: 4.8,
    reviewsCount: 160,
    colors: [
      { name: "Speckled White", hex: "#F3F4F6" },
      { name: "Charcoal Clay", hex: "#374151" },
      { name: "Terracotta", hex: "#C86446" },
    ],
    brandingMethods: ["Kiln-Fired Decal Print", "Laser Matte Etch"],
    description: "Handcrafted natural stoneware ceramic. Microwave & dishwasher safe. Premium unboxing packaging included.",
  },
  {
    id: "p8",
    name: "Heavy-Duty 16oz Recycled Canvas Market Tote",
    category: "bags",
    categoryLabel: "Bags",
    moq: 100,
    basePrice: 175,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    badge: "Eco Choice",
    rating: 4.9,
    reviewsCount: 204,
    colors: [
      { name: "Natural Ecru", hex: "#EBE3D5" },
      { name: "Midnight Black", hex: "#18181B" },
      { name: "Forest Olive", hex: "#3A4D39" },
    ],
    brandingMethods: ["Screen Print Front & Back", "Embroidered Label"],
    description: "Reinforced box-stitched webbed handles, interior zippered pocket. Holds up to 20kg without stretching.",
  },
];

interface CartItem {
  product: SwagProduct;
  quantity: number;
  color: string;
  branding: string;
}

export default function BrandSurgeB2BDemoPage() {
  // Navigation & Category filtering state
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Cart / Quote Basket State
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Apex Tumbler
      quantity: 100,
      color: "Matte Navy",
      branding: "Precision Laser Engraving",
    },
    {
      product: PRODUCTS[1], // Hoodie
      quantity: 50,
      color: "Deep Charcoal",
      branding: "High-Density 3D Embroidery",
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [isProofModalOpen, setIsProofModalOpen] = useState(false);
  const [selectedProofProduct, setSelectedProofProduct] = useState<SwagProduct>(PRODUCTS[0]);
  const [proofCompanyName, setProofCompanyName] = useState("Acme Global");

  // Sample Pack Form State
  const [sampleForm, setSampleForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    city: "",
    items: ["Apex Tumbler", "Organic Hoodie"],
  });
  const [sampleSuccess, setSampleSuccess] = useState(false);

  // Bulk Price Calculator State
  const [calcCategory, setCalcCategory] = useState<"drinkware" | "apparel" | "bags" | "tech" | "swagbox">("drinkware");
  const [calcQty, setCalcQty] = useState<number>(100);
  const [calcBranding, setCalcBranding] = useState<string>("Laser Engrave");

  // Accordion State for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Filtered Products for Catalog Section
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate Cart Totals
  const cartTotalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartEstimatedTotal = cart.reduce((acc, item) => {
    // Volume discount tiers: 50 -> base, 100 -> -10%, 250 -> -20%, 500+ -> -30%
    let multiplier = 1.0;
    if (item.quantity >= 500) multiplier = 0.7;
    else if (item.quantity >= 250) multiplier = 0.8;
    else if (item.quantity >= 100) multiplier = 0.9;
    return acc + Math.round(item.product.basePrice * multiplier) * item.quantity;
  }, 0);

  // Calculator Price Logic
  const getCalcUnitPrice = () => {
    let base = 350;
    if (calcCategory === "apparel") base = 650;
    if (calcCategory === "bags") base = 850;
    if (calcCategory === "tech") base = 720;
    if (calcCategory === "swagbox") base = 1250;

    let discount = 1.0;
    if (calcQty >= 1000) discount = 0.65;
    else if (calcQty >= 500) discount = 0.72;
    else if (calcQty >= 250) discount = 0.82;
    else if (calcQty >= 100) discount = 0.90;

    return Math.round(base * discount);
  };

  const calcUnitPrice = getCalcUnitPrice();
  const calcTotal = calcUnitPrice * calcQty;

  // Add Item to Cart
  const handleAddToCart = (product: SwagProduct) => {
    const existingIndex = cart.findIndex((i) => i.product.id === product.id);
    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += product.moq;
      setCart(updated);
    } else {
      setCart([
        ...cart,
        {
          product,
          quantity: product.moq,
          color: product.colors[0].name,
          branding: product.brandingMethods[0],
        },
      ]);
    }
    setIsCartOpen(true);
  };

  // Open Proof Modal for specific product
  const handleOpenProof = (product: SwagProduct) => {
    setSelectedProofProduct(product);
    setIsProofModalOpen(true);
  };

  // WhatsApp Quote Link
  const buildWhatsAppCartUrl = () => {
    const summary = cart
      .map(
        (i) =>
          `• ${i.product.name} (Qty: ${i.quantity}, Color: ${i.color}, Branding: ${i.branding})`
      )
      .join("\n");
    const msg = `Hi Gayatri Technology, I am configuring an inquiry on the BrandSurge B2B Swag Demo:\n\n${summary}\n\nEstimated Value: ₹${cartEstimatedTotal.toLocaleString(
      "en-IN"
    )}\nTotal Units: ${cartTotalQty}\nPlease share wholesale quote & digital proof details.`;
    return `https://wa.me/919328437392?text=${encodeURIComponent(msg)}`;
  };

  const buildWhatsAppCalcUrl = () => {
    const msg = `Hi Gayatri Technology, I used the BrandSurge Volume Calculator:\n• Category: ${calcCategory.toUpperCase()}\n• Quantity: ${calcQty} units\n• Branding: ${calcBranding}\n• Unit Rate: ₹${calcUnitPrice}/unit\n• Total Estimate: ₹${calcTotal.toLocaleString(
      "en-IN"
    )}\n\nPlease provide formal company quotation & timeline.`;
    return `https://wa.me/919328437392?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#5B4DFB] selection:text-white">
      {/* 1. Global Studio Navigation Bar */}
      <DemoTopBanner
        demoTitle="BrandSurge® Corporate Swag & Promotional Products"
        industry="B2B Wholesale Catalog & Quoting Engine"
        whatsappMessage="Hello Gayatri Technology, I saw the BrandSurge B2B Swag & Merchandise Demo. I want to build a wholesale catalog and quoting engine for my merchandise company."
        previewUrl="/demos/preview/b2b"
      />

      {/* 2. Top Promotional Announcement Ticker */}
      <div className="bg-[#4F46E5] text-white text-[11px] sm:text-xs py-2 px-4 tracking-wide font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              B2B Wholesale
            </span>
            <span className="truncate">
              ⚡ Free Sample Kit on corporate inquiries &bull; 48-Hour Rush Production &bull; 0% Setup Fees
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 shrink-0 text-white/90">
            <button
              onClick={() => setIsSampleModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <Gift className="w-3.5 h-3.5" /> Request Sample Kit
            </button>
            <a
              href="https://wa.me/919328437392"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" /> +91 93284 37392
            </a>
          </div>
        </div>
      </div>

      {/* 3. Main BrandSurge Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Brand Logo Lockup */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#5B4DFB] to-[#4338CA] flex items-center justify-center text-white shadow-md shadow-[#5B4DFB]/25">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-display flex items-center gap-1">
                  BrandSurge<span className="text-[#5B4DFB]">.</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block -mt-1 font-mono">
                  B2B PROMO STUDIO
                </span>
              </div>
            </div>

            {/* Smart Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl relative items-center">
              <div className="w-full flex items-center border-2 border-slate-200 hover:border-[#5B4DFB] focus-within:border-[#5B4DFB] rounded-full overflow-hidden transition-all bg-slate-50 focus-within:bg-white shadow-2xs">
                <div className="px-4 py-2 border-r border-slate-200 text-xs font-semibold text-slate-600 bg-slate-100 flex items-center gap-1 shrink-0">
                  <span>Categories</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 5,000+ promo products: tumblers, hoodies, notebooks..."
                  className="w-full px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
                <button
                  type="button"
                  aria-label="Search Catalog"
                  className="w-10 h-10 bg-[#5B4DFB] hover:bg-[#4F46E5] text-white flex items-center justify-center transition-colors shrink-0"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
              <button
                onClick={() => setIsSampleModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-300 hover:border-slate-800 text-xs font-bold text-slate-800 transition-colors cursor-pointer"
              >
                <Package className="w-3.5 h-3.5 text-[#5B4DFB]" />
                <span>Sample Pack</span>
              </button>

              <button
                onClick={() => setIsProofModalOpen(true)}
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-[#5B4DFB] text-xs font-bold transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Instant 3D Proof</span>
              </button>

              {/* Cart / Quote Basket Toggle */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer min-h-[40px]"
                aria-label="Open Quote Basket"
              >
                <ShoppingBag className="w-4 h-4 text-[#818CF8]" />
                <span className="hidden sm:inline">Quote Basket</span>
                <span className="w-5 h-5 rounded-full bg-[#5B4DFB] text-white text-[11px] font-mono font-bold flex items-center justify-center">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar Row (Dedicated for Touch Screens) */}
          <div className="md:hidden pt-2.5">
            <div className="w-full flex items-center border border-slate-300 rounded-full overflow-hidden bg-slate-50 focus-within:bg-white focus-within:border-[#5B4DFB] shadow-2xs">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tumblers, hoodies, bags..."
                className="w-full px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
              <button
                type="button"
                aria-label="Search Catalog"
                className="w-9 h-9 bg-[#5B4DFB] text-white flex items-center justify-center shrink-0"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Sub-Nav Bar */}
        <div className="border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto no-scrollbar">
            <nav className="flex items-center gap-1 sm:gap-2 py-2 text-xs font-semibold whitespace-nowrap">
              {[
                { id: "all", label: "All Catalog" },
                { id: "drinkware", label: "Drinkware & Tumblers" },
                { id: "bags", label: "Bags & Backpacks" },
                { id: "apparel", label: "Apparel & Hoodies" },
                { id: "eco", label: "Eco-Friendly Line" },
                { id: "tech", label: "Tech & Chargers" },
                { id: "office", label: "Office & Stationery" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#5B4DFB] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
              <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />
              <button
                onClick={() => {
                  const el = document.getElementById("swag-box-calculator");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Box className="w-3.5 h-3.5 text-amber-600" />
                <span>Custom Swag Boxes</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("quote-calculator");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200/80 hover:bg-emerald-100 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Tag className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bulk Pricing Calculator</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* 4. Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#F0F4FF] via-white to-white pt-10 sm:pt-14 pb-12 sm:pb-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#5B4DFB]/30 text-[#4338CA] text-xs font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#5B4DFB] animate-pulse" />
                <span>B2B Promotional Merchandise &amp; Custom Swag</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] font-display">
                Promotional products that perform.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Put your brand on items people actually want to keep. Vacuum-insulated drinkware, retail-quality heavyweight apparel, tech gear, and custom employee welcome kits with seamless digital 3D proofing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById("catalog-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-full bg-[#5B4DFB] hover:bg-[#4F46E5] text-white text-sm sm:text-base font-bold transition-all shadow-lg shadow-[#5B4DFB]/30 hover:shadow-xl hover:shadow-[#5B4DFB]/40 active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsSampleModalOpen(true)}
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-slate-800 text-sm sm:text-base font-bold transition-all active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Package className="w-4 h-4 text-[#5B4DFB]" />
                  <span>Request Free Sample Kit</span>
                </button>
              </div>

              {/* Founder Proof & Stats */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["/avatars/avatar-1.png", "/avatars/avatar-2.png", "/avatars/avatar-3.png"].map((_, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-indigo-700 font-mono"
                      >
                        {["AC", "NX", "GL"][i]}
                      </div>
                    ))}
                  </div>
                  <span>
                    <strong className="text-slate-900 font-bold">2,400+</strong> Corporate Brands
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>
                    <strong className="text-slate-900 font-bold">4.9/5</strong> Quality Rating
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <Truck className="w-4 h-4" />
                  <span>48h Rush Dispatch Ready</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-linear-to-tr from-indigo-100 via-sky-50 to-white">
                <Image
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80"
                  alt="Curated B2B Merchandise and Promotional Items"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Floating Highlight Badges matching the reference screenshot */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      VERIFIED MERCH
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      Retail Quality Standard
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-100 text-[#5B4DFB] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      3D PROOF READY
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      Free Pantone Mockups
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Four Key Value Props Pillars Strip */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#5B4DFB] flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Fast Turnaround</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Rush production ready in 48 to 72 hours
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Price Beat Guarantee</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Direct factory wholesale rates with zero middlemen
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Free Digital Proofs</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Realistic 3D mockups before you order
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">No Hidden Setup Fees</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Transparent bulk tiers &amp; free standard dispatch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Category Bento Grid Showcase ("Promotional products worth putting your name on") */}
      <section className="py-12 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <span className="text-[#5B4DFB] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
                CURATED CATEGORIES
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
                Promotional products worth putting your name on
              </h2>
            </div>
            <button
              onClick={() => {
                setActiveCategory("all");
                const el = document.getElementById("catalog-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#5B4DFB] hover:text-[#4338CA] transition-colors cursor-pointer shrink-0"
            >
              <span>View All 5,000+ Items</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Pastel Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Drinkware */}
            <div
              onClick={() => {
                setActiveCategory("drinkware");
                const el = document.getElementById("catalog-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#E0F2FE] hover:bg-[#BAE6FD] p-6 sm:p-8 rounded-3xl border border-sky-200 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/80 text-sky-800 text-[11px] font-bold">
                    From ₹195 · MOQ 50
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white text-sky-700 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Drinkware &amp; Tumblers
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2">
                  Vacuum stainless tumblers, sports bottles, copper mugs, and ceramic desk cups.
                </p>
              </div>
              <div className="relative aspect-16/10 w-full mt-6 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80"
                  alt="Drinkware and tumblers"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card 2: Bags & Commute */}
            <div
              onClick={() => {
                setActiveCategory("bags");
                const el = document.getElementById("catalog-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#EEF2FF] hover:bg-[#E0E7FF] p-6 sm:p-8 rounded-3xl border border-indigo-200 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/80 text-indigo-800 text-[11px] font-bold">
                    From ₹175 · MOQ 20
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white text-indigo-700 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Bags &amp; Commute
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2">
                  Ballistic commuter backpacks, heavy canvas totes, duffels, and laptop sleeves.
                </p>
              </div>
              <div className="relative aspect-16/10 w-full mt-6 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
                  alt="Bags and backpacks"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card 3: Eco & Sustainable */}
            <div
              onClick={() => {
                setActiveCategory("eco");
                const el = document.getElementById("catalog-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#F3E8FF] hover:bg-[#E9D5FF] p-6 sm:p-8 rounded-3xl border border-purple-200 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/80 text-purple-800 text-[11px] font-bold">
                    100% Recycled &amp; Plantable
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white text-purple-700 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Eco &amp; Sustainable Desk
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2">
                  Plantable seed notebooks, bamboo ballpoints, wheat-straw desk organizers.
                </p>
              </div>
              <div className="relative aspect-16/10 w-full mt-6 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
                  alt="Eco friendly office supplies"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card 4: Apparel & Workwear */}
            <div
              onClick={() => {
                setActiveCategory("apparel");
                const el = document.getElementById("catalog-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#FEF3C7] hover:bg-[#FDE68A] p-6 sm:p-8 rounded-3xl border border-amber-200 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/80 text-amber-800 text-[11px] font-bold">
                    From ₹220 · MOQ 25
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white text-amber-700 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Apparel &amp; Workwear
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2">
                  380 GSM organic cotton hoodies, combed tees, quarter-zips, and softshell jackets.
                </p>
              </div>
              <div className="relative aspect-16/10 w-full mt-6 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80"
                  alt="Apparel and hoodies"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card 5: Tech & Gadgets */}
            <div
              onClick={() => {
                setActiveCategory("tech");
                const el = document.getElementById("catalog-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#DBEAFE] hover:bg-[#BFDBFE] p-6 sm:p-8 rounded-3xl border border-blue-200 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/80 text-blue-800 text-[11px] font-bold">
                    CE &amp; RoHS Certified
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Tech &amp; Electronics
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2">
                  MagSafe fast chargers, power banks, braided cables, and Bluetooth conference speakers.
                </p>
              </div>
              <div className="relative aspect-16/10 w-full mt-6 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80"
                  alt="Tech gadgets"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card 6: Headwear & Caps */}
            <div
              onClick={() => {
                setActiveCategory("apparel");
                const el = document.getElementById("catalog-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#FFE4E6] hover:bg-[#FECDD3] p-6 sm:p-8 rounded-3xl border border-rose-200 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/80 text-rose-800 text-[11px] font-bold">
                    3D Embroidery &amp; Patches
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white text-rose-700 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Headwear &amp; Caps
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2">
                  Vintage washed dad hats, structured trucker snapbacks, and cuffed ribbed beanies.
                </p>
              </div>
              <div className="relative aspect-16/10 w-full mt-6 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80"
                  alt="Caps and headwear"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Philosophy / Brand Story ("Where special merchandise means business") */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#5B4DFB] font-mono text-xs font-bold uppercase tracking-wider block">
                WHY RETAIL QUALITY MATTERS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight font-display">
                Where special merchandise means business.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Ditch the flimsy plastic pens and stiff synthetic tees that end up in landfills or gym bags. We partner with retail-grade manufacturers to deliver products your team and clients will genuinely be proud to carry into executive boardrooms and airport lounges.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900">Retail Brand Pedigree:</strong> Authorized customization partners for Stanley, Nike, Moleskine, and Anker.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900">Industrial Finishing:</strong> Micro-laser debossing, 12-color Pantone embroidery, and dishwasher-safe ceramic decals.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900">Global Remote Dropship:</strong> Individual home address delivery across India and 42 countries worldwide.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919328437392?text=Hi%20Gayatri%20Technology,%20I%20would%20like%20to%20speak%20with%20a%20B2B%20merchandise%20specialist%20for%20our%20company%20swag."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95"
                >
                  <Send className="w-4 h-4 text-[#818CF8]" />
                  <span>Talk to a Merch Specialist</span>
                </a>
              </div>
            </div>

            {/* Right Lifestyle Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Creative merchandise team inspecting proofs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Three Colored Service Cards (Blue, Purple, Green) */}
      <section id="swag-box-calculator" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Sample Kit */}
            <div className="bg-[#E0F2FE] p-6 sm:p-8 rounded-3xl border border-sky-200 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-2xl bg-white text-sky-700 flex items-center justify-center font-bold shadow-2xs mb-4">
                  <Package className="w-5 h-5" />
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                  Order Samples Before You Commit
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                  Test product finish, feel fabric weight in person, and inspect laser etching before placing your full bulk order.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setIsSampleModalOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-sky-900 hover:bg-sky-950 text-white text-xs font-bold transition-colors cursor-pointer text-center"
                >
                  Order Sample Kit &rarr;
                </button>
              </div>
            </div>

            {/* Card 2: Swag Boxes */}
            <div className="bg-[#EDE9FE] p-6 sm:p-8 rounded-3xl border border-purple-200 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-2xl bg-white text-purple-700 flex items-center justify-center font-bold shadow-2xs mb-4">
                  <Box className="w-5 h-5" />
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                  Custom Packaging &amp; Swag Boxes
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                  Full custom rigid boxes, crinkle fill, branded sticker seals, and personalized greeting cards for new hires.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="https://wa.me/919328437392?text=Hi%20Gayatri%20Technology,%20I%20want%20to%20build%20custom%20employee%20onboarding%20swag%20boxes%20for%20our%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-2.5 px-4 rounded-xl bg-purple-900 hover:bg-purple-950 text-white text-xs font-bold transition-colors text-center"
                >
                  Build a Swag Box &rarr;
                </a>
              </div>
            </div>

            {/* Card 3: Eco Line */}
            <div className="bg-[#DCFCE7] p-6 sm:p-8 rounded-3xl border border-emerald-200 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-2xl bg-white text-emerald-700 flex items-center justify-center font-bold shadow-2xs mb-4">
                  <Leaf className="w-5 h-5" />
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                  100% Eco-Friendly Materials
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                  GOTS certified organic cotton, recycled ocean bound plastics, plantable seed covers, and zero-plastic mailers.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => {
                    setActiveCategory("eco");
                    const el = document.getElementById("catalog-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-900 hover:bg-emerald-950 text-white text-xs font-bold transition-colors cursor-pointer text-center"
                >
                  Explore Eco Line &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Product Catalog Section with Live Quotes & 3D Proofing */}
      <section id="catalog-section" className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[#5B4DFB] font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                ONLINE WHOLESALE CATALOG
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
                Featured Corporate Merchandise
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-full">
              {[
                { id: "all", label: "All Items" },
                { id: "drinkware", label: "Drinkware" },
                { id: "apparel", label: "Apparel" },
                { id: "bags", label: "Bags" },
                { id: "tech", label: "Tech" },
                { id: "eco", label: "Eco Line" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === c.id
                      ? "bg-white text-slate-900 shadow-2xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-[#5B4DFB]/60 transition-all hover:shadow-lg flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Product Image Frame */}
                  <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-xs text-slate-800 shadow-2xs">
                        {product.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 right-2.5">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-900/80 text-white">
                        MOQ: {product.moq} pcs
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 sm:p-5 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">{product.categoryLabel}</span>
                      <div className="flex items-center gap-1 text-amber-500 text-[11px] font-bold">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-slate-400">({product.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Available Color Swatches */}
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-400 font-mono">Colors:</span>
                      <div className="flex -space-x-1">
                        {product.colors.map((clr) => (
                          <div
                            key={clr.name}
                            title={clr.name}
                            className="w-3.5 h-3.5 rounded-full border border-white shadow-2xs"
                            style={{ backgroundColor: clr.hex }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Wholesale Pricing Tier */}
                    <div className="pt-2 border-t border-slate-100 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-mono">Wholesale from</span>
                        <span className="text-base font-extrabold text-[#5B4DFB]">
                          ₹{product.basePrice}
                        </span>
                        <span className="text-[10px] text-slate-500"> / unit</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                        Free 3D Proof
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-3.5 sm:p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleOpenProof(product)}
                    className="min-h-[40px] py-2 px-2.5 rounded-xl border border-slate-200 hover:border-slate-800 text-[11px] font-bold text-slate-700 transition-colors flex items-center justify-center gap-1 cursor-pointer active:scale-98"
                  >
                    <Eye className="w-3 h-3 text-[#5B4DFB]" />
                    <span>3D Proof</span>
                  </button>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="min-h-[40px] py-2 px-2.5 rounded-xl bg-[#5B4DFB] hover:bg-[#4F46E5] text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1 shadow-xs cursor-pointer active:scale-98"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add to Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Mid-Page Banner ("Can't find what you're looking for?") */}
      <section className="bg-sky-50 py-12 sm:py-16 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-linear-to-r from-sky-400 to-indigo-500 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider">
                CUSTOM SOURCING NETWORK
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                Can&apos;t find what you&apos;re looking for?
              </h2>
              <p className="text-sm text-sky-100">
                Our global supplier network works with over 200 certified factories. If you have custom Pantone specs, unique molds, or specific materials, we can manufacture it to order.
              </p>
            </div>
            <a
              href="https://wa.me/919328437392?text=Hi%20Gayatri%20Technology,%20I%20have%20a%20custom%20sourcing%20request%20for%20promotional%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-lg active:scale-95 shrink-0 inline-flex items-center gap-2"
            >
              <span>Request Custom Sourcing Quote</span>
              <ArrowRight className="w-4 h-4 text-[#5B4DFB]" />
            </a>
          </div>
        </div>
      </section>

      {/* 11. Interactive Live Swag Box & Bulk MOQ Pricing Estimator */}
      <section id="quote-calculator" className="py-12 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider inline-block mb-3 border border-indigo-500/30">
              TRANSPARENT FACTORY TIERS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight font-display">
              Live Bulk Pricing &amp; Swag Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Calculate instant tiered wholesale prices with zero hidden charges. Free 3D mockups and insured nationwide shipping included on all volume tiers.
            </p>
          </div>

          <div className="bg-slate-800/90 rounded-3xl border border-slate-700 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Step 1: Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Select Category
                </label>
                <div className="space-y-2">
                  {(
                    [
                      { id: "drinkware", label: "Insulated Drinkware" },
                      { id: "apparel", label: "Heavyweight Apparel" },
                      { id: "bags", label: "Commuter Bags" },
                      { id: "tech", label: "Tech & Chargers" },
                      { id: "swagbox", label: "Curated Swag Box (5-in-1)" },
                    ] as const
                  ).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCalcCategory(cat.id)}
                      className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer flex items-center justify-between ${
                        calcCategory === cat.id
                          ? "bg-[#5B4DFB] text-white font-bold shadow-md"
                          : "bg-slate-700/60 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      <span>{cat.label}</span>
                      {calcCategory === cat.id && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Quantity Tier */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Quantity Tier (MOQ)
                </label>
                <div className="space-y-2">
                  {[
                    { qty: 50, discount: "Standard Wholesale" },
                    { qty: 100, discount: "10% Bulk Discount" },
                    { qty: 250, discount: "18% Enterprise Tier" },
                    { qty: 500, discount: "28% Factory Tier" },
                    { qty: 1000, discount: "35% Master Tier" },
                  ].map((tier) => (
                    <button
                      key={tier.qty}
                      onClick={() => setCalcQty(tier.qty)}
                      className={`w-full py-2.5 px-3.5 rounded-xl text-xs text-left transition-all cursor-pointer flex items-center justify-between ${
                        calcQty === tier.qty
                          ? "bg-emerald-600 text-white font-bold shadow-md"
                          : "bg-slate-700/60 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      <span className="font-mono">{tier.qty} units</span>
                      <span className="text-[10px] text-emerald-200">{tier.discount}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Branding & Summary Output */}
              <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    3. Branding Finish
                  </label>
                  <select
                    value={calcBranding}
                    onChange={(e) => setCalcBranding(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#5B4DFB] mb-4"
                  >
                    <option>Laser Engrave (Subtle &amp; Permanent)</option>
                    <option>High-Density 3D Embroidery</option>
                    <option>Pantone Spot Color Screen Print</option>
                    <option>Full Color Digital UV Print</option>
                    <option>Blind Deboss (Journals &amp; Leather)</option>
                  </select>

                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Unit Price:</span>
                      <span className="font-mono font-bold text-white">₹{calcUnitPrice} / unit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Setup &amp; Plate Fees:</span>
                      <span className="font-mono text-emerald-400 font-bold">₹0 (Free)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Digital 3D Proof:</span>
                      <span className="font-mono text-emerald-400 font-bold">Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Estimated Turnaround:</span>
                      <span className="font-mono text-white">5-7 Business Days</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 mt-4">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs text-slate-400 uppercase font-mono">Estimated Total:</span>
                    <span className="text-2xl font-black text-white font-mono">
                      ₹{calcTotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <a
                    href={buildWhatsAppCalcUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-linear-to-r from-[#5B4DFB] to-indigo-600 hover:from-[#4F46E5] hover:to-indigo-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/30"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Get Formal Quote on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Client Reviews & Social Proof */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Rated 4.9/5 from 2,400+ Enterprise Teams</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
              Excellent customer experiences
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Here is what HR leads, procurement directors, and marketing managers say about working with BrandSurge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;We ordered 450 custom new-hire welcome boxes with insulated tumblers and heavy hoodies sent directly to employees&apos; homes across 18 Indian cities. Not a single damaged item, and the packaging was flawless.&rdquo;
              </p>
              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-100 text-[#5B4DFB] flex items-center justify-center font-bold text-xs">
                  PK
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Priya Kothari</h4>
                  <p className="text-[11px] text-slate-500">People Ops Director, FinTech SaaS</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;The 3D digital proof tool saved our design team at least two weeks of back-and-forth emails. We could preview our logo with exact laser depth before approving 1,200 conference tumblers.&rdquo;
              </p>
              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  AR
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Ankit Roy</h4>
                  <p className="text-[11px] text-slate-500">VP Brand, Global Cloud Summit</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Direct wholesale factory pricing without having to negotiate with 10 different local vendors. Turnaround was 4 days during Diwali crunch, which was literally a lifesaver for our executive gifting.&rdquo;
              </p>
              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                  SM
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Siddharth Mehta</h4>
                  <p className="text-[11px] text-slate-500">Managing Director, Mehta Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Retail Brand Partners / Shop by Brand */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-6">
            OFFICIAL CO-BRANDING PARTNERS &amp; RETAIL BRANDS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all">
            {["STANLEY", "NIKE", "MOLESKINE", "UNDER ARMOUR", "THE NORTH FACE", "ANKER", "CHAMPION"].map((brand) => (
              <span key={brand} className="text-sm sm:text-base font-black tracking-widest font-display text-slate-700">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Frequently Asked Questions Accordion */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[#5B4DFB] font-mono text-xs font-bold uppercase tracking-wider block mb-1">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What is your Minimum Order Quantity (MOQ)?",
                a: "Our MOQs vary by product category to ensure factory direct wholesale rates: Drinkware starts at 50 units, Apparel at 25 units, Backpacks at 20 units, and Tech accessories at 30 units. We also support split-color packs within a single order.",
              },
              {
                q: "How does the Free 3D Digital Proof process work?",
                a: "Once you share your vector logo (AI, EPS, SVG, or high-res PNG), our studio renders a photorealistic 3D proof showing exact Pantone color codes, laser etching depth, or thread embroidery texture within 2 to 4 business hours.",
              },
              {
                q: "Can you ship custom swag boxes individually to remote employees?",
                a: "Yes! We specialize in individual white-glove address dropshipping. Simply upload an encrypted Excel sheet of team addresses, and we handle kitting, custom gift cards, tracking link emails, and delivery confirmation.",
              },
              {
                q: "Are there any hidden plate charges or screen setup fees?",
                a: "None. All our wholesale quotes include plate setup, artwork inspection, laser calibration, and insured standard shipping. What you see in your final proposal is the all-inclusive landed cost.",
              },
              {
                q: "What is the standard production and shipping turnaround time?",
                a: "Standard customized orders dispatch in 5 to 7 business days from digital proof signoff. For urgent conferences and events, our Fast Track 48-Hour Rush program dispatches pre-stocked items within 48 hours.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      openFaq === idx ? "rotate-180 text-[#5B4DFB]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Final High-Impact Call-to-Action Banner */}
      <section className="bg-linear-to-r from-[#4F46E5] to-[#5B4DFB] text-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider inline-block">
            READY TO ELEVATE YOUR COMPANY SWAG?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-display">
            Promotional products that put your brand in the spotlight.
          </h2>
          <p className="text-sm sm:text-base text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Get instant wholesale quotes, free 3D digital mockups, and dedicated account management for your next team milestone, client summit, or marketing campaign.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setIsSampleModalOpen(true)}
              className="px-6 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Request Free Sample Pack
            </button>
            <a
              href="https://wa.me/919328437392?text=Hello%20Gayatri%20Technology,%20I%20am%20ready%20to%20discuss%20our%20company%20swag%20and%20merchandise%20needs."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-slate-900/40 hover:bg-slate-900/60 text-white border border-white/30 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-emerald-400" />
              <span>Talk to Merch Specialist on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 16. BrandSurge Complete Footer */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-12 sm:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xl font-black text-white font-display flex items-center gap-1">
                BrandSurge<span className="text-[#5B4DFB]">.</span>
              </span>
              <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
                Retail-quality promotional merchandise, custom apparel, and global swag kitting. Manufactured to exact Pantone and brand identity guidelines.
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                Engineered by Gayatri Technology &bull; Rajkot &bull; Pan-India Delivery
              </p>
            </div>

            {/* Col 2: Categories */}
            <div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] font-mono">
                Categories
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => setActiveCategory("drinkware")} className="hover:text-white">Drinkware &amp; Tumblers</button></li>
                <li><button onClick={() => setActiveCategory("apparel")} className="hover:text-white">Apparel &amp; Hoodies</button></li>
                <li><button onClick={() => setActiveCategory("bags")} className="hover:text-white">Commuter Bags</button></li>
                <li><button onClick={() => setActiveCategory("eco")} className="hover:text-white">Eco &amp; Sustainable</button></li>
                <li><button onClick={() => setActiveCategory("tech")} className="hover:text-white">Tech &amp; Electronics</button></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] font-mono">
                Solutions
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li><span className="hover:text-white cursor-pointer" onClick={() => setIsSampleModalOpen(true)}>Free Sample Kit</span></li>
                <li><span className="hover:text-white cursor-pointer" onClick={() => setIsProofModalOpen(true)}>Digital 3D Proofing</span></li>
                <li><span className="hover:text-white cursor-pointer" onClick={() => setIsCartOpen(true)}>Bulk Volume Quoting</span></li>
                <li><a href="https://wa.me/919328437392" className="hover:text-white">Remote Dropshipping</a></li>
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] font-mono">
                Direct Contact
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li><span>Phone: +91 93284 37392</span></li>
                <li><span>Email: info@gayatritechnology.in</span></li>
                <li><span>Office: Samrat Industrial Area, Rajkot</span></li>
                <li><span>Hours: Mon - Sat 9:30 AM - 7:00 PM</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <div>
              &copy; {new Date().getFullYear()} BrandSurge B2B Merch Platform &bull; Built with Next.js 15 &amp; Tailwind CSS
            </div>
            <div className="flex items-center gap-4">
              <span>ISO 9001 Certified Quality</span>
              <span>&bull;</span>
              <span>100% Vector Proof Accuracy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 17. Slide-over Quote Basket Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#5B4DFB]" />
                <h3 className="font-bold text-slate-900 text-sm sm:text-base font-display">
                  Corporate Quote Basket ({cart.length})
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer Body - Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <Package className="w-12 h-12 text-slate-300 mx-auto" />
                  <p className="text-slate-500 text-sm">Your quote basket is currently empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-4 py-2 bg-[#5B4DFB] text-white rounded-full text-xs font-bold"
                  >
                    Browse Catalog
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 flex gap-3 relative"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Color: <strong className="text-slate-700">{item.color}</strong> &bull; {item.branding}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2 py-0.5 text-xs">
                          <button
                            onClick={() => {
                              const updated = [...cart];
                              if (updated[idx].quantity > 20) {
                                updated[idx].quantity -= 10;
                                setCart(updated);
                              }
                            }}
                            className="text-slate-500 hover:text-slate-900 font-bold"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => {
                              const updated = [...cart];
                              updated[idx].quantity += 10;
                              setCart(updated);
                            }}
                            className="text-slate-500 hover:text-slate-900 font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs font-bold text-[#5B4DFB] font-mono">
                          ~₹{(item.product.basePrice * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const updated = cart.filter((_, i) => i !== idx);
                        setCart(updated);
                      }}
                      className="absolute top-2 right-2 text-slate-400 hover:text-rose-600 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer */}
            {cart.length > 0 && (
              <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Total Items:</span>
                  <span className="font-mono font-bold text-slate-900">{cartTotalQty} units</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase font-mono font-bold text-slate-500">
                    Est. Wholesale Total:
                  </span>
                  <span className="text-xl font-black text-slate-900 font-mono">
                    ₹{cartEstimatedTotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="text-[10px] text-emerald-700 bg-emerald-50 p-2 rounded-lg font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Free 3D vector proof &amp; nationwide shipping included</span>
                </div>

                <a
                  href={buildWhatsAppCartUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#25D366]/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote Request on WhatsApp</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 18. Sample Kit Modal */}
      {isSampleModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setIsSampleModalOpen(false);
                setSampleSuccess(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {sampleSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Sample Kit Request Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Thank you, <strong>{sampleForm.contactName}</strong>! Our merchandising team will prepare fabric swatches and finished samples for <strong>{sampleForm.companyName}</strong> and contact you to confirm delivery.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/919328437392?text=${encodeURIComponent(
                      `Hi Gayatri Technology, I just submitted a Free Sample Kit request for ${sampleForm.companyName} (${sampleForm.contactName}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold"
                  >
                    <span>Follow Up on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-[#5B4DFB] mb-2 font-mono text-xs font-bold">
                  <Package className="w-4 h-4" />
                  <span>CORPORATE SAMPLE PACK DISPATCH</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-display mb-1">
                  Request a Free Merchandise Sample Kit
                </h3>
                <p className="text-xs text-slate-500 mb-5">
                  Inspect fabric weight, stitch quality, and laser engraving before placing your company order. Free for registered businesses.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSampleSuccess(true);
                  }}
                  className="space-y-3.5 text-xs"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={sampleForm.contactName}
                        onChange={(e) => setSampleForm({ ...sampleForm, contactName: e.target.value })}
                        placeholder="Rohan Sharma"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5B4DFB]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        value={sampleForm.companyName}
                        onChange={(e) => setSampleForm({ ...sampleForm, companyName: e.target.value })}
                        placeholder="Zeta Technologies"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5B4DFB]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={sampleForm.email}
                        onChange={(e) => setSampleForm({ ...sampleForm, email: e.target.value })}
                        placeholder="rohan@zeta.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5B4DFB]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        value={sampleForm.phone}
                        onChange={(e) => setSampleForm({ ...sampleForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5B4DFB]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Delivery City &amp; Pincode *</label>
                    <input
                      type="text"
                      required
                      value={sampleForm.city}
                      onChange={(e) => setSampleForm({ ...sampleForm, city: e.target.value })}
                      placeholder="e.g. Bangalore, 560001 or Rajkot, 360004"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5B4DFB]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Items of Interest</label>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                      {[
                        "Apex 900ml Tumbler",
                        "380 GSM Heavy Hoodie",
                        "Commuter Backpack",
                        "Seed Journal Set",
                      ].map((item) => (
                        <label key={item} className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-lg border border-slate-200">
                          <input type="checkbox" defaultChecked className="accent-[#5B4DFB]" />
                          <span className="truncate">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#5B4DFB] hover:bg-[#4F46E5] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      Dispatch Sample Kit to Address &rarr;
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 19. Digital 3D Proof Mockup Modal */}
      {isProofModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsProofModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#5B4DFB] mb-2 font-mono text-xs font-bold">
              <Eye className="w-4 h-4" />
              <span>REAL-TIME 3D DIGITAL PROOF SIMULATOR</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-display mb-1">
              Interactive Branding Mockup
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Preview your company typography, laser etching, or screen print on actual merchandise before production.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left Mockup Canvas */}
              <div className="relative aspect-square w-full rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
                <Image
                  src={selectedProofProduct.image}
                  alt={selectedProofProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/30" />

                {/* Overlaid simulated laser engraved / printed logo */}
                <div className="absolute p-4 rounded-xl backdrop-blur-xs border border-white/40 bg-white/20 text-white text-center shadow-lg">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-white/80">
                    EST. 2026
                  </div>
                  <div className="text-lg font-black tracking-tight font-display drop-shadow-md">
                    {proofCompanyName || "YOUR BRAND"}
                  </div>
                  <div className="text-[9px] tracking-wider uppercase text-emerald-300 font-bold mt-0.5">
                    &bull; LASER ENGRAVED PROOF &bull;
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <span className="text-[10px] font-mono bg-black/60 text-white px-2 py-0.5 rounded">
                    Scale: 1:1 Vector Preview &bull; Pantone 300C
                  </span>
                </div>
              </div>

              {/* Right Controls */}
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Select Product</label>
                  <select
                    value={selectedProofProduct.id}
                    onChange={(e) => {
                      const found = PRODUCTS.find((p) => p.id === e.target.value);
                      if (found) setSelectedProofProduct(found);
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5B4DFB]"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} (MOQ: {p.moq})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Brand Name / Typography</label>
                  <input
                    type="text"
                    value={proofCompanyName}
                    onChange={(e) => setProofCompanyName(e.target.value)}
                    placeholder="Enter company name..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5B4DFB]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Branding Method</label>
                  <div className="space-y-1.5">
                    {selectedProofProduct.brandingMethods.map((m) => (
                      <div
                        key={m}
                        className="p-2 rounded-lg bg-indigo-50 text-indigo-900 border border-indigo-200 text-xs font-semibold flex items-center justify-between"
                      >
                        <span>{m}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/919328437392?text=${encodeURIComponent(
                      `Hi Gayatri Technology, I reviewed the 3D proof for ${selectedProofProduct.name} with brand name "${proofCompanyName}". Please prepare high-res production vector mockups.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#5B4DFB] hover:bg-[#4F46E5] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Approve &amp; Request Vector Proofs</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

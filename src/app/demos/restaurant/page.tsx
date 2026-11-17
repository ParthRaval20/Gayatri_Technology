"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DemoTopBanner from "@/components/demos/DemoTopBanner";
import {
  CheckCircle2,
  Plus,
  Minus,
  ShoppingBag,
  X,
  Star,
  MapPin,
  MessageCircle,
  Loader2,
  UtensilsCrossed,
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: "all" | "nigiri" | "sashimi" | "rolls" | "robata";
  price: number;
  description: string;
  image: string;
  tag?: string;
}

const SEASONAL_MENU: MenuItem[] = [
  {
    id: "item-1",
    name: "Yakitori Charcoal Skewers",
    category: "robata",
    price: 1450,
    description: "Jidori chicken, 18-year tare glaze, scallion & sansho pepper.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=700&q=80",
    tag: "Robata Grill",
  },
  {
    id: "item-2",
    name: "Scottish Sake Nigiri (2pc)",
    category: "nigiri",
    price: 1150,
    description: "Cold-water king salmon, aged nikiri soy brush & fresh Shizuoka wasabi.",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=700&q=80",
    tag: "Chef's Catch",
  },
  {
    id: "item-3",
    name: "Toro & Hamachi Tasting",
    category: "sashimi",
    price: 2600,
    description: "Bluefin belly, wild yellowtail, white truffle ponzu & micro shiso.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80",
    tag: "Micro-Seasonal",
  },
  {
    id: "item-4",
    name: "Chef's Nigiri Moriawase",
    category: "nigiri",
    price: 4600,
    description: "Seven seasonal Toyosu catches, warm 3-year akazu shari rice.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=700&q=80",
    tag: "Omakase Core",
  },
  {
    id: "item-5",
    name: "Signature Omakase Platter",
    category: "rolls",
    price: 2900,
    description: "Spicy bluefin tuna, king crab, avocado & crispy shallot crisp.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=700&q=80",
    tag: "House Special",
  },
  {
    id: "item-6",
    name: "Crispy Softshell Crab Roll",
    category: "rolls",
    price: 1800,
    description: "Tempura softshell crab, spicy tobiko aioli, unagi reduction & cucumber.",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=700&q=80",
    tag: "Wood-Fired",
  },
];

const FEATURED_CREATIONS = [
  {
    title: "Charcoal Yakitori",
    category: "Robata Specialty",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Scottish Sake Nigiri",
    category: "Toyosu Catch",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Otoro Truffle Cut",
    category: "Master Selection",
    image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Moriawase Nigiri Line",
    category: "7-Piece Set",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80",
  },
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1562436260-8c9216eeb703?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&w=600&q=80",
];

const REVIEWS = [
  {
    quote:
      "An extraordinary triumph of restraint and pure flavor. The Otoro melt-in-mouth texture and warm akazu rice are peerless.",
    author: "The Epicurean Review",
    location: "Michelin Guide Reviewer",
    rating: 5,
  },
  {
    quote:
      "The most disciplined and transcendent Omakase experience outside of Tokyo. Every course was a masterclass in quiet elegance.",
    author: "Elena Rostova",
    location: "Tokyo Gastronomy Circle",
    rating: 5,
  },
  {
    quote:
      "Dining at the 12-seat counter felt like an intimate performance. The rare Niigata sake pairing elevated each course beyond words.",
    author: "Marcus Vance",
    location: "Private Dining Guest",
    rating: 5,
  },
];

export default function RestaurantDemoPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Cart / Order state
  const [cart, setCart] = useState<{ [itemId: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Reservation form state
  const [guestCount, setGuestCount] = useState(2);
  const [seatingArea, setSeatingArea] = useState("12-Seat Omakase Counter");
  const [reserveDate, setReserveDate] = useState("Tonight");
  const [reserveTime, setReserveTime] = useState("07:30 PM");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reserveConfirmed, setReserveConfirmed] = useState(false);

  // Close cart on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen]);

  // Cart operations
  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      if (copy[id] > 1) {
        copy[id] -= 1;
      } else {
        delete copy[id];
      }
      return copy;
    });
  };

  const totalCartItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalCartAmount = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = SEASONAL_MENU.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const filteredMenu = SEASONAL_MENU.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  // Doherty Threshold (< 400ms immediate visual feedback)
  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setReserveConfirmed(true);
    }, 350);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#19191B] font-sans antialiased selection:bg-[#5F7B67] selection:text-white">
      {/* Gayatri Tech Global Demo Banner */}
      <DemoTopBanner
        demoTitle="SHINSEI Japanese Cuisine & Omakase"
        industry="Fine Dining & Japanese Hospitality"
        previewUrl="/demos/preview/restaurant"
        whatsappMessage="Hello Gayatri Technology, I saw the SHINSEI Japanese Restaurant Demo. I want an elegant, high-converting website for our restaurant."
      />

      {/* Editorial Minimalist Header */}
      <header className="sticky top-0 z-40 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#EBEAE5] transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] rounded-lg p-1"
          >
            <span className="text-xl font-bold tracking-[0.18em] uppercase text-[#19191B] font-display">
              SHINSEI
            </span>
            <span className="text-[10px] font-medium tracking-widest text-[#737373] hidden min-[400px]:inline">
              神聖 &bull; TOKYO &bull; RAJKOT
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#52525B]">
            <a
              href="#selection"
              className="hover:text-[#19191B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] rounded-md px-1.5 py-1"
            >
              Seasonal Selection
            </a>
            <a
              href="#philosophy"
              className="hover:text-[#19191B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] rounded-md px-1.5 py-1"
            >
              Philosophy
            </a>
            <a
              href="#experience"
              className="hover:text-[#19191B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] rounded-md px-1.5 py-1"
            >
              Experience
            </a>
            <a
              href="#visit"
              className="hover:text-[#19191B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] rounded-md px-1.5 py-1"
            >
              Visit Us
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Slide-over Cart Trigger (Fitts's Law >= 44x44px) */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Open Dining Basket. Current count: ${totalCartItems} items`}
              className="w-11 h-11 relative rounded-full text-[#19191B] hover:bg-[#EFEFEA] transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] focus-visible:ring-offset-2"
              title="Open Dining Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalCartItems > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#5F7B67] text-white text-[9px] font-bold flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <a
              href="#reserve"
              className="min-h-[44px] inline-flex items-center px-5 py-2.5 rounded-full bg-[#5F7B67] hover:bg-[#506B57] text-white text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] focus-visible:ring-offset-2"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section: "Sushi in its purest form." */}
      <section className="pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-[#EBEAE5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            {/* Left Column: Editorial Typography */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-4xl sm:text-6xl font-black text-[#19191B] tracking-tight leading-[1.08] font-display">
                Sushi in its <br />
                purest form.
              </h1>

              <p className="text-sm sm:text-base text-[#52525B] max-w-md leading-relaxed font-normal">
                Rooted in authentic Edomae traditions and guided by micro-seasonal sourcing. Every cut of wild fish is prepared with centuries-old precision.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#reserve"
                  className="min-h-[44px] inline-flex items-center px-6 py-3 rounded-full bg-[#5F7B67] hover:bg-[#506B57] text-white text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] focus-visible:ring-offset-2"
                >
                  Reserve a Table
                </a>
                <a
                  href="#selection"
                  className="min-h-[44px] inline-flex items-center px-6 py-3 rounded-full bg-white hover:bg-[#F3F2EE] text-[#19191B] border border-[#DCDAD4] text-xs font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] focus-visible:ring-offset-2"
                >
                  Explore Menu
                </a>
              </div>

              <div className="pt-4 flex items-center gap-4 text-xs text-[#71717A]">
                <div className="flex items-center gap-1 text-[#5F7B67]">
                  <Star className="w-3.5 h-3.5 fill-[#5F7B67]" />
                  <Star className="w-3.5 h-3.5 fill-[#5F7B67]" />
                  <Star className="w-3.5 h-3.5 fill-[#5F7B67]" />
                  <Star className="w-3.5 h-3.5 fill-[#5F7B67]" />
                  <Star className="w-3.5 h-3.5 fill-[#5F7B67]" />
                </div>
                <span>Toyosu Market Daily</span>
                <span>&bull;</span>
                <span>12-Seat Omakase Counter</span>
              </div>
            </div>

            {/* Right Column: Hero Image (Sushi Boat Platter) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 bg-[#E5E4DE] border border-[#E5E4DE]">
                <Image
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
                  alt="Artisanal sushi platter in wooden boat at Shinsei"
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

      {/* Section 2: "Seasonal Selection" (6-Card Menu Grid) */}
      <section id="selection" className="py-16 sm:py-24 bg-[#F4F3F0] border-b border-[#E8E7E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Centered Heading */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#5F7B67] font-semibold">
              AUTUMN / WINTER MICROMENU
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#19191B] tracking-tight mt-1 font-display">
              Seasonal Selection
            </h2>
            <p className="text-xs sm:text-sm text-[#71717A] mt-2">
              Sourced daily from Tokyo&apos;s Toyosu Market and coastal purveyors.
            </p>
          </div>

          {/* Category Filter Pills (Fitts's Law >= 44px) */}
          <div
            role="tablist"
            aria-label="Filter menu items by category"
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {[
              { id: "all", label: "All Selections" },
              { id: "nigiri", label: "Nigiri" },
              { id: "sashimi", label: "Sashimi" },
              { id: "rolls", label: "Maki & Rolls" },
              { id: "robata", label: "Warm Robata" },
            ].map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[44px] px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] focus-visible:ring-offset-2 ${
                  activeCategory === cat.id
                    ? "bg-[#19191B] text-white shadow-xs"
                    : "bg-white text-[#71717A] hover:text-[#19191B] border border-[#E5E4DE]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 5 Mandatory UI States: Empty state if category filter has no results */}
          {filteredMenu.length === 0 ? (
            <div className="bg-white rounded-3xl border border-[#E5E4DE] p-12 text-center max-w-md mx-auto space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E9EFEA] text-[#5F7B67] flex items-center justify-center mx-auto">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#19191B]">No items in this category</h3>
              <p className="text-xs text-[#71717A]">
                Please choose another category to view our seasonal creations.
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#19191B] text-white text-xs font-semibold cursor-pointer"
              >
                Show All Dishes
              </button>
            </div>
          ) : (
            /* 6-Card Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMenu.map((item) => {
                const qtyInCart = cart[item.id] || 0;

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#E5E4DE] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Dish Photo */}
                      <div className="relative aspect-4/3 w-full bg-[#18181B] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                        {item.tag && (
                          <span className="absolute top-3 left-3 bg-[#19191B]/80 backdrop-blur-xs text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      {/* Dish Info */}
                      <div className="p-5 space-y-2">
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-bold text-[#19191B]">
                            {item.name}
                          </h3>
                          <span className="text-sm font-mono font-bold text-[#19191B]">
                            ₹{item.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <p className="text-xs text-[#71717A] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Action: Fitts's Law min-h-[44px] */}
                    <div className="p-5 pt-0 flex items-center justify-between">
                      {qtyInCart > 0 ? (
                        <div className="flex items-center gap-2 bg-[#F4F3F0] px-2 py-1 rounded-full border border-[#E0DED7]">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Reduce quantity of ${item.name}`}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-[#71717A] hover:text-[#19191B] hover:bg-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67]"
                            title="Reduce"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-mono font-bold text-[#19191B] px-1">
                            {qtyInCart}
                          </span>
                          <button
                            onClick={() => addToCart(item.id)}
                            aria-label={`Increase quantity of ${item.name}`}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-[#71717A] hover:text-[#19191B] hover:bg-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67]"
                            title="Add"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item.id)}
                          aria-label={`Add ${item.name} to order`}
                          className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#F4F3F0] hover:bg-[#5F7B67] hover:text-white text-[#19191B] text-xs font-semibold transition-colors cursor-pointer border border-[#E5E4DE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] focus-visible:ring-offset-2"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </button>
                      )}
                      <span className="text-[10px] text-[#A1A1AA] font-mono">
                        Micro-Catch
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Section 3: "Precision is our language." (The Philosophy & Craft) */}
      <section id="philosophy" className="py-16 sm:py-24 bg-white border-b border-[#EBEAE5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            {/* Left: Atmospheric Kitchen Window Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 bg-[#E5E4DE] shadow-md border border-[#EBEAE5]">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80"
                  alt="Shinsei preparation kitchen with natural morning light"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#5F7B67] font-semibold block">
                  ABOUT
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#19191B] tracking-tight mt-1 font-display leading-tight">
                  Precision is our <br />
                  language.
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                At Shinsei, sushi is not merely dining; it is a meditation on temperature, texture, and time. Each cut of fish undergoes proprietary aging—from 48-hour kelp-curing (Kobujime) to 14-day dry aging—to reach its absolute peak of natural umami.
              </p>

              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                Our shari (rice) is cooked in traditional hagama cast-iron pots and seasoned with rare 3-year-aged Akazu (red sake lees vinegar). Maintained precisely at 37°C body temperature, each piece dissolves harmoniously the instant it meets the palate.
              </p>

              {/* Metrics Strip */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#EBEAE5]">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#19191B] font-display">24h</div>
                  <div className="text-[11px] text-[#71717A] mt-0.5">Toyosu to Counter</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#19191B] font-display">37&deg;C</div>
                  <div className="text-[11px] text-[#71717A] mt-0.5">Shari Temperature</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#19191B] font-display">12</div>
                  <div className="text-[11px] text-[#71717A] mt-0.5">Counter Seats Only</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: "Featured Creations" (Horizontal 4-Card Row) */}
      <section className="py-14 sm:py-20 bg-[#F4F3F0] border-b border-[#E8E7E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-3xl font-black text-[#19191B] font-display">
              Featured Creations
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {FEATURED_CREATIONS.map((creation, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5E4DE] shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="relative aspect-square w-full bg-[#18181B]">
                  <Image
                    src={creation.image}
                    alt={creation.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-xs font-bold text-[#19191B] truncate">
                    {creation.title}
                  </h3>
                  <p className="text-[10px] text-[#71717A] font-mono mt-0.5">
                    {creation.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: "An intimate dining experience." (Atmosphere & Seating) */}
      <section id="experience" className="py-16 sm:py-24 bg-white border-b border-[#EBEAE5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            {/* Left: Atmospheric Narrative Points */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-[#19191B] tracking-tight font-display">
                An intimate <br />
                dining experience.
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#52525B]">
                <div className="p-4 rounded-2xl bg-[#FBFBF9] border border-[#EBEAE5] space-y-1">
                  <h3 className="font-bold text-[#19191B]">The 12-Seat Hinoki Counter</h3>
                  <p className="text-xs text-[#71717A] leading-relaxed">
                    Witness every slice, torch, and brush stroke up close. Our master chef conducts an unhurried 18-course journey calibrated to your personal pace.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBFBF9] border border-[#EBEAE5] space-y-1">
                  <h3 className="font-bold text-[#19191B]">Sake &amp; Natural Wine Pairings</h3>
                  <p className="text-xs text-[#71717A] leading-relaxed">
                    Curated cellar of rare Junmai Daiginjo sakes from boutique breweries in Niigata, Nagano, and Kyoto, selected to elevate each fish.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBFBF9] border border-[#EBEAE5] space-y-1">
                  <h3 className="font-bold text-[#19191B]">Private Tatami Dining Room</h3>
                  <p className="text-xs text-[#71717A] leading-relaxed">
                    An enclosed, serene architectural salon accommodating up to 8 guests for bespoke corporate or celebratory dinners.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Mood-lit Interior Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 bg-[#19191B] shadow-xl border border-[#EBEAE5]">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                  alt="Shinsei atmospheric dining room with warm golden lighting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: "Guest Experiences" (3 Testimonials) */}
      <section className="py-16 sm:py-24 bg-[#F4F3F0] border-b border-[#E8E7E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#19191B] font-display">
              Guest Experiences
            </h2>
            <p className="text-xs text-[#71717A] mt-1">
              Words from our diners and culinary critics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E4DE] shadow-2xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex gap-0.5 text-[#5F7B67]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#5F7B67]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#474749] leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EFEB]">
                  <div className="text-xs font-bold text-[#19191B]">
                    {review.author}
                  </div>
                  <div className="text-[11px] text-[#71717A]">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: "Reserve Your Table" (Embedded Form Card with Doherty Threshold feedback) */}
      <section id="reserve" className="py-16 sm:py-24 bg-[#ECEAE4] border-b border-[#E2DFD8]">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-lg border border-[#DDD9CE] relative">
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#5F7B67] font-bold">
                TABLE RESERVATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#19191B] font-display mt-0.5">
                Reserve Your Table
              </h2>
              <p className="text-xs text-[#71717A] mt-1">
                Seatings are released 30 days in advance.
              </p>
            </div>

            {reserveConfirmed ? (
              <div className="text-center py-6 space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 bg-[#E9EFEA] text-[#5F7B67] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#19191B]">
                  Reservation Request Received
                </h3>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  Thank you, <span className="font-bold text-[#19191B]">{guestName}</span>! Your request for <span className="font-bold">{guestCount} guests</span> at the <span className="font-bold">{seatingArea}</span> is recorded for <span className="font-bold">{reserveDate} ({reserveTime})</span>.
                </p>
                <div className="p-3 bg-[#F4F3F0] rounded-xl text-[11px] text-[#52525B] border border-[#E5E4DE]">
                  ⚡ <strong>Interactive Demo Note:</strong> In the live restaurant website built by Gayatri Technology, this sends automated WhatsApp confirmation with Google Calendar links.
                </div>
                <button
                  onClick={() => setReserveConfirmed(false)}
                  className="min-h-[44px] px-6 py-2.5 rounded-full bg-[#19191B] text-white text-xs font-semibold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] focus-visible:ring-offset-2"
                >
                  Make Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleReservationSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#52525B] uppercase block mb-1">
                      Party Size
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-[#DCDAD4] text-xs bg-[#FBFBF9] text-[#19191B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67]"
                    >
                      <option value={1}>1 Guest (Solo Counter)</option>
                      <option value={2}>2 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={6}>6 Guests</option>
                      <option value={8}>8 Guests (Private Tatami)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#52525B] uppercase block mb-1">
                      Seating Zone
                    </label>
                    <select
                      value={seatingArea}
                      onChange={(e) => setSeatingArea(e.target.value)}
                      className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-[#DCDAD4] text-xs bg-[#FBFBF9] text-[#19191B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67]"
                    >
                      <option>12-Seat Omakase Counter</option>
                      <option>Intimate Dining Room</option>
                      <option>Private Tatami Suite</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#52525B] uppercase block mb-1">
                      Seating Date
                    </label>
                    <select
                      value={reserveDate}
                      onChange={(e) => setReserveDate(e.target.value)}
                      className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-[#DCDAD4] text-xs bg-[#FBFBF9] text-[#19191B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67]"
                    >
                      <option>Tonight</option>
                      <option>Tomorrow</option>
                      <option>This Friday</option>
                      <option>This Saturday</option>
                      <option>Next Week</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#52525B] uppercase block mb-1">
                      Time Slot
                    </label>
                    <select
                      value={reserveTime}
                      onChange={(e) => setReserveTime(e.target.value)}
                      className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-[#DCDAD4] text-xs bg-[#FBFBF9] text-[#19191B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67]"
                    >
                      <option>12:30 PM (Lunch)</option>
                      <option>02:00 PM (Lunch)</option>
                      <option>06:00 PM (Early Dinner)</option>
                      <option>07:30 PM (Prime)</option>
                      <option>09:15 PM (Late)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#52525B] uppercase block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Siddharth Shah"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-[#DCDAD4] text-xs bg-[#FBFBF9] text-[#19191B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#52525B] uppercase block mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-[#DCDAD4] text-xs bg-[#FBFBF9] text-[#19191B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[44px] py-3.5 rounded-full bg-[#5F7B67] hover:bg-[#506B57] disabled:opacity-75 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer mt-2 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] focus-visible:ring-offset-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Confirming Table Availability...</span>
                    </>
                  ) : (
                    <span>Find a Table</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Section 8: "Visit Us" (Location & Hours) */}
      <section id="visit" className="py-16 sm:py-24 bg-white border-b border-[#EBEAE5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Contact Details */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-[#19191B] font-display">
                Visit Us
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#52525B]">
                <div>
                  <div className="font-bold text-[#19191B] text-xs uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <p>42 Sakuragaoka &bull; Culinary District &bull; Rajkot Landmark, Gujarat 360004</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <div className="font-bold text-[#19191B] text-xs uppercase tracking-wider mb-1">
                      Lunch Service
                    </div>
                    <p className="text-xs text-[#71717A]">Tuesday – Sunday</p>
                    <p className="text-xs font-mono font-medium">12:00 PM – 02:30 PM</p>
                  </div>
                  <div>
                    <div className="font-bold text-[#19191B] text-xs uppercase tracking-wider mb-1">
                      Dinner Service
                    </div>
                    <p className="text-xs text-[#71717A]">Tuesday – Sunday</p>
                    <p className="text-xs font-mono font-medium">06:00 PM – 11:00 PM</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="font-bold text-[#19191B] text-xs uppercase tracking-wider mb-1">
                    Inquiries &amp; Private Buyouts
                  </div>
                  <p className="text-xs font-mono">+91 93284 37392 &bull; reservations@shinsei.com</p>
                </div>
              </div>
            </div>

            {/* Right: Minimalist Stylized Map Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#F4F3F0] rounded-3xl p-8 sm:p-12 border border-[#E5E4DE] text-center space-y-3 flex flex-col items-center justify-center min-h-[260px]">
                <div className="w-12 h-12 rounded-full bg-[#E9EFEA] text-[#5F7B67] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-base font-bold text-[#19191B]">
                  SHINSEI Dining Lounge
                </div>
                <p className="text-xs text-[#71717A] max-w-xs">
                  Valet parking available at private courtyard entrance. Smart casual dress code requested.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center text-xs font-bold text-[#5F7B67] hover:underline pt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] rounded-md px-2"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: "Moments at SHINSEI" (8-Photo Gallery Grid) */}
      <section className="py-16 sm:py-24 bg-[#F4F3F0] border-b border-[#E8E7E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#19191B] font-display">
              Moments at SHINSEI
            </h2>
            <p className="text-xs text-[#71717A] mt-1 font-mono">
              Follow our daily craft &bull; @shinsei.dining
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-2xl overflow-hidden bg-[#18181B] border border-[#E5E4DE] group"
              >
                <Image
                  src={img}
                  alt={`Shinsei moment ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide-Over Cart Simulator (Accessible Dialog with Escape Key & 5 Mandatory UI States) */}
      {isCartOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Dining Basket"
          className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white w-full max-w-md h-full p-6 border-l border-[#E5E4DE] flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#EBEAE5]">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#5F7B67]" />
                  <h3 className="text-base font-bold text-[#19191B]">
                    Your Dining Basket
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close Dining Basket"
                  className="w-10 h-10 rounded-xl text-[#71717A] hover:text-[#19191B] hover:bg-[#F4F3F0] transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List (Empty vs Ideal State) */}
              <div className="py-4 space-y-3 max-h-[55vh] overflow-y-auto">
                {Object.keys(cart).length === 0 ? (
                  <div className="text-center py-12 px-4 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#F4F3F0] text-[#71717A] flex items-center justify-center mx-auto border border-[#E5E4DE]">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#19191B]">
                        Your basket is currently empty
                      </p>
                      <p className="text-xs text-[#71717A]">
                        Explore our seasonal Edomae dishes to curate your private tasting.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        const selectionEl = document.getElementById("selection");
                        if (selectionEl) selectionEl.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#19191B] hover:bg-[#2C2C2E] text-white text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67]"
                    >
                      Explore Seasonal Menu
                    </button>
                  </div>
                ) : (
                  Object.entries(cart).map(([id, qty]) => {
                    const item = SEASONAL_MENU.find((m) => m.id === id);
                    if (!item) return null;

                    return (
                      <div
                        key={id}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#FBFBF9] border border-[#EBEAE5]"
                      >
                        <div>
                          <div className="text-xs font-bold text-[#19191B]">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-[#71717A] font-mono">
                            ₹{item.price.toLocaleString("en-IN")} &times; {qty} = ₹{(item.price * qty).toLocaleString("en-IN")}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-[#DCDAD4]">
                          <button
                            onClick={() => removeFromCart(id)}
                            aria-label={`Reduce quantity of ${item.name}`}
                            className="w-7 h-7 rounded flex items-center justify-center text-[#71717A] hover:text-[#19191B] hover:bg-slate-100 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold text-[#19191B] px-1">
                            {qty}
                          </span>
                          <button
                            onClick={() => addToCart(id)}
                            aria-label={`Increase quantity of ${item.name}`}
                            className="w-7 h-7 rounded flex items-center justify-center text-[#71717A] hover:text-[#19191B] hover:bg-slate-100 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Cart Footer */}
            <div className="pt-4 border-t border-[#EBEAE5] space-y-3">
              <div className="flex justify-between items-center text-xs text-[#52525B]">
                <span>Subtotal:</span>
                <span className="font-mono font-bold text-[#19191B]">
                  ₹{totalCartAmount.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#71717A]">
                <span>Taxes &amp; Service (5%):</span>
                <span className="font-mono">
                  ₹{Math.round(totalCartAmount * 0.05).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-[#19191B] pt-2 border-t border-[#EBEAE5]">
                <span>Estimated Total:</span>
                <span className="font-mono text-[#5F7B67]">
                  ₹{Math.round(totalCartAmount * 1.05).toLocaleString("en-IN")}
                </span>
              </div>

              <div className="p-3 bg-[#E9EFEA] rounded-xl text-[11px] text-[#2C4936]">
                ⚡ <strong>Smart QR &amp; Table Sync:</strong> On the live website built by Gayatri Technology, diners scan table QR codes to send orders directly to the kitchen display.
              </div>

              <a
                href="#reserve"
                onClick={() => setIsCartOpen(false)}
                className="w-full min-h-[44px] flex items-center justify-center py-3 rounded-full bg-[#5F7B67] hover:bg-[#506B57] text-white font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] focus-visible:ring-offset-2"
              >
                Proceed to Reserve Table with Dishes
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Editorial Minimalist Footer */}
      <footer className="bg-white py-12 px-4 sm:px-6 text-xs text-center border-t border-[#EBEAE5] space-y-4">
        <div className="text-base font-bold tracking-[0.2em] text-[#19191B] uppercase font-display">
          SHINSEI
        </div>
        <p className="text-[#71717A] max-w-md mx-auto leading-relaxed">
          High-end Japanese culinary web design &bull; Crafted &amp; Engineered by Gayatri Technology
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/919328437392?text=Hello%20Gayatri%20Technology%2C%20I%20want%20a%20luxury%20restaurant%20website%20like%20SHINSEI."
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5F7B67] hover:bg-[#506B57] text-white font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7B67] focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 93284 37392)</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

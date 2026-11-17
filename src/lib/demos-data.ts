export interface DemoTechSpec {
  label: string;
  value: string;
}

export interface DemoItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "education" | "beauty-wellness" | "hospitality" | "b2b";
  categoryLabel: string;
  clientType: string;
  description: string;
  businessProblemSolved: string;
  heroFeatureTag: string;
  heroImage: string;
  technicalSpecs: DemoTechSpec[];
  keyFeatures: string[];
  colorTheme: {
    primary: string;
    secondary: string;
    accent: string;
    badgeBg: string;
    badgeText: string;
  };
  liveUrl: string;
  previewUrl: string;
  recommendedFor: string[];
  techHighlights: string[];
  whatsappMessage: string;
}

export const DEMO_CATEGORIES = [
  { id: "all", label: "All Interactive Demos" },
  { id: "hospitality", label: "Restaurant & Dining" },
  { id: "b2b", label: "B2B & Digital Studios" },
  { id: "beauty-wellness", label: "Salon & Wellness" },
  { id: "education", label: "Preschool & Childcare" },
] as const;

export const DEMOS_DATA: DemoItem[] = [
  {
    id: "restaurant",
    slug: "restaurant",
    title: "SHINSEI Japanese Cuisine & Omakase",
    subtitle: "Direct Table Reservation & Digital Dining Cart System",
    category: "hospitality",
    categoryLabel: "Restaurant & Dining",
    clientType: "Fine Dining Restaurants, Omakase Lounges, Bistros & Cafés",
    description:
      "Engineered for restaurateurs looking to eliminate the 18% to 25% commission fees taken by third-party reservation and food delivery portals. Combines a seasonal menu, direct counter reservation system, and a live QR dining basket.",
    businessProblemSolved:
      "Stops third-party aggregators from owning your customer relationships. Guests book tables and pre-order courses directly, sending formatted booking alerts straight to your team WhatsApp.",
    heroFeatureTag: "0% Portal Commission Direct Capture",
    heroImage:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    technicalSpecs: [
      { label: "Commission Saved", value: "100% Direct" },
      { label: "Load Time (3G)", value: "~380ms" },
      { label: "Delivery Route", value: "WhatsApp Webhook" },
    ],
    keyFeatures: [
      "Direct counter & dining room reservation form with seating zones",
      "Interactive seasonal menu with live slide-over dining basket",
      "Zero third-party marketplace commissions and zero per-cover charges",
      "Touch-optimized ordering ready for on-table QR code deployment",
    ],
    colorTheme: {
      primary: "#4A6B56",
      secondary: "#F5F4F0",
      accent: "#18181B",
      badgeBg: "#E9EFEA",
      badgeText: "#2C4936",
    },
    liveUrl: "/demos/restaurant",
    previewUrl: "/demos/preview/restaurant",
    recommendedFor: [
      "Fine Dining & Omakase Lounges",
      "Modern Cafés & Bistros",
      "Specialty Cuisine Restaurants",
      "Artisanal Bakeries & Cloud Kitchens",
    ],
    techHighlights: [
      "Server-rendered Next.js 15 pages",
      "Direct WhatsApp Webhook alerts",
      "Zero Cumulative Layout Shift (CLS)",
      "Instant Cart with client-side state",
    ],
    whatsappMessage:
      "Hello Gayatri Technology, I saw the SHINSEI Restaurant Demo. I want to build an independent direct reservation website for my restaurant.",
  },
  {
    id: "b2b",
    slug: "b2b",
    title: "BrandSurge® Promotional Merchandise & Swag",
    subtitle: "B2B Wholesale Catalog, Live MOQ Tiers & Custom Swag Box Engine",
    category: "b2b",
    categoryLabel: "B2B Wholesale & Swag",
    clientType: "Corporate Gifting Agencies, B2B Brands, Event Organizers & HR Teams",
    description:
      "Engineered for promotional merchandise suppliers and corporate gifting studios. Features automated wholesale volume pricing, interactive digital proof requests, sample kit dispatch, and multi-product swag box kitting.",
    businessProblemSolved:
      "Replaces slow email quotation chains and back-and-forth proof approvals. Corporate buyers configure quantities, preview branding options, and receive instant wholesale quotes directly on WhatsApp.",
    heroFeatureTag: "Live Wholesale MOQ & Swag Box Builder",
    heroImage:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    technicalSpecs: [
      { label: "Wholesale Tiers", value: "Automated MOQs" },
      { label: "Digital Proofs", value: "Instant 3D Preview" },
      { label: "Production Turnaround", value: "48-72h Rush" },
    ],
    keyFeatures: [
      "Dynamic bulk volume pricing engine with tiered MOQ unit cost calculations",
      "Interactive 3D digital proof modal with real-time logo mockup preview",
      "Curated corporate swag boxes with individual remote address dropshipping",
      "Factory-direct wholesale portal with zero marketplace commission fees",
    ],
    colorTheme: {
      primary: "#5B4DFB",
      secondary: "#F8FAFC",
      accent: "#10B981",
      badgeBg: "#EDE9FE",
      badgeText: "#5B4DFB",
    },
    liveUrl: "/demos/b2b",
    previewUrl: "/demos/preview/b2b",
    recommendedFor: [
      "Promotional Product Suppliers",
      "Corporate Gifting & HR Teams",
      "B2B Event & Conference Organizers",
      "Custom Apparel & Merch Manufacturers",
    ],
    techHighlights: [
      "Dynamic bulk volume pricing calculator",
      "Interactive category bento & product filtering",
      "Instant WhatsApp quote & proof dispatch",
      "Sub-400ms Next.js 15 client state",
    ],
    whatsappMessage:
      "Hello Gayatri Technology, I saw the BrandSurge B2B Swag & Promotional Merchandise Demo. I want to build a wholesale catalog and quoting portal for my merchandise/B2B business.",
  },
  {
    id: "salon",
    slug: "salon",
    title: "Salon Studio & Hair Artistry",
    subtitle: "Direct Appointment Booking & Stylist Scheduling Platform",
    category: "beauty-wellness",
    categoryLabel: "Salon & Wellness",
    clientType: "Hair Salons, Beauty Studios, Luxury Spas & Aesthetic Clinics",
    description:
      "Built for independent salon owners looking to stop losing bookings to unanswered phone calls during busy hours. Lets clients browse service packages, choose their preferred specialist, pick an open slot, and receive instant confirmation.",
    businessProblemSolved:
      "Eliminates phone tag during cutting and styling hours. Customers book directly 24/7 with their preferred stylist, reducing no-shows through automated WhatsApp reminders.",
    heroFeatureTag: "24/7 Real-Time Slot Booking",
    heroImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    technicalSpecs: [
      { label: "Booking Availability", value: "24/7 Automated" },
      { label: "Slot Precision", value: "6 Live Tiers" },
      { label: "Direct Bookings", value: "100% Owned" },
    ],
    keyFeatures: [
      "Transparent multi-tier package pricing (Essential, Signature, Ultimate)",
      "Individual master stylist portfolios with direct booking buttons",
      "Live time-slot selector modal with under 400ms feedback",
      "Mobile-first transformation lookbook with zero layout shifts",
    ],
    colorTheme: {
      primary: "#111827",
      secondary: "#F9FAFB",
      accent: "#475569",
      badgeBg: "#F3F4F6",
      badgeText: "#111827",
    },
    liveUrl: "/demos/salon",
    previewUrl: "/demos/preview/salon",
    recommendedFor: [
      "Hair Salons & Color Specialists",
      "Unisex Studios & Aesthetic Lounges",
      "Blowout Bars & Bridal Studios",
      "Luxury Day Spas & Wellness Clinics",
    ],
    techHighlights: [
      "Clean monochromatic editorial layout",
      "Integrated stylist calendar logic",
      "Zero third-party marketplace commissions",
      "Direct WhatsApp client confirmation",
    ],
    whatsappMessage:
      "Hello Gayatri Technology, I saw the Salon Studio Demo on your website. I want a modern appointment booking website for my salon.",
  },
  {
    id: "preschool",
    slug: "preschool",
    title: "Little Bloom Preschool & Academy",
    subtitle: "Admissions Portal & Campus Tour Scheduling System",
    category: "education",
    categoryLabel: "Preschool & Childcare",
    clientType: "Preschools, Daycares, Activity Centers & Kindergartens",
    description:
      "Designed for preschool directors who want to replace manual paper application forms and disorganized WhatsApp chats. Features interactive program age pathways, campus curriculum highlights, and a friction-free tour booking flow.",
    businessProblemSolved:
      "Captures parent admission inquiries the minute they visit. Parents select their child's age group and schedule a campus walkthrough directly into your admissions calendar.",
    heroFeatureTag: "Direct Parent Admission Routing",
    heroImage:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80",
    technicalSpecs: [
      { label: "Mobile Optimization", value: "100% Touch Safe" },
      { label: "Inquiry Capture", value: "Direct to WhatsApp" },
      { label: "Program Pathways", value: "3 Age Stages" },
    ],
    keyFeatures: [
      "Age-calibrated developmental program selectors (1.5 to 6 years)",
      "Interactive campus tour booking flow with real-time feedback",
      "Structured sensory curriculum and daily activity gallery showcase",
      "Accessible cloud-scallop visual architecture built for parent trust",
    ],
    colorTheme: {
      primary: "#FF7834",
      secondary: "#E0F2FE",
      accent: "#52B758",
      badgeBg: "#FFF3EB",
      badgeText: "#EA580C",
    },
    liveUrl: "/demos/preschool",
    previewUrl: "/demos/preview/preschool",
    recommendedFor: [
      "Preschools & Play Schools",
      "Montessori & Daycares",
      "Early Child Skill Centers",
      "Primary Schools & Academies",
    ],
    techHighlights: [
      "Interactive Tour Booking Dialog",
      "Accessible WCAG 2.1 AA color contrast",
      "Next.js App Router performance",
      "Automated WhatsApp parent notification",
    ],
    whatsappMessage:
      "Hello Gayatri Technology, I explored the Little Bloom Preschool Demo on your website. I want an admissions portal website for my preschool.",
  },
];

export interface ProjectScreenshot {
  src: string;
  title: string;
  subtitle: string;
  category: string;
  feature: string;
  badge?: string;
  aspectRatio?: "mobile" | "desktop" | "tablet";
}

export type ProjectSector =
  | "METALS & MANUFACTURING"
  | "ENTERPRISE MOBILITY & ERP"
  | "INSTITUTIONAL & TRUST ERP"
  | "CREATIVE & DIGITAL PRODUCTION";

export type ProjectRelationship =
  | "Client Project"
  | "Live Web Platform"
  | "Institutional ERP";

export interface CaseStudy {
  sysCode: string;
  relationship: ProjectRelationship;
  sector: ProjectSector;
  title: string;
  tagline: string;
  problem: string;
  existingWorkflow: string;
  whatWeBuilt: string;
  keyFeatures: string[];
  deliveredFunctionality: string;
  tech: string;
  techBadges: string[];
  url?: string;
  badge: string;
  isLive: boolean;
  type: "web" | "app" | "erp";
  category: "all" | "erp" | "web";
  screenshots?: ProjectScreenshot[];
  highlightMetrics?: {
    value: string;
    label: string;
  }[];
}

export const gayatriAppScreenshots: ProjectScreenshot[] = [
  {
    src: "/portfolio/gayatri-app/1-company-selection.png",
    title: "Multi-Company Architecture",
    subtitle: "Enterprise Group Switcher",
    category: "Security & Multi-Tenant",
    feature:
      "Centralized group switcher providing isolated workspace access across 5 industrial entities: Gayatri Steel, VK Industries, Gayatri Corporation, Gayatri Enterprise, and Gayatri Industries.",
    aspectRatio: "mobile",
  },
  {
    src: "/portfolio/gayatri-app/2-login-auth.png",
    title: "GST-Authenticated Secure Login",
    subtitle: "Enterprise Access Control",
    category: "Security & Multi-Tenant",
    feature:
      "Protected portal entry bound to registered industrial GSTIN credentials (24AESPR4095L1ZO) with administrator provisioning and session tokens.",
    aspectRatio: "mobile",
  },
  {
    src: "/portfolio/gayatri-app/3-materials-catalog.png",
    title: "28+ Steel Grades & Heat Treatments",
    subtitle: "Hardness & Standard Classifications",
    category: "Metallurgy & Standards",
    feature:
      "Interactive material library covering Plastic Mould, Hot Work, and Cold Work steel grades (1.2083 ESR, 1.2311 P20, 1.2316) with annealed & hardened HRC ratings.",
    aspectRatio: "mobile",
  },
  {
    src: "/portfolio/gayatri-app/4-chemical-composition.png",
    title: "Chemical Composition & Cross-Standards",
    subtitle: "EN • AISI • DIN • JIS • GB Equivalents",
    category: "Metallurgy & Standards",
    feature:
      "Visual metallurgical percentage bars for Carbon, Silicon, Manganese, Chromium, Phosphorus, and Sulphur with international grade cross-referencing.",
    aspectRatio: "mobile",
  },
  {
    src: "/portfolio/gayatri-app/5-inventory-tracker.png",
    title: "Real-Time Warehouse Stock Overview",
    subtitle: "Live Sync & Low-Stock Warnings",
    category: "Inventory Management",
    feature:
      "Real-time piece counters, low-stock alerts, cloud sync status indicator, and instant grade inventory summaries for warehouse supervisors.",
    aspectRatio: "mobile",
  },
  {
    src: "/portfolio/gayatri-app/6-add-inventory-modal.png",
    title: "Shape-Aware Stock Entry & Auto Weight",
    subtitle: "Round, Flat & Pipe Dimension Engine",
    category: "Inventory Management",
    feature:
      "Automated metallurgical formula engine that computes piece weight (kg) on the fly based on diameter, length, and shape with custom reorder threshold alerts.",
    aspectRatio: "mobile",
  },
  {
    src: "/portfolio/gayatri-app/7-inventory-stock-breakdown.png",
    title: "Precision Piece Counting & Weight Tracking",
    subtitle: "Live Tally (+ / -) & Total Tonnage",
    category: "Inventory Management",
    feature:
      "Granular stock increment/decrement interface displaying piece weight (e.g. 7.707 kg/pc), cumulative tonnage (192.7 kg), items sold, and dispatch status.",
    aspectRatio: "mobile",
  },
  {
    src: "/portfolio/gayatri-app/8-digital-challan.png",
    title: "Digital Delivery Challans & Dispatch",
    subtitle: "Customer GSTIN, PO & Lorry Transport",
    category: "Challan & Logistics",
    feature:
      "Generates paperless delivery challans recording customer name, GSTIN, PO number, vehicle/lorry registration, transport carrier, and shape-aware materials.",
    aspectRatio: "mobile",
  },
  {
    src: "/portfolio/gayatri-app/9-ai-stock-advisor.png",
    title: "Gayatri Steel AI Stock Advisor",
    subtitle: "Conversational Inventory Intelligence",
    category: "AI & Smart Tools",
    feature:
      "Built-in AI advisor trained on Gayatri Steel inventory that provides intelligent purchasing recommendations, stock trend queries, and reorder alerts.",
    aspectRatio: "mobile",
  },
  {
    src: "/portfolio/gayatri-app/10-industrial-calculator.png",
    title: "Industrial Metal Weight & Cost Calculator",
    subtitle: "Density Specs for Tool, Stainless & Alloy Steel",
    category: "AI & Smart Tools",
    feature:
      "Dual calculation mode (By Length & By Weight) with presets for Tool Steel (7.8), Stainless (7.75), and Aluminium (2.7) calculating total batch cost in ₹.",
    aspectRatio: "mobile",
  },
];

export const brahmSamajScreenshots: ProjectScreenshot[] = [
  {
    src: "/portfolio/brahm-samaj/1-dashboard-portal.png",
    title: "Executive Dashboard & Central Management Board",
    subtitle: "Welcome, President / Admin • Official ERP Portal",
    category: "Dashboard & Governance",
    feature:
      "Real-time governance dashboard tracking Total Registered Members, Daily Additions, Family Units, and QR ID Cards Issued. Includes 1-Click Quick Launchpad (New Member, Directory, Backup & Restore) and Recent Registrations table. Displays official verification: 'Software Developed by Gayatri Technology'.",
    aspectRatio: "desktop",
  },
  {
    src: "/portfolio/brahm-samaj/2-member-registration-form.png",
    title: "Standardized Digital Membership Registration Form",
    subtitle: "Form No. GBS-000001 • Sabarkantha Chapter (Idar)",
    category: "Census & Data Integrity",
    feature:
      "Official digital registration form for Shree Samast Gujarat Brahm Samaj S.K. featuring surname-first naming convention, residential & village addresses, Taluka/District selection, PIN code validation, education, and mobile contact verification with 1-click 'Generate PDF' and 'Save Member' actions.",
    aspectRatio: "desktop",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    sysCode: "GAYATRI-STEEL-APP",
    relationship: "Client Project",
    sector: "ENTERPRISE MOBILITY & ERP",
    title: "Gayatri Steel Mobile Operations Suite",
    tagline: "10-Module Operations System for 5 Group Companies",
    problem:
      "Tracking stock across 5 sister entities with handwritten registers and WhatsApp chats caused stock count mismatches and delayed vehicle dispatches.",
    existingWorkflow:
      "Warehouse staff manually calculated piece weights using notebook density charts, wrote delivery challans by hand, and called offices for bill details.",
    whatWeBuilt:
      "A mobile-first operational ERP with multi-entity group switching, shape-aware auto weight calculations, live piece counts, and digital challans.",
    keyFeatures: [
      "Multi-company switcher for 5 sister entities with isolated GST & accounts",
      "Shape-aware formula engine calculating kg weights for flat, round, and pipe",
      "Digital delivery challans with customer GSTIN, PO number, and vehicle details",
      "Live piece increment/decrement counters with cumulative tonnage tallies",
    ],
    deliveredFunctionality:
      "Warehouse staff create paperless delivery challans from a phone in under 30 seconds with automatic weight and lorry transport details.",
    tech: "React Native • Cloud APIs • Python Backend",
    techBadges: ["React Native", "Python", "FastAPI", "PostgreSQL", "Offline Sync"],
    badge: "CLIENT PROJECT • 10 SCREENS",
    isLive: false,
    type: "app",
    category: "erp",
    screenshots: gayatriAppScreenshots,
    highlightMetrics: [
      { value: "5", label: "Companies Unified" },
      { value: "10", label: "Mobile Modules" },
      { value: "<30s", label: "Challan Generation" },
      { value: "0", label: "Handwritten Errors" },
    ],
  },
  {
    sysCode: "BRAHM-SAMAJ-ERP",
    relationship: "Client Project",
    sector: "INSTITUTIONAL & TRUST ERP",
    title: "Gujarat Brahm Samaj Management Suite",
    tagline: "Member Registration, ID Generation & Chapter Management ERP (v2.4.0)",
    problem:
      "Managing hundreds of trust members across Sabarkantha & North Gujarat with loose paper forms and cardboard folders caused lost member records, missing fee receipts, and weeks of delay generating official identity cards.",
    existingWorkflow:
      "Volunteers hand-wrote registration applications at the Idar chapter office, filed cash fee slips in physical binders, and had no digital way to search emergency blood donors or print uniform membership cards.",
    whatWeBuilt:
      "A bilingual Gujarati/English Institutional ERP (v2.4.0) featuring standardized digital registration (Form GBS series), automated ₹500 fee ledgering, blood-group census lookup, instant PDF ID card generation, and local offline database backup.",
    keyFeatures: [
      "Standardized digital member registration (Form GBS series) with surname-first validation",
      "Automated ₹500 membership fee collection tracking and verified receipt ledger",
      "Instant PDF generation for official photo ID cards and printable chapter certificates",
      "One-click local backup & restore engine safeguarding trust data with zero cloud lock-in",
      "Advanced multi-parameter demographic search for emergency blood donor matching",
    ],
    deliveredFunctionality:
      "Chapter administrators register members with structured Gujarati inputs, match emergency blood donors in seconds, issue printable photo ID cards with one click, and run encrypted local database backups.",
    tech: "Desktop & Web ERP • Python • SQLite / PostgreSQL • PDF Print Engine • Gujarati Unicode",
    techBadges: ["Python", "SQLite / PostgreSQL", "PDF Engine", "Gujarati Unicode", "Offline Backup"],
    badge: "CLIENT PROJECT • 2 SCREENS",
    isLive: false,
    type: "erp",
    category: "erp",
    screenshots: brahmSamajScreenshots,
    highlightMetrics: [
      { value: "100%", label: "Official GT Attribution" },
      { value: "1-Click", label: "PDF ID Generation" },
      { value: "Bilingual", label: "Gujarati & English" },
      { value: "0", label: "Cloud Lock-in Dependencies" },
    ],
  },
  {
    sysCode: "GAYATRI-STEEL-WEB",
    relationship: "Client Project",
    sector: "METALS & MANUFACTURING",
    title: "Gayatri Steel Group Web Portal",
    tagline: "Commercial Web Platform & Technical Steel Grade Catalog",
    problem:
      "Buyers called sales representatives repeatedly just to check available tool steel grades, chemical compositions, and facility locations across Rajkot and Jamnagar.",
    existingWorkflow:
      "Sales staff sent mobile photos of printed catalogs, scanned sheets, and paper brochures over WhatsApp.",
    whatWeBuilt:
      "A fast commercial web platform with an interactive metallurgical catalog, international grade equivalents, and instant WhatsApp inquiry routing.",
    keyFeatures: [
      "28+ Tool steel grades catalog with chemical equivalents (DIN, AISI, JIS)",
      "Multi-facility locator connecting Rajkot yard & Jamnagar depot",
      "Instant WhatsApp inquiry routing with prefilled grade specifications",
      "Mobile-optimized catalog built for fast access on Indian mobile networks",
    ],
    deliveredFunctionality:
      "Prospective buyers browse 28+ grade compositions, download technical sheets, and send instant inquiries with exact specifications.",
    tech: "React • Tailwind CSS • Vite • Vercel",
    techBadges: ["React", "Tailwind CSS", "Vite", "Vercel SSG", "WhatsApp API"],
    url: "https://gayatri-steel.vercel.app/",
    badge: "CLIENT PROJECT • LIVE",
    isLive: true,
    type: "web",
    category: "web",
    highlightMetrics: [
      { value: "28+", label: "Indexed Steel Grades" },
      { value: "2", label: "Yard Facilities Synced" },
      { value: "100%", label: "Mobile Responsive" },
      { value: "<1s", label: "Page Load Time" },
    ],
  },
  {
    sysCode: "TDR-STUDIO-FORGE",
    relationship: "Client Project",
    sector: "CREATIVE & DIGITAL PRODUCTION",
    title: "The Divine Roar Studio",
    tagline: "High-Performance Interactive Agency Web Platform",
    problem:
      "A creative media studio needed an authoritative web platform showcasing high-fidelity production work without heavy loading delays or mobile stutters.",
    existingWorkflow:
      "Relying on standard video portfolios that took 10+ seconds to buffer on mobile devices.",
    whatWeBuilt:
      "A custom interactive web platform featuring optimized WebGL canvas effects, rapid media delivery pipelines, and fluid page micro-interactions.",
    keyFeatures: [
      "Custom 3D canvas and WebGL interactive shaders",
      "Lightning-fast media streaming and responsive asset delivery",
      "Client inquiry pipeline connected to lead notifications",
    ],
    deliveredFunctionality:
      "Instant-loading portfolio experience with smooth high-frame-rate visual storytelling across mobile and desktop devices.",
    tech: "React • Canvas & 3D • Tailwind CSS • Vite",
    techBadges: ["React", "WebGL / Canvas", "Tailwind CSS", "Vite", "Edge Streaming"],
    url: "https://tdrstudio.vercel.app/",
    badge: "CLIENT PROJECT • LIVE",
    isLive: true,
    type: "web",
    category: "web",
    highlightMetrics: [
      { value: "60 FPS", label: "Canvas Frame Rate" },
      { value: "<800ms", label: "Initial Interactive" },
      { value: "100%", label: "Cross-Device Fluidity" },
      { value: "Global", label: "CDN Edge Delivery" },
    ],
  },
];

export const portfolioMetrics = [
  {
    metric: "4",
    label: "Production Deployments",
    sub: "Enterprise ERPs, mobile suites & commercial platforms",
  },
  {
    metric: "12+",
    label: "Verified Software Screens",
    sub: "Authentic production UIs across industrial & institutional systems",
  },
  {
    metric: "28+",
    label: "Industrial Grades & Standards",
    sub: "Chemical formulas, carbon ratios & physical tolerances",
  },
  {
    metric: "100%",
    label: "Built For Actual Workflow",
    sub: "Zero generic templates — engineered for factory floor, trust office & dispatch",
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySysCode(sysCode: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.sysCode.toLowerCase() === sysCode.toLowerCase());
}

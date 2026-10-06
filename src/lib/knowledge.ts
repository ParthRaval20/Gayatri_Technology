export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: "Operations & ERP" | "Software Strategy" | "Cost & Planning";
  publishedDate: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
  };
  keyTakeaways: string[];
  content: {
    heading: string;
    paragraphs: string[];
    checklist?: string[];
  }[];
}

export const articles: Article[] = [
  {
    slug: "excel-to-erp",
    title: "When Should a Growing Business Move From Excel to ERP?",
    subtitle: "Signs your spreadsheets have turned from an asset into an operational bottleneck.",
    excerpt:
      "Excel is the world's most popular business tool, but there is a tipping point where formulas break, data gets entered twice, and dispatch slows down. Here is how to know when to switch.",
    category: "Operations & ERP",
    publishedDate: "October 2026",
    readingTime: "6 min read",
    author: {
      name: "Parth Raval",
      role: "Founder & Lead Engineer, Gayatri Technology",
    },
    keyTakeaways: [
      "Excel is great for early stages; do not replace it until your team experiences clear friction.",
      "The critical warning sign is duplicate data entry: typing the same customer or stock data into multiple sheets.",
      "A transition does not require a monolithic software suite; start with your highest-friction operational workflow.",
      "Shop-floor workers need mobile-friendly screens with 3 clicks, not complex spreadsheets.",
    ],
    content: [
      {
        heading: "1. Why Excel Works So Well (Until It Doesn't)",
        paragraphs: [
          "Almost every business starts on Microsoft Excel or Google Sheets. It is flexible, instant to start, and requires zero software developer fees. You can track orders, maintain price lists, and write custom formulas on a Saturday afternoon.",
          "However, Excel was designed as a calculation sheet, not a multi-user database. As your transaction volume increases and your team grows across multiple branches or factory bays, the very flexibility that made Excel great becomes its biggest liability.",
        ],
      },
      {
        heading: "2. The 5 Definite Signs You Have Outgrown Spreadsheets",
        paragraphs: [
          "If you are wondering whether it is time to invest in custom software, look for these concrete symptoms across your daily operations:",
        ],
        checklist: [
          "Duplicate Data Entry: A sales coordinator types an order into Excel, a warehouse supervisor copies it into an inventory sheet, and accounts types it into Tally.",
          "Conflicting Versions: Your team argues over whose sheet has the 'latest' stock count (e.g., Stock_Final_v3_oct.xlsx vs Stock_Updated.xlsx).",
          "Broken Formulas: An employee accidentally deletes a cell formula or overrides a column, leading to under-billing or dispatch errors that take days to detect.",
          "Delayed Customer Answers: A customer calls asking for order status or dispatch vehicle number, and your team spends 20 minutes calling around three departments.",
          "Month-End Reporting Paralysis: Preparing monthly sales, production loss, or gross margin reports takes 3 days of manual copy-pasting.",
        ],
      },
      {
        heading: "3. When You Should STAY on Excel",
        paragraphs: [
          "Honest advice from an engineering company: do not build or buy an ERP if you don't need one. If your business operates from a single office, processes under 100 transactions a month, and only 1 or 2 people ever touch the numbers, stay on Excel.",
          "Custom software has an initial development investment and requires operational discipline. Only build when the cost of manual errors and lost operational hours exceeds the cost of building software.",
        ],
      },
      {
        heading: "4. What a Practical Transition Looks Like",
        paragraphs: [
          "The biggest mistake Indian SMEs make is trying to replace everything on day one. They try to deploy an enormous software system covering HR, accounting, purchasing, production, and CRM all at once. Within 3 months, staff members revolt and revert back to their personal spreadsheets.",
          "The approach that actually succeeds is phased deployment. Identify the single biggest pain point—usually live inventory tracking or delivery challan generation—and replace just that workflow with a simple web or mobile tool. Once staff love using it, add the next module.",
        ],
      },
    ],
  },
  {
    slug: "custom-erp-vs-ready-made",
    title: "Custom ERP vs Ready-Made ERP: What Actually Works for Growing Businesses?",
    subtitle: "Why 60% of generic off-the-shelf software implementations get abandoned, and how to choose correctly.",
    excerpt:
      "Ready-made software promises quick deployment, but often forces your team into rigid foreign workflows and per-user monthly bills. Compare costs, adoption rates, and real-world trade-offs.",
    category: "Software Strategy",
    publishedDate: "October 2026",
    readingTime: "7 min read",
    author: {
      name: "Parth Raval",
      role: "Founder & Lead Engineer, Gayatri Technology",
    },
    keyTakeaways: [
      "Ready-made SaaS charges per user per month; costs spiral as you add factory workers, drivers, and sales agents.",
      "Off-the-shelf ERPs force you to change your workflow to match the software, causing severe staff resistance.",
      "Custom software carries higher upfront focus, but gives you 100% code ownership, zero per-seat license taxes, and an exact fit.",
      "If your business workflow is generic (standard retail shop), buy ready-made. If your workflow is your competitive advantage, build custom.",
    ],
    content: [
      {
        heading: "1. The Ready-Made ERP Trap",
        paragraphs: [
          "When business owners decide they need software, their first instinct is often to look at popular off-the-shelf SaaS ERPs or global enterprise suites. The sales demos look sleek and the feature lists are endless.",
          "Six months later, reality sets in. The software requires 14 mandatory fields just to create an internal material transfer. The warehouse staff stops using it because it cannot run on a smartphone in the factory bay. Meanwhile, the software company sends monthly recurring invoices for 40 user seats, even though only 3 people actively use the system.",
        ],
      },
      {
        heading: "2. The 3-Year Total Cost Comparison",
        paragraphs: [
          "Ready-made software appears cheaper in month one, but consider the 3-year math for a growing business with 25 employees:",
        ],
        checklist: [
          "Per-User License Tax: Paying ₹1,500 to ₹3,500 per user/month adds up to ₹4.5L – ₹10L every single year indefinitely.",
          "Customization Charges: Ready-made software vendors charge exorbitant consultant fees just to add one custom field or print format.",
          "Custom Software One-Time Build: You pay for the engineering once, own the codebase, and host it on low-cost cloud infrastructure (₹1,500 – ₹4,000/month total server cost regardless of user count).",
        ],
      },
      {
        heading: "3. How Staff Adoption Decides Success",
        paragraphs: [
          "Software that employees hate is software that fails. If an inventory supervisor has to click through five sub-menus and fill out fields they don't understand, they will enter fake data or stop using it entirely.",
          "When we built the operations system for Gayatri Steel, we observed how warehouse workers actually work: they are wearing gloves, standing in a noisy bay, and dealing with lorries that need to leave immediately. We built 2-step touch-friendly mobile screens where selecting a steel grade and weight takes 10 seconds. Staff loved it on day one because it saved them time instead of creating extra work.",
        ],
      },
    ],
  },
  {
    slug: "manufacturing-erp-essentials",
    title: "What Should a Manufacturing ERP Actually Manage on the Ground?",
    subtitle: "A practical breakdown of factory-floor modules that actually move metal and reduce production waste.",
    excerpt:
      "Factory management is not an academic exercise. Here are the core modules a manufacturing ERP needs—from shape-aware weight calculations to paperless delivery challans.",
    category: "Operations & ERP",
    publishedDate: "October 2026",
    readingTime: "8 min read",
    author: {
      name: "Parth Raval",
      role: "Founder & Lead Engineer, Gayatri Technology",
    },
    keyTakeaways: [
      "A desktop-only system is useless on the factory floor; dispatch and stock tracking must be mobile-first.",
      "Shape-aware material calculators eliminate costly human calculation mistakes before cutting.",
      "Digital delivery challans with vehicle tracking prevent transport disputes and speed up client invoicing.",
      "Chemical composition indexing allows instant grade verification against mill test certificates.",
    ],
    content: [
      {
        heading: "1. The Disconnect Between Management and the Factory Floor",
        paragraphs: [
          "In many manufacturing units in Rajkot, Ahmedabad, and across Gujarat, there is a deep divide: the owner sits in the front office looking at reports, while the shop floor operates on handwritten chalk marks, paper registers, and WhatsApp photos of weighed billets.",
          "If your ERP only lives on a desktop computer in the air-conditioned office, it is not an operations system—it is merely a retrospective accounting record. To stop production leakages and material waste, the system must live where the metal moves.",
        ],
      },
      {
        heading: "2. Core Modules That Yield Immediate ROI",
        paragraphs: [
          "Based on real industrial deployments, these are the modules that deliver immediate business value:",
        ],
        checklist: [
          "Shape-Aware Weight Calculation: Calculating theoretical weight from dimensions (rounds, flats, squares, hollow pipes) using standard alloy densities to verify against physical weighbridge receipts.",
          "Chemical Composition & Grade Database: Immediate mobile lookup of alloy percentages (Carbon, Manganese, Chromium, Nickel) to ensure the right raw material is selected for machining.",
          "Multi-Entity Stock Routing: Many manufacturing groups operate under multiple GST entities (trading, manufacturing, job-work). The system must allow switching entities seamlessly without logout.",
          "Instant Paperless Delivery Challan: Generating a clean, GSTIN-compliant dispatch PDF directly from the dispatch phone with vehicle number, PO reference, and lorry details.",
          "Scrap & Off-Cut Tracking: Logging usable off-cuts into inventory so high-value raw material does not get sold at scrap rate by mistake.",
        ],
      },
      {
        heading: "3. Speed Matters More Than Feature Quantity",
        paragraphs: [
          "In an industrial environment, speed is king. If generating a gate pass or challan takes more than 60 seconds, dispatch supervisors will bypass the software and write a manual paper slip. Every screen must be engineered for fast input, minimal taps, and offline tolerance.",
        ],
      },
    ],
  },
  {
    slug: "whatsapp-excel-tally-integration",
    title: "WhatsApp + Excel + Tally: When Should These Become One System?",
    subtitle: "How growing Indian businesses bridge the chaotic gap between sales chats, inventory sheets, and accounting.",
    excerpt:
      "Most Indian businesses run on a combination of WhatsApp for communication, Excel for stock, and Tally for billing. Here is when and how to connect them into a single coherent workflow.",
    category: "Operations & ERP",
    publishedDate: "October 2026",
    readingTime: "6 min read",
    author: {
      name: "Parth Raval",
      role: "Founder & Lead Engineer, Gayatri Technology",
    },
    keyTakeaways: [
      "The 'WhatsApp + Excel + Tally' triad is standard in India, but creates high human error at scale.",
      "You do not need to replace Tally—Tally is excellent at accounting. You need software that manages what happens BEFORE Tally.",
      "A custom client portal or internal app captures orders cleanly, updates stock automatically, and prepares invoices.",
      "WhatsApp Cloud API integration allows sending automated order confirmations and challans directly to customer phones.",
    ],
    content: [
      {
        heading: "1. The Daily Chaos of the 3 Disconnected Tools",
        paragraphs: [
          "Consider the typical lifecycle of an order in a wholesale or manufacturing business:",
          "1. A customer sends a photo of a handwritten list or audio note on WhatsApp.",
          "2. The salesperson checks an Excel sheet to see if material is available.",
          "3. The warehouse confirms availability via another WhatsApp group.",
          "4. Once dispatched, a paper note is sent to the accountant, who types it into Tally.",
          "When you process 10 orders a day, this works. When you process 50 orders a day across 3 branches, orders get missed, prices are quoted incorrectly, and items are promised that were already sold an hour earlier.",
        ],
      },
      {
        heading: "2. Keep Tally for What It Does Best",
        paragraphs: [
          "Many software vendors try to convince business owners to throw out Tally. That is usually bad advice. Your CA knows Tally, your accountants are trained in Tally, and Indian statutory GST filings are smoothly integrated into Tally.",
          "What businesses actually need is an operations layer that sits in front of Tally. Custom software handles the operational reality: customer ordering, quotations, production, warehouse allocation, and dispatch. Once an order is fulfilled, the clean transactional data can sync into your accounting system.",
        ],
      },
      {
        heading: "3. The Power of WhatsApp Automation Done Right",
        paragraphs: [
          "Instead of staff manually typing 'Your vehicle is dispatched' and copying PDF challans from computer to phone, modern business applications connect directly with the official WhatsApp Cloud API.",
          "When dispatch clicks 'Release Order', the customer automatically receives a branded WhatsApp message with the vehicle number, lorry receipt, and download link for their delivery challan. This eliminates 80% of routine customer enquiry calls.",
        ],
      },
    ],
  },
  {
    slug: "custom-software-cost-india",
    title: "What Determines Custom Software Development Cost in India?",
    subtitle: "An honest breakdown of budgets, timelines, and how to avoid getting overcharged or under-delivered.",
    excerpt:
      "From ₹50,000 simple portals to multi-lakh custom ERP suites: understand what actually drives software costs and the questions you must ask before hiring a software studio.",
    category: "Cost & Planning",
    publishedDate: "October 2026",
    readingTime: "7 min read",
    author: {
      name: "Parth Raval",
      role: "Founder & Lead Engineer, Gayatri Technology",
    },
    keyTakeaways: [
      "Software cost is driven by complexity, user roles, and integrations—not page count.",
      "Beware of ultra-cheap ₹10,000 quotes; they usually deliver abandoned WordPress templates that cannot scale.",
      "Always demand 100% source code ownership and access to your own cloud hosting account.",
      "Fixed-price milestone contracts protect business owners far better than vague hourly retainers.",
    ],
    content: [
      {
        heading: "1. Why Software Pricing Seems So Opaque",
        paragraphs: [
          "If you ask five software agencies in India for a quotation to build a 'custom business portal', you might get five wildly different answers ranging from ₹25,000 to ₹10,00,000. This confuses business owners and makes them wary of getting taken for a ride.",
          "The difference isn't arbitrary markup—it is the difference between a student installing a pre-made WordPress theme versus an engineering studio building a secure, custom-engineered database architecture with role permissions, automated testing, and mobile responsiveness.",
        ],
      },
      {
        heading: "2. The Key Cost Drivers in Any Custom Project",
        paragraphs: [
          "When we evaluate a project scope at Gayatri Technology, here are the real factors that dictate engineering effort and pricing:",
        ],
        checklist: [
          "Workflow Complexity: Does the software just store static records, or does it calculate theoretical metallurgical weights, manage multi-warehouse transfers, and generate PDF challans?",
          "User Roles & Permissions: Single admin vs. multi-tier permissions (Director, Branch Manager, Warehouse Dispatcher, Client View).",
          "Integrations: Connecting with third-party systems such as GST APIs, WhatsApp Cloud API, payment gateways (Razorpay/Stripe), or thermal barcode printers.",
          "Platforms: Responsive Web Application vs. Cross-Platform Mobile App (Android & iOS).",
          "Data Migration: Migrating years of messy legacy Excel sheets or old SQL databases into a clean modern schema.",
        ],
      },
      {
        heading: "3. Typical Budget Ranges for Growing Businesses",
        paragraphs: [
          "To provide realistic transparency for businesses evaluating software:",
          "• High-Performance Business Website / Lead Portal: ₹25,000 – ₹60,000. Built with Next.js, optimized for mobile speed and local SEO.",
          "• Custom Operational Web Application / Portal: ₹75,000 – ₹1,75,000. Multi-user database, workflow tracking, quotation generation, and role access.",
          "• Full Custom Mobile + Web ERP Suite: ₹2,00,000 – ₹5,00,000+. Comprehensive multi-branch inventory, manufacturing calculations, dispatch, and reporting.",
        ],
      },
      {
        heading: "4. Questions to Ask Before Signing Any Software Contract",
        paragraphs: [
          "Before paying an advance deposit to any software developer or agency, get clear written answers to these four questions:",
          "1. 'Do I own 100% of the source code upon final payment?' (Never accept a vendor who holds your codebase hostage).",
          "2. 'Will the software run on my own cloud server account (e.g., AWS, DigitalOcean, Hetzner)?'",
          "3. 'Who do I speak to when there is a technical issue—the developer building it, or a non-technical sales representative?'",
          "4. 'What warranty is included after deployment to fix bugs discovered during real daily use?'",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

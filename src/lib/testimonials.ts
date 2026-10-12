export interface Testimonial {
  id: string;
  sysCode: string;
  name: string;
  fullName: string;
  role: string;
  organization: string;
  location: string;
  projectTitle: string;
  projectBadge: string;
  projectType: "app" | "web" | "erp";
  rating: number;
  headline: string;
  shortSnippet: string;
  quote: string;
  impactMetrics: {
    value: string;
    label: string;
  }[];
  highlightTag: string;
  verified: boolean;
  avatarInitials: string;
  avatarBgColor: string;
  textColor: string;
  verifiedText: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "gayatri-steel-app",
    sysCode: "GAYATRI-STEEL-APP",
    name: "Kaushik",
    fullName: "Kaushik",
    role: "Operations Partner & Dispatch Head",
    organization: "Gayatri Steel Group (Rajkot)",
    location: "Rajkot, Gujarat",
    projectTitle: "Gayatri Steel Mobile Operations Suite",
    projectBadge: "Mobile App ERP",
    projectType: "app",
    rating: 5,
    headline: "Lorries don't wait in line anymore — challans done on phone in 30 seconds",
    shortSnippet:
      "Earlier our yard supervisors used pocket calculators and notebooks to figure out steel weights. Trucks waited outside and weight mismatches caused billing disputes...",
    quote:
      "Our supervisors work on the stockyard floor with lorries waiting outside. Earlier, they used to calculate round and flat bar weights using paper charts and pocket calculators. Trucks got delayed, and a 15–20 kg calculation error often led to billing disputes with clients. Parth Bhai came to our yard and saw how our staff actually operates with heavy materials. The app he built calculates the exact weight the moment diameter and length are selected. Challans are generated on the phone in 20-30 seconds. Even our non-technical supervisors picked it up on day one.",
    impactMetrics: [
      { value: "<30s", label: "Challan On Phone" },
      { value: "0", label: "Weight Mismatches" },
      { value: "5", label: "Group Companies Synced" },
    ],
    highlightTag: "Yard Operations",
    verified: true,
    avatarInitials: "K",
    avatarBgColor: "bg-emerald-600",
    textColor: "text-emerald-500",
    verifiedText: "Verified Client • 10 Production Screens",
    date: "January 2026",
  },
  {
    id: "gayatri-steel-web",
    sysCode: "GAYATRI-STEEL-WEB",
    name: "Vaibhav",
    fullName: "Vaibhav",
    role: "Commercial & Sales Lead",
    organization: "Gayatri Steel Group (Rajkot & Jamnagar)",
    location: "Rajkot & Jamnagar, Gujarat",
    projectTitle: "Gayatri Steel Group Web Portal",
    projectBadge: "Commercial Web Platform",
    projectType: "web",
    rating: 5,
    headline: "Stopped sharing blurry brochure photos on WhatsApp — buyers find specs directly",
    shortSnippet:
      "Every day machine shops and toolmakers called asking for chemical compositions and hardness specs. Half our morning went into finding brochures and taking photos...",
    quote:
      "Every day, toolmakers and machine shops from Rajkot and Ahmedabad call asking if we have a specific steel grade in stock, what its chemical composition is, or what the hardness rating is. Previously, we had to dig out printed brochures, take photos with a phone, and WhatsApp them across. The website built by Gayatri Technology solved this headache completely. All 28+ grades are neatly listed with DIN and AISI standards. Now clients browse specs directly on their phone and click one button to WhatsApp us with the exact material inquiry. It saves our sales team hours of repetitive calls every day.",
    impactMetrics: [
      { value: "28+", label: "Grades with Chem Specs" },
      { value: "1-Click", label: "WhatsApp Inquiry" },
      { value: "Hours Saved", label: "Every Single Day" },
    ],
    highlightTag: "Commercial Sales",
    verified: true,
    avatarInitials: "V",
    avatarBgColor: "bg-teal-600",
    textColor: "text-teal-500",
    verifiedText: "Verified Client • Live Web Platform",
    date: "March 2026",
  },
  {
    id: "brahm-samaj-erp",
    sysCode: "BRAHM-SAMAJ-ERP",
    name: "Vishnu",
    fullName: "Vishnu",
    role: "Trustee & General Secretary",
    organization: "Shree Samast Gujarat Brahm Samaj (Sabarkantha)",
    location: "Sabarkantha & North Gujarat",
    projectTitle: "Gujarat Brahm Samaj Management Suite (v2.4.0)",
    projectBadge: "Institutional Trust ERP",
    projectType: "erp",
    rating: 5,
    headline: "Member ID cards that used to take weeks now print in under a minute",
    shortSnippet:
      "We had cardboard files and loose paper slips for hundreds of trust families. Finding emergency blood donors or issuing ID cards was a nightmare...",
    quote:
      "We manage hundreds of community families across Sabarkantha, and everything was maintained in cardboard folders and handwritten registers. Searching for a member or finding an emergency blood donor took hours of flipping through pages, and printing photo ID cards used to take weeks because of manual typing. Parth Bhai built this ERP software right around how our Idar office volunteers work, with clean Gujarati and English typing. Now, entering a member, recording the ₹500 fee receipt, and printing an official photo ID card happens with one click. It runs right on our office computer with simple backup and zero recurring monthly fees.",
    impactMetrics: [
      { value: "<1 Min", label: "ID Card Printed" },
      { value: "Gujarati", label: "Native Typing & Forms" },
      { value: "Offline", label: "Safe Local Database" },
    ],
    highlightTag: "Office Workflow",
    verified: true,
    avatarInitials: "V",
    avatarBgColor: "bg-amber-600",
    textColor: "text-amber-500",
    verifiedText: "Verified Institutional Client • v2.4.0 ERP",
    date: "September 2026",
  },
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

export function getTestimonialBySysCode(sysCode: string): Testimonial | undefined {
  return testimonials.find(
    (item) => item.sysCode.toLowerCase() === sysCode.toLowerCase()
  );
}

export function getTestimonialsByType(type: "app" | "web" | "erp"): Testimonial[] {
  return testimonials.filter((item) => item.projectType === type);
}

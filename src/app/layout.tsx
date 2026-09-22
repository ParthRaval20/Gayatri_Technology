import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gayatri Technology | Custom Web Development & Technology Solutions",
  description:
    "We design and develop custom websites and web applications tailored to your business requirements, goals, and customers. Zero-template enterprise architecture.",
  keywords: [
    "Gayatri Technology",
    "Custom Web Development",
    "Web Applications",
    "Enterprise Software",
    "E-Commerce Solutions",
    "UI/UX Design",
    "Noida Tech Company",
    "Next.js Development"
  ],
  authors: [{ name: "Gayatri Technology" }],
  openGraph: {
    title: "Gayatri Technology | Custom Web Development & Technology Solutions",
    description:
      "Technology Built Around Your Business. Custom web development, portals, and cloud systems.",
    url: "https://gayatritechnology.com",
    siteName: "Gayatri Technology",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#47C56E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${montserrat.variable} font-sans bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-[#47C56E] selection:text-[#091C0F]`}
      >
        {children}
      </body>
    </html>
  );
}

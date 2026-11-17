import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { DEMOS_DATA } from "@/lib/demos-data";
import DevicePreviewClient from "./DevicePreviewClient";
import { createPageMetadata } from "@/lib/seo";

interface PreviewPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PreviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = DEMOS_DATA.find((d) => d.slug === slug);

  if (!demo) {
    return {
      title: "Interactive Demo Not Found | Gayatri Technology",
    };
  }

  return createPageMetadata({
    title: `Live Demo: ${demo.title} | Gayatri Technology`,
    description: `Interact with the working ${demo.categoryLabel} demo website (${demo.title}). Switch between desktop, tablet, and mobile views.`,
    path: `/demos/preview/${slug}`,
    openGraphTitle: `Live Demo & Interactive Simulation: ${demo.title}`,
    openGraphDescription: demo.description,
  });
}

export function generateStaticParams() {
  return DEMOS_DATA.map((demo) => ({
    slug: demo.slug,
  }));
}

export default async function DemoPreviewPage({ params }: PreviewPageProps) {
  const { slug } = await params;
  const demo = DEMOS_DATA.find((d) => d.slug === slug);

  if (!demo) {
    notFound();
  }

  return <DevicePreviewClient demo={demo} />;
}

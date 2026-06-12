import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import AboutHero from "@/components/about/Hero";
import Mission from "@/components/about/Mission";
import HowWeWork from "@/components/about/HowWeWork";
import Values from "@/components/about/Values";
import AboutCTA from "@/components/about/CTA";

export const metadata: Metadata = seoConfig.about;

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Mission />
      <HowWeWork />
      <Values />
      <AboutCTA />
    </main>
  );
}

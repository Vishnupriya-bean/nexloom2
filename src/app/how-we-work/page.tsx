import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import HwwHero from "@/components/how-we-work/Hero";
import Steps from "@/components/how-we-work/Steps";
import HwwCTA from "@/components/how-we-work/CTA";

export const metadata: Metadata = seoConfig.howWeWork;

export default function HowWeWorkPage() {
  return (
    <main>
      <HwwHero />
      <Steps />
      <HwwCTA />
    </main>
  );
}

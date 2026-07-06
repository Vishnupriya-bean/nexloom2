import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import HowWeHelp from "@/components/home/HowWeHelp";
import ProblemList from "@/components/home/ProblemList";
import About from "@/components/home/About";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = seoConfig.home;

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowWeHelp />
      <ProblemList />
      <About />
      <CTA />
    </>
  );
}

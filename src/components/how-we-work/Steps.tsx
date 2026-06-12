"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { stepsContent, type ProcessStep } from "@/lib/content/how-we-work";

// Icons matching source HTML, indexed by step position
const STEP_ICONS: React.ReactNode[] = [
  // Step 1 — MessageSquare
  <svg key="msg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  // Step 2 — Search
  <svg key="search" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>,
  // Step 3 — Code2
  <svg key="code" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
  </svg>,
  // Step 4 — Rocket
  <svg key="rocket" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
  // Step 5 — Headphones
  <svg key="headphones" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </svg>,
];

function Step({
  step,
  icon,
  index,
}: {
  step: ProcessStep;
  icon: React.ReactNode;
  index: number;
}) {
  // Alternate slide direction: even indexes from left, odd from right
  const direction = index % 2 === 0 ? "left" : "right";

  return (
    <RevealOnScroll direction={direction} delay={index * 0.08}>
      <div className="flex items-start gap-6">
        {/* Gradient icon box */}
        <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-md">
          {icon}
        </div>

        {/* Body */}
        <div className="flex-1 pt-1">
          <span className="block text-sm font-bold text-primary mb-1.5">
            {step.label}
          </span>
          <h3 className="text-xl font-bold text-fore mb-2">{step.title}</h3>
          <p className="text-[0.9375rem] text-muted-fore leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function Steps() {
  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {stepsContent.map((step, i) => (
            <Step key={step.title} step={step} icon={STEP_ICONS[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionWrapper from "@/components/ui/SectionWrapper";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { whyNexloomContent, type ValueItem } from "@/lib/content/home";

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className="text-primary shrink-0">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

const VALUE_ICONS: React.ReactNode[] = [
  // Technical Excellence — lightbulb
  <svg key="excellence" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" /><path d="M10 22h4" />
  </svg>,
  // Partnership Mindset — users
  <svg key="partnership" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // Results-Driven — target
  <svg key="results" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>,
  // Continuous Improvement — refresh
  <svg key="improvement" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>,
];

function ValueCard({ item, icon, delay }: { item: ValueItem; icon: React.ReactNode; delay: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <GlassCard className="p-6 h-full flex flex-col gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="text-base font-bold text-[#f0f0f5]">{item.title}</h3>
        <p className="text-sm text-[#8a8a9a] leading-relaxed">{item.description}</p>
      </GlassCard>
    </RevealOnScroll>
  );
}

export default function WhyNexloom() {
  const c = whyNexloomContent;

  return (
    <>
      {/* ── About Nexloom ─────────────────────────────────────────────── */}
      <SectionWrapper id="about" className="relative overflow-hidden">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(59,91,219,0.15) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(2,214,245,0.12) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <RevealOnScroll>
            <SectionLabel>{c.aboutLabel}</SectionLabel>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f0f0f5] tracking-tight">
              {c.aboutHeading}{" "}
              <GradientText>{c.aboutHeadingGradient}</GradientText>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-[#8a8a9a] text-lg leading-relaxed">{c.aboutText}</p>
          </RevealOnScroll>

          {/* Capability list */}
          <RevealOnScroll delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left mt-2">
              {c.capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm font-medium text-[#f0f0f5]/80">{cap}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <Button href={c.aboutCta.href} variant="outline" size="lg" arrow className="mt-2">
              {c.aboutCta.label}
            </Button>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      {/* ── Our Values ────────────────────────────────────────────────── */}
      <SectionWrapper className="bg-[#12121a]/40">
        <div className="text-center mb-12 flex flex-col items-center gap-4">
          <RevealOnScroll>
            <SectionLabel>{c.valuesLabel}</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f0f0f5] tracking-tight">
              {c.valuesHeading}
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.values.map((val, i) => (
            <ValueCard key={val.title} item={val} icon={VALUE_ICONS[i]} delay={i * 0.1} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

"use client";

import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionWrapper from "@/components/ui/SectionWrapper";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { ctaContent } from "@/lib/content/home";

const CONTACT_ICONS: React.ReactNode[] = [
  // Visit Us — map pin
  <svg key="visit" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  // Email Us — mail
  <svg key="email" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>,
  // Call Us — phone
  <svg key="call" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>,
];

// Calendar icon for the main CTA button
function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" /><path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

export default function CTA() {
  const c = ctaContent;

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden bg-[#12121a]/40">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full opacity-25"
          style={{ background: "radial-gradient(ellipse, rgba(59,91,219,0.25) 0%, transparent 70%)" }} />
      </div>

      <div className="relative">
        {/* Centred header + primary CTA */}
        <div className="text-center flex flex-col items-center gap-5 mb-14">
          <RevealOnScroll>
            <SectionLabel>{c.sectionLabel}</SectionLabel>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f0f0f5] tracking-tight max-w-2xl">
              {c.heading}{" "}
              <GradientText>{c.headingGradient}</GradientText>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-[#8a8a9a] text-lg max-w-xl leading-relaxed">
              {c.subheading}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <Button href={c.primaryCta.href} size="lg" arrow className="gap-3">
              <CalendarIcon />
              {c.primaryCta.label}
            </Button>
          </RevealOnScroll>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {c.contactCards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={0.1 + i * 0.1}>
              <GlassCard className="p-6 flex flex-col gap-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {CONTACT_ICONS[i]}
                </div>

                <h3 className="text-base font-bold text-[#f0f0f5]">{card.title}</h3>

                <div className="flex flex-col gap-1 flex-1">
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm text-[#8a8a9a]">{line}</p>
                  ))}
                </div>

                {card.action && (
                  <Link
                    href={card.action.href}
                    className="inline-flex items-center justify-center h-9 px-4 text-sm font-semibold rounded-lg border border-white/20 text-white/80 hover:text-white hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 w-fit"
                  >
                    {card.action.label}
                  </Link>
                )}
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

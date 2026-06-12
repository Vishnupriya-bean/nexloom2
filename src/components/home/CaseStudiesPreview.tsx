"use client";

import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionWrapper from "@/components/ui/SectionWrapper";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { caseStudiesPreviewContent, type CaseStudyPreviewItem } from "@/lib/content/home";

function DiagonalArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  );
}

function CaseCard({ item, delay }: { item: CaseStudyPreviewItem; delay: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <Link href={item.href} className="group block h-full">
        <GlassCard className="h-full flex flex-col overflow-hidden">
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 to-transparent" />
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-6 gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary/80">
              {item.category}
            </span>

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-bold text-[#f0f0f5] leading-snug flex-1">
                {item.title}
              </h3>
              <span className="shrink-0 text-[#8a8a9a] group-hover:text-primary transition-colors duration-200 mt-0.5">
                <DiagonalArrowIcon />
              </span>
            </div>

            <p className="text-sm text-[#8a8a9a] leading-relaxed flex-1">
              {item.excerpt}
            </p>

            <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-200 mt-1">
              Read Case Study
              <DiagonalArrowIcon />
            </div>
          </div>
        </GlassCard>
      </Link>
    </RevealOnScroll>
  );
}

export default function CaseStudiesPreview() {
  const c = caseStudiesPreviewContent;

  return (
    <SectionWrapper id="case-studies">
      {/* Header */}
      <div className="text-center mb-14 flex flex-col items-center gap-4">
        <RevealOnScroll>
          <SectionLabel>{c.sectionLabel}</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f0f0f5] tracking-tight max-w-2xl">
            {c.heading}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-[#8a8a9a] text-lg max-w-2xl leading-relaxed">
            {c.subheading}
          </p>
        </RevealOnScroll>
      </div>

      {/* 2×2 card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {c.items.map((item, i) => (
          <CaseCard key={item.href} item={item} delay={i * 0.1} />
        ))}
      </div>

      {/* View all CTA */}
      <RevealOnScroll delay={0.2}>
        <div className="text-center mt-12">
          <Button href={c.viewAllCta.href} variant="outline" size="lg">
            {c.viewAllCta.label}
          </Button>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}

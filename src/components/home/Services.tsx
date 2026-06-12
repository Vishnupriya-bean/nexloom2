"use client";

import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionWrapper from "@/components/ui/SectionWrapper";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ArrowIcon from "@/components/icons/ArrowIcon";
import { servicesContent, type ServiceItem } from "@/lib/content/home";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "/services/engineering-product": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
    </svg>
  ),
  "/services/cloud-devops": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  "/services/ai-automation": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
  ),
  "/services/integrations-growth": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  ),
};

function ServiceCard({ item, delay }: { item: ServiceItem; delay: number }) {
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
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-6 gap-4">
            {/* Icon + title */}
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                {SERVICE_ICONS[item.href]}
              </div>
              <h3 className="text-lg font-bold text-[#f0f0f5] leading-snug pt-1">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-[#8a8a9a] leading-relaxed">
              {item.description}
            </p>

            {/* Outcome badge */}
            <p className="text-xs font-semibold text-primary/80 bg-primary/8 border border-primary/15 rounded-md px-3 py-1.5 w-fit">
              {item.outcome}
            </p>

            {/* Sub-services */}
            <ul className="flex flex-col gap-1.5 flex-1">
              {item.subServices.map((sub) => (
                <li key={sub} className="flex items-center gap-2 text-sm text-[#8a8a9a]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  {sub}
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-200 mt-2">
              {item.ctaLabel}
              <ArrowIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
          </div>
        </GlassCard>
      </Link>
    </RevealOnScroll>
  );
}

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-[#12121a]/40">
      {/* Header */}
      <div className="text-center mb-14 flex flex-col items-center gap-4">
        <RevealOnScroll>
          <SectionLabel>{servicesContent.sectionLabel}</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f0f0f5] tracking-tight max-w-2xl">
            {servicesContent.heading}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-[#8a8a9a] text-lg max-w-2xl leading-relaxed">
            {servicesContent.subheading}
          </p>
        </RevealOnScroll>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesContent.items.map((item, i) => (
          <ServiceCard key={item.href} item={item} delay={i * 0.1} />
        ))}
      </div>
    </SectionWrapper>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { CaseStudy } from "@/lib/content/case-studies";

type Props = { study: CaseStudy; delay?: number };

export default function CaseStudyCard({ study, delay = 0 }: Props) {
  return (
    <RevealOnScroll delay={delay}>
      <article className="glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
        <Link href={`/case-studies/${study.slug}`} className="block">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </Link>
        <div className="p-5 flex flex-col flex-1">
          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
            {study.category}
          </span>
          <Link href={`/case-studies/${study.slug}`}>
            <h2 className="font-bold text-fore text-base mb-2 leading-snug hover:text-primary transition-colors">
              {study.title}
            </h2>
          </Link>
          <p className="text-sm text-muted-fore leading-relaxed mb-auto">{study.excerpt}</p>
          <div className="pt-4 mt-4 border-t border-border-light">
            <Link
              href={`/case-studies/${study.slug}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              aria-label={`Read case study: ${study.title}`}
            >
              Read Case Study
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}

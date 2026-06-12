"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { RelatedCard, RelatedArticle } from "@/lib/content/services";

type CaseStudiesSectionProps = {
  items: RelatedCard[];
};

export function RelatedCaseStudies({ items }: CaseStudiesSectionProps) {
  if (!items.length) return null;
  return (
    <section className="py-16" style={{ background: "hsl(220,14%,94%,0.3)" }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="text-2xl font-bold text-fore mb-8">Related Case Studies</h2>
        </RevealOnScroll>
        <div
          className={`grid gap-6 ${items.length === 1 ? "max-w-md" : "sm:grid-cols-2"}`}
        >
          {items.map((item, i) => (
            <RevealOnScroll key={item.href} delay={i * 0.1}>
              <Link
                href={item.href}
                className="glass-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-bold text-fore text-base mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted-fore leading-relaxed">{item.description}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

type ArticlesSectionProps = {
  items: RelatedArticle[];
};

export function RelatedArticles({ items }: ArticlesSectionProps) {
  if (!items.length) return null;
  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="text-2xl font-bold text-fore mb-8">Related Articles</h2>
        </RevealOnScroll>
        <div
          className={`grid gap-6 ${items.length === 1 ? "max-w-md" : "sm:grid-cols-2"}`}
        >
          {items.map((item, i) => (
            <RevealOnScroll key={item.href} delay={i * 0.1}>
              <Link
                href={item.href}
                className="glass-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 flex-1">
                  <span className="inline-block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-fore text-base mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted-fore leading-relaxed">{item.description}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

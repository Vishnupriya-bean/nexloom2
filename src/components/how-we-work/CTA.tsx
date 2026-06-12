"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { hwwCtaContent } from "@/lib/content/how-we-work";

export default function HwwCTA() {
  const c = hwwCtaContent;
  return (
    <section
      className="py-20 text-center"
      style={{
        background:
          "linear-gradient(135deg, hsl(222,47%,6%) 0%, hsl(222,47%,11%) 100%)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold text-white mb-4">{c.title}</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            {c.subtitle}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <Button href={c.cta.href} size="lg" arrow>
            {c.cta.label}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}

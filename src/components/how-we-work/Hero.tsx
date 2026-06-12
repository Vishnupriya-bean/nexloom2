"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { hwwHeroContent } from "@/lib/content/how-we-work";

export default function HwwHero() {
  const c = hwwHeroContent;
  return (
    <section className="relative overflow-hidden min-h-[340px] lg:min-h-[420px] flex items-center pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={c.image}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, hsla(222,47%,11%,0.9), hsla(222,47%,11%,0.85), hsla(222,47%,11%,0.92))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            {c.title}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {c.subtitle}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

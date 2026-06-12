"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

export default function ServiceHero({ title, subtitle, image }: Props) {
  return (
    <section className="relative overflow-hidden min-h-[380px] lg:min-h-[480px] flex items-center pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 z-0">
        <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, hsla(222,47%,11%,0.92), hsla(222,47%,8%,0.88), hsla(222,47%,11%,0.93))",
        }}
      />
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <span className="inline-block text-sm font-semibold text-primary/80 uppercase tracking-widest mb-4">
            Services
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-5 max-w-4xl mx-auto leading-tight">
            {title}
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.16}>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.24}>
          <Button href="/book-a-call" size="lg" arrow>
            Book a Call
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}

"use client";

import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { heroContent } from "@/lib/content/home";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{ background: "" }}
    >
      {/* Radial glow overlays */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute top-0 left-1/4 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(59,91,219,0.25) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-0 right-1/4 w-[250px] sm:w-[375px] lg:w-[500px] h-[250px] sm:h-[375px] lg:h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(2,214,245,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="hero-container">
        <div className="hero-content">

          <RevealOnScroll>
            <div className="hero-pill-wrapper">
              <div className="hero-pill">
                <span className="hero-pill-text">
                  {heroContent.pill}
                </span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h1 className="hero-heading">

              <span className="hero-heading-top">
                {heroContent.headline.line1}
                <br />
                {heroContent.headline.line2}
              </span>

              <span className="hero-heading-gradient">
                <GradientText>
                  {heroContent.headlineGradient}
                </GradientText>
              </span>

            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="hero-subtitle">
              {heroContent.subtitle}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="hero-buttons">
              <Button
                href={heroContent.ctaPrimary.href}
                size="lg"
                arrow
              >
                {heroContent.ctaPrimary.label}
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.5}>
            <div className="hero-trusted">
              <p className="hero-trusted-text">
                {heroContent.trustedLabel}
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
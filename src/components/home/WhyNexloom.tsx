"use client";

import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { whyNexloomContent } from "@/lib/content/home";

export default function WhyNexloom() {
  return (
    <div
      className="w-full text-[#f5f7fb] antialiased"
      style={{
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Roboto,Helvetica,Arial,sans-serif',
      }}
    >
      {/* ── THE KIND OF PROBLEMS WE SOLVE ── */}
      <section className="bg-[#0e1530] border-t border-b border-[rgba(255,255,255,0.09)] py-[88px]">
        <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-10">
          <RevealOnScroll>
            <h2 className="section-title-large">
              {whyNexloomContent.aboutLabel}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="section-intro">
              {whyNexloomContent.aboutText}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[18px] mt-[42px]">
              <div className="problem-item">
                <span className="problem-dot" />
                <span className="max-w-[440px]">
                  {whyNexloomContent.capabilities[0].prefix}{" "}
                  <b className="problem-highlight">
                    {whyNexloomContent.capabilities[0].highlight}
                  </b>
                  , {whyNexloomContent.capabilities[0].suffix}
                </span>
              </div>

              <div className="problem-item">
                <span className="problem-dot" />
                <span className="max-w-[460px]">
                  {whyNexloomContent.capabilities[1].prefix}{" "}
                  <b className="problem-highlight">
                    {whyNexloomContent.capabilities[1].highlight}
                  </b>
                  , {whyNexloomContent.capabilities[1].suffix}
                </span>
              </div>

              <div className="problem-item">
                <span className="problem-dot" />
                <span className="max-w-[440px]">
                  <b className="problem-highlight">
                    {whyNexloomContent.capabilities[2].highlight}
                  </b>{" "}
                  {whyNexloomContent.capabilities[2].suffix}
                </span>
              </div>

              <div className="problem-item">
                <span className="problem-dot" />
                <span className="max-w-[440px]">
                  <b className="problem-highlight">
                    {whyNexloomContent.capabilities[3].highlight}
                  </b>{" "}
                  {whyNexloomContent.capabilities[3].suffix}
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section id="about" className="bg-[#0b1020] py-[96px]">
        <div className="mx-auto max-w-[1280px] px-7 lg:px-10">
          <div className="max-w-[670px] lg:ml-[94px]">
            <RevealOnScroll>
              <h2 className="about-title">
                About
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="space-y-6">
                <p className="about-description">
                  {whyNexloomContent.valuesHeading}
                </p>

                <p className="about-description">
                  {whyNexloomContent.valueHeading2}
                </p>

                <p className="about-description">
                  {whyNexloomContent.value2}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
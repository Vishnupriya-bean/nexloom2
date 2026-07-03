




"use client";

import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { whyNexloomContent } from "@/lib/content/home";

export default function WhyNexloom() {
  return (
    <div
      className="w-full text-[#f5f7fb] antialiased"
      style={{
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Roboto,Helvetica,Arial,sans-serif'
      }}
    >

      {/* ── THE KIND OF PROBLEMS WE SOLVE ── */}
      <section className="bg-[#0e1530] border-t border-b border-[rgba(255,255,255,0.09)] py-[88px]">
        <div className="max-w-[1100px] lg:ml-58 mx-auto px-[28px]">

          {/* Main Section Header with explicit 38px formatting */}
          <RevealOnScroll>
            <h2 className="text-[39px] leading-[1.1] tracking-[-0.03em] font-[800] text-[#f5f7fb] max-w-[22ch]">
              {whyNexloomContent.aboutLabel}
            </h2>
          </RevealOnScroll>

          {/* Italic Intro Sub-line */}
          <RevealOnScroll delay={0.1}>
            <p className="text-[15px] leading-[1.65] text-[#97a1b8] mt-[18px] italic max-w-[100%]">
              {/* We&apos;re building this practice deliberately and taking on a small number of clients. Here&apos;s the kind of work we take on: */}

              {whyNexloomContent.aboutText}
            </p>
          </RevealOnScroll>

          {/* Problems Two-Column Grid Layout */}
          <RevealOnScroll delay={0.2}>
            {/* Added extra gap adjustments to mirror the spacing layout precisely */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[18px] mt-[42px]">

              {/* Problem 1 */}
              <div className="flex gap-[14px] items-start text-[15px] leading-[1.75] text-[#97a1b8]">
                <span className="flex-none w-[9px] h-[9px] rounded-full mt-[9px] bg-gradient-to-br from-[#2b6cf6] to-[#35c7ef]" />
                <span className="max-w-[440px]">
                     {whyNexloomContent.capabilities[0].prefix} <b className="text-[#f5f7fb] font-semibold">{whyNexloomContent.capabilities[0].highlight}</b>,  {whyNexloomContent.capabilities[0].suffix}
                </span>
              </div>

              {/* Problem 2 */}
              <div className="flex gap-[14px] items-start text-[15px] leading-[1.75] text-[#97a1b8]">
                <span className="flex-none w-[9px] h-[9px] rounded-full mt-[9px] bg-gradient-to-br from-[#2b6cf6] to-[#35c7ef]" />
                <span className="max-w-[460px]">
                   {whyNexloomContent.capabilities[1].prefix} <b className="text-[#f5f7fb] font-semibold">{whyNexloomContent.capabilities[1].highlight}</b>,  {whyNexloomContent.capabilities[1].suffix}
                </span>
              </div>

              {/* Problem 3 */}
              <div className="flex gap-[14px] items-start text-[15px] leading-[1.75] text-[#97a1b8]">
                <span className="flex-none w-[9px] h-[9px] rounded-full mt-[9px] bg-gradient-to-br from-[#2b6cf6] to-[#35c7ef]" />
                <span className="max-w-[440px]">
                  <b className="text-[#f5f7fb] font-semibold">{whyNexloomContent.capabilities[2].highlight}</b>  {whyNexloomContent.capabilities[2].suffix}
                </span>
              </div>

              {/* Problem 4 */}
              <div className="flex gap-[14px] items-start text-[15px] leading-[1.75] text-[#97a1b8]">
                <span className="flex-none w-[9px] h-[9px] rounded-full mt-[9px] bg-gradient-to-br from-[#2b6cf6] to-[#35c7ef]" />
                <span className="max-w-[440px]">
                  <b className="text-[#f5f7fb] font-semibold">{whyNexloomContent.capabilities[3].highlight}</b>  {whyNexloomContent.capabilities[3].suffix}
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
        <h2 className="mb-[34px] text-[40px] font-bold leading-none tracking-[-0.04em] text-[#F5F7FB]">
          About
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
  <div className="space-y-6">

    <p className="max-w-[540px] text-[18px] font-normal leading-[1.5] text-[#AEB7C9]">
      {whyNexloomContent.valuesHeading}
    </p>

    <p className="max-w-[540px] text-[18px] font-normal leading-[1.5] text-[#AEB7C9]">
      {whyNexloomContent.valueHeading2}
    </p>

    <p className="max-w-[540px] text-[18px] font-normal leading-[1.5] text-[#AEB7C9]">
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


"use client";


import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { servicesContent } from "@/lib/content/home";
export default function Services() {
  return (
    <>
      {/* ── Section 1: Problem statement ── */}
      <section className="bg-[#0e1530] pt-12 pb-20 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
  <div className="section-container">
    <div className="max-w-3xl">

            <RevealOnScroll>
              <h2 className="section-heading">
                <span className="block">
                  {servicesContent.heading.line1}
                </span>

                <span className="block">
                  {servicesContent.heading.line2}
                </span>

                <span className="block">
                  {servicesContent.heading.line3Prefix}
                  <span className="bg-gradient-to-r from-[#2d6cff] to-[#49c7ff] bg-clip-text text-transparent">
                    {servicesContent.heading.line3Highlight}
                  </span>
                </span>

                <span className="block">
                  {servicesContent.heading.line4}
                </span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="mt-6 space-y-4">
                <p className="section-description">
                  {servicesContent.subheading1}
                </p>
                <p className="section-description">
                  {servicesContent.subheading2}
                </p>
              </div>c
            </RevealOnScroll>
          </div>
        </div>
      </section>
      {/* ── Section 2: How we work ── */}
      <section className="bg-[#0a0e1a] py-20 lg:py-24">
  <div className="section-container">

    <RevealOnScroll>
      <h2 className="section-title">
        {servicesContent.sectionTitle}
      </h2>
    </RevealOnScroll>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {servicesContent.items.map((item, i) => (
        <RevealOnScroll key={item.href} delay={i * 0.1}>
          <div className="bg-[#131c34] border border-white/10 rounded-2xl p-7 flex flex-col gap-4 h-full min-h-[290px]">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center text-white text-base font-bold shrink-0">
              {i + 1}
            </div>

            <h3 className="text-white font-bold text-xl leading-snug">
              {item.headings}
            </h3>

            <p className="text-slate-400 text-[15px] leading-relaxed">
              {item.description}
            </p>
          </div>
        </RevealOnScroll>
      ))}
    </div>

  </div>
</section>

    </>
  );
}
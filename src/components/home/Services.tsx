

"use client";


import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { servicesContent } from "@/lib/content/home";
export default function Services() {
  return (
    <>
      {/* ── Section 1: Problem statement ── */}
      <section className="bg-[#0e1530]    sm:py-6 lg:py-25 sg:py-6 px-4  sm:px-3 lg:px-2">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl lg:ml-48">
            <RevealOnScroll>
              <h2 className="font-extrabold tracking-tight leading-[1.08] text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
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
                <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {servicesContent.subheading1}
                </p>
                <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {servicesContent.subheading2}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      {/* ── Section 2: How we work ── */}
      <section className="bg-[#0a0e1a] py-16 sm:py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-6xl  lg:ml-45 mx-auto">
          {/* Heading */}
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10 sm:mb-12 tracking-tight">
              {servicesContent.sectionTitle}
            </h2>
          </RevealOnScroll>

          {/* Cards grid */}
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
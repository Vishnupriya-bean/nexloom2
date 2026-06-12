"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { missionContent } from "@/lib/content/about";

export default function Mission() {
  const c = missionContent;
  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-fore mb-6">{c.title}</h2>
            {c.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-muted-fore leading-[1.75] mb-6 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

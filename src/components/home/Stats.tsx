"use client";

import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { statsContent, type StatItem } from "@/lib/content/home";

function Counter({ target, suffix, isFloat }: StatItem) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        observer.disconnect();

        const duration = 2000;
        const steps = Math.round(duration / 16);
        const increment = target / steps;
        let current = 0;
        let frame = 0;

        const tick = () => {
          frame++;
          current = Math.min(increment * frame, target);
          setValue(current);
          if (current < target) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const display = isFloat ? value.toFixed(1) : Math.floor(value).toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(59,91,219,0.2) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statsContent.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center flex flex-col items-center gap-2">
                <div className="text-4xl sm:text-5xl font-extrabold gradient-text leading-none">
                  <Counter {...stat} />
                </div>
                <p className="text-sm font-semibold text-[#8a8a9a] tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

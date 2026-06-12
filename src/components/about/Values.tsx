"use client";

import GlassCard from "@/components/ui/GlassCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { valuesContent, type AboutValue } from "@/lib/content/about";

const VALUE_ICONS: React.ReactNode[] = [
  // Technical Excellence — zap
  <svg key="zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>,
  // Partnership Mindset — users
  <svg key="users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // Results-Driven — target
  <svg key="target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>,
  // Continuous Improvement — award
  <svg key="award" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    <circle cx="12" cy="8" r="6" />
  </svg>,
];

function ValueCard({ item, icon, delay }: { item: AboutValue; icon: React.ReactNode; delay: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <GlassCard className="p-8 h-full flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-md shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-fore">{item.title}</h3>
        <p className="text-[0.9375rem] text-muted-fore leading-relaxed">{item.description}</p>
      </GlassCard>
    </RevealOnScroll>
  );
}

export default function Values() {
  const c = valuesContent;
  return (
    <section className="py-20 bg-[hsl(220,14%,94%)]/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold text-fore text-center mb-12">{c.title}</h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {c.items.map((item, i) => (
            <ValueCard key={item.title} item={item} icon={VALUE_ICONS[i]} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

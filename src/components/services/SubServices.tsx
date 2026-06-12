"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import type { SubService } from "@/lib/content/services";

// ─── Icon components ──────────────────────────────────────────────────────────
const ICONS: Record<string, React.ReactNode> = {
  code2: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  ),
  cloud: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  bot: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  ),
  link2: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  ),
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-primary"
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

type BlockProps = {
  subservice: SubService;
  icon: React.ReactNode;
  reverse: boolean;
  delay: number;
};

function SubServiceBlock({ subservice: s, icon, reverse, delay }: BlockProps) {
  return (
    <RevealOnScroll delay={delay}>
      <div id={s.id}
        className={`flex flex-col gap-8 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:gap-14 items-start`}
      >
        {/* Info card */}
        <div className="w-full lg:w-[42%]">
          <div className="glass-card rounded-2xl p-7 h-full">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-md mb-5">
              {icon}
            </div>
            <h2 className="text-2xl font-bold text-fore mb-3">{s.title}</h2>
            <p className="text-[0.9375rem] text-muted-fore leading-relaxed mb-5">{s.description}</p>
            <div className="rounded-xl bg-[hsl(220,14%,94%)]/40 border border-border-light px-5 py-4 mb-6">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                Business Impact
              </p>
              <p className="text-[0.9rem] text-muted-fore">{s.impact}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/book-a-call" size="sm" arrow>
                Book a Call
              </Button>
              <Link
                href={s.caseStudyHref}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary border border-primary/30 rounded-lg px-4 py-2 hover:bg-primary/5 transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>

        {/* Features list */}
        <div className="w-full lg:w-[58%]">
          <ul className="flex flex-col gap-3">
            {s.features.map((feat) => (
              <li key={feat} className="glass-card rounded-xl px-5 py-3.5 flex items-center gap-3">
                <CheckIcon />
                <span className="text-[0.9375rem] text-fore">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RevealOnScroll>
  );
}

type Props = {
  subservices: SubService[];
  iconKey: "code2" | "cloud" | "bot" | "link2";
};

export default function SubServices({ subservices, iconKey }: Props) {
  const icon = ICONS[iconKey];
  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:gap-24">
          {subservices.map((s, i) => (
            <SubServiceBlock
              key={s.id}
              subservice={s}
              icon={icon}
              reverse={i % 2 !== 0}
              delay={0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

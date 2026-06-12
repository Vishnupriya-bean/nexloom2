"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { howWeWorkContent } from "@/lib/content/about";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-[22px] h-[22px] text-primary shrink-0 mt-0.5"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function HowWeWork() {
  const c = howWeWorkContent;
  return (
    <section className="py-20 bg-[hsl(220,20%,97%)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[700px] mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-fore mb-8">{c.title}</h2>
          </RevealOnScroll>

          <ul className="flex flex-col gap-5 mb-8">
            {c.items.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <li className="flex items-start gap-3 text-[1.05rem] font-medium text-fore">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              </RevealOnScroll>
            ))}
          </ul>

          <RevealOnScroll delay={0.4}>
            <p className="text-[1.05rem] text-muted-fore">
              {c.note}{" "}
              <Link
                href={c.noteLink.href}
                className="text-primary font-semibold hover:underline"
              >
                {c.noteLink.label}
              </Link>
              .
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

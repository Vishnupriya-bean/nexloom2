"use client";

import Link from "next/link";
import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { BlogPost } from "@/lib/content/blog";

type Props = { post: BlogPost };

export default function BlogPostHeader({ post }: Props) {
  const [copied, setCopied] = useState(false);
  const url = `https://nexloom.co/blog/${post.slug}`;

  const copy = () => {
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <section className="pt-32 pb-10 lg:pt-40 lg:pb-14" style={{ background: "hsl(220,14%,94%,0.4)" }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <RevealOnScroll>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-fore hover:text-primary transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back to Blog
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delay={0.06}>
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-wider mb-4">
            {post.category}
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h1 className="text-3xl lg:text-4xl font-bold text-fore mb-5 leading-tight">
            {post.title}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.14}>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-fore mb-5">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Nexloom Engineering
            </span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {post.readTime}
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.18}>
          <div className="flex items-center gap-2">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="w-8 h-8 rounded-md border border-border-light flex items-center justify-center text-muted-fore hover:text-primary hover:border-primary/40 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="w-8 h-8 rounded-md border border-border-light flex items-center justify-center text-muted-fore hover:text-primary hover:border-primary/40 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267L8.267 4z"/><path d="M4 20 10.768 13.232"/><path d="M13.232 10.768 20 4"/></svg>
            </a>
            <button
              type="button"
              onClick={copy}
              aria-label={copied ? "Copied!" : "Copy link"}
              className={`w-8 h-8 rounded-md border flex items-center justify-center transition-colors ${
                copied
                  ? "border-primary/50 text-primary"
                  : "border-border-light text-muted-fore hover:text-primary hover:border-primary/40"
              }`}
            >
              {copied ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              )}
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

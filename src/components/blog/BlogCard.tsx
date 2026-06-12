"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { BlogPost } from "@/lib/content/blog";

type ShareButtonsProps = { slug: string };

function ShareButtons({ slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://nexloom.co/blog/${slug}`;

  const copy = () => {
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div className="flex items-center gap-2 my-3">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="w-7 h-7 rounded-md border border-border-light flex items-center justify-center text-muted-fore hover:text-primary hover:border-primary/40 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="w-7 h-7 rounded-md border border-border-light flex items-center justify-center text-muted-fore hover:text-primary hover:border-primary/40 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267L8.267 4z"/><path d="M4 20 10.768 13.232"/><path d="M13.232 10.768 20 4"/></svg>
      </a>
      <button
        type="button"
        aria-label={copied ? "Copied!" : "Copy link"}
        title={copied ? "Copied!" : "Copy link"}
        onClick={(e) => { e.stopPropagation(); copy(); }}
        className={`w-7 h-7 rounded-md border flex items-center justify-center transition-colors ${
          copied
            ? "border-primary/50 text-primary"
            : "border-border-light text-muted-fore hover:text-primary hover:border-primary/40"
        }`}
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        )}
      </button>
    </div>
  );
}

type Props = { post: BlogPost; delay?: number };

export default function BlogCard({ post, delay = 0 }: Props) {
  return (
    <RevealOnScroll delay={delay}>
      <article className="glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </Link>
        <div className="p-5 flex flex-col flex-1">
          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
            {post.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-muted-fore mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
            <span>{post.date}</span>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h2 className="font-bold text-fore text-base mb-2 leading-snug hover:text-primary transition-colors">
              {post.title}
            </h2>
          </Link>
          <p className="text-sm text-muted-fore leading-relaxed mb-auto">{post.excerpt}</p>
          <ShareButtons slug={post.slug} />
          <div className="flex items-center justify-between pt-3 border-t border-border-light mt-2">
            <span className="flex items-center gap-1.5 text-xs text-muted-fore">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {post.readTime}
            </span>
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              aria-label={`Read ${post.title}`}
            >
              Read
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}

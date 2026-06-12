import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPostMeta } from "@/lib/seo.config";
import { getBlogPost, BLOG_SLUGS } from "@/lib/content/blog";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import Button from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return blogPostMeta({ title: post.title, excerpt: post.excerpt, slug, image: post.image });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main>
      <BlogPostHeader post={post} />

      <article className="py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Table of Contents sidebar */}
            <aside className="w-full lg:w-56 shrink-0 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-border-light bg-white/50 px-5 py-5">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                  Table of Contents
                </p>
                <nav className="flex flex-col gap-2">
                  {post.toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-sm text-muted-fore hover:text-primary transition-colors leading-snug"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article content */}
            <div className="flex-1 min-w-0">
              <div
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Bottom CTA */}
              <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 px-7 py-8">
                <h3 className="text-xl font-bold text-fore mb-2">Need Expert Help?</h3>
                <p className="text-muted-fore mb-5">
                  Nexloom can help implement these strategies for your business.
                </p>
                <Button href="/book-a-call" size="lg" arrow>
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

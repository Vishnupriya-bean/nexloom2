import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import { blogPosts } from "@/lib/content/blog";
import BlogCard from "@/components/blog/BlogCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = seoConfig.blogListing;

export default function BlogListingPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20 text-center"
        style={{
          background: "linear-gradient(135deg, hsl(222,47%,6%) 0%, hsl(222,47%,11%) 100%)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Nexloom Blog</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Insights on engineering, cloud, AI, and growth infrastructure from the Nexloom team.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(135deg, hsl(222,47%,6%) 0%, hsl(222,47%,11%) 100%)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Work With Us?</h2>
          <p className="text-white/70 text-lg mb-8">Let's build something exceptional together.</p>
          <Button href="/book-a-call" size="lg" arrow>
            Book a Call
          </Button>
        </div>
      </section>
    </main>
  );
}

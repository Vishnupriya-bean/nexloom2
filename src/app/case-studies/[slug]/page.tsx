import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { caseStudyMeta } from "@/lib/seo.config";
import { getCaseStudy, CASE_STUDY_SLUGS } from "@/lib/content/case-studies";
import Button from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return caseStudyMeta({ title: study.title, excerpt: study.excerpt, slug, image: study.image });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{
          background: "linear-gradient(135deg, hsl(222,47%,6%) 0%, hsl(222,47%,11%) 100%)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              Back to Case Studies
            </Link>
            <span className="block text-xs font-bold text-primary uppercase tracking-wider mb-4">
              {study.category}
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              {study.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            {/* The Problem */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-fore mb-3">The Problem</h2>
              <p className="text-muted-fore leading-relaxed">{study.problem}</p>
            </div>

            {/* Our Solution */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-fore mb-3">Our Solution</h2>
              <p className="text-muted-fore leading-relaxed">{study.solution}</p>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-fore mb-4">Results</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {study.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-3 rounded-xl bg-white border border-border-light px-4 py-3.5"
                  >
                    <svg
                      className="shrink-0 text-primary mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span className="text-sm font-medium text-fore">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 px-7 py-8">
              <h3 className="text-xl font-bold text-fore mb-2">Have a Similar Challenge?</h3>
              <p className="text-muted-fore mb-5">
                Let's discuss how Nexloom can deliver results for your business.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/book-a-call" size="lg" arrow>
                  Book a Call
                </Button>
                <Button href={study.serviceHref} variant="outline" size="lg">
                  {study.serviceLabel}
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

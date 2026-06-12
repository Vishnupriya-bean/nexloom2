import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import { caseStudies } from "@/lib/content/case-studies";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = seoConfig.caseStudiesListing;

export default function CaseStudiesPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Real results from real projects — see how Nexloom helps businesses ship faster, reduce
            costs, and build reliable systems.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} delay={i * 0.06} />
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Let's discuss how Nexloom can deliver results for your business.
          </p>
          <Button href="/book-a-call" size="lg" arrow>
            Book a Call
          </Button>
        </div>
      </section>
    </main>
  );
}

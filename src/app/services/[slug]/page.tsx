import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import { servicePages, SERVICE_SLUGS } from "@/lib/content/services";
import ServiceHero from "@/components/services/ServiceHero";
import SubServices from "@/components/services/SubServices";
import { RelatedCaseStudies, RelatedArticles } from "@/components/services/RelatedSection";
import ServiceCTA from "@/components/services/ServiceCTA";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const metaMap: Record<string, Metadata> = {
    "engineering-product": seoConfig.servicesEngineering,
    "cloud-devops": seoConfig.servicesCloudDevops,
    "ai-automation": seoConfig.servicesAiAutomation,
    "integrations-growth": seoConfig.servicesIntegrationsGrowth,
  };
  return metaMap[slug] ?? {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = servicePages[slug];
  if (!page) notFound();

  return (
    <main>
      <ServiceHero title={page.heroTitle} subtitle={page.heroSubtitle} image={page.heroImage} />
      <SubServices subservices={page.subservices} iconKey={page.iconKey} />
      <RelatedCaseStudies items={page.relatedCaseStudies} />
      <RelatedArticles items={page.relatedArticles} />
      <ServiceCTA title={page.ctaTitle} subtitle={page.ctaSubtitle} />
    </main>
  );
}

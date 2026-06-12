// ─── HOME PAGE CONTENT ───────────────────────────────────────────────────────

export const heroContent = {
  pill: "Engineering · Cloud · AI · Growth",
  headline: "Ship software that",
  headlineGradient: "grows revenue.",
  subtitle:
    "Senior-led full-stack, cloud, and AI delivery from plan to production, assembled to improve speed, quality, and operating predictability.",
  ctaPrimary: { label: "Book a Call", href: "/book-a-call" },
  ctaSecondary: { label: "View Case Studies", href: "/case-studies" },
  trustedLabel: "Trusted by forward-thinking companies worldwide",
  trustedCompanies: ["TechCorp", "InnovateLab", "DataFlow", "CloudScale", "NextGen"],
} as const;

export type ServiceItem = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  outcome: string;
  subServices: string[];
  ctaLabel: string;
};

export const servicesContent = {
  sectionLabel: "Services",
  heading: "Services built for speed, reliability, and growth",
  subheading:
    "Four delivery lanes, each led by senior engineers, each built to ship in production and keep operations predictable.",
  items: [
    {
      href: "/services/engineering-product",
      image: "/home/engineering-product.jpg",
      imageAlt: "Engineering & Product",
      title: "Engineering & Product",
      description: "Turn roadmap work into production releases without churn.",
      outcome: "Weekly releases within 30 days",
      subServices: [
        "Full-Stack Web Development",
        "Mobile App Development",
        "SaaS & Platform Engineering",
        "Enterprise Applications",
      ],
      ctaLabel: "View Engineering Services",
    },
    {
      href: "/services/cloud-devops",
      image: "/home/cloud-devops.jpg",
      imageAlt: "Cloud & DevOps",
      title: "Cloud & DevOps",
      description:
        "Improve uptime and deploy speed while keeping cloud spend under control.",
      outcome: "99% uptime target for production systems",
      subServices: [
        "Cloud Architecture",
        "DevOps & CI/CD",
        "Infrastructure Automation",
        "Security & Compliance",
      ],
      ctaLabel: "View Cloud & DevOps",
    },
    {
      href: "/services/ai-automation",
      image: "/home/ai-automation.jpg",
      imageAlt: "AI & Automation",
      title: "AI & Automation",
      description: "Remove manual work with safe AI workflows tied to real systems.",
      outcome: "Cut manual operations with intelligent automation",
      subServices: [
        "AI Agents",
        "Agentic Workflows",
        "LLM Integrations",
        "Intelligent Automation",
      ],
      ctaLabel: "View AI & Automation",
    },
    {
      href: "/services/integrations-growth",
      image: "/home/team-working.jpg",
      imageAlt: "Integrations & Data",
      title: "Integrations & Data",
      description:
        "Connect systems and data so teams stop re-entering work and reporting stays trusted.",
      outcome: "Reduce cycle time across connected systems",
      subServices: [
        "API Development",
        "Platform Integrations",
        "Data Pipelines",
        "Martech Systems",
      ],
      ctaLabel: "View Integrations & Data",
    },
  ] as ServiceItem[],
} as const;

export type ValueItem = {
  title: string;
  description: string;
};

export const whyNexloomContent = {
  aboutLabel: "About Nexloom",
  aboutHeading: "Your Technology Partner for",
  aboutHeadingGradient: "Scalable Growth",
  aboutText:
    "Nexloom is a technology company that helps businesses build, scale, and automate through expert engineering, cloud infrastructure, AI solutions, and growth systems. We partner with startups and enterprises to turn complex technical challenges into competitive advantages.",
  capabilities: [
    "Full-stack engineering & product development",
    "Cloud architecture & DevOps automation",
    "AI agents & intelligent automation",
    "Integrations & Data infrastructure",
  ],
  aboutCta: { label: "Learn More About Us", href: "/about" },

  valuesLabel: "Our Values",
  valuesHeading: "What Drives Nexloom",
  values: [
    {
      title: "Technical Excellence",
      description:
        "We build with clean architecture, strong testing, and pragmatic standards so your team ships faster with fewer regressions.",
    },
    {
      title: "Partnership Mindset",
      description:
        "We work as part of your team, stay transparent on tradeoffs, and take ownership through delivery, so you get fewer surprises.",
    },
    {
      title: "Results-Driven",
      description:
        "We define success up front and track delivery, reliability, and cost, so progress stays visible and measurable.",
    },
    {
      title: "Continuous Improvement",
      description:
        "We run retros, refine delivery systems, and automate repeat work, so each release gets easier, not harder.",
    },
  ] as ValueItem[],
} as const;

export type StatItem = {
  target: number;
  suffix: string;
  isFloat: boolean;
  label: string;
};

export const statsContent: StatItem[] = [
  { target: 200, suffix: "+", isFloat: false, label: "Projects Delivered" },
  { target: 50, suffix: "+", isFloat: false, label: "Enterprise Clients" },
  { target: 99.9, suffix: "%", isFloat: true, label: "Uptime SLA" },
  { target: 4, suffix: " Pillars", isFloat: false, label: "Core Expertise Areas" },
];

export type CaseStudyPreviewItem = {
  href: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
};

export const caseStudiesPreviewContent = {
  sectionLabel: "Case Studies",
  heading: "Proven Results Across Industries",
  subheading:
    "Real companies scaling faster with Nexloom's engineering, cloud, AI, and growth solutions.",
  items: [
    {
      href: "/case-studies/saas-platform-fintech-startup",
      image: "/case-studies/fintech.jpg",
      imageAlt: "Building a Scalable SaaS Platform for a Fintech Startup",
      category: "Engineering & Product",
      title: "Building a Scalable SaaS Platform for a Fintech Startup",
      excerpt:
        "How we helped a fintech startup launch their multi-tenant SaaS platform in 4 months, achieving 10,000 active users within the first quarter.",
    },
    {
      href: "/case-studies/cloud-migration-healthcare",
      image: "/case-studies/healthcare.jpg",
      imageAlt: "Enterprise Cloud Migration for Healthcare Provider",
      category: "Cloud & DevOps",
      title: "Enterprise Cloud Migration for Healthcare Provider",
      excerpt:
        "Migrating a healthcare provider's legacy on-premise infrastructure to AWS while maintaining HIPAA compliance and zero downtime.",
    },
    {
      href: "/case-studies/ai-customer-support-ecommerce",
      image: "/case-studies/ecommerce.jpg",
      imageAlt: "AI-Powered Customer Support for E-Commerce Platform",
      category: "AI & Automation",
      title: "AI-Powered Customer Support for E-Commerce Platform",
      excerpt:
        "Deploying intelligent AI agents that handle 70% of customer inquiries automatically, reducing support costs by 55%.",
    },
    {
      href: "/case-studies/data-pipeline-retail-analytics",
      image: "/case-studies/retail-analytics.jpg",
      imageAlt: "Real-Time Data Pipeline for Retail Analytics",
      category: "Integrations & Data",
      title: "Real-Time Data Pipeline for Retail Analytics",
      excerpt:
        "Building a real-time data pipeline that unified 12 data sources and enabled data-driven decision making across 200+ retail locations.",
    },
  ] as CaseStudyPreviewItem[],
  viewAllCta: { label: "View All Case Studies", href: "/case-studies" },
} as const;

export const ctaContent = {
  sectionLabel: "Get in Touch",
  heading: "Ready to Build Something",
  headingGradient: "Exceptional?",
  subheading: "Let's discuss how Nexloom can help you build, scale, and automate.",
  primaryCta: { label: "Schedule a Discovery Call", href: "/book-a-call" },
  contactCards: [
    {
      title: "Visit Us",
      lines: ["Nexloom Headquarters", "San Francisco, CA 94105", "United States"],
      action: null as { label: string; href: string } | null,
    },
    {
      title: "Email Us",
      lines: ["hello@nexloom.com", "support@nexloom.com"],
      action: { label: "Send Email", href: "mailto:hello@nexloom.com" },
    },
    {
      title: "Call Us",
      lines: ["+1 (555) 123-4567", "Mon-Fri, 9am-6pm PST"],
      action: { label: "Call Now", href: "tel:+15551234567" },
    },
  ],
} as const;

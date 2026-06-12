// ─── SERVICES PAGE CONTENT ───────────────────────────────────────────────────

export type SubService = {
  id: string;
  title: string;
  description: string;
  impact: string;
  caseStudyHref: string;
  features: string[];
};

export type RelatedCard = {
  href: string;
  image: string;
  alt: string;
  title: string;
  description: string;
};

export type RelatedArticle = {
  href: string;
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
};

export type ServicePageData = {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  iconKey: "code2" | "cloud" | "bot" | "link2";
  subservices: SubService[];
  relatedCaseStudies: RelatedCard[];
  relatedArticles: RelatedArticle[];
  ctaTitle: string;
  ctaSubtitle: string;
};

export const servicePages: Record<string, ServicePageData> = {
  "engineering-product": {
    slug: "engineering-product",
    heroTitle: "Turn roadmap work into production releases without churn.",
    heroSubtitle:
      "From MVPs to enterprise-grade platforms, Nexloom's engineering teams deliver robust, scalable software using modern frameworks and best practices. We turn your product vision into production-ready applications.",
    heroImage: "/services/engineering.jpg",
    iconKey: "code2",
    subservices: [
      {
        id: "full-stack-web-development",
        title: "Full-Stack Web Development",
        description:
          "Complete web application development from concept to production. We build frontend experiences, backend systems, and full-stack platforms that scale.",
        impact: "Fast, secure, and scalable web applications that drive business results.",
        caseStudyHref: "/case-studies/saas-platform-fintech-startup",
        features: [
          "Frontend development with modern frameworks",
          "Backend development and API design",
          "Full-stack SaaS platforms",
          "Enterprise web systems",
          "Progressive Web Apps (PWA)",
          "Headless CMS implementation",
          "Custom dashboards and portals",
        ],
      },
      {
        id: "mobile-app-development",
        title: "Mobile App Development",
        description:
          "Native and cross-platform mobile applications for iOS and Android. Using React Native and Flutter, we deliver seamless mobile experiences with real-time features, push notifications, offline support, and secure payment integrations.",
        impact: "Reach users on any device with performant, engaging mobile applications.",
        caseStudyHref: "/case-studies/saas-platform-fintech-startup",
        features: [
          "iOS and Android native apps",
          "Cross-platform with React Native & Flutter",
          "Real-time features & push notifications",
          "Offline-first architecture",
          "Payment gateway integrations",
          "App Store optimization",
          "Mobile analytics & crash reporting",
        ],
      },
      {
        id: "saas-platform-engineering",
        title: "SaaS & Platform Engineering",
        description:
          "Purpose-built SaaS platforms with multi-tenancy, subscription billing, user management, analytics dashboards, and API-first architecture. We engineer platforms designed for rapid user adoption and sustainable growth.",
        impact: "Launch market-ready SaaS products that scale from day one.",
        caseStudyHref: "/case-studies/saas-platform-fintech-startup",
        features: [
          "Multi-tenant architecture",
          "Subscription billing integration",
          "User management & RBAC",
          "Analytics dashboards",
          "API-first design",
          "White-label capabilities",
          "Usage-based pricing models",
        ],
      },
      {
        id: "enterprise-applications",
        title: "Enterprise Applications",
        description:
          "Complex enterprise systems including ERP, CRM, HRMS, and custom workflow engines. We modernize legacy systems and build new enterprise-grade applications with security, compliance, and scalability at their core.",
        impact: "Modernize operations with secure, compliant enterprise systems.",
        caseStudyHref: "/case-studies/saas-platform-fintech-startup",
        features: [
          "ERP & CRM systems",
          "HRMS and workflow engines",
          "Legacy system modernization",
          "Enterprise security & compliance",
          "Single sign-on (SSO)",
          "Audit logging & reporting",
          "Role-based access control",
        ],
      },
      {
        id: "product-engineering",
        title: "Product Engineering",
        description:
          "End-to-end product development from ideation to launch. Our product engineers work alongside your team to define requirements, build prototypes, iterate rapidly, and deliver market-ready products that solve real user problems.",
        impact: "Go from idea to market-ready product with confidence.",
        caseStudyHref: "/case-studies/saas-platform-fintech-startup",
        features: [
          "Product discovery & ideation",
          "Rapid prototyping",
          "MVP development",
          "User testing & iteration",
          "Product-market fit validation",
          "Feature prioritization frameworks",
          "Launch strategy & execution",
        ],
      },
      {
        id: "system-architecture",
        title: "System Architecture",
        description:
          "Designing resilient, scalable system architectures using microservices, event-driven patterns, and domain-driven design. We create blueprints that support growth, ensure reliability, and reduce technical debt.",
        impact: "Build on a foundation designed for growth and reliability.",
        caseStudyHref: "/case-studies/saas-platform-fintech-startup",
        features: [
          "Microservices architecture",
          "Event-driven design",
          "Domain-driven design (DDD)",
          "API gateway patterns",
          "Database design & optimization",
          "Caching strategies",
          "Technical debt reduction",
        ],
      },
    ],
    relatedCaseStudies: [
      {
        href: "/case-studies/saas-platform-fintech-startup",
        image: "/case-studies/fintech.jpg",
        alt: "Building a Scalable SaaS Platform for a Fintech Startup",
        title: "Building a Scalable SaaS Platform for a Fintech Startup",
        description:
          "How we helped a fintech startup launch their multi-tenant SaaS platform in 4 months, achieving 10,000 active users within the first quarter.",
      },
      {
        href: "/case-studies/mobile-app-logistics",
        image: "/case-studies/logistics.jpg",
        alt: "Cross-Platform Mobile App for Logistics Company",
        title: "Cross-Platform Mobile App for Logistics Company",
        description:
          "Delivering a driver-facing mobile app with real-time tracking, route optimization, and proof of delivery for a logistics fleet of 500+ vehicles.",
      },
    ],
    relatedArticles: [
      {
        href: "/blog/microservices-vs-monolith-2026",
        image: "/blog/microservices.jpg",
        alt: "Microservices vs Monolith in 2026",
        category: "Engineering",
        title: "Microservices vs Monolith in 2026: Making the Right Choice",
        description:
          "The monolith vs microservices debate has evolved. Here's a practical framework for choosing the right architecture for your project.",
      },
      {
        href: "/blog/api-design-developer-experience",
        image: "/blog/api-design.jpg",
        alt: "API Design for Outstanding Developer Experience",
        category: "Integrations",
        title: "API Design for Outstanding Developer Experience",
        description:
          "Build APIs that developers love to use. Practical principles for designing intuitive, consistent, and well-documented APIs.",
      },
    ],
    ctaTitle: "Ready to Get Started?",
    ctaSubtitle: "Let's discuss how Nexloom can help with your engineering & product needs.",
  },

  "cloud-devops": {
    slug: "cloud-devops",
    heroTitle: "Improve uptime and deploy speed while keeping cloud spend under control.",
    heroSubtitle:
      "Nexloom's cloud and DevOps teams help you ship faster, scale effortlessly, and maintain bulletproof reliability. We design, build, and manage cloud infrastructure that powers your applications with confidence.",
    heroImage: "/services/cloud.jpg",
    iconKey: "cloud",
    subservices: [
      {
        id: "cloud-architecture",
        title: "Cloud Architecture",
        description:
          "Design and implement cloud-native architectures on AWS, Azure, and GCP. We optimize for performance, cost efficiency, and scalability using serverless, containers, and managed services tailored to your workload requirements.",
        impact: "Optimize cloud spend while maximizing performance and scalability.",
        caseStudyHref: "/case-studies/cloud-migration-healthcare",
        features: [
          "AWS, Azure, GCP architecture",
          "Serverless & container solutions",
          "Cost optimization strategies",
          "Multi-cloud & hybrid setups",
          "High-availability design",
          "Disaster recovery planning",
          "Cloud migration strategies",
        ],
      },
      {
        id: "devops-cicd",
        title: "DevOps & CI/CD",
        description:
          "Automated deployment pipelines, continuous integration, and delivery workflows that reduce release cycles from weeks to hours. We implement GitOps, automated testing, and deployment strategies that keep your team shipping with confidence.",
        impact: "Ship faster with automated, reliable deployment pipelines.",
        caseStudyHref: "/case-studies/cloud-migration-healthcare",
        features: [
          "CI/CD pipeline design",
          "GitOps workflows",
          "Automated testing gates",
          "Canary & blue-green deployments",
          "Release management",
          "Environment management",
          "Deployment automation",
        ],
      },
      {
        id: "infrastructure-automation",
        title: "Infrastructure Automation",
        description:
          "Infrastructure as Code using Terraform, Pulumi, and CloudFormation. We automate provisioning, configuration management, and environment replication so your infrastructure is version-controlled, repeatable, and audit-ready.",
        impact: "Eliminate manual provisioning with repeatable infrastructure code.",
        caseStudyHref: "/case-studies/cloud-migration-healthcare",
        features: [
          "Terraform & Pulumi IaC",
          "Configuration management",
          "Environment replication",
          "Version-controlled infrastructure",
          "Automated provisioning",
          "Policy as code",
          "Compliance automation",
        ],
      },
      {
        id: "security-compliance",
        title: "Security & Compliance",
        description:
          "Comprehensive cloud security including IAM policies, encryption, network segmentation, vulnerability scanning, and compliance frameworks (SOC 2, HIPAA, GDPR). We build security into every layer of your infrastructure.",
        impact: "Meet compliance requirements without slowing down development.",
        caseStudyHref: "/case-studies/cloud-migration-healthcare",
        features: [
          "IAM & access management",
          "Encryption at rest & in transit",
          "Vulnerability scanning",
          "SOC 2, HIPAA, GDPR compliance",
          "Network segmentation",
          "Security monitoring & alerting",
          "Incident response planning",
        ],
      },
      {
        id: "performance-reliability",
        title: "Performance & Reliability",
        description:
          "Site reliability engineering with monitoring, alerting, incident response, and performance optimization. We implement observability stacks, load testing, and chaos engineering to ensure your applications stay fast and available.",
        impact: "Achieve 99.9%+ uptime with proactive reliability engineering.",
        caseStudyHref: "/case-studies/cloud-migration-healthcare",
        features: [
          "Observability & monitoring",
          "Alerting & incident response",
          "Load testing & benchmarking",
          "Chaos engineering",
          "Performance optimization",
          "SLA/SLO management",
          "Post-incident reviews",
        ],
      },
      {
        id: "cloud-operations",
        title: "Cloud Operations",
        description:
          "24/7 managed cloud operations including cost optimization, resource scaling, backup management, and disaster recovery. We keep your cloud infrastructure running smoothly so your team can focus on building products.",
        impact: "Focus on building while we manage your cloud infrastructure.",
        caseStudyHref: "/case-studies/cloud-migration-healthcare",
        features: [
          "24/7 cloud monitoring",
          "Cost optimization & governance",
          "Resource auto-scaling",
          "Backup & disaster recovery",
          "Patch management",
          "Capacity planning",
          "Vendor management",
        ],
      },
    ],
    relatedCaseStudies: [
      {
        href: "/case-studies/cloud-migration-healthcare",
        image: "/case-studies/healthcare.jpg",
        alt: "Enterprise Cloud Migration for Healthcare Provider",
        title: "Enterprise Cloud Migration for Healthcare Provider",
        description:
          "Migrating a healthcare provider's legacy on-premise infrastructure to AWS while maintaining HIPAA compliance and zero downtime.",
      },
      {
        href: "/case-studies/devops-pipeline-saas-company",
        image: "/case-studies/devops-saas.jpg",
        alt: "DevOps Transformation for Growing SaaS Company",
        title: "DevOps Transformation for Growing SaaS Company",
        description:
          "Transforming a manual deployment process into a fully automated CI/CD pipeline, reducing deployment time from 2 days to 15 minutes.",
      },
    ],
    relatedArticles: [
      {
        href: "/blog/kubernetes-cost-optimization",
        image: "/blog/kubernetes.jpg",
        alt: "Kubernetes Cost Optimization",
        category: "Cloud & DevOps",
        title: "Kubernetes Cost Optimization: Strategies That Actually Work",
        description:
          "Reduce your Kubernetes infrastructure costs by 40-60% with these proven strategies for resource management and cluster optimization.",
      },
      {
        href: "/blog/cicd-pipeline-best-practices",
        image: "/blog/cicd-pipelines.jpg",
        alt: "CI/CD Pipeline Best Practices",
        category: "Cloud & DevOps",
        title: "CI/CD Pipeline Best Practices for High-Velocity Teams",
        description:
          "Design CI/CD pipelines that enable daily deployments with confidence. Learn the practices that separate high-performing teams from the rest.",
      },
    ],
    ctaTitle: "Ready to Get Started?",
    ctaSubtitle: "Let's discuss how Nexloom can help with your cloud & DevOps needs.",
  },

  "ai-automation": {
    slug: "ai-automation",
    heroTitle: "Remove manual work with safe AI workflows tied to real systems.",
    heroSubtitle:
      "Nexloom builds custom AI solutions that transform how businesses operate. From intelligent agents to automated workflows, we harness the power of large language models and machine learning to drive efficiency and innovation.",
    heroImage: "/services/ai.jpg",
    iconKey: "bot",
    subservices: [
      {
        id: "ai-agents",
        title: "AI Agents",
        description:
          "Custom AI agents that autonomously handle complex tasks — from customer support and sales qualification to research and data analysis. We build agents that learn, adapt, and deliver results with minimal human intervention.",
        impact: "Automate complex tasks with intelligent, adaptive AI agents.",
        caseStudyHref: "/case-studies/ai-customer-support-ecommerce",
        features: [
          "Custom agent development",
          "Multi-modal AI capabilities",
          "Task automation & orchestration",
          "Human-in-the-loop workflows",
          "Agent monitoring & analytics",
          "Continuous learning systems",
          "Safety guardrails & controls",
        ],
      },
      {
        id: "agentic-workflows",
        title: "Agentic Workflows",
        description:
          "Multi-step, multi-agent workflows that orchestrate complex business processes. Our agentic systems coordinate between specialized AI agents, APIs, and human checkpoints to automate end-to-end operations reliably.",
        impact: "Orchestrate complex processes with coordinated AI systems.",
        caseStudyHref: "/case-studies/ai-customer-support-ecommerce",
        features: [
          "Multi-agent orchestration",
          "Workflow automation",
          "API & tool integrations",
          "Human checkpoint management",
          "Error handling & recovery",
          "Workflow monitoring",
          "Process optimization",
        ],
      },
      {
        id: "llm-integrations",
        title: "LLM Integrations",
        description:
          "Integrate large language models (GPT-4, Claude, Llama) into your applications for natural language processing, content generation, summarization, and intelligent search. We handle prompt engineering, fine-tuning, and RAG architectures.",
        impact: "Enhance applications with powerful language AI capabilities.",
        caseStudyHref: "/case-studies/ai-customer-support-ecommerce",
        features: [
          "GPT-4, Claude, Llama integration",
          "Prompt engineering & optimization",
          "RAG architecture implementation",
          "Fine-tuning & model training",
          "Semantic search & embeddings",
          "Content generation pipelines",
          "Cost optimization strategies",
        ],
      },
      {
        id: "intelligent-automation",
        title: "Intelligent Automation",
        description:
          "AI-powered automation for document processing, data extraction, classification, and decision support. We combine RPA with machine learning to automate workflows that traditional automation cannot handle.",
        impact: "Automate workflows beyond the reach of traditional automation.",
        caseStudyHref: "/case-studies/ai-customer-support-ecommerce",
        features: [
          "Document processing & OCR",
          "Data extraction & classification",
          "Decision support systems",
          "RPA with ML augmentation",
          "Process mining & optimization",
          "Automated quality assurance",
          "Intelligent routing & triage",
        ],
      },
      {
        id: "autonomous-systems",
        title: "Autonomous Systems",
        description:
          "Self-learning systems that optimize operations in real-time — from dynamic pricing and inventory management to predictive maintenance and anomaly detection. These systems improve continuously without manual tuning.",
        impact: "Deploy self-improving systems that optimize continuously.",
        caseStudyHref: "/case-studies/ai-customer-support-ecommerce",
        features: [
          "Dynamic pricing engines",
          "Predictive maintenance",
          "Anomaly detection",
          "Self-optimizing algorithms",
          "Real-time decision making",
          "Reinforcement learning",
          "Adaptive control systems",
        ],
      },
      {
        id: "ai-business-operations",
        title: "AI for Business Operations",
        description:
          "Strategic AI implementations for forecasting, reporting, customer insights, and operational analytics. We help businesses make data-driven decisions faster with AI-powered dashboards and recommendation engines.",
        impact: "Make faster, smarter decisions with AI-powered insights.",
        caseStudyHref: "/case-studies/ai-customer-support-ecommerce",
        features: [
          "Demand forecasting",
          "Customer insight analytics",
          "AI-powered reporting",
          "Recommendation engines",
          "Operational analytics",
          "Predictive analytics",
          "Business intelligence AI",
        ],
      },
    ],
    relatedCaseStudies: [
      {
        href: "/case-studies/ai-customer-support-ecommerce",
        image: "/case-studies/ecommerce.jpg",
        alt: "AI-Powered Customer Support for E-Commerce Platform",
        title: "AI-Powered Customer Support for E-Commerce Platform",
        description:
          "Deploying intelligent AI agents that handle 70% of customer inquiries automatically, reducing support costs by 55%.",
      },
    ],
    relatedArticles: [
      {
        href: "/blog/building-ai-agents-production",
        image: "/blog/ai-agents.jpg",
        alt: "Building AI Agents for Production",
        category: "AI & Automation",
        title: "Building AI Agents for Production: A Practical Guide",
        description:
          "Learn how to design, build, and deploy AI agents that handle real-world business tasks reliably and at scale.",
      },
      {
        href: "/blog/llm-integration-patterns",
        image: "/blog/llm-integration.jpg",
        alt: "LLM Integration Patterns for Enterprise Applications",
        category: "AI & Automation",
        title: "LLM Integration Patterns for Enterprise Applications",
        description:
          "Proven architectural patterns for integrating large language models into enterprise applications safely and effectively.",
      },
    ],
    ctaTitle: "Ready to Get Started?",
    ctaSubtitle: "Let's discuss how Nexloom can help with your AI & automation needs.",
  },

  "integrations-growth": {
    slug: "integrations-growth",
    heroTitle:
      "Connect systems and data so teams stop re-entering work and reporting stays trusted.",
    heroSubtitle:
      "Nexloom connects your tech stack, builds data pipelines, and creates the data infrastructure that keeps operations predictable. We integrate systems, optimize data flows, and build the analytics foundation for trusted reporting.",
    heroImage: "/services/integrations.jpg",
    iconKey: "link2",
    subservices: [
      {
        id: "api-development",
        title: "API Development",
        description:
          "RESTful and GraphQL APIs designed for performance, security, and developer experience. We build well-documented, versioned APIs with authentication, rate limiting, and comprehensive testing for reliable third-party integrations.",
        impact: "Build APIs that developers love and businesses rely on.",
        caseStudyHref: "/case-studies/data-pipeline-retail-analytics",
        features: [
          "RESTful & GraphQL APIs",
          "API authentication & security",
          "Rate limiting & throttling",
          "API documentation (OpenAPI)",
          "Versioning strategies",
          "Comprehensive API testing",
          "Developer portal & SDKs",
        ],
      },
      {
        id: "platform-integrations",
        title: "Platform Integrations",
        description:
          "Seamless integrations with CRM, ERP, payment gateways, marketing platforms, and third-party services. We connect your tools and systems to create unified workflows that eliminate data silos and manual processes.",
        impact: "Eliminate data silos with unified system integrations.",
        caseStudyHref: "/case-studies/data-pipeline-retail-analytics",
        features: [
          "CRM & ERP integration",
          "Payment gateway setup",
          "Marketing platform connectors",
          "Third-party API integrations",
          "Data synchronization",
          "Webhook management",
          "Integration monitoring",
        ],
      },
      {
        id: "data-pipelines",
        title: "Data Pipelines",
        description:
          "Real-time and batch data pipelines for ETL, data warehousing, and analytics. We build scalable data infrastructure using tools like Apache Kafka, Airflow, and dbt to ensure your data is always accurate, accessible, and actionable.",
        impact: "Turn raw data into actionable insights with robust pipelines.",
        caseStudyHref: "/case-studies/data-pipeline-retail-analytics",
        features: [
          "ETL/ELT pipeline design",
          "Real-time data streaming",
          "Data warehousing",
          "Apache Kafka & Airflow",
          "dbt transformations",
          "Data quality monitoring",
          "Schema management",
        ],
      },
      {
        id: "martech-systems",
        title: "Martech Systems",
        description:
          "Marketing technology stack setup and optimization including email automation, CRM workflows, lead scoring, attribution modeling, and campaign analytics. We build martech systems that drive measurable marketing ROI.",
        impact: "Maximize marketing ROI with optimized martech systems.",
        caseStudyHref: "/case-studies/data-pipeline-retail-analytics",
        features: [
          "Email automation setup",
          "CRM workflow optimization",
          "Lead scoring models",
          "Attribution modeling",
          "Campaign analytics",
          "Marketing automation",
          "Customer journey mapping",
        ],
      },
      {
        id: "analytics-dashboards",
        title: "Analytics & Dashboards",
        description:
          "Custom analytics dashboards and business intelligence solutions using tools like Metabase, Looker, and custom-built visualizations. We transform raw data into actionable insights that drive strategic decisions.",
        impact: "Empower decision-making with real-time visual analytics.",
        caseStudyHref: "/case-studies/data-pipeline-retail-analytics",
        features: [
          "Custom dashboard development",
          "Business intelligence tools",
          "Metabase & Looker setup",
          "Real-time data visualization",
          "KPI tracking & reporting",
          "Executive dashboards",
          "Self-service analytics",
        ],
      },
      {
        id: "growth-infrastructure",
        title: "Growth Infrastructure",
        description:
          "Technical infrastructure for growth including A/B testing frameworks, feature flags, user analytics, funnel optimization, and conversion tracking. We build the systems that enable data-driven experimentation and rapid growth.",
        impact: "Accelerate growth with data-driven experimentation infrastructure.",
        caseStudyHref: "/case-studies/data-pipeline-retail-analytics",
        features: [
          "A/B testing frameworks",
          "Feature flag systems",
          "User analytics tracking",
          "Funnel optimization",
          "Conversion tracking",
          "Experimentation platforms",
          "Growth metrics dashboards",
        ],
      },
    ],
    relatedCaseStudies: [
      {
        href: "/case-studies/data-pipeline-retail-analytics",
        image: "/case-studies/retail-analytics.jpg",
        alt: "Real-Time Data Pipeline for Retail Analytics",
        title: "Real-Time Data Pipeline for Retail Analytics",
        description:
          "Building a real-time data pipeline that unified 12 data sources and enabled data-driven decision making across 200+ retail locations.",
      },
    ],
    relatedArticles: [
      {
        href: "/blog/api-design-developer-experience",
        image: "/blog/api-design.jpg",
        alt: "API Design for Outstanding Developer Experience",
        category: "Engineering",
        title: "API Design for Outstanding Developer Experience",
        description:
          "Design APIs that developers actually want to use. Learn the principles of great API design from naming conventions to error handling.",
      },
    ],
    ctaTitle: "Ready to Get Started?",
    ctaSubtitle: "Let's discuss how Nexloom can help with your integrations & growth needs.",
  },
};

export const SERVICE_SLUGS = Object.keys(servicePages);

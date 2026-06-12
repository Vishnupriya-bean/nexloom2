// ─── ABOUT PAGE CONTENT ──────────────────────────────────────────────────────

export const aboutHeroContent = {
  title: "About",
  titleGradient: "Nexloom",
  subtitle:
    "Senior-led delivery for product, cloud, and AI. We ship in production and keep operations predictable. Built by senior engineers and operators. No handoffs.",
  image: "/about/team-meeting.jpg",
} as const;

export const missionContent = {
  title: "Our Mission",
  paragraphs: [
    "Nexloom helps teams ship software that grows revenue and stays reliable. We take ownership from plan to production, then stay close through launch, so delivery stays predictable.",
    "We work across four lanes: Engineering and Product, Cloud and DevOps, AI and Automation, and Integrations and Data. We show our work, we communicate early, and we measure outcomes in releases, reliability, and cost.",
  ],
} as const;

export const howWeWorkContent = {
  title: "How We Work",
  items: [
    "Understand your product vision, technical constraints, and growth goals.",
    "Design scalable architecture and clear delivery roadmaps.",
    "Build with senior engineers focused on reliability, performance, and speed.",
    "Launch, iterate, and continuously improve systems as your business grows.",
  ],
  note: "Trusted by teams shipping customer-facing platforms.",
  noteLink: { label: "Ask for relevant examples", href: "/book-a-call" },
} as const;

export type AboutValue = {
  title: string;
  description: string;
};

export const valuesContent = {
  title: "Our Values",
  items: [
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
  ] as AboutValue[],
} as const;

export const aboutCtaContent = {
  title: "Ready to Work Together?",
  subtitle: "Let's discuss how Nexloom can become your technology partner.",
  cta: { label: "Book a Call", href: "/book-a-call" },
} as const;

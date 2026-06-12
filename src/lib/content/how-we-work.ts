// ─── HOW WE WORK PAGE CONTENT ────────────────────────────────────────────────

export const hwwHeroContent = {
  title: "How We Work",
  subtitle: "A proven process designed for clarity, speed, and results.",
  image: "/about/team-working.jpg",
} as const;

export type ProcessStep = {
  label: string;
  title: string;
  description: string;
};

export const stepsContent: ProcessStep[] = [
  {
    label: "Step 1",
    title: "Project Fit Call",
    description:
      "We align on goals, constraints, timeline, and success metrics.",
  },
  {
    label: "Step 2",
    title: "Scope & Plan",
    description:
      "We produce a short delivery plan with milestones, risks, and a fixed set of deliverables for the first phase.",
  },
  {
    label: "Step 3",
    title: "Build & Prove",
    description:
      "We ship in small increments with weekly demos. We track progress in working software, not slides.",
  },
  {
    label: "Step 4",
    title: "Launch & Stabilize",
    description:
      "We deploy with monitoring, rollback plans, and runbooks so production stays predictable.",
  },
  {
    label: "Step 5",
    title: "Operate & Improve",
    description:
      "We support the system, reduce toil, and keep delivery moving through measured improvements.",
  },
];

export const hwwCtaContent = {
  title: "Get a project fit check",
  subtitle:
    "Bring your top priority. We will tell you if we are a fit and what we would do first.",
  cta: { label: "Book a Call", href: "/book-a-call" },
} as const;

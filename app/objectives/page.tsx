import { Cpu, Rocket, Target } from "lucide-react";

type ObjectiveStatus = "In Progress" | "Target 2026" | "Mastered";

interface Objective {
  id: string;
  category: "Technical Goals" | "Project Goals" | "Career Goals";
  title: string;
  status: ObjectiveStatus;
  target: string;
  reason: string;
}

const objectives: Objective[] = [
  {
    id: "tech-1",
    category: "Technical Goals",
    title: "[Objective Title]",
    status: "In Progress",
    target: "[Target Completion Date]",
    reason: "[Why this matters to me — e.g. deepening my ability to build immersive 3D experiences.]",
  },
  {
    id: "tech-2",
    category: "Technical Goals",
    title: "[Objective Title]",
    status: "Target 2026",
    target: "[Target Completion Date]",
    reason: "[Why this matters to me — e.g. exploring new systems languages and low-level performance.]",
  },
  {
    id: "project-1",
    category: "Project Goals",
    title: "[Objective Title]",
    status: "In Progress",
    target: "[Target Completion Date]",
    reason: "[Why this matters to me — e.g. building something end-to-end that delivers real value.]",
  },
  {
    id: "project-2",
    category: "Project Goals",
    title: "[Objective Title]",
    status: "Target 2026",
    target: "[Target Completion Date]",
    reason: "[Why this matters to me — e.g. giving back to the open-source community I rely on.]",
  },
  {
    id: "career-1",
    category: "Career Goals",
    title: "[Objective Title]",
    status: "In Progress",
    target: "[Target Completion Date]",
    reason: "[Why this matters to me — e.g. growing into a role where I can own features across the stack.]",
  },
  {
    id: "career-2",
    category: "Career Goals",
    title: "[Objective Title]",
    status: "Mastered",
    target: "[Target Completion Date]",
    reason: "[Why this matters to me — e.g. collaborating with diverse teams across time zones.]",
  },
];

function getIconForCategory(category: Objective["category"]) {
  switch (category) {
    case "Technical Goals":
      return Cpu;
    case "Project Goals":
      return Rocket;
    case "Career Goals":
      return Target;
  }
}

function getStatusStyles(status: ObjectiveStatus) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold text-brand-mint bg-[rgba(0,255,194,0.12)]";

  switch (status) {
    case "In Progress":
      return base;
    case "Target 2026":
      return base + " border border-[rgba(0,255,194,0.3)]";
    case "Mastered":
      return base + " bg-[rgba(0,255,194,0.18)]";
  }
}

function getProgressFraction(status: ObjectiveStatus) {
  switch (status) {
    case "In Progress":
      return 0.55;
    case "Target 2026":
      return 0.3;
    case "Mastered":
      return 1;
  }
}

export default function ObjectivesPage() {
  return (
    <main className="min-h-screen pt-24 px-6">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text">
            Objectives
          </h1>
          <p className="mt-4 text-brand-text-muted max-w-2xl mx-auto">
            A living roadmap of where I&apos;m heading next — technically,
            creatively, and professionally. Replace these placeholders with the
            goals that define your own trajectory.
          </p>
        </header>

        <section className="space-y-6">
          {objectives.map((objective, index) => {
            const Icon = getIconForCategory(objective.category);
            const progress = getProgressFraction(objective.status);

            return (
              <article
                key={objective.id}
                className="relative overflow-hidden rounded-2xl border border-[rgba(0,255,194,0.08)] border-l-4 border-l-brand-mint bg-[rgba(21,26,33,0.4)] backdrop-blur-md px-5 py-5 md:px-6 md:py-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(0,255,194,0.4)] hover:shadow-[0_0_24px_rgba(0,255,194,0.18)] opacity-100 translate-y-0 motion-safe:transition-transform motion-safe:duration-500"
                style={{
                  transitionDelay: `${index * 40}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,255,194,0.08)] text-brand-mint border border-[rgba(0,255,194,0.3)] animate-pulse">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-brand-text-muted">
                          {objective.category}
                        </p>
                        <h2 className="text-lg md:text-xl font-semibold text-brand-text">
                          {objective.title}
                        </h2>
                      </div>

                      <span className={getStatusStyles(objective.status)}>
                        {objective.status}
                      </span>
                    </div>

                    <p className="text-sm text-brand-text-muted leading-relaxed">
                      {objective.reason}
                    </p>

                    <div className="flex items-center justify-between text-xs text-brand-text-muted">
                      <span>{objective.target}</span>
                      <span className="text-[0.7rem] uppercase tracking-wide">
                        [Why this matters to me]
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-brand-mint transition-all duration-500"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
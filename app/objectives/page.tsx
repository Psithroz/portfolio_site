"use client";

import { Cpu, Rocket, Target } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";
import type {
  ObjectiveCategoryKey,
  ObjectiveStatusKey,
} from "../i18n/types";

function getIconForCategory(category: ObjectiveCategoryKey) {
  switch (category) {
    case "technical":
      return Cpu;
    case "project":
      return Rocket;
    case "career":
      return Target;
  }
}

function getStatusStyles(status: ObjectiveStatusKey) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold text-brand-mint bg-[rgba(0,255,194,0.12)]";

  switch (status) {
    case "inProgress":
      return base;
    case "target2026":
      return base + " border border-[rgba(0,255,194,0.3)]";
    case "mastered":
      return base + " bg-[rgba(0,255,194,0.18)]";
  }
}

function getProgressFraction(status: ObjectiveStatusKey) {
  switch (status) {
    case "inProgress":
      return 0.55;
    case "target2026":
      return 0.3;
    case "mastered":
      return 1;
  }
}

export default function ObjectivesPage() {
  const { t } = useLanguage();
  const o = t.objectives;

  return (
    <main className="min-h-screen pt-24 px-6">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text">
            {o.title}
          </h1>
          <p className="mt-4 text-brand-text-muted max-w-2xl mx-auto">
            {o.subtitle}
          </p>
        </header>

        <section className="space-y-6">
          {o.items.map((objective, index) => {
            const Icon = getIconForCategory(objective.categoryKey);
            const progress = getProgressFraction(objective.statusKey);

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
                          {o.categories[objective.categoryKey]}
                        </p>
                        <h2 className="text-lg md:text-xl font-semibold text-brand-text">
                          {objective.title}
                        </h2>
                      </div>

                      <span className={getStatusStyles(objective.statusKey)}>
                        {o.statuses[objective.statusKey]}
                      </span>
                    </div>

                    <p className="text-sm text-brand-text-muted leading-relaxed">
                      {objective.reason}
                    </p>

                    <div className="flex items-center justify-between text-xs text-brand-text-muted">
                      <span>{objective.target}</span>
                      <span className="text-[0.7rem] uppercase tracking-wide">
                        {o.whyMatters}
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

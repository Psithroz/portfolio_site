import Link from "next/link";

const projects = [
  {
    id: "p1",
    title: "[Project Name]",
    description:
      "[Brief description of the functionality and tech used. Mention the problem it solves and what makes it interesting.]",
    tags: ["Next.js", "React", "Tailwind"],
    link: "#",
  },
  {
    id: "p2",
    title: "[Project Name]",
    description:
      "[Brief description of the functionality and tech used. Mention the problem it solves and what makes it interesting.]",
    tags: ["AI", "TypeScript", "API"],
    link: "#",
  },
  {
    id: "p3",
    title: "[Project Name]",
    description:
      "[Brief description of the functionality and tech used. Mention the problem it solves and what makes it interesting.]",
    tags: ["Design System", "UI", "Accessibility"],
    link: "#",
  },
  {
    id: "p4",
    title: "[Project Name]",
    description:
      "[Brief description of the functionality and tech used. Mention the problem it solves and what makes it interesting.]",
    tags: ["Full Stack", "Database", "Auth"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text">
            Projects
          </h1>
          <p className="mt-3 max-w-2xl text-brand-text-muted">
            A curated set of builds and experiments. Replace the placeholders
            below with your real work when ready.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl p-5 md:p-6 bg-[rgba(21,26,33,0.5)] backdrop-blur-lg border border-[rgba(0,255,194,0.1)] transition duration-200 hover:border-brand-mint hover:shadow-[0_0_20px_rgba(0,255,194,0.15)]"
            >
              {/* Image placeholder (swap for <Image /> when available) */}
              <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-brand-surface via-brand-bg to-brand-surface">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,194,0.20),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(64,224,255,0.14),transparent_55%)]" />
              </div>

              <h2 className="text-lg md:text-xl font-bold text-brand-mint">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-brand-text border border-white/10 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-brand-text-muted">
                  {project.link === "#" ? "[Add link]" : project.link}
                </span>

                <Link
                  href={project.link}
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-brand-mint text-brand-bg shadow-[0_0_20px_rgba(0,255,194,0.15)] transition duration-200 hover:shadow-[0_0_28px_rgba(0,255,194,0.25)] hover:-translate-y-0.5"
                >
                  View Project
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
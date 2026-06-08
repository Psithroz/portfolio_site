"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "./i18n/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  const { home } = t;

  return (
    <main className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans">
      <section className="relative flex flex-col items-center justify-center h-[60vh] md:h-[70vh] px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="w-full h-full bg-brand-bg" />
          <div
            className="absolute left-1/2 top-1/3 w-[80vw] h-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(0,255,194,0.4) 0%, rgba(64,224,255,0.0) 70%)",
              opacity: 0.4,
              filter: "blur(40px)",
            }}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text text-center drop-shadow-[0_2px_16px_rgba(0,255,194,0.35)]">
          Timotey LAMOTTE
        </h1>
        <h2 className="mt-3 text-xl md:text-2xl font-semibold tracking-wide bg-gradient-to-r from-brand-mint via-brand-cyan to-brand-mint bg-clip-text text-transparent">
          {home.subtitle}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-brand-text-muted text-center">
          {home.tagline}
        </p>
        <p className="mt-4 text-sm text-brand-text-muted text-center">
          +33 6 63 14 37 85 &middot;{" "}
          <a
            href="mailto:timoteylamotte@gmail.com"
            className="text-brand-mint hover:underline"
          >
            timoteylamotte@gmail.com
          </a>
        </p>
      </section>

      <section className="max-w-4xl w-full mx-auto py-14 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-brand-text mb-3">
            {home.profileTitle}
          </h3>
          <p className="text-brand-text-muted leading-relaxed">
            {home.profileText}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brand-text mb-3">
            {home.skillsTitle}
          </h3>
          <p className="text-brand-text-muted leading-relaxed">
            {home.skillsText}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-brand-text mb-7">
          {home.educationTitle}
        </h3>
        <div className="space-y-6">
          {home.education.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-brand-cyan/20 bg-brand-surface/30 p-5"
            >
              <h4 className="text-lg font-semibold text-brand-text">
                {item.school}
              </h4>
              <span className="block mb-1 text-brand-mint text-sm">
                {item.location}
              </span>
              <p className="text-brand-text-muted">{item.diploma}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-brand-text mb-7">
          {home.experienceTitle}
        </h3>
        <ol className="relative border-l-2 border-brand-cyan/60">
          {home.experience.map((item, i) => (
            <li key={i} className="mb-12 ml-6">
              <span className="absolute flex items-center justify-center w-7 h-7 bg-brand-mint rounded-full -left-4 ring-4 ring-brand-bg">
                <span className="block w-3 h-3 rounded-full bg-brand-cyan animate-pulse" />
              </span>
              <h4 className="text-lg font-semibold text-brand-text">
                {item.title}
              </h4>
              <span className="block mb-1 text-brand-mint text-sm">
                {item.company} &middot; {item.location} &middot; {item.period}
              </span>
              <ul className="list-disc list-outside ml-4 space-y-1 text-brand-text-muted">
                {item.highlights.map((highlight, j) => (
                  <li key={j}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-brand-text mb-7">
          {home.certificatesTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {home.certificates.map((cert, i) => (
            <div
              key={i}
              className="rounded-xl border border-brand-cyan/20 bg-brand-surface/30 p-5"
            >
              <h4 className="text-base font-semibold text-brand-text">
                {cert.name}
              </h4>
              <p className="mt-1 text-sm text-brand-text-muted">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-brand-text mb-7">
          {home.skillsSectionTitle}
        </h3>
        <div className="space-y-4">
          {home.skills.map((skill, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-brand-mint mb-1">
                {skill.category}
              </h4>
              <p className="text-brand-text-muted">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-brand-surface mt-auto py-7 flex flex-col md:flex-row items-center justify-between px-6 gap-4 bg-brand-bg">
        <div className="flex space-x-5 mb-2 md:mb-0">
          <a
            href="https://github.com/Psithroz"
            aria-label="GitHub"
            className="text-brand-text-muted hover:text-brand-mint transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/timotey-lamotte-6b41a22ba/"
            aria-label="LinkedIn"
            className="text-brand-text-muted hover:text-brand-mint transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:timoteylamotte@gmail.com"
            aria-label={home.emailAria}
            className="text-brand-text-muted hover:text-brand-mint transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <div className="text-sm text-brand-text-muted">
          &copy; {new Date().getFullYear()} Timotey LAMOTTE. {home.footerRights}
        </div>
      </footer>
    </main>
  );
}

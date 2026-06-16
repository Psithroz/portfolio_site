"use client";

import {
  Activity,
  Award,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  Router,
  Server,
  Shield,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { NetworkSkillKey } from "./i18n/types";
import { useLanguage } from "./i18n/LanguageProvider";

const SKILL_ICONS: Record<NetworkSkillKey, LucideIcon> = {
  routing: Router,
  security: Shield,
  systems: Server,
  monitoring: Activity,
};

const CV_PDF_PATH = "/cv-timotey-lamotte.pdf";

export default function Home() {
  const { t } = useLanguage();
  const { home } = t;

  return (
    <main className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans">
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="w-full h-full bg-brand-bg" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,255,194,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,194,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute left-1/2 top-1/3 w-[80vw] h-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(0,255,194,0.35) 0%, rgba(64,224,255,0.0) 70%)",
              opacity: 0.45,
              filter: "blur(40px)",
            }}
          />
        </div>

        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-brand-cyan/80">
          <Terminal className="h-3.5 w-3.5" />
          <span>{home.terminalPrompt}</span>
          <span className="animate-pulse text-brand-mint">_</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Network className="h-8 w-8 text-brand-mint drop-shadow-[0_0_12px_rgba(0,255,194,0.5)]" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text text-center drop-shadow-[0_2px_16px_rgba(0,255,194,0.35)]">
            Timotey LAMOTTE
          </h1>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold tracking-wide bg-gradient-to-r from-brand-mint via-brand-cyan to-brand-mint bg-clip-text text-transparent">
          {home.subtitle}
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-brand-text-muted text-center leading-relaxed">
          {home.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-brand-text-muted">
          <a
            href="tel:+33663143785"
            className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-surface/40 px-4 py-2 hover:border-brand-mint/40 hover:text-brand-mint transition-colors"
          >
            <Phone className="h-4 w-4 text-brand-cyan" />
            +33 6 63 14 37 85
          </a>
          <a
            href="mailto:timoteylamotte@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-surface/40 px-4 py-2 hover:border-brand-mint/40 hover:text-brand-mint transition-colors"
          >
            <Mail className="h-4 w-4 text-brand-cyan" />
            timoteylamotte@gmail.com
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-surface/40 px-4 py-2">
            <MapPin className="h-4 w-4 text-brand-cyan" />
            {home.location}
          </span>
          <a
            href="https://www.linkedin.com/in/timotey-lamotte-6b41a22ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-surface/40 px-4 py-2 hover:border-brand-mint/40 hover:text-brand-mint transition-colors"
          >
            <Linkedin className="h-4 w-4 text-brand-cyan" />
            LinkedIn
          </a>
        </div>

        <a
          href={CV_PDF_PATH}
          download
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-mint to-brand-cyan px-6 py-3 text-sm font-semibold text-brand-bg shadow-[0_0_20px_rgba(0,255,194,0.2)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,255,194,0.35)]"
        >
          <Download className="h-4 w-4" />
          {home.downloadCv}
        </a>
      </section>

      <section className="max-w-5xl w-full mx-auto py-10 px-4">
        <div className="rounded-2xl border border-brand-cyan/20 bg-[rgba(21,26,33,0.5)] backdrop-blur-lg p-6 md:p-8">
          <h3 className="flex items-center gap-2 text-2xl font-bold text-brand-text mb-4">
            <Terminal className="h-5 w-5 text-brand-mint" />
            {home.profileTitle}
          </h3>
          <p className="text-brand-text-muted leading-relaxed text-base md:text-lg">
            {home.profileText}
          </p>
        </div>
      </section>

      <section className="max-w-5xl w-full mx-auto py-10 px-4">
        <h3 className="flex items-center gap-2 text-2xl font-bold text-brand-text mb-7">
          <Network className="h-6 w-6 text-brand-mint" />
          {home.skillsSectionTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {home.networkSkills.map((group) => {
            const Icon = SKILL_ICONS[group.categoryKey];
            return (
              <div
                key={group.categoryKey}
                className="group rounded-2xl border border-brand-cyan/15 bg-[rgba(21,26,33,0.45)] backdrop-blur-lg p-5 md:p-6 transition duration-200 hover:border-brand-mint/40 hover:shadow-[0_0_20px_rgba(0,255,194,0.1)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-brand-mint/10 border border-brand-mint/25 text-brand-mint group-hover:shadow-[0_0_12px_rgba(0,255,194,0.2)] transition-shadow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="text-base font-semibold text-brand-text">
                    {group.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-brand-text border border-white/10 bg-white/5 hover:border-brand-cyan/30 hover:text-brand-cyan transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="flex items-center gap-2 text-2xl font-bold text-brand-text mb-7">
          <Router className="h-6 w-6 text-brand-mint" />
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
              <span className="block mb-2 text-brand-mint text-sm">
                {item.company} &middot; {item.location} &middot; {item.period}
              </span>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-brand-text-muted text-sm leading-relaxed">
                {item.highlights.map((highlight, j) => (
                  <li key={j}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="flex items-center gap-2 text-2xl font-bold text-brand-text mb-7">
            <GraduationCap className="h-6 w-6 text-brand-mint" />
            {home.educationTitle}
          </h3>
          <div className="space-y-4">
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
                <p className="text-brand-text-muted text-sm">{item.diploma}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-2xl font-bold text-brand-text mb-7">
            <Award className="h-6 w-6 text-brand-mint" />
            {home.certificatesTitle}
          </h3>
          <div className="space-y-4">
            {home.certificates.map((cert, i) => (
              <div
                key={i}
                className="rounded-xl border border-brand-cyan/20 bg-brand-surface/30 p-5"
              >
                <h4 className="text-base font-semibold text-brand-text">
                  {cert.name}
                </h4>
                <p className="mt-1 text-sm text-brand-text-muted leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-8 pb-14">
        <h3 className="text-lg font-bold text-brand-text mb-4">
          {home.languagesTitle}
        </h3>
        <div className="flex flex-wrap gap-2">
          {home.languages.map((lang) => (
            <span
              key={lang}
              className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium text-brand-mint border border-brand-mint/25 bg-brand-mint/5"
            >
              {lang}
            </span>
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

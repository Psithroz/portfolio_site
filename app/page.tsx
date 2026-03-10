"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

// 1. Experience Item Interface
interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experience: ExperienceItem[] = [
  {
    title: "[Role Title]",
    company: "[Company Name]",
    period: "2023 - Present",
    description:
      "[Experience Description goes here. Summarize key achievements, technologies, etc.]",
  },
  {
    title: "[Previous Role]",
    company: "[Previous Company]",
    period: "2020 - 2023",
    description:
      "[Prior experience description with some placeholder detail.]",
  },
];

// SUGGESTION: Extract Hero, About, ExperienceTimeline, and Footer into their own components in `/components` for maintainability as your project grows.

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center h-[60vh] md:h-[70vh] px-4 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
        >
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
          [Name]
        </h1>
        <h2 className="mt-3 text-xl md:text-2xl font-semibold tracking-wide bg-gradient-to-r from-brand-mint via-brand-cyan to-brand-mint bg-clip-text text-transparent">
          [Job Title]
        </h2>
        <p className="mt-6 max-w-xl text-lg text-brand-text-muted text-center">
          A short and compelling tagline or summary of your expertise and vision
          goes here.
        </p>
        {/* Example primary button using mint glow */}
        {/* <button className="mt-8 px-5 py-2 rounded-full bg-brand-mint text-brand-bg font-medium shadow-[0_0_20px_rgba(0,255,194,0.15)] hover:shadow-[0_0_28px_rgba(0,255,194,0.25)] transition-shadow">
          View my work
        </button> */}
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl w-full mx-auto py-14 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-brand-text mb-3">
            Who I am
          </h3>
          <p className="text-brand-text-muted leading-relaxed">
            Insert a brief bio/about blurb. Use this space to introduce yourself
            — your background, values, and what sets you apart as a
            professional.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brand-text mb-3">
            What I do
          </h3>
          <p className="text-brand-text-muted leading-relaxed">
            Summarize your skillset, focus areas, or services here. For example,
            “Building accessible, high-performance web experiences with Next.js
            and modern design.”
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-brand-text mb-7">
          Experience
        </h3>
        <ol className="relative border-l-2 border-brand-cyan/60">
          {experience.map((item, i) => (
            <li key={i} className="mb-12 ml-6">
              <span className="absolute flex items-center justify-center w-7 h-7 bg-brand-mint rounded-full -left-4 ring-4 ring-brand-bg">
                <span className="block w-3 h-3 rounded-full bg-brand-cyan animate-pulse" />
              </span>
              <h4 className="text-lg font-semibold text-brand-text">
                {item.title}
              </h4>
              <span className="block mb-1 text-brand-mint text-sm">
                {item.company} &middot; {item.period}
              </span>
              <p className="text-brand-text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-brand-surface mt-auto py-7 flex flex-col md:flex-row items-center justify-between px-6 gap-4 bg-brand-bg">
        <div className="flex space-x-5 mb-2 md:mb-0">
          <a
            href="#"
            aria-label="GitHub"
            className="text-brand-text-muted hover:text-brand-mint transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-brand-text-muted hover:text-brand-mint transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="#"
            aria-label="Email"
            className="text-brand-text-muted hover:text-brand-mint transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <div className="text-sm text-brand-text-muted">
          &copy; {new Date().getFullYear()} [Name]. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
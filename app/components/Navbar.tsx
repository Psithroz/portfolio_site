"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/objectives", label: "Objectives" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div
        className="
          mx-auto max-w-6xl
          flex items-center justify-between
          px-4 py-3 md:py-4
          backdrop-blur-md
          bg-[rgba(11,13,16,0.7)]
          border-b border-[rgba(0,255,194,0.1)]
        "
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-brand-text"
        >
          Timotey LAMOTTE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "relative transition-colors",
                  "text-brand-text-muted hover:text-brand-mint",
                  isActive ? "text-brand-mint" : "",
                ].join(" ")}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-brand-mint to-transparent shadow-[0_0_12px_rgba(0,255,194,0.7)]" />
                )}
              </Link>
            );
          })}

          <a
            href="https://github.com/Psithroz"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-text-muted hover:text-brand-mint transition will-change-transform transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,194,0.8)]"
          >
            <Github className="h-5 w-5" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-text-muted hover:text-brand-mint hover:bg-white/5 transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-[max-height,opacity]
          duration-200 ease-out
          bg-[rgba(11,13,16,0.9)] backdrop-blur-md border-b border-[rgba(0,255,194,0.08)]
          ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="mx-auto max-w-6xl px-4 py-2 flex flex-col gap-1 text-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "flex items-center justify-between py-2",
                  "text-brand-text-muted hover:text-brand-mint",
                  isActive ? "text-brand-mint" : "",
                ].join(" ")}
                onClick={() => setOpen(false)}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="h-[2px] w-8 rounded-full bg-brand-mint shadow-[0_0_12px_rgba(0,255,194,0.7)]" />
                )}
              </Link>
            );
          })}

          <a
            href="https://github.com/Psithroz"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between py-2 text-brand-text-muted hover:text-brand-mint transition will-change-transform transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,194,0.8)]"
          >
            <span>GitHub</span>
            <Github className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
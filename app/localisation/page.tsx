"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";

type Site = {
  id: string;
  name: string;
  label: string;
  description: string;
  coords: string;
  // Position as percentages relative to the map container
  x: number;
  y: number;
};

const sites: Site[] = [
  {
    id: "home",
    name: "Home Base",
    label: "[Home Base]",
    description: "[Primary location where I live and do most of my work.]",
    coords: "48.8566° N, 2.3522° E",
    x: 35,
    y: 55,
  },
  {
    id: "project",
    name: "Current Project HQ",
    label: "[Current Project HQ]",
    description: "[Where a key project or team is centered right now.]",
    coords: "51.5074° N, 0.1278° W",
    x: 45,
    y: 40,
  },
  {
    id: "university",
    name: "University",
    label: "[University]",
    description: "[Where I studied or am currently learning formally.]",
    coords: "40.7128° N, 74.0060° W",
    x: 20,
    y: 45,
  },
];

export default function LocationPage() {
  const [activeSiteId, setActiveSiteId] = React.useState<string | null>(null);

  const activeSite = sites.find((s) => s.id === activeSiteId) ?? null;

  return (
    <main className="min-h-screen pt-24 px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text">
            Global Presence
          </h1>
          <p className="mt-4 text-brand-text-muted max-w-2xl mx-auto">
            A snapshot of where I&apos;m based and the key places that shape my
            work and learning. This page is wired for an interactive map engine
            you can integrate later.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
          {/* Map area */}
          <div className="relative rounded-2xl bg-[rgba(21,26,33,0.35)] backdrop-blur-md border border-[rgba(0,255,194,0.35)] overflow-hidden shadow-[0_0_22px_rgba(0,0,0,0.6)]">
            {/* Dark mode / night filter wrapper */}
            <div className="relative h-[380px] md:h-[440px] w-full [filter:invert(1)_hue-rotate(180deg)_saturate(1.3)]">
              {/* Placeholder grid background (the “map” until a real engine is added) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,194,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(64,224,255,0.10),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

              {/* Mint pulse center indicator */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-center">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-brand-mint/20 border border-brand-mint/70 flex items-center justify-center animate-pulse">
                    <Navigation className="h-6 w-6 text-brand-mint" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-brand-mint/10 blur-xl" />
                </div>
                <p className="text-xs font-medium text-brand-text tracking-wide uppercase">
                  Interactive Map Engine Loading...
                </p>
              </div>

              {/* Markers */}
              {sites.map((site) => (
                <button
                  key={site.id}
                  type="button"
                  className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center gap-1 focus:outline-none"
                  style={{ left: `${site.x}%`, top: `${site.y}%` }}
                  onClick={() =>
                    setActiveSiteId((prev) => (prev === site.id ? null : site.id))
                  }
                >
                  <span
                    className={[
                      "rounded-full border bg-[rgba(11,13,16,0.9)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide",
                      activeSiteId === site.id
                        ? "border-brand-mint text-brand-mint"
                        : "border-white/10 text-brand-text-muted",
                    ].join(" ")}
                  >
                    {site.name}
                  </span>
                  <span
                    className={[
                      "inline-flex h-7 w-7 items-center justify-center rounded-full border bg-[rgba(11,13,16,0.95)]",
                      activeSiteId === site.id
                        ? "border-brand-mint text-brand-mint shadow-[0_0_14px_rgba(0,255,194,0.55)]"
                        : "border-white/20 text-brand-text",
                    ].join(" ")}
                  >
                    <MapPin className="h-4 w-4" />
                  </span>
                </button>
              ))}

              {/* Active site popup */}
              {activeSite && (
                <div className="absolute left-4 bottom-4 max-w-xs rounded-xl border border-[rgba(0,255,194,0.4)] bg-[rgba(11,13,16,0.92)] backdrop-blur-md px-4 py-3 text-xs shadow-[0_0_18px_rgba(0,255,194,0.25)]">
                  <p className="text-[0.65rem] uppercase tracking-wide text-brand-mint mb-1">
                    {activeSite.label}
                  </p>
                  <p className="text-brand-text text-sm font-medium mb-1">
                    {activeSite.coords}
                  </p>
                  <p className="text-brand-text-muted text-[0.8rem]">
                    {activeSite.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="rounded-2xl bg-[rgba(21,26,33,0.35)] backdrop-blur-md border border-[rgba(0,255,194,0.18)] p-5 md:p-6 space-y-4">
            <h2 className="text-lg font-semibold text-brand-text flex items-center gap-2">
              <MapPin className="h-5 w-5 text-brand-mint" />
              Localised Sites
            </h2>
            <p className="text-sm text-brand-text-muted">
              A quick overview of the locations represented on the map. Replace
              coordinates and descriptions with the real anchors of your work
              and life.
            </p>

            <ul className="mt-3 space-y-3 text-sm">
              {sites.map((site) => (
                <li
                  key={site.id}
                  className={[
                    "rounded-lg border px-3 py-2 cursor-pointer transition-colors",
                    activeSiteId === site.id
                      ? "border-brand-mint/70 bg-brand-mint/5"
                      : "border-white/10 hover:border-brand-mint/40 hover:bg-brand-mint/5",
                  ].join(" ")}
                  onClick={() =>
                    setActiveSiteId((prev) => (prev === site.id ? null : site.id))
                  }
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-brand-text font-medium">{site.label}</p>
                      <p className="text-[0.7rem] text-brand-text-muted">
                        {site.coords}
                      </p>
                    </div>
                    <Navigation className="h-4 w-4 text-brand-mint" />
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </div>
    </main>
  );
}
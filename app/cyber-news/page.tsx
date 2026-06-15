"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const RSS2JSON_API = "https://api.rss2json.com/v1/api.json?rss_url=";

type FeedLanguage = "fr" | "en";
type FeedFilter = "all" | FeedLanguage;

const FEEDS: Record<FeedLanguage, { name: string; url: string }[]> = {
  fr: [
    { name: "ANSSI", url: "https://www.cert.ssi.gouv.fr/alerte/feed/" },
    { name: "LeMagIT Sécurité", url: "https://www.lemagit.fr/rss/Securite" },
    { name: "Zataz", url: "https://www.zataz.com/feed/" },
    { name: "Silicon FR", url: "https://www.silicon.fr/cybersecurite/feed" },
  ],
  en: [
    {
      name: "The Hacker News",
      url: "https://feeds.feedburner.com/TheHackersNews",
    },
    {
      name: "BleepingComputer",
      url: "https://www.bleepingcomputer.com/feed/",
    },
    { name: "Krebs on Security", url: "https://krebsonsecurity.com/feed/" },
    { name: "Dark Reading", url: "https://www.darkreading.com/rss.xml" },
  ],
};

const ALL_FEEDS = (
  Object.entries(FEEDS) as [FeedLanguage, (typeof FEEDS)[FeedLanguage]][]
).flatMap(([language, feeds]) =>
  feeds.map((feed) => ({ ...feed, language }))
);

interface RssItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  content?: string;
}

interface Article {
  title: string;
  link: string;
  pubDate: Date;
  source: string;
  language: FeedLanguage;
  snippet: string;
}

function stripHtml(html: string): string {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || "").replace(/\s+/g, " ").trim();
}

function truncate(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

function formatArticleDate(date: Date, language: FeedLanguage): string {
  const localeTag = language === "fr" ? "fr-FR" : "en-US";
  return new Intl.DateTimeFormat(localeTag, {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

async function fetchFeed(
  feedUrl: string,
  sourceName: string,
  language: FeedLanguage
): Promise<Article[]> {
  const response = await fetch(
    `${RSS2JSON_API}${encodeURIComponent(feedUrl)}`
  );
  if (!response.ok) return [];

  const data = await response.json();
  if (data.status !== "ok" || !Array.isArray(data.items)) return [];

  return data.items.map((item: RssItem) => ({
    title: item.title,
    link: item.link,
    pubDate: new Date(item.pubDate),
    source: sourceName,
    language,
    snippet: truncate(stripHtml(item.description || item.content || "")),
  }));
}

function LoadingSpinner({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-5">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-2 border-brand-cyan/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-mint border-r-brand-cyan animate-spin" />
        <div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-brand-mint/60 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
        />
      </div>
      <p className="text-sm text-brand-text-muted animate-pulse">{label}</p>
    </div>
  );
}

function FeedFilterTabs({
  activeFilter,
  onChange,
  labels,
}: {
  activeFilter: FeedFilter;
  onChange: (filter: FeedFilter) => void;
  labels: { all: string; french: string; english: string };
}) {
  const tabs: { key: FeedFilter; label: string }[] = [
    { key: "all", label: labels.all },
    { key: "fr", label: labels.french },
    { key: "en", label: labels.english },
  ];

  return (
    <div
      className="inline-flex items-center rounded-full border border-[rgba(0,255,194,0.25)] bg-[rgba(0,255,194,0.06)] p-1"
      role="tablist"
      aria-label={labels.all}
    >
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          role="tab"
          aria-selected={activeFilter === tab.key}
          onClick={() => onChange(tab.key)}
          className={[
            "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
            activeFilter === tab.key
              ? "bg-brand-mint text-brand-bg shadow-[0_0_12px_rgba(0,255,194,0.25)]"
              : "text-brand-text-muted hover:text-brand-mint",
          ].join(" ")}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default function CyberNewsPage() {
  const { t } = useLanguage();
  const cn = t.cyberNews;

  const [articles, setArticles] = React.useState<Article[]>([]);
  const [activeFilter, setActiveFilter] = React.useState<FeedFilter>("all");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function loadFeeds() {
      setLoading(true);
      setError(null);

      try {
        const results = await Promise.all(
          ALL_FEEDS.map((feed) =>
            fetchFeed(feed.url, feed.name, feed.language)
          )
        );

        if (cancelled) return;

        const merged = results
          .flat()
          .filter((article) => !isNaN(article.pubDate.getTime()))
          .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

        setArticles(merged);
      } catch {
        if (!cancelled) setError(cn.error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadFeeds();
    return () => {
      cancelled = true;
    };
  }, [cn.error]);

  const filteredArticles = React.useMemo(() => {
    if (activeFilter === "all") return articles;
    return articles.filter((article) => article.language === activeFilter);
  }, [articles, activeFilter]);

  const visibleFeeds = React.useMemo(() => {
    if (activeFilter === "all") return ALL_FEEDS;
    return ALL_FEEDS.filter((feed) => feed.language === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans">
      <div className="flex-1 pt-24 px-6 pb-12">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text drop-shadow-[0_2px_16px_rgba(0,255,194,0.2)]">
              {cn.title}
            </h1>
            <p className="mt-3 max-w-2xl text-brand-text-muted">{cn.subtitle}</p>

            <div className="mt-6">
              <FeedFilterTabs
                activeFilter={activeFilter}
                onChange={setActiveFilter}
                labels={cn.tabs}
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {visibleFeeds.map((feed) => (
                <span
                  key={`${feed.language}-${feed.name}`}
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-brand-mint border border-brand-mint/30 bg-brand-mint/5"
                >
                  {feed.name}
                </span>
              ))}
            </div>
          </header>

          {loading && <LoadingSpinner label={cn.loading} />}

          {!loading && error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-300">
              {error}
            </div>
          )}

          {!loading && !error && filteredArticles.length === 0 && (
            <p className="text-center text-brand-text-muted py-16">
              {cn.noArticles}
            </p>
          )}

          {!loading && !error && filteredArticles.length > 0 && (
            <section
              role="tabpanel"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredArticles.map((article, index) => (
                <article
                  key={`${article.link}-${index}`}
                  className="group flex flex-col rounded-2xl p-5 md:p-6 bg-[rgba(21,26,33,0.5)] backdrop-blur-lg border border-[rgba(0,255,194,0.1)] transition duration-200 hover:border-brand-mint hover:shadow-[0_0_20px_rgba(0,255,194,0.15)]"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold text-brand-mint border border-brand-mint/25 bg-brand-mint/5 truncate">
                        {article.source}
                      </span>
                      <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-cyan border border-brand-cyan/25 bg-brand-cyan/5">
                        {article.language}
                      </span>
                    </div>
                    <time
                      dateTime={article.pubDate.toISOString()}
                      className="text-xs text-brand-text-muted whitespace-nowrap shrink-0"
                    >
                      {formatArticleDate(article.pubDate, article.language)}
                    </time>
                  </div>

                  <h2 className="text-base md:text-lg font-bold leading-snug">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-text group-hover:text-brand-mint transition-colors duration-200"
                    >
                      {article.title}
                    </a>
                  </h2>

                  {article.snippet && (
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-text-muted">
                      {article.snippet}
                    </p>
                  )}

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-xs font-medium text-brand-cyan hover:text-brand-mint transition-colors"
                  >
                    {cn.readMore} →
                  </a>
                </article>
              ))}
            </section>
          )}
        </div>
      </div>

      <footer className="border-t border-brand-surface mt-auto py-7 flex flex-col md:flex-row items-center justify-between px-6 gap-4 bg-brand-bg">
        <div className="flex space-x-5 mb-2 md:mb-0">
          <a
            href="https://github.com/Psithroz"
            aria-label={t.nav.githubProfile}
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
            aria-label={t.home.emailAria}
            className="text-brand-text-muted hover:text-brand-mint transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <div className="text-sm text-brand-text-muted">
          &copy; {new Date().getFullYear()} Timotey LAMOTTE.{" "}
          {t.home.footerRights}
        </div>
      </footer>
    </main>
  );
}

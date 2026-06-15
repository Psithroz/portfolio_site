"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const RSS2JSON_API = "https://api.rss2json.com/v1/api.json?rss_url=";

const FEEDS = [
  {
    name: "ANSSI",
    url: "https://www.cert.ssi.gouv.fr/alerte/feed/",
  },
  {
    name: "LeMagIT Sécurité",
    url: "https://www.lemagit.fr/rss/Securite",
  },
  {
    name: "Zataz",
    url: "https://www.zataz.com/feed/",
  },
] as const;

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

async function fetchFeed(
  feedUrl: string,
  sourceName: string
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

export default function CyberNewsPage() {
  const { t, locale } = useLanguage();
  const cn = t.cyberNews;

  const [articles, setArticles] = React.useState<Article[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function loadFeeds() {
      setLoading(true);
      setError(null);

      try {
        const results = await Promise.all(
          FEEDS.map((feed) => fetchFeed(feed.url, feed.name))
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

  const dateFormatter = React.useMemo(
    () =>
      new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    [locale]
  );

  return (
    <main className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans">
      <div className="flex-1 pt-24 px-6 pb-12">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text drop-shadow-[0_2px_16px_rgba(0,255,194,0.2)]">
              {cn.title}
            </h1>
            <p className="mt-3 max-w-2xl text-brand-text-muted">{cn.subtitle}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {FEEDS.map((feed) => (
                <span
                  key={feed.name}
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

          {!loading && !error && articles.length === 0 && (
            <p className="text-center text-brand-text-muted py-16">
              {cn.noArticles}
            </p>
          )}

          {!loading && !error && articles.length > 0 && (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <article
                  key={`${article.link}-${index}`}
                  className="group flex flex-col rounded-2xl p-5 md:p-6 bg-[rgba(21,26,33,0.5)] backdrop-blur-lg border border-[rgba(0,255,194,0.1)] transition duration-200 hover:border-brand-mint hover:shadow-[0_0_20px_rgba(0,255,194,0.15)]"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold text-brand-mint border border-brand-mint/25 bg-brand-mint/5">
                      {article.source}
                    </span>
                    <time
                      dateTime={article.pubDate.toISOString()}
                      className="text-xs text-brand-text-muted whitespace-nowrap"
                    >
                      {dateFormatter.format(article.pubDate)}
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

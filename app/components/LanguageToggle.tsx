"use client";

import { useLanguage } from "../i18n/LanguageProvider";
import type { Locale } from "../i18n/types";

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  function handleSwitch(next: Locale) {
    if (next !== locale) setLocale(next);
  }

  return (
    <div
      className="inline-flex items-center rounded-full border border-[rgba(0,255,194,0.25)] bg-[rgba(0,255,194,0.06)] p-0.5"
      role="group"
      aria-label={t.nav.switchLanguage}
    >
      {(["fr", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => handleSwitch(code)}
          className={[
            "rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
            locale === code
              ? "bg-brand-mint text-brand-bg shadow-[0_0_12px_rgba(0,255,194,0.25)]"
              : "text-brand-text-muted hover:text-brand-mint",
          ].join(" ")}
          aria-pressed={locale === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

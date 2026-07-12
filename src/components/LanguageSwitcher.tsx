"use client";

import { useCallback } from "react";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";

interface LanguageSwitcherProps {
  currentLang: Lang;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const toggleLang = useCallback(() => {
    const nextLang = currentLang === "en" ? "id" : "en";
    document.cookie = `lang=${nextLang};path=/;max-age=${60 * 60 * 24 * 365}`;
    window.location.reload();
  }, [currentLang]);

  const label = translations[currentLang].languageLabel;

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1.5 text-sm font-medium  border border-charcoal/20 hover:border-gold hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      aria-label={`Switch to ${translations[currentLang].language}`}
    >
      {label}
    </button>
  );
}

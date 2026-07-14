"use client";

import { useCallback } from "react";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import { cn } from "@/lib/utils";
import { IoLanguage } from "react-icons/io5";

interface LanguageSwitcherProps {
  currentLang: Lang;
  className?: string;
}

export default function LanguageSwitcher({ currentLang, className = "" }: LanguageSwitcherProps) {
  const toggleLang = useCallback(() => {
    const nextLang = currentLang === "en" ? "id" : "en";
    document.cookie = `lang=${nextLang};path=/;max-age=${60 * 60 * 24 * 365}`;
    window.location.reload();
  }, [currentLang]);

  const label = translations[currentLang].languageLabel;

  return (
    <button
      onClick={toggleLang}
      className={cn("font-medium transition-colors cursor-pointer flex items-center justify-center gap-2", className)}
      aria-label={`Switch to ${translations[currentLang].language}`}
    >
      <IoLanguage />
      {label}
    </button>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import WhatsAppButton from "./WhatsAppButton";

interface HeaderProps {
  lang: Lang;
}

export default function Header({ lang }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = translations[lang].nav;

  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 100);

      if (currentScrollY > 200 && currentScrollY > prevScrollY.current) {
        setVisible(false);
      } else if (currentScrollY < prevScrollY.current || currentScrollY < 200) {
        setVisible(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!visible) setMobileOpen(false);
  }, [visible]);

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/programs", label: t.programs },
    { href: "/about", label: t.about },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const transparent = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
        } ${!visible ? "" : transparent
          ? "bg-transparent"
          : "bg-surface text-background shadow-sm"
        }`}
    >
      <div >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 px-6 lg:px-8">
            <span
              className={`font-heading text-xl font-semibold hidden sm:inline transition-colors ${transparent ? "text-warm-white" : "text-maroon"
                }`}
            >
              International.degree
            </span>
          </Link>

          <nav className="hidden md:flex items-center">
            <div className="md:flex items-center gap-8 mr-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors focus-visible:outline-none ${isActive(link.href)
                    ? transparent
                      ? "text-warm-white"
                      : "text-maroon"
                    : transparent
                      ? "text-warm-white/70 hover:text-warm-white"
                      : "text-charcoal/70 hover:text-maroon"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <LanguageSwitcher
              className="text-lg h-16 md:h-20 bg-dark text-white px-6 py-3 lg:px-8 lg:py-4 border-r border-white/20"
              currentLang={lang} />
            <WhatsAppButton
              label={t.consult}
              variant="secondary"
              className="h-16 md:h-20 text-lg"
              message="Hello International.degree, I would like to consult about an academic program suitable for my education and professional experience."
            />
          </nav>

          <button
            className={`md:hidden p-2  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${transparent ? "hover:bg-warm-white/10" : "hover:bg-charcoal/5"
              }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={`md:hidden border-t ${transparent ? "border-warm-white/20 bg-burgundy/95" : "border-charcoal/10 bg-warm-white"
            }`}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-lg font-medium py-2 transition-colors ${isActive(link.href)
                  ? transparent
                    ? "text-warm-white"
                    : "text-maroon"
                  : transparent
                    ? "text-warm-white/70 hover:text-warm-white"
                    : "text-charcoal/70 hover:text-maroon"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-16 md:h-20">
              <LanguageSwitcher currentLang={lang} />
            </div>

            <WhatsAppButton
              label={t.consult}
              variant="secondary"
              className="h-16 md:h-20"
              message="Hello International.degree, I would like to consult about an academic program suitable for my education and professional experience."
            />
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import type { FAQItem } from "@/data/faqs";
import type { Lang } from "@/data/settings";

interface FAQProps {
  items: FAQItem[];
  lang: Lang;
  title?: string;
}

export default function FAQ({ items, lang, title }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-maroon font-heading text-center mb-10">
          {title}
        </h2>
      )}
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-charcoal/10 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-heading font-semibold text-maroon hover:bg-warm-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
                aria-expanded={isOpen}
              >
                <span>{item.question[lang]}</span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform ml-4 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-charcoal/70 leading-relaxed">
                  {item.answer[lang]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

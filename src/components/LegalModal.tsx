"use client";

import { useState } from "react";

interface LegalSection {
  id: string;
  title: string;
  content: string;
}

interface LegalModalProps {
  sections: LegalSection[];
}

export default function LegalModal({ sections }: LegalModalProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {sections.map((section) => {
        const isOpen = openId === section.id;
        return (
          <div key={section.id} className="border border-charcoal/10  overflow-hidden bg-surface text-background">
            <button
              onClick={() => setOpenId(isOpen ? null : section.id)}
              className="w-full flex items-center justify-between px-6 py-4 text-left text-lg font-heading font-semibold text-maroon hover:bg-warm-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
              aria-expanded={isOpen}
            >
              <span>{section.title}</span>
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
              <div className="px-6 pb-5 text-charcoal/70 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

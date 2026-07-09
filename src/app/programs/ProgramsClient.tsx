"use client";

import { useState } from "react";
import type { Lang } from "@/data/settings";
import { programs } from "@/data/programs";
import ProgramCard from "@/components/ProgramCard";

interface ProgramsClientProps {
  lang: Lang;
  categories: readonly string[];
  allLabel: string;
  viewLabel: string;
  whatsappLabel: string;
  emptyTitle: string;
  emptyDescription: string;
}

export default function ProgramsClient({
  lang,
  categories,
  allLabel,
  viewLabel,
  whatsappLabel,
  emptyTitle,
  emptyDescription,
}: ProgramsClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? programs.filter((p) => p.isPublished)
      : programs.filter((p) => p.category === activeCategory && p.isPublished);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 ${
              activeCategory === cat
                ? "bg-maroon text-warm-white"
                : "bg-white border border-charcoal/10 text-charcoal/70 hover:border-maroon hover:text-maroon"
            }`}
          >
            {cat === "All" ? allLabel : cat}
          </button>
        ))}
      </div>

      {/* Program Cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program) => (
            <ProgramCard
              key={program.slug}
              program={program}
              lang={lang}
              viewLabel={viewLabel}
              whatsappLabel={whatsappLabel}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl font-heading text-maroon mb-2">{emptyTitle}</p>
          <p className="text-charcoal/60">{emptyDescription}</p>
        </div>
      )}
    </div>
  );
}

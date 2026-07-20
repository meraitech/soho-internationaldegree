"use client";

import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import type { Program } from "@/data/programs";
import { settings, type Lang } from "@/data/settings";

interface ProgramCardProps {
  program: Program;
  lang: Lang;
  viewLabel?: string;
  whatsappLabel?: string;
}

export default function ProgramCard({ program, lang, viewLabel = "View Details", whatsappLabel = "Ask via WhatsApp" }: ProgramCardProps) {
  const whatsappNumber = settings.whatsappNumber;
  const whatsappMessage = encodeURIComponent(
    `Hello International.degree, I would like to learn more about the ${program.name[lang]}.`
  );

  const formattedFee = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(program.fee);

  return (
    <Link
      href={`/programs/${program.slug}`}
      className="bg-surface text-background flex flex-col hover:shadow-md transition-shadow aspect-square"
    >
      <div className="h-2 bg-linear-to-r from-black" />
      <div className="p-8 flex flex-col flex-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">
          {program.category}
        </span>
        <h3 className="text-xl font-heading font-semibold text-maroon mb-3">
          {program.name[lang]}
        </h3>
        <p className="text-charcoal/60 text-sm mb-6 leading-relaxed line-clamp-2">
          {program.description[lang]}
        </p>
        <div className="mt-auto space-y-4">
          <div className="text-lg font-heading text-maroon">
            {formattedFee}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
            }}
            className="mt-4 font-semibold flex items-center max-w-sm gap-3 group cursor-pointer"
          >
            <FaArrowRightLong className="h-10 w-10 p-3 rounded-full shrink-0 aspect-square text-foreground bg-background" />
            <span className="group-hover:underline">
              {whatsappLabel}
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
}

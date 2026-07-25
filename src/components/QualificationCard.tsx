"use client";

import Link from "next/link";
import { FaArrowRightLong, FaGraduationCap, FaBookOpen, FaFlask, FaAward, FaCertificate } from "react-icons/fa6";
import { settings } from "@/data/settings";
import type { Lang } from "@/data/settings";
import type { QualificationType } from "@/data/programs";

const iconMap: Record<string, React.ReactNode> = {
  FaGraduationCap: <FaGraduationCap className="text-4xl" />,
  FaBookOpen: <FaBookOpen className="text-4xl" />,
  FaFlask: <FaFlask className="text-4xl" />,
  FaAward: <FaAward className="text-4xl" />,
  FaCertificate: <FaCertificate className="text-4xl" />,
};

interface QualificationCardProps {
  qualification: QualificationType;
  lang: Lang;
  ctaLabel: string;
}

export default function QualificationCard({ qualification, lang, ctaLabel }: QualificationCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello International.degree, I'm interested in the ${qualification.name.en} pathway. I have professional experience and would like to know more about how to qualify.`
  );

  return (
    <Link
      href={`/programs/${qualification.slug}`}
      className="bg-surface text-background flex flex-col hover:shadow-md transition-shadow aspect-square"
    >
      <div className="h-2 bg-linear-to-r from-black" />
      <div className="p-8 flex flex-col flex-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">
          {qualification.kind[lang]}
        </span>
        <div className="text-maroon mb-3">
          {iconMap[qualification.reactIcon] || qualification.icon}
        </div>
        <h3 className="text-xl font-heading font-semibold text-maroon mb-3">
          {qualification.name[lang]}
        </h3>
        <p className="text-charcoal/60 text-sm mb-6 leading-relaxed line-clamp-3">
          {qualification.tagline[lang]}
        </p>
        <div className="mt-auto">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(`https://wa.me/${settings.whatsappNumber}?text=${whatsappMessage}`, "_blank");
            }}
            className="font-semibold flex items-center gap-3 group cursor-pointer"
          >
            <FaArrowRightLong className="h-10 w-10 p-3 rounded-full shrink-0 aspect-square text-foreground bg-background" />
            <span className="group-hover:underline">{ctaLabel}</span>
          </button>
        </div>
      </div>
    </Link>
  );
}

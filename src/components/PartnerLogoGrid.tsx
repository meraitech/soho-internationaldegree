import type { Institution } from "@/data/institutions";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";

interface PartnerLogoGridProps {
  institutions: Institution[];
  lang: Lang;
}

export default function PartnerLogoGrid({ institutions, lang }: PartnerLogoGridProps) {
  if (institutions.length === 0) {
    return (
      <div className="text-center py-12 text-charcoal/40">
        <p>{translations[lang].common.partnerLogoEmpty}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {institutions.map((inst) => (
        <a
          key={inst.slug}
          href={inst.website}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3 p-6 bg-surface text-background border border-charcoal/10  hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          <div className="w-16 h-16 bg-warm-white  flex items-center justify-center text-maroon font-heading font-bold text-xl group-hover:bg-maroon group-hover:text-warm-white transition-colors">
            {inst.logoLabel}
          </div>
          <div className="text-center">
            <p className="font-semibold text-charcoal text-sm group-hover:text-maroon transition-colors">
              {inst.name}
            </p>
            <p className="text-xs text-charcoal/40 mt-1">{inst.country}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

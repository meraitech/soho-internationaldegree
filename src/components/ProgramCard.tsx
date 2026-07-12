import Link from "next/link";
import type { Program } from "@/data/programs";
import type { Lang } from "@/data/settings";

interface ProgramCardProps {
  program: Program;
  lang: Lang;
  viewLabel?: string;
  whatsappLabel?: string;
}

export default function ProgramCard({ program, lang, viewLabel = "View Programs", whatsappLabel = "Ask via WhatsApp" }: ProgramCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello International.degree, I would like to learn more about the ${program.name[lang]}.`
  );

  return (
    <div className="bg-surface text-background border p-6 flex flex-col hover:shadow-md transition-shadow">
      <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">
        {program.category}
      </span>
      <h3 className="text-xl font-heading font-semibold text-maroon mb-2">
        {program.name[lang]}
      </h3>
      <p className="text-charcoal/60 text-sm mb-4 line-clamp-2">
        {program.description[lang]}
      </p>
      <div className="mt-auto space-y-2">
        <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-4">
          {program.institutionName && (
            <span className="truncate">{program.institutionName}</span>
          )}
          <span className="text-charcoal/30">|</span>
          <span>{program.credentialType[lang]}</span>
        </div>
        <div className="flex gap-3">
          <Link
            href={`/programs/${program.slug}`}
            className="flex-1 text-center px-4 py-2.5 border-2 border-maroon text-maroon  text-sm font-semibold hover:bg-maroon hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
          >
            {viewLabel}
          </Link>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890"}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 bg-maroon text-warm-white  text-sm font-semibold hover:bg-maroon-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
          >
            {whatsappLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

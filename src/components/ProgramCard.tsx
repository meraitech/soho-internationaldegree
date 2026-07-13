import Link from "next/link";
import type { Program } from "@/data/programs";
import type { Lang } from "@/data/settings";
import MyLink from "./ui/my-link";

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
          <MyLink
            variant="secondary"
            link={{
              href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890"}?text=${whatsappMessage}`,
              label: whatsappLabel
            }} />
        </div>
      </div>
      {/* {viewLabel} */}
    </Link>
  );
}

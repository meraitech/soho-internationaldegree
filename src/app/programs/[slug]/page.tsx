import { notFound } from "next/navigation";
import Link from "next/link";
import { cookies } from "next/headers";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import { programs, getProgramBySlug } from "@/data/programs";
import WhatsAppButton from "@/components/WhatsAppButton";
import FinalCTA from "@/components/FinalCTA";

export async function generateStaticParams() {
  return programs
    .filter((p) => p.isPublished)
    .map((p) => ({ slug: p.slug }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].programs;
  const d = t.programDetail;

  const program = getProgramBySlug(slug);
  if (!program || !program.isPublished) {
    notFound();
  }

  const whatsappMessage = `Hello International.degree, I would like to ask about ${program.name[lang]} from ${program.institutionName}. Please provide more information about eligibility, duration, requirements, and fees.`;

  return (
    <main>
      {/* Program Detail */}
      <section className="bg-gradient-to-br from-burgundy via-maroon to-burgundy text-warm-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/programs"
            className="inline-flex items-center text-warm-white/60 hover:text-warm-white transition-colors mb-6 text-sm"
          >
            &larr; {t.backToPrograms}
          </Link>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 block">
              {program.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading leading-tight mb-4">
              {program.name[lang]}
            </h1>
            <p className="text-warm-white/70 text-lg mb-6">
              {program.description[lang]}
            </p>
            <WhatsAppButton
              label={t.detailCTA}
              message={whatsappMessage}
              variant="gold"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-maroon mb-3">{d.overview}</h2>
              <p className="text-charcoal/70 leading-relaxed">{program.overview[lang]}</p>
            </div>

            {/* Grid Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoBlock label={d.credentialType} value={program.credentialType[lang]} />
              <InfoBlock label={d.institution} value={program.institutionName} />
              <InfoBlock label={d.studyMethod} value={program.studyMethod[lang]} />
              <InfoBlock label={d.duration} value={program.duration[lang]} />
            </div>

            {/* Suitable Applicants */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-maroon mb-3">{d.suitable}</h2>
              <p className="text-charcoal/70 leading-relaxed">{program.suitableApplicants[lang]}</p>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-maroon mb-3">{d.eligibility}</h2>
              <p className="text-charcoal/70 leading-relaxed">{program.eligibility[lang]}</p>
            </div>

            {/* Documents */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-maroon mb-3">{d.documents}</h2>
              <p className="text-charcoal/70 leading-relaxed">{program.requiredDocuments[lang]}</p>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-maroon mb-3">{d.curriculum}</h2>
              <p className="text-charcoal/70 leading-relaxed">{program.curriculumSummary[lang]}</p>
            </div>

            {/* Assessment */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-maroon mb-3">{d.assessment}</h2>
              <p className="text-charcoal/70 leading-relaxed">{program.assessmentMethod[lang]}</p>
            </div>

            {/* Graduation */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-maroon mb-3">{d.graduation}</h2>
              <p className="text-charcoal/70 leading-relaxed">{program.graduationRequirements[lang]}</p>
            </div>

            {/* Fees */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-maroon mb-3">{d.fees}</h2>
              <p className="text-charcoal/70 leading-relaxed">{program.feeInformation[lang]}</p>
            </div>

            {/* Accreditation */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-maroon mb-3">{d.accreditation}</h2>
              <p className="text-charcoal/70 leading-relaxed">{program.accreditationInformation[lang]}</p>
            </div>

            {/* Disclosure */}
            <div className="bg-surface text-background border border-gold/30  p-6">
              <h2 className="text-lg font-heading font-semibold text-maroon mb-2">{d.disclosure}</h2>
              <p className="text-charcoal/60 text-sm leading-relaxed">{program.disclosure[lang]}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <WhatsAppButton
              label={t.detailCTA}
              message={whatsappMessage}
              size="lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FinalCTA
            headline={t.finalCTA}
            description={t.finalCTADescription}
            ctaMessage={whatsappMessage}
          />
        </div>
      </section>
    </main>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface text-background border border-charcoal/10  p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1">{label}</p>
      <p className="text-charcoal font-medium">{value}</p>
    </div>
  );
}

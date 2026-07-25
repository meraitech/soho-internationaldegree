import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import { qualificationTypes, getQualificationBySlug } from "@/data/programs";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTA13 from "@/components/cta-13";
import MyContainer from "@/components/ui/my-container";

export async function generateStaticParams() {
  return qualificationTypes
    .filter((q) => q.isPublished)
    .map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].seo.programDetail;
  const qt = getQualificationBySlug(slug);

  if (!qt || !qt.isPublished) return {};

  const title = `${qt.name[lang]} — ${t.titleSuffix}`;
  const description = qt.tagline[lang];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function QualificationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].programs;
  const d = t.programDetail;

  const qt = getQualificationBySlug(slug);
  if (!qt || !qt.isPublished) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hello International.degree, I'm interested in the ${qt.name.en} pathway. I have professional experience and would like to know more about how to qualify.`
  );

  return (
    <main>
      <section className="relative py-16 md:py-24 overflow-hidden bg-foreground text-background">
        <Image
          src={`/programs/${qt.slug}.jpg`}
          alt={qt.name[lang]}
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-foreground via-foreground/70" />
        <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8 text-warm-white">
          <Link
            href="/programs"
            className="inline-flex items-center text-warm-white/60 hover:text-warm-white transition-colors mb-6 text-sm"
          >
            {t.backToPrograms}
          </Link>
          <div className="max-w-3xl">
            <span className="text-3xl mb-4 block">{qt.icon}</span>
            <h1 className="text-4xl md:text-5xl font-heading leading-tight mb-4">
              {qt.name[lang]}
            </h1>
            <p className="text-warm-white/70 text-lg mb-6">
              {qt.tagline[lang]}
            </p>
            <WhatsAppButton
              label={t.detailCTA}
              variant="secondary"
              message={whatsappMessage}
            />
          </div>
        </div>
      </section>

      <MyContainer>
        <div className="mb-14">
          <h2 className="text-2xl font-heading font-semibold text-maroon mb-4">{d.overview}</h2>
          <p className="text-charcoal/70 leading-relaxed text-lg whitespace-pre-line">{qt.description[lang]}</p>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-heading font-semibold text-maroon mb-4">{d.suitable}</h2>
          <p className="text-charcoal/70 leading-relaxed text-lg">{qt.suitableFor[lang]}</p>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-heading font-semibold text-maroon mb-4">{d.features}</h2>
          <ul className="space-y-3">
            {qt.features[lang].map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-charcoal/70">
                <span className="text-maroon font-bold shrink-0 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface text-background border border-gold/30 p-6 mb-14">
          <h2 className="text-lg font-heading font-semibold text-maroon mb-2">{d.disclosure}</h2>
          <p className="text-charcoal/60 text-sm leading-relaxed">{qt.disclosure[lang]}</p>
        </div>

        <div className="text-center">
          <WhatsAppButton
            label={t.detailCTA}
            message={whatsappMessage}
            size="lg"
          />
        </div>
      </MyContainer>

      <CTA13 lang={lang} />
    </main>
  );
}

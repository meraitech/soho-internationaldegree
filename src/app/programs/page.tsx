import { cookies } from "next/headers";
import type { Metadata } from "next";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import { qualificationTypes } from "@/data/programs";
import QualificationCard from "@/components/QualificationCard";
import CTA13 from "@/components/cta-13";
import MyContainer from "@/components/ui/my-container";
import MyPadding from "@/components/ui/my-padding";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].seo.programs;
  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
    },
    twitter: {
      title: t.title,
      description: t.description,
    },
  };
}

export default async function ProgramsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].programs;

  return (
    <main>
      <section className="bg-surface text-background py-16 md:py-24">
        <MyPadding>
          <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-4">
                {t.pageTitle}
              </h1>
              <p className="text-lg md:text-xl text-warm-white/80 mb-8">
                {t.pageDescription}
              </p>
            </div>
          </div>
        </MyPadding>
      </section>

      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualificationTypes.filter((qt) => qt.isPublished).map((qt) => (
            <QualificationCard
              key={qt.slug}
              qualification={qt}
              lang={lang}
              ctaLabel={t.detailCTA}
            />
          ))}
        </div>
      </MyContainer>

      <CTA13 lang={lang} />
    </main>
  );
}

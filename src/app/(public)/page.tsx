import Image from "next/image";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import { qualificationTypes } from "@/data/programs";
import { faqs } from "@/data/faqs";
import { images } from "@/lib/images";
import SectionHeading from "@/components/SectionHeading";
import MyCard from "@/components/ui/my-card";
import MyContainer from "@/components/ui/my-container";
import MyLink from "@/components/ui/my-link";
import MyPadding from "@/components/ui/my-padding";
import CertificateItems from "@/components/Certificate";
import { certificates } from "@/data/certificates";
import QualificationCard from "@/components/QualificationCard";
import JsonLd from "@/components/JsonLd";

import { Hero4 } from "@/components/Hero4";
import Faq4 from "@/components/faq-4";
import CTA13 from "@/components/cta-13";
import { SocialProof9 } from "@/components/social-proof-9";
import { Features1 } from "@/components/features-1";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].seo.home;
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

export default async function HomePage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].home;
  const homeFaqs = faqs.home;

  return (
    <main>
      {/* Hero */}
      <Hero4 buttonLabel={t.heroCTA} headline={t.heroHeadline} whatsappMessage={t.whatsappConsult} />

      {/* Trust Information */}
      <MyContainer>
        <SectionHeading
          title={t.trustTitle}
          description={t.trustDescription}
          link={{ href: "/about", label: t.trustLinkLabel }}
        />
        <MyCard items={t.trustItems.map((item: { title: string; description: string }, i: number) => ({ title: item.title, description: item.description, imageSrc: `/img/why${i + 1}.jpg` }))} />
      </MyContainer>

      {/* About International.degree */}
      <MyContainer>
        <SectionHeading
          title={t.aboutTitle}
          description={t.aboutSubtext}
          link={{ href: "/programs", label: t.aboutLinkLabel }}
        />
        <div className="w-full relative flex px-4 sm:px-6 lg:px-8 h-180 items-center">
          <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-black z-1" />
          <Image src={images.about} alt={t.aboutTitle} className="absolute inset-0 w-full h-full object-cover z-0 opacity-70" />
          <div className="flex flex-col gap-4 z-10 max-w-xl">
            <p >
              {t.aboutDescription}
            </p>
            <p>
              {t.aboutExtraDescription}
            </p>
            <MyLink link={{ href: "/about", label: t.aboutCTA }} />
            <MyLink link={{ href: "/about", label: t.heroCTA }} />
          </div>
        </div>
      </MyContainer>

      {/* Certificate */}
      <MyPadding>
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <SectionHeading
            title={t.certificateTitle}
            description={t.certificateDescription}
          />
        </div>
        <CertificateItems items={certificates} lang={lang} />
      </MyPadding>

      {/* Your Qualification Path */}
      <MyContainer>
        <SectionHeading
          title={t.programsTitle}
          description={t.programsDescription}
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualificationTypes.filter((q) => q.isPublished).map((q) => (
            <QualificationCard
              key={q.slug}
              qualification={q}
              lang={lang}
              ctaLabel={t.askWhatsApp}
            />
          ))}
        </div>
      </MyContainer>


      {/* How It Works */}
      <Features1 title={t.howItWorksTitle} steps={t.howItWorksSteps} descriptions={t.howItWorksDescriptions} />

      {/* Suitable Applicants */}
      <MyContainer>
        <SectionHeading
          title={t.suitableTitle}
          description={t.suitableDescription}
        />
        <MyCard items={t.suitableItems.map((item: { title: string }, i: number) => ({ title: item.title, imageSrc: images.suitable[i].src }))} />
      </MyContainer>

      {/* Partner Institutions */}
      <SocialProof9 lang={lang} />

      {/* FAQ */}
      <Faq4 lang={lang} faqs={homeFaqs} />

      {/* Final CTA */}
      <CTA13 lang={lang} />

      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question[lang],
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer[lang],
            },
          })),
        }}
      />
    </main>
  );
}

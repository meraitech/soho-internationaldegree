import { cookies } from "next/headers";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import { programs } from "@/data/programs";
import { faqs } from "@/data/faqs";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import MyCard from "@/components/ui/my-card";
import MyContainer from "@/components/ui/my-container";
import MyLink from "@/components/ui/my-link";
import MyPadding from "@/components/ui/my-padding";
import CertificateItems from "@/components/Certificate";
import { certificates } from "@/data/certificates";

import { Hero4 } from "@/components/Hero4";
import Faq4 from "@/components/faq-4";
import CTA13 from "@/components/cta-13";
import { SocialProof9 } from "@/components/social-proof-9";
import { Features1 } from "@/components/features-1";

export default async function HomePage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].home;
  const published = programs.filter((p) => p.isPublished);
  const homeFaqs = faqs.home;

  return (
    <main>
      {/* Hero */}
      <Hero4 buttonLabel={t.heroCTA} />

      {/* Trust Information */}
      <MyContainer>
        <SectionHeading
          title={t.trustTitle}
          description="Credibility built on international accreditation and transparent academic pathways for experienced professionals."
          link={{ href: "#", label: "See how your experience can be recognized" }}
        />
        <MyCard items={t.trustItems.map((item: { title: string; description: string }) => ({ title: item.title, description: item.description }))} />
      </MyContainer>

      {/* About International.degree */}
      <MyContainer>
        <SectionHeading
          title={t.aboutTitle}
          description="Bridging professional experience with international academic recognition."
          link={{ href: "/programs", label: "Explore our programs" }}
        />
        <div className="w-full relative flex px-4 sm:px-6 lg:px-8 h-180 items-center">
          <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-black z-1" />
          <img src="/img/about.jpg" alt="About International.degree" className="absolute inset-0 w-full h-full object-cover z-0 opacity-70" />
          <div className="flex flex-col gap-4 z-10 max-w-xl">
            <p >
              {t.aboutDescription}
            </p>
            <p>
              We guide you through every step — from eligibility review to credential verification — so you can focus on what matters most.
            </p>
            <MyLink link={{ href: "/about", label: t.aboutCTA }} />
            <MyLink link={{ href: "/about", label: "Consult via WhatsApp" }} />
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

      {/* Available Programs */}
      <MyContainer>
        <SectionHeading
          title={t.programsTitle}
          description={t.programsDescription}
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {published.map((program) => (
            <ProgramCard
              key={program.slug}
              program={program}
              lang={lang}
              viewLabel={t.viewPrograms}
              whatsappLabel={t.askWhatsApp}
            />
          ))}
        </div>
      </MyContainer>


      {/* How It Works */}
      <Features1 title={t.howItWorksTitle} steps={t.howItWorksSteps} />

      {/* Suitable Applicants */}
      <MyContainer>
        <SectionHeading
          title={t.suitableTitle}
          description={t.suitableDescription}
        />
        <MyCard items={t.suitableItems.map((item: { title: string }, i: number) => ({ title: item.title, imageSrc: `/img/suitable-${i + 1}.jpg` }))} />
      </MyContainer>

      {/* Partner Institutions */}
      <SocialProof9 />

      {/* FAQ */}
      <Faq4 />

      {/* Final CTA */}
      <CTA13 />
    </main>
  );
}

import { cookies } from "next/headers";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import { programs } from "@/data/programs";
import { institutions } from "@/data/institutions";
import { faqs } from "@/data/faqs";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProgramCard from "@/components/ProgramCard";
import PartnerLogoGrid from "@/components/PartnerLogoGrid";
import TrustItems from "@/components/TrustItems";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import MyContainer from "@/components/ui/my-container";
import MyLink from "@/components/ui/my-link";
import MyPadding from "@/components/ui/my-padding";
import CertificateItems from "@/components/Certificate";
import { certificates } from "@/data/certificates";
import {
  FaBriefcase,
  FaUserCheck,
  FaCrown,
  FaUsers,
  FaUserGear,
} from "react-icons/fa6";
import { Hero4 } from "@/components/Hero4";

export default async function HomePage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].home;
  const published = programs.filter((p) => p.isPublished);
  const homeFaqs = faqs.home;

  return (
    <main>
      {/* Hero */}
      {/* <section
        className="relative bg-cover bg-center text-warm-white h-180 sm:h-212.5 flex items-center -mt-16 md:-mt-20"
        style={{ backgroundImage: "url('/img/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-background opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background via-transparent pointer-events-none" />
        <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-16 w-full">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading mb-6">
              {t.heroHeadline}
            </h1>
            <p className="max-w-2xl mx-auto">
              {t.heroDescription}
            </p>
            <WhatsAppButton
              label={t.heroCTA}
              message="Hello International.degree, I would like to consult about an academic program suitable for my education and professional experience."
              variant="gold"
            />
          </div>
        </div>
      </section> */}
      <Hero4 buttonLabel={t.heroCTA} />

      {/* Trust Information */}
      <MyContainer>
        <SectionHeading
          title={t.trustTitle}
          description="Harvard alumni and key figures of the American Revolution, John Adams, Samuel Adams, and John Hancock, all signed the Declaration of Independence."
          link={{ href: "#", label: "Learn about their journey to signing the document" }}
        />
        <TrustItems items={t.trustItems.map((item: { title: string; description: string }) => ({ title: item.title, description: item.description }))} />
      </MyContainer>

      {/* About International.degree */}
      <MyContainer>
        <SectionHeading
          title={t.aboutTitle}
          description="Harvard alumni and key figures of the American Revolution, John Adams, Samuel Adams, and John Hancock, all signed the Declaration of Independence."
          link={{ href: "/about", label: "Take a tour" }}
        />
        <div className="w-full relative flex px-4 sm:px-6 lg:px-8 h-180 items-center">
          <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-black z-1" />
          <img src="/img/about.jpg" alt="About International.degree" className="absolute inset-0 w-full h-full object-cover z-0 opacity-70" />
          <div className="flex flex-col gap-4 z-10 max-w-xl">
            <p >
              {t.aboutDescription}
            </p>
            <p>
              Classes resumed for Harvard students on October 5, but students reported to class 20 miles away in Concord, Massachusetts.
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
      <MyContainer>
        <SectionHeading title={t.howItWorksTitle} />
        <HowItWorks steps={t.howItWorksSteps.map((s: string) => s)} />
      </MyContainer>

      {/* Suitable Applicants */}
      <MyContainer>
        <SectionHeading
          title={t.suitableTitle}
          description={t.suitableDescription}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            <FaBriefcase />,
            <FaUserCheck />,
            <FaCrown />,
            <FaUsers />,
            <FaUserGear />,
          ].map((icon, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-5 bg-surface text-background"
            >
              <span className="text-xl text-gold shrink-0">{icon}</span>
              <span className="text-charcoal/80 font-medium">{t.suitableList[index]}</span>
            </div>
          ))}
        </div>
      </MyContainer>

      {/* Partner Institutions */}
      <MyContainer>
        <SectionHeading
          title={t.partnersTitle}
          description={t.partnersDescription}
        />
        <div className="mt-10">
          <PartnerLogoGrid institutions={institutions} lang={lang} />
        </div>
      </MyContainer>

      {/* Why Choose */}
      <MyContainer>
        <SectionHeading title={t.whyChooseTitle}
          description="Harvard alumni and key figures of the American Revolution, John Adams, Samuel Adams, and John Hancock, all signed the Declaration of Independence."
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyChooseList.map((item: { title: string; description: string }, index: number) => (
            <div key={index} className="bg-surface text-background border border-charcoal/10  p-6">
              <h3 className="font-heading font-semibold text-maroon text-lg mb-2">{item.title}</h3>
              <p className="text-charcoal/60 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </MyContainer>

      {/* FAQ */}
      <MyContainer>
        <FAQ
          items={homeFaqs}
          lang={lang}
          title={t.faqTitle}
        />
      </MyContainer>

      {/* Final CTA */}
      <MyContainer>
        <FinalCTA
          headline={t.finalCTA}
          description={t.finalCTADescription}
          ctaMessage="Hello International.degree, I would like to consult about an academic program suitable for my education and professional experience."
        />
      </MyContainer>
    </main>
  );
}

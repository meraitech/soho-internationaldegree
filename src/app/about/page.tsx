import { cookies } from "next/headers";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import { faqs } from "@/data/faqs";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import MyContainer from "@/components/ui/my-container";
import FinalCTA from "@/components/FinalCTA";
import LegalModal from "@/components/LegalModal";
import {
  FaHandshake,
  FaUserGraduate,
  FaClipboardList,
  FaFilePen,
  FaPaperPlane,
  FaComments,
  FaShieldHalved,
} from "react-icons/fa6";
import Faq4 from "@/components/faq-4";

export default async function AboutPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].about;
  const aboutFaqs = faqs.about;

  const legalSections = [
    {
      id: "privacy",
      title: t.privacyPolicy,
      content: "This is a placeholder for the Privacy Policy. The complete policy will be added after legal review.",
    },
    {
      id: "terms",
      title: t.termsConditions,
      content: "This is a placeholder for the Terms and Conditions. The complete terms will be added after legal review.",
    },
    {
      id: "refund",
      title: t.refundPolicy,
      content: "This is a placeholder for the Refund Policy. The complete policy will be added after legal review.",
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-burgundy via-maroon to-burgundy text-warm-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-4">
              {t.pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-warm-white/80 mb-8">
              {t.pageDescription}
            </p>
            <WhatsAppButton
              label="Consult via WhatsApp"
              message="Hello International.degree, I would like to learn more about your services and consultation process."
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-surface text-background">
        <MyContainer>
          <SectionHeading title={t.storyTitle} />
          <p className="text-lg text-charcoal/70 leading-relaxed">
            {t.storyContent}
          </p>
        </MyContainer>
      </section>

      {/* Our Role */}
      <MyContainer>
        <SectionHeading title={t.roleTitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            <FaHandshake />,
            <FaUserGraduate />,
            <FaClipboardList />,
            <FaPaperPlane />,
            <FaComments />,
            <FaShieldHalved />,
            <FaFilePen />,
          ].map((icon, index) => (
            <div key={index} className="flex items-center gap-4 px-6 py-5 bg-surface text-background">
              <span className="text-xl text-gold shrink-0">{icon}</span>
              <span className="text-charcoal/80">{t.roleList[index]}</span>
            </div>
          ))}
        </div>
      </MyContainer>

      {/* Our Process */}
      <section className="bg-surface text-background">
        <MyContainer>
          <SectionHeading title={t.processTitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.processSteps.map((step: string, index: number) => (
              <div key={index} className="bg-background text-foreground">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-8 bg-maroon text-warm-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-foreground/70">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </MyContainer>
      </section>

      {/* Partner Institution Info */}
      <MyContainer>
        <SectionHeading title={t.partnersTitle} />
        <p className="text-lg text-charcoal/70 leading-relaxed">
          {t.partnersModel}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface text-background p-6">
            <h3 className="font-heading font-semibold text-maroon mb-2">Partner Institution</h3>
            <p className="text-charcoal/60 text-sm">{t.institutionResponsibilities}</p>
          </div>
          <div className="bg-surface text-background p-6">
            <h3 className="font-heading font-semibold text-maroon mb-2">International.degree</h3>
            <p className="text-charcoal/60 text-sm">{t.ourResponsibilities}</p>
          </div>
        </div>
      </MyContainer>

      {/* Verification */}
      <section className="bg-surface text-background">
        <MyContainer>
          <SectionHeading title={t.verificationTitle} />
          <p className="text-lg text-charcoal/70 leading-relaxed">
            {t.verificationIntro}
          </p>
          <ul className="space-y-3">
            {t.verificationLinks.map((item: string, index: number) => (
              <li key={index} className="flex items-center gap-2 text-charcoal/60">
                <span className="text-gold">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890"}?text=${encodeURIComponent("Hello International.degree, I need assistance verifying an institution or credential.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon font-semibold hover:text-maroon-light transition-colors focus-visible:outline-none focus-visible:underline"
            >
              {t.verificationCTA}
            </a>
          </p>
        </MyContainer>
      </section>

      {/* Academic Disclosure */}
      <section id="disclosure" className="bg-warm-white border-y border-charcoal/10">
        <MyContainer>
          <SectionHeading title={t.disclosureTitle} />
          <ul className="space-y-4">
            {t.disclosureItems.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-charcoal/70">
                <span className="text-maroon font-bold shrink-0 mt-0.5">*</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </MyContainer>
      </section>

      {/* Legal Information */}
      <MyContainer>
        <SectionHeading title={t.legalTitle} />
        <div className="space-y-4 text-charcoal/70">
          <p><strong>Company:</strong> {t.legalCompanyName}</p>
          <p><strong>Address:</strong> {t.legalAddress}</p>
          <p><strong>Email:</strong> {t.legalEmail}</p>
        </div>
        <LegalModal sections={legalSections} />
      </MyContainer>

      {/* FAQ */}
      <Faq4 />

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FinalCTA
            headline={t.finalCTA}
            description={t.finalCTADescription}
            ctaMessage="Hello International.degree, I would like to learn more about your services and consultation process."
          />
        </div>
      </section>
    </main>
  );
}

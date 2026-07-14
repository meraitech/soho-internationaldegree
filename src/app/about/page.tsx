import { cookies } from "next/headers";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import MyContainer from "@/components/ui/my-container";
import MyCard from "@/components/ui/my-card";
import LegalModal from "@/components/LegalModal";
import { FaArrowRightLong } from "react-icons/fa6";
import { Features1 } from "@/components/features-1";
import Faq4 from "@/components/faq-4";
import CTA13 from "@/components/cta-13";
import MyPadding from "@/components/ui/my-padding";

export default async function AboutPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].about;

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
              <WhatsAppButton
                label="Consult via WhatsApp"
                variant="secondary"
                message="Hello International.degree, I would like to learn more about your services and consultation process."
              />
            </div>
          </div>
        </MyPadding>
      </section>

      {/* Our Process */}
      <Features1 title={t.processTitle} steps={t.processSteps} descriptions={t.processDescriptions} />

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
      <MyContainer>
        <SectionHeading
          title={t.verificationTitle}
          description={t.verificationIntro}
          link={{
            href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890"}?text=${encodeURIComponent("Hello International.degree, I need assistance verifying an institution or credential.")}`,
            label: t.verificationCTA
          }}
        />
        <MyCard items={t.verificationLinks.map((item: { title: string; description: string }) => ({ title: item.title, description: item.description }))} />
      </MyContainer>

      {/* Academic Disclosure */}
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
      <CTA13 />
    </main>
  );
}

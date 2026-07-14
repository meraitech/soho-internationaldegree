import { cookies } from "next/headers";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import { programCategories } from "@/data/programs";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProgramsClient from "./ProgramsClient";
import CTA13 from "@/components/cta-13";
import MyContainer from "@/components/ui/my-container";

export default async function ProgramsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].programs;
  const homeT = translations[lang].home;

  const categories = ["All", ...programCategories];

  return (
    <main>
      <section className="bg-gradient-to-br from-burgundy via-maroon to-burgundy text-warm-white py-16 md:py-24">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-4">
              {t.pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-warm-white/80 mb-8">
              {t.pageDescription}
            </p>
            <WhatsAppButton
              label={homeT.heroCTA}
              message="Hello International.degree, I would like to consult about the available international academic programs."
            />
          </div>
        </div>
      </section>

      <MyContainer>
        <ProgramsClient
          lang={lang}
          categories={categories}
          allLabel={t.allCategories}
          viewLabel={homeT.viewPrograms}
          whatsappLabel={homeT.askWhatsApp}
          emptyTitle={t.emptyTitle}
          emptyDescription={t.emptyDescription}
        />
      </MyContainer>

      {/* Final CTA */}
      <CTA13 />
    </main>
  );
}

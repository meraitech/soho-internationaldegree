import { cookies } from "next/headers";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import { programCategories } from "@/data/programs";
import WhatsAppButton from "@/components/WhatsAppButton";
import FinalCTA from "@/components/FinalCTA";
import ProgramsClient from "./ProgramsClient";

export default async function ProgramsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].programs;
  const homeT = translations[lang].home;

  const categories = ["All", ...programCategories];

  return (
    <main>
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
              label={homeT.heroCTA}
              message="Hello International.degree, I would like to consult about the available international academic programs."
              variant="gold"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgramsClient
            lang={lang}
            categories={categories}
            allLabel={t.allCategories}
            viewLabel={homeT.viewPrograms}
            whatsappLabel={homeT.askWhatsApp}
            emptyTitle={t.emptyTitle}
            emptyDescription={t.emptyDescription}
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FinalCTA
            headline={t.finalCTA}
            description={t.finalCTADescription}
          />
        </div>
      </section>
    </main>
  );
}

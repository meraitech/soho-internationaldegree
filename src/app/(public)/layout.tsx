import { cookies } from "next/headers";
import { settings, type Lang } from "@/data/settings";
import Header from "@/components/Header";
import Footer1 from "@/components/footer-1";
import JsonLd from "@/components/JsonLd";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";

  return (
    <>
      <Header lang={lang} />
      <div className="flex-1">
        {children}
      </div>
      <Footer1 lang={lang} />
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "International.degree",
          url: "https://international.degree",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Bintara Perak Blok HH1 No. 58, Griya Bintara Indah",
            addressLocality: "Bekasi",
            addressRegion: "West Java",
            postalCode: "17134",
            addressCountry: "ID",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: settings.whatsappNumber,
            url: `https://wa.me/${settings.whatsappNumber}`,
          },
          description: "Program RPL untuk Profesional Senior. Konversi pengalaman kerja jadi gelar S1, S2, S3 terakreditasi nasional (A) dan internasional (EAO).",
        }}
      />
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "International.degree",
          url: "https://international.degree",
          description: "Program RPL untuk Profesional Senior. Gelar cepat, terakreditasi (A) dan internasional (EAO).",
        }}
      />
    </>
  );
}

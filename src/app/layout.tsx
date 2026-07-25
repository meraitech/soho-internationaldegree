import { Source_Serif_4, Inter } from "next/font/google";
import { cookies } from "next/headers";
import { settings, type Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import "./globals.css";
import Footer1 from "@/components/footer-1";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export async function generateMetadata() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";
  const t = translations[lang].seo.home;

  return {
    metadataBase: new URL("https://international.degree"),
    title: {
      default: t.title,
      template: "%s | International.degree",
    },
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      type: "website",
      locale: lang === "id" ? "id_ID" : "en_US",
      siteName: "International.degree",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value as Lang) || "en";

  return (
    <html
      lang={lang === "id" ? "id" : "en"}
      className={`${sourceSerif.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-warm-white text-charcoal antialiased">
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
            description: "Program RPL untuk Profesional Senior. Konversi pengalaman kerja jadi gelar S1, S2, S3 terakreditasi nasional (A) & internasional (EAO).",
          }}
        />
        <JsonLd
          schema={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "International.degree",
            url: "https://international.degree",
            description: "Program RPL untuk Profesional Senior. Gelar cepat, terakreditasi (A) & internasional (EAO).",
          }}
        />
      </body>
    </html>
  );
}

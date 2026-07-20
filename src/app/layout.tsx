import { Source_Serif_4, Inter } from "next/font/google";
import { cookies } from "next/headers";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import Header from "@/components/Header";
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
  const t = translations[lang].home;

  return {
    title: {
      default: "International.degree — Higher Degree Conferral Through Recognition of Prior Learning (RPL)",
      template: "%s | International.degree",
    },
    description: "International.degree provides higher degree conferral based on the Recognition of Prior Learning (RPL) framework. Nationally accredited degrees (S1, S2, S3) and internationally non-accredited degrees (B.Sc., M.Sc., Dr.Hc., Prof.Hc.) for professionals aged 30+ with SLTA minimum qualification.",
    openGraph: {
      title: "International.degree — Degree Conferral Through RPL",
      description: "Higher degree conferral based on Recognition of Prior Learning (RPL). Nationally and internationally accredited degree pathways for experienced professionals aged 30+.",
      type: "website",
      locale: lang === "id" ? "id_ID" : "en_US",
      siteName: "International.degree",
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
      </body>
    </html>
  );
}

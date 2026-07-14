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
      default: t.heroHeadline + " — " + t.heroDescription.split(".")[0],
      template: "%s | International.degree",
    },
    description: t.heroDescription,
    openGraph: {
      title: t.heroHeadline,
      description: t.heroDescription,
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

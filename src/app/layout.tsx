import { Source_Serif_4, Inter } from "next/font/google";
import { cookies } from "next/headers";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import "./globals.css";

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
      images: [{ url: "/img/hero.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/img/hero.jpg"],
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
      <body className="min-h-screen bg-warm-white text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}

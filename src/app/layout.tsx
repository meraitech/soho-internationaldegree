import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import { cookies } from "next/headers";
import type { Lang } from "@/data/settings";
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

export const metadata: Metadata = {
  title: {
    default: "International.degree — Academic Pathways for Professionals",
    template: "%s | International.degree",
  },
  description: "Explore professional certificates, prior learning assessment, and international degree pathways supported by personal consultation.",
  openGraph: {
    title: "International.degree — Academic Pathways for Professionals",
    description: "Explore professional certificates, prior learning assessment, and international degree pathways supported by personal consultation.",
    type: "website",
    locale: "en_US",
    siteName: "International.degree",
  },
};

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
        <Footer1 />
      </body>
    </html>
  );
}

import Link from "next/link";
import type { Lang } from "@/data/settings";
import { settings } from "@/data/settings";
import { translations } from "@/data/translations";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;

  return (
    <footer className="bg-charcoal text-warm-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-maroon rounded flex items-center justify-center">
                <span className="text-warm-white text-xs font-bold">ID</span>
              </div>
              <span className="font-heading text-xl text-warm-white font-semibold">
                International.degree
              </span>
            </Link>
            <p className="text-warm-white/60 max-w-md">
              {t.description}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-warm-white font-semibold mb-4 text-lg">{t.quickLinks}</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-gold transition-colors text-sm">{navT.home}</Link></li>
              <li><Link href="/programs" className="hover:text-gold transition-colors text-sm">{navT.programs}</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors text-sm">{navT.about}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-warm-white font-semibold mb-4 text-lg">{t.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${settings.email}`} className="hover:text-gold transition-colors">
                  {settings.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${settings.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="text-warm-white/60">{settings.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm text-warm-white/40">
              &copy; {new Date().getFullYear()} {settings.companyName}. {t.rights}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-warm-white/40">
              <Link href="/about#legal" className="hover:text-gold transition-colors">{t.privacyPolicy}</Link>
              <Link href="/about#legal" className="hover:text-gold transition-colors">{t.termsConditions}</Link>
              <Link href="/about#legal" className="hover:text-gold transition-colors">{t.refundPolicy}</Link>
              <Link href="/about#disclosure" className="hover:text-gold transition-colors">{t.academicDisclosure}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

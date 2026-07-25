"use client";

import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { settings, type Lang } from "@/data/settings";
import { translations } from "@/data/translations";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Footer1({ lang }: { lang: Lang }) {
  const t = translations[lang].footer;

  const footerCards = [
    {
      title: t.resources,
      links: [
        { text: t.aboutUs, href: "/about", external: false },
        { text: translations[lang].home.faqTitle, href: "/#faq", external: false },
        { text: t.academicDisclosure, href: "/about", external: false },
      ],
    },
    {
      title: t.contact,
      links: [
        { text: t.consult, href: `https://wa.me/${settings.whatsappNumber}`, external: true },
      ],
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-dark py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {/* Top Section - 4 Columns */}
          <div className="flex max-md:flex-col gap-4 md:justify-between">
            {/* First Column - Branding */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-between space-y-6 mb-6 lg:mb-0"
            >
              {/* Logo */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center bg-surface">
                    <span className="text-lg font-bold text-dark">
                      ID
                    </span>
                  </div>
                  <h3 className="text-lg font-medium">
                    international.degree
                  </h3>
                </div>
                <Link href="https://www.iao.org/Indonesia-WestJava/Yayasan-Hafiz-Indonesia-Emas" className="bg-white w-18 p-1 rounded-full aspect-square">
                  <img src="/assets/seals/iao.png" alt="IAO Seals" className="w-full h-full object-contain" />
                </Link>
              </div>

              {/* Small Text */}
              <div className="mt-auto">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  &copy; {new Date().getFullYear()} International.degree &mdash; {t.rights}
                </p>
              </div>
            </motion.div>

            <div className="flex gap-2">
              {/* Cards - Dynamically Rendered */}
              {footerCards.map((card, index) => {
                let marginClass = "";

                if (index > 0) {
                  marginClass = "-mt-px";
                }

                if (index === 0) {
                  marginClass += " md:mt-0";
                } else if (index === 1) {
                  marginClass += " md:-mt-px md:ml-0";
                } else if (index === 2) {
                  marginClass += " md:-mt-px md:-ml-px";
                }

                marginClass += " lg:mt-0";
                if (index > 0) {
                  marginClass += " lg:-ml-px";
                }

                return (
                  <motion.div
                    key={card.title}
                    variants={itemVariants}
                    className={`group relative min-h-[300px] overflow-hidden border bg-surface aspect-square text-dark p-6 sm:p-8 ${marginClass}`}
                  >
                    <h4 className="mb-6 text-sm font-medium tracking-tight sm:text-base">
                      {card.title}
                    </h4>
                    <ul className="space-y-3">
                      {card.links.map((link) => (
                        <li key={link.text}>
                          <a
                            href={link.href}
                            className="inline-flex font-light items-center gap-1 text-sm transition-colors sm:text-base"
                          >
                            {link.text}
                            {link.external && (
                              <FiArrowUpRight className="h-3 w-3" />
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>
      </div>
    </footer>
  );
}

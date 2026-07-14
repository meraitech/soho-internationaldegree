"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import MyContainer from "./ui/my-container";
import type { Lang } from "@/data/settings";
import type { FAQItem } from "@/data/faqs";
import { translations } from "@/data/translations";

export default function Faq4({ lang, faqs }: { lang: Lang; faqs: FAQItem[] }) {
  const [open, setOpen] = useState(0);
  const t = translations[lang].home;

  return (
    <MyContainer>
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-20" id="faq">
        <div className="relative flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05]"
          >
            {t.faqTitle}
          </motion.h2>
        </div>

        <div className="relative">
          <div className="flex flex-col">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className={`relative py-7 sm:py-9 ${i !== faqs.length - 1
                    ? "border-b"
                    : ""
                    }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-start gap-4 sm:gap-6 text-left cursor-pointer"
                  >
                    <span className="relative text-[11px] mt-1.5 tabular-nums tracking-wider">
                      Q{i + 1}
                    </span>
                    <span className="flex-1 text-base sm:text-lg font-medium">
                      {faq.question[lang]}
                    </span>
                    <span className="w-9 h-9 bg-foreground text-background flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <FaMinus className="w-4 h-4" />
                      ) : (
                        <FaPlus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-start gap-4 sm:gap-6 pt-4">
                          <span aria-hidden className="text-[11px] mt-1.5 tabular-nums tracking-wider invisible">
                            Q{i + 1}
                          </span>
                          <p className="flex-1 pr-12 text-sm sm:text-base leading-relaxed max-w-3xl">
                            {faq.answer[lang]}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </MyContainer>
  );
}

"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import MyPadding from "./ui/my-padding";
import MyContainer from "./ui/my-container";

const faqs = [
    {
        q: "Are partner institutions accredited?",
        a: "Yes, our partner institutions hold accredited status from recognized international accreditation bodies. Specific accreditation information is available for each program.",
    },
    {
        q: "Can the credential be used in Indonesia?",
        a: "Credential recognition in Indonesia depends on the institution, employer, and applicable regulations. We recommend verifying with the relevant Indonesian authorities or your employer.",
    },
    {
        q: "Can my work experience be recognized?",
        a: "Yes. Through our Prior Learning Assessment program, your professional experience can be evaluated for academic credit recognition by our partner institutions.",
    },
    {
        q: "Who issues the credential?",
        a: "Credentials are issued directly by the partner institution, not by International.degree. We are an education facilitator that helps you access and navigate the pathway.",
    },
    {
        q: "How do I verify an institution's accreditation?",
        a: "You can verify an institution by visiting its official website, checking its accreditation status with the relevant accreditation body, or contacting us for verification assistance.",
    },
    {
        q: "What is the role of International.degree?",
        a: "We provide consultation, program recommendation, document assistance, and communication support with institutions. We help you navigate the pathway to your academic goals.",
    },
];

export default function Faq4() {
    const [open, setOpen] = useState(0);

    return (
        <MyPadding>
            <div className="relative w-full overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 right-0 px-4 sm:px-6 lg:px-8">
                    <div className="relative max-w-[1400px] mx-auto w-full h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-20 h-full">
                            <div className="relative hidden lg:block">
                                <div className="absolute inset-y-0 left-0 w-px" />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 w-px" />
                                <div className="absolute inset-y-0 right-0 w-px" />
                            </div>
                        </div>
                    </div>
                </div>

                <MyContainer>
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-20">
                        <div className="relative flex flex-col gap-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05]"
                            >
                                Your questions, answered.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-sm sm:text-base leading-relaxed max-w-sm"
                            >
                                Answers to the most common questions. Still curious? Our team is a message away.
                            </motion.p>
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
                                                    {faq.q}
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
                                                                {faq.a}
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
            </div>
        </MyPadding>
    );
}

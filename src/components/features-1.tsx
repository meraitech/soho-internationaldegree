"use client";

import { motion } from "motion/react";
import { FaCheckSquare } from "react-icons/fa";
import { FaGraduationCap, FaStar, FaWhatsapp } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import MyContainer from "./ui/my-container";

export function Features1() {
    const features = [
        {
            icon: FaWhatsapp,
            title: "Threat Detection",
            description: "Real-time monitoring for suspicious activities.",
        },
        {
            icon: FaGraduationCap,
            title: "Threat Detection",
            description: "Real-time monitoring for suspicious activities.",
        },
        {
            icon: FaCheckSquare,
            title: "Threat Detection",
            description: "Real-time monitoring for suspicious activities.",
        },
        {
            icon: FaStar,
            title: "Threat Detection",
            description: "Real-time monitoring for suspicious activities.",
        },
        {
            icon: FaWhatsapp,
            title: "Threat Detection",
            description: "Real-time monitoring for suspicious activities.",
        },
        {
            icon: FaGraduationCap,
            title: "Threat Detection",
            description: "Real-time monitoring for suspicious activities.",
        },
        {
            icon: FaCheckSquare,
            title: "Threat Detection",
            description: "Real-time monitoring for suspicious activities.",
        },
        {
            icon: FaStar,
            title: "Threat Detection",
            description: "Real-time monitoring for suspicious activities.",
        },
    ];

    return (
        <MyContainer>
            {/* Header */}
            <SectionHeading title={"How It Works"} description="" />

            {/* Features Grid - 2 rows x 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="flex flex-col"
                        >
                            {/* Icon and Title on same line */}
                            <div className="flex items-center gap-3 mb-2">
                                {/* Icon with border and shadow */}
                                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-surface text-background shadow-lg">
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>

                                {/* Title */}
                                <h3 className="text-base tracking-tight font-light">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Description - max 2 lines */}
                            <p className="text-xs tracking-tight font-light max-w-[20ch] sm:text-base text-description leading-relaxed line-clamp-2">
                                {feature.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </MyContainer>
    );
}

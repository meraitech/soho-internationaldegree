"use client";

import { motion } from "motion/react";
import {
  FaFileLines,
  FaStar,
  FaMoneyBill,
} from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import MyContainer from "./ui/my-container";

const icons = [
  FaFileLines,
  FaStar,
  FaMoneyBill,
];

interface Features1Props {
  title: string;
  steps: readonly string[];
  descriptions?: readonly string[];
}

export function Features1({ title, steps, descriptions }: Features1Props) {
  return (
    <MyContainer>
      <SectionHeading title={title} description="" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12">
        {steps.map((step, index) => {
          const Icon = icons[index];
          const description = descriptions?.[index] || "";
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-surface text-background shadow-lg">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base tracking-tight font-light">
                  {step}
                </h3>
              </div>
              <p className="text-xs tracking-tight font-light max-w-[20ch] sm:text-base text-description leading-relaxed line-clamp-2">
                {description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </MyContainer>
  );
}

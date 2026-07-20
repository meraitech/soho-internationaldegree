"use client";

import { InView, useReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import Image from "next/image";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import type { StaticImageData } from "next/image";
import type { Certificate } from "@/data/certificates";
import type { Lang } from "@/data/settings";
import { translations } from "@/data/translations";

interface CertificateItemsProps {
  items: Certificate[];
  lang: Lang;
}

const SPRING = { stiffness: 200, damping: 24, mass: 0.6 };

export default function CertificateItems({ items, lang }: CertificateItemsProps): ReactNode {
  const commonT = translations[lang].common;
  const prefersReducedMotion = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<StaticImageData | string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const previewX = useSpring(mouseX, SPRING);
  const previewY = useSpring(mouseY, SPRING);
  const velocity = useVelocity(previewX);
  const tilt = useTransform(velocity, [-1200, 1200], [-8, 8]);
  const rotate = useSpring(tilt, { stiffness: 260, damping: 30 });

  const handleMove = (event: MouseEvent<HTMLDivElement>): void => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <>
      <div className="scroll-mt-24 pb-24 sm:pb-32">
        <div
          ref={listRef}
          onMouseMove={prefersReducedMotion ? undefined : handleMove}
          onMouseLeave={() => setActive(null)}
          className="border-border relative mt-16 border-t"
        >
          {items.map((item, i) => (
            <InView key={item.slug}>
              <div
                onMouseEnter={() => setActive(i)}
                onClick={() => setModalImage(item.image)}
                className="group border-border border-b"
              >
                <div className="mx-auto flex max-w-360 items-center gap-5 px-5 py-8 sm:gap-8 sm:px-8 sm:py-12 lg:px-10">
                  <span className="text-muted-foreground w-8 shrink-0 font-mono text-xs">
                    0{i + 1}
                  </span>
                  <div className="flex flex-1 flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                    <h3 className="text-foreground text-2xl font-medium tracking-tight transition-transform duration-500 ease-out sm:text-4xl lg:group-hover:translate-x-3">
                      {item.title[lang]}
                    </h3>
                    <p className="text-muted-foreground max-w-md text-sm leading-relaxed lg:max-w-xs">
                      {item.description[lang]}
                    </p>
                  </div>
                  <div
                    className="shrink-0 cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.title[lang]}
                      width={160}
                      height={200}
                      className="h-24 w-20 md:h-28 md:w-24 shrink-0 object-cover transition-transform duration-300 group-hover:scale-105 ring-1 ring-foreground/10"
                    />
                  </div>
                </div>
              </div>
            </InView>
          ))}

          {!prefersReducedMotion && (
            <motion.div
              style={{ x: previewX, y: previewY, rotate }}
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 z-10 hidden lg:block"
            >
              <motion.div
                initial={false}
                animate={{
                  opacity: active !== null ? 1 : 0,
                  scale: active !== null ? 1 : 0.85,
                }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className="relative -mt-44 ml-10 w-[230px] overflow-hidden shadow-[0_30px_70px_-25px_rgba(0,0,0,0.45)]"
              >
                {items.map((item, i) => (
                  <motion.div
                    key={item.slug}
                    initial={false}
                    animate={{ opacity: active === i ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(i > 0 && "absolute inset-0")}
                  >
                    <Image
                      src={item.image}
                      alt={item.title[lang]}
                      width={460}
                      height={614}
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors z-10 cursor-pointer"
              aria-label={commonT.close}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={modalImage}
              alt={commonT.certificateFullView}
              width={1200}
              height={1600}
              className="max-h-[85vh] w-auto object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

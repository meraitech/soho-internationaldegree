"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/images";
import MyContainer from "./ui/my-container";
import MyPadding from "./ui/my-padding";
import WhatsAppButton from "./WhatsAppButton";

const heroImages = images.hero.carousel;

export function Hero4({ buttonLabel, headline, whatsappMessage }: { buttonLabel: string; headline: string; whatsappMessage?: string }) {
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollPositionRef = useRef(0);

    const imgs = heroImages.map((img, i) => ({
        id: i + 1,
        src: img.src,
        alt: `Hero image ${i + 1}`,
    }));

    const allImgs = [...imgs, ...imgs, ...imgs];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        if (isPaused) {
            scrollPositionRef.current = scrollContainer.scrollLeft;
            return;
        }

        let animationFrameId: number;
        const scrollSpeed = 0.5;

        const scroll = () => {
            scrollPositionRef.current += scrollSpeed;

            const maxScroll = scrollContainer.scrollWidth / 3;
            if (scrollPositionRef.current >= maxScroll) {
                scrollPositionRef.current = 0;
            }

            scrollContainer.scrollLeft = scrollPositionRef.current;
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPaused]);

    return (
        <section className="bg-surface text-background">
            <MyPadding>
                {/* Top Section - Label, Title, Subtitle, and CTA */}
                <MyContainer>
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                        className="flex flex-col space-y-3 sm:space-y-4"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] md:whitespace-nowrap">
                            {headline}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        <WhatsAppButton
                            label={buttonLabel}
                            variant="secondary"
                            message={whatsappMessage}
                        />
                    </motion.div>
                </MyContainer>

                {/* Bottom Section - Video Carousel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="w-screen relative left-[calc(-1*var(--scroll-padding))] ml-0"
                    style={
                        {
                            "--scroll-padding": "1rem",
                        } as React.CSSProperties
                    }
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-hidden"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {allImgs.map((img, index) => (
                            <div
                                key={`${img.id}-${index}`}
                                className="shrink-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-[280px] sm:h-[360px] md:h-[400px] overflow-hidden relative group bg-black"
                            >
                                <img
                                    src={img.src}
                                    className="w-full h-full object-cover opacity-80"
                                    alt={img.alt}
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 transition-all duration-300" />

                                {/* Optional: Add small indicator dots */}
                                <div className="absolute bottom-4 left-4 flex gap-1.5">
                                    <div className="w-1.5 h-1.5" />
                                    <div className="w-1.5 h-1.5" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Gradient overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-r from-surface pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-l from-surface pointer-events-none" />
                </motion.div>

                <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

            </MyPadding>
        </section>
    );
}

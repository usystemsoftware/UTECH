import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageLayout from "@/custom/PageLayout";
import { IconRenderer } from "@/custom/IconRenderer";
import {
    TypographyH1,
    TypographyH2,
    TypographyH4,
    TypographyMuted,
    TypographyLead
} from "@/custom/Typography";
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import HeadingSection from '@/custom/HeadingSection';
import { readyWithUSstats } from '@/data/LandingData';
import BubblesBackground from '@/components/BubblesBackground';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorkWithUs() {
    const statsRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                {
                    rotationX: -90,
                    opacity: 0,
                    transformOrigin: 'center bottom',
                },
                {
                    rotationX: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            if (cardsRef.current) {
                const cards = cardsRef.current.children;

                gsap.fromTo(
                    cards,
                    {
                        y: 100,
                        opacity: 0,
                        rotationY: -45,
                        scale: 0.8,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        rotationY: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );

                Array.from(cards).forEach((card) => {
                    const numberElement = card.querySelector('.stat-number');
                    const finalNumber = numberElement?.textContent || '0';
                    const numericValue = parseFloat(finalNumber.replace(/[^\d.]/g, '') || '0');
                    const isPlus = finalNumber.includes('+');
                    const isPercent = finalNumber.includes('%');
                    const isSlash = finalNumber.includes('/');
                    const isDecimal = finalNumber.includes('.');

                    if (numberElement) {
                        gsap.fromTo(
                            numberElement,
                            { textContent: 0 },
                            {
                                textContent: numericValue,
                                duration: 2,
                                ease: 'power2.out',
                                snap: { textContent: isDecimal ? 0.1 : 1 },
                                scrollTrigger: {
                                    trigger: card,
                                    start: 'top 80%',
                                    toggleActions: 'play none none reverse',
                                },
                                onUpdate: function () {
                                    let current = this.targets()[0].textContent;
                                    current = isDecimal ? parseFloat(current).toFixed(1) : Math.round(current);
                                    if (isPlus) numberElement.textContent = current + '+';
                                    else if (isPercent) numberElement.textContent = current + '%';
                                    else if (isSlash) numberElement.textContent = current + '/5';
                                    else numberElement.textContent = current;
                                },
                            }
                        );
                    }

                    card.addEventListener('mouseenter', () => {
                        gsap.to(card, {
                            y: -10,
                            rotationY: 8,
                            rotationX: 4,
                            scale: 1.03,
                            duration: 0.3,
                            ease: 'power2.out',
                        });
                    });

                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, {
                            y: 0,
                            rotationY: 0,
                            rotationX: 0,
                            scale: 1,
                            duration: 0.3,
                            ease: 'power2.out',
                        });
                    });
                });
            }
        }, statsRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative bg-secondary py-16 overflow-x-hidden">
            <PageLayout ref={statsRef}>
                <BubblesBackground />
                <HeadingSection
                    title="Our"
                    highlight="Impact"
                    description="Numbers that demonstrate our commitment to excellence and digital transformation leadership"
                />

                {/* Fixed scroll issue here */}
                <div className="overflow-hidden w-full p-8">
                    <div
                        ref={cardsRef}
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 cursor-pointer"
                    >
                        {readyWithUSstats?.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <Card
                                    className="bg-foreground/80 dark:bg-card h-fit rounded-xl backdrop-blur-md border-none transition-all duration-300 relative overflow-hidden transform-3d"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-2xl"></div>

                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-11 h-11 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center relative z-10 transform-3d`}
                                        >
                                            <IconRenderer name={stat?.icon} size={20} className="text-white" />
                                        </div>
                                        <TypographyH2 className='stat-number text-secondary dark:text-foreground'>
                                            {stat.number}
                                        </TypographyH2>
                                    </div>

                                    <div className="relative z-10">
                                        <TypographyLead className="text-gray-200">
                                            {stat.label}
                                        </TypographyLead>
                                        <p className="text-gray-400 text-sm">
                                            {stat.description}
                                        </p>
                                    </div>

                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                                        className={`h-1 bg-gradient-to-r ${stat.color} rounded-full relative z-10`}
                                    />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
                    <div className="space-y-4 md:col-span-7">
                        <TypographyH1>
                            Ready to work with <br /> us?
                        </TypographyH1>
                        <TypographyLead>
                            We’re here to help you solve your problems!
                        </TypographyLead>
                        <Button className="w-fit">
                            Let’s connect!
                        </Button>
                    </div>

                    <div className="space-y-4 md:col-span-5">
                        <Card className="border-none">
                            <TypographyH4>
                                M/s U Tech (India) PVT LTD
                            </TypographyH4>
                            <TypographyMuted>
                                Office no.02,15, Zeroboyz Chowk, Nehru Nagar, Pune, Pimpri-Chinchwad, Pune, Maharashtra - 411018
                            </TypographyMuted>
                            <div className="flex items-center space-x-2 text-blue-600 font-medium mt-2">
                                <PhoneCall size={18} />
                                <a href="tel:+9270033002" className="hover:underline">
                                    +91 9270033002
                                </a>
                            </div>
                        </Card>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
}

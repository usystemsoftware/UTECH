"use client";

import React, { useEffect, useRef } from 'react';
import { WorldMap } from "@/components/ui/world-map";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Globe, Users, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TypographyH3, TypographyMuted, TypographySmall } from '../../custom/Typography';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);
    const cardRef = useRef(null);
    const bubblesRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance animation
            const tl = gsap.timeline();

            tl.fromTo(titleRef.current,
                { y: 100, opacity: 0, rotationX: -90 },
                { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power3.out" }
            )
                .fromTo(subtitleRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                    "-=0.6"
                )
                .fromTo(buttonsRef.current?.children || [],
                    { y: 30, opacity: 0, scale: 0.8 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
                    "-=0.4"
                );

            // 3D Card Animation
            if (cardRef.current) {
                gsap.set(cardRef.current, {
                    transformPerspective: 1000,
                    transformOrigin: "center center"
                });

                gsap.fromTo(cardRef.current,
                    { rotationY: -90, opacity: 0, scale: 0.8 },
                    { rotationY: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
                );

                // Continuous floating animation
                gsap.to(cardRef.current, {
                    y: -20,
                    rotationY: 5,
                    rotationX: 2,
                    duration: 3,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: -1
                });
            }

            // Bubble animations
            if (bubblesRef.current) {
                const bubbles = bubblesRef.current.children;
                Array.from(bubbles).forEach((bubble, index) => {
                    gsap.to(bubble, {
                        y: -30,
                        x: Math.sin(index) * 20,
                        rotation: 360,
                        scale: 1.2,
                        duration: 4 + index,
                        ease: "power1.inOut",
                        yoyo: true,
                        repeat: -1,
                        delay: index * 0.5
                    });
                });
            }

            // Parallax scroll effect
            gsap.to(heroRef.current, {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    const stats = [
        { number: '11,000+', label: 'Employees Globally', icon: Users },
        { number: '30+', label: 'Years of Excellence', icon: Award },
        { number: '200+', label: 'Global Clients', icon: Globe },
        { number: '40+', label: 'Countries Served', icon: Zap }
    ];

    return (
        <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden bubble-gradient mt-56">
            {/* WorldMap as background */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center">
                <WorldMap
                    dots={[
                        {
                            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
                        },
                        {
                            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        },
                        {
                            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                        },
                        {
                            start: { lat: 51.5074, lng: -0.1278 }, // London
                            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                        },
                    ]}
                />
            </div>
            {/* Main Content */}
            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 items-center">
                    <motion.div className="space-y-8 lg:col-span-8">
                        <div className='flex justify-center items-center w-full text-center'>
                            <TypographySmall className="p-3 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm border border-orange-200">
                                🚀 Digital Engineering & Enterprise Modernization
                            </TypographySmall>
                        </div>
                        <motion.h1
                            ref={titleRef}
                            className="text-xl lg:text-4xl font-bold text-gray-900 leading-tight transform-3d"
                        >
                            Accelerate Your
                            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                                Digital Transformation
                            </span>
                        </motion.h1>
                        <TypographyMuted>
                            Persistent Systems is a global services and solutions company delivering
                            Digital Engineering and Enterprise Modernization to help enterprises
                            accelerate their digital transformation journey.
                        </TypographyMuted>
                        <motion.div
                            ref={buttonsRef}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button>
                                Get Started
                                <ArrowRight size={20} />
                            </Button>
                            <Button variant="outline">
                                <Play size={20} />
                                Watch Demo
                            </Button>
                        </motion.div>
                        {/* Stats */}
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-16 mb-6'>
                            {
                                stats?.map((stat, index) => (
                                    <Card key={index} className="grid gap-1 hover:scale-105 cursor-pointer">
                                        <stat.icon className="text-orange-600" />
                                        <TypographyH3 className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                            {stat.number}
                                        </TypographyH3>
                                        <TypographyMuted className="font-medium">{stat.label}</TypographyMuted>
                                    </Card>
                                ))
                            }
                        </div>
                    </motion.div>

                    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                        <EvervaultCard text="hover" />

                        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                            Hover over this card to reveal an awesome effect. Running out of copy
                            here.
                        </h2>
                        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                            Watch me hover
                        </p>
                    </div>

                    {/* <div className="lg:col-span-4 cursor-pointer perspective-[1000px]">
                        <img
                            src="/small-logo.png"
                            alt="U Logo"
                            className="h-[75vh] w-full transition-transform duration-700 transform-gpu hover:scale-105"
                        />
                    </div> */}

                </div>
            </div>
        </section>
    );
};
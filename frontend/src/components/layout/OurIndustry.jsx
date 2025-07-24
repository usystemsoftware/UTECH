import { motion } from "framer-motion";
import PageLayout from "@/custom/PageLayout";
import HeadingSection from '@/custom/HeadingSection';
import { industries } from "@/data/LandingData";
import { Link } from "react-router-dom";
import { TypographyH4 } from '@/custom/Typography';
import BubblesBackground from "@/components/BubblesBackground";

export default function OurIndustry() {
    const directions = [
        { x: 100, opacity: 0 },
        { x: -100, opacity: 0 },
        { y: -100, opacity: 0 },
    ];

    return (
        <PageLayout className="relative overflow-x-hidden">
            {/* Background Bubbles */}
            <BubblesBackground />
            <HeadingSection
                title="Our"
                highlight="Industry Expertise and Solutions"
                description="Creating business value at the intersection of your industry transformation and today’s latest technology innovation"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mb-10">
                {industries.map((industry, index) => (
                    <motion.div
                        key={industry.name}
                        initial={directions[index % directions.length]}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
                        whileHover={{ scale: 1.05, zIndex: 30 }}
                    >
                        <Link
                            to={industry.path}
                            className={`${industry.color} group overflow-hidden relative aspect-[4/3] flex transition-transform`}
                        >
                            <div className="flex">
                                <TypographyH4 className="bottom-8 absolute p-4 text-white z-10">
                                    {industry.name}
                                </TypographyH4>
                                <motion.img
                                    loading="lazy"
                                    src={`/assets/landing-page/${industry.image}.png`}
                                    alt={industry.name}
                                    initial={{ scale: 1, opacity: 0.8 }}
                                    whileHover={{ opacity: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute right-0 w-fit h-full object-cover group-hover:opacity-90 transition-opacity"
                                />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </PageLayout>
    );
}
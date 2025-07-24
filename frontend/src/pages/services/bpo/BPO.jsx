import { FeaturesList } from "@/components/FeaturesList";
import { Card } from '@/components/ui/card'
import { Check } from "lucide-react";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Headline } from "@/custom/Typography";
import { bpoServices, facilityFeatures, industriesData, servicesData } from "./Data";
import { TypographyH6, TypographyMuted } from "../../../custom/Typography";

const services = [
    "Customer Service",
    "Human Resource Management",
    "Claims Processing",
    "Compliance",
    "Accounting",
    "Infrastructure Support",
    "Data Entry",
    "Sales Enablement",
];

const industries = [
    "Finance",
    "Healthcare",
    "Insurance",
    "Energy",
    "Food & Beverage",
    "Hospitality & Travel",
    "Telecommunications",
    "Transportation",
];

export default function BPO() {
    return (
        <>
            {/* === HERO SECTION === */}
            <HeroSection
                backgroundImage='/assets/services/bpo/hero.avif'
                title="Business Process Outsourcing Services"
                buttonText="HIRE RELIABLE BPO RESOURCE"
                buttonLink="#"
                imageFit="cover"
                overlayOpacity={0.2}
            />

            <PageLayout className="py-16 space-y-8">
                <Headline
                    title='Streamline and automate your non-core processes with our BPO and digital transformation services.'
                    description='Chetu provides front-office and back-office support services to ensure your business runs smoothly as you focus on the core aspects of your company.'
                />

                <div className="flex flex-col md:flex-row justify-center gap-10">
                    {/* Services Box */}
                    <Card className="bg-secondary border-none w-full md:w-1/2">
                        <TypographyH6 className="bg-teal-600 text-white px-4 py-2 rounded-t-xl -mt-6 w-fit mb-4">
                            Services
                        </TypographyH6>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-gray-800">
                            {services.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <Check className="text-primary mt-1" size={18} />
                                    <TypographyMuted>{item}</TypographyMuted>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    {/* Industries Box */}
                    <Card className="bg-secondary border-none w-full md:w-1/2">
                        <TypographyH6 className="bg-teal-600 text-white px-4 py-2 rounded-t-xl -mt-6 w-fit mb-4">
                            Industries
                        </TypographyH6>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-gray-800">
                            {industries.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <Check className="text-primary mt-1" size={18} />
                                    <TypographyMuted>{item}</TypographyMuted>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </PageLayout >


            <PageLayout className='space-y-10 text-center'>
                <Headline
                    title='One-Stop Shop'
                    description='Our specialized industry-specific teams provide skill, intelligence, and efficiency to drive value and growth. With our innovative resources, we will help you increase operational flexibility.'
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FadeInWhenVisible delay={0.5}>
                        <img
                            loading="lazy"
                            src="/assets/services/bpo/one-stop-shop-1.jpg"
                            alt="Portfolio"
                            className="w-135"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList features={bpoServices} fadeUp={fadeUp} />
                </div>

                <FadeInWhenVisible>
                    <Button variant='hover'>
                        HIRE BPO ONE-STOP SHOP
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            <section className="bg-secondary py-16 mt-8">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title='BPO Services'
                        description='We offer a wide variety of BPO services to support your non-core processes and facilitate growth and scalability.'
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FeaturesList features={servicesData.slice(0, 4)} fadeUp={fadeUp} />
                        <FeaturesList features={servicesData.slice(4, 8)} fadeUp={fadeUp} />
                    </div>
                    <FadeInWhenVisible>
                        <Button variant="hover">
                            Get BPO SERVICES
                        </Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            <PageLayout className="space-y-10 py-12 text-center">
                <Headline
                    title='Industries'
                    description='Our BPO services fulfill the needs of companies across various industries, covering key processes to enable your business to have a competitive advantage.'
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FeaturesList features={industriesData.slice(0, 4)} fadeUp={fadeUp} />
                    <FeaturesList features={industriesData.slice(4, 8)} fadeUp={fadeUp} />
                </div>
                <FadeInWhenVisible>
                    <Button variant="hover">
                        HIRE A RELIABLE BPO RESOURCE
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            <section className="py-12 bg-secondary">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title='Infrastructure'
                        description='We have the infrastructure and bandwidth to provide streamlined support as we take on your business processes. Our facilities and resources are secure and reliable.'
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/services/bpo/infrastructure-1.png"
                                alt="Portfolio"
                                className="w-135"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList features={facilityFeatures.slice(0, 2)} fadeUp={fadeUp} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FeaturesList features={facilityFeatures.slice(2, 4)} fadeUp={fadeUp} />
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/services/bpo/infrastructure-2.png"
                                alt="Portfolio"
                                className="w-135"
                            />
                        </FadeInWhenVisible>
                    </div>
                </PageLayout>

            </section>

        </>
    )
}

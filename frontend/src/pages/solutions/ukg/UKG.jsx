import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Check } from "lucide-react";
import {
    Headline,
    TypographyH3,
    TypographySmall
} from "@/custom/Typography";
import {
    categories,
    modules,
    portfolioItems,
    services,
    ukgServices,
    ukgServices2
} from "./Data";

export default function UKG() {
    return (
        <>

            <HeroSection
                backgroundImage="/banner/custom-ukg-banner.jpg"
                title="UKG IMPLEMENTATION SERVICES"
                description="We are UKG Ready Certified Partner Providing Custom Implementation and Consulting Solutions"
                buttonText="GET A FREE QUOTE TODAY"
                buttonLink="#"
            />

            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title="We are Certified UKG Implementation Partner"
                    description="Our developers expertly implement UKG across systems, offering custom solutions, integration, testing, training, and ongoing support. Partnering with U Tech ensures seamless transitions and enhanced payroll, workforce optimization, and HR solutions."
                />

                <FeaturesList
                    features={ukgServices}
                    grid
                    center
                />

                <ContactUsButton variant="hover">
                    REQUEST A QUOTE NOW
                </ContactUsButton>
            </PageLayout >

            <section className="py-16 bg-secondary text-center">
                <PageLayout className="space-y-10">
                    <Headline
                        title="Get Started with UKG Ready Certified Partner"
                        description="As a UKG Ready certified partner, U Tech provides comprehensive implementation services to meet your organization's needs. We specialize in implementing and configuring UKG systems to align with business processes and optimize functions like payroll, talent management, and scheduling. Our services include but are not limited to these UKG products."
                    />

                    <div className="flex justify-between md:max-w-5xl gap-4 mx-auto sm:flex-row flex-col">
                        <div className="space-y-4 text-start">
                            <TypographyH3>
                                UKG Ready Services
                            </TypographyH3>
                            {services?.map((item, index) => (
                                <TypographySmall
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <span>
                                        <Check size={14} className="text-primary" />
                                    </span>
                                    {item}
                                </TypographySmall>
                            ))}
                        </div>
                        <div className="space-y-4 text-start">
                            <TypographyH3>
                                UKG Ready Core Modules
                            </TypographyH3>
                            {categories?.map((item, index) => (
                                <TypographySmall
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <span>
                                        <Check size={14} className="text-primary" />
                                    </span>
                                    {item}
                                </TypographySmall>
                            ))}
                        </div>
                        <div className="space-y-4 text-start">
                            <TypographyH3>
                                UKG Ready Other Modules & Add-ons
                            </TypographyH3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-4 text-start">
                                    {modules?.slice(0, 6).map((item, index) => (
                                        <TypographySmall
                                            key={index}
                                            className="flex items-center gap-4"
                                        >
                                            <span>
                                                <Check size={14} className="text-primary" />
                                            </span>
                                            {item}
                                        </TypographySmall>
                                    ))}
                                </div>
                                <div className="space-y-4 text-start">
                                    {modules?.slice(6, 12).map((item, index) => (
                                        <TypographySmall
                                            key={index}
                                            className="flex items-center gap-4"
                                        >
                                            <span>
                                                <Check size={14} className="text-primary" />
                                            </span>
                                            {item}
                                        </TypographySmall>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContactUsButton variant="hover">
                        GET UKG READY SOLUTIONS
                    </ContactUsButton>
                </PageLayout>
            </section>

            <PageLayout className="space-y-10 py-16 text-center">
                <Headline
                    title="UKG Support Services"
                    description="Being a certified UKG partner shows a level of trust and ability in offering UKG-level results. U Tech developers have met the precise standards set by UKG to offer quality work in implementation, consulting, support, and add-on solutions."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                    <FeaturesList
                        features={ukgServices2.slice(0, 2)}
                        center
                    />
                    <FadeInWhenVisible className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets//solutions/ukg/custom-ukg-development-services.png"
                            alt="Mobile Analytics App"
                            className="mx-auto w-155"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={ukgServices2.slice(2, 4)}
                        center
                    />
                </div>

                <ContactUsButton variant="hover">
                    GET UKG 24/7 SUPPORTS
                </ContactUsButton>
            </PageLayout>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

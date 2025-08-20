import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import { Button } from "@/components/ui/button";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Check } from "lucide-react";
import {
    Headline,
    TypographyH3,
    TypographyMuted,
    TypographySmall
} from "@/custom/Typography";
import {
    portfolioItems,
    sapAISolutions,
    sapFaq,
    sapIndustrySolutions,
    sapModules,
    sapServices
} from "./Data";
import { oracleSupportServices } from "../oracle/Data";

export default function SAP() {
    return (
        <>

            <HeroSection
                backgroundImage="/banner/sap-banner.jpg"
                title="SAP DEVELOPMENT COMPANY"
                buttonText="HIRE SAP CONSULTANTS"
                buttonLink="#"
            />

            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title="Hire SAP Certified Partners Today"
                    description="As a leading SAP development company, we empower businesses everywhere by leveraging SAP software solutions and ensuring that your platforms have all the tools, features, and functionality needed to drive your business forward."
                />

                <FeaturesListOpposite
                    features={sapServices}
                />

                <Button variant="hover">
                    HIRE SAP PARTNERS
                </Button>
            </PageLayout >

            <section className="py-16 bg-secondary">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Get SAP Solutions for Your Industry"
                        description="With SAP consulting and implementation services such as our own, we’ll utilize industry-specific knowledge to make the most out of SAP technology. Improve your business operations with U Tech."
                    />

                    <FeaturesList
                        grid3
                        center
                        features={sapIndustrySolutions}
                    />

                    <Button variant="hover">
                        GET SAP SOLUTIONS
                    </Button>
                </PageLayout >
            </section>


            <PageLayout className="text-center py-12 space-y-10">
                <Headline
                    title="SAP AI Solutions Enhance your SAP System"
                    description="Our SAP AI strategy will take you to greater heights as we leverage an array of SAP’s AI offerings to streamline operations, improve decision-making, and lead to innovation."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <div className="order-2 sm:order-1">
                        <FeaturesList
                            features={sapAISolutions}
                            iconAlign="horizontal"
                        />
                    </div>
                    <FadeInWhenVisible className="order-1 sm:order-2">
                        <img
                            loading="lazy"
                            src="/assets//solutions/sap/email-marketing.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-84 md:w-110"
                        />
                    </FadeInWhenVisible>
                </div>

                <Button variant="hover">
                    INTEGRATE AI IN SAP
                </Button>
            </PageLayout>

            <section className="bg-secondary text-center py-16">
                <PageLayout className="space-y-8">
                    <Headline
                        title="SAP® Product Implementation"
                        description="As a certified SAP implementation partner, U Tech provides skilled, cost-effective developers who utilize agile methods and the SAP platform to drive business sustainability. Our team specializes in migrating, integrating, implementing, and maintaining major SAP products and modules, including SAP BusinessObjects, SAP Lumira, SAP Crystal, and SAP Fiori but also not limited to:"
                    />
                    <div className="flex justify-between items-center md:max-w-5xl gap-4 mx-auto sm:flex-row flex-col">
                        <div className="space-y-4 text-start">
                            <TypographyH3>
                                SAP Modules
                            </TypographyH3>
                            {sapModules?.slice(0, 8).map((item, index) => (
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
                        <FadeInWhenVisible className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets//solutions/sap/sap-product-implementation.webp"
                                alt="Mobile Analytics App"
                                className="w-96  mx-auto"
                            />
                        </FadeInWhenVisible>
                        <div className="space-y-4 text-start">
                            <TypographyH3>
                                SAP Products
                            </TypographyH3>
                            {sapModules?.slice(8, 16).map((item, index) => (
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
                    <Button variant="hover">
                        SPEAK WITH SAP IMPLEMENTATION PARTNERS
                    </Button>
                </PageLayout>
            </section>

            <PageLayout className="text-center py-10 space-y-10">
                <Headline
                    title="Block of Hours Support Services"
                    description="Saving money is a universal business strategy. Take advantage of U Tech’s cost-effective Block of Hours program and purchase our support services, sold per 100 service hours, at a reduced rate."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets//solutions/sap/technical-and-non-technical-support.webp"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-96 md:w-135"
                        />
                    </FadeInWhenVisible>
                    <div className="space-y-6 text-start" >
                        <div>
                            <TypographyH3>
                                Pay-as-you-go Model
                            </TypographyH3>
                            <TypographyMuted>
                                Whether technical or non-technical, you can leverage our technical and non-technical support services for all Oracle products, at their lowest rates in the following ways:
                            </TypographyMuted>
                        </div>
                        <div className="space-y-4">
                            {oracleSupportServices?.map((item, index) => (
                                <TypographySmall
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <span>
                                        <Check size={18} className="text-orange-600" />
                                    </span>
                                    {item}
                                </TypographySmall>
                            ))}
                        </div>
                    </div>
                </div>

                <Button variant="hover">
                    GET SAP SUPPORT SERVICES
                </Button>
            </PageLayout>

            {/* === FAQ SECTION === */}
            <div className="py-16">
                <FaqSection faqs={sapFaq} title="FAQ's About SAP Services" />
            </div>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />
        </>
    )
}

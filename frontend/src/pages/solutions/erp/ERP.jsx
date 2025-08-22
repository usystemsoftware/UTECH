import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import ContactUsButton from "@/custom/ContactUsButton";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Headline, TypographySmall } from "@/custom/Typography";
import { Check } from "lucide-react";
import {
    aiErpFaqs,
    erpAiServices,
    erpDevelopmentServices,
    erpModules,
    erpServices,
    erpSupportSolutions,
    erpVendorSolutions,
    portfolioItems
} from "./Data";

export default function ERP() {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/erp-banner.jpg"
                title="CUSTOM ERP SOFTWARE DEVELOPMENT SERVICES"
                description="Unleashing the Power of AI-Integrated Custom ERP Solutions with Expert Consulting for Optimal Business Efficiency."
                buttonText="GET ERP DEVELOPMENT NOW"
                buttonLink="#"
            />

            <PageLayout className="py-12 text-center space-y-10">
                <Headline
                    title="Hire ERP Software Developers for Expert Consulting & Customized Solutions"
                    description="U Tech’s highly experienced developers will create a brand new ERP system from scratch or customize your current systems with custom integrations."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FeaturesList
                        features={erpServices.slice(0, 3)}
                        iconAlign="horizontal"
                    />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/erp/get-suitecloud-platform-tools.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-135"
                        />
                    </FadeInWhenVisible>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/erp/electronic-data-interface.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-145"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={erpServices.slice(3, 6)}
                        iconAlign="horizontal"
                    />
                </div>
                <ContactUsButton variant="hover">
                    GET CUSTOM ERP SOLUTIONS
                </ContactUsButton>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="text-center space-y-10">
                    <Headline
                        title="Upgrade Your ERP Software with AI-Powered Solutions"
                        description="With Artificial Intelligence (AI) representing the next step towards efficiency, innovation, and more, we’re ready to leverage it for your Enterprise Resource Planning needs. We’ll help you develop, manage, and even evolve your business with the power of AI."
                    />
                    <FeaturesListOpposite
                        features={erpAiServices}
                    />
                    <ContactUsButton variant="hover">
                        GET AI-POWERED ERP SOLUTIONS
                    </ContactUsButton>
                </PageLayout>
            </section>

            <PageLayout className="pt-16 space-y-10 text-center">
                <Headline
                    title="Custom ERP Services & Solutions from U Tech’s Expert Developers"
                    description="U Tech develops custom ERP solutions that enable administrators to take control of an entire business, from inventory and supply chain to distribution and sales."
                />
                <FeaturesList
                    features={erpDevelopmentServices}
                    center
                    grid3
                />
                <ContactUsButton variant="hover">
                    REQUEST A CUSTOM ERP CONSULTATION
                </ContactUsButton>
                <FadeInWhenVisible>
                    <img
                        loading="lazy"
                        src="/assets/solutions/erp/hire-netsuite-programmers-dashboard.png"
                        alt="Migration Planning Dashboard"
                        className="mx-auto md:w-[65%] w-full"
                    />
                </FadeInWhenVisible>
            </PageLayout>

            <PageLayout className="py-16 space-y-8">
                <Headline
                    title="Custom ERP Software Features"
                    description="U Tech’s custom ERP solutions are built with tons of features and functionalities, all centered around creating an all-in-one solution that help business operations run smoothly."
                />
                <div className="grid sm:grid-cols-2 gap-8 grid-cols-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            {erpModules?.slice(0, 8).map((item, index) => (
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
                        <div className="space-y-4">
                            {erpModules?.slice(8, 16).map((item, index) => (
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

                    <FadeInWhenVisible className="sm:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/solutions/erp/hire-netsuite-programmers-with-vast-industry-experience.png"
                            alt="Mobile Analytics App"
                            className="w-135 mx-auto"
                        />
                    </FadeInWhenVisible>
                </div>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="text-center space-y-10">
                    <Headline
                        title="Optimize ERP Application with Advanced Solutions & Support Services"
                        description="With today’s dynamic business environments, having a user-friendly and advanced ERP system will not only level the playing field but also provide an advantage against your competitors. U Tech's expert consultants and 24/7 support services cover every aspect of your ERP journey, ensuring you meet and exceed your business objectives."
                    />
                    <FeaturesListOpposite
                        features={erpSupportSolutions}
                    />
                    <ContactUsButton variant="hover">
                        GET EXPERT ERP SUPPORT
                    </ContactUsButton>
                </PageLayout>
            </section>


            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title="Leading ERP Platform Solutions: From Implementation to Seamless Integration"
                    description="U Tech has extensive experience implementing robust ERP platforms with popular tools including SAP, Epicor, Microsoft Dynamics, Oracle, NetSuite, and more."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <FeaturesList
                        features={erpVendorSolutions}
                        center
                        grid
                    />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/erp/we-work-with-leading-erp-platforms.gif"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-62 md:w-110"
                        />
                    </FadeInWhenVisible>
                </div>

                <ContactUsButton variant="hover">
                    Start Your ERP Implementation Journey
                </ContactUsButton>
            </PageLayout>

            {/* === FAQ SECTION === */}
            <div className="py-16">
                <FaqSection faqs={aiErpFaqs} title="AI Oriented ERP Software FAQ's" />
            </div>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

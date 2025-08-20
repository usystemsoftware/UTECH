import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import { Button } from "@/components/ui/button";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Check } from "lucide-react";
import {
    Headline,
    TypographyMuted,
    TypographyH3,
    TypographySmall
} from "@/custom/Typography";
import {
    aiFraudSolutions,
    fraudDetectionFAQ,
    fraudFeatures,
    fraudIntegrationSolutions,
    fraudSolutions,
    fraudSolutions2,
    fraudSolutionslist,
    internalFraudSolutions,
    portfolioItems
} from "./Data";


export default function FraudProtection() {
    return (
        <>

            <HeroSection
                backgroundImage="/banner/fraud-protection-banner.jpg"
                title="CUSTOM FRAUD DETECTION SOFTWARE DEVELOPMENT"
                buttonText="GET FRUAD PREVENTION DEVELOPERS"
                buttonLink="#"
            />

            <PageLayout className="py-12 text-center space-y-10">
                <Headline
                    title="Hire Experienced and Dedicated Fraud Prevention Software Developers"
                    description="U Tech’s highly experienced fraud prevention software developers engineer custom-tailored solutions designed to detect & prevent fraudulent activities from occurring across entire business infrastructures while delivering a superior customer experience."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/fraud-protection/protect-your-business-with-fraud-prevention-and-detection-software.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-115 sm:w-135"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={fraudSolutions}
                        iconAlign="horizontal"
                    />
                </div>

                <Button variant="hover">
                    PROTECT YOUR BUSSINESS AGAINST FRAUDSTERS NOW
                </Button>
            </PageLayout>

            <section className="bg-secondary py-12">
                <PageLayout className="text-center space-y-10">
                    <Headline
                        title="AI-Powered Algorithms and Risk Analysis Development"
                        description="As a trusted software developer with experience in cutting-edge technologies, we can help you stay ahead of the curve in today’s rapidly evolving digital landscape. We leverage the power of AI to provide advanced fraud detection and mitigation so that your business can operate with security and confidence."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <FeaturesList
                            features={aiFraudSolutions.slice(0, 2)}
                            iconAlign="horizontal"
                        />
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/solutions/fraud-protection/fraud-prevention-software-development-cellphone-animation.gif"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-42 md:w-52"
                            />
                        </FadeInWhenVisible>
                    </div>
                    <FeaturesList
                        features={aiFraudSolutions.slice(2, 6)}
                        grid3
                        center
                    />

                    <Button variant="hover">
                        GET AI-POWERED FRUAD DETECTION
                    </Button>
                </PageLayout>

                <PageLayout className="text-center py-10 space-y-10">
                    <Headline
                        title="Fraud Prevention Software Development"
                        description="Prevent money laundering, tax evasion, forged bank checks, identity theft, cybersecurity threats, fraudulent insurance claims, terrorist financing, and other prevalent fraudulent activities that occur within organizations everywhere with U Tech’s custom fraud prevention software solutions."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/solutions/fraud-protection/fraud-prevention-software-development.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-110 sm:w-135"
                            />
                        </FadeInWhenVisible>
                        <div className="space-y-4 text-start">
                            <TypographyMuted>
                                U Tech’s team of highly experienced software developers has the required skills and resources to develop best-in-class fraud prevention software for desktop, web, and mobile devices, featuring key fraud prevention components including:
                            </TypographyMuted>
                            {fraudFeatures?.map((item, index) => (
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
                    <FeaturesList
                        features={internalFraudSolutions}
                        grid3
                        center
                    />

                    <Button variant="hover">
                        HIRE FRUAD PREVENTATION EXPERTS TODAY
                    </Button>
                </PageLayout>
            </section>

            <section className="bg-primary py-8 text-center">
                <PageLayout className="space-y-4 text-white">
                    <TypographyH3>
                        U Tech ADDRESSES & PRIORITIZES DATA SECURITY COMPLIANCE REQUIRED BY AN INCREASING NUMBER OF LAWS, STANDARDS, & REGULATIONS.
                    </TypographyH3>
                    <TypographyMuted>
                        U Tech ensures that your custom fraud prevention solution is within full compliance of federal payment data security regulations, including PCI-DSS, HIPAA, GDPR, FISMA, FFIEC, CMMC, ISO-27001/ISO-27002, NERC, GLBA, NIST 800-171, NIST 800-53, SSAE 18, and all other federal and/or state-mandated consumer & payment data security regulations.
                    </TypographyMuted>
                </PageLayout>
            </section>

            <PageLayout className="py-12 text-center space-y-10">
                <Headline
                    title="AI-Powered Fraud Detection Solutions"
                    description="Our custom AI solutions for fraud detection combines machine learning/deep learning, rule-based decision engines, artificial intelligence, and streaming analytics to detect fraudulent activity fast."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/fraud-protection/fraud-detection-software-development.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-76 md:w-120"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={fraudSolutions2}
                        iconAlign="horizontal"
                    />
                </div>
            </PageLayout>

            <PageLayout className="py-16 space-y-8 text-center">
                <Headline
                    title="Powerful Fraud Prevention Solutions"
                    description="U Tech jam-packs your custom fraud prevention solutions with powerful features that are guaranteed to catch fraudsters before they’re able to cause any serious damage, keeping your business systems safe and secured 24/7."
                />
                <div className="flex justify-between gap-8 sm:flex-row flex-col items-center">
                    <div className="space-y-4">
                        {fraudSolutionslist?.slice(0, 10).map((item, index) => (
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
                            src="/assets/solutions/fraud-protection/powerful-fraud-detection-software-features.png"
                            alt="Mobile Analytics App"
                            className="w-135 mx-auto"
                        />
                    </FadeInWhenVisible>
                    <div className="space-y-4">
                        {fraudSolutionslist?.slice(10, 20).map((item, index) => (
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
                    ADD CUSTOM FRUAD DETECTION FEATURES
                </Button>
            </PageLayout>

            <PageLayout className="space-y-10 text-center">
                <Headline
                    title="Fraud Prevention & Detection Tools & Technologies"
                    description="We’ll integrate industry-leading fraud prevention & detection software solutions with your current business workflows and processes to create an all-in-one, unified solution that allows you to boost your revenue by minimizing friction, fraud, and financial crime."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/fraud-protection/fraud-prevention-and-detection-software-tools-and-echnologies.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-82 md:w-120"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={fraudIntegrationSolutions}
                        center
                        grid
                    />
                </div>

                <Button variant="hover">
                    INTEGRATE YOUR FRAUD SOLUTION NOW
                </Button>
            </PageLayout>

            {/* === FAQ SECTION === */}
            <div className="py-16">
                <FaqSection faqs={fraudDetectionFAQ} title="Fraud Detection Software: FAQ's" />
            </div>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

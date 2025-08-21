import React from 'react'
import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import { TypographyList2 } from '@/custom/Typography';
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
    biServices,
    biNewServices,
    cloudSolutions,
    aiBusinessIntelligence,
    biAnalyticsSolutions,
    biExtraSolutions,
    biAdvancedSolutions,
    biOutsourcingServices,
    biPlatformIntegrations,
    Faqs,
    portfolioItems
} from './Data';
const Bianalytics = () => {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/bi-analytics.jpg"
                title="BUSINESS INTELLIGENCE SOFTWARE DEVELOPMENT"
                description="Taking Business To New Heights with Custom AI-Driven BI Software Solutions"
                buttonText="GET BI DEVELOPERS"
                buttonLink="#"
                imageFit="cover"
            />

            <section>

                <PageLayout className="space-y-10 py-5 text-center">
                    <Headline
                        title="Hire Our Industry Leading AWS Development Company"
                        description="As an AWS certified partner, U Tech’s team of experts provide AWS configurations, migrations, integrations, and consulting services to help enterprises scale their business applications up or down to match with high or low-velocity demand."
                    />
                    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                        <FeaturesList
                            features={biServices}
                            iconAlign="horizontal"
                        />
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/bi-analytics/10032.png"
                                alt="Portfolio"
                                className="w-96 sm:w-135 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>

                </PageLayout>


                <PageLayout className="space-y-10 py-12 text-center">
                    <FeaturesList features={biNewServices} grid3 fadeUp={fadeUp} center />
                    <ContactUsButton variant="hover">HIRE BI SOFTWARE DEVELOPERS
                    </ContactUsButton>
                </PageLayout>

            </section>
            <section className='bg-secondary'>

                <PageLayout className="space-y-10 py-5 text-center">
                    <Headline
                        title="Custom BI Cloud Solutions"
                        description="Chetu’s engineers create custom business intelligence (BI) cloud app solutions that utilize AI-powered software, IoT technologies, and/or big data storage to optimize core business operations."
                    />
                    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">

                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/bi-analytics/10033.png"
                                alt="Portfolio"
                                className="w-96 sm:w-135 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={cloudSolutions}
                            iconAlign="horizontal"
                        />

                    </div>
                    <ContactUsButton variant="hover">GET BI CLOUD SOLUTIONS

                    </ContactUsButton>
                </PageLayout>
            </section>

            <section className='bg-secondary'>

                <PageLayout className="space-y-10 py-5 text-center">
                    <Headline
                        title="AI-Powered Business Intelligence"
                        description="Artificial Intelligence propels business intelligence forward by creating actionable insights based on accurate, data-driven decisions that give today’s business leaders modern tools to elevate collateral performance, drive revenue, and implement cutting-edge strategies to capture market share and drive innovation."
                    />
                    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">

                        <FeaturesList
                            features={aiBusinessIntelligence}
                            iconAlign="horizontal"
                        />

                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/bi-analytics/10034.png"
                                alt="Portfolio"
                                className="w-96 sm:w-135 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>
                    <ContactUsButton variant="hover">GET AI-ENABLED BI SOLUTIONS</ContactUsButton>
                </PageLayout>
            </section>


            <section>
                <PageLayout className="space-y-10 py-12 text-center">
                    <FeaturesList features={biAnalyticsSolutions} grid3 fadeUp={fadeUp} center />
                    <ContactUsButton variant="hover">GET CUSTOM BI SOLUTIONS

                    </ContactUsButton>
                </PageLayout>
            </section>


            <section>
                <PageLayout className="space-y-10 py-5 text-center">
                    <Headline
                        title="Custom BI Software Features"
                        description="We customize your BI platform’s features to best fit your unique business needs while turning raw data into actionable insights that can be analyzed in real-time."
                    />
                    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/bi-analytics/10035.png"
                                alt="Portfolio"
                                className="w-96 sm:w-135 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={biExtraSolutions}
                            iconAlign="horizontal"
                        />


                    </div>
                    <ContactUsButton variant="hover">GET AI-ENABLED BI SOLUTIONS</ContactUsButton>
                </PageLayout>
            </section>

            <section>
                <PageLayout className="space-y-10 py-12 text-center">
                    <FeaturesList features={biAdvancedSolutions} grid3 fadeUp={fadeUp} center />
                    <ContactUsButton variant="hover">CUSTOMIZE YOUR BI FEAUTURES NOW</ContactUsButton>
                </PageLayout>
            </section>


            <section className='bg-secondary'>
                <PageLayout className="space-y-10 py-12 text-center">
                    <Headline
                        title="Managed Business Intelligence Support Services"
                        description="At Chetu, we are dedicated to empowering your business with strategic insights and data-driven decision-making. With our customized business intelligence outsourcing, we commit to delivering comprehensive solutions that propel your organization toward success."
                    />
                    <FeaturesListOpposite features={biOutsourcingServices} />
                    <ContactUsButton variant="hover">BI SOFTWARE SUPPORT SERVICES</ContactUsButton>
                </PageLayout>
            </section>

            <section>
                <PageLayout className="space-y-10 py-12 text-center">
                    <Headline
                        title="Managed Business Intelligence Support Services"
                        description="At Chetu, we are dedicated to empowering your business with strategic insights and data-driven decision-making. With our customized business intelligence outsourcing, we commit to delivering comprehensive solutions that propel your organization toward success."
                    />
                    <FeaturesList features={biPlatformIntegrations} grid3 fadeUp={fadeUp} center />
                    <ContactUsButton variant="hover">INTEGRATE YOUR BI SOLUTIONS</ContactUsButton>
                </PageLayout>
            </section>
            <section className='py-10'>
                <FaqSection faqs={Faqs} title="FAQs: Business Intelligence Software Development" />
            </section>
            <section>
                <PortfolioGrid items={portfolioItems} />

            </section>
        </>
    )
}

export default Bianalytics

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
    googleCloudAiServices,
    googleCloudAppModernization,
    googleCloudDataServices,
    googleCloudFAQ,
    googleCloudIntegrationServices,
    googleCloudMigrationServices,
    googleCloudSecurityServices,
    googleCloudServices,
    googleCloudSupportList,
    portfolioItems
} from "./Data";

export default function GoogleCloud() {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/google-cloud-banner.jpg"
                title="GOOGLE CLOUD DEVELOPMENT SERVICES"
                description="Delivering top-tier Google Cloud solutions, from expert development and certified GCP Partner."
                buttonText="HIRE GOOGLE CLOUD DEVELOPERS"
                buttonLink="#"
            />

            <PageLayout className="text-center py-12 space-y-10">
                <Headline
                    title="Hire GCP Developers"
                    description="As a GCP partner and leading Google Cloud development company, U Tech leverages its vast expertise in Google Cloud technologies to modernize your business. Our custom solutions will support your operations and drive growth."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets//solutions/google-cloud/hire-expert-google-cloud-developers.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-96 md:w-135"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={googleCloudServices}
                        iconAlign="horizontal"
                    />
                </div>

                <ContactUsButton variant="hover">
                    HIRE GOOGLE CLOUD DEVELOPERS
                </ContactUsButton>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Google Cloud DevOps Engineering Services"
                        description="Shorten your development lifecycle with U Tech’s Google Cloud Developers. Our team adeptly improves workflows, accelerates deployment rate, and ensures high availability to surpass your business needs."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <div className="order-2 sm:order-1">
                            <FeaturesList
                                features={googleCloudIntegrationServices}
                                iconAlign="horizontal"
                            />
                        </div>
                        <FadeInWhenVisible className="order-1 sm:order-2">
                            <img
                                loading="lazy"
                                src="/assets//solutions/google-cloud/google-cloud-devops-engineering-services.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-96 md:w-135"
                            />
                        </FadeInWhenVisible>
                    </div>

                    <ContactUsButton variant="hover">
                        GET GOOGLE CLOUD DEVOPS SERVICES
                    </ContactUsButton>
                </PageLayout>
            </section>

            <PageLayout className="py-12 space-y-10">
                <Headline
                    title="AI-Powered Google Cloud Development Service Solutions"
                    description="Our team of developers leverages Artificial Intelligence to provide advanced capabilities through Google Cloud Development services. Learn more about how these features can be implemented into your business for enhanced operations."
                />
                <FeaturesListOpposite
                    features={googleCloudAiServices}
                />
            </PageLayout>

            <section className="py-12 bg-secondary">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Google Cloud Application Implementation & Monitoring"
                        description="Deploy and manage your applications with precision on Google Cloud. Our specialized team ensures expert configuration and updates, and thorough monitoring to improve your application performance and reliability."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                        <FeaturesList
                            features={googleCloudAppModernization.slice(0, 2)}
                            center
                        />
                        <FadeInWhenVisible className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets//solutions/google-cloud/google-cloud-application-deployment-and-monitoring.png"
                                alt="Mobile Analytics App"
                                className="mx-auto w-46 sm:w-54"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={googleCloudAppModernization.slice(2, 4)}
                            center
                        />
                    </div>

                    <ContactUsButton variant="hover">
                        HIRE GCP DEVELOPERS
                    </ContactUsButton>
                </PageLayout>
            </section>

            <PageLayout className="text-center py-12 space-y-10">
                <Headline
                    title="Google Cloud Data Analytics & Machine Learning Services"
                    description="Gain access to your data’s full potential with our advanced analytics and Machine Learning services on Google Cloud. We will provide you with access to powerful insights and forecasting capabilities that support smart decision-making."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets//solutions/google-cloud/google-cloud-data-analytics-and-machine-learning-services.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-96 md:w-135"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={googleCloudDataServices}
                        iconAlign="horizontal"
                    />
                </div>

                <ContactUsButton variant="hover">
                    HIRE GOOGLE CLOUD DEVELOPERS
                </ContactUsButton>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Cross Cloud Migration Services to Google Cloud"
                        description="Enjoy a smooth transition to Google Cloud with our cross-cloud migration services. We promise a seamless, secure transfer of your data and applications, reducing downtime and ensuring advanced cloud optimization."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <div className="order-2 sm:order-1">
                            <FeaturesList
                                features={googleCloudMigrationServices}
                                iconAlign="horizontal"
                            />
                        </div>
                        <FadeInWhenVisible className="order-1 sm:order-2">
                            <img
                                loading="lazy"
                                src="/assets//solutions/google-cloud/migration-services-to-google-cloud.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-96 md:w-135"
                            />
                        </FadeInWhenVisible>
                    </div>

                    <ContactUsButton variant="hover">
                        WORK WITH TOP GOOGLE CLOUD DEVELOPERS
                    </ContactUsButton>
                </PageLayout>
            </section>

            <PageLayout className="space-y-10 py-16 text-center">
                <Headline
                    title="Security and Compliance on Google Cloud"
                    description="Enhance your security positioning and meet compliance standards with our Google Cloud security services. We provide full protection of your assets, verifying robust security measures are in place and regulatory requirements are met with precision."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                    <FeaturesList
                        features={googleCloudSecurityServices.slice(0, 2)}
                        center
                    />
                    <FadeInWhenVisible className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets//solutions/google-cloud/security-and-compliance-on-google-cloud.png"
                            alt="Mobile Analytics App"
                            className="mx-auto w-46 sm:w-54"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={googleCloudSecurityServices.slice(2, 4)}
                        center
                    />
                </div>

                <ContactUsButton variant="hover">
                    HIRE GOOGLE CLOUD DEVELOPERS
                </ContactUsButton>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="text-center space-y-10">
                    <Headline
                        title="Google Cloud Block of Hours Support Services"
                        description="U Tech's Block of Hours program offers a cost-efficient alternative to our standard support, welcoming new, current, and former clients. Our dedicated Google Cloud developers swiftly adapt, enhancing your business with custom solutions, integration, migration, and support. We provide both technical and functional support for Google Cloud. Services are available in 100-hour blocks, with discounts based on volume. Optimal rates are available with our full-time, dedicated resources."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets//solutions/google-cloud/google-cloud-block-of-hours-support-services.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-110 sm:w-135"
                            />
                        </FadeInWhenVisible>
                        <div className="space-y-4">
                            {googleCloudSupportList?.map((item, index) => (
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

                    <ContactUsButton variant="hover">
                        GET GOOGLE CLOUD BOH SUPPORT
                    </ContactUsButton>
                </PageLayout>
            </section>

            {/* === FAQ SECTION === */}
            <div className="py-16">
                <FaqSection faqs={googleCloudFAQ} title="Google Cloud Development Services FAQ's" />
            </div>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, TypographyH3, TypographyMuted } from "@/custom/Typography";
import CaseStudyCard from "@/components/CaseStudyCard";
import {
    additionalDigitalAssetManagementSolutions,
    digitalAssetManagementIntegrations,
    digitalAssetManagementSolutions,
    featuresContent
} from "./Data";

export default function DigitalAssetManagement() {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/digital-asset-management-banner.jpg"
                title="Digital Asset Management (DAM) Software Solutions"
                buttonText="GET DAM DEVELOPERS"
                buttonLink="#"
            />

            <PageLayout className="space-y-10 text-center pt-16">
                <Headline
                    title="Hire Experienced Software Developers To Build Your DAM Platform"
                    description="We develop advanced and reliable Digital Asset Management (DAM) Software to help businesses store, find, view, distribute, and manage their content."
                />

                <FeaturesListOpposite
                    features={digitalAssetManagementSolutions}
                />

                <FadeInWhenVisible>
                    <img
                        loading="lazy"
                        src="/assets/solutions/digital-asset-mngt/Dashboard-Database.png"
                        alt="Migration Planning Dashboard"
                        className="mx-auto w-full md:w-[65%]"
                    />
                </FadeInWhenVisible>
            </PageLayout>

            <PageLayout className="space-y-10 py-16">
                <Headline
                    title="Custom Digital Asset Management (DAM) Solutions"
                    description="Our custom DAM solutions provide a central hub for your team to manage all of your essential content from ideation to publication."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/digital-asset-mngt/custom-digital-asset-management-solutions.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-145"
                        />
                    </FadeInWhenVisible>
                    <div className="space-y-3">
                        <TypographyH3 className="font-extrabold">
                            Digital Rights Management (DRM) Solutions
                        </TypographyH3>
                        <TypographyMuted>
                            We integrate GDPR-compliant digital rights management (DRM) solutions for tracking the release and possession of rich media while protecting your intellectual property.
                        </TypographyMuted>
                        <FeaturesList
                            features={additionalDigitalAssetManagementSolutions}
                            iconAlign="horizontal"
                        />
                    </div>
                </div>
            </PageLayout>

            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title="Custom DAM Software Integrations"
                    description="We integrate leading Digital Asset Management (DAM) Software with your existing business systems to enable scalability and performance so that you can manage all content and digital assets on a single platform."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <FeaturesList
                        features={digitalAssetManagementIntegrations}
                        center
                        grid
                    />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/digital-asset-mngt/custom-dam-software-integrations.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-96 md:w-145"
                        />
                    </FadeInWhenVisible>
                </div>

                <ContactUsButton variant="hover">
                    INTEGRATE YOUR DAM NOW!
                </ContactUsButton>
            </PageLayout>

            <section className="bg-secondary py-12">
                <PageLayout className="space-y-10">
                    <TypographyH3 className="text-center">
                        FEATURED CONTENT
                    </TypographyH3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {
                            featuresContent.map((feature, index) => (
                                <CaseStudyCard
                                    index={index}
                                    image={feature?.img}
                                    title={feature?.title}
                                    description={feature?.description}
                                    year={feature?.year}
                                    color={feature?.color}
                                    features={feature?.features}
                                    link={feature?.link}
                                />
                            ))
                        }
                    </div>
                </PageLayout>
            </section>

        </>
    )
}

import { FeaturesList } from "@/components/FeaturesList";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import FaqSection from "@/custom/FaqSection";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import {
    TypographySmall,
    Headline,
} from "@/custom/Typography";
import { Check } from 'lucide-react'
import {
    environmentalFeatures,
    environmentalFeaturesSystem,
    environmentalSoftwareSolutions,
    environmentalUtilitySolutions,
    faqData,
    internalSolutions,
    inventoryWasteAssetSolutions,
    weatherTrackingSolutions
} from "./Data";

export default function EnvManagement() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection
                backgroundImage='/assets/industries/env-mng/hero.avif'
                title="Environmental Management Software Development"
                buttonText="GET EMS DEVELOPERS"
                buttonLink="#"
                imageFit="cover"
                overlayOpacity={0.6}
            />

            {/* Uses: environmentalFeatures */}
            <PageLayout className="py-12">
                <Headline
                    title="Environmental Management Software Solutions"
                    description='Chetu developers create custom environmental management software built with custom database reporting platforms that track, store, and manage essential environmental compliance requirements for air, water, and waste emissions.'
                />
                <FeaturesGrid
                    leftFeatures={environmentalFeatures?.slice(0, 3)}
                    rightFeatures={environmentalFeatures?.slice(3, 6)}
                    centerImage="/assets/industries/env-mng/environmental-management-software-solutions-new.png"
                    fadeUp={fadeUp}
                    iconSize={38}
                />
            </PageLayout>

            {/* Uses: environmentalFeaturesSystem */}
            <section className="bg-secondary py-12">
                <PageLayout className="text-center space-y-8">
                    <Headline
                        title='Environmental Management System Development'
                        description='Chetu’s custom environmental management system incorporates a ton of customizable features...'
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/industries/env-mng/environmental-management-system-solutions.png"
                                alt="Portfolio"
                                className="w-135 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <div className="text-start space-y-8">
                            <TypographySmall>
                                Save more time & money by having Chetu developers integrate custom features...
                            </TypographySmall>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                <div className="space-y-4">
                                    {
                                        environmentalFeaturesSystem?.slice(0, 6).map((item, index) => (
                                            <TypographySmall key={index} className='flex items-center gap-4'>
                                                <span>
                                                    <Check size={14} className="text-primary" />
                                                </span>
                                                {item}
                                            </TypographySmall>
                                        ))
                                    }
                                </div>
                                <div className="space-y-4">
                                    {
                                        environmentalFeaturesSystem?.slice(6, 12).map((item, index) => (
                                            <TypographySmall key={index} className='flex items-center gap-4'>
                                                <span>
                                                    <Check size={14} className="text-primary" />
                                                </span>
                                                {item}
                                            </TypographySmall>
                                        ))
                                    }
                                </div>
                            </div>
                            <TypographySmall>
                                Uncover the innovative power of Artificial Intelligence...
                            </TypographySmall>
                        </div>
                    </div>
                    <FadeInWhenVisible>
                        <Button variant='hover'>
                            CALL EMS DEVELOPERS NOW
                        </Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            {/* Uses: internalSolutions */}
            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title='Environmental Risk Management Assessment Database Software'
                    description="We develop Enterprise Resource Planning (ERP)..."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    <FadeInWhenVisible delay={0.5} className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/industries/env-mng/environmental-risk-management-assessment-database-software.png"
                            alt="Portfolio"
                            className="w-135 mx-auto"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList fadeUp={fadeUp} features={internalSolutions} />
                </div>
                <FadeInWhenVisible>
                    <Button variant="hover">
                        ACCESS ENVIRONMENATAL RISKS WITH EASE
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            {/* Uses: environmentalSoftwareSolutions */}
            <section className="py-16 bg-secondary">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title='Environmental Risk Management Assessment Database Software'
                        description="We develop Enterprise Resource Planning (ERP)..."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                        <FeaturesList fadeUp={fadeUp} features={environmentalSoftwareSolutions} />
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/industries/env-mng/environmental-compliance-software-systems-for-audits-inspections-permits.png"
                                alt="Portfolio"
                                className="w-32 md:w-52 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>
                    <FadeInWhenVisible>
                        <Button variant="hover">
                            ENSURE 100% ENVIRONMENATAL COMPLIANCE NOW
                        </Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            {/* Uses: inventoryWasteAssetSolutions */}
            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title='Environmental Inventory Management & Waste Tracking Solutions'
                    description="Our inventory management systems comply with the U.S. EPA..."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    <FadeInWhenVisible delay={0.5} className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/industries/env-mng/environmental-inventory-management-waste-tracking-solutions.png"
                            alt="Portfolio"
                            className="w-72 mx-auto"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList fadeUp={fadeUp} features={inventoryWasteAssetSolutions} />
                </div>
                <FadeInWhenVisible>
                    <Button variant="hover">
                        KEEP TRACK OF ENVIRONMENATAL ASSETS NOW
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            {/* Uses: environmentalUtilitySolutions */}
            <section className="py-16 bg-secondary">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title='Environmental Operational Database Systems'
                        description="Manage data governance and records using Chetu’s custom environmental..."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                        <FeaturesList fadeUp={fadeUp} features={environmentalUtilitySolutions} />
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/industries/env-mng/environmental-operational-database-systems.png"
                                alt="Portfolio"
                                className="W-84 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>
                    <FadeInWhenVisible>
                        <Button variant="hover">
                            MANAGE OPERATIONAL WORKFLOWS
                        </Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            {/* Uses: weatherTrackingSolutions */}
            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title='Hire Experienced Weather Management Software Developers'
                    description="We develop custom weather management software solutions..."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    <FadeInWhenVisible delay={0.5} className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/industries/env-mng/information-and-location-based-weather-app-integrations.png"
                            alt="Portfolio"
                            className="w-96 mx-auto"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList fadeUp={fadeUp} features={weatherTrackingSolutions} />
                </div>
                <FadeInWhenVisible>
                    <Button variant="hover">
                        BUILD YOUR WEATHER TRACKING APP
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            {/* Uses: faqData */}
            <div className="py-10">
                <FaqSection
                    faqs={faqData}
                    title="FAQ's"
                />
            </div>
        </>
    )
}

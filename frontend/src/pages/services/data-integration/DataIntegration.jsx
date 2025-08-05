import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import { Headline, TypographyH3 } from "@/custom/Typography";
import {
    certifiedTools,
    dataGovernanceAndSecuritySolutions,
    dataIntegrationSolutions,
    dataProcessingSolutions
} from "./Data";

export default function DataIntegration() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection
                backgroundImage="/banner/backup-recovery-banner.jpg"
                title="DATA INTEGRATION SERVICES"
                description="U Tech ensures smooth data integration through ongoing support and monitoring beyond the project lifecycle, safeguarding your critical data assets."
                buttonText="HIRE DATA INTEGRETION CUNSULTANTS"
                buttonLink="#"
                imageFit="cover"
            />

            {/* Data Integration Solutions Section */}
            <PageLayout className="py-12 space-y-10 text-center">
                <Headline
                    title='Data Integration Solutions and Consulting'
                    description='Our data integration experts create customized solutions unifying unstructured and structured data across multiple environments, providing end-to-end data integration services for flawless functionality and protection of critical data assets.'
                />

                {/* Left: Features | Right: Image */}
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    <FeaturesList features={dataIntegrationSolutions} />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/data-integration/data-integration-solutions-and-consulting.png"
                            alt="Mobile App Devices"
                            className="w-96 mx-auto"
                        />
                    </FadeInWhenVisible>
                </div>

                {/* Left: Image | Right: Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/data-integration/hozzby-analytics-admin-dashboard-ui-kit.png"
                            alt="Mobile App Devices"
                            className="w-145 mx-auto"
                        />
                    </FadeInWhenVisible>

                    <FeaturesList features={dataProcessingSolutions} />
                </div>

                {/* CTA Button */}
                <FadeInWhenVisible>
                    <Button variant='hover'>
                        GET DATA INTEGRATION CONSULTING
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            {/* Big Data Integration Section */}
            <PageLayout className='text-center space-y-10 py-8'>
                <TypographyH3>
                    Break Data Silos with Seamless Big Data Intergration
                </TypographyH3>

                {/* Illustration */}
                <FadeInWhenVisible>
                    <img
                        loading="lazy"
                        src="/assets/services/data-integration/our-5-step-guide-to-U Tech-big-data-sync-framework.gif"
                        alt="Mobile App Devices"
                        className="md:max-w-5xl mx-auto"
                    />
                </FadeInWhenVisible>

                {/* CTA Button */}
                <FadeInWhenVisible>
                    <Button variant='hover'>
                        EXPLORE THE FULL FRAMEWORK
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            {/* Additional Offerings Section */}
            <section className="py-12 bg-secondary text-center">
                <PageLayout className='space-y-10'>
                    <Headline
                        title="Additional Offerings We Provide"
                        description="U Tech strives to ensure proper data integrity with careful data cleaning and ongoing support for all data-driven workflows. Our data management strategies adhere to stringent governance frameworks."
                    />

                    {/* Features with center image layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                        {/* Left Features */}
                        <FeaturesList features={dataGovernanceAndSecuritySolutions.slice(0, 2)} fadeUp={fadeUp} />

                        {/* Center Image */}
                        <FadeInWhenVisible className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/services/data-integration/additional-offerings-we-provide.gif"
                                alt="Mobile Analytics App"
                                className="w-48 mx-auto"
                            />
                        </FadeInWhenVisible>

                        {/* Right Features */}
                        <FeaturesList features={dataGovernanceAndSecuritySolutions.slice(2, 4)} fadeUp={fadeUp} />
                    </div>

                    {/* CTA Button */}
                    <FadeInWhenVisible>
                        <Button variant="hover">HIRE DATA INTEGRETION EXPERTS</Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            {/* Certified Tools Section */}
            <PageLayout className="py-10 space-y-10 text-center">
                <Headline
                    title='Certified Tools & Platforms We Have Expertise In'
                    description='U Tech is a data integration company specializing in leading data integration tools and platforms, such as Microsoft, AWS, Oracle, Databricks, and Snowflake. We leverage the latest tools to modernize operations and streamline workflows.'
                />

                {/* Tools Logos & Illustration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    {/* Tools Logos */}
                    <div className="flex items-center justify-center flex-wrap gap-8">
                        {certifiedTools.map((logo, index) => (
                            <FadeInWhenVisible key={index}>
                                <img
                                    loading="lazy"
                                    src={`/assets/services/data-integration/certified-tools/${logo.img}.png`}
                                    alt={logo?.label}
                                    className="h-22 mx-auto"
                                />
                            </FadeInWhenVisible>
                        ))}
                    </div>

                    {/* Right-side illustration */}
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/data-integration/certified-tools-platforms-we-have-expertise-in.png"
                            alt="Mobile Analytics App"
                            className="md:w-82 w-110 mx-auto"
                        />
                    </FadeInWhenVisible>
                </div>

                {/* CTA Button */}
                <FadeInWhenVisible>
                    <Button variant='hover'>
                        GET DATA INTEGRETION SERVICES
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>
        </>
    )
}

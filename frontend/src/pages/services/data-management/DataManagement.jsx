import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import { Headline } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
    dataLakeServices,
    dataLakeSolutions,
    dataManagementSolutions,
    dataValueProps,
    portfolioItems,
} from "./Data";

export default function DataManagement() {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection
                backgroundImage="/banner/data-management-banner.jpg"
                title="Data Management Services"
                description="Streamline, secure, and optimize enterprise data for smarter decisions, compliance, and sustainable growth."
                buttonText="CUNSULT A DATA MANAGEMENT EXPERTS"
                buttonLink="#"
                imageFit="cover"
            />

            {/* DATA MANAGEMENT SOLUTIONS SECTION */}
            <PageLayout className="space-y-10 py-12 text-center">
                <Headline
                    title="Data Management Solutions"
                    description="U Tech is a leading data management service provider that offers comprehensive enterprise data solutions to empower businesses with centralized and secured big data for effective operations."
                />

                {/* Mobile Layout */}
                <div className="block md:hidden">
                    <FeaturesList features={dataManagementSolutions} fadeUp={fadeUp} grid />
                </div>

                {/* Desktop Grid with Center Images */}
                <div className="md:grid hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-8">
                    {/* Left Features */}
                    <FeaturesList features={dataManagementSolutions.slice(0, 4)} fadeUp={fadeUp} />

                    {/* Center Images */}
                    <div className="grid gap-8">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/services/data-management/data-management-solutions-mobile.png"
                                alt="Mobile Analytics App"
                                className="w-56 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/services/data-management/data-management-solutions-tablet.png"
                                alt="Tablet Analytics App"
                                className="w-135 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>

                    {/* Right Features */}
                    <FeaturesList features={dataManagementSolutions.slice(4, 8)} fadeUp={fadeUp} />
                </div>

                {/* CTA */}
                <FadeInWhenVisible>
                    <Button variant="hover">GET DATA MANAGEMENT SERVICES</Button>
                </FadeInWhenVisible>
            </PageLayout>

            {/* DATA LAKE MANAGED SERVICES SECTION */}
            <section className="bg-secondary py-12">
                <PageLayout className="text-center space-y-10">
                    <Headline
                        title="Data Lake Managed Services"
                        description="U Tech provides comprehensive data lake support services that help businesses maintain their data lakes and optimize them for performance, scalability, and compliance. Our data lake professionals ensure seamless operations while providing the robust data flow and infrastructure that empowers real-time analytics and high-value insights."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                        <FeaturesList features={dataLakeServices} />
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/services/data-management/custom-built-data-lake-development-services-desktop.png"
                                alt="Data Lake Services"
                                className="w-115 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>

                    {/* CTA */}
                    <FadeInWhenVisible>
                        <Button variant="hover">GET DATA LAKE MANAGED SERVICES</Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            {/* CUSTOM-BUILT DATA LAKE DEVELOPMENT SECTION */}
            <PageLayout className="py-12 space-y-10 text-center">
                <Headline
                    title="Custom-Built Data Lake Development Services"
                    description="Let U Tech provide you with expert data lake developers who can design, develop, and deploy data lake platforms. We empower your enterprise with complete ownership, scalability, and ROI."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/data-management/custom-built-data-lake-development-services-laptop.png"
                            alt="Data Lake Development"
                            className="w-135 mx-auto"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList features={dataLakeSolutions} />
                </div>

                {/* CTA */}
                <FadeInWhenVisible>
                    <Button variant="hover">HIRE DATA LAKE EXPERTS</Button>
                </FadeInWhenVisible>
            </PageLayout>

            {/* VALUE PROPOSITION SECTION */}
            <section className="bg-secondary py-10">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Why Choose U Tech"
                        description="Unmatched Expertise & Innovation Our experts bring decades of experience in data architecture, integration, and governance. Our scalable solutions deliver innovation that keeps your enterprise ahead."
                    />
                    <FeaturesList features={dataValueProps} grid />

                    {/* CTA */}
                    <FadeInWhenVisible>
                        <Button variant="hover">CUNSULT A DATA MANAGEMENT EXPERTS</Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />
        </>
    );
}

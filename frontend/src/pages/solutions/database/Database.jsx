import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import { Headline } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import FaqSection from "@/custom/FaqSection";
import {
    databaseDevelopmentFAQ,
    databaseDevelopmentServices,
    databaseFeatures,
    databaseIntegrations,
    databaseSoftwareSolutions,
    databaseSupportServices,
    nonRelationalDatabaseFeatures,
    portfolioItems
} from "./Data";

export default function Database() {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/custom-database-development-services-banner.jpg"
                title="Custom Database Development Services"
                description="We manage, develop, and provide consulting services for planned, structured, and well-organized database management systems, offering customized database development solutions to meet your needs."
                buttonText="Get Database Developers"
                buttonLink="#"
            />

            <PageLayout className="space-y-10 text-center py-12">
                <Headline
                    title="Hire An Experienced & Dedicated Database Development Company"
                    description="U Tech revamps existing database with software development and builds new database systems from scratch for companies to gather, organize, and draw critical data insights."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                    <FeaturesList
                        features={databaseDevelopmentServices.slice(0, 3)}
                        center
                    />
                    <FadeInWhenVisible className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/solutions/database/remote-and-reliable.png"
                            alt="Mobile Analytics App"
                            className="mx-auto w-165"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={databaseDevelopmentServices.slice(3, 6)}
                        center
                    />
                </div>
                <Button variant="hover">
                    BOOK YOUR DATABASE CONSULTATION NOW
                </Button>
            </PageLayout>

            <section className="bg-secondary pt-16 text-center">
                <PageLayout className="space-y-10">
                    <Headline
                        title="We Develop Custom Database Solutions"
                        description="We develop all kinds of database software solutions, providing custom-tailored database platforms to all industry types and business sizes."
                    />

                    <FeaturesListOpposite
                        features={databaseSoftwareSolutions}
                    />

                    <Button variant="hover">
                        GET DATABASE SOLUTIONS
                    </Button>

                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/database/dashboard.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-full md:w-[65%]"
                        />
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            <PageLayout className="py-12 text-center space-y-10">
                <Headline
                    title="SQL Relational Database Solutions"
                    description="Our custom SQL development services implements precise, intuitive, and intelligent data structures, along with views and indexes for enhanced organization and structural data integrity."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FeaturesList
                        features={databaseFeatures}
                        iconAlign="horizontal"
                    />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/database/unique-threat-prevention-strategies.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-145"
                        />
                    </FadeInWhenVisible>
                </div>
            </PageLayout>

            <section className="bg-secondary py-12">
                <PageLayout className="text-center space-y-10">
                    <Headline
                        title="NoSQL Non-Relational Database Solutions"
                        description="We develop non-relational databases for enterprise-level businesses processes that require flexible and scalable database solutions for storing and organizing large data sets."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/solutions/database/our-experienced-developers.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-145"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={nonRelationalDatabaseFeatures}
                            iconAlign="horizontal"
                        />
                    </div>
                    <Button variant="hover">
                        OPTIMIZE YOUR DATA WITH OUR EXPERTISE
                    </Button>
                </PageLayout>
            </section>

            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title="We Leverage Leading Database Software Tools"
                    description="We harness the power of popular database-as-a-service (DBaaS) providers to create a solution that fits your data-driven requirements."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <FeaturesList
                        features={databaseIntegrations}
                        center
                        grid
                    />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/database/we-leverage-leading-database-software-tools.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-96 md:w-145"
                        />
                    </FadeInWhenVisible>
                </div>

                <Button variant="hover">
                    INTEGRATE YOUR DATABASE NOW
                </Button>
            </PageLayout>

            <section className="bg-secondary py-12 text-center">
                <PageLayout className="space-y-10">
                    <Headline
                        title="Outsource Managed Database Services to Trusted Partners"
                        description="As a leading database software solutions provider, our portfolio covers managed database services. We tailor to the diverse needs of the cloud environment; our outsourced services seamlessly integrate with Amazon Web Services and other cloud computing platforms, offering automated maintenance, scalability, and high availability for a database foundation."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                        <FeaturesList
                            features={databaseSupportServices.slice(0, 2)}
                            center
                        />
                        <FadeInWhenVisible className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/database/managed-database-services.png"
                                alt="Mobile Analytics App"
                                className="mx-auto w-56"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={databaseSupportServices.slice(2, 4)}
                            center
                        />
                    </div>
                    <Button variant="hover">
                        GET CUSTOM DATABASE SERVICES
                    </Button>
                </PageLayout>
            </section>

            {/* === FAQ SECTION === */}
            <div className="py-16">
                <FaqSection faqs={databaseDevelopmentFAQ} title="FAQ's" />
            </div>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />
        </>
    )
}

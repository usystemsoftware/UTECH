import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import ContactUsButton from "@/custom/ContactUsButton";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
    Headline,
    TypographyH3,
    TypographyMuted
} from "@/custom/Typography";
import {
    ibmAIServices,
    ibmConsultingServices,
    ibmFAQ,
    ibmIntegrationServices,
    ibmMigrationServices,
    ibmModernizationServices,
    ibmServices,
    portfolioItems
} from "./Data";

export default function IBM() {
    return (
        <>

            <HeroSection
                backgroundImage="/banner/ibm-new-banner.jpg"
                title="Certified IBM Silver Partners"
                buttonText="SPEAK WITH OUR IBM EXPERTS"
                buttonLink="#"
            />

            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title="We Deliver Operational Excellence through Innovative IBM Technology"
                    description="U Tech, an IBM Silver Partner, delivers expert consulting and seamless integration to elevate enterprise performance across Watson, Cognos, and Watsonx."
                />

                <FeaturesList
                    features={ibmServices}
                    grid3
                    center
                />

                <ContactUsButton variant="hover">
                    EXPLORE OUR IBM SERVICES
                </ContactUsButton>
            </PageLayout >

            <section className="bg-secondary py-16 text-center">
                <PageLayout className="space-y-10">

                    <Headline
                        title="Simplify Your Workflow with WatsonX"
                        description="U Tech uses IBM Watsonx APIs and AI models to streamline workflows, automate tasks, optimize processes, and enhance customer engagement."
                    />

                    <FeaturesListOpposite
                        features={ibmAIServices}
                    />

                </PageLayout>
            </section>

            <PageLayout className="py-16 space-y-10">
                <Headline
                    title="IBM Consulting Expertise"
                    description="U Tech's consulting services, guided by IBM experts, empower enterprises to unlock performance, scalability, and innovation—advising across technology adoption, modernization, and strategic transformation."
                />

                <FeaturesList
                    features={ibmConsultingServices}
                    grid3
                    center
                />
            </PageLayout >

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="IBM Modernization"
                        description="U Tech's Modernization Services with IBM focus on the technology upgrades and processes to harness the latest IBM technologies in order to help improve operational efficiency."
                    />

                    <FeaturesList
                        features={ibmModernizationServices}
                        grid3
                        center
                    />
                </PageLayout >
            </section>

            <PageLayout className="py-16 space-y-10">
                <Headline
                    title="IBM Migration Services"
                    description="We provide secure migration to IBM platforms and the migration of apps, databases, or entire systems. This minimizes inconvenience and maintains business continuity throughout the process."
                />

                <FeaturesList
                    features={ibmMigrationServices}
                    grid3
                    center
                />
            </PageLayout >

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10 text-center">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <div>
                                <TypographyH3>
                                    IBM Integration
                                </TypographyH3>
                                <TypographyMuted>
                                    We ensure that IBM technologies can go hand in hand with your current systems and improve work flow and automate processes and guarantee data accuracy for smarter operations.
                                </TypographyMuted>
                            </div>

                            <FeaturesList
                                features={ibmIntegrationServices.slice(0, 3)}
                                iconAlign="horizontal"
                            />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <TypographyH3>
                                    IBM Managed Services
                                </TypographyH3>
                                <TypographyMuted>
                                    We actively manage, maintain and recover IBM environments to keep your business running at its optimum performance and minimize risks.
                                </TypographyMuted>
                            </div>
                            <FeaturesList
                                features={ibmIntegrationServices.slice(3, 6)}
                                iconAlign="horizontal"
                            />
                        </div>
                    </div>
                    <ContactUsButton variant="hover">
                        DISCOVER OUR IBM MANAGED SERVICES
                    </ContactUsButton>
                </PageLayout >
            </section>

            {/* === FAQ SECTION === */}
            <div className="py-16">
                <FaqSection faqs={ibmFAQ} title="FAQs Regarding IBM" />
            </div>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

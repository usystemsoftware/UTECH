import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import { FeaturesList2 } from "@/components/FeaturesList2";
import FaqSection from "@/custom/FaqSection";
import ContactUsButton from "@/custom/ContactUsButton";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Headline, TypographyMuted, TypographyH3 } from "@/custom/Typography";
import {
    facilityAISolutions,
    facilityManagementFAQ,
    facilityManagementIntegrations,
    facilityManagementMobileApps,
    facilityManagementSolutions,
    facilityManagementSolutions2,
    facilityManagementSupport,
    portfolioItems
} from "./Data";

export default function FacilitiesManagement() {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/facility-management-banner.jpg"
                title="FACILITY MANAGEMENT SOFTWARE SOLUTIONS FOR STREAMLINED OPERATIONS"
                buttonText="GET FACALITY MGNT SOFTWARE DEVELOPERS"
                buttonLink="#"
            />

            <PageLayout className="space-y-10 text-center py-12">
                <Headline
                    title="Multifaceted Facility Management Software Development"
                    description="Looking for the best facility management software? U Tech develops custom FMS solutions from scratch or custom features integrated within your existing solutions including CAFM, CMMS, and IWMS, to streamline operations, automate tasks, and manage assets efficiently. Get a free consultation today!"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                    <FeaturesList
                        features={facilityManagementSolutions.slice(0, 3)}
                        center
                    />
                    <FadeInWhenVisible className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/solutions/facilities-management/multifaceted-facility-management-software-development.png"
                            alt="Mobile Analytics App"
                            className="mx-auto w-165"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={facilityManagementSolutions.slice(3, 6)}
                        center
                    />
                </div>
                <ContactUsButton variant="hover">
                    MANAGE YOUR FACALITIES WITH EASE
                </ContactUsButton>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10">
                    <Headline
                        title="Artificial Intelligence Integrated into Facility Maintenance"
                    />

                    <FeaturesList
                        features={facilityAISolutions}
                        center
                        grid3
                    />
                </PageLayout>
            </section>

            <PageLayout className="space-y-10 py-16 text-center">
                <Headline
                    title="Custom Facilities Management Software Solutions"
                    description="We integrate FM features custom-tailored to your specific business needs, enabling managers to measure & optimize real estate utilization, control building occupancy, book/check reservations, schedule management preventive maintenance services, manage employees, and more."
                />

                <FeaturesList
                    features={facilityManagementSolutions2}
                    center
                    grid3
                />
                <ContactUsButton variant="hover">
                    BUILD YOUR CUSTOM FM SOFTWARE SOLUTUTION NOW
                </ContactUsButton>
            </PageLayout>

            <section className="bg-primary py-8 text-center">
                <PageLayout className="space-y-4 text-white">
                    <TypographyH3>
                        KEEPING COMPLIANCE WITH FACILITY MANAGEMENT STANDARDS
                    </TypographyH3>
                    <TypographyMuted>
                        U Tech’s custom CAFM, CMMS, and IWMS systems are designed to ensure compliance with facility management standards, including ISO 41001, OSHA regulations, and LEED recommendations. Our solutions align with industry best practices to keep your operations efficient and compliant
                    </TypographyMuted>
                </PageLayout>
            </section>

            <PageLayout className="py-12 text-center space-y-10">
                <Headline
                    title="Field Service Management Mobile Apps"
                    description="We develop FSM mobile apps that simplify back-office processes and allow field service operators to raise service requests quickly, identify issues, and complete jobs on time without disruption."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/facilities-management/facility-management-mobile-apps.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-115 sm:w-145"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList2
                        features={facilityManagementMobileApps}
                    />
                </div>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Facility Management Software Integrations"
                        description="U Tech integrates leading facility management software solutions with your internal business systems to optimize workflows, automate daily tasks, ensure full visibility of FM operations, manage assets, and so much more to create an all-in-one unified platform."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/solutions/facilities-management/facility-management-software-integrations.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-82 md:w-145"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={facilityManagementIntegrations}
                            center
                            grid
                        />
                    </div>
                </PageLayout>
            </section>

            <PageLayout className="py-12 text-center space-y-10">
                <Headline
                    title="Expert Third-Party Support Services for FMS"
                    description="Our expert IT team offers third-party support services for FMS solutions, including technical support, troubleshooting, updates, patches, and custom enhancements tailored to your needs."
                />

                <FeaturesListOpposite
                    features={facilityManagementSupport}
                />
            </PageLayout>

            {/* === FAQ SECTION === */}
            <div className="py-16">
                <FaqSection faqs={facilityManagementFAQ} title="FAQ's" />
            </div>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

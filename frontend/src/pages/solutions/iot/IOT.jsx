import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import FaqSection from "@/custom/FaqSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import ContactUsButton from "@/custom/ContactUsButton";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
    Headline,
    TypographyH3,
} from "@/custom/Typography";
import {
    AIoTServices,
    IndustryIoTSolutions,
    IoTFAQs,
    IoTServices,
    portfolioItems,
    SoftwareSolutions,
    testimonials
} from "./Data";

export default function IOT() {
    return (
        <>

            <HeroSection
                backgroundImage="/banner/iot-m2m-banner.jpg"
                title="IoT Software Development"
                description="Delivering Scalable IoT Apps and Software Solutions"
                buttonText="HIRE IOT DEVELOPERS"
                buttonLink="#"
            />

            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title="End-to-End IoT Software Development Services"
                    description="The success of any Internet of Things (IoT) technology or Machine-to-Machine (M2M) device is dependent on the consistency of its connectivity – both to the cloud and other devices. IoT device connect to the Internet and communicate with each other to collect and exchange data and perform various functions. U Tech provides specialized M2M/IoT development services including embedded software, cross-platform apps, and integrated databases."
                />

                <FeaturesListOpposite
                    features={IoTServices}
                />

                <ContactUsButton variant="hover">
                    GET IOT DEVELOPERS
                </ContactUsButton>
            </PageLayout>

            <section className="bg-secondary py-12">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Artificial Intelligence of Things (AIoT) Solutions"
                        description="We integrate powerful Artificial Intelligence technologies to provide organizations with improved performance, greater efficiency, cost-effectiveness, and enhanced decision-making to drive innovation and success."
                    />

                    <FeaturesListOpposite
                        features={AIoTServices}
                    />
                </PageLayout>
            </section>

            <TestimonialSection testimonials={testimonials} />

            <section className="bg-secondary">
                <PageLayout className="text-center space-y-10">
                    <Headline
                        title="Our Industries-Specific IoT Solutions"
                        description="U Tech designs and seamlessly integrates IoT-driven solutions to facilitate unprecedented efficiency and modernize operations, giving you a competitive edge while augmenting personnel with data-driven insights to drive new strategies, grow revenue streams, and reduce risk and expenses."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <div className="order-2 sm:order-1">
                            <FeaturesList
                                features={IndustryIoTSolutions.slice(0, 4)}
                                iconAlign="horizontal"
                            />
                        </div>
                        <FadeInWhenVisible className="order-1 sm:order-2">
                            <img
                                loading="lazy"
                                src="/assets/solutions/iot/IoT-Industries-laptop-img.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-115 sm:w-145"
                            />
                        </FadeInWhenVisible>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/solutions/iot/IoT-Industries-desktop-window-img.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-82 sm:w-135"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={IndustryIoTSolutions.slice(4, 8)}
                            iconAlign="horizontal"
                        />
                    </div>
                </PageLayout>
            </section>

            <PageLayout className="text-center py-16">
                <TypographyH3 className="text-primary">
                    Our Software Development Solutions
                </TypographyH3>
                <FeaturesGridnew
                    leftFeatures={SoftwareSolutions.slice(0, 6)}
                    rightFeatures={SoftwareSolutions.slice(6, 12)}
                    centerImage="/assets/solutions/iot/application-develop-ment-services-desktop-combo.png"
                />
            </PageLayout>

            {/* === FAQ SECTION === */}
            <div className="py-16">
                <FaqSection faqs={IoTFAQs} title="GIS Software FAQ's" />
            </div>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

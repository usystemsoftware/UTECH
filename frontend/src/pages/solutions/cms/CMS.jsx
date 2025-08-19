import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FeaturesList } from "@/components/FeaturesList";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import PortfolioGrid from "@/components/PortfolioGrid";
import Iconrender from '@/components/Iconrender';
import { Button } from "@/components/ui/button";
import { Headline, TypographyH3 } from "@/custom/Typography";
import {
    cmsDevelopmentServices,
    CMSFeatures,
    cmsIntegrations,
    cmsSolutions,
    portfolioItems,
    testimonials
} from "./Data";

export default function CMS() {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/cms-banner.jpeg"
                title="CUSTOM CMS DEVELOPMENT SERVICES"
                buttonText="Get CMS Developers"
                buttonLink="#"
            />

            <PageLayout className="pt-16 space-y-10">
                <Headline
                    title="We’ve Got Experienced CMS Developers"
                    description="U Tech’s Custom CMS Solutions are SEO-friendly and success-driven, designed to integrate with existing content management system to enhance and elevate your website, application, social media network, e-commerce store, or blog."
                />

                <FeaturesList
                    features={cmsDevelopmentServices}
                    center
                    grid3
                />

                <FadeInWhenVisible>
                    <img
                        loading="lazy"
                        src="/assets/solutions/cms/flutter-software-development-services.png"
                        alt="Migration Planning Dashboard"
                        className="mx-auto md:w-[65%] w-full"
                    />
                </FadeInWhenVisible>

            </PageLayout>


            {/* Testimonial Section */}
            <TestimonialSection testimonials={testimonials} />

            <PageLayout className="py-16 space-y-10">
                <Headline
                    title="Compliance Software Third-Party Integrations"
                    description="We integrate with industry-leading cybersecurity compliance software APIs to align your security, protect against threats, and deliver success-driven results."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FeaturesList
                        features={cmsSolutions}
                        center
                        grid
                    />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/cms/cms.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto md:w-96 w-62"
                        />
                    </FadeInWhenVisible>
                </div>

            </PageLayout>

            <section className="text-center py-12 bg-secondary">
                <PageLayout className="space-y-10">
                    <Headline
                        title="CMS Plugins & Integrations"
                        description="Adding custom features, integrating plugins, and implementing add-ons to your new and improved website allows you to turn your vision into a feature-rich, custom-tailored software reality. U Tech takes your existing content management system (CMS) and elevates it to new heights."
                    />

                    <Button variant="hover">
                        INTEGRATE YOUR CMS NOW
                    </Button>

                    <Iconrender
                        webdesignintegrations={cmsIntegrations}
                        center
                    />
                </PageLayout>
            </section>

            <PageLayout className="py-12 space-y-10 text-center">
                <TypographyH3 className="text-primary">
                    Our CMS Software Development Solutions
                </TypographyH3>

                <FeaturesGridnew
                    leftFeatures={CMSFeatures.slice(0, 2)}
                    rightFeatures={CMSFeatures.slice(2, 4)}
                    centerImage="/assets/solutions/cms/application-develop-ment-services-desktop-combo.png"
                    iconGap="md:gap-26"
                />

                <Button variant="hover">
                    HIRE CMS DEVELOPMENT COMPANY
                </Button>
            </PageLayout>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

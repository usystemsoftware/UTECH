import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import { Headline, TypographyMuted, TypographyH3 } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
    mvpDevelopmentSteps,
    mvpProcess,
    mvpServices,
    mvpTechStack,
    portfolioItems,
    testimonials
} from "./Data";

export default function StartupMvp() {
    return (
        <>
            {/* === HERO SECTION === */}
            <HeroSection
                backgroundImage="/banner/startup-mvp.jpeg"
                title="MVP App Development for Startups"
                buttonText="GET MVP APP DEVELOPMENT NOW!"
                buttonLink="#"
                imageFit="cover"
            />

            <PageLayout className="py-12 space-y-10 text-center">
                <Headline
                    title="U Tech’s Software & MVP Application Development Services for Startups"
                    description="U Tech helps startup businesses analyze the demand for their product in the market by providing expert-level MVP application development services."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FeaturesList features={mvpServices} fadeUp={fadeUp} grid />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/startup-mvp/software-mvp-application-development-services-for-startups.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-42 sm:w-54"
                        />
                    </FadeInWhenVisible>
                </div>
                <Button variant="hover">DESIGN YOUR MVP APP NOW</Button>
            </PageLayout>

            <TestimonialSection testimonials={testimonials} />

            <PageLayout className="text-center space-y-10 py-12">
                <Headline
                    title="U Tech’s Steps for MVP Application Success"
                    description="U Tech transforms your minimum viable product (MVP) application from a single feature product to a high-performance product that offers enhanced market feasibility, scalability, and usability."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-8 ">
                    {/* Left Features */}
                    <FeaturesList features={mvpProcess.slice(0, 2)} fadeUp={fadeUp} center />

                    {/* Center Image */}
                    <FadeInWhenVisible className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/services/startup-mvp/offers-autodesk-global-consulting-services.gif"
                            alt="Mobile Analytics App"
                            className="w-135 mx-auto"
                        />
                    </FadeInWhenVisible>
                    {/* Right Features */}
                    <FeaturesList features={mvpProcess.slice(2, 4)} fadeUp={fadeUp} center />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/startup-mvp/mvp-scope-definition.png"
                            alt="Mobile App Devices"
                            className="w-130 mx-auto"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList features={mvpDevelopmentSteps} iconAlign="horizontal" />
                </div>
                <Button variant="hover">GET MVP APP SOLUTIONS</Button>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="text-center space-y-10">
                    <Headline
                        title='MVP App Development Technologies'
                        description="Whether you’re in the market for an MVP web application, or an MVP mobile application, U Tech will create your app using leading technologies, tools, and development techniques."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {mvpTechStack.map(({ title, description, tools }, index) => (
                            <div key={index} className="space-y-4">
                                <TypographyH3>{title}</TypographyH3>
                                <TypographyMuted>{description}</TypographyMuted>
                                <div className="flex flex-wrap justify-center items-center gap-6">
                                    {tools.map((tool, idx) => (
                                        <FadeInWhenVisible>
                                            <img
                                                loading="lazy"
                                                src={`/assets/services/startup-mvp/tools/${tool}.png`}
                                                alt="Mobile App Devices"
                                                className="w-11 mx-auto"
                                            />
                                        </FadeInWhenVisible>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button variant="hover">BUILD YOUR MVP APP</Button>
                </PageLayout>
            </section>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

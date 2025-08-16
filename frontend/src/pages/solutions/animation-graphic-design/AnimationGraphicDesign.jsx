import React from 'react'
import HeroSection from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { TypographyMuted, Headline, TypographyH5 } from "@/custom/Typography";
import { webanimationAndgraphicdesign, testimonials, webanimationsolutions, graphicdesignsolutions, featuresListOppositeoptions, webdesignintegrations, artificialIntelligencesolutions, aviationFaqs, portfolioItems } from './Data';
import { TestimonialSection } from "@/components/TestimonialSection";
import Iconrender from '@/components/Iconrender';
import PortfolioGrid from "@/components/PortfolioGrid";

const AnimationGraphicDesign = () => {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/animation-graphic-design-banner.jpg"
                title="Web Graphic Design & 3D Animation Services"
                buttonText="Hire Web Designers & Developers"
                buttonLink="#"
                imageFit="cover"
            />

            <section className="py-5 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Our Developers Have Experience With Web Animation & Graphic Design"
                        description="Our award-winning full-service design team provides interactive web graphic design and animation services to enhance the user experience, increase conversion rates, and improve engagement."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/animation-graphic-design-banner/10002.png"
                                alt="Portfolio"
                                className="w-130 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={webanimationAndgraphicdesign}
                                iconAlign="horizontal"

                            />
                        </div>
                    </div>

                </PageLayout>

            </section>

            <section>
                <TestimonialSection testimonials={testimonials} />
            </section>
            <section className="py-5 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Custom Web Design & Animation Solutions"
                        description="We develop, integrate, and customize attention-grabbing 2D and 3D animations with CRO in mind, capturing real-time interactions, and providing live data analytics to improve user experience and increase ROI."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={webanimationsolutions}
                                grid
                                center
                            />
                        </div>
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/animation-graphic-design-banner/10006.png"
                                alt="Portfolio"
                                className="w-70 mx-auto"
                            />
                        </FadeInWhenVisible>

                    </div>

                </PageLayout>

            </section>

            <section className="py-5 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Custom Graphic Design Solutions"
                        description="Chetu offers Custom Graphic Design Solutions to create custom logos, personalized email marketing campaigns, digital brochures, social media graphics, videos, and other one-of-a-kind digital marketing materials."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/animation-graphic-design-banner/10011.png"
                                alt="Portfolio"
                                className="w-130 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={graphicdesignsolutions}
                                iconAlign="horizontal"

                            />
                        </div>
                    </div>

                </PageLayout>

            </section>

            <section>
                <PageLayout className="py-16 space-y-8 text-center">

                    <FeaturesListOpposite
                        features={featuresListOppositeoptions}

                    />
                </PageLayout>
            </section>

            <section>
                <PageLayout className="py-16 space-y-8 text-center">
                    <Iconrender webdesignintegrations={webdesignintegrations} />
                </PageLayout>


            </section>
            <section>
                <PageLayout className="py-16 space-y-8 text-center">
                    <Headline
                        title="Artificial Intelligence Solutions for 3D Animation"
                        description="Chetu’s AI specialists transform animation production by enabling the creation of modern, intuitive animation assets promoting engagement, enhanced task automation, and reduce time-to-market with error-free automated QA testing, mitigating expenses."
                    />
                    <FeaturesListOpposite
                        features={artificialIntelligencesolutions}

                    />
                </PageLayout>
            </section>
            <section>
                <div className="mb-16 mt-2">
                    <FaqSection faqs={aviationFaqs} title="Frequently Asked Questions for 3D Animation Services" />
                </div>
            </section>

            <section>
                <PortfolioGrid items={portfolioItems} />

            </section>
        </>
    )
}

export default AnimationGraphicDesign

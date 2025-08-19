import React from 'react'
import HeroSection from "@/components/HeroSection";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Headline, } from "@/custom/Typography";
import Iconrender from '@/components/Iconrender';

import PortfolioGrid from "@/components/PortfolioGrid";
import { aRServices, vRServices, mrServices, aiArVrSolutions, arVrSolutions, features, webdesignintegrations, Faqs, portfolioItems } from './Data';
const Arvr = () => {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/ar-vr.jpg"
                title="CUSTOM XR / AR VR SOFTWARE DEVELOPMENT COMPANY"
                description="Unlocking Immersive XR / AR VR Experiences with Custom AI-Integrated Solutions"
                buttonText="BOOK YOUR FREE AI CONSULTATION"
                buttonLink="#"
                imageFit="cover"
            />
            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Custom Web Design & Animation Solutions"
                        description="We develop, integrate, and customize attention-grabbing 2D and 3D animations with CRO in mind, capturing real-time interactions, and providing live data analytics to improve user experience and increase ROI."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={vRServices}
                                iconAlign="horizontal"

                            />
                        </div>
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/ar-vr/10002.png"
                                alt="Portfolio"
                                className="w-125 mx-auto"
                            />
                        </FadeInWhenVisible>

                    </div>
                    <Button variant="hover">BOOK YOUR FREE AI CONSULTATION</Button>

                </PageLayout>

            </section>
            <section className="py-5 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Hire Experienced XR / Augmented Reality (AR) Developers"
                        description="Our augmented reality software experts engineer new AR software solutions from the ground up or revamp your current solution with custom integrations to generate the ultimate immersive & cinematic experience."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/ar-vr/10006.png"
                                alt="Portfolio"
                                className="w-60 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={aRServices}
                                iconAlign="horizontal"

                            />
                        </div>
                    </div>

                </PageLayout>

            </section>
            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={mrServices.slice(0, 2)}
                                iconAlign="horizontal"

                            />
                        </div>
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/ar-vr/10010.png"
                                alt="Portfolio"
                                className="w-75 mx-auto"
                            />
                        </FadeInWhenVisible>

                    </div>

                </PageLayout>

            </section>
            <section className="py-15">
                <PageLayout className="space-y-10 text-center">
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">

                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/ar-vr/10011.png"
                                alt="Portfolio"
                                className="w-100 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={mrServices.slice(2, 5)}
                                iconAlign="horizontal"

                            />
                        </div>
                    </div>
                    <Button variant="hover">GET THE AR/VR SOLUTION</Button>

                </PageLayout>

            </section>
            <section className="bg-secondary py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="AI-Powered XR / AR VR Development Solutions"
                        description="U Tech’s XR AI specialists transform AR/VR technology to create modern, immersive, individualized experiences that push industry boundaries and propel strategies forward. Our dedicated developers unlock new, actionable insights to make the impossible a truly attainable reality with cutting-edge, customized analytics to drive innovation."
                    />
                    <FeaturesList features={aiArVrSolutions} grid3 fadeUp={fadeUp} center />
                    <Button variant="hover">Hire AI AR/VR Specialists</Button>


                </PageLayout>

            </section>
            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={arVrSolutions}
                                iconAlign="horizontal"

                            />
                        </div>
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/ar-vr/10021.png"
                                alt="Portfolio"
                                className="w-100 mx-auto"
                            />
                        </FadeInWhenVisible>

                    </div>

                </PageLayout>

            </section>

            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <div className="space-y-8">
                        <FeaturesList
                            fadeUp={fadeUp}
                            features={arVrSolutions}
                            center
                            grid3

                        />
                    </div>


                </PageLayout>

            </section>
            <section className="bg-secondary py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="XR / AR VR Software Support Services"
                        description="U Tech provides unrivaled XR support services to empower clients and generate new revenue opportunities, leveraging cutting-edge, AI-driven resources. We ensure optimal performance of all customized AI-powered AR/VR solutions and create individualized training for enriching end-user experiences."
                    />
                    <FeaturesList features={features} grid3 fadeUp={fadeUp} center />
                </PageLayout>

            </section>
            <section>
                <PageLayout className="py-16 space-y-8 text-center">
                    <Iconrender center webdesignintegrations={webdesignintegrations} />
                    <Button variant="hover">HIRE AR/VR DEVELOPERS</Button>

                </PageLayout>
            </section>

            <section>
                <div className="mb-16 mt-2">
                    <FaqSection faqs={Faqs} title="Frequently Asked Questions for XR / AR VR Solutions" />
                </div>
            </section>

            <section>
                <PortfolioGrid items={portfolioItems} />

            </section>


        </>
    )
}

export default Arvr

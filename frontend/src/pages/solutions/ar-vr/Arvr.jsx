import HeroSection from "@/components/HeroSection";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, } from "@/custom/Typography";
import Iconrender from '@/components/Iconrender';
import PortfolioGrid from "@/components/PortfolioGrid";
import {
    aRServices,
    vRServices,
    mrServices,
    aiArVrSolutions,
    arVrSolutions,
    features,
    webdesignintegrations,
    Faqs,
    portfolioItems
} from './Data';

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

            <PageLayout className="space-y-10 py-16 text-center">
                <Headline
                    title="Custom Web Design & Animation Solutions"
                    description="We develop, integrate, and customize attention-grabbing 2D and 3D animations with CRO in mind, capturing real-time interactions, and providing live data analytics to improve user experience and increase ROI."
                />
                <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
                    <div className="order-2 sm:order-1">
                        <FeaturesList
                            fadeUp={fadeUp}
                            features={vRServices}
                            iconAlign="horizontal"
                        />
                    </div>
                    <FadeInWhenVisible delay={0.5} className="order-1 sm:order-2">
                        <img
                            loading="lazy"
                            src="/assets/solutions/ar-vr/10002.png"
                            alt="Portfolio"
                            className="w-82 md:w-110 mx-auto"
                        />
                    </FadeInWhenVisible>
                </div>
                <ContactUsButton variant="hover">BOOK YOUR FREE AI CONSULTATION</ContactUsButton>
            </PageLayout>

            <section className="py-16 bg-secondary">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Hire Experienced XR / Augmented Reality (AR) Developers"
                        description="Our augmented reality software experts engineer new AR software solutions from the ground up or revamp your current solution with custom integrations to generate the ultimate immersive & cinematic experience."
                    />
                    <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/ar-vr/10006.png"
                                alt="Portfolio"
                                className="w-42 md:w-54 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={aRServices}
                            iconAlign="horizontal"
                        />
                    </div>
                </PageLayout>
            </section>

            <PageLayout className="space-y-10 py-16 text-center">
                <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
                    <div className="order-2 sm:order-1">
                        <FeaturesList
                            features={mrServices.slice(0, 2)}
                            iconAlign="horizontal"
                        />
                    </div>
                    <FadeInWhenVisible delay={0.5} className="order-1 sm:order-2">
                        <img
                            loading="lazy"
                            src="/assets/solutions/ar-vr/10010.png"
                            alt="Portfolio"
                            className="md:w-110 w-84 mx-auto"
                        />
                    </FadeInWhenVisible>
                </div>
                <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
                    <FadeInWhenVisible delay={0.5}>
                        <img
                            loading="lazy"
                            src="/assets/solutions/ar-vr/10011.png"
                            alt="Portfolio"
                            className="w-135 mx-auto"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={mrServices.slice(2, 5)}
                        iconAlign="horizontal"
                    />
                </div>
                <ContactUsButton variant="hover">GET THE AR/VR SOLUTION</ContactUsButton>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="AI-Powered XR / AR VR Development Solutions"
                        description="U Tech’s XR AI specialists transform AR/VR technology to create modern, immersive, individualized experiences that push industry boundaries and propel strategies forward. Our dedicated developers unlock new, actionable insights to make the impossible a truly attainable reality with cutting-edge, customized analytics to drive innovation."
                    />
                    <FeaturesList
                        features={aiArVrSolutions}
                        grid3
                        center
                    />
                    <ContactUsButton variant="hover">Hire AI AR/VR Specialists</ContactUsButton>
                </PageLayout>
            </section>

            <PageLayout className="space-y-10 py-16 text-center">
                <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
                    <FeaturesList
                        features={arVrSolutions}
                        iconAlign="horizontal"
                    />
                    <FadeInWhenVisible delay={0.5}>
                        <img
                            loading="lazy"
                            src="/assets/solutions/ar-vr/10021.png"
                            alt="Portfolio"
                            className="md:w-100 w-84 mx-auto"
                        />
                    </FadeInWhenVisible>
                </div>
                <FeaturesList
                    fadeUp={fadeUp}
                    features={arVrSolutions}
                    center
                    grid3
                />
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="XR / AR VR Software Support Services"
                        description="U Tech provides unrivaled XR support services to empower clients and generate new revenue opportunities, leveraging cutting-edge, AI-driven resources. We ensure optimal performance of all customized AI-powered AR/VR solutions and create individualized training for enriching end-user experiences."
                    />
                    <FeaturesList
                        features={features}
                        grid3
                        center
                    />
                </PageLayout>
            </section>

            <PageLayout className="py-8 space-y-8 text-center">
                <Iconrender center webdesignintegrations={webdesignintegrations} />
                <ContactUsButton variant="hover">HIRE AR/VR DEVELOPERS</ContactUsButton>
            </PageLayout>

            <div className="py-8">
                <FaqSection faqs={Faqs} title="Frequently Asked Questions for XR / AR VR Solutions" />
            </div>

            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

export default Arvr

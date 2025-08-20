import React from 'react'
import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Headline, } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import { BlockchainSecurity, testimonials, blockchainBenefits, blockchainSolutions, blockchainSolutions2, blockchainServices, webdesignintegrations, Faqs, portfolioItems } from './Data';
import { TestimonialSection } from "@/components/TestimonialSection";
import Iconrender from '@/components/Iconrender';


const Blockchain = () => {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/blockchain.jpg"
                title="BLOCKCHAIN DEVELOPMENT SERVICES"
                buttonText="Hire Blockchain Developers"
                buttonLink="#"
                imageFit="cover"
            />


            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Hire Certified Autodesk Experts with Industry Experience"
                        description="Chetu’s certified industry experts use Autodesk solutions to provide end-to-end project services for businesses in all kinds of professional fields."
                    />
                    <div className="grid grid-cols-1 items-center gap-y-7 md:grid-cols-2">

                        <FeaturesList
                            fadeUp={fadeUp}
                            features={BlockchainSecurity}
                            iconAlign="horizontal"

                        />
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/blockchain/10002.png"
                                alt="Portfolio"
                                className="w-135 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>
                    <Button variant="hover">CHECK METRICS ON AWS NOW</Button>

                </PageLayout>

            </section>

            <section>
                <TestimonialSection testimonials={testimonials} />
            </section>

            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="We Build Custom Blockchain Applications"
                        description="Chetu designs and integrates custom Blockchain Applications into existing enterprise systems for businesses to leverage a safe, secure environment for diverse business transactions."
                    />
                    <div className="grid grid-cols-1 items-center gap-y-7 md:grid-cols-2">
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/blockchain/10003.png"
                                alt="Portfolio"
                                className="w-65 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            fadeUp={fadeUp}
                            features={blockchainBenefits}
                            iconAlign="horizontal"

                        />

                    </div>
                </PageLayout>

            </section>
            <section className="py-10">
                <PageLayout className="space-y-10 text-center">
                    <div className="grid grid-cols-1 items-center gap-y-7 md:grid-cols-2">
                        <FeaturesList
                            fadeUp={fadeUp}
                            features={blockchainSolutions}
                            grid
                            center

                        />
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/blockchain/10004.png"
                                alt="Portfolio"
                                className="w-120 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>
                    <Button variant="hover">HIRE APP DEVELOPER</Button>

                </PageLayout>

            </section>


            <section className="bg-secondary py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Custom Blockchain Solutions"
                        description="We develop Custom Blockchain Solutions and cryptocurrency development from scratch or by integrating customized features & components into existing systems for finance & banking, supply chain, retail & e-commerce, healthcare, and gaming markets."
                    />
                    <FeaturesList features={blockchainSolutions2} grid3 fadeUp={fadeUp} center />
                    <Button variant="hover">Get Biometric Solutions</Button>

                </PageLayout>

            </section>


            <section className="py-10">
                <PageLayout className="space-y-10 text-center">
                    <div className="grid grid-cols-1 items-center gap-y-7 md:grid-cols-2">
                        <FeaturesList
                            fadeUp={fadeUp}
                            features={blockchainServices}
                            iconAlign="horizontal"


                        />
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/blockchain/10005.png"
                                alt="Portfolio"
                                className="w-50 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>
                    <Button variant="hover">GET CUSTOM NFT SOFTWARE</Button>

                </PageLayout>

            </section>

            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Blockchain Technology Integrations"
                        description="We leverage third-party blockchain platform APIs to develop a customized approach to your blockchain solution, delivering added scalability, flexibility, and enhanced security."
                    />
                    <div className="grid grid-cols-1 items-center gap-y-7 md:grid-cols-2">
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/blockchain/10006.png"
                                alt="Portfolio"
                                className="w-90 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <Iconrender webdesignintegrations={webdesignintegrations} />



                    </div>
                </PageLayout>

            </section>
            <section>
                <div className="py-8">
                    <FaqSection faqs={Faqs} title="Frequently Asked Questions" />
                </div>
            </section>
            <section>
                <PortfolioGrid items={portfolioItems} />
            </section>

        </>
    )
}

export default Blockchain

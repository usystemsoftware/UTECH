import HeroSection from "@/components/HeroSection";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { TestimonialSection } from "@/components/TestimonialSection";
import Iconrender from '@/components/Iconrender';
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Headline, } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
    BlockchainSecurity,
    testimonials,
    blockchainBenefits,
    blockchainSolutions,
    blockchainSolutions2,
    blockchainServices,
    webdesignintegrations,
    Faqs,
    portfolioItems
} from './Data';

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

            <PageLayout className="space-y-10 py-16 text-center">
                <Headline
                    title="Hire Certified Autodesk Experts with Industry Experience"
                    description="U Tech’s certified industry experts use Autodesk solutions to provide end-to-end project services for businesses in all kinds of professional fields."
                />
                <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                    <div className="order-2 sm:order-1">
                        <FeaturesList
                            features={BlockchainSecurity}
                            iconAlign="horizontal"
                        />
                    </div>
                    <FadeInWhenVisible className="order-1 sm:order-2">
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

            <TestimonialSection testimonials={testimonials} />

            <section className="py-16 bg-secondary">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="We Build Custom Blockchain Applications"
                        description="U Tech designs and integrates custom Blockchain Applications into existing enterprise systems for businesses to leverage a safe, secure environment for diverse business transactions."
                    />
                    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/solutions/blockchain/10003.png"
                                alt="Portfolio"
                                className="w-48 md:w-56 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={blockchainBenefits}
                            iconAlign="horizontal"
                        />
                    </div>
                </PageLayout>
            </section>

            <PageLayout className="space-y-16 py-16 text-center">
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
                    <FeaturesList
                        features={blockchainSolutions}
                        grid
                        center
                    />
                    <FadeInWhenVisible className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/solutions/blockchain/10004.png"
                            alt="Portfolio"
                            className="w-135 mx-auto"
                        />
                    </FadeInWhenVisible>
                </div>
                <Button variant="hover">HIRE APP DEVELOPER</Button>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Custom Blockchain Solutions"
                        description="We develop Custom Blockchain Solutions and cryptocurrency development from scratch or by integrating customized features & components into existing systems for finance & banking, supply chain, retail & e-commerce, healthcare, and gaming markets."
                    />
                    <FeaturesList
                        features={blockchainSolutions2}
                        grid3
                        center
                    />
                    <Button variant="hover">Get Biometric Solutions</Button>
                </PageLayout>
            </section>

            <PageLayout className="space-y-10 py-12 text-center">
                <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                    <FeaturesList
                        features={blockchainServices}
                        iconAlign="horizontal"
                    />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/blockchain/10005.png"
                            alt="Portfolio"
                            className="md:w-54 w-48 mx-auto"
                        />
                    </FadeInWhenVisible>
                </div>
                <Button variant="hover">GET CUSTOM NFT SOFTWARE</Button>
            </PageLayout>

            <section className="py-16 bg-secondary">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Blockchain Technology Integrations"
                        description="We leverage third-party blockchain platform APIs to develop a customized approach to your blockchain solution, delivering added scalability, flexibility, and enhanced security."
                    />
                    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/solutions/blockchain/10006.png"
                                alt="Portfolio"
                                className="w-96 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <Iconrender webdesignintegrations={webdesignintegrations} />
                    </div>
                </PageLayout>
            </section>

            <div className="py-12">
                <FaqSection faqs={Faqs} title="Frequently Asked Questions" />
            </div>

            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

export default Blockchain

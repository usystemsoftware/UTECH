import React from 'react'
import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Headline, } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import { biometricIndustries, biometricServices, biometricSolutions, biometricSolutions2, Faqs, portfolioItems } from './Data';
const Biometrics = () => {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/biometrics.jpg"
                title="CUSTOM AUTODESK CONSULTING & IMPLEMENTATION SOLUTIONS"
                buttonText="Hire Expert Developers"
                buttonLink="#"
                imageFit="cover"
            />


            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <div className="grid grid-cols-1 items-center gap-y-7 md:grid-cols-2">

                        <FadeInWhenVisible delay={0.5} className="">
                            <img
                                loading="lazy"
                                src="/assets/solutions/biometrics/10034.gif"
                                alt="Portfolio"
                                className="w-75 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={biometricSolutions}
                                iconAlign="horizontal"

                            />
                        </div>
                    </div>
                </PageLayout>

            </section>

            <section className="py-10">
                <PageLayout className="space-y-10 text-center">

                    <FeaturesList features={biometricServices} grid iconAlign="horizontal"
                        fadeUp={fadeUp} />
                    <Button variant="hover">Hire Industry Tech Experts</Button>

                </PageLayout>

            </section>
            <section className="bg-secondary py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Industry Solutions"
                        description="Chetu’s biometric software development services in the following sectors: finance, healthcare, government, education, and many more. We develop cutting-edge biometric solutions software aimed at enhancing operations and security within specific industries."
                    />
                    <FeaturesList features={biometricIndustries} grid3 fadeUp={fadeUp} center />
                    <Button variant="hover">Get Biometric Solutions</Button>

                </PageLayout>

            </section>
            <section className=" py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="AI-Powered Biometric System Solutions"
                        description="Our biometric software development incorporates artificial intelligence for better accuracy, security, and flexibility. Being a tailored biometric software development firm, we provide cutting-edge advanced biometric solutions software powered by AI and machine learning technologies."
                    />
                    <FeaturesList features={biometricSolutions2} grid fadeUp={fadeUp} iconAlign="horizontal"
                    />
                    <Button variant="hover">Hire a Reliable Biometric System Developer</Button>

                </PageLayout>

            </section>

            <section>
                <div className="py-8">
                    <FaqSection faqs={Faqs} title="Biometric Software: Frequently Asked Questions" />
                </div>
            </section>

            <section>
                <PortfolioGrid items={portfolioItems} />
            </section>

        </>
    )
}

export default Biometrics

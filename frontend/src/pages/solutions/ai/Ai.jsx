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
import { artificialintelligencedeveloper, solutions, advancedartificialintelligencesolutions, artificialintelligenceusecases, aitoolsandframeworks, videosection, features, industryspecificsisolutions, industryspecificsisolutionssection2, integratedaisolutions, Faqs, portfolioItems } from './Data';
import VideoPoster from "@/custom/VideoPoster";

const Ai = () => {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/ai.jpg"
                title="CUSTOM AI SOFTWARE DEVELOPMENT"
                description="Let’s explore how a tailored AI solution can revolutionize your workflows, boost performance, and maximize ROI—giving you the ultimate competitive edge."
                buttonText="BOOK YOUR FREE AI CONSULTATION"
                buttonLink="#"
                imageFit="cover"
            />

            <section className="py-5 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Hire An Experienced Artificial Intelligence Developer"
                        description="Our expert developers help businesses optimize their operations, create advanced software, and develop innovative products as part of your existing in-house team or on a turnkey basis to help you complete your project quickly and affordably."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/ai/10002.png"
                                alt="Portfolio"
                                className="w-130 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={artificialintelligencedeveloper}
                                iconAlign="horizontal"

                            />
                        </div>
                    </div>

                </PageLayout>

            </section>

            <section>
                <PageLayout className="mt-20 text-center space-y-10">

                    <FadeInWhenVisible delay={0.5}>
                        <img
                            loading="lazy"
                            src="/assets/solutions/ai/10006.gif"
                            alt="Portfolio"
                            className="mx-auto"
                        />
                    </FadeInWhenVisible>
                    <Button variant="hover">Explore The Full Track2AI Framework</Button>

                </PageLayout>
            </section>
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
                                features={solutions}
                                grid
                                center
                            />
                        </div>
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/ai/10007.png"
                                alt="Portfolio"
                                className="w-125 mx-auto"
                            />
                        </FadeInWhenVisible>

                    </div>
                    <Button variant="hover">BOOK YOUR FREE AI CONSULTATION</Button>

                </PageLayout>

            </section>

            <section className="bg-secondary py-12">
                <PageLayout className="space-y-8 text-center">
                    <Headline
                        title="AI Solutions for the Airline Industry"
                        description="U Tech's advanced AI solutions revolutionize the airline industry by optimizing revenue management, flight management, predictive maintenance, and more. With cutting-edge technology and industry expertise, our AI-driven systems provide real-time insights, streamline workflows, and ensure regulatory compliance."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
                        <FeaturesList features={advancedartificialintelligencesolutions.slice(0, 3)} fadeUp={fadeUp} center />
                        <FadeInWhenVisible className="hidden md:block">
                            <img
                                src="/assets/solutions/ai/10012.png"
                                alt="img"
                                loading="lazy"
                                className="w-110 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList features={advancedartificialintelligencesolutions.slice(3, 6)} center />
                    </div>
                    <Button variant="hover">BOOK YOUR FREE AI CONSULTATION</Button>

                </PageLayout>

            </section>

            <section className="bg-secondary py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Artificial Intelligence Use Cases"
                        description="Explore diverse Artificial Intelligence use cases with U Tech, empowering businesses to automate tasks, optimize decision-making, and drive innovative digital transformation."
                    />
                    <FeaturesList features={artificialintelligenceusecases} grid3 fadeUp={fadeUp} center />
                    <Button variant="hover">BOOK YOUR FREE AI CONSULTATION</Button>


                </PageLayout>

            </section>

            <section className="bg-secondary py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="AI Tools and Frameworks"
                        description="Discover AI tools and frameworks – LangChain, Kernel, Open AI, Gemini, LLM and U Tech’s Track2Ai – empowering rapid, intelligent development."
                    />
                    <FeaturesList features={aitoolsandframeworks} grid3 fadeUp={fadeUp} center />
                    <Button variant="hover">BOOK YOUR FREE AI CONSULTATION</Button>


                </PageLayout>

            </section>
            <section className="py-5">
                <PageLayout className="space-y-10 space-x-2 text-center">
                    <Headline
                        title="Hire An Experienced Artificial Intelligence Developer"
                        description="Our expert developers help businesses optimize their operations, create advanced software, and develop innovative products as part of your existing in-house team or on a turnkey basis to help you complete your project quickly and affordably."
                    />

                    <div className="grid grid-cols-1 space-y-10 items-center lg:grid-cols-2">
                        {/* Features List */}
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={videosection}
                                iconAlign="horizontal"
                            />
                        </div>

                        {/* Video Section */}
                        <div className="flex justify-center items-center">
                            <div className="relative w-full lg:max-w-lg aspect-video rounded-2xl shadow-lg border-12 border-black">
                                <video
                                    className="w-full h-full"
                                    controls
                                // poster="/assets/solutions/ai/10002.png"
                                >
                                    <source src="/assets/videos/ai-demo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </PageLayout>
            </section>
            <section className="relative w-full overflow-hidden">
                <VideoPoster
                    features={features}
                    title="Smarter Tech, Bigger Impact: Explore the Latest in AI"
                />
            </section>
            <section className="py-5 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Industry Specific AI Solutions"
                        description="We develop, integrate, and customize attention-grabbing 2D and 3D animations with CRO in mind, capturing real-time interactions, and providing live data analytics to improve user experience and increase ROI."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={industryspecificsisolutions}
                                iconAlign="horizontal"


                            />
                        </div>
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/ai/10031.png"
                                alt="Portfolio"
                                className="w-70 mx-auto"
                            />
                        </FadeInWhenVisible>

                    </div>
                    <Button variant="hover">BOOK YOUR FREE AI CONSULTATION</Button>

                </PageLayout>

            </section>
            <section className="py-5 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Hire An Experienced Artificial Intelligence Developer"
                        description="Our expert developers help businesses optimize their operations, create advanced software, and develop innovative products as part of your existing in-house team or on a turnkey basis to help you complete your project quickly and affordably."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/ai/10032.png"
                                alt="Portfolio"
                                className="w-130 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={industryspecificsisolutionssection2}
                                iconAlign="horizontal"

                            />
                        </div>
                    </div>
                    <Button variant="hover">BOOK YOUR FREE AI CONSULTATION</Button>

                </PageLayout>

            </section>

            <section>

                <PageLayout className="py-16 space-y-8 text-center">
                    <Iconrender center webdesignintegrations={integratedaisolutions} />
                    <Button variant="hover">BOOK YOUR FREE AI CONSULTATION</Button>

                </PageLayout>
            </section>


            <section>
                <div className="mb-16 mt-2">
                    <FaqSection faqs={Faqs} title="Frequently Asked Questions for 3D Animation Services" />
                </div>
            </section>
            <section>
                <PortfolioGrid items={portfolioItems} />

            </section>

        </>
    )
}

export default Ai

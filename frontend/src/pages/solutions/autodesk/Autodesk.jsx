import React from 'react'
import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Headline, } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import { TypographyList2 } from '@/custom/Typography';
import { autodeskAISolutions, autodeskIndustrySolutions, autodeskProductsData, autodeskServices, autodeskSupportData, consultingServices, Faqs, portfolioItems, tvpoasterDescription } from './Data';
import VideoTvPoster from "@/custom/VideoTvPoster";

const Autodesk = () => {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/autodesk.jpg"
                title="CUSTOM AUTODESK CONSULTING & IMPLEMENTATION SOLUTIONS"
                buttonText="HIRE AWS DEVELOPERS"
                buttonLink="#"
                imageFit="cover"
            />
            <section className="bg-secondary py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="AWS Migration Services"
                        description="Chetu offers comprehensive migration services to help businesses transition to Amazon Web Services (AWS). We tailor solutions to your needs, ensuring efficient data and application transfer with minimal disruption."
                    />
                    <FeaturesList features={autodeskServices} grid3 fadeUp={fadeUp} center />
                    <FadeInWhenVisible delay={0.5}>
                        <img
                            loading="lazy"
                            src="/assets/solutions/autodesk/10019.gif"
                            alt="Portfolio"
                            className="w-125 mx-auto"
                        />
                    </FadeInWhenVisible>
                    <Button variant="hover">CONTACT FOR AUTODESK CONSULTING SERVICES</Button>

                </PageLayout>

            </section>

            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Hire Certified Autodesk Experts with Industry Experience"
                        description="Chetu’s certified industry experts use Autodesk solutions to provide end-to-end project services for businesses in all kinds of professional fields."
                    />
                    <div className="grid grid-cols-1 items-center gap-y-7 md:grid-cols-2">
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/autodesk/10020.png"
                                alt="Portfolio"
                                className="w-135 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            fadeUp={fadeUp}
                            features={autodeskIndustrySolutions}
                            iconAlign="horizontal"

                        />

                    </div>
                    <Button variant="hover">CHECK METRICS ON AWS NOW</Button>

                </PageLayout>

            </section>
            <section className="bg-secondary py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Chetu Provides Cutting-Edge AI-Powered Autodesk Solutions"
                        description="Chetu’s AI experts and certified Autodesk solutions team empower today’s architects, engineers, and designers by creating and integrating scalable, robust resources, facilitating innovation and unprecedented efficiency."
                    />
                    <FeaturesList features={autodeskAISolutions} grid3 fadeUp={fadeUp} center />
                    <Button variant="hover">Get AI-Powered Autodesk Solutions</Button>

                </PageLayout>

            </section>
            <section>
                <VideoTvPoster imageHeight="250px" information={tvpoasterDescription} />

            </section>

            <section className="bg-secondary py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Advanced Autodesk Support Solutions"
                        description="Our technical prowess expands beyond designing customized software solutions; we offer seamless Autodesk integration with continuous technical support and monitoring, ensuring 24/7 expertise and the optimal performance of all enhanced Autodesk resources to provide enriching, end-user experiences."
                    />
                    <FeaturesListOpposite features={autodeskSupportData} />
                    <Button variant="hover">Seamless Autodesk Support – Let’s Talks</Button>

                </PageLayout>

            </section>

            <section className="bg-secondary py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Chetu’s Autodesk Product Expertise"
                        description="We have unparalleled expertise in a wide variety of Autodesk products, including Revit, BIM 360, AutoCAD, Platform Services, Maya, Fusion 360, Inventor, Civil 3D, and many more. Our services include custom programming and integration solutions to tailor these tools to business needs and ensure seamless connectivity with other Autodesk products."
                    />
                    <FeaturesList features={autodeskProductsData} grid3 fadeUp={fadeUp} center />
                    <Button variant="hover">Get AI-Powered Autodesk Solutions</Button>

                </PageLayout>

            </section>

            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="AWS Tools & Technologies"
                        description="Chetu will customize, test, and deploy your custom web or mobile applications to AWS using top-of-the-line AWS products, tools, & technologies throughout the entire project lifecycle."
                    />
                    <div className="grid grid-cols-1 gap-y-7 items-center md:grid-cols-2">

                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/solutions/autodesk/10030.png"
                                alt="Portfolio"
                                className="w-130 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <div className="grid justify-center">

                            <TypographyList2 className="text-slate-800 text-left [&>li]:mt-3" items={consultingServices} />
                        </div>
                    </div>
                    <Button variant="hover">GET AUTODESK BOH SUPPORT</Button>

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

export default Autodesk

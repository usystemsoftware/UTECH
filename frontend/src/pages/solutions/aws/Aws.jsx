import React from 'react'
import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Headline, } from "@/custom/Typography";
import Iconrender from '@/components/Iconrender';
import PortfolioGrid from "@/components/PortfolioGrid";
import {
    awsServices,
    awsAdditionalServices,
    awsMigrationServices,
    awsConsultingSolutions,
    awsAiMlSolutions,
    awsDevOpsServices,
    awsPerformanceOptimization,
    awsNetworkingServices

} from './Data';
const Aws = () => {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/aws.jpg"
                title="AWS DEVELOPMENT SERVICES"
                buttonText="HIRE AWS DEVELOPERS"
                buttonLink="#"
                imageFit="cover"
            />
            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="CHire Our Industry Leading AWS Development Company"
                        description="As an AWS certified partner, Chetu’s team of experts provide AWS configurations, migrations, integrations, and consulting services to help enterprises scale their business applications up or down to match with high or low-velocity demand."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={awsServices}
                                iconAlign="horizontal"

                            />
                        </div>
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/aws/10002.png"
                                alt="Portfolio"
                                className="w-125 mx-auto"
                            />
                        </FadeInWhenVisible>

                    </div>
                </PageLayout>

            </section>

            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">

                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/aws/10032.png"
                                alt="Portfolio"
                                className="w-128 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={awsAdditionalServices}
                                iconAlign="horizontal"

                            />
                        </div>
                    </div>
                    <Button variant="hover">BOOK YOUR FREE AI CONSULTATION</Button>

                </PageLayout>

            </section>
            <section className="bg-secondary py-5">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="AWS Migration Services"
                        description="Chetu offers comprehensive migration services to help businesses transition to Amazon Web Services (AWS). We tailor solutions to your needs, ensuring efficient data and application transfer with minimal disruption."
                    />
                    <FeaturesList features={awsMigrationServices} grid3 fadeUp={fadeUp} center />
                </PageLayout>

            </section>

            <section>

                <PageLayout className="py-16 space-y-8 text-center">
                    <Headline
                        title="AWS Consulting Services"
                        description="Chetu offers comprehensive AWS consulting, covering cloud strategy development, application modernization, performance tuning, and security and compliance to enhance your AWS infrastructure and support your business objectives."
                    />
                    <FeaturesListOpposite
                        features={awsConsultingSolutions}
                    />
                    <Button variant="hover">HIRE AWS CONSULTING</Button>

                </PageLayout>
            </section>
            <section>

                <PageLayout className="py-16 space-y-8 text-center">
                    <Headline
                        title="Enhance Your Amazon Web Services with AWS AI Services"
                        description="Enhancing your AWS products with fundamental and impactful AI solutions; our experts are more than ready to streamline and improve your day-to-day processes."
                    />
                    <FeaturesListOpposite
                        features={awsAiMlSolutions}
                    />
                    <Button variant="hover">INTEGRATE AWS AI SERVICES</Button>

                </PageLayout>
            </section>
            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="AWS DevOps Services"
                        description="Chetu implements the best AWS solutions for DevOps services including process automation, streamlining CI/CD pipelines, and infrastructure management to deliver faster and more reliable application deployment on AWS."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <div className="space-y-8">
                            <FeaturesList
                                fadeUp={fadeUp}
                                features={awsDevOpsServices}
                                iconAlign="horizontal"

                            />
                        </div>
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/aws/10033.png"
                                alt="Portfolio"
                                className="w-135 mx-auto"
                            />
                        </FadeInWhenVisible>

                    </div>
                    <Button variant="hover">GET AWS DEVOPS SERVICES</Button>

                </PageLayout>

            </section>

            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="AWS Application Deployment & Monitoring"
                        description="Chetu, a certified AWS partner, deploys applications, websites, and e-commerce stores on AWS, providing detailed insights into CPU, server, memory, and web traffic metrics to help optimize resource costs."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/aws/10035.png"
                                alt="Portfolio"
                                className="w-135 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            fadeUp={fadeUp}
                            features={awsPerformanceOptimization}
                            iconAlign="horizontal"

                        />

                    </div>
                    <Button variant="hover">CHECK METRICS ON AWS NOW</Button>

                </PageLayout>

            </section>


            <section className="py-10 ">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Implement Custom AWS Networking Services"
                        description="Our AWS services support companies with setting up, securing, and monitoring your network to ensure that you’re able to manage your growing number of VPCs, simplify your network, secure your traffic, and provide hybrid connectivity between your on-premise & AWS networks."
                    />
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">

                        <FeaturesList
                            fadeUp={fadeUp}
                            features={awsNetworkingServices}
                            iconAlign="horizontal"

                        />
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/solutions/aws/10034.png"
                                alt="Portfolio"
                                className="w-132 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>
                    <Button variant="hover">CHECK METRICS ON AWS NOW</Button>

                </PageLayout>

            </section>
        </>
    )
}

export default Aws

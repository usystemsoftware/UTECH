import React from 'react'
import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import { TypographyList2 } from '@/custom/Typography';
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import { services, services2, services3, expertise } from './Data';
const Services = () => {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/services.jpg"
                title="CUSTOM SOFTWARE DEVELOPMENT SERVICES"
                description="Transforming Industries with AI-Powered Custom Software Development Solutions"
                buttonText="GET CUSTOM SOFTWARE SOLUTIONS"
                buttonLink="#"
                imageFit="cover"
            />

            <section className="py-16">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Custom Software Development Company With Dedicated Developers Offering Vast Industry-Specific Experience"
                        description="We provide world-class custom software development services for startups, small-to-midsize (SMB), and enterprise-size businesses. Our expertise also extends to providing dedicated software development support, ensuring optimal performance and long-term success for your projects."
                    />
                    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/services/services/10035.png"
                                alt="Portfolio"
                                className="w-96 sm:w-135 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={services}
                            iconAlign="horizontal"
                        />
                    </div>
                </PageLayout>
            </section>

            <section className='py-5'>

                <PageLayout className="space-y-10 text-center">
                    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                        <FeaturesList
                            features={services2}
                            iconAlign="horizontal"
                        />
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/services/services/10036.png"
                                alt="Portfolio"
                                className="w-90 sm:w-100 mx-auto"
                            />
                        </FadeInWhenVisible>

                    </div>
                    <ContactUsButton variant="hover">HIRE APPLICATION SOFTWARE DEVELOPMENT SERVICES</ContactUsButton>
                </PageLayout>
            </section>

            <section className='py-10 bg-secondary'>

                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title="Custom Software Solutions"
                        description="Augment your existing development team to complete a big project or build a new software solution or application from scratch with the best custom software development company, Chetu."
                    />
                    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/services/services/10037.png"
                                alt="Portfolio"
                                className="w-90 sm:w-130 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={services3}
                            iconAlign="horizontal"
                        />


                    </div>
                    <ContactUsButton variant="hover">GET CUSTOM SOFTWARE SERVICES</ContactUsButton>
                </PageLayout>
            </section>

            <section className='py-10'>

                <PageLayout className="space-y-10 text-center">
                    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 ">
                            <div>
                                {
                                    expertise.slice(0, 9).map((item, index) =>
                                        <li key={index} className="flex items-start space-y-1">
                                            <span className="text-black text-2xl mr-2 -mt-1">•</span>
                                            <span className="text-teal-600 hover:text-teal-700 transition-colors duration-200 cursor-pointer">{item}</span>
                                        </li>
                                    )
                                }
                            </div>


                            <div>
                                {
                                    expertise.slice(9, 16).map((item, index) =>
                                        <li key={index} className="flex items-start space-y-1">
                                            <span className="text-black text-2xl mr-2 -mt-1">•</span>
                                            <span className="text-teal-600 hover:text-teal-700 transition-colors duration-200 cursor-pointer">{item}</span>
                                        </li>
                                    )
                                }
                            </div>

                        </div>

                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/services/services/10038.png"
                                alt="Portfolio"
                                className="w-90 sm:w-150 mx-auto"
                            />
                        </FadeInWhenVisible>



                    </div>
                </PageLayout>
            </section>



        </>
    )
}

export default Services

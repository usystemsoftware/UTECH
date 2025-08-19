import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import VideoTvPoster from "@/custom/VideoTvPoster";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Check } from "lucide-react";
import {
    Headline,
    TypographyMuted,
    TypographySmall
} from "@/custom/Typography";
import {
    faqs,
    gisAnalyticsServices,
    gisDataSolutions,
    gisEmergingServices,
    gisServices,
    gisTechnologies,
    portfolioCaseStudies,
    portfolioItems
} from "./Data";

export default function GIS() {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/gis-banner.jpg"
                title="GIS Software Development Services"
                description="Custom GIS Mapping Software and Spatial Analytics"
                buttonText="HIRE GIS DEVELOPERS"
                buttonLink="#"
            />

            <PageLayout className="space-y-10 text-center py-12">
                <Headline
                    title="Hire Developers with GIS Software Development Experience"
                    description="U Tech offers experienced GIS back-end developers-for-hire who can help you capture geospatial information and develop interactive GIS mapping solutions for a range of applications, from climate research facilities to urban planning development. With AI-powered GIS software, the processing of massive amounts of spatial data is made possible, providing valuable insights into various phenomena such as urban growth and climate change. Additionally, Google location tracking apps, driven by AI technology, enable real-time analysis of user behavior and preferences, allowing businesses to deliver personalized experiences and targeted advertising. Our geolocation app can be integrated with a fleet management system, enabling transportation companies to track their vehicles in real-time, optimize routes, and improve delivery times, ultimately resulting in cost savings and improved customer satisfaction."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                    <FeaturesList
                        features={gisServices.slice(0, 2)}
                        center
                    />
                    <FadeInWhenVisible className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/solutions/gis/esri-phone-img.png"
                            alt="Mobile Analytics App"
                            className="mx-auto w-72 sm:w-86"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={gisServices.slice(2, 4)}
                        center
                    />
                </div>
            </PageLayout>

            <section className="bg-secondary py-12">
                <PageLayout className="space-y-10">
                    <Headline
                        title="Our GIS Expertise"
                        description="Integrating your systems with Esri software and more, our expert GIS consulting and customization services harness the power of advanced mapping and spatial features for your GIS solution."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/solutions/gis/gis-software-solution.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-110 sm:w-135"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={gisAnalyticsServices}
                            iconAlign="horizontal"
                        />
                    </div>
                </PageLayout>
            </section>

            <PageLayout className="text-center py-12 space-y-10">
                <Headline
                    title="Custom Geospatial Mapping Software"
                    description="U Tech’s GIS mapping software experts can customize any GIS system software to provide continuous access to geospatial data in a reliable GIS app, ensuring shareable insights of critical data to a host of different industries."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FeaturesList
                        features={gisEmergingServices}
                        iconAlign="horizontal"
                    />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/solutions/gis/back-end-gis-specialists.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-110 sm:w-135"
                        />
                    </FadeInWhenVisible>
                </div>
            </PageLayout>

            <section className="bg-secondary py-12">
                <PageLayout className="space-y-10">
                    <Headline
                        title="Custom GIS Software Solutions"
                        description="Whether you need customized features or a unique UI designed specifically to meet your business branding & technical needs, U Tech will design & develop the perfect turnkey enterprise GIS software applications solution to meet business integration & workflow requirements."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/solutions/gis/custom-gis-software-solutions.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-110 sm:w-135"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={gisDataSolutions}
                            iconAlign="horizontal"
                        />
                    </div>
                </PageLayout>
            </section>

            <section>
                <VideoTvPoster information={portfolioCaseStudies} />
            </section>

            <PageLayout className="py-16 space-y-8">
                <Headline
                    title="Hire Back-End GIS Specialists for Custom GIS App Development"
                    description="Our back-end GIS specialists understand the complete GIS app development life-cycle from conceptualization through requirements definition, design, programming, testing, and maintenance."
                />
                <div className="grid sm:grid-cols-2 gap-8 items-center grid-cols-1">
                    <FadeInWhenVisible className="sm:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/solutions/gis/hire back-end-gis-specialists-for-custom-gis-app-development.png"
                            alt="Mobile Analytics App"
                            className="w-135 mx-auto"
                        />
                    </FadeInWhenVisible>
                    <div>
                        <TypographyMuted className="text-center mb-6">
                            We have superior application programming expertise in GIS programming languages like C++, Visual Basic, Visual C#, Java, JSP, ASP, XML, GML, and Cold Fusion. Our GIS Back-end developers are proficient in:
                        </TypographyMuted>
                        <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                {gisTechnologies?.slice(0, 6).map((item, index) => (
                                    <TypographySmall
                                        key={index}
                                        className="flex items-center gap-4"
                                    >
                                        <span>
                                            <Check size={14} className="text-primary" />
                                        </span>
                                        {item}
                                    </TypographySmall>
                                ))}
                            </div>
                            <div className="space-y-4">
                                {gisTechnologies?.slice(6, 12).map((item, index) => (
                                    <TypographySmall
                                        key={index}
                                        className="flex items-center gap-4"
                                    >
                                        <span>
                                            <Check size={14} className="text-primary" />
                                        </span>
                                        {item}
                                    </TypographySmall>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>

            {/* === FAQ SECTION === */}
            <div className="py-16">
                <FaqSection faqs={faqs} title="GIS Software FAQ's" />
            </div>

            {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
            <PortfolioGrid items={portfolioItems} />

        </>
    )
}

// === Component Imports ===
import { FeaturesList } from "@/components/FeaturesList";
import HeroSection from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import FaqSection from "@/custom/FaqSection";
import {
    TypographyMuted,
    Headline,
    TypographyH5
} from "@/custom/Typography";

// === Data Imports ===
import {
    aiMediaSolutions,
    damSolutions,
    digiatalMarketingTools,
    digitalServices,
    drmSolutions,
    faqs,
    mediaSolutions,
    musicSolutions,
    photographySolutions,
    photoGraphyTools,
    productionTools,
    publishingSolutions,
    streamingSolutions,
    streamingTools
} from "./Data";

// === Main Page Component ===
export default function MediaEntertainment() {
    return (
        <>
            {/* === Hero Section === */}
            <HeroSection
                backgroundImage='/assets/industries/media-entertainment/hero.avif'
                title="MEDIA AND ENTERTAINMENT SOFTWARE"
                description="Revolutionizing Media & Entertainment With Custom AI-Powered Solutions."
                buttonText="GET MEDIA AND ENTERTAINMENT SOFTWARE DEVELOPERS"
                buttonLink="#"
                imageFit="cover"
                overlayOpacity={0.6}
            />

            {/* === Overview of Digital Services === */}
            <PageLayout className="py-12">
                <Headline
                    title="Custom Media and Entertainment Software Services"
                    description='We are a media and entertainment software development company that specializes in creating innovative software for the entertainment industry. Click below to learn more about our media & entertainment software solutions.'
                />
                <FeaturesGrid
                    leftFeatures={digitalServices.slice(0, 3)}
                    rightFeatures={digitalServices.slice(3, 6)}
                    centerImage="/assets/industries/media-entertainment/desktop-conbo-banner-media.png"
                    fadeUp={fadeUp}
                    iconSize={38}
                />
            </PageLayout>

            {/* === Streaming Solutions Section === */}
            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title='Custom Streaming Solutions'
                    description="Chetu engineers powerful live video streaming solutions that deliver high-definition video & audio streams to any device."
                />

                {/* Streaming Features + Comparison Tools */}
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
                    {/* Left Image */}
                    <FadeInWhenVisible delay={0.5} className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/industries/media-entertainment/web-animation-and-graphic-design-service.png"
                            alt="Portfolio"
                            className="w-135 mx-auto"
                        />
                    </FadeInWhenVisible>

                    {/* Features List */}
                    <div className="text-start space-y-6">
                        <TypographyH5>
                            Live Video Streaming Software Features
                        </TypographyH5>
                        <TypographyMuted className="mb-8">
                            Chetu’s live video streaming software integrates features such as multi-camera operations and web streaming support to deliver high-quality streaming for any audience.
                        </TypographyMuted>
                        <FeaturesList fadeUp={fadeUp} features={streamingSolutions} />
                        <TypographyMuted>
                            Our custom live video streaming solutions compare closely to industry-leading tools, including:
                        </TypographyMuted>

                        {/* Tool Icons */}
                        <div className='flex items-center flex-wrap gap-6 mt-6'>
                            {streamingTools.map((item, index) => (
                                <FadeInWhenVisible key={index} delay={0.5} className="md:block hidden">
                                    <img
                                        loading="lazy"
                                        src={`/assets/industries/media-entertainment/streaming-tools/${item?.img}.png`}
                                        alt={item.label}
                                        className="w-8 h-8 mx-auto"
                                    />
                                </FadeInWhenVisible>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <FadeInWhenVisible>
                    <Button variant="hover">
                        GET LIVE STREAMING SOLUTIONS
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            {/* === Video Production Section === */}
            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title='Custom Video Production Solutions'
                        description="Chetu develops world-class video production software with robust digital editing features catered to the media and entertainment industry."
                    />

                    {/* Production Features + Tools */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
                        {/* Features List */}
                        <div className="text-start space-y-6">
                            <TypographyH5>
                                Video Production Tools
                            </TypographyH5>
                            <TypographyMuted className="mb-8">
                                We design and develop video editing & production tools that enables filmmakers to produce stunning videos with the highest degree of precision and control.
                            </TypographyMuted>
                            <FeaturesList fadeUp={fadeUp} features={streamingSolutions} />
                            <TypographyMuted>
                                Our custom video production solutions compare closely to industry-leading tools, including:
                            </TypographyMuted>

                            {/* Tool Icons */}
                            <div className='flex items-center flex-wrap gap-6 mt-6'>
                                {productionTools.map((item, index) => (
                                    <FadeInWhenVisible key={index} delay={0.5} className="md:block hidden">
                                        <img
                                            loading="lazy"
                                            src={`/assets/industries/media-entertainment/production-tools/${item?.img}.png`}
                                            alt={item.label}
                                            className="w-8 h-8 mx-auto"
                                        />
                                    </FadeInWhenVisible>
                                ))}
                            </div>
                        </div>

                        {/* Right Image */}
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/industries/media-entertainment/streaming-video-development-services.png"
                                alt="Portfolio"
                                className="w-135 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>

                    {/* CTA Button */}
                    <FadeInWhenVisible>
                        <Button variant="hover">
                            GET VIDEO PRODUCTION SOLUTIONS
                        </Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            {/* === Media Software Solutions Section === */}
            <PageLayout className='text-center py-12 space-y-8'>
                <Headline
                    title='Media Software Solutions'
                    description="We specialize in custom media software, interactive media, VR and AR applications, and animation tools tailored for entertainment industry needs."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FeaturesList fadeUp={fadeUp} features={mediaSolutions.slice(0, 2)} />
                    <FeaturesList fadeUp={fadeUp} features={mediaSolutions.slice(2, 4)} />
                </div>

                {/* CTA Button */}
                <FadeInWhenVisible>
                    <Button variant='hover'>
                        GET STAERTED WITH CUSTOM MEDIA SOLUTIONS
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            {/* === Music Software Development Section === */}
            <section className="py-12 bg-secondary">
                <PageLayout className='space-y-8 text-center'>
                    <Headline
                        title='Custom Music Software Development'
                        description='Our pro audio software developers are committed to engineering world-class audio apps and building software to expand the creative freedom of today’s music pros.'
                    />

                    <div className="flex flex-col md:flex-row items-center justify-baseline gap-8 md:gap-26">
                        {/* Left and Right Feature Columns */}
                        <FeaturesList features={musicSolutions.slice(0, 2)} fadeUp={fadeUp} />
                        <FadeInWhenVisible className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/industries/media-entertainment/custom-music-software-solutins.png"
                                alt="Mobile Analytics App"
                                className="w-64"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList features={musicSolutions.slice(2, 4)} fadeUp={fadeUp} />
                    </div>

                    {/* CTA Button */}
                    <FadeInWhenVisible>
                        <Button variant="hover">
                            HIRE MUSIC SOFTWARE DEVELOPER
                        </Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            {/* === Digital Publishing Solutions Section === */}
            <PageLayout className='py-16 space-y-8 text-center'>
                <Headline
                    title="Custom Digital Publishing Solutions"
                    description="We develop custom digital publishing software solutions, including content management systems (CMS), social media tools, DRM software, and more."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <FeaturesList features={publishingSolutions.slice(0, 3)} fadeUp={fadeUp} />
                    <FeaturesList features={publishingSolutions.slice(3, 6)} fadeUp={fadeUp} />
                </div>

                <FadeInWhenVisible>
                    <Button variant='hover'>
                        GET DIGITAL PUBLISHING SOLUTIONS
                    </Button>
                </FadeInWhenVisible>

                {/* Center Image */}
                <FadeInWhenVisible className="md:block hidden">
                    <img
                        loading="lazy"
                        src="/assets/industries/media-entertainment/dashboard-800-width.png"
                        alt="Mobile Analytics App"
                        className="w-[60%] mx-auto"
                    />
                </FadeInWhenVisible>
            </PageLayout>

            {/* === Photography Software Solutions Section === */}
            <section className="py-16 bg-secondary">
                <PageLayout className="space-y-10 text-center">
                    <Headline
                        title='Photography Software Solutions'
                        description="We deliver best-in-class, reliable, and fully customizable photography software solutions so that photographers can get the most out of their images."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
                        {/* Left Image */}
                        <FadeInWhenVisible delay={0.5} className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/industries/media-entertainment/video-production-software-development.png"
                                alt="Portfolio"
                                className="w-135 mx-auto"
                            />
                        </FadeInWhenVisible>

                        {/* Right: Features + Tools */}
                        <div className="text-start space-y-6">
                            <TypographyH5>Photography Tools</TypographyH5>
                            <TypographyMuted className="mb-8">
                                We engineer powerful, reliable, and robust photography software tools to help you organize, optimize, and edit all your digital photos in one centralized platform.
                            </TypographyMuted>
                            <FeaturesList fadeUp={fadeUp} features={photographySolutions} />
                            <TypographyMuted>
                                Our custom photography software compare closely to industry-leading tools, including:
                            </TypographyMuted>

                            {/* Tool Icons */}
                            <div className='flex items-center flex-wrap gap-6 mt-6'>
                                {photoGraphyTools.map((item, index) => (
                                    <FadeInWhenVisible key={index} delay={0.5} className="md:block hidden">
                                        <img
                                            loading="lazy"
                                            src={`/assets/industries/media-entertainment/photographyTools/${item?.img}.png`}
                                            alt={item.label}
                                            className="w-8 h-8 mx-auto"
                                        />
                                    </FadeInWhenVisible>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <FadeInWhenVisible>
                        <Button variant="hover">
                            GET PHOTOGRAPHY SOLUTIONS
                        </Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            {/* === AI Media Solutions Section === */}
            <PageLayout className='py-16 space-y-8 text-center'>
                <Headline
                    title="Enhance Media & Entertainment with Cutting-Edge AI Solutions"
                    description="Chetu’s extensive industry experience allows us to deliver cutting-edge AI solutions that enable businesses to enhance content creation, personalization, audience engagement, and operational efficiency, transforming the media and entertainment landscape."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <FeaturesList features={aiMediaSolutions.slice(0, 4)} fadeUp={fadeUp} />
                    <FeaturesList features={aiMediaSolutions.slice(4, 8)} fadeUp={fadeUp} />
                </div>

                <FadeInWhenVisible>
                    <Button variant='hover'>
                        GET AI-POWERED MEDIA & ENTERTAINMENT SOLUTIONS
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            {/* === Digital Asset Management (DAM) Section === */}
            <section className="py-12 bg-secondary">
                <PageLayout className='space-y-8 text-center'>
                    <Headline
                        title='Digital Asset Management Solutions'
                        description='We design digital asset management (DAM) systems to specifically address the needs of the entertainment industry.'
                    />
                    <div className="flex flex-col md:flex-row items-center justify-baseline gap-8 md:gap-26">
                        <FeaturesList features={damSolutions.slice(0, 2)} fadeUp={fadeUp} />
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/industries/media-entertainment/dropbox-developer.png"
                                alt="Mobile Analytics App"
                                className="sm:w-165 w-96"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList features={damSolutions.slice(2, 4)} fadeUp={fadeUp} />
                    </div>
                    <FadeInWhenVisible>
                        <Button variant="hover">
                            GET DAM SOLUTIONS
                        </Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            {/* === DRM Solutions Section === */}
            <PageLayout className="space-y-10 py-16 text-center">
                <Headline
                    title='Digital Rights Management Solutions'
                    description="Chetu provides custom-tailored software designed to protect and safeguard your digital assets from being altered or redistributed."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
                    {/* Left: DRM Features */}
                    <div className="text-start space-y-6">
                        <FeaturesList fadeUp={fadeUp} features={drmSolutions} />
                        <TypographyMuted>
                            Our custom DRM solutions compare closely to industry-leading tools, including:
                        </TypographyMuted>
                        <div className='flex items-center flex-wrap gap-6 mt-6'>
                            {digiatalMarketingTools.map((item, index) => (
                                <FadeInWhenVisible key={index} delay={0.5} className="md:block hidden">
                                    <img
                                        loading="lazy"
                                        src={`/assets/industries/media-entertainment/photographyTools/${item?.img}.png`}
                                        alt={item.label}
                                        className="w-8 h-8 mx-auto"
                                    />
                                </FadeInWhenVisible>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <FadeInWhenVisible delay={0.5} className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/industries/media-entertainment/dashboard.png"
                            alt="Portfolio"
                            className="w-135 mx-auto"
                        />
                    </FadeInWhenVisible>
                </div>

                <FadeInWhenVisible>
                    <Button variant="hover">
                        GET DRM SOLUTIONS
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            {/* === FAQ Section === */}
            <div className="mb-16 mt-2">
                <FaqSection
                    faqs={faqs}
                    title="FAQ's"
                />
            </div>
        </>
    );
}

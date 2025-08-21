import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import HeroSection from "@/components/HeroSection";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import PageLayout from "@/custom/PageLayout";
import VideoPoster from "@/custom/VideoPoster";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import ContactUsButton from "@/custom/ContactUsButton";
import FaqSection from "@/custom/FaqSection";
import { TypographyMuted, Headline, TypographyH5 } from "@/custom/Typography";

// === Data Imports ===
import {
  aiMediaSolutions,
  damSolutions,
  digiatalMarketingTools,
  digitalServices,
  drmSolutions,
  faqs,
  features,
  filmVideoSolutions,
  mediaSolutions,
  musicSolutions,
  photographySolutions,
  photoGraphyTools,
  productionTools,
  publishingSolutions,
  streamingSolutions,
  streamingTools,
} from "./Data";

// === Main Page Component ===
export default function MediaEntertainment() {
  return (
    <>
      {/* === Hero Section === */}
      <HeroSection
        backgroundImage="/banner/media-enterntainment-banner.jpg"
        title="MEDIA AND ENTERTAINMENT SOFTWARE"
        description="Revolutionizing Media & Entertainment With Custom AI-Powered Solutions."
        buttonText="GET MEDIA AND ENTERTAINMENT SOFTWARE DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === Overview of Digital Services === */}
      <PageLayout className="py-12">
        <Headline
          title="Custom Media and Entertainment Software Services"
          description="We are a media and entertainment software development company that specializes in creating innovative software for the entertainment industry. Click below to learn more about our media & entertainment software solutions."
        />
        <FeaturesGridnew
          leftFeatures={digitalServices.slice(0, 4)}
          rightFeatures={digitalServices.slice(4, 8)}
          centerImage="/assets/industries/media-entertainment/desktop-conbo-banner-media.png"
        />
      </PageLayout>

      <section className="relative w-full overflow-hidden">
        <VideoPoster
          features={features}
          title="Transforming Marketing and Publishing: Here’s What's New in Tech is"
        />
      </section>

      {/* === Streaming Solutions Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Custom Streaming Solutions"
          description="U Tech engineers powerful live video streaming solutions that deliver high-definition video & audio streams to any device."
        />

        {/* Streaming Features + Comparison Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
          {/* Left Image */}
          <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/media-entertainment/web-animation-and-graphic-design-service.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>

          {/* Features List */}
          <div className="text-start space-y-6">
            <TypographyH5>Live Video Streaming Software Features</TypographyH5>
            <TypographyMuted className="mb-8">
              U Tech’s live video streaming software integrates features such as
              multi-camera operations and web streaming support to deliver
              high-quality streaming for any audience.
            </TypographyMuted>
            <FeaturesList
              features={streamingSolutions}
              iconAlign="horizontal"
            />
            <TypographyMuted>
              Our custom live video streaming solutions compare closely to
              industry-leading tools, including:
            </TypographyMuted>

            {/* Tool Icons */}
            <div className="flex items-center flex-wrap gap-6 mt-6">
              {streamingTools.map((item, index) => (
                <FadeInWhenVisible
                  key={index}
                  delay={0.5}
                  className="md:block hidden"
                >
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

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">GET LIVE STREAMING SOLUTIONS</ContactUsButton>
      </PageLayout>

      {/* === Video Production Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Video Production Solutions"
            description="U Tech develops world-class video production software with robust digital editing features catered to the media and entertainment industry."
          />

          {/* Production Features + Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
            {/* Features List */}
            <div className="text-start space-y-6">
              <TypographyH5>Video Production Tools</TypographyH5>
              <TypographyMuted className="mb-8">
                We design and develop video editing & production tools that
                enables filmmakers to produce stunning videos with the highest
                degree of precision and control.
              </TypographyMuted>
              <FeaturesList
                features={filmVideoSolutions}
                iconAlign="horizontal"
              />
              <TypographyMuted>
                Our custom video production solutions compare closely to
                industry-leading tools, including:
              </TypographyMuted>

              {/* Tool Icons */}
              <div className="flex items-center flex-wrap gap-6 mt-6">
                {productionTools.map((item, index) => (
                  <FadeInWhenVisible key={index} delay={0.5}>
                    <img
                      loading="lazy"
                      src={`/assets/industries/media-entertainment/production-tools/${item?.img}.png`}
                      alt={item.label}
                      className="mx-auto"
                    />
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <FadeInWhenVisible delay={0.5} className="sm:block hidden">
              <img
                loading="lazy"
                src="/assets/industries/media-entertainment/streaming-video-development-services.png"
                alt="Portfolio"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
          </div>

          {/* CTA ContactUsButton */}
          <ContactUsButton variant="hover">GET VIDEO PRODUCTION SOLUTIONS</ContactUsButton>
        </PageLayout>
      </section>

      {/* === Media Software Solutions Section === */}
      <PageLayout className="text-center py-12 space-y-8">
        <Headline
          title="Media Software Solutions"
          description="We specialize in custom media software, interactive media, VR and AR applications, and animation tools tailored for entertainment industry needs."
        />

        <FeaturesListOpposite features={mediaSolutions} grid />

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">
          GET STAERTED WITH CUSTOM MEDIA SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      {/* === Music Software Development Section === */}
      <section className="py-12 bg-secondary">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Custom Music Software Development"
            description="Our pro audio software developers are committed to engineering world-class audio apps and building software to expand the creative freedom of today’s music pros."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {/* Left and Right Feature Columns */}
            <FeaturesList
              features={musicSolutions.slice(0, 2)}
              center
            />
            <FadeInWhenVisible className="md:block hidden">
              <img
                loading="lazy"
                src="/assets/industries/media-entertainment/custom-music-software-solutins.png"
                alt="Mobile Analytics App"
                className="w-52 mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={musicSolutions.slice(2, 4)}
              center
            />
          </div>

          {/* CTA ContactUsButton */}
          <ContactUsButton variant="hover">HIRE MUSIC SOFTWARE DEVELOPER</ContactUsButton>
        </PageLayout>
      </section>

      {/* === Digital Publishing Solutions Section === */}
      <PageLayout className="py-16 space-y-8 text-center">
        <Headline
          title="Custom Digital Publishing Solutions"
          description="We develop custom digital publishing software solutions, including content management systems (CMS), social media tools, DRM software, and more."
        />

        <FeaturesListOpposite
          features={publishingSolutions}
          grid
        />

        <ContactUsButton variant="hover">GET DIGITAL PUBLISHING SOLUTIONS</ContactUsButton>

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
            title="Photography Software Solutions"
            description="We deliver best-in-class, reliable, and fully customizable photography software solutions so that photographers can get the most out of their images."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
            {/* Left Image */}
            <FadeInWhenVisible delay={0.5} className="sm:block hidden">
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
                We engineer powerful, reliable, and robust photography software
                tools to help you organize, optimize, and edit all your digital
                photos in one centralized platform.
              </TypographyMuted>
              <FeaturesList
                features={photographySolutions}
                iconAlign="horizontal"
              />
              <TypographyMuted>
                Our custom photography software compare closely to
                industry-leading tools, including:
              </TypographyMuted>

              {/* Tool Icons */}
              <div className="flex items-center flex-wrap gap-6 mt-6">
                {photoGraphyTools.map((item, index) => (
                  <FadeInWhenVisible key={index} delay={0.5}>
                    <img
                      loading="lazy"
                      src={`/assets/industries/media-entertainment/photographyTools/${item?.img}.png`}
                      alt={item.label}
                      className="mx-auto"
                    />
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>

          {/* CTA ContactUsButton */}
          <ContactUsButton variant="hover">GET PHOTOGRAPHY SOLUTIONS</ContactUsButton>
        </PageLayout>
      </section>

      {/* === AI Media Solutions Section === */}
      <PageLayout className="py-16 space-y-8 text-center">
        <Headline
          title="Enhance Media & Entertainment with Cutting-Edge AI Solutions"
          description="U Tech’s extensive industry experience allows us to deliver cutting-edge AI solutions that enable businesses to enhance content creation, personalization, audience engagement, and operational efficiency, transforming the media and entertainment landscape."
        />
        <FeaturesList
          features={aiMediaSolutions}
          grid
          center
        />

        <ContactUsButton variant="hover">
          GET AI-POWERED MEDIA & ENTERTAINMENT SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      {/* === Digital Asset Management (DAM) Section === */}
      <section className="py-12 bg-secondary">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Digital Asset Management Solutions"
            description="We design digital asset management (DAM) systems to specifically address the needs of the entertainment industry."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-8">
            <FeaturesList features={damSolutions.slice(0, 2)} center />
            <FadeInWhenVisible className="hidden md:block">
              <img
                loading="lazy"
                src="/assets/industries/media-entertainment/dropbox-developer.png"
                alt="Mobile Analytics App"
                className="sm:w-135 mx-auto w-96"
              />
            </FadeInWhenVisible>
            <FeaturesList features={damSolutions.slice(2, 4)} center />
          </div>
          <ContactUsButton variant="hover">GET DAM SOLUTIONS</ContactUsButton>
        </PageLayout>
      </section>

      {/* === DRM Solutions Section === */}
      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="Digital Rights Management Solutions"
          description="U Tech provides custom-tailored software designed to protect and safeguard your digital assets from being altered or redistributed."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          {/* Left: DRM Features */}
          <div className="text-start space-y-6">
            <FeaturesList features={drmSolutions} iconAlign="horizontal" />
            <TypographyMuted>
              Our custom DRM solutions compare closely to industry-leading
              tools, including:
            </TypographyMuted>
            <div className="flex items-center flex-wrap gap-6 mt-6">
              {digiatalMarketingTools.map((item, index) => (
                <FadeInWhenVisible
                  key={index}
                  delay={0.5}
                  className="sm:block hidden"
                >
                  <img
                    loading="lazy"
                    src={`/assets/industries/media-entertainment/digital-marketing/${item?.img}.png`}
                    alt={item.label}
                    className="mx-auto"
                  />
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/media-entertainment/dashboard.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
        </div>

        <ContactUsButton variant="hover">GET DRM SOLUTIONS</ContactUsButton>
      </PageLayout>

      {/* === FAQ Section === */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
}

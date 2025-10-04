import PageLayout from "@/custom/PageLayout";
import HeroSection from "@/components/HeroSection";
import {
  Headline,
  TypographyH4,
  TypographyH5,
  TypographyP,
  TypographyH3,
  TypographyMuted,
} from "@/custom/Typography";

// Features list & cards
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import FaqSection from "@/custom/FaqSection";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

// Data arrays
import {
  introText,
  crossPlatformText,
  mobileAppPlatforms,
  aiApplicationServices,
  aiHeadline,
  AiApiFeatures,
  enterpriseSolutionsData,
  CustomServices,
  pciDssComplianceContent,
  apiLogs,
  faqs,
  portfolioItems,
} from "./Data";

// Main component
const ApplicationDevelopment = () => {
  // Destructure compliance section content
  const { title, description, videoPath, complianceTags } =
    pciDssComplianceContent;

  return (
    <>
    <SeoHead
        title="U Tech | ApplicationDevelopment - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/application-development-banner.jpg"
        description="Harnessing The Power of AI to Drive Innovative App Development"
        title="APPLICATION DEVELOPMENT SERVICES"
        buttonText="Get App Developers"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === CROSS PLATFORM INTRO + PLATFORMS SECTION === */}
      <PageLayout className="py-16 space-y-10">
        {/* Intro headline */}
        <Headline title={introText.title} description={introText.description} />

        {/* Cross-platform features and image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 md:text-start text-center">
            <div>
              <TypographyH5>{crossPlatformText?.title}</TypographyH5>
              <TypographyMuted>
                {crossPlatformText?.description}
              </TypographyMuted>
            </div>
            <FeaturesList
              features={mobileAppPlatforms}
              iconAlign="horizontal"
            />
          </div>

          <img
            loading="lazy"
            src="/assets/services/application-development/developers.png"
            alt="Mobile App Devices"
            className="md:w-80 sm:w-72 xl:w-82 2xl:w-86 w-48 mx-auto"
          />
        </div>
      </PageLayout>

      {/* === AI-POWERED CUSTOM APP DEVELOPMENT SECTION === */}
      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10 ">
          <Headline
            title={aiHeadline.title}
            description={aiHeadline.description}
          />

          {/* Features split into 2 columns */}
          <FeaturesList features={aiApplicationServices} grid3 center />

          {/* CTA button */}
          <ContactUsButton variant="hover">
            GET AI-POWERED CUSTOM APP DEVELOPMENT
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === APIaaS Feature Cards Section === */}
      <PageLayout className="py-16 text-center space-y-10">
        <FeaturesList features={AiApiFeatures} grid3 center />

        {/* CTA button */}
        <ContactUsButton variant="hover">
          GET LOAN MANAGEMENT SOFTWARE SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      {/* === ENTERPRISE-CLASS DEVELOPMENT SOLUTIONS SECTION === */}
      <section className="bg-secondary py-20 text-center">
        <PageLayout className="space-y-10">
          {/* Overview headline */}
          <Headline
            title="Build Amazing Apps with Our App Development Solutions"
            description="At Technolog y, we provide exceptional app development..."
          />

          {/* Content with image + features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <img
              loading="lazy"
              src="/assets/services/application-development/solutions.png"
              alt="Time Clock App"
              className="w-42 sm:w-52 xl:w-56 2xl:w-62 mx-auto"
            />

            <div className="space-y-8 text-start">
              <div className="">
                <TypographyH5>
                  Enterprise-Class Development Solutions
                </TypographyH5>
                <TypographyMuted>
                  Covering every aspect of the entire enterprise app development
                  process...
                </TypographyMuted>
              </div>
              <FeaturesList
                features={enterpriseSolutionsData}
                iconAlign="horizontal"
              />
            </div>
          </div>
        </PageLayout>
      </section>

      {/* === CUSTOM SERVICE SECTION === */}
      <PageLayout className="py-20 text-center space-y-10">
        <FeaturesList features={CustomServices} grid3 center />

        <ContactUsButton variant="hover">
          Create Your Custom App
        </ContactUsButton>
      </PageLayout>

      {/* === COMPLIANCE VIDEO SECTION === */}
      <section className=" bg-secondary py-20">
        <PageLayout className="bg-[#E5F8FF] p-10 grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
          {/* Left text section */}
          <div>
            <TypographyH4 className="text-black font-bold mb-4">
              {title}
            </TypographyH4>
            <TypographyP className="text-muted-foreground">
              {description}
            </TypographyP>
          </div>

          {/* Right video with floating tags */}
          <div className="relative flex justify-center">
            <div className="relative z-10">
              <video
                width="600"
                height="300"
                controls
                className="rounded-xl shadow-lg"
              >
                <source src={videoPath} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Floating compliance tags */}
            <div className="absolute inset-0 flex flex-col items-end justify-between py-2 pr-2 pointer-events-none">
              <div className="space-y-2">
                {complianceTags.slice(0, 2).map((tag, idx) => (
                  <div
                    key={idx}
                    className="bg-white px-4 py-1 rounded-full shadow text-sm font-semibold"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {complianceTags.slice(2, 4).map((tag, idx) => (
                  <div
                    key={idx}
                    className="bg-white px-4 py-1 rounded-full shadow text-sm font-semibold"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-[45%] translate-x-[-50%] translate-y-[80%] bg-white px-4 py-1 rounded-full shadow text-sm font-semibold">
                {complianceTags[4]}
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* === THIRD-PARTY API FUNCTIONALITY SECTION === */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="We’ve Got Custom App Developers With On-Demand Experience"
          description="Our programmers, developers, and engineers are highly proficient..."
        />

        {/* Features with tech logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center space-y-10 mt-16">
          {apiLogs.map((feature, index) => (
            <div key={index}>
              <TypographyH3>{feature?.title}</TypographyH3>
              <TypographyMuted>{feature?.description}</TypographyMuted>
              <div key={index} className="flex items-center mt-8 flex-wrap">
                {feature.logos.map((logo, index) => (
                  <img
                    key={index}
                    loading="lazy"
                    src={`/assets/services/application-development/logos/${logo}.png`}
                    className="cursor-pointer mx-auto hover:scale-105 transition-transform"
                    alt={logo}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <ContactUsButton variant="hover">
          HIRE DEDICATED APP DEVELOPERS
        </ContactUsButton>
      </PageLayout>

      {/* === FAQ SECTION === */}
      <div className="mb-8">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>

      {/* === PORTFOLIO GRID SECTION === */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                loading="lazy"
                src={item.img}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay */}
              {item.overlayText && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <TypographyH3 className="text-white text-center">
                    {item.overlayText}
                  </TypographyH3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ApplicationDevelopment;

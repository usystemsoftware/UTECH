import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Headline, TypographyH3, TypographyMuted } from "@/custom/Typography";
import {
  mobileAppPlatforms,
  qualityPlatforms,
  CustomQuality,
  supportServices,
  QualityAssur,
} from "./Data";

const QualityAssurance = () => {
  return (
    <div>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/quality-assurance-banner.jpg"
        title="Quality Assurance (QA) &Software Testing Services"
        buttonText="Hire QA Testers"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === CROSS PLATFORM INTRO + PLATFORMS SECTION === */}
      <PageLayout className="py-16 space-y-8">
        {/* Intro headline */}
        <FadeInWhenVisible>
          <Headline
            title="Software Quality Assurance Testing Services"
            description="U Tech brings together the most reliable expertise, processes, technologies, and QA testing specialists to deliver high value-added and agile-aligned QA & software testing solutions that you can trust."
          />
        </FadeInWhenVisible>

        {/* Cross-platform features and image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 space-y-12 items-center">
          <FadeInWhenVisible className="space-y-4 text-start">
            <TypographyH3>Software QA Web & Mobile App Testing</TypographyH3>
            <TypographyMuted>
              U Technology's seasoned test architects and engineers provide
              world-class QA testing services for web and mobile applications,
              ensuring full compliance and high-quality software every time. We
              harness the power of innovative AI, IoT, and RPA technologies to
              perform advanced QA web & mobile app testing.
            </TypographyMuted>
            <FeaturesList features={mobileAppPlatforms} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/quality-assurance/assurance.png"
              alt="Mobile App Devices"
              className="h-auto mx-auto"
            />
          </FadeInWhenVisible>
        </div>
      </PageLayout>

      {/* ====== Harness the Power of  QA Testing Solutions ====== */}
      <section className="bg-secondary">
        <PageLayout className="py-12 space-y-10 text-center">
          <Headline
            title="Harness the Power of U Technology's QA Testing Solutions"
            description="Augment your software development A-team with U Technology's custom-tailored QA software testing solutions."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <FeaturesList
              features={qualityPlatforms.slice(0, 2)}
              fadeUp={fadeUp}
            />
            <FadeInWhenVisible className="md:block hidden">
              <img
                loading="lazy"
                src="/assets/services/quality-assurance/solution.png"
                alt="Tax Preparation"
                className="w-48 mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={qualityPlatforms.slice(0, 2)}
              fadeUp={fadeUp}
            />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">Get QA Testing Solutions</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-8">
        {/* Intro headline */}
        <Headline
          title="Custom Quality Assurance (QA) Testing Solutions"
          description="We develop custom QA testing solutions from scratch or enhance your existing QA testing solutions through modifications, integrations, and feature implementations."
        />

        {/* Cross-platform features and image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 space-y-12 items-center">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/quality-assurance/testing.png"
              alt="Mobile App Devices"
              className="h-auto mx-auto"
            />
          </FadeInWhenVisible>
          <div className="space-y-4">
            <TypographyH3>Software QA Testing Solutions</TypographyH3>
            <TypographyMuted>
              Our experienced test architects and engineers develop
              top-of-the-line software QA testing solutions for API, unit,
              multi-browser, and multi-device testing focused on all testing
              categories, including penetration, functional, localization,
              regression, performance, usability security, and compatibility
              testing..
            </TypographyMuted>
            <FeaturesList features={CustomQuality} />
          </div>
        </div>
      </PageLayout>

      {/* ====== Support Section ====== */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-12 text-center">
          <Headline
            title="Reinforce  Your IT Team With U Technology's Experienced QA Testing Experts"
            description="Elevate your IT efforts to new heights by leveraging our custom QA Testing Solutions designed specifically for your website or application."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-left">
            {supportServices?.map((service, index) => (
              <CaseStudyCard
                key={index}
                index={index}
                icon={service?.icon}
                title={service?.title}
                description={service?.description}
                year={service?.subtitle}
                link={service?.link}
              />
            ))}
          </div>

          <FadeInWhenVisible>
            <Button variant="hover">GET WEB SUPPORT ON-DEMAND</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === THIRD-PARTY API FUNCTIONALITY SECTION === */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Quality Assurance (QA) Software Testing Tools"
          description="We leverage third-party QA testing software APIs and harness the power of industry-proven tools and QA best practices to create custom-tailored test strategies for your application or software solution"
        />

        {/* Features with tech logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center mt-16">
          {QualityAssur.map((feature, index) => (
            <div key={index}>
              <TypographyH3>{feature?.title}</TypographyH3>
              <TypographyMuted>{feature?.description}</TypographyMuted>
              <div
                key={index}
                className="flex items-center sm:gap-12 gap-8 mt-8 flex-wrap"
              >
                {feature.logos.map((logo, index) => (
                  <img
                    key={index}
                    loading="lazy"
                    src={`/assets/services/quality-assurance/logo/${logo}.png`}
                    className="h-8 mx-auto cursor-pointer hover:scale-105 transition-transform"
                    alt={logo}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <FadeInWhenVisible>
          <Button variant="hover">Test Your Software Now</Button>
        </FadeInWhenVisible>
      </PageLayout>
    </div>
  );
};

export default QualityAssurance;

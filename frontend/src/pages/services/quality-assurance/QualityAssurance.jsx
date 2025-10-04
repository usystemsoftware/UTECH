import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, TypographyH3, TypographyMuted } from "@/custom/Typography";
import {
  mobileAppPlatforms,
  qualityPlatforms,
  CustomQuality,
  supportServices,
  QualityAssur,
} from "./Data";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

const QualityAssurance = () => {
  return (
    <div>
      <SeoHead
        title="U Tech | QualityAssurance - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
        componentName="QualityAssurance"
      />
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
        <Headline
          title="Software Quality Assurance Testing Services"
          description="U Tech brings together the most reliable expertise, processes, technologies, and QA testing specialists to deliver high value-added and agile-aligned QA & software testing solutions that you can trust."
        />

        {/* Cross-platform features and image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-12 items-center">
          <div className="space-y-4 text-start">
            <TypographyH3>Software QA Web & Mobile App Testing</TypographyH3>
            <TypographyMuted>
              U Tech's seasoned test architects and engineers provide
              world-class QA testing services for web and mobile applications,
              ensuring full compliance and high-quality software every time. We
              harness the power of innovative AI, IoT, and RPA technologies to
              perform advanced QA web & mobile app testing.
            </TypographyMuted>
            <FeaturesList
              features={mobileAppPlatforms}
              iconAlign="horizontal"
            />
          </div>

          <img
            loading="lazy"
            src="/assets/services/quality-assurance/assurance.png"
            alt="Mobile App Devices"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
        </div>
      </PageLayout>

      {/* ====== Harness the Power of  QA Testing Solutions ====== */}
      <section className="bg-secondary">
        <PageLayout className="py-12 space-y-10 text-center">
          <Headline
            title="Harness the Power of U Tech's QA Testing Solutions"
            description="Augment your software development A-team with U Tech's custom-tailored QA software testing solutions."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
            <FeaturesList features={qualityPlatforms.slice(0, 2)} center />
            <img
              loading="lazy"
              src="/assets/services/quality-assurance/solution.png"
              alt="Tax Preparation"
              className="sm:w-54 w-48 xl:w-56 2xl:w-68 mx-auto"
            />
            <FeaturesList features={qualityPlatforms.slice(2, 4)} center />
          </div>
          <ContactUsButton variant="hover">
            Get QA Testing Solutions
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-8">
        {/* Intro headline */}
        <Headline
          title="Custom Quality Assurance (QA) Testing Solutions"
          description="We develop custom QA testing solutions from scratch or enhance your existing QA testing solutions through modifications, integrations, and feature implementations."
        />

        {/* Cross-platform features and image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 space-y-12 items-center">
          <img
            loading="lazy"
            src="/assets/services/quality-assurance/testing.png"
            alt="Mobile App Devices"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
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
            <FeaturesList features={CustomQuality} iconAlign="horizontal" />
          </div>
        </div>
      </PageLayout>

      {/* ====== Support Section ====== */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-12 text-center">
          <Headline
            title="Reinforce  Your IT Team With U Tech's Experienced QA Testing Experts"
            description="Elevate your IT efforts to new heights by leveraging our custom QA Testing Solutions designed specifically for your website or application."
          />

          <FeaturesList features={supportServices} grid3 center />

          <ContactUsButton variant="hover">
            GET WEB SUPPORT ON-DEMAND
          </ContactUsButton>
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
        <ContactUsButton variant="hover">
          Test Your Software Now
        </ContactUsButton>
      </PageLayout>
    </div>
  );
};

export default QualityAssurance;

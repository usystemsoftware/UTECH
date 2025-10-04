import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, TypographyH3 } from "@/custom/Typography";
import {
  certifiedTools,
  dataGovernanceAndSecuritySolutions,
  dataIntegrationSolutions,
  dataProcessingSolutions,
} from "./Data";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

export default function DataIntegration() {
  return (
    <>
    <SeoHead
        title="U Tech | DataIntegration - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
        componentName="Blog"
      />
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/banner/backup-recovery-banner.jpg"
        title="DATA INTEGRATION SERVICES"
        description="U Tech ensures smooth data integration through ongoing support and monitoring beyond the project lifecycle, safeguarding your critical data assets."
        buttonText="HIRE DATA INTEGRETION CUNSULTANTS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* Data Integration Solutions Section */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="Data Integration Solutions and Consulting"
          description="Our data integration experts create customized solutions unifying unstructured and structured data across multiple environments, providing end-to-end data integration services for flawless functionality and protection of critical data assets."
        />

        {/* Left: Features | Right: Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div className="order-2 md:order-1">
            <FeaturesList
              features={dataIntegrationSolutions}
              iconAlign="horizontal"
            />
          </div>
          <img
            loading="lazy"
            src="/assets/services/data-integration/data-integration-solutions-and-consulting.png"
            alt="Mobile App Devices"
            className="w-96 xl:w-110 2xl:w-130 mx-auto order-1 md:order-2"
          />
        </div>

        {/* Left: Image | Right: Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <img
            loading="lazy"
            src="/assets/services/data-integration/hozzby-analytics-admin-dashboard-ui-kit.png"
            alt="Mobile App Devices"
            className="w-96 sm:w-135 xl:w-155 2xl:w-175 mx-auto"
          />

          <FeaturesList
            features={dataProcessingSolutions}
            iconAlign="horizontal"
          />
        </div>

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">
          GET DATA INTEGRATION CONSULTING
        </ContactUsButton>
      </PageLayout>

      {/* Big Data Integration Section */}
      <PageLayout className="text-center space-y-10 py-8">
        <TypographyH3>
          Break Data Silos with Seamless Big Data Intergration
        </TypographyH3>

        {/* Illustration */}
        <img
          loading="lazy"
          src="/assets/services/data-integration/our-5-step-guide-to-UTech-big-data-sync-framework.gif"
          alt="Mobile App Devices"
          className="md:max-w-5xl xl:w-max-w-6xl 2xl:max-w-7xl mx-auto"
        />

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">
          EXPLORE THE FULL FRAMEWORK
        </ContactUsButton>
      </PageLayout>

      {/* Additional Offerings Section */}
      <section className="py-12 bg-secondary text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Additional Offerings We Provide"
            description="U Tech strives to ensure proper data integrity with careful data cleaning and ongoing support for all data-driven workflows. Our data management strategies adhere to stringent governance frameworks."
          />

          {/* Features with center image layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 ">
            {/* Left Features */}
            <FeaturesList
              features={dataGovernanceAndSecuritySolutions.slice(0, 2)}
              center
            />

            {/* Center Image */}
            <img
              loading="lazy"
              src="/assets/services/data-integration/additional-offerings-we-provide.gif"
              alt="Mobile Analytics App"
              className="w-48 sm:w-52 xl:w-62 2xl:w-64 mx-auto"
            />

            {/* Right Features */}
            <FeaturesList
              features={dataGovernanceAndSecuritySolutions.slice(2, 4)}
              center
            />
          </div>

          {/* CTA ContactUsButton */}
          <ContactUsButton variant="hover">
            HIRE DATA INTEGRETION EXPERTS
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Certified Tools Section */}
      <PageLayout className="py-10 space-y-10 text-center">
        <Headline
          title="Certified Tools & Platforms We Have Expertise In"
          description="U Tech is a data integration company specializing in leading data integration tools and platforms, such as Microsoft, AWS, Oracle, Databricks, and Snowflake. We leverage the latest tools to modernize operations and streamline workflows."
        />

        {/* Tools Logos & Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Tools Logos */}
          <div className="flex items-center justify-center flex-wrap gap-8">
            {certifiedTools.map((logo, index) => (
              <div key={index}>
                <img
                  loading="lazy"
                  src={`/assets/services/data-integration/certified-tools/${logo.img}.png`}
                  alt={logo?.label}
                  className="h-22 mx-auto"
                />
              </div>
            ))}
          </div>

          {/* Right-side illustration */}
          <img
            loading="lazy"
            src="/assets/services/data-integration/certified-tools-platforms-we-have-expertise-in.png"
            alt="Mobile Analytics App"
            className="w-145 xl:w-150 2xl:w-155 mx-auto"
          />
        </div>

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">
          GET DATA INTEGRETION SERVICES
        </ContactUsButton>
      </PageLayout>
    </>
  );
}

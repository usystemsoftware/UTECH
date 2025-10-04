import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
  dataLakeServices,
  dataLakeSolutions,
  dataManagementSolutions,
  dataValueProps,
  portfolioItems,
} from "./Data";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

export default function DataManagement() {
  return (
    <>
     <SeoHead
        title="U Tech | DataManagement - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
        componentName="Blog"
      />
      {/* HERO SECTION */}
      <HeroSection
        backgroundImage="/banner/data-management-banner.jpg"
        title="Data Management Services"
        description="Streamline, secure, and optimize enterprise data for smarter decisions, compliance, and sustainable growth."
        buttonText="CUNSULT A DATA MANAGEMENT EXPERTS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* DATA MANAGEMENT SOLUTIONS SECTION */}
      <PageLayout className="space-y-10 py-12 text-center">
        <Headline
          title="Data Management Solutions"
          description="U Tech is a leading data management service provider that offers comprehensive enterprise data solutions to empower businesses with centralized and secured big data for effective operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
          {/* Left Features */}
          <FeaturesList features={dataManagementSolutions.slice(0, 4)} center />

          {/* Center Images */}
          <img
            loading="lazy"
            src="/assets/services/data-management/data-management-solutions-mobile.png"
            alt="Mobile Analytics App"
            className="w-42 sm:w-56 xl:w-64 2xl:w-68 mx-auto"
          />
          {/* Right Features */}
          <FeaturesList features={dataManagementSolutions.slice(4, 8)} center />
        </div>

        {/* CTA */}
        <ContactUsButton variant="hover">
          GET DATA MANAGEMENT SERVICES
        </ContactUsButton>
      </PageLayout>

      {/* DATA LAKE MANAGED SERVICES SECTION */}
      <section className="bg-secondary py-12">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="Data Lake Managed Services"
            description="U Tech provides comprehensive data lake support services that help businesses maintain their data lakes and optimize them for performance, scalability, and compliance. Our data lake professionals ensure seamless operations while providing the robust data flow and infrastructure that empowers real-time analytics and high-value insights."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <FeaturesList features={dataLakeServices} iconAlign="horizontal" />
            <img
              loading="lazy"
              src="/assets/services/data-management/custom-built-data-lake-development-services-desktop.png"
              alt="Data Lake Services"
              className="w-74 sm:w-115 xl:w-120 2xl:w-140 mx-auto"
            />
          </div>

          {/* CTA */}
          <ContactUsButton variant="hover">
            GET DATA LAKE MANAGED SERVICES
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* CUSTOM-BUILT DATA LAKE DEVELOPMENT SECTION */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="Custom-Built Data Lake Development Services"
          description="Let U Tech provide you with expert data lake developers who can design, develop, and deploy data lake platforms. We empower your enterprise with complete ownership, scalability, and ROI."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets/services/data-management/custom-built-data-lake-development-services-laptop.png"
            alt="Data Lake Development"
            className="w-145 xl:w-135 2xl:w-155 mx-auto"
          />
          <FeaturesList features={dataLakeSolutions} iconAlign="horizontal" />
        </div>

        {/* CTA */}
        <ContactUsButton variant="hover">
          HIRE DATA LAKE EXPERTS
        </ContactUsButton>
      </PageLayout>

      {/* VALUE PROPOSITION SECTION */}
      <section className="bg-secondary py-10">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Why Choose U Tech"
            description="Unmatched Expertise & Innovation Our experts bring decades of experience in data architecture, integration, and governance. Our scalable solutions deliver innovation that keeps your enterprise ahead."
          />
          <FeaturesList features={dataValueProps} grid iconAlign="horizontal" />

          {/* CTA */}
          <ContactUsButton variant="hover">
            CUNSULT A DATA MANAGEMENT EXPERTS
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
      <PortfolioGrid items={portfolioItems} />
    </>
  );
}

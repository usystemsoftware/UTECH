import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, TypographyMuted, TypographyH3 } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
  mvpDevelopmentSteps,
  mvpProcess,
  mvpServices,
  mvpTechStack,
  portfolioItems,
  testimonials,
} from "./Data";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

export default function StartupMvp() {
  return (
    <>
    <SeoHead
        title="U Tech | StartupMvp - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
        componentName="StartupMvp"
      />
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/startup-mvp.jpeg"
        title="MVP App Development for Startups"
        buttonText="GET MVP APP DEVELOPMENT NOW!"
        buttonLink="#"
        imageFit="cover"
      />

      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="U Tech’s Software & MVP Application Development Services for Startups"
          description="U Tech helps startup businesses analyze the demand for their product in the market by providing expert-level MVP application development services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <FeaturesList features={mvpServices} grid />
          <img
            loading="lazy"
            src="/assets/services/startup-mvp/software-mvp-application-development-services-for-startups.png"
            alt="Migration Planning Dashboard"
            className="mx-auto w-42 sm:w-56 xl:w-62 2xl:w-66 block sm:hidden md:block"
          />
        </div>
        <ContactUsButton variant="hover">
          DESIGN YOUR MVP APP NOW
        </ContactUsButton>
      </PageLayout>

      <TestimonialSection testimonials={testimonials} />

      <PageLayout className="text-center space-y-10 py-12">
        <Headline
          title="U Tech’s Steps for MVP Application Success"
          description="U Tech transforms your minimum viable product (MVP) application from a single feature product to a high-performance product that offers enhanced market feasibility, scalability, and usability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
          {/* Left Features */}
          <FeaturesList features={mvpProcess.slice(0, 2)} center />

          {/* Center Image */}
          <img
            loading="lazy"
            src="/assets/services/startup-mvp/offers-autodesk-global-consulting-services.gif"
            alt="Mobile Analytics App"
            className="md:w-135 sm:w-115 w-86 mx-auto"
          />
          {/* Right Features */}
          <FeaturesList features={mvpProcess.slice(2, 4)} center />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <img
            loading="lazy"
            src="/assets/services/startup-mvp/mvp-scope-definition.png"
            alt="Mobile App Devices"
            className="w-130 xl:w-145 2xl:w-155 mx-auto"
          />
          <FeaturesList features={mvpDevelopmentSteps} iconAlign="horizontal" />
        </div>
        <ContactUsButton variant="hover">GET MVP APP SOLUTIONS</ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="MVP App Development Technologies"
            description="Whether you’re in the market for an MVP web application, or an MVP mobile application, U Tech will create your app using leading technologies, tools, and development techniques."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {mvpTechStack.map(({ title, description, tools }, index) => (
              <div key={index} className="space-y-4">
                <TypographyH3>{title}</TypographyH3>
                <TypographyMuted>{description}</TypographyMuted>
                <div className="flex flex-wrap justify-center items-center gap-6">
                  {tools.map((tool, idx) => (
                    <img
                      key={idx}
                      loading="lazy"
                      src={`/assets/services/startup-mvp/tools/${tool}.png`}
                      alt="Mobile App Devices"
                      className="mx-auto"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <ContactUsButton variant="hover">BUILD YOUR MVP APP</ContactUsButton>
        </PageLayout>
      </section>

      {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
      <PortfolioGrid items={portfolioItems} />
    </>
  );
}

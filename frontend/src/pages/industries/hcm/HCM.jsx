import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList } from "@/components/FeaturesList";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { TypographyMuted, Headline } from "@/custom/Typography";

// Importing dynamic content arrays
import {
  additionalLinks,
  aiFeatures,
  backgroundScreeningSolutions,
  hrmsSoftwareSolution,
  hrmsSoftwareSolutionsPartner,
  payrollBenefitsSolutions,
} from "./Data";

export default function HCM() {
  return (
    <>
      {/* ======================= Hero Section ======================= */}
      <HeroSection
        backgroundImage="/banner/hcm-banner.jpg"
        title="HUMAN CAPITAL MANAGEMENT SOLUTIONS"
        description="Transforming Human Capital Management Software With AI-Powered Solutions"
        buttonText="GET HCM SOFTWARE DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* =================== Airline Software Developers Section =================== */}
      <PageLayout className="text-center my-12">
        <Headline
          title="Hire Experienced and Dedicated Airline Software Developers"
          description="U Tech’s engineers have many years of industry experience programming a scalable management software solution for airlines, airports, and independent vendors."
        />

        {/* Features Grid with Image in Center */}
        <FeaturesGrid
          leftFeatures={additionalLinks.slice(0, 5)}
          rightFeatures={additionalLinks.slice(5, 10)}
          centerImage="/assets/industries/hcm/desktop-combo-hcm.png"
          fadeUp={fadeUp}
        />
      </PageLayout>

      {/* =================== AI-Powered HCM Solutions Section =================== */}
      <section className="bg-secondary py-12">
        <PageLayout className="space-y-8">
          <Headline
            title="Custom AI-Powered HCM Software Solutions"
            description="Our expert AI developers build, integrate, and implement cutting-edge solutions empowered by Artificial Intelligence to provide advanced solutions for a new era in HCM technology."
          />

          <div className="block md:hidden">
            <FeaturesList features={aiFeatures} fadeUp={fadeUp} grid />
          </div>

          {/* Displaying AI Feature Cards in 3 Columns */}
          <div className="md:grid hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-12">
            <FeaturesList features={aiFeatures.slice(0, 2)} fadeUp={fadeUp} />
            <FeaturesList features={aiFeatures.slice(2, 4)} fadeUp={fadeUp} />
            <FeaturesList features={aiFeatures.slice(4, 6)} fadeUp={fadeUp} />
          </div>
        </PageLayout>
      </section>

      {/* =================== HRMS & HRIS Solutions Section =================== */}
      <PageLayout className="py-12 space-y-12 text-center">
        <Headline
          title="HRMS & HRIS Software Solutions"
          description="We create end-to-end Human Resource Management Systems (HRMS) and Human Resource Information Systems (HRIS) to help companies run a successful business."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="grid gap-4">
            {/* HRMS/HRIS Features List */}
            <FeaturesList features={hrmsSoftwareSolution} fadeUp={fadeUp} />

            {/* Partner integrations info */}
            <TypographyMuted>
              We integrate with leading Human Capital Management (HCM) software
              solutions, including ADP Workforce Now, SAP SuccessFactors, Oracle
              HCM Cloud, UKG, and Workday Partner.
            </TypographyMuted>

            {/* Display Partner Logos */}
            <div className="flex items-center gap-8 justify-center flex-wrap mt-8">
              {hrmsSoftwareSolutionsPartner?.map((item, index) => (
                <FadeInWhenVisible key={index} delay={0.5}>
                  <img
                    loading="lazy"
                    src={`/assets/industries/hcm/hrms-solutions/${item?.img}.png`}
                    alt={item?.img}
                    className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110 mx-auto"
                  />
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          {/* Right-side Image */}
          <FadeInWhenVisible>
            <img
              src="/assets/industries/hcm/U-Techs-workforce-management-software-development-services.png"
              alt="Accounting Dashboard"
              loading="lazy"
              className="w-96 mx-auto"
            />
          </FadeInWhenVisible>
        </div>

        {/* CTA Button */}
        <FadeInWhenVisible>
          <Button variant="hover">GET HRMS/HRIS SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* =================== Payroll & Benefits Section =================== */}
      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10">
          <Headline
            title="Payroll & Benefits Administration Software Solutions"
            description="We engineer custom payroll & benefits administration systems to help organizations of all sizes effectively manage employee payroll and benefits packages"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Payroll Feature List */}
            <FeaturesList fadeUp={fadeUp} features={payrollBenefitsSolutions} />

            {/* Image */}
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/industries/hcm/legal-management-workflow-automation.png"
                alt="Portfolio"
                className="w-42 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
        </PageLayout>
      </section>

      {/* =================== Background Screening Section =================== */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Background Screening Software Solutions"
          description="We develop custom background screening software solutions powered by Artificial Intelligence (AI) to ensure a seamless pre-employment background screening process."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Image */}
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/hcm/background-screening-software-solutions.png"
              alt="Portfolio"
              className="md:w-135 w-96 mx-auto"
            />
          </FadeInWhenVisible>

          {/* Features List */}
          <FeaturesList
            fadeUp={fadeUp}
            features={backgroundScreeningSolutions}
            grid
          />
        </div>

        {/* CTA Button */}
        <FadeInWhenVisible>
          <Button variant="hover">GET BACKGROUND SCREENING SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>
    </>
  );
}

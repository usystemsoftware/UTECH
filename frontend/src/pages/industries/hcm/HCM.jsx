import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import { FeaturesList } from "@/components/FeaturesList";
import HeroSection from "@/components/HeroSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import ContactUsButton from "@/custom/ContactUsButton";
import { TypographyMuted, Headline } from "@/custom/Typography";

// Importing dynamic content arrays
import {
  additionalLinks,
  aiFeatures,
  backgroundScreeningSolutions,
  hrmsSoftwareSolution,
  hrmsSoftwareSolutionsPartner,
  payrollBenefitsSolutions,
  testimonials,
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
        <FeaturesGridnew
          leftFeatures={additionalLinks.slice(0, 5)}
          rightFeatures={additionalLinks.slice(5, 10)}
          centerImage="/assets/industries/hcm/desktop-combo-hcm.png"
          iconSize={38}
        />
      </PageLayout>

      {/* =================== AI-Powered HCM Solutions Section =================== */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-8">
          <Headline
            title="Custom AI-Powered HCM Software Solutions"
            description="Our expert AI developers build, integrate, and implement cutting-edge solutions empowered by Artificial Intelligence to provide advanced solutions for a new era in HCM technology."
          />

          <FeaturesList features={aiFeatures} grid3 />
        </PageLayout>
      </section>

      {/* =================== HRMS & HRIS Solutions Section =================== */}
      <PageLayout className="py-16 space-y-12 text-center">
        <Headline
          title="HRMS & HRIS Software Solutions"
          description="We create end-to-end Human Resource Management Systems (HRMS) and Human Resource Information Systems (HRIS) to help companies run a successful business."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="grid gap-4">
            {/* HRMS/HRIS Features List */}
            <FeaturesList features={hrmsSoftwareSolution} iconAlign="horizontal" />

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
              className="w-120 mx-auto"
            />
          </FadeInWhenVisible>
        </div>

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">GET HRMS/HRIS SOLUTIONS</ContactUsButton>
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
            <FeaturesList features={payrollBenefitsSolutions} iconAlign="horizontal" />

            {/* Image */}
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/industries/hcm/legal-management-workflow-automation.png"
                alt="Portfolio"
                className="w-52 mx-auto"
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
              className="md:w-145 w-96 mx-auto"
            />
          </FadeInWhenVisible>

          {/* Features List */}
          <FeaturesList
            features={backgroundScreeningSolutions}
            grid
            center
          />
        </div>

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">GET BACKGROUND SCREENING SOLUTIONS</ContactUsButton>


        <TestimonialSection testimonials={testimonials} />
      </PageLayout>
    </>
  );
}

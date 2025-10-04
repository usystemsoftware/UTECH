import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import {
  FinopServicesformation,
  FinopsFeatures,
  FinopsServicesAi,
  FinopsFeaturesTool,
  FinopServicesfedus,
} from "./Data";

const FinopsServices = () => {
  return (
    <>
    <SeoHead
        title="U Tech | FinopsServices - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
        componentName="FinopsServices"
      />
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/finops.jpg"
        title="FinOps Services"
        description=" We help teams take control of cloud costs by aligning finance and operations, improving transparency, and driving greater value from every resource."
        buttonText="SPEAK WITH A FINOPS EXPERT"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === Custom Software Solutions Overview Section === */}
      <PageLayout className="text-center py-10 space-y-10">
        <Headline
          title="Custom Software Solutions"
          description="Augment your existing development team to complete a big project or build a new software solution or application from scratch with the best custom software development company, U Tech.."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <FeaturesList
            features={FinopServicesformation}
            iconAlign="horizontal"
          />
          <img
            loading="lazy"
            src="/assets/services/finops/models.png"
            alt="Finops Planning Dashboard"
            className="w-78 sm:w-96 xl:w-110 2xl:w-125 mx-auto"
          />
        </div>
      </PageLayout>

      {/* === FinOps Phases Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center py-10 space-y-10">
          <Headline
            title="FinOps Phases"
            description="U Tech engages in three core FinOps phases; Inform, Optimize, and Operate. We work to deliver exceptional client services while efficiently managing all FinOps phases to ensure reduced expenses and optimum workflow functionality."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <img
              loading="lazy"
              src="/assets/services/finops/phases.png"
              alt="Custom Planning Dashboard"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList features={FinopsFeatures} iconAlign="horizontal" />
          </div>
          <ContactUsButton variant="hover">
            SPEAK WITH OUR FINOPS CONSULTANTS
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === FinOps Service Offerings Overview Section === */}
      <PageLayout className="text-center space-y-6 py-12">
        <Headline
          title="A Breakdown of Offerings We Provide"
          description="U Tech offers a wide range of FinOps services, with individualized strategies tailored to exceed your goals. We focus on strategic consulting, performance tracking, cost optimization and sustainable FinOps practices to ensure full lifecycle performance with our support services.."
        />
        <FeaturesList features={FinopsServicesAi} grid3 center />
        <ContactUsButton variant="hover">GET FINOPS SERVICES</ContactUsButton>
      </PageLayout>

      {/* === AI-Powered FinOps Tools Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center py-10 space-y-10">
          <Headline
            title="AI-Powered FinOps Tools"
            description="U Tech’s AI specialists continue enhancing this transformative resource to facilitate intelligent automation, streamline workflows, and empower end-users with data-driven insights for optimum cloud management."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <FeaturesList
              features={FinopsFeaturesTool}
              iconAlign="horizontal"
            />
            <img
              loading="lazy"
              src="/assets/services/finops/tools.png"
              alt="Custom Planning Dashboard"
              className="w-125 xl:w-145 2xl:w-165 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            GET AI-POWERED FINOPS CAPABILITIES
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === Why Choose U Tech Section === */}
      <PageLayout className="text-center space-y-10 py-12">
        <Headline
          title="Why Choose U Tech for FinOps Service"
          description="U Tech’s certified FinOps practitioners create individualized hybrid and multi-cloud support strategies to deliver exceptional client services, optimized cloud-based workflows, and reduced expenses to enable greater business value and ROI."
        />
        <FeaturesList features={FinopServicesfedus} grid />
        <ContactUsButton variant="hover">
          SPEAK WITH A FINOPS EXPERT
        </ContactUsButton>
      </PageLayout>
    </>
  );
};

export default FinopsServices;

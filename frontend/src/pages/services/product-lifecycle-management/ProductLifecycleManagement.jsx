import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
  plmIntegrations,
  plmSolutions,
  plmSolutionsExtended,
  portfolioItems,
  sdlcPhases,
} from "./Data";

export default function ProductLifecycleManagement() {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/product-lifecycle-management.jpeg"
        title="PRODUCT LIFECYCLE MANAGEMENT SERVICES"
        buttonText="GET PLM SERVICES NOW"
        buttonLink="#"
        imageFit="cover"
      />

      <PageLayout className="pt-12 space-y-10 text-center">
        <Headline
          title="Let U Tech Handle Your End-to-End Product Lifecycle Management"
          description="U Tech offers product lifecycle management (PLM) services to support small, mid-size, and enterprise-size business needs, connecting people, processes, and data vital to your production and manufacturing workflows."
        />

        <FeaturesList features={sdlcPhases} grid3 center />

        <ContactUsButton variant="hover">
          IMPLEMENT PML SOFTWARE NOW
        </ContactUsButton>

        <img
          loading="lazy"
          src="/assets/services/product-lifecycle-management/product-lifecycle-management-services.png"
          alt="Migration Planning Dashboard"
          className="mx-auto w-full md:w-[65%]"
        />
      </PageLayout>

      <section className="py-16 bg-secondary text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="U Tech’s Custom PLM Software Capabilities"
            description="U Tech’s custom PLM software solutions deliver supply chain agility, business continuity, data governance, traceability, and the highest standard of quality and compliance, seamlessly integrated with existing ERP systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <FeaturesList features={plmSolutions.slice(0, 2)} center />
            <img
              loading="lazy"
              src="/assets/services/product-lifecycle-management/custom-plm-software-capabilities.png"
              alt="Mobile Analytics App"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList features={plmSolutions.slice(2, 4)} center />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-16 items-center gap-6">
            <div className="order-2 md:order-1">
              <FeaturesList
                features={plmSolutionsExtended.slice(0, 3)}
                iconAlign="horizontal"
              />
            </div>
            <img
              loading="lazy"
              src="/assets/services/product-lifecycle-management/offers-autodesk-global-consulting-services.gif"
              alt="Migration Planning Dashboard"
              className="mx-auto w-86 sm:w-115 2xl:w-145 order-1 md:order-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <img
              loading="lazy"
              src="/assets/services/product-lifecycle-management/project-design-collaboration.png"
              alt="Migration Planning Dashboard"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList
              features={plmSolutionsExtended.slice(3, 6)}
              iconAlign="horizontal"
            />
          </div>

          <ContactUsButton variant="hover">
            HIRE PML DEVELOPER NOW
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="PLM Software Integrations"
          description="U Tech’s expert developers leverage the latest technologies and integrate popular PLM software tools with your existing business systems to streamline development, implementation, and deployment processes."
        />

        <FeaturesList features={plmIntegrations} grid3 center />

        <ContactUsButton variant="hover">
          INTERGRADES PML TOOLS NOW
        </ContactUsButton>
      </PageLayout>

      {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
      <PortfolioGrid items={portfolioItems} />
    </>
  );
}

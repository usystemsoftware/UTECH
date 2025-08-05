import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { TypographyH2, Headline } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { TestimonialSection } from "@/components/TestimonialSection";

// Importing data arrays used throughout the page
import {
  accountingSolutions,
  AIPoweredConstructionFeatures,
  bidManagementSoftware,
  bimSolutions,
  ConstructionSoftwareLeftFeatures,
  ConstructionSoftwareRightFeatures,
  constructionSolutions,
  equipmentManagementSoftware,
  erpSolutions,
  estimationSolutions,
  faqsConstructions,
  projectManagementSolutions,
  revitSolutions,
  schedulingSolutions,
  submittalSolutions,
  supportServices,
  testimonials,
} from "./Data";

export default function Construction() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/banner/aec-banner.jpg"
        title="Construction Software Development"
        description="Empowering Excellence in Construction With Custom AI-Powered Solutions"
        buttonText="Get Constructions Software Developers"
        buttonLink="#"
        imageFit="cover"
      />

      {/* Construction Software Services Overview */}
      <PageLayout className="py-12">
        <Headline
          title="Construction Software Development Services"
          description="U Tech’s construction management software development services cater to the AEC (architecture, engineering, and construction) industry, delivering custom solutions that facilitate all construction-related business process."
        />
        <FeaturesGrid
          leftFeatures={ConstructionSoftwareLeftFeatures}
          rightFeatures={ConstructionSoftwareRightFeatures}
          centerImage="/assets/industries/construction/construction-software-services.png"
          fadeUp={fadeUp}
          iconSize={38}
        />
      </PageLayout>

      {/* AI-Powered Features Section */}
      <div className="bg-secondary py-12">
        <PageLayout className="text-center space-y-12">
          <Headline
            title="AI-Powered Smart Construction Software"
            description="U Tech is at the forefront of AI-driven smart construction solutions, dedicated to transforming the AEC industry..."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
            <FeaturesList
              features={AIPoweredConstructionFeatures.slice(0, 4)}
              grid
            />
            <FeaturesList
              features={AIPoweredConstructionFeatures.slice(4, 8)}
              grid
            />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">
              Get AI Powered Construction Solutions
            </Button>
          </FadeInWhenVisible>
        </PageLayout>
      </div>

      {/* Construction Automation Tools */}
      <PageLayout className="text-center py-10 space-y-10">
        <TypographyH2>Construction Automation Tools</TypographyH2>
        <FeaturesList features={constructionSolutions} grid />
      </PageLayout>

      {/* Testimonial Section */}
      <FadeInWhenVisible>
        <TestimonialSection testimonials={testimonials} />
      </FadeInWhenVisible>

      {/* Support Services Section */}
      <PageLayout className="py-16 space-y-10">
        <Headline
          title="Construction Software Support Services"
          description="U Tech enhances the latest construction software resources to elevate designs..."
        />
        <FeaturesList features={supportServices} grid />
      </PageLayout>

      {/* Accounting Solutions */}
      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10">
          <Headline
            title="Construction Accounting Software"
            description="U Tech designs construction accounting software systems integrated with business intelligence engines, ERP tools..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <FeaturesList fadeUp={fadeUp} features={accountingSolutions} />
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/industries/construction/construction-accounting-software.png"
                alt="Portfolio"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
        </PageLayout>
      </section>

      {/* BIM Software Section */}
      <PageLayout className="py-16 space-y-10">
        <Headline
          title="Building Information Modeling (BIM) Software"
          description="Building Information Modeling (BIM) Software U Tech is a software development company..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/construction/building-information-modeling-solutions-cut.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList fadeUp={fadeUp} features={bimSolutions} />
        </div>
      </PageLayout>

      {/* Revit Software Section */}
      <section className="py-16 bg-secondary space-y-10">
        <Headline
          title="Revit Software Solutions"
          description="U Tech’s Revit software include app development & plugin development..."
        />
        <PageLayout className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <FeaturesList fadeUp={fadeUp} features={revitSolutions} />
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/construction/revit-software-solutions-cut.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* ERP Software Section */}
      <PageLayout className="py-16 space-y-10">
        <Headline
          title="Construction ERP Software Solutions"
          description="U Tech engineers customized construction ERP software solutions that facilitate..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/construction/construction-erp-software-solutions.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList fadeUp={fadeUp} features={erpSolutions} />
        </div>
      </PageLayout>

      {/* Cost Estimation Software Section */}
      <section className="py-16 bg-secondary space-y-10">
        <Headline
          title="Cost Estimation Software"
          description="U Tech’s construction cost estimation software solutions save time and money..."
        />
        <PageLayout className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <FeaturesList fadeUp={fadeUp} features={estimationSolutions} />
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/construction/construction-cost-estimation-software-cut.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* Bid Management Section */}
      <PageLayout className="py-16 space-y-10">
        <Headline
          title="Construction Bid Management Software"
          description="U Tech’s construction bid management software solutions enable companies to simplify..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/construction/construction-bid-management-software-solutions-cut.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList fadeUp={fadeUp} features={bidManagementSoftware} />
        </div>
      </PageLayout>

      {/* Equipment Management Section */}
      <section className="py-16 bg-secondary space-y-10">
        <Headline
          title="Construction Equipment Management Software"
          description="U Tech’s construction equipment management software enables construction crews..."
        />
        <PageLayout className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeaturesList
            fadeUp={fadeUp}
            features={equipmentManagementSoftware}
          />
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/construction/farm-management-software-services1.png"
              alt="Portfolio"
              className="w-64 mx-auto"
            />
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* Scheduling Software Section */}
      <PageLayout className="py-16 space-y-10">
        <Headline
          title="Scheduling Software Solution"
          description="U Tech’s scheduling software solutions facilitate fast schedule generation..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/construction/scheduling-software-solutions-cut.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList fadeUp={fadeUp} features={schedulingSolutions} />
        </div>
      </PageLayout>

      {/* Submittal Solutions Section */}
      <section className="py-16 bg-secondary space-y-10">
        <Headline
          title="Construction Submittal Solutions"
          description="U Tech’s construction submittal software solutions enable quick and easy verification..."
        />
        <PageLayout className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeaturesList fadeUp={fadeUp} features={submittalSolutions} />
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/construction/construction-submittal-solutions.png"
              alt="Portfolio"
              className="w-46 mx-auto"
            />
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* Project Management Section */}
      <PageLayout className="py-16 space-y-10">
        <Headline
          title="Project Management Software Solutions"
          description="U Tech creates construction project management systems that simplify and streamline..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/construction/project-management-software-solutions.png"
              alt="Portfolio"
              className="w-110 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList fadeUp={fadeUp} features={projectManagementSolutions} />
        </div>
      </PageLayout>

      {/* FAQ Section */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={faqsConstructions} title="FAQ's" />
      </div>
    </>
  );
}

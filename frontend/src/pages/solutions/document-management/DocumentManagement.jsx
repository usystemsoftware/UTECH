import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FeaturesList } from "@/components/FeaturesList";
import PortfolioGrid from "@/components/PortfolioGrid";
import FaqSection from "@/custom/FaqSection";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, TypographyH3, TypographyMuted } from "@/custom/Typography";
import {
  dmsAdvancedFeatures,
  dmsFeatures,
  dmsIntegrations,
  dmsSolutions,
  documentManagementServices,
  faqDMS,
  itDocumentManagementServices,
  portfolioItems,
  testimonials,
} from "./Data";

export default function DocumentManagement() {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/document-management-banner.jpg"
        title="Document Management Software (DMS) Development Services"
        description="Improve your workflows, eliminate silos, and stay compliant with custom DMS solutions built for your exact needs."
        buttonText="BOOK YOUR FREE DMS CONSULTATION"
        buttonLink="#"
      />

      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Get End-to-End Document Management Solutions"
          description="U Tech creates customized, end-to-end document management solutions to enable comprehensive strategies for workflow automation, data processing, and a centralized repository for unprecedented efficiency"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 text-start md:grid-cols-3 gap-8">
          {documentManagementServices.map((item, index) => (
            <div key={index} className="space-y-6">
              <img
                loading="lazy"
                src={item?.icon}
                alt={item?.title}
                className="mx-auto w-48 sm:w-62"
              />
              <TypographyH3 className="text-center">{item?.title}</TypographyH3>
              <TypographyMuted>{item?.description}</TypographyMuted>
            </div>
          ))}
        </div>
        <ContactUsButton variant="hover">
          BOOK YOUR FREE DMS CONSULTATION
        </ContactUsButton>
      </PageLayout>

      <PageLayout className="py-12 text-center space-y-10">
        <Headline
          title="Custom Document Management Software Solutions"
          description="We develop world-class document management software solutions to help law firms, healthcare facilities, publishing houses, HR departments, and a variety of other businesses to create, store, edit and distribute a multitude of documents."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets/solutions/document-management/hire-document-anagement-system-developers.png"
            alt="Migration Planning Dashboard"
            className="mx-auto w-72 xl:w-120 2xl:w-135 sm:w-110"
          />
          <FeaturesList
            features={itDocumentManagementServices.slice(0, 3)}
            iconAlign="horizontal"
          />
        </div>
        <FeaturesList
          features={itDocumentManagementServices.slice(3, 7)}
          iconAlign="horizontal"
          grid
        />

        <ContactUsButton variant="hover">
          BOOK YOUR FREE DMS CONSULTATION
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="Secure and Convenient Document Management Solutions"
            description="We develop solutions to securely store and organize even your most important documents, with strict adherence to industry-specific regulatory and compliance standards."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <FeaturesList
              features={dmsSolutions.slice(0, 3)}
              iconAlign="horizontal"
            />
            <img
              loading="lazy"
              src="/assets/solutions/document-management/secure-and-convenient-document-management-solutions.png"
              alt="Migration Planning Dashboard"
              className="mx-auto w-72 sm:w-110 xl:w-120 2xl:w-125"
            />
          </div>
          <FeaturesList
            features={dmsSolutions.slice(3, 7)}
            iconAlign="horizontal"
            grid
          />

          <ContactUsButton variant="hover">
            BOOK YOUR FREE DMS CONSULTATION
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-12 text-center space-y-10">
        <Headline
          title="Custom Document Management Software Features"
          description="Our expert developers implement customized DMS features and capabilities for SMB and enterprise systems, integrating third-party software to modify your existing business systems for a custom-tailored experience."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets/solutions/document-management/custom-document-management-software-development.png"
            alt="Migration Planning Dashboard"
            className="mx-auto w-42 sm:w-64"
          />
          <FeaturesList features={dmsFeatures} iconAlign="horizontal" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FeaturesList features={dmsAdvancedFeatures} iconAlign="horizontal" />
          <img
            loading="lazy"
            src="/assets/solutions/document-management/custom-document-management-software-development-2.png"
            alt="Migration Planning Dashboard"
            className="mx-auto w-42 sm:w-64"
          />
        </div>

        <ContactUsButton variant="hover">
          BOOK YOUR FREE DMS CONSULTATION
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="Custom Document Management Tools & Integrations"
            description="We integrate with the best document management systems on the market, combining them with your current business workflows to ensure that all your documents are saved, organized, and managed without fail."
          />
          <FeaturesList features={dmsIntegrations} grid3 center />
          <ContactUsButton variant="hover">
            BOOK YOUR FREE DMS CONSULTATION
          </ContactUsButton>
        </PageLayout>
      </section>

      <TestimonialSection testimonials={testimonials} />

      {/* === FAQ SECTION === */}
      <div className="py-16">
        <FaqSection faqs={faqDMS} title="FAQ's" />
      </div>

      {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
      <PortfolioGrid items={portfolioItems} />
    </>
  );
}

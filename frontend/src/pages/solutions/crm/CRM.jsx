import ContactUsButton from "@/custom/ContactUsButton";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import { FeaturesList } from "@/components/FeaturesList";
import { TestimonialSection } from "@/components/TestimonialSection";
import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ImageNearScreen from "@/custom/ImageNearScreen";

// Importing all required data
import {
  services,
  aiFeatures,
  crmSoftwares,
  crmPlatforms,
  crmFaqs,
  crmTestimonials,
  crmSupportItems,
} from "./Data";

const CRM = () => {
  return (
    <>
      {/* ====== Hero Section ====== */}
      <HeroSection
        backgroundImage="/banner/crm-development-services-banner.jpg"
        title="CRM DEVELOPMENT SERVICES"
        description="Unleashing the Power of AI for Custom CRM Solutions"
        buttonText="HIRE CRM DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* ====== Custom CRM Development Services Section ====== */}
      <section className="py-16 text-center space-y-10">
        <Headline
          title="Custom CRM Development Services"
          description="U Tech develops custom-tailored CRM systems, implementing
            application development software features & functionalities that
            drive businesses forward."
        />

        <ImageNearScreen
          features={services.slice(0, 4)}
          src="/assets/solutions/crm/custom-crm.png"
          imageAlign="right"
          imgClass="w-96 xl:w-130 2xl:w-145"
        />

        <ImageNearScreen
          features={services.slice(4, 8)}
          src="/assets/solutions/crm/custom-crm-2.png"
          imageAlign="left"
          imgClass="w-96 xl:w-110 2xl:w-115"
        />

        <ContactUsButton variant="hover">
          GET FACTORING SOLUTIONS
        </ContactUsButton>
      </section>

      {/* ====== AI-Powered CRM Solutions Section ====== */}
      <section className="sm:py-16 py-10 bg-secondary text-center ">
        <PageLayout className="space-y-10">
          <Headline
            title="AI-Powered CRM Solutions"
            description="AI in Customer Relationship Management (CRM) development services
              can significantly enhance the customer experience and help
              businesses improve their sales and marketing efforts. CRM artificial
              intelligence can be integrated into businesses to optimize and
              improve their work operations."
          />
          <FeaturesList features={aiFeatures} grid iconAlign="horizontal" />
          <ContactUsButton variant="hover">DEVELOP CRM WITH AI</ContactUsButton>
        </PageLayout>
      </section>

      {/* ====== CRM Software Services Section ====== */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="CRM Software Services"
          description="U Tech provides
            custom CRM software services
            focused on automating sales, marketing, and customer service
            business processes for healthcare, banking, real estate, and other
            industries."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            loading="lazy"
            src="/assets/solutions/crm/marketing.png"
            alt="Tax Preparation"
            className="sm:w-96 xl:w-110 2xl:w-135 mx-auto w-68"
          />
          <FeaturesList features={crmSoftwares} iconAlign="horizontal" />
        </div>
        <ContactUsButton variant="hover">
          DEVELOP CUSTOM CRM SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      {/* ====== CRM Support & Maintenance Section ====== */}
      <section className="py-16 bg-secondary">
        <PageLayout className="py-16 text-center space-y-10">
          <Headline
            title="CRM Support and Maintenance"
            description="Our CRM maintenance services include fixing bugs, managing data,
              performing system updates, and ensuring the security, integration,
              and performance monitoring of your CRM database. Our expertise
              comprises a wide range of CRM platforms, making our support services
              unparalleled."
          />
          <FeaturesList
            features={crmSupportItems}
            grid
            iconAlign="horizontal"
          />
          <ContactUsButton variant="hover">
            HIRE CRM CONSULTING SERVICES
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* ====== Industry-Leading CRM Platforms Section ====== */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="Industry-Leading CRM Platforms"
          description="We have a keen understanding & knowledge of how to use
            industry-leading CRM solutions system programs, such as Salesforce,
            Microsoft Dynamics, SugarCRM, Zoho, GoHighLevel, and SAP, to boost
            productivity and meet client needs."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          <FeaturesList features={crmPlatforms.slice(0, 3)} center />
          <img
            loading="lazy"
            src="/assets/solutions/crm/integrations.png"
            alt="Tax Preparation"
            className="sm:w-96 xl:w-110 2xl:w-120 mx-auto w-68"
          />
          <FeaturesList features={crmPlatforms.slice(3, 6)} center />
        </div>
        <ContactUsButton variant="hover">
          HIRE CRM INTEGRATION DEVELOPMENT
        </ContactUsButton>
      </PageLayout>

      {/* ====== Testimonials Section ====== */}
      <TestimonialSection
        title="Hear What Our Clients Have to Say"
        testimonials={crmTestimonials}
      />

      {/* ====== FAQ Section ====== */}
      <div className="my-16">
        <FaqSection faqs={crmFaqs} title="FAQ's" />
      </div>
    </>
  );
};

export default CRM;

import { Button } from "@/components/ui/button";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import { FeaturesList } from "@/components/FeaturesList";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { TestimonialSection } from "@/components/TestimonialSection";
import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";

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
        backgroundImage="/assets/solutions/crm/Employment.webp"
        title="CRM DEVELOPMENT SERVICES"
        description="Unleashing the Power of AI for Custom CRM Solutions"
        buttonText="HIRE CRM DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.2}
      />

      {/* ====== Custom CRM Development Services Section ====== */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Custom CRM Development Services"
          description="U Technology develops custom-tailored CRM systems, implementing
            application development software features & functionalities that
            drive businesses forward."
        />
        <FeaturesList features={services} fadeUp={fadeUp} grid />
        <FadeInWhenVisible>
          <Button variant="hover">GET FACTORING SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

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
          <FeaturesList features={aiFeatures} fadeUp={fadeUp} grid />
          <FadeInWhenVisible>
            <Button variant="hover">DEVELOP CRM WITH AI</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* ====== CRM Software Services Section ====== */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="CRM Software Services"
          description="U Technology provides
            custom CRM software services
            focused on automating sales, marketing, and customer service
            business processes for healthcare, banking, real estate, and other
            industries."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/solutions/crm/marketing.png"
              alt="Tax Preparation"
              className="sm:w-96 mx-auto w-68"
            />
          </FadeInWhenVisible>
          <FeaturesList features={crmSoftwares} fadeUp={fadeUp} />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">DEVELOP CUSTOM CRM SOLUTIONS</Button>
        </FadeInWhenVisible>
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
          <FeaturesList features={crmSupportItems} fadeUp={fadeUp} grid />
          <FadeInWhenVisible>
            <Button variant="hover">HIRE CRM CONSULTING SERVICES</Button>
          </FadeInWhenVisible>
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <FeaturesList features={crmPlatforms.slice(0, 3)} fadeUp={fadeUp} />
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/solutions/crm/integrations.png"
              alt="Tax Preparation"
              className="md:w-96 mx-auto w-68"
            />
          </FadeInWhenVisible>
          <FeaturesList features={crmPlatforms.slice(3, 6)} fadeUp={fadeUp} />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">HIRE CRM INTEGRATION DEVELOPMENT</Button>
        </FadeInWhenVisible>
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

import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import {
  advancedCloudSecurity,
  advancedCloudServices,
  advancedCloudSolutions,
  aiOpsCloudSolutions,
  cloudAISolutions,
  cloudAppDevelopment,
  cloudAppFAQ,
  cloudAppSolutions,
  cloudCostGovernanceServices,
  cloudDevOpsSolutions,
  cloudMigrationServices,
  cloudSecuritySolutions,
  cloudServices,
} from "./Data";

export default function Cloud() {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/cloud-application-development.jpg"
        title="CUSTOM CLOUD APPLICATION DEVELOPMENT SERVICES"
        buttonText="Hire Cloud App Developers"
        buttonLink="#"
      />

      <PageLayout className="py-12 text-center space-y-10">
        <Headline
          title="Hire Experienced Cloud Application Developers"
          description="U Tech’s low-cost developers-for-hire have a wealth of knowledge, experience, and unprecedented expertise in developing custom cloud based applications from scratch using best practices, as well as revamping existing cloud apps to fit unique organizational needs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FeaturesList features={cloudAppSolutions} iconAlign="horizontal" />
          <img
            loading="lazy"
            src="/assets/solutions/cloud/jd-edwards-enterpriseone-erp-solutions.png"
            alt="Migration Planning Dashboard"
            className="sm:w-54 w-42 xl:w-58 2xl:w-62 mx-auto"
          />
        </div>
        <ContactUsButton variant="hover">
          BUILD YOUR CLOUD APP TODAY
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="U Tech’s Cloud Application Development Services"
            description="Our cloud app development process helps businesses of all sizes unlock their business workflows’ full potential by offering our unbeatable cloud app development services."
          />

          <FeaturesList features={cloudServices} grid3 center />

          <ContactUsButton variant="hover">
            SCALE YOUR BUSSINESS WITH THE CLOUD NOW
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Comprehensive Cloud Infrastructure Services"
          description="Our tailored cloud solutions allow you to manage all your IT infrastructure components, such as migration, security, and compliance."
        />
        <FeaturesListOpposite features={cloudMigrationServices} />
        <ContactUsButton variant="hover">
          GET STARTED WITH OUR CLOUD SERVICES TODAY
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Cloud Application Development Support"
            description="U Tech’s Cloud support specialists are committed to ensuring all Cloud-based resources perform optimally. With continuous monitoring and comprehensive product support services, U Tech works to provide modern solutions for today’s evolving business landscapes."
          />

          <FeaturesList features={advancedCloudServices} grid3 center />

          <ContactUsButton variant="hover">
            GET CLOUD APPLICATION SUPPORT
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Optimized Cloud Cost Management with FinOps"
          description="With decades of experience with bleeding and cutting-edge technologies, we’re more than equipped to promote financial efficiency with our cloud solutions."
        />
        <FeaturesListOpposite features={cloudCostGovernanceServices} />
        <ContactUsButton variant="hover">
          HIRE CLOUD DEVELOPERS FOR FINOPS SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Custom Intelligent Cloud App Development Solutions"
            description="U Tech engineers custom intelligent cloud app solutions designed for businesses that utilize AI-powered software, IoT technologies, and/or big data storage for their core business processes."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <img
              loading="lazy"
              src="/assets/solutions/cloud/custom-intelligent-cloud-app-solutions.png"
              alt="Migration Planning Dashboard"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList
              features={advancedCloudSolutions}
              iconAlign="horizontal"
            />
          </div>
          <ContactUsButton variant="hover">
            GET CUSTOM CLOUD APP SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="text-center space-y-10 py-16">
        <Headline
          title="Cloud Application Development With Artificial Intelligence"
          description="U Tech’s expert developers continue to create innovative solutions leveraging Artificial Intelligence to optimize work processes and enhance Cloud application features to create customized, robust solutions to exceed your needs."
        />
        <FeaturesList features={cloudAISolutions} grid3 center />
        <ContactUsButton variant="hover">
          AI-POWERED CLOUD APP DEVELOPMENT
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Cloud AIOps Development for Next-Gen IT Operations"
            description="U Tech leverages AI and Machine Learning for cloud automation solutions and cloud optimization services to enhance operational efficiency. Our cloud solutions enable proactive performance optimization."
          />

          <FeaturesList features={aiOpsCloudSolutions} grid3 center />

          <ContactUsButton variant="hover">
            UPGRADE YOUR OPERATIONS WITH AI
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="text-center space-y-10 py-16">
        <Headline
          title="Hire Cloud Developers for Experienced DevOps Consulting"
          description="Our cloud solutions are designed to improve your cloud application development and functionality. Hire experienced cloud application developers to guarantee a fast and effective cloud application development process."
        />
        <FeaturesList features={cloudDevOpsSolutions} grid3 center />
        <ContactUsButton variant="hover">
          GET STARTED WITH OUR CLOUD DEVELOPS SERVICES TODAY
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Cloud Cybersecurity"
            description="U Tech’s cybersecurity specialists allow you to unlock unprecedented workflow and actionable insights with the Cloud, with no threats to data integrity or system infrastructure. Let our cybersecurity experts design customized solutions to safeguard your critical assets with continued, real-time monitoring to mitigate risks."
          />

          <FeaturesList features={cloudSecuritySolutions} grid3 center />

          <ContactUsButton variant="hover">
            GET CLOUD CYBERSECURITY SERVICES
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Cloud SecOps-Enhanced Security and Compliance"
          description="U Tech implements cloud security operations to secure your cloud environment. With monitoring, automation, and incident-response features, our cloud solutions keep your IT infrastructure secure, compliant, and efficient."
        />
        <FeaturesListOpposite features={advancedCloudSecurity} />
        <ContactUsButton variant="hover">
          PROTECT YOUR CLOUD INFRASTRUCTURE
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="U Tech’s Cloud App Development Partnerships"
            description="U Tech is a certified partner with AWS, Azure, and Oracle, giving us the highly regarded level of expertise and access to powerhouse cloud application Software Development Toolkit (SDK) resources needed to drive businesses forward."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <FeaturesList
              features={cloudAppDevelopment}
              iconAlign="horizontal"
            />
            <img
              loading="lazy"
              src="/assets/solutions/cloud/cloud-app-development-partnerships.png"
              alt="Migration Planning Dashboard"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            INTEGRATE THE CLOUD WITH YOUR BUSSINESS PROCESSES
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === FAQ SECTION === */}
      <div className="py-16">
        <FaqSection faqs={cloudAppFAQ} title="FAQ's" />
      </div>
    </>
  );
}

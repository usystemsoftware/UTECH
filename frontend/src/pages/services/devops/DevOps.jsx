import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import {
  devOpsChallengesSolutions,
  devOpsConsultingServices,
  devOpsFaqs,
  devOpsSolutions,
  devOpsTools,
} from "./Data";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

export default function DevOps() {
  return (
    <>
      <SeoHead
        title="U Tech | DevOps - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
        componentName="DevOps"
      />
      <HeroSection
        backgroundImage="/banner/hero-img-banner-devops.jpg"
        title="DevOps Consulting Services"
        description="U Tech’s DevOps consulting services enable seamless collaboration between development and operations teams, expediting project delivery of customized software and elevating QA testing quality throughout the project lifecycle."
        buttonText="GET DEVLOPS SERVICES"
        buttonLink="#"
        imageFit="cover"
      />

      <PageLayout className="space-y-10 text-center pt-12">
        <Headline
          title="DevOps Consulting Services for End-to-End Solutions"
          description="Our software experts offer Cloud DevOps consulting services for careful project assessment and planning strategies, pilot framework creation, seamless process implementation, and CI/CD pipeline to automate processes of creating, testing and deploying new applications. U Tech’s consultants offer individualized end-to-end solutions within FinOps, SecOps, and AiOps, providing versatility and individualized support strategies."
        />

        <FeaturesList features={devOpsSolutions} grid iconAlign="horizontal" />
        <ContactUsButton variant="hover">
          SPEAK TO A DEVOPS CONSULTANT
        </ContactUsButton>

        <Headline
          title="DevOps and Artificial Intelligence"
          description="Seamless integration of AI within DevOps propels software development into modernity. AI facilitates error-free coding, accurate testing, and real-time monitoring of every facet of development. Utilizing predictive analytics driven by AI provides data-driven insights into project development and performance, augmenting developers with enhanced decision-making to forecast future outcomes and mitigate process or system failure to ultimately reduce expenses."
        />

        <img
          loading="lazy"
          src="/assets/services/devops/dashboard-devops-800-width.png"
          alt="Mobile Analytics App"
          className="md:w-[50%] w-full mx-auto"
        />
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-12">
          <Headline
            title="Professional DevOps Services & Solutions by U Tech"
            description="Our DevOps consultants employ best practices, including process automation, streamlining software development, and infrastructure management (AWS, Azure, Google Cloud Platform, etc.) to deliver faster and more reliable software deployment with Containerization and Orchestration approach."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div className="order-2 md:order-1">
              <FeaturesList
                features={devOpsConsultingServices.slice(0, 3)}
                iconAlign="horizontal"
              />
            </div>
            <img
              loading="lazy"
              src="/assets/services/devops/security-compliance-software-development.png"
              alt="Data Lake Services"
              className="w-145 xl:w-155 2xl:w-175 mx-auto order-1 md:order-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <img
              loading="lazy"
              src="/assets/services/devops/hire-developers-with-cybersecurity-compliance-software-development-experience.png"
              alt="Data Lake Services"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList
              features={devOpsConsultingServices.slice(3, 6)}
              iconAlign="horizontal"
            />
          </div>

          <ContactUsButton variant="hover">
            HIRE EXPERT DEVOPS DEVELOPERS
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-8 space-y-10 text-center">
        <Headline
          title="Key DevOps Challenges We Solve as a Leading Consulting Firm"
          description="We understand the unique challenges each business faces, which is why we create and implement individualized strategies to transcend challenges and exceed project goals, delivering customized software solutions stringently adhering to DevOps processes and exceeding client expectations."
        />

        <FeaturesList
          features={devOpsChallengesSolutions}
          grid
          iconAlign="horizontal"
        />

        <ContactUsButton variant="hover">
          LET'S SOLVED YOUR DEVOPS CHALLENGES
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-10">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Our Consultant's Expertise in DevOps Tools and Implementation"
            description="U Tech’s expert consultants utilized strong DevOps practices, harnessing the power of leading DevOps tools & technologies that allow us to automate manual tasks and manage development and DevOps implementation processes effectively."
          />

          <FeaturesList features={devOpsTools} grid3 />
        </PageLayout>
      </section>

      {/* FAQ Section */}
      <div className="my-12">
        <FaqSection faqs={devOpsFaqs} title="FAQ's for DevOps Development" />
      </div>
    </>
  );
}

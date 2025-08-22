import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import { TypographyList2 } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { Button } from "@/components/ui/button";
import { Headline } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
  awsServices,
  awsAdditionalServices,
  awsMigrationServices,
  awsConsultingSolutions,
  awsAiMlSolutions,
  awsDevOpsServices,
  awsPerformanceOptimization,
  awsNetworkingServices,
  awsServiceslist,
  supportServices,
  Faqs,
  portfolioItems,
} from "./Data";
import ContactUsButton from "@/custom/ContactUsButton";

const Aws = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/aws.jpg"
        title="AWS DEVELOPMENT SERVICES"
        description="As a certified Autodesk partner, a member of Autodesk Developer Network & Forge Systems Integrator, U Tech provide Autodesk implementation including consulting, design, integration, customization, and AI enhancement."
        buttonText="HIRE AUTODESK EXPERTS NOW"
        buttonLink="#"
        imageFit="cover"
      />

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="Hire Our Industry Leading AWS Development Company"
          description="As an AWS certified partner, U Tech’s team of experts provide AWS configurations, migrations, integrations, and consulting services to help enterprises scale their business applications up or down to match with high or low-velocity demand."
        />
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <FeaturesList features={awsServices} iconAlign="horizontal" />
          </div>
          <img
            loading="lazy"
            src="/assets/solutions/aws/10002.png"
            alt="Portfolio"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
        </div>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <img
              loading="lazy"
              src="/assets/solutions/aws/10032.png"
              alt="Portfolio"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList
              features={awsAdditionalServices}
              iconAlign="horizontal"
            />
          </div>
          <ContactUsButton variant="hover">
            BOOK YOUR FREE AI CONSULTATION
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-12 text-center">
        <Headline
          title="AWS Migration Services"
          description="U Tech offers comprehensive migration services to help businesses transition to Amazon Web Services (AWS). We tailor solutions to your needs, ensuring efficient data and application transfer with minimal disruption."
        />
        <FeaturesList features={awsMigrationServices} grid3 center />
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="AWS Consulting Services"
            description="U Tech offers comprehensive AWS consulting, covering cloud strategy development, application modernization, performance tuning, and security and compliance to enhance your AWS infrastructure and support your business objectives."
          />
          <FeaturesListOpposite features={awsConsultingSolutions} />
          <Button variant="hover">HIRE AWS CONSULTING</Button>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-8 text-center">
        <Headline
          title="Enhance Your Amazon Web Services with AWS AI Services"
          description="Enhancing your AWS products with fundamental and impactful AI solutions; our experts are more than ready to streamline and improve your day-to-day processes."
        />
        <FeaturesListOpposite features={awsAiMlSolutions} />
        <Button variant="hover">INTEGRATE AWS AI SERVICES</Button>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="AWS DevOps Services"
            description="U Tech implements the best AWS solutions for DevOps services including process automation, streamlining CI/CD pipelines, and infrastructure management to deliver faster and more reliable application deployment on AWS."
          />
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 ">
            <div className="order-2 md:order-1">
              <FeaturesList
                features={awsDevOpsServices}
                iconAlign="horizontal"
              />
            </div>
            <img
              loading="lazy"
              src="/assets/solutions/aws/10033.png"
              alt="Portfolio"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
          </div>
          <Button variant="hover">GET AWS DEVOPS SERVICES</Button>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="AWS Application Deployment & Monitoring"
          description="U Tech, a certified AWS partner, deploys applications, websites, and e-commerce stores on AWS, providing detailed insights into CPU, server, memory, and web traffic metrics to help optimize resource costs."
        />
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <img
            loading="lazy"
            src="/assets/solutions/aws/10035.png"
            alt="Portfolio"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
          <FeaturesList
            features={awsPerformanceOptimization}
            iconAlign="horizontal"
          />
        </div>
        <Button variant="hover">CHECK METRICS ON AWS NOW</Button>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Implement Custom AWS Networking Services"
            description="Our AWS services support companies with setting up, securing, and monitoring your network to ensure that you’re able to manage your growing number of VPCs, simplify your network, secure your traffic, and provide hybrid connectivity between your on-premise & AWS networks."
          />
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <FeaturesList
                features={awsNetworkingServices}
                iconAlign="horizontal"
              />
            </div>
            <img
              loading="lazy"
              src="/assets/solutions/aws/10034.png"
              alt="Portfolio"
              className="w-86 sm:w-115 xl:w-135 2xl:w-145 mx-auto"
            />
          </div>
          <Button variant="hover">CHECK METRICS ON AWS NOW</Button>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="AWS Tools & Technologies"
          description="U Tech will customize, test, and deploy your custom web or mobile applications to AWS using top-of-the-line AWS products, tools, & technologies throughout the entire project lifecycle."
        />
        <div className="grid grid-cols-1 items-center gap-y-7 md:grid-cols-2">
          <div className="grid grid-cols-2 justify-items-center">
            <TypographyList2
              className="text-slate-800 text-left"
              items={awsServiceslist.slice(0, 7)}
            />
            <TypographyList2
              className="text-slate-800 text-left"
              items={awsServiceslist.slice(7, 15)}
            />
          </div>

          <img
            loading="lazy"
            src="/assets/solutions/aws/10036.png"
            alt="Portfolio"
            className="w-82 sm:w-96 xl:w-110 2xl:w-135 mx-auto"
          />
        </div>
        <Button variant="hover">CUSTOMIZE YOUR AWS APPLICATION</Button>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="AWS Tools & Technologies"
            description="U Tech will customize, test, and deploy your custom web or mobile applications to AWS using top-of-the-line AWS products, tools, & technologies throughout the entire project lifecycle."
          />
          <div className="grid grid-cols-1 gap-6 items-center md:grid-cols-2">
            <img
              loading="lazy"
              src="/assets/solutions/aws/10037.png"
              alt="Portfolio"
              className="w-86 sm:w-115 xl:w-135 2xl:w-145 mx-auto"
            />
            <div className="grid md:justify-center px-8">
              <TypographyList2
                className="text-slate-800 text-left px-4 sm:px-0 [&>li]:mt-3"
                items={supportServices}
              />
            </div>
          </div>
          <Button variant="hover">CUSTOMIZE YOUR AWS APPLICATION</Button>
        </PageLayout>
      </section>

      <div className="py-10">
        <FaqSection
          faqs={Faqs}
          title="Frequently Asked Questions for XR / AR VR Solutions"
        />
      </div>

      <PortfolioGrid items={portfolioItems} />
    </>
  );
};

export default Aws;

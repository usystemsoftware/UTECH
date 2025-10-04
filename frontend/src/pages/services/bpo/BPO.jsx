import { FeaturesList } from "@/components/FeaturesList";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import { TypographyH6, TypographyMuted } from "@/custom/Typography";
import {
  bpoServices,
  companyHighlights,
  facilityFeatures,
  industriesData,
  servicesData,
  technicalSolutions,
} from "./Data";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

const services = [
  "Customer Service",
  "Human Resource Management",
  "Claims Processing",
  "Compliance",
  "Accounting",
  "Infrastructure Support",
  "Data Entry",
  "Sales Enablement",
];

const industries = [
  "Finance",
  "Healthcare",
  "Insurance",
  "Energy",
  "Food & Beverage",
  "Hospitality & Travel",
  "Telecommunications",
  "Transportation",
];

export default function BPO() {
  return (
    <>
    <SeoHead
        title="U Tech | BPO - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/business-process-outsourcing-banner.jpg"
        title="Business Process Outsourcing Services"
        buttonText="HIRE RELIABLE BPO RESOURCE"
        buttonLink="#"
        imageFit="cover"
      />

      <PageLayout className="py-16 space-y-8">
        <Headline
          title="Streamline and automate your non-core processes with our BPO and digital transformation services."
          description="U Tech provides front-office and back-office support services to ensure your business runs smoothly as you focus on the core aspects of your company."
        />

        <div className="flex flex-col sm:flex-row justify-center gap-10">
          {/* Services Box */}
          <Card className="bg-secondary border-none w-full md:w-1/2">
            <TypographyH6 className="bg-teal-600 text-white px-4 py-2 rounded-t-xl -mt-6 w-fit mb-4">
              Services
            </TypographyH6>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-gray-800">
              {services.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="text-primary mt-1" size={18} />
                  <TypographyMuted>{item}</TypographyMuted>
                </li>
              ))}
            </ul>
          </Card>

          {/* Industries Box */}
          <Card className="bg-secondary border-none w-full md:w-1/2">
            <TypographyH6 className="bg-teal-600 text-white px-4 py-2 rounded-t-xl -mt-6 w-fit mb-4">
              Industries
            </TypographyH6>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-gray-800">
              {industries.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="text-primary mt-1" size={18} />
                  <TypographyMuted>{item}</TypographyMuted>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </PageLayout>

      <PageLayout className="space-y-10 text-center">
        <Headline
          title="One-Stop Business Process Outsourcing Services"
          description="Our specialized industry-specific teams provide skill, intelligence, and efficiency to drive value and growth. With our innovative resources, we will help you increase operational flexibility."
        />

        <FeaturesList features={bpoServices} grid iconAlign="horizontal" />

        <ContactUsButton variant="hover">
          HIRE BPO ONE-STOP SHOP
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16 mt-8">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Flexible Business Process Outsourcing Services"
            description="We offer a wide variety of BPO services to support your non-core processes and facilitate growth and scalability."
          />
          <FeaturesList features={servicesData} grid iconAlign="horizontal" />

          <ContactUsButton variant="hover">Get BPO SERVICES</ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-12 text-center">
        <Headline
          title="Industry Specific BPO Services"
          description="Our BPO services fulfill the needs of companies across various industries, covering key processes to enable your business to have a competitive advantage."
        />
        <FeaturesList features={industriesData} grid iconAlign="horizontal" />

        <ContactUsButton variant="hover">
          HIRE A RELIABLE BPO RESOURCE
        </ContactUsButton>
      </PageLayout>

      <section className="py-12 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="State of the Art Infrastructure Facilities"
            description="We have the infrastructure and bandwidth to provide streamlined support as we take on your business processes. Our facilities and resources are secure and reliable."
          />

          <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-8">
            <img
              loading="lazy"
              src="/assets/services/bpo/infrastructure-1.avif"
              alt="Portfolio"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList
              features={facilityFeatures.slice(0, 2)}
              iconAlign="horizontal"
            />
          </div>

          <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-8">
            <FeaturesList
              features={facilityFeatures.slice(2, 4)}
              iconAlign="horizontal"
            />
            <img
              loading="lazy"
              src="/assets/services/bpo/infrastructure-2.avif"
              alt="Portfolio"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
          </div>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="Hire Top Talent"
          description="U Tech recruits top talent that goes through a rigorous hiring process followed by thorough training and development to provide optimal service."
        />
        <FeaturesList features={companyHighlights} grid center />

        <ContactUsButton variant="hover">WORK WITH TOP TALENT</ContactUsButton>
      </PageLayout>

      <PageLayout className="space-y-10 py-10 text-center">
        <Headline
          title="DevOps Support"
          description="Our DevOps experts will help your business processes reach optimal efficiency through automation and digital transformation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <img
            loading="lazy"
            src="/assets/services/bpo/devops-support.png"
            alt="Portfolio"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
          <FeaturesList features={technicalSolutions} grid center />
        </div>

        <ContactUsButton variant="hover">GET DEVOP'S SUPPORT</ContactUsButton>
      </PageLayout>
    </>
  );
}

import { FeaturesList } from "@/components/FeaturesList";
import { Headline, TypographyH4, TypographyH1 } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/custom/ContactUsButton";

import { FaCheck } from "react-icons/fa";
import {
  digitalTransformationFeatures,
  dxFeatures,
  facilityAssurance,
  facilityHighlights,
  features,
  growthInnovationFeaturesData,
  industrySolutions,
  points,
  readingData,
  services,
} from "./Data";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

const DigitalTransformation = () => {
  return (
    <>
    <SeoHead
        title="U Tech | DigitalTransformation - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
        componentName="DigitalTransformation"
      />
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/banner/digital-transformation-banner.jpg"
        title="DIGITAL TRANSFORMATION SERVICES & SOLUTIONS"
        buttonText="Hire A Reliable DX Resource"
        buttonLink="#"
        imageFit="cover"
      />

      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="Drive Growth and Innovation With Our Digital Transformation
            Solutions"
          description="U Tech’s digital transformation consulting experts will help your
            business reach optimal performance through innovative strategies and
            implementation of digital transformation initiatives. Our DevOps
            specialists are available to provide workflow automation, deploy,
            and support technical solutions."
        />

        <FeaturesList
          features={growthInnovationFeaturesData}
          grid
          iconAlign="horizontal"
        />

        <ContactUsButton variant="hover">
          WORK WITH TRASFORAMTION EXPERTS
        </ContactUsButton>
      </PageLayout>

      <section className="py-16 bg-secondary text-center">
        <PageLayout className="space-y-12">
          <Headline
            title="Work With Top Digital Transformation Experts"
            description="We provide digital transformation services that will optimize your
            business by increasing efficiency and enabling a greater competitive
            advantage. We can integrate systems, automate processes, and provide
            staff augmentation to help you fulfill your core objectives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <img
              loading="lazy"
              src="/assets/services/digital-transformation/digital-transformation-team.jpg"
              alt="Financial Planning Dashboard"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList
              features={digitalTransformationFeatures}
              iconAlign="horizontal"
            />
          </div>

          <FeaturesList features={services} grid3 center />

          <ContactUsButton variant="hover">
            GET DIGITAL TRANSFORMATION SERVICES
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Industry-Specific Digital Transformation Solutions"
          description="U Tech provides customized digital transformation solutions to meet
          the specific needs of businesses across different industries,
          including finance, healthcare, and retail."
        />

        <FeaturesList
          features={industrySolutions}
          grid
          iconAlign="horizontal"
        />

        {/* ContactUsButton */}
        <ContactUsButton variant="hover">
          Get Industry DX Solution
        </ContactUsButton>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Reliable Digital Transformation Service Providers"
            description="We have the infrastructure and bandwidth to provide streamlined
            service and support in digital transformation and business process
            outsourcing. Our facilities and resources are secure and reliable."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <img
              loading="lazy"
              src="/assets/services/digital-transformation/unique-threat-prevention-strategies.png"
              alt="Financial Planning Dashboard"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList
              features={facilityHighlights}
              iconAlign="horizontal"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="order-2 md:order-1">
              <FeaturesList
                features={facilityAssurance}
                iconAlign="horizontal"
              />
            </div>
            <img
              loading="lazy"
              src="/assets/services/digital-transformation/remote-workforce-network-security-protection.png"
              alt="Financial Planning Dashboard"
              className="w-145 xl:w-155 2xl:w-175 mx-auto order-1 md:order-2"
            />
          </div>

          <ContactUsButton variant="hover">
            Hire A Reliable DX Resource
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-20 text-center space-y-10">
        <Headline
          title="Top Talent & Industry Expertise"
          description="U Tech recruits top talent that goes through a rigorous hiring
          process followed by thorough training and development to provide
          optimal service."
        />

        <FeaturesList features={features} grid4 center />

        <ContactUsButton variant="hover">WORK WITH TOP TALENT</ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="One-Stop Digital Transformation Solution Provider"
            description="Our specialized industry-specific teams provide skill, intelligence,
            and efficiency to drive value and growth. With our innovative
            resources, we will help you increase operational flexibility."
          />

          <FeaturesList features={dxFeatures} grid3 center />
          <ContactUsButton variant="hover">
            HIRE A ONE-STOP SHOP
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-12 space-y-10">
        <Headline
          title="Compliance Measures"
          description="Our expert management team will help you make business process
            outsourcing as seamless as possible as we implement processes per
            industry standards."
        />

        <div className="flex justify-center space-y-10 sm:flex-row flex-col items-center gap-6">
          <img
            loading="lazy"
            src="/assets/services/digital-transformation/newsroom.png"
            alt="Financial Planning Dashboard"
            className="w-84 xl:w-96 2xl:w-120 mx-auto"
          />

          <ul className="text-left space-y-4">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm sm:text-base"
              >
                <FaCheck className="text-teal-600 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <TypographyH1>SUGGESTED READING</TypographyH1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {readingData?.map((item, index) => (
              <div key={index} className="space-y-4 text-start">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <TypographyH4>{item.title}</TypographyH4>

                <ContactUsButton variant="hover" className="rounded-none">
                  READ MORE
                </ContactUsButton>
              </div>
            ))}
          </div>
        </PageLayout>
      </section>
    </>
  );
};

export default DigitalTransformation;

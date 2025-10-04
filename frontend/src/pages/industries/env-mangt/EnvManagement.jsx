import { FeaturesList } from "@/components/FeaturesList";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import FaqSection from "@/custom/FaqSection";
import ContactUsButton from "@/custom/ContactUsButton";
import { TypographySmall, Headline } from "@/custom/Typography";
import { Check } from "lucide-react";
import {
  environmentalFeatures,
  environmentalFeaturesSystem,
  environmentalSoftwareSolutions,
  environmentalUtilitySolutions,
  faqData,
  internalSolutions,
  inventoryWasteAssetSolutions,
  weatherTrackingSolutions,
} from "./Data";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"






export default function EnvManagement() {
  return (
    <>
      <SeoHead
        title="U Tech | Company Blog - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/banner/env-mang-banner.jpg"
        title="Environmental Management Software Development"
        buttonText="GET EMS DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* Uses: environmentalFeatures */}
      <PageLayout className="py-12">
        <Headline
          title="Environmental Management Software Solutions"
          description="U Tech developers create custom environmental management software built with custom database reporting platforms that track, store, and manage essential environmental compliance requirements for air, water, and waste emissions."
        />
        <FeaturesGridnew
          leftFeatures={environmentalFeatures?.slice(0, 3)}
          rightFeatures={environmentalFeatures?.slice(3, 6)}
          centerImage="/assets/Industries/env-mng/environmental-management-software-solutions-new.png"
          iconSize={38}
        />
      </PageLayout>

      {/* Uses: environmentalFeaturesSystem */}
      <section className="bg-secondary py-12">
        <PageLayout className="text-center space-y-8">
          <Headline
            title="Environmental Management System Development"
            description="U Tech’s custom environmental management system incorporates a ton of customizable features..."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <img
              loading="lazy"
              src="/assets/Industries/env-mng/environmental-management-system-solutions.png"
              alt="Portfolio"
              className="w-155 xl:w-165 2xl:w-185 mx-auto"
            />
            <div className="text-start space-y-8">
              <TypographySmall>
                Save more time & money by having U Tech developers integrate
                custom features...
              </TypographySmall>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  {environmentalFeaturesSystem
                    ?.slice(0, 6)
                    .map((item, index) => (
                      <TypographySmall
                        key={index}
                        className="flex items-center gap-4"
                      >
                        <span>
                          <Check size={14} className="text-primary" />
                        </span>
                        {item}
                      </TypographySmall>
                    ))}
                </div>
                <div className="space-y-4">
                  {environmentalFeaturesSystem
                    ?.slice(6, 12)
                    .map((item, index) => (
                      <TypographySmall
                        key={index}
                        className="flex items-center gap-4"
                      >
                        <span>
                          <Check size={14} className="text-primary" />
                        </span>
                        {item}
                      </TypographySmall>
                    ))}
                </div>
              </div>
              <TypographySmall>
                Uncover the innovative power of Artificial Intelligence...
              </TypographySmall>
            </div>
          </div>
          <ContactUsButton variant="hover">
            CALL EMS DEVELOPERS NOW
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Uses: internalSolutions */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Environmental Risk Management Assessment Database Software"
          description="We develop Enterprise Resource Planning (ERP)..."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets/Industries/env-mng/environmental-risk-management-assessment-database-software.png"
            alt="Portfolio"
            className="w-135 lg:w-155 2xl:w-165 mx-auto"
          />
          <FeaturesList features={internalSolutions} iconAlign="horizontal" />
        </div>
        <ContactUsButton variant="hover">
          ACCESS ENVIRONMENATAL RISKS WITH EASE
        </ContactUsButton>
      </PageLayout>

      {/* Uses: environmentalSoftwareSolutions */}
      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Environmental Risk Management Assessment Database Software"
            description="We develop Enterprise Resource Planning (ERP)..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
            <FeaturesList
              features={environmentalSoftwareSolutions}
              iconAlign="horizontal"
            />
            <div className="sm:block hidden">
              <img
                loading="lazy"
                src="/assets/Industries/env-mng/environmental-compliance-software-systems-for-audits-inspections-permits.png"
                alt="Portfolio"
                className="w-48 md:w-62 mx-auto"
              />
            </div>
          </div>
          <ContactUsButton variant="hover">
            ENSURE 100% ENVIRONMENATAL COMPLIANCE NOW
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Uses: inventoryWasteAssetSolutions */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Environmental Inventory Management & Waste Tracking Solutions"
          description="Our inventory management systems comply with the U.S. EPA..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets/Industries/env-mng/environmental-inventory-management-waste-tracking-solutions.png"
            alt="Portfolio"
            className="w-68 md:w-80 xl:w-86 2xl:w-96 mx-auto"
          />
          <FeaturesList
            features={inventoryWasteAssetSolutions}
            iconAlign="horizontal"
          />
        </div>
        <ContactUsButton variant="hover">
          KEEP TRACK OF ENVIRONMENATAL ASSETS NOW
        </ContactUsButton>
      </PageLayout>

      {/* Uses: environmentalUtilitySolutions */}
      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Environmental Operational Database Systems"
            description="Manage data governance and records using U Tech’s custom environmental..."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <FeaturesList
              features={environmentalUtilitySolutions}
              iconAlign="horizontal"
            />
            <img
              loading="lazy"
              src="/assets/Industries/env-mng/environmental-operational-database-systems.png"
              alt="Portfolio"
              className="W-135 xl:w-145 2xl:w-165 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            MANAGE OPERATIONAL WORKFLOWS
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Uses: weatherTrackingSolutions */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Hire Experienced Weather Management Software Developers"
          description="We develop custom weather management software solutions..."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets/Industries/env-mng/information-and-location-based-weather-app-integrations.png"
            alt="Portfolio"
            className="w-125 md:w-135 2xl:w-145 mx-auto"
          />
          <FeaturesList
            features={weatherTrackingSolutions}
            iconAlign="horizontal"
          />
        </div>
        <ContactUsButton variant="hover">
          BUILD YOUR WEATHER TRACKING APP
        </ContactUsButton>
      </PageLayout>

      {/* Uses: faqData */}
      <div className="py-10">
        <FaqSection faqs={faqData} title="FAQ's" />
      </div>
    </>
  );
}

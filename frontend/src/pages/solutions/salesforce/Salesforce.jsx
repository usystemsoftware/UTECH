import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import ContactUsButton from "@/custom/ContactUsButton";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Check } from "lucide-react";
import {
  Headline,
  TypographyH3,
  TypographyMuted,
  TypographySmall,
} from "@/custom/Typography";
import {
  agentforceServices,
  industries,
  portfolioItems,
  salesforceFaq,
  salesforceMenu,
  salesforceServices,
  salesforceSolutions,
  supportServices,
} from "./Data";

export default function Salesforce() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      <HeroSection
        backgroundImage="/banner/salesforce-banner.jpg"
        title="CUSTOM SALESFORCE DEVELOPMENT SERVICES"
        description="Elevate your Salesforce CRM system with our Salesforce development services"
        buttonText="HIRE SALESFORCE DEVELOPERS"
        bottombgcolor="bg-[#0072BC]"
        bottomLinks={salesforceMenu}
        partnerLogo="/assets//solutions/salesforce/partner.png"
      />

      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Our Salesforce Development Services"
          description="U Tech’s certified Salesforce developers design and implement customized services and solutions to enhance customer experiences, streamline business processes, and optimize the performance of your Salesforce CRM with intuitive, new resources to drive revenue and efficiency."
        />

        <FeaturesListOpposite features={salesforceServices} />

        <ContactUsButton variant="hover">
          GET CUSTOM SALESFORCE SERVICES
        </ContactUsButton>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Key Salesforce Products"
            description="U Tech’s Salesforce development experts design customized, cloud-based solutions to enhance your CRM, elevate customer service, and launch individualized strategies to drive sales."
          />

          <FeaturesListOpposite features={salesforceSolutions} />

          <ContactUsButton variant="hover">
            GET SALESFORCE CLOUD SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Salesforce Industries We Serve"
          description="Our versatile Salesforce developers design industry-specific strategies tailored to the unique needs of your business and CRM. U Tech leverages software expertise with proven business intelligence to utilize Salesforce to drive revenue, enhance customer service, and create new leads."
        />

        <section className="bg-secondary py-12 rounded-2xl shadow-md">
          <div className="container mx-auto text-center">
            {/* Industry ContactUsButtons */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8">
              {industries?.map((industry, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col items-center cursor-pointer  transition-all duration-300 ${activeIndex === index
                    ? "text-orange-600 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-orange-500 hover:border-b-2 border-orange-500"
                    }`}
                >
                  <img
                    loading="lazy"
                    src={industry?.icon}
                    alt={industry?.title}
                    className="mx-auto w-14"
                  />
                  <span className="font-semibold">{industry?.title}</span>
                </button>
              ))}
            </div>

            {/* Active Description */}
            <TypographyMuted className="max-w-2xl mb-6 mx-auto">
              {industries[activeIndex]?.description}
            </TypographyMuted>
            <ContactUsButton variant="hover">
              GET SALESFORCE INDUSTRY SOLUTIONS
            </ContactUsButton>
          </div>
        </section>
      </PageLayout>

      <section className="bg-blue-950 text-white py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Services for Agentforce Powered Success"
            description="U Tech is a certified Salesforce partner with expertise in empowering businesses to deliver exceptional customer service, optimize CRM performance and create new revenue streams. Our software specialists leverage Agentforce to modernize operations, provide prompt 24/7 support for clients, and task automation for maximum efficiency."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="order-2 sm:order-1">
              <FeaturesList
                features={agentforceServices}
                iconAlign="horizontal"
              />
            </div>
            <img
              loading="lazy"
              src="/assets//solutions/salesforce/agentforce-agent-latest-robot.png"
              alt="Migration Planning Dashboard"
              className="mx-auto w-96 md:w-135"
            />
          </div>

          <ContactUsButton variant="hover">
            TALK TO AN AGENTFORCE EXPERT TODAY
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="text-center py-10 space-y-10">
        <Headline
          title="Block of Hours Support Services"
          description="U Tech’s Block of Hours program is a cost-effective alternative to our standard flat-rate support offered to new, current, and past customers. Our Salesforce® developers are quick to relate and bring added value through our customization, integration, migration, and support services. We offer technical and non-technical support services for all Salesforce® technology. Services are sold per 100 Block of Hours with reduced rates contingent on hours purchased. Our lowest rates are attained when utilizing our full-time, dedicated resource(s)."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets//solutions/salesforce/we-have-got-salesforce-developers-without-card.png"
            alt="Migration Planning Dashboard"
            className="mx-auto w-86 sm:w-96 md:w-110 xl:w-125"
          />
          <div className="space-y-4 text-start">
            <TypographyH3>Salesforce® BOH support:</TypographyH3>

            {supportServices?.map((item, index) => (
              <TypographySmall key={index} className="flex items-center gap-4">
                <span>
                  <Check size={18} className="text-orange-600" />
                </span>
                {item}
              </TypographySmall>
            ))}
          </div>
        </div>

        <ContactUsButton variant="hover">
          GET SALESFORCE SUPPORT SERVICES
        </ContactUsButton>
      </PageLayout>

      {/* === FAQ SECTION === */}
      <div className="py-16">
        <FaqSection
          faqs={salesforceFaq}
          title="FAQ's About Custom Salesforce Development"
        />
      </div>

      {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
      <PortfolioGrid items={portfolioItems} />
    </>
  );
}

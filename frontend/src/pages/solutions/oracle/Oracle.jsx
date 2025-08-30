import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
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
  oracleAISolutions,
  oracleCloudServices,
  oracleFAQ,
  oracleIndustrySolutions,
  oracleSolutions,
  oracleSupportServices,
  portfolioItems,
} from "./Data";

export default function Oracle() {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/oracle-banner.jpg"
        title="ORACLE CONSULTING SERVICES"
        description="Your trusted Oracle partner for seamless Oracle Cloud solutions"
        buttonText="HIRE ORACLE CONSULTANTS"
        bottomLinks={oracleSolutions}
        bottombgcolor="bg-[#333333]"
        partnerLogo="/assets//solutions/oracle/partner.png"
      />

      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Get Oracle Cloud Solutions"
          description="As an Oracle Partner with over 24 years of experience, U Tech delivers best-in-class Oracle Cloud solutions that enhance business performance, strengthens security, and simplifies operation management for all types of businesses."
        />

        <FeaturesList features={oracleCloudServices} grid3 center />

        <ContactUsButton variant="hover">
          HIRE AN ORACLE PARTNER
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Oracle Industry Solutions"
            description="Our business development specialists leverage Oracle to design individualized consulting strategies to drive innovation, elevate customer experiences and exceed your unique industry challenges."
          />

          <FeaturesList features={oracleIndustrySolutions} grid3 center />

          <ContactUsButton variant="hover">
            GET ORACLE INDUSTRY SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="text-center py-12 space-y-10">
        <Headline
          title="Oracle AI Solutions"
          description="Leverage the next generation of Oracle AI solutions with seamless, cloud-based access and empower end-users with automation, data-driven decisions, and Natural Language Processing to elevate client and customer services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <FeaturesList features={oracleAISolutions} iconAlign="horizontal" />
          <img
            loading="lazy"
            src="/assets//solutions/oracle/email-marketing.png"
            alt="Migration Planning Dashboard"
            className="mx-auto w-86 sm:w-110 xl:w-135"
          />
        </div>

        <ContactUsButton variant="hover">
          GET ORACLE AND AI SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="text-center py-10 space-y-10">
          <Headline
            title="Block of Hours Support Services"
            description="Saving money is a universal business strategy. Take advantage of U Tech’s cost-effective Block of Hours program and purchase our support services, sold per 100 service hours, at a reduced rate."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <img
              loading="lazy"
              src="/assets//solutions/oracle/oracle-block-of-ours-support-services.png"
              alt="Migration Planning Dashboard"
              className="mx-auto w-86 sm:w-110 xl:w-135"
            />
            <div className="space-y-6 text-start">
              <TypographyH3>Pay-as-you-go Model</TypographyH3>
              <TypographyMuted>
                Whether technical or non-technical, you can leverage our
                technical and non-technical support services for all Oracle
                products, at their lowest rates in the following ways:
              </TypographyMuted>
              <div className="space-y-4">
                {oracleSupportServices?.map((item, index) => (
                  <TypographySmall
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <span>
                      <Check size={18} className="text-orange-600" />
                    </span>
                    {item}
                  </TypographySmall>
                ))}
              </div>
            </div>
          </div>

          <ContactUsButton variant="hover">
            THIRD PARTY ORACLE SUPPORT
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === FAQ SECTION === */}
      <div className="py-16">
        <FaqSection faqs={oracleFAQ} title="FAQ's About Oracle Consulting" />
      </div>

      {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
      <PortfolioGrid items={portfolioItems} />
    </>
  );
}

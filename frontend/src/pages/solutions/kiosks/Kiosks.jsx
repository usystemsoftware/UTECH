import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import ContactUsButton from "@/custom/ContactUsButton";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Headline } from "@/custom/Typography";
import {
  aiKioskServices,
  customKioskServices,
  industryKioskSolutions,
  kioskFaq,
  kioskHardwareServices,
  kioskServices,
  kioskSupportServices,
  portfolioItems,
} from "./Data";

export default function Kiosks() {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/kiosk-banner.jpg"
        title="CUSTOM KIOSK SOFTWARE DEVELOPMENT SOLUTIONS"
        description="Drive Revenue Through Kiosk Solutions"
        buttonText="START KIOSK DEVELOPMENT"
        buttonLink="#"
      />

      <PageLayout className="text-center py-12 space-y-10">
        <Headline
          title="Custom Kiosk Software Solutions"
          description="U Tech provides custom kiosk software development that allows businesses to enjoy interactive digital experiences, streamlined processes, and technology that can scale."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets//solutions/kiosks/kiosk-software-development-solution.png"
            alt="Migration Planning Dashboard"
            className="mx-auto w-82 sm:w-120 xl:w-145 2xl:w-155"
          />
          <FeaturesList features={kioskServices} iconAlign="horizontal" />
        </div>

        <ContactUsButton variant="hover">
          SPEAK WITH OUR KIOSK CONSULTANTS
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Agentic AI-Powered Kiosk Solutions"
            description="U Tech's smart kiosk solutions utilize agentic AI to offer automation that encompass deeper personalization, and improved operational efficiency."
          />

          <FeaturesListOpposite features={aiKioskServices} />

          <ContactUsButton variant="hover">
            GET AI-POWERED KIOSK SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="text-center py-12 space-y-10">
        <Headline title="Kiosk Hardware and System Integration" />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div className="order-2 md:order-1">
            <FeaturesList
              features={kioskHardwareServices}
              iconAlign="horizontal"
            />
          </div>
          <img
            loading="lazy"
            src="/assets//solutions/kiosks/kiosk-software-development-solutions.png"
            alt="Migration Planning Dashboard"
            className="mx-auto w-82 sm:w-120 xl:w-145 2xl:w-155"
          />
        </div>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline title="Custom-Built Kiosk Systems" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <FeaturesList features={customKioskServices.slice(0, 2)} center />
            <img
              loading="lazy"
              src="/assets//solutions/kiosks/custom-kiosk-solutions.png"
              alt="Mobile Analytics App"
              className="mx-auto w-84 sm:w-135"
            />
            <FeaturesList features={customKioskServices.slice(2, 4)} center />
          </div>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="Kiosk Support & Maintenance Services"
          description="U Tech’s dedicated support services team provides expert application support, 24/7 troubleshooting, and careful monitoring and maintenance of all software-based resources powering kiosks."
        />

        <FeaturesListOpposite features={kioskSupportServices} />

        <ContactUsButton variant="hover">
          GET SPEAK WITH OUR KIOSK CONSULTANTS
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Kiosk Industry-Specific Solutions"
            description="U Tech’s software specialists design and deploy AI-driven strategies to enhance kiosk performance with data-driven analytics, real-time remote monitoring of system performance and customer behavior."
          />

          <FeaturesListOpposite features={industryKioskSolutions} />

          <ContactUsButton variant="hover">
            GET INDUSTRY-SPECIFIC KIOSK SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === FAQ SECTION === */}
      <div className="py-16">
        <FaqSection
          faqs={kioskFaq}
          title="FAQ's About Kiosk Software Solutions"
        />
      </div>

      {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
      <PortfolioGrid items={portfolioItems} />
    </>
  );
}

import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/custom/ContactUsButton";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import { Headline } from "@/custom/Typography";

import UiPathBPO from "./UiPathBPO";
import UiPathBanking from "./UiPathBanking";
import UiPathInsurance from "./UiPathInsurance";
import UiPathHealthcare from "./UiPathHealthcare";
import UiPathTelecom from "./UiPathTelecom";
import UiPathManufacturing from "./UiPathManufacturing";
import UiPathPublicServices from "./UiPathPublicServices";
import UiPathRetail from "./UiPathRetail";

import FaqSection from "@/custom/FaqSection";

// Import all data
import { uipathServices, uipathAI, uipathAutomation, uipathFaq } from "./Data";
import UiPathIndustries from "./UiPathIndustries";

export default function UiPath() {
  return (
    <div>
      {/* === HERO === */}
      <HeroSection
        backgroundImage="/banner/ui-path-banner.jpeg"
        title="UiPath Consulting"
        description="Hire UiPath Implementation Partners to Unlock AI-Powered Automation"
        buttonText="HIRE UIPATH CONSULTANTS"
        partnerLogo="/assets/solutions/ui-path/partner.png"
      />

      {/* === SECTION 1 === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Get Custom UiPath Services from Certified UiPath Partners"
          description="Chetu is a certified UiPath partner and leverages product expertise with customized software solutions to optimize operations, elevate business intelligence, reduce expenses, and create accurate task automation."
        />
        <FeaturesListOpposite features={uipathServices} />
        <ContactUsButton variant="hover">HIRE SAP PARTNERS</ContactUsButton>
      </PageLayout>

      {/* === SECTION 2 === */}
      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Customize UiPath AI Solutions"
            description="Our certified UiPath experts integrate AI-driven resources, hyperautomation, and advanced ML to help organizations achieve intelligent automation."
          />
          <FeaturesList grid3 center features={uipathAI} />
          <ContactUsButton variant="hover">CUSTOMIZE UIPATH AI</ContactUsButton>
        </PageLayout>
      </section>

      {/* === SECTION 3 === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="UiPath Automation Services"
          description="Discover UiPath automation tools tailored to simplify, optimize, and scale workflows efficiently."
        />
        <FeaturesList grid3 center features={uipathAutomation} />
        <ContactUsButton variant="hover">GET UIPATH AUTOMATION</ContactUsButton>
      </PageLayout>

      {/* === INDUSTRIES === */}
      {/* Uncomment these if you want to show them individually */}
      
      <UiPathBPO />
      <UiPathBanking />
      <UiPathInsurance />
      <UiPathHealthcare />
      <UiPathTelecom />
      <UiPathManufacturing />
      <UiPathPublicServices />
      <UiPathRetail /> 
     
      <UiPathIndustries />

      {/* === FAQ SECTION === */}
      <div className="py-16">
        <FaqSection faqs={uipathFaq} title="FAQ's About UiPath Services" />
      </div>
    </div>
  );
}

// === HELPER COMPONENT ===
const FeatureItem = ({ icon, title, text }) => (
  <div className="flex items-start space-x-4">
    <img src={icon} alt={title} className="w-12 h-12" />
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  </div>
);

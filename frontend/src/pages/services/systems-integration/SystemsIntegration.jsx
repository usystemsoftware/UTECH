import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import FaqSection from "@/custom/FaqSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import {
  dataIntegrationServices,
  faqs,
  features,
  softwareDevelopmentSolutions,
  webSocketData,
} from "./Data";

export default function SystemsIntegration() {
  return (
    <>
      {/* === HERO BANNER SECTION === */}
      <HeroSection
        backgroundImage="/banner/systems-integration.jpeg" // Background image for the hero
        title="Software Integration Services" // Main heading text
        buttonText="HIRE INTERGRATION DEVELOPERS" // CTA button label
        buttonLink="#" // CTA button link
        imageFit="cover" // Image fit style
      />

      {/* === SOFTWARE INTEGRATION INTRODUCTION === */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="Specialized Software Integration Services" // Section heading
          description="When a company adopts a new technology or business process, they face many challenges between their current applications and systems and the complicated software implementation process. Our industry-specific software engineers handle all of your challenging integration & implementation obstacles, including architectural design, testing, debugging, and execution." // Description text
        />

        {/* Feature list with icons on both sides of text */}
        <FeaturesListOpposite
          features={dataIntegrationServices}
          grid
          iconAlign="horizontal"
        />

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">
          GET CUSTOM INTEGRATION SERVICES
        </ContactUsButton>
      </PageLayout>

      {/* === CUSTOM WEBSOCKET UPGRADE SERVICES === */}
      <PageLayout className="text-center space-y-10 py-12">
        <Headline
          title="Custom Websocket Upgrade Services" // Section heading
          description="We develop custom WebSocket platforms that establishes single TCP socket connections between the server and client, thus allowing for bi-directional messages to be instantly distributed."
        />

        {/* Two-column layout: features on left, image on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Feature list */}
          <div className="order-2 md:order-1">
            <FeaturesList features={features} grid center />
          </div>

          {/* Center image */}
          <img
            loading="lazy"
            src="/assets/services/systems-integration/increase-productivity-laptop.jpg"
            alt="Migration Planning Dashboard"
            className="w-130 xl:w-145 2xl:w-155 mx-auto order-1 md:order-2"
          />
        </div>

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">
          GET WEBSOCKET SOLUTIONS
        </ContactUsButton>

        {/* Additional section for websocket development */}
        <Headline title="Websocket Development" />

        {/* 3-column grid feature list */}
        <FeaturesList features={webSocketData} grid3 center />

        {/* Full-width image */}
        <img
          loading="lazy"
          src="/assets/services/systems-integration/websocket-connection.png"
          alt="Migration Planning Dashboard"
          className="mx-auto w-full md:w-[90%] mt-12"
        />

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">HIRE DEVELOPER NOW</ContactUsButton>
      </PageLayout>

      {/* === SOFTWARE DEVELOPMENT SOLUTIONS GRID === */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline title="Our Software Development Solutions" />

        {/* Features grid with left + right columns and center image */}
        <FeaturesGridnew
          leftFeatures={softwareDevelopmentSolutions.slice(0, 6)} // First 6 features for left column
          rightFeatures={softwareDevelopmentSolutions.slice(6, 11)} // Remaining features for right column
          centerImage="/assets/services/systems-integration/application-develop-ment-services-desktop-combo.png" // Middle image
        />
      </PageLayout>

      {/* === FAQ SECTION === */}
      <div className="py-10">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
}

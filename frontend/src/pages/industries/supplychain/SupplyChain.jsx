import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/custom/ContactUsButton";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import VideoPoster from "@/custom/VideoPoster";
import FaqSection from "@/custom/FaqSection";
import { Headline } from "@/custom/Typography";
import {
  SupplyChainSoftwareLeftFeatures,
  SupplyChainSoftwarerightFeatures,
  SupplyTransformationFeatures,
  gamingSupplyChain,
  SupplyTransformations,
  SupplyTransfoods,
  gamingSupplychain,
  SupplyTransTracking,
  SupplyTransTrackingdata,
  SupplyChainTransTracking,
  pharmacyFeaturesChain,
  aiDrivenCorrectionalSupplyChain,
  faqs,
  features,
  trackingSolutions,
} from "./Data";

const SupplyChain = () => {
  return (
    <>
      {/* Hero banner section */}
      <HeroSection
        backgroundImage="/banner/supply-chain-management-banner.jpg"
        title="Supply Chain Management Software Development"
        buttonText="Get SCM Developers"
        buttonLink="/supply-chain-management-software-development"
        imageFit="cover"
        overlayOpacity={0.2}
      />

      {/* Features grid for general SCM solutions */}
      <PageLayout className="text-center py-10">
        <Headline title="Supply Chain Software Development" />

        <FeaturesGridnew
          leftFeatures={SupplyChainSoftwareLeftFeatures}
          rightFeatures={SupplyChainSoftwarerightFeatures}
          centerImage="/assets/Industries/supplychain/supplychain.png"
          iconGap="md:gap-16"
        />
      </PageLayout>

      <section className="relative w-full overflow-hidden">
        <VideoPoster
          features={features}
          title="The Supply Chain Industry Is Changing! Must-Know New Tech"
        />
      </section>

      {/* SCM software core functions section */}
      <section className="bg-secondary py-4">
        <PageLayout className="text-center py-10 space-y-10">
          <Headline
            title="Supply Chain Management (SCM) Software Development"
            description="We develop SCM software to enable inventory management, electronic data interchange (EDI), material requirements planning (MRP), order management systems (OMS), and more."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <FeaturesList
              features={SupplyTransformationFeatures}
              iconAlign="horizontal"
            />
            <img
              loading="lazy"
              src="/assets/Industries/supplychain/distribution.gif"
              alt="Financial Planning Dashboard"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">Get SCM Solutions</ContactUsButton>
        </PageLayout>
      </section>

      {/* AI-enabled SCM solutions */}
      <PageLayout className="text-center py-12 space-y-10">
        <Headline
          title="AI-Enabled Supply Chain Software Solutions"
          description="U Tech’s AI experts can create custom software solutions that leverage AI in supply chain and logistics..."
        />

        <FeaturesList features={gamingSupplyChain} grid3 center />

        <ContactUsButton variant="hover">
          GET AI ENABLED SCM SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      {/* Inventory management software solutions */}
      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="SCM Inventory Management Software Solutions"
            description="We implement inventory management capabilities..."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <img
              loading="lazy"
              src="/assets/Industries/supplychain/weighbridg.png"
              alt="Financial Planning Dashboard"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList
              features={SupplyTransformations}
              iconAlign="horizontal"
            />
          </div>
          <ContactUsButton variant="hover">
            Manage Inventory Now
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Shipping and logistics SCM solutions */}
      <PageLayout className="text-center py-16 space-y-10">
        <Headline
          title="SCM Shipping & Logistics Software Solutions"
          description="We deliver AI-driven shipping & logistics software solutions..."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <FeaturesList features={SupplyTransfoods} iconAlign="horizontal" />
          <img
            loading="lazy"
            src="/assets/Industries/supplychain/food.png"
            alt="Financial Planning Dashboard"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
        </div>
        <ContactUsButton variant="hover">
          Get Shipping Solutions
        </ContactUsButton>
      </PageLayout>

      {/* Mile delivery solutions section */}
      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-12">
          <Headline
            title="First, Middle & Last Mile Delivery Solutions"
            description="U Tech is at the forefront of AI-driven smart construction solutions..."
          />
          <div className="grid grid-row-1 sm:grid-row-3 gap-4">
            <FeaturesList features={gamingSupplychain} grid3 center />
          </div>
          <ContactUsButton variant="hover">
            Get AI Powered Construction Solutions
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Asset tracking using RFID and barcode */}
      <PageLayout className="text-center py-16 space-y-10">
        <Headline
          title="SCM Asset Tracking (RFID & Barcode) Software Solutions"
          description="We develop and integrate asset tracking software..."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <img
            loading="lazy"
            src="/assets/Industries/supplychain/expert.png"
            alt="Financial Planning Dashboard"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
          <FeaturesList features={trackingSolutions} iconAlign="horizontal" />
        </div>
        <ContactUsButton variant="hover">Track SCM Assets Now</ContactUsButton>
      </PageLayout>

      {/* EDI software solutions */}
      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="Electronic Data Interchange (EDI) Software Development"
            description="Our engineers provide custom EDI platform integrations..."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <FeaturesList
              features={SupplyTransTracking}
              iconAlign="horizontal"
            />
            <img
              loading="lazy"
              src="/assets/Industries/supplychain/interchange.png"
              alt="Financial Planning Dashboard"
              className="w-76 sm:w-110 xl:w-135 2xl:w-145 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            Track SCM Assets Now
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* MRP software solutions */}
      <PageLayout className="text-center py-16 space-y-10">
        <Headline
          title="Manufacturing Resource Planning (MRP) Software Development"
          description="We develop robust material resource planning (MRP) software..."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <img
            loading="lazy"
            src="/assets/Industries/supplychain/planning.png"
            alt="supplyChain Planning Dashboard"
            className="w-76 sm:w-110 xl:w-135 2xl:w-145 mx-auto"
          />
          <FeaturesList
            features={SupplyTransTrackingdata}
            iconAlign="horizontal"
          />
        </div>
        <ContactUsButton variant="hover">Track SCM Assets Now</ContactUsButton>
      </PageLayout>

      {/* SCM mobile/web application development */}
      <section className="bg-secondary py-4">
        <PageLayout className="text-center py-10 space-y-10">
          <Headline
            title="SCM Application Solutions"
            description="We develop advanced, feature-rich supply chain management web & mobile apps..."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <FeaturesList
              features={SupplyChainTransTracking}
              iconAlign="horizontal"
            />
            <img
              loading="lazy"
              src="/assets/Industries/supplychain/data.png"
              alt="supplyChain Planning Dashboard"
              className="w-145 xl:w-175 2xl:w-195 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">Get An SCM App</ContactUsButton>
        </PageLayout>
      </section>

      {/* Custom SCM solutions summary */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Get Custom Supply Chain Management (SCM) Software Solutions"
          description="U Tech’s custom supply chain management (SCM) software solutions offer..."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
          <FeaturesList center features={pharmacyFeaturesChain} grid />

          <img
            loading="lazy"
            src="/assets/Industries/supplychain/mobile.gif"
            alt="Portfolio"
            className="w-42 sm:w-52 xl:w-62 2xl:w-68 mx-auto"
          />
        </div>
        <ContactUsButton variant="hover">Get SCM Solutions</ContactUsButton>
      </PageLayout>

      {/* SCM software support services */}
      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-8">
          <Headline
            title="Supply Chain Management Software Support"
            description="U Tech’s supply chain management software experts are committed to..."
          />
          <FeaturesListOpposite features={aiDrivenCorrectionalSupplyChain} />
        </PageLayout>
      </section>

      {/* FAQ section */}
      <div className="py-10">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default SupplyChain;

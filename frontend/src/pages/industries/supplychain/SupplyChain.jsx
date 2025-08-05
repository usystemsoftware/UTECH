import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
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
        <FeaturesGrid
          leftFeatures={SupplyChainSoftwareLeftFeatures}
          rightFeatures={SupplyChainSoftwarerightFeatures}
          centerImage="/assets/industries/supplychain/supplychain.png"
          fadeUp={fadeUp}
          iconSize={52}
        />
      </PageLayout>

      {/* SCM software core functions section */}
      <section className="bg-secondary py-4">
        <PageLayout className="text-center py-10 space-y-10">
          <Headline
            title="Supply Chain Management (SCM) Software Development"
            description="We develop SCM software to enable inventory management, electronic data interchange (EDI), material requirements planning (MRP), order management systems (OMS), and more."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FeaturesList
              features={SupplyTransformationFeatures}
              fadeUp={fadeUp}
            />
            <FadeInWhenVisible className='hidden sm:block'>
              <img
                loading="lazy"
                src="/assets/industries/supplychain/distribution.gif"
                alt="Financial Planning Dashboard"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">Get SCM Solutions</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* AI-enabled SCM solutions */}
      <PageLayout className="text-center py-12 space-y-10">
        <Headline
          title="AI-Enabled Supply Chain Software Solutions"
          description="U Tech’s AI experts can create custom software solutions that leverage AI in supply chain and logistics..."
        />

        <FeaturesList features={gamingSupplyChain} grid3 />

        <FadeInWhenVisible>
          <Button variant="hover">GET AI ENABLED SCM SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* Inventory management software solutions */}
      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="SCM Inventory Management Software Solutions"
            description="We implement inventory management capabilities..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible className='hidden sm:block'>
              <img
                loading="lazy"
                src="/assets/industries/supplychain/weighbridg.png"
                alt="Financial Planning Dashboard"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList features={SupplyTransformations} fadeUp={fadeUp} />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">Manage Inventory Now</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* Shipping and logistics SCM solutions */}
      <PageLayout className="text-center py-16 space-y-10">
        <Headline
          title="SCM Shipping & Logistics Software Solutions"
          description="We deliver AI-driven shipping & logistics software solutions..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FeaturesList features={SupplyTransfoods} fadeUp={fadeUp} />
          <FadeInWhenVisible className='hidden sm:block'>
            <img
              loading="lazy"
              src="/assets/industries/supplychain/food.png"
              alt="Financial Planning Dashboard"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">Get Shipping Solutions</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* Mile delivery solutions section */}
      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-12">
          <Headline
            title="First, Middle & Last Mile Delivery Solutions"
            description="U Tech is at the forefront of AI-driven smart construction solutions..."
          />
          <div className="grid grid-row-1 sm:grid-row-3 gap-4">
            <FeaturesList features={gamingSupplychain} grid3 />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">
              Get AI Powered Construction Solutions
            </Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* Asset tracking using RFID and barcode */}
      <PageLayout className="text-center py-16 space-y-10">
        <Headline
          title="SCM Asset Tracking (RFID & Barcode) Software Solutions"
          description="We develop and integrate asset tracking software..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/supplychain/expert.png"
              alt="Financial Planning Dashboard"
              className="w-135 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <FeaturesList features={SupplyTransTracking} fadeUp={fadeUp} />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">Track SCM Assets Now</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* EDI software solutions */}
      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="Electronic Data Interchange (EDI) Software Development"
            description="Our engineers provide custom EDI platform integrations..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FeaturesList features={SupplyTransTracking} fadeUp={fadeUp} />
            <FadeInWhenVisible className="hidden sm:block">
              <img
                loading="lazy"
                src="/assets/industries/supplychain/interchange.png"
                alt="Financial Planning Dashboard"
                className="w-110 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">Track SCM Assets Now</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* MRP software solutions */}
      <PageLayout className="text-center py-16 space-y-10">
        <Headline
          title="Manufacturing Resource Planning (MRP) Software Development"
          description="We develop robust material resource planning (MRP) software..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/supplychain/planning.png"
              alt="supplyChain Planning Dashboard"
              className="w-110 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <FeaturesList features={SupplyTransTrackingdata} fadeUp={fadeUp} />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">Track SCM Assets Now</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* SCM mobile/web application development */}
      <section className="bg-secondary py-4">
        <PageLayout className="text-center py-10 space-y-10">
          <Headline
            title="SCM Application Solutions"
            description="We develop advanced, feature-rich supply chain management web & mobile apps..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <FeaturesList features={SupplyChainTransTracking} fadeUp={fadeUp} />
            <FadeInWhenVisible className='hidden sm:block'>
              <img
                loading="lazy"
                src="/assets/industries/supplychain/data.png"
                alt="supplyChain Planning Dashboard"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">Get An SCM App</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* Custom SCM solutions summary */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Get Custom Supply Chain Management (SCM) Software Solutions"
          description="U Tech’s custom supply chain management (SCM) software solutions offer..."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
          <FeaturesList
            fadeUp={fadeUp}
            features={pharmacyFeaturesChain}
            grid
          />

          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/supplychain/mobile.gif"
              alt="Portfolio"
              className="sm:w-58 w-36 mx-auto"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">Get SCM Solutions</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* SCM software support services */}
      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-8">
          <Headline
            title="Supply Chain Management Software Support"
            description="U Tech’s supply chain management software experts are committed to..."
          />
          <FeaturesList
            features={aiDrivenCorrectionalSupplyChain}
            fadeUp={fadeUp}
            grid
          />
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

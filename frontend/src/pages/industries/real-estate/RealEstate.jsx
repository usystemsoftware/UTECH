import { motion } from "framer-motion";
import FaqSection from "@/custom/FaqSection";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";

import {
  appDevFeatures,
  developeAppRealEstatePartner,
  leftFeatureIcons,
  realEstateFaqs,
  realEstateFeatures,
  realEstateServices,
  realEstateSolutions,
  rightFeatureIcons,
} from "./Data";
import IntigrateWith from "@/custom/IntigrateWith";

export const AppDevelopPartner = () => {
  return (
    <div className="flex items-center justify-center gap-12 flex-wrap mt-12">
      {developeAppRealEstatePartner?.map((option, idx) => (
        <motion.img
          loading="lazy"
          key={idx}
          src={option.logo}
          alt={`Logo ${option?.label}`}
          className="h-10 cursor-pointer hover:scale-120"
          variants={fadeUp}
          transition={{ delay: idx * 0.1 }}
        />
      ))}
    </div>
  );
};

const RealEstate = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="/banner/real-banner.jpg"
        title="REAL ESTATE SOFTWARE DEVELOPMENT"
        buttonText="GET REAL ESTATE SOFTWARE DEVELOPERS"
        buttonLink="/real-estate"
        imageFit="cover"
      />

      {/* Features Grid */}
      <PageLayout className="text-center py-16">
        <Headline
          title="Custom Banking Software Development"
          description="U Technology’s team of expert developers cater to the technical needs of the ever-evolving banking sector by offering high quality software solutions that transform your core environment to streamline banking & financial workflows."
        />
        <FeaturesGrid
          leftFeatures={leftFeatureIcons}
          rightFeatures={rightFeatureIcons}
          centerImage="/assets/industries/real-estate/solutions.png"
          fadeUp={fadeUp}
          iconSize={38}
        />
        <FadeInWhenVisible>
          <Button variant="hover" className="mt-8">
            CUSTOMIZE YOUR BANKING SOLUTION NOW
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      <section className="py-16 bg-secondary text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="We Have Experienced Real Estate Software Developers"
            description="We augment your current IT teams to revamp your real estate software
            solutions using our specialized, multi-purpose technologies and
            industry-specific experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-1 space-y-6 md:grid-cols-3 gap-6 items-center mt-8">
            <FeaturesList
              features={realEstateServices.slice(0, 2)}
              fadeUp={fadeUp}
              iconSize={40}
            />
            <FadeInWhenVisible delay={0.4}>
              <img
                loading="lazy"
                src="/assets/industries/real-estate/laptop.png"
                alt="AI-powered banking analytics"
                className="w-132 mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={realEstateServices.slice(2)}
              fadeUp={fadeUp}
              iconSize={40}
            />
          </div>
          <IntigrateWith
            title="Integrate with Leading Real Estate Platforms"
            description="Sync your real estate business data with top financial tools for better efficiency and accuracy."
          />
        </PageLayout>
      </section>

      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="AI-Powered Real Estate Solutions"
          description="Discover how advanced technologies like AI, IoT, AR/VR, and automation
        are transforming the real estate industry with intelligent, data-driven
        tools."
        />
        <FeaturesList features={realEstateSolutions} fadeUp={fadeUp} grid />
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">
            Get Real Estate Solutions integrated with AI
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      <section className="py-16 bg-secondary space-y-10 text-center">
        <Headline
          title="End-to-End Real Estate Software Development"
          description="We develop responsive web and mobile applications
            to help streamline real estate business operations, automate routine
            tasks, and ensure easy access to market information."
        />
        <PageLayout className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FadeInWhenVisible delay={0.4} className="sm:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/real-estate/mobile.png"
              alt="Mobile real estate App"
              className="h-96 mx-auto"
            />
          </FadeInWhenVisible>
          <div>
            <FeaturesList
              features={appDevFeatures}
              fadeUp={fadeUp}
              iconSize={36}
            />
            <AppDevelopPartner />
          </div>
        </PageLayout>
        <FadeInWhenVisible>
          <Button variant="hover">Get Your Custom App</Button>
        </FadeInWhenVisible>
      </section>

      {/* === Banking Software Support Section ==g= */}
      <PageLayout className="py-16 space-y-8 text-center">
        <Headline
          title="Banking Software Support"
          description="Banking and fiscal services have seen a significant transformation
          because of the use of new software solutions and apps. U Technology
          banking software support enhances efficiency, reliability, and
          regulatory compliance while improving the customer experience."
        />
        <FeaturesList features={realEstateFeatures} fadeUp={fadeUp} grid />
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">Get Real Estate Software Support</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* FAQ Section */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={realEstateFaqs} title="FAQ's" />
      </div>
    </div>
  );
};

export default RealEstate;

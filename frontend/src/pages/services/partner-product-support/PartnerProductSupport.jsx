import React from "react";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import { Headline, TypographyMuted, TypographyH5 } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import {
  PartnerProductSolutions,
  PartnerProduct,
  CustominApplicationgame,
} from "./Data";
const PartnerProductSupport = () => {
  return (
    <>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/partner.jpg"
        title="Partner Product Support Services"
        buttonText="Hire Software Support Experts"
        buttonLink="#"
        imageFit="cover"
      />
      <PageLayout className="text-center">
        <Headline title="Chetu's Strategic Partner Network" />
        {PartnerProductSolutions.map((item, index) => (
          <div key={index} className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 justify-center">
              {item.partners.map((partner, pIndex) => (
                <img
                  key={pIndex}
                  loading="lazy"
                  src={`/assets/services/partner-product/${partner}.png`}
                  alt={partner}
                  className="w-30 h-30 object-contain mx-auto"
                />
              ))}
            </div>
          </div>
        ))}
        <FadeInWhenVisible className="py-10">
          <Button variant="hover">Build Your Product Support Package</Button>
        </FadeInWhenVisible>
      </PageLayout>
      <PageLayout className="text-center space-y-10 py-6">
        <Headline
          title="Comprehensive Expertise & Technical Support"
          description="We have cultivated a vast ecosystem of strategic partnerships with industry and technology leaders including the ones displayed above. Through these partnerships, we offer full application support services for partner products, ensuring that you receive comprehensive assistance to get the most out of your software solutions."
        />
        <FeaturesList features={PartnerProduct} fadeUp={fadeUp} grid />
      </PageLayout>
      <section className="bg-secondary">
        <PageLayout className="text-center space-y-6 py-12">
          <Headline
            title="Partner Application Support Services"
            description="We provide comprehensive support services for partner applications, covering integral support service facets including partner product implementation, integration, migration, customization, maintenance & upgrades, and personalized training. We ensure that you get the most out of partner products with our scalable, cost-effective support solutions."
          />
          <FeaturesList
            features={CustominApplicationgame}
            fadeUp={fadeUp}
            grid3
          />
          <FadeInWhenVisible>
            <Button variant="hover">Get Partner Product Support</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>
    </>
  );
};

export default PartnerProductSupport;

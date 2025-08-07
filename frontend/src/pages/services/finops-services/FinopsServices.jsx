import React from "react";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import { Headline, TypographyH3, TypographyMuted } from "@/custom/Typography";
import { FeaturesList2 } from "@/components/FeaturesList2";
import {
  FinopServicesformation,
  FinopsFeatures,
  FinopsServicesAi,
  FinopsFeaturesTool,
  FinopServicesfedus,
} from "./Data";

const FinopsServices = () => {
  return (
    <>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/finops.jpg"
        title="FinOps Services"
        description=" We help teams take control of cloud costs by aligning finance and operations, improving transparency, and driving greater value from every resource."
        buttonText="SPEAK WITH A FINOPS EXPERT"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === Custom Software Solutions Overview Section === */}
      <PageLayout className="text-center py-10 space-y-10">
        <Headline
          title="Custom Software Solutions"
          description="Augment your existing development team to complete a big project or build a new software solution or application from scratch with the best custom software development company, U Tech.."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FeaturesList2 features={FinopServicesformation} fadeUp={fadeUp} />
          <FadeInWhenVisible className="hidden sm:block">
            <img
              loading="lazy"
              src="/assets/services/finops/models.png"
              alt="Finops Planning Dashboard"
              className="w-70"
            />
          </FadeInWhenVisible>
        </div>
      </PageLayout>

      {/* === FinOps Phases Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center py-10 space-y-10">
          <Headline
            title="FinOps Phases"
            description="U Tech engages in three core FinOps phases; Inform, Optimize, and Operate. We work to deliver exceptional client services while efficiently managing all FinOps phases to ensure reduced expenses and optimum workflow functionality."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible className="hidden sm:block">
              <img
                loading="lazy"
                src="/assets/services/finops/phases.png"
                alt="Custom Planning Dashboard"
              />
            </FadeInWhenVisible>
            <FeaturesList2 features={FinopsFeatures} fadeUp={fadeUp} />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">SPEAK WITH OUR FINOPS CONSULTANTS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === FinOps Service Offerings Overview Section === */}
      <PageLayout className="text-center space-y-6 py-12">
        <Headline
          title="A Breakdown of Offerings We Provide"
          description="U Tech offers a wide range of FinOps services, with individualized strategies tailored to exceed your goals. We focus on strategic consulting, performance tracking, cost optimization and sustainable FinOps practices to ensure full lifecycle performance with our support services.."
        />
        <FeaturesList features={FinopsServicesAi} fadeUp={fadeUp} grid3 />
        <FadeInWhenVisible>
          <Button variant="hover">GET FINOPS SERVICES</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === AI-Powered FinOps Tools Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center py-10 space-y-10">
          <Headline
            title="AI-Powered FinOps Tools"
            description="U Tech’s AI specialists continue enhancing this transformative resource to facilitate intelligent automation, streamline workflows, and empower end-users with data-driven insights for optimum cloud management."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FeaturesList2 features={FinopsFeaturesTool} fadeUp={fadeUp} />
            <FadeInWhenVisible className="hidden sm:block">
              <img
                loading="lazy"
                src="/assets/services/finops/tools.png"
                alt="Custom Planning Dashboard"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">GET AI-POWERED FINOPS CAPABILITIES</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Why Choose U Tech Section === */}
      <PageLayout className="text-center space-y-10">
        <Headline
          title="Why Choose U Tech for FinOps Service"
          description="U Tech’s certified FinOps practitioners create individualized hybrid and multi-cloud support strategies to deliver exceptional client services, optimized cloud-based workflows, and reduced expenses to enable greater business value and ROI."
        />
        <FeaturesList features={FinopServicesfedus} fadeUp={fadeUp} grid />
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">SPEAK WITH A FINOPS EXPERT</Button>
        </FadeInWhenVisible>
      </PageLayout>
    </>
  );
};

export default FinopsServices;

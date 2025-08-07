import React from "react";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import FaqSection from "@/custom/FaqSection";
import { Headline} from "@/custom/Typography";
import {
  TelecomCustom,
  CustomTransformationFeatures,
  TelecomCustomservices,
  CustomServicesgame,
  Telecommunicationfedus,
  CustomServiceAi,
  CustomTransformation,
  CustomDeveloper,
  ProgrammerCustomservices,
  faqs,
} from "./Data";
import { FeaturesList2 } from "@/components/FeaturesList2";
import { FeaturesList3 } from "@/components/FeaturesList3";

const CustomServices = () => {
  return (
    <>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/customservices.jpg"
        title="CUSTOM SOFTWARE DEVELOPMENT SERVICES"
        description="Transforming Industries with AI-Powered Custom Software Development Solutions"
        buttonText="GET CUSTOM SOFTWARE SOLUTIONS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === Overview + First FeatureList3 Pair (Migrations + Integration) === */}
      <PageLayout className="space-y-8 text-center py-10">
        <Headline
          title="Custom Software Development Company With Dedicated Developers Offering Vast Industry-Specific Experience"
          description="We provide world-class custom software development services for startups, small-to-midsize (SMB), and enterprise-size businesses. Our expertise also extends to providing dedicated software development support, ensuring optimal performance and long-term success for your projects."
        />

        {/* === Migration Solutions === */}
        <FeaturesList3
          features={TelecomCustom.slice(0, 5)}
          fadeUp={fadeUp}
          image="/assets/services/customservices/migrations.png"
          reverse
        />

        {/* === Integration Solutions === */}
        <FeaturesList3
          features={TelecomCustom.slice(0, 5)}
          fadeUp={fadeUp}
          image="/assets/services/customservices/integration.png"
        />

        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">
            HIRE APPLICATION SOFTWARE DEVELOPMENT SERVICES
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Product Engineering Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center py-10 space-y-10">
          <Headline
            title="Custom Software Solutions"
            description="Augment your existing development team to complete a big project or build a new software solution or application from scratch with the best custom software development company, U Tech.."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible className="hidden sm:block">
              <img
                loading="lazy"
                src="/assets/services/customservices/product.png"
                alt="Custom Planning Dashboard"
              />
            </FadeInWhenVisible>
            <FeaturesList2
              features={CustomTransformationFeatures}
              fadeUp={fadeUp}
            />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">GET CUSTOM SOFTWARE SERVICES</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Solution Showcase (with image) === */}
      <PageLayout className="space-y-8 text-center py-10">
        <FeaturesList2
          features={TelecomCustomservices.slice(0, 5)}
          fadeUp={fadeUp}
          image="/assets/services/customservices/solutions.png"
        />
      </PageLayout>

      {/* === Industry-Specific Software Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center space-y-6 py-12">
          <Headline
            title="Industry-Specific Software Solutions"
            description="Integrate scalable and customized industry-specific software with U Tech into workflows for industries such as healthcare, finance, and retail.."
          />
          <FeaturesList features={CustomServicesgame} fadeUp={fadeUp} grid3 />
          <FadeInWhenVisible>
            <Button variant="hover">Get Your Telecom Software Audit</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Software Support Services Section === */}
      <PageLayout className="text-center space-y-10">
        <Headline
          title="Software Development Support"
          description="Discover comprehensive software support services, including consulting, optimization, maintenance, and patch management to enhance system performance."
        />
        <FeaturesList features={Telecommunicationfedus} fadeUp={fadeUp} grid />
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">GET RELIABLE SOFTWARE SUPPORT</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === AI-Powered Custom Software Development Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center space-y-6 py-12">
          <Headline
            title="AI-Powered Custom Software Development Services"
            description="We are a software development services company that also offers AI-powered custom software development services that are designed to align perfectly with your unique business requirements. Maximize the potential of your projects with intelligent automation, data-driven insights, personalized user interactions, and more."
          />
          <FeaturesList features={CustomServiceAi} fadeUp={fadeUp} grid3 />
          <FadeInWhenVisible>
            <Button variant="hover">AI-POWERED CUSTOM SOFTWARE SERVICES</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Product Lifecycle Management (PLM) Section === */}
      <PageLayout className="text-center py-10 space-y-10">
        <Headline
          title="Product Lifecycle Management (PLM)"
          description="Our agile, end-to-end product lifecycle management (PLM) model covers everything from conceptualization, concurrent front-end & back-end coding, deployment, QA, and more.."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-15">
          <FadeInWhenVisible className="hidden sm:block">
            <img
              loading="lazy"
              src="/assets/services/customservices/management.png"
              alt="Custom Planning Dashboard"
            />
          </FadeInWhenVisible>
          <FeaturesList2 features={CustomTransformation} fadeUp={fadeUp} />
        </div>
      </PageLayout>

      {/* === On-Demand Developer Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center py-10 space-y-10 gap-15">
          <Headline
            title="We Have On-Demand Developers"
            description="We are proud to employ over 2,800 in-house developers with many years of combined software development experience in a wide array of industries."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible className="hidden sm:block">
              <img
                loading="lazy"
                src="/assets/services/customservices/migrations.png"
                alt="Custom Planning Dashboard"
              />
            </FadeInWhenVisible>
            <FeaturesList2 features={CustomDeveloper} fadeUp={fadeUp} />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">HIRE CUSTOM SOFTWARE DEVELOPERS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Final Expertise Highlights Section === */}
      <PageLayout className="space-y-8 text-center py-10">
        <FeaturesList3
          features={ProgrammerCustomservices.slice(0, 5)}
          fadeUp={fadeUp}
          image="/assets/services/customservices/expertise.png"
        />
      </PageLayout>

      {/* === FAQ SECTION === */}
      <div className="mb-8">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default CustomServices;

import { motion } from "framer-motion";
import FaqSection from "@/custom/FaqSection";
import { IconRenderer } from "@/custom/IconRenderer";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import CaseStudyCard from "@/components/CaseStudyCard";
import {
  TypographyH5,
  TypographyMuted,
  Headline,
  TypographyH3,
} from "@/custom/Typography";
import {
  LegalTransformationFeatures,
  LegalTransformation,
  legalFeatures,
  legalgSupportItems,
  LegalTransformationfedu,
  gamingLegal,
  legalgSupportIsecound,
  Legallogs,
} from "./Data";

const Legal = () => (
  <div>
    <HeroSection
      backgroundImage="/assets/industries/legal/business.jpg"
      title="LEGAL SOFTWARE DEVELOPMENT"
      buttonText="GET LEGAL SOFTWARE SOLUTIONS"
      buttonLink="/legal"
      imageFit="cover"
      overlayOpacity={0.2}
    />

    <PageLayout className="space-y-8">
      <Headline
        title="Hire Developers with Custom Legal Software Development Experience"
        description="Chetu, a legal software development company has extensive legal industry experience providing best-in-class Legal Software Development Services from the ground up and revamping existing solutions through custom-tailored integrations."
      />

      <section className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 w-full">
          <Headline
            title="Law Firm Management Software"
            description="We develop Law Firm Management Software that’s custom-tailored to suit the unique needs of legal practices, centralizing all matters and invoices, optimizing greater spend control, and empowering legal operations."
            className="mb-6"
          />
          <FeaturesList features={LegalTransformationFeatures} fadeUp={fadeUp} />
        </div>
        <FadeInWhenVisible>
          <img
            loading="lazy"
            src="/assets/industries/legal/phone.png"
            alt="Financial Planning Dashboard"
            className="w-60 max-w-full hidden md:block"
          />
        </FadeInWhenVisible>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-6">
        <FadeInWhenVisible>
          <img
            loading="lazy"
            src="/assets/industries/legal/software.png"
            alt="Financial Planning Dashboard"
            className="w-120 hidden md:block"
          />
        </FadeInWhenVisible>
        <div className="flex-1 w-full">
          <Headline
            title="Case & Matter Management Software Development"
            description="We develop feature-rich Case Management Software designed to centrally store case-related information, track client details, manage billing information, locate essential case notes, and schedule appointments."
            className="mb-6"
          />
          <FeaturesList features={LegalTransformation} fadeUp={fadeUp} />
        </div>
      </section>
    </PageLayout>

    <PageLayout className="space-y-8 mt-10">
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <FeaturesList features={legalFeatures} fadeUp={fadeUp} grid />
      </section>
    </PageLayout>

    <PageLayout className="py-12 space-y-6 text-center">
      <Headline
        title="AI-Powered Legal Software Development Services"
        description="Enhance legal workflows with Chetu’s AI-driven software, enhancing accuracy, automation, and compliance across processes."
      />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
        {legalgSupportItems?.map((item, index) => (
          <FadeInWhenVisible key={index} delay={index * 0.2}>
            <div
              className={`flex items-start gap-4 ${
                item.reverse
                  ? "lg:justify-end lg:text-right flex-row-reverse"
                  : ""
              }`}
            >
              <IconRenderer
                name={item.icon}
                size={40}
                className="text-primary flex-shrink-0"
              />
              <div>
                <TypographyH5>{item.title}</TypographyH5>
                <TypographyMuted>{item.description}</TypographyMuted>
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </section>
    </PageLayout>

    <PageLayout className="space-y-8">
      <Headline
        title="Legal Management Workflow Automation"
        description="We develop Legal Management Software that streamlines workflows through advanced automation, real-time integrations, full visibility & control, and comprehensive insights to increase legal productivity."
      />
      <section className="flex flex-col md:flex-row items-center gap-6">
        <FadeInWhenVisible>
          <img
            loading="lazy"
            src="/assets/industries/legal/automation.png"
            alt="Financial Planning Dashboard"
            className="w-60 max-w-full hidden md:block"
          />
        </FadeInWhenVisible>
        <div className="flex-1 w-full">
          <Headline
            title="Legal Management Workflow Automation"
            description="We develop Legal Management Software that streamlines workflows through advanced automation, real-time integrations, full visibility & control, and comprehensive insights to increase legal productivity."
            className="mb-6"
          />
          <FeaturesList features={LegalTransformationfedu} fadeUp={fadeUp} />
        </div>
      </section>
      <div className="flex justify-center">
        <FadeInWhenVisible>
          <Button variant="hover">HIRE LEGAL SOFTWARE DEVELOPERS</Button>
        </FadeInWhenVisible>
      </div>
    </PageLayout>

    <PageLayout className="py-8 text-center space-y-6">
      <Headline
        title="Custom Legal Management Software Solutions"
        description="We engineer custom-tailored Legal Management Software Solutions to help legal practices automate repetitive tasks, streamline workflows, and store legal documentation in an all-in-one platform."
      />

      <FadeInWhenVisible className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeaturesList features={gamingLegal.slice(0, 2)} />
        <FeaturesList features={gamingLegal.slice(2, 4)} />
        <FeaturesList features={gamingLegal.slice(4, 6)} />
      </FadeInWhenVisible>

      <div className="flex justify-center">
        <FadeInWhenVisible>
          <Button variant="hover">Get Legal Software Solutions</Button>
        </FadeInWhenVisible>
      </div>
    </PageLayout>

    <PageLayout className="py-12 space-y-6 text-center">
      <Headline
        title="Specialized Legal Practice Software Solutions"
        description="Chetu designs and deploys customized legal practice software to augment research, streamline workflow, and enable data-driven decisions with powerful analytics. This intuitive software addresses the unique needs of various legal fields, such as immigration law, estate law, family law, and personal injury."
      />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
        {legalgSupportIsecound?.map((item, index) => (
          <FadeInWhenVisible key={index} delay={index * 0.2}>
            <div
              className={`flex items-start gap-4 ${
                item.reverse
                  ? "lg:justify-end lg:text-right flex-row-reverse"
                  : ""
              }`}
            >
              <IconRenderer
                name={item.icon}
                size={40}
                className="text-primary flex-shrink-0"
              />
              <div>
                <TypographyH5>{item.title}</TypographyH5>
                <TypographyMuted>{item.description}</TypographyMuted>
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </section>
      <div className="flex justify-center mt-6">
        <FadeInWhenVisible>
          <Button variant="hover">
            Get Started with Custom Legal Software
          </Button>
        </FadeInWhenVisible>
      </div>
    </PageLayout>

    {/* === THIRD-PARTY API FUNCTIONALITY SECTION === */}
    <PageLayout className="py-12 text-center space-y-6">
      <Headline
        title="Legal Management Software Integrations"
        description="We integrate third-party software APIs with existing back-office systems to automate processes, enhance document management, and save time."
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
        {Legallogs.map((feature, index) => (
          <div key={index}>
            <TypographyH3>{feature?.title}</TypographyH3>
            <TypographyMuted>{feature?.description}</TypographyMuted>
            <div className="flex items-center sm:gap-10 gap-6 mt-6 flex-wrap">
              {feature.logos.map((logo, idx) => (
                <img
                  key={idx}
                  loading="lazy"
                  src={`/assets/industries/legal/images/${logo}.png`}
                  className="h-8 cursor-pointer hover:scale-105 transition-transform"
                  alt={logo}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="flex justify-center">
        <FadeInWhenVisible>
          <Button variant="hover">GET YOUR LEGAL SOFTWARE INTEGRATION</Button>
        </FadeInWhenVisible>
      </div>
    </PageLayout>
  </div>
);

export default Legal;
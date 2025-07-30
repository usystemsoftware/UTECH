import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
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
  <>
    <HeroSection
      backgroundImage="/assets/industries/legal/business.jpg"
      title="LEGAL SOFTWARE DEVELOPMENT"
      buttonText="GET LEGAL SOFTWARE SOLUTIONS"
      buttonLink="/legal"
      imageFit="cover"
      overlayOpacity={0.2}
    />

    <PageLayout className="space-y-8 py-12">
      <Headline
        title="Hire Developers with Custom Legal Software Development Experience"
        description="U Technology's, a legal software development company has extensive legal industry experience providing best-in-class Legal Software Development Services from the ground up and revamping existing solutions through custom-tailored integrations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <TypographyH5>Law Firm Management Software</TypographyH5>
          <TypographyMuted>
            We develop Law Firm Management Software that’s custom-tailored to
            suit the unique needs of legal practices, centralizing all matters
            and invoices, optimizing greater spend control, and empowering legal
            operations.
          </TypographyMuted>
          <FeaturesList
            features={LegalTransformationFeatures}
            fadeUp={fadeUp}
            grid
          />
        </div>
        <FadeInWhenVisible>
          <img
            loading="lazy"
            src="/assets/industries/legal/phone.png"
            alt="Financial Planning Dashboard"
            className="w-48 mx-auto hidden md:block"
          />
        </FadeInWhenVisible>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-6">
        <FadeInWhenVisible>
          <img
            loading="lazy"
            src="/assets/industries/legal/software.png"
            alt="Financial Planning Dashboard"
            className="w-145 hidden md:block"
          />
        </FadeInWhenVisible>
        <div className="space-y-4 mb-10">
          <TypographyH5>
            Case & Matter Management Software Development
          </TypographyH5>
          <TypographyMuted>
            We develop feature-rich Case Management Software designed to
            centrally store case-related information, track client details,
            manage billing information, locate essential case notes, and
            schedule appointments.
          </TypographyMuted>
          <FeaturesList features={LegalTransformation} fadeUp={fadeUp} grid />
        </div>
      </div>
      <FeaturesList features={legalFeatures} fadeUp={fadeUp} grid />
    </PageLayout>

    <section className="py-16 bg-secondary">
      <PageLayout className="space-y-6 text-center">
        <Headline
          title="AI-Powered Legal Software Development Services"
          description="Enhance legal workflows with U Technology's’s AI-driven software, enhancing accuracy, automation, and compliance across processes."
        />
        <FeaturesList features={legalgSupportItems} fadeUp={fadeUp} grid />
      </PageLayout>
    </section>

    <PageLayout className="space-y-8 py-12 text-center">
      <Headline
        title="Legal Management Workflow Automation"
        description="We develop Legal Management Software that streamlines workflows through advanced automation, real-time integrations, full visibility & control, and comprehensive insights to increase legal productivity."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-6">
        <FadeInWhenVisible>
          <img
            loading="lazy"
            src="/assets/industries/legal/automation.png"
            alt="Financial Planning Dashboard"
            className="w-60 mx-auto hidden sm:block"
          />
        </FadeInWhenVisible>
        <div className="text-start space-y-4">
          <TypographyH5>Legal Management Workflow Automation</TypographyH5>
          <TypographyMuted>
            We develop Legal Management Software that streamlines workflows
            through advanced automation, real-time integrations, full visibility
            & control, and comprehensive insights to increase legal
            productivity.
          </TypographyMuted>
          <FeaturesList features={LegalTransformationfedu} fadeUp={fadeUp} />
        </div>
      </div>
      <FadeInWhenVisible>
        <Button variant="hover">HIRE LEGAL SOFTWARE DEVELOPERS</Button>
      </FadeInWhenVisible>
    </PageLayout>

    <section className="bg-secondary py-12">
      <PageLayout className="text-center space-y-6">
        <Headline
          title="Custom Legal Management Software Solutions"
          description="We engineer custom-tailored Legal Management Software Solutions to help legal practices automate repetitive tasks, streamline workflows, and store legal documentation in an all-in-one platform."
        />

        <FadeInWhenVisible className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeaturesList features={gamingLegal.slice(0, 2)} />
          <FeaturesList features={gamingLegal.slice(2, 4)} />
          <FeaturesList features={gamingLegal.slice(4, 6)} />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Button variant="hover">Get Legal Software Solutions</Button>
        </FadeInWhenVisible>
      </PageLayout>
    </section>

    <PageLayout className="py-12 space-y-10 text-center">
      <Headline
        title="Specialized Legal Practice Software Solutions"
        description="U Technology's designs and deploys customized legal practice software to augment research, streamline workflow, and enable data-driven decisions with powerful analytics. This intuitive software addresses the unique needs of various legal fields, such as immigration law, estate law, family law, and personal injury."
      />

      <FeaturesList features={legalgSupportIsecound} grid />

      <FadeInWhenVisible>
        <Button variant="hover">Get Started with Custom Legal Software</Button>
      </FadeInWhenVisible>
    </PageLayout>

    {/* === THIRD-PARTY API FUNCTIONALITY SECTION === */}
    <PageLayout className="py-12 text-center space-y-10">
      <Headline
        title="Legal Management Software Integrations"
        description="We integrate third-party software APIs with existing back-office systems to automate processes, enhance document management, and save time."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mt-10">
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
      </div>

      <FadeInWhenVisible>
        <Button variant="hover">GET YOUR LEGAL SOFTWARE INTEGRATION</Button>
      </FadeInWhenVisible>
    </PageLayout>
  </>
);

export default Legal;

import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/custom/ContactUsButton";
import ImageNearScreen from "@/custom/ImageNearScreen";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
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
      backgroundImage="/banner/legel-banner.jpg"
      title="LEGAL SOFTWARE DEVELOPMENT"
      buttonText="GET LEGAL SOFTWARE SOLUTIONS"
      buttonLink="/legal"
      imageFit="cover"
    />

    <section className="space-y-8 py-16">
      <Headline
        title="Hire Developers with Custom Legal Software Development Experience"
        description="U Technology's, a legal software development company has extensive legal industry experience providing best-in-class Legal Software Development Services from the ground up and revamping existing solutions through custom-tailored integrations."
      />

      <PageLayout className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div className="space-y-4 md:text-start text-center">
          <TypographyH5>Law Firm Management Software</TypographyH5>
          <TypographyMuted>
            We develop Law Firm Management Software that’s custom-tailored to
            suit the unique needs of legal practices, centralizing all matters
            and invoices, optimizing greater spend control, and empowering legal
            operations.
          </TypographyMuted>

          <FeaturesList
            features={LegalTransformationFeatures}
            grid
            center
          />
        </div>
        <FadeInWhenVisible className="hidden md:block">
          <img
            loading="lazy"
            src="/assets/industries/legal/phone.png"
            alt="Financial Planning Dashboard"
            className="w-56 mx-auto"
          />
        </FadeInWhenVisible>
      </PageLayout>

      <PageLayout className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <FadeInWhenVisible className="md:block hidden">
          <img
            loading="lazy"
            src="/assets/industries/legal/software.png"
            alt="Financial Planning Dashboard"
            className="w-155"
          />
        </FadeInWhenVisible>
        <div className="space-y-4 md:text-start text-center">
          <TypographyH5>
            Case & Matter Management Software Development
          </TypographyH5>
          <TypographyMuted>
            We develop feature-rich Case Management Software designed to
            centrally store case-related information, track client details,
            manage billing information, locate essential case notes, and
            schedule appointments.
          </TypographyMuted>
          <FeaturesList
            features={LegalTransformation}
            grid
            center
          />
        </div>
      </PageLayout>

      <ImageNearScreen
        features={legalFeatures}
        src="/assets/industries/legal/legel.png"
        imageAlign="right"
        imgClass="w-115"
      />
    </section>

    <section className="py-16 bg-secondary">
      <PageLayout className="space-y-6 text-center">
        <Headline
          title="AI-Powered Legal Software Development Services"
          description="Enhance legal workflows with U Technology's’s AI-driven software, enhancing accuracy, automation, and compliance across processes."
        />
        <FeaturesListOpposite features={legalgSupportItems} grid />
      </PageLayout>
    </section>

    <PageLayout className="space-y-8 py-12 text-center">
      <Headline
        title="Legal Management Workflow Automation"
        description="We develop Legal Management Software that streamlines workflows through advanced automation, real-time integrations, full visibility & control, and comprehensive insights to increase legal productivity."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
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
          <FeaturesList features={LegalTransformationfedu} iconAlign="horizontal" />
        </div>
      </div>
      <ContactUsButton variant="hover">HIRE LEGAL SOFTWARE DEVELOPERS</ContactUsButton>
    </PageLayout>

    <section className="bg-secondary py-12">
      <PageLayout className="text-center space-y-6">
        <Headline
          title="Custom Legal Management Software Solutions"
          description="We engineer custom-tailored Legal Management Software Solutions to help legal practices automate repetitive tasks, streamline workflows, and store legal documentation in an all-in-one platform."
        />

        <FeaturesList
          features={gamingLegal}
          grid3
          center
        />

        <ContactUsButton variant="hover">Get Legal Software Solutions</ContactUsButton>
      </PageLayout>
    </section>

    <PageLayout className="py-12 space-y-10 text-center">
      <Headline
        title="Specialized Legal Practice Software Solutions"
        description="U Technology's designs and deploys customized legal practice software to augment research, streamline workflow, and enable data-driven decisions with powerful analytics. This intuitive software addresses the unique needs of various legal fields, such as immigration law, estate law, family law, and personal injury."
      />

      <FeaturesListOpposite
        features={legalgSupportIsecound}
      />

      <ContactUsButton variant="hover">Get Started with Custom Legal Software</ContactUsButton>
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
      <ContactUsButton variant="hover">GET YOUR LEGAL SOFTWARE INTEGRATION</ContactUsButton>
    </PageLayout>
  </>
);

export default Legal;

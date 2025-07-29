import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList } from "@/components/FeaturesList";
import HeroSection from "@/components/HeroSection";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import {
  TypographyMuted,
  Headline,
  TypographyH5,
  TypographySmall,
} from "@/custom/Typography";
import { Check } from "lucide-react";

import {
  aiPoweredELearningSolutions,
  customELearningSolutions,
  elearningFeatures,
  elearningPlatformFeatures,
  elearningSupportServices,
  faqs,
  learningManagementSolutions,
  lmsSolutions,
  sisFeatures,
  sisSolutions,
  trainingSolutionsFeatures,
  webBasedTrainingFeatures,
} from "./Data";

export default function ELearningEducation() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/assets/industries/e-learning-education/hero.avif"
        title="eLEARNING SOFTWARE DEVELOPMENT SERVICES"
        description="Transforming Education with E-Learning Software from a Leading eLearning Software Development Company"
        buttonText="GET eLEARNING SOFTWARE SOLUTIONS"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.6}
      />

      {/* Personalized LMS Software Features */}
      <PageLayout className="py-12">
        <Headline
          title="Personalized eLearning Software Development Services"
          description="U Tech’s custom e-learning software developers create solutions that enable higher education establishments, colleges/universities, primary schools, trade schools, high schools, enterprise-level corporations, and SMBs."
        />
        <FeaturesGrid
          leftFeatures={learningManagementSolutions.slice(0, 2)}
          rightFeatures={learningManagementSolutions.slice(2, 4)}
          centerImage="/assets/industries/e-learning-education/personalized-e-learning-software-development-solutions-desktop-combo-elearning-software.png"
          fadeUp={fadeUp}
          iconSize={30}
        />
      </PageLayout>

      {/* AI-Powered eLearning Solutions */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-16 text-center">
          <Headline
            title="Custom AI-Powered eLearning Solutions"
            description="With eLearning representing an interesting facet of modern education, Artificial Intelligence represents a revolutionary path to make the learning experience more engaging and fruitful for learners!"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <FeaturesList
              features={aiPoweredELearningSolutions.slice(0, 2)}
              fadeUp={fadeUp}
            />
            <FeaturesList
              features={aiPoweredELearningSolutions.slice(2, 4)}
              fadeUp={fadeUp}
            />
            <FeaturesList
              features={aiPoweredELearningSolutions.slice(4, 6)}
              fadeUp={fadeUp}
            />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">GET A-POWERED eLEARNING TOOLS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* Custom LMS Software Development */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="We Have Experienced Jail Management Software Developers "
          description="Our industry-experienced e-learning software developers create custom LMS software solutions to manage, track, and achieve your corporate learning goals."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-12">
          {/* Image */}
          <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/e-learning-education/medical-video-conferencing-software.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>

          {/* Feature List */}
          <div className="text-start">
            <TypographyH5>Custom LMS Software Solutions</TypographyH5>
            <TypographyMuted className="mb-4">
              Our development team delivers custom LMS development, integration,
              and implementation for academic establishments ranging from public
              K-12 to university-level, and everything in between.
            </TypographyMuted>
            <FeaturesList fadeUp={fadeUp} features={customELearningSolutions} />
          </div>
        </div>
      </PageLayout>

      {/* LMS Solutions Features */}
      <section className="bg-secondary py-10">
        <PageLayout className="text-center space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <FeaturesList features={lmsSolutions.slice(0, 3)} fadeUp={fadeUp} />
            <FeaturesList features={lmsSolutions.slice(3, 6)} fadeUp={fadeUp} />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">HIRE LMS DEVELOPERS</Button>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.5} className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/e-learning-education/lms-software--development-dashboard-800-width-files-assignment.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* Content Authoring Solutions */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Customized Content Authoring Solutions"
          description="We develop custom-tailored content authoring software solutions for easy content generation, branding, sharing, hosting, publishing, and authoring collaboration."
        />

        {/* First Set */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-12">
          <div className="text-start">
            <TypographyH5>Content Authoring Software Development</TypographyH5>
            <TypographyMuted className="mb-8">
              We develop responsive web and mobile applications to help
              streamline real estate business operations, automate routine
              tasks, and ensure easy access to market information.
            </TypographyMuted>
            <FeaturesList
              fadeUp={fadeUp}
              features={elearningFeatures.slice(0, 2)}
            />
          </div>
          <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/e-learning-education/get-lms-solutions-mobile-ai2.png"
              alt="Portfolio"
              className="w-48 mx-auto"
            />
          </FadeInWhenVisible>
        </div>

        {/* Second Set */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center md:gap-12">
          <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/e-learning-education/gamification-of-content.png"
              alt="Portfolio"
              className="w-48 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList
            fadeUp={fadeUp}
            features={elearningFeatures.slice(2, 4)}
          />
        </div>

        <FadeInWhenVisible>
          <Button variant="hover">Get Content Authoring Solutions</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* SIS Development Section */}
      <section className="py-16">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Student Information System (SIS) Solutions"
            description="Our knowledgeable e-learning software developers build SISs and perform seamless SIS integrations that enable bilateral communication & interoperability."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center md:gap-12">
            <FadeInWhenVisible delay={0.5} className="sm:block hidden">
              <img
                loading="lazy"
                src="/assets/industries/e-learning-education/personalized-student-information-system-sis-solutions.png"
                alt="Portfolio"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
            <div className="text-start">
              <TypographyH5>
                Custom Student Information System (SIS) Development
              </TypographyH5>
              <TypographyMuted className="mb-8">
                We design custom SIS solutions with built-in functions that
                enable full control and visibility over scheduling, attendance
                tracking, course registration, academic grade results,
                transcripts, and communications.
              </TypographyMuted>
              <FeaturesList fadeUp={fadeUp} features={sisFeatures} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeaturesList
                fadeUp={fadeUp}
                features={sisSolutions.slice(0, 2)}
              />
              <FeaturesList
                fadeUp={fadeUp}
                features={sisSolutions.slice(2, 4)}
              />
            </div>
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/industries/e-learning-education/laptop-01.png"
                alt="Portfolio"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
          </div>

          <FadeInWhenVisible>
            <Button variant="hover">GET SIS SOFTWARE</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* WBT Section */}
      <PageLayout className="space-y-8 py-10 text-center">
        <Headline
          title="Customized Web-Based Training (WBT) Software Development"
          description="We create custom-tailored web-based training (WBT) systems that give businesses, academic institutions, and other organizations a chance to improve job performances."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center md:gap-12">
          <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/e-learning-education/lectora-software-development-phone.png"
              alt="Portfolio"
              className="w-48 mx-auto"
            />
          </FadeInWhenVisible>
          <div className="text-start">
            <TypographyH5>
              Web-Based Training (WBT) Software Solutions
            </TypographyH5>
            <TypographyMuted className="mb-8">
              U Tech delivers highly advanced and sophisticated WBT systems for
              academic institutions, enterprise-level corporations, and
              small-to-midsize businesses to conveniently, cost-effectively, and
              flexibly train employees.
            </TypographyMuted>
            <FeaturesList
              fadeUp={fadeUp}
              features={trainingSolutionsFeatures}
            />
          </div>
        </div>
      </PageLayout>

      {/* WBT Features */}
      <section className="bg-secondary py-8">
        <PageLayout className="space-y-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeaturesList
                fadeUp={fadeUp}
                features={webBasedTrainingFeatures.slice(0, 2)}
              />
              <FeaturesList
                fadeUp={fadeUp}
                features={webBasedTrainingFeatures.slice(2, 4)}
              />
            </div>
            <FadeInWhenVisible className="sm:block hidden">
              <img
                loading="lazy"
                src="/assets/industries/e-learning-education/credentials-&-digital-badges1.png"
                alt="Mobile Analytics App"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">GET WEB BASED TRAINING SOFTWARE</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* eLearning Support Services */}
      <PageLayout className="text-center py-8 space-y-8">
        <Headline
          title="eLearning Software Support Services"
          description="Our support services team provides responsive around-the-clock eLearning software support. We troubleshoot issues and carefully monitor the performance of all e-learning resources to eliminate latency and costly workflow interruption and ensure high-performing education materials that are SCORM compliant."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <FeaturesList
            features={elearningSupportServices.slice(0, 3)}
            fadeUp={fadeUp}
          />
          <FeaturesList
            features={elearningSupportServices.slice(3, 6)}
            fadeUp={fadeUp}
          />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">HIRE eLEARNING DEVELOPERS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* Enterprise LMS Platform Features */}
      <section className="bg-secondary py-10">
        <PageLayout className=" space-y-8">
          <Headline
            title="Enterprise Learning Management Software"
            description="We also create corporate LMS software tailored for enterprises, offering features like employee training automation. Here are additional features provided below."
          />
          <div className="grid sm:grid-cols-2 gap-8 grid-cols-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                {elearningPlatformFeatures?.slice(0, 8).map((item, index) => (
                  <TypographySmall
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <span>
                      <Check size={14} className="text-primary" />
                    </span>
                    {item}
                  </TypographySmall>
                ))}
              </div>
              <div className="space-y-4">
                {elearningPlatformFeatures?.slice(8, 16).map((item, index) => (
                  <TypographySmall
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <span>
                      <Check size={14} className="text-primary" />
                    </span>
                    {item}
                  </TypographySmall>
                ))}
              </div>
            </div>

            <FadeInWhenVisible className="sm:block hidden">
              <img
                loading="lazy"
                src="/assets/industries/e-learning-education/enterprise-learning-management-software.jpg"
                alt="Mobile Analytics App"
                className="w-96 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
        </PageLayout>
      </section>

      {/* FAQ Section */}
      <div className="py-10">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
}

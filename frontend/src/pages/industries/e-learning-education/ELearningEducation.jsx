import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import HeroSection from "@/components/HeroSection";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import ContactUsButton from "@/custom/ContactUsButton";
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
        backgroundImage="/banner/e-learning-banner.jpg"
        title="eLEARNING SOFTWARE DEVELOPMENT SERVICES"
        description="Transforming Education with E-Learning Software from a Leading eLearning Software Development Company"
        buttonText="GET eLEARNING SOFTWARE SOLUTIONS"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.1}
      />

      {/* Personalized LMS Software Features */}
      <PageLayout className="py-12">
        <Headline
          title="Personalized eLearning Software Development Services"
          description="U Tech’s custom e-learning software developers create solutions that enable higher education establishments, colleges/universities, primary schools, trade schools, high schools, enterprise-level corporations, and SMBs."
        />
        <FeaturesGridnew
          leftFeatures={learningManagementSolutions.slice(0, 2)}
          rightFeatures={learningManagementSolutions.slice(2, 4)}
          centerImage="/assets/Industries/e-learning-education/personalized-e-learning-software-development-solutions-desktop-combo-elearning-software.png"
        />
      </PageLayout>

      {/* AI-Powered eLearning Solutions */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-16 text-center">
          <Headline
            title="Custom AI-Powered eLearning Solutions"
            description="With eLearning representing an interesting facet of modern education, Artificial Intelligence represents a revolutionary path to make the learning experience more engaging and fruitful for learners!"
          />
          <FeaturesList features={aiPoweredELearningSolutions} grid3 center />
          <ContactUsButton variant="hover">
            GET A-POWERED eLEARNING TOOLS
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Custom LMS Software Development */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="We Have Experienced Jail Management Software Developers "
          description="Our industry-experienced e-learning software developers create custom LMS software solutions to manage, track, and achieve your corporate learning goals."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Image */}
          <img
            loading="lazy"
            src="/assets/Industries/e-learning-education/medical-video-conferencing-software.png"
            alt="Portfolio"
            className="w-135 xl:w-145 2xl:w-165 mx-auto"
          />

          {/* Feature List */}
          <div className="text-start">
            <TypographyH5 className="font-extrabold">
              Custom LMS Software Solutions
            </TypographyH5>
            <TypographyMuted className="mb-8">
              Our development team delivers custom LMS development, integration,
              and implementation for academic establishments ranging from public
              K-12 to university-level, and everything in between.
            </TypographyMuted>
            <FeaturesList
              features={customELearningSolutions}
              iconAlign="horizontal"
            />
          </div>
        </div>
      </PageLayout>

      {/* LMS Solutions Features */}
      <section className="bg-secondary pt-10">
        <PageLayout className="text-center space-y-12">
          <FeaturesListOpposite features={lmsSolutions} />

          <ContactUsButton variant="hover">HIRE LMS DEVELOPERS</ContactUsButton>
        </PageLayout>
      </section>

      {/* Content Authoring Solutions */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Customized Content Authoring Solutions"
          description="We develop custom-tailored content authoring software solutions for easy content generation, branding, sharing, hosting, publishing, and authoring collaboration."
        />

        {/* First Set */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          <div className="text-start order-2 md:order-1">
            <TypographyH5 className="font-extrabold">
              Content Authoring Software Development
            </TypographyH5>
            <TypographyMuted className="mb-8">
              We develop responsive web and mobile applications to help
              streamline real estate business operations, automate routine
              tasks, and ensure easy access to market information.
            </TypographyMuted>
            <FeaturesList
              features={elearningFeatures.slice(0, 2)}
              iconAlign="horizontal"
            />
          </div>
          <img
            loading="lazy"
            src="/assets/Industries/e-learning-education/get-lms-solutions-mobile-ai2.png"
            alt="Portfolio"
            className="w-42 sm:w-52 xl:w-56 2xl:w-62 mx-auto order-1 md:order-2"
          />
        </div>

        {/* Second Set */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 ">
          <img
            loading="lazy"
            src="/assets/Industries/e-learning-education/gamification-of-content.png"
            alt="Portfolio"
            className="w-42 sm:w-52 xl:w-56 2xl:w-62 mx-auto"
          />
          <FeaturesList
            features={elearningFeatures.slice(2, 4)}
            iconAlign="horizontal"
          />
        </div>

        <ContactUsButton variant="hover">
          Get Content Authoring Solutions
        </ContactUsButton>
      </PageLayout>

      {/* SIS Development Section */}
      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Student Information System (SIS) Solutions"
            description="Our knowledgeable e-learning software developers build SISs and perform seamless SIS integrations that enable bilateral communication & interoperability."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-12">
            <img
              loading="lazy"
              src="/assets/Industries/e-learning-education/personalized-student-information-system-sis-solutions.png"
              alt="Portfolio"
              className="w-135 xl:w-145 2xl:w-150 mx-auto"
            />
            <div className="text-start">
              <TypographyH5 className="font-extrabold">
                Custom Student Information System (SIS) Development
              </TypographyH5>
              <TypographyMuted className="mb-8">
                We design custom SIS solutions with built-in functions that
                enable full control and visibility over scheduling, attendance
                tracking, course registration, academic grade results,
                transcripts, and communications.
              </TypographyMuted>
              <FeaturesList features={sisFeatures} iconAlign="horizontal" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <FeaturesList features={sisSolutions} grid center />
            <img
              loading="lazy"
              src="/assets/Industries/e-learning-education/laptop-01.png"
              alt="Portfolio"
              className="w-135 xl:w-145 2xl:w-150 mx-auto"
            />
          </div>

          <ContactUsButton variant="hover">GET SIS SOFTWARE</ContactUsButton>
        </PageLayout>
      </section>

      {/* WBT Section */}
      <PageLayout className="space-y-8 py-10 text-center">
        <Headline
          title="Customized Web-Based Training (WBT) Software Development"
          description="We create custom-tailored web-based training (WBT) systems that give businesses, academic institutions, and other organizations a chance to improve job performances."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets/Industries/e-learning-education/lectora-software-development-phone.png"
            alt="Portfolio"
            className="lg:w-56 w-42 sm:w-54 mx-auto"
          />
          <div className="text-start">
            <TypographyH5 className="font-extrabold">
              Web-Based Training (WBT) Software Solutions
            </TypographyH5>
            <TypographyMuted className="mb-8">
              U Tech delivers highly advanced and sophisticated WBT systems for
              academic institutions, enterprise-level corporations, and
              small-to-midsize businesses to conveniently, cost-effectively, and
              flexibly train employees.
            </TypographyMuted>
            <FeaturesList
              features={trainingSolutionsFeatures}
              iconAlign="horizontal"
            />
          </div>
        </div>
      </PageLayout>

      {/* WBT Features */}
      <section className="bg-secondary py-8">
        <PageLayout className="space-y-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="order-2 md:order-1">
              <FeaturesList
                features={webBasedTrainingFeatures}
                iconAlign="horizontal"
              />
            </div>
            <img
              loading="lazy"
              src="/assets/Industries/e-learning-education/credentials-&-digital-badges1.png"
              alt="Mobile Analytics App"
              className="w-135 xl:w-145 2xl:w-150 mx-auto order-1 md:order-2"
            />
          </div>
          <ContactUsButton variant="hover">
            GET WEB BASED TRAINING SOFTWARE
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* eLearning Support Services */}
      <PageLayout className="text-center py-8 space-y-8">
        <Headline
          title="eLearning Software Support Services"
          description="Our support services team provides responsive around-the-clock eLearning software support. We troubleshoot issues and carefully monitor the performance of all e-learning resources to eliminate latency and costly workflow interruption and ensure high-performing education materials that are SCORM compliant."
        />
        <FeaturesListOpposite features={elearningSupportServices} grid />
        <ContactUsButton variant="hover">
          HIRE eLEARNING DEVELOPERS
        </ContactUsButton>
      </PageLayout>

      {/* Enterprise LMS Platform Features */}
      <section className="bg-secondary py-10">
        <PageLayout className=" space-y-8">
          <Headline
            title="Enterprise Learning Management Software"
            description="We also create corporate LMS software tailored for enterprises, offering features like employee training automation. Here are additional features provided below."
          />
          <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
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

            <img
              loading="lazy"
              src="/assets/Industries/e-learning-education/enterprise-learning-management-software.jpg"
              alt="Mobile Analytics App"
              className="w-96 xl:w-145 2xl:w-150 mx-auto"
            />
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

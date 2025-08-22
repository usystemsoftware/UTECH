import { motion } from "framer-motion";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/custom/ContactUsButton";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import VideoPoster from "@/custom/VideoPoster";
import { Headline, TypographyH5, TypographyMuted } from "@/custom/Typography";

import {
  appDevFeatures,
  developeAppRealEstatePartner,
  leftFeatureIcons,
  realEstateFaqs,
  propertyManagementSolutions,
  realEstateServices,
  realEstateSolutions,
  rightFeatureIcons,
  realEstateITSolutions,
  idxSolutions,
  features,
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

        <FeaturesGridnew
          leftFeatures={leftFeatureIcons}
          rightFeatures={rightFeatureIcons}
          centerImage="/assets/industries/real-estate/solutions.png"
        />

        <ContactUsButton variant="hover" className="mt-8">
          CUSTOMIZE YOUR BANKING SOLUTION NOW
        </ContactUsButton>
      </PageLayout>

      <section className="relative w-full overflow-hidden">
        <VideoPoster
          features={features}
          title="Real Estate Is Being Revolutionized! Discover the New Tech You Can’t Ignore"
        />
      </section>

      <section className="py-16 bg-secondary text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="We Have Experienced Real Estate Software Developers"
            description="We augment your current IT teams to revamp your real estate software
            solutions using our specialized, multi-purpose technologies and
            industry-specific experience."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 gap-6 items-center">
            <img
              loading="lazy"
              src="/assets/industries/real-estate/laptop.png"
              alt="AI-powered banking analytics"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList
              features={realEstateServices}
              iconAlign="horizontal"
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
        <FeaturesListOpposite features={realEstateSolutions} />
        <ContactUsButton variant="hover">
          Get Real Estate Solutions integrated with AI
        </ContactUsButton>
      </PageLayout>

      <section className="py-16 bg-secondary space-y-10 text-center">
        <Headline
          title="End-to-End Real Estate Software Development"
          description="We develop responsive web and mobile applications
            to help streamline real estate business operations, automate routine
            tasks, and ensure easy access to market information."
        />
        <PageLayout className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets/industries/real-estate/mobile.png"
            alt="Mobile real estate App"
            className="w-42 sm:w-52 xl:w-62 2xl:w-66 mx-auto"
          />
          <div>
            <FeaturesList features={appDevFeatures} iconAlign="horizontal" />
            <AppDevelopPartner />
          </div>
        </PageLayout>
        <ContactUsButton variant="hover">Get Your Custom App</ContactUsButton>
      </section>

      {/* === Banking Software Support Section ==g= */}
      <PageLayout className="py-16 space-y-8 text-center">
        <Headline
          title="Get Custom Property Management Software Solutions"
          description="We engineer bespoke property management solutions for real estate agents, brokers, property owners, leasing companies, and tenants."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-start space-y-4">
            <TypographyH5 className="font-extrabold">
              Rental Property Management Solutions
            </TypographyH5>
            <TypographyMuted>
              We provide best-in-class rental property management and tenant
              onboarding solutions to automate essential business processes and
              simplify the workflows within property management.
            </TypographyMuted>
            <FeaturesList
              features={propertyManagementSolutions}
              iconAlign="horizontal"
            />
          </div>
          <img
            loading="lazy"
            src="/assets/industries/real-estate/virtual-tour.png"
            alt="AI-powered banking analytics"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
        </div>
        <ContactUsButton variant="hover">STREAMLINE PROPERTY MANAGEMENT</ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Elevate Your Real Estate Business with Custom Solutions and Support from U Tech"
            description="At U Tech, our goal is to transform your real estate operations via customized software solutions are designed suit your unique requirements. We comprehend the challenges faced by real estate professionals and we offer a wide range of assistance to streamline workflows and improve productivity."
          />

          <FeaturesListOpposite features={realEstateITSolutions} />
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-8 text-center">
        <Headline
          title="IDX Technology Integration Solutions"
          description="Enhance lead generation efficiency of digital media solution with quantitative metrics and quality indicators for property decisions. Our IDX technology offerings includes connectivity, automates content, adds intelligence to the CRM databases and uses search engine analytics to populate its products in prospects’ hands."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <img
            loading="lazy"
            src="/assets/industries/real-estate/idx-technology-integration-solutions-tab.png"
            alt="AI-powered banking analytics"
            className="w-86 xl:w-115 2xl:w-135 mx-auto"
          />
          <div className="text-start space-y-4">
            <TypographyH5 className="font-extrabold">
              Internet Data Exchange (IDX)
            </TypographyH5>
            <TypographyMuted>
              We help you boost online visibility while giving your business a
              clear competitive edge and equip buyers with up-to-date property
              information while protecting seller data, which drives stronger
              engagement and builds trust. Our tailor-made IDX solutions allow
              MLS listings to appear directly on agents’ websites in a format
              that is visually compelling and data-secure.
            </TypographyMuted>
            <FeaturesList features={idxSolutions} iconAlign="horizontal" />
          </div>
        </div>
        <ContactUsButton variant="hover">GET IDX SOLUTIONS</ContactUsButton>
      </PageLayout>

      {/* FAQ Section */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={realEstateFaqs} title="FAQ's" />
      </div>
    </div>
  );
};

export default RealEstate;

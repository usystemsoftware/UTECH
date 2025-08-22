import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import { TestimonialSection } from "@/components/TestimonialSection";
import Iconrender from "@/components/Iconrender";
import PortfolioGrid from "@/components/PortfolioGrid";
import ContactUsButton from "@/custom/ContactUsButton";

import {
  webanimationAndgraphicdesign,
  testimonials,
  webanimationsolutions,
  graphicdesignsolutions,
  featuresListOppositeoptions,
  webdesignintegrations,
  artificialIntelligencesolutions,
  aviationFaqs,
  portfolioItems,
} from "./Data";

const AnimationGraphicDesign = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/animation-graphic-design-banner.jpg"
        title="Web Graphic Design & 3D Animation Services"
        buttonText="Hire Web Designers & Developers"
        buttonLink="#"
        imageFit="cover"
      />

      <section className="py-5">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Our Developers Have Experience With Web Animation & Graphic Design"
            description="Our award-winning full-service design team provides interactive web graphic design and animation services to enhance the user experience, increase conversion rates, and improve engagement."
          />
          <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-6">
            <img
              loading="lazy"
              src="/assets/solutions/animation-graphic-design-banner/10002.png"
              alt="Portfolio"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <div className="space-y-8">
              <FeaturesList
                features={webanimationAndgraphicdesign}
                iconAlign="horizontal"
              />
            </div>
          </div>
        </PageLayout>
      </section>
      <section>
        <TestimonialSection testimonials={testimonials} />
      </section>

      <section className="py-5">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Web Design & Animation Solutions"
            description="We develop, integrate, and customize attention-grabbing 2D and 3D animations with CRO in mind, capturing real-time interactions, and providing live data analytics to improve user experience and increase ROI."
          />
          <ContactUsButton variant="hover">
            Get Animation Solutions
          </ContactUsButton>

          <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-6">
            <div className="order-2 md:order-1">
              <FeaturesList features={webanimationsolutions} grid center />
            </div>
            <img
              loading="lazy"
              src="/assets/solutions/animation-graphic-design-banner/10006.png"
              alt="Portfolio"
              className="w-42 sm:w-52 md:w-54 xl:w-62 2xl:w-66 mx-auto order-1 md:order-2"
            />
          </div>
        </PageLayout>
      </section>

      <section className="py-5 ">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Graphic Design Solutions"
            description="U Tech offers Custom Graphic Design Solutions to create custom logos, personalized email marketing campaigns, digital brochures, social media graphics, videos, and other one-of-a-kind digital marketing materials."
          />
          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <img
              loading="lazy"
              src="/assets/solutions/animation-graphic-design-banner/10011.png"
              alt="Portfolio"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <div className="space-y-8">
              <FeaturesList
                features={graphicdesignsolutions}
                iconAlign="horizontal"
              />
            </div>
          </div>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-8 text-center">
        <FeaturesListOpposite features={featuresListOppositeoptions} />
      </PageLayout>

      <PageLayout className="py-16 space-y-8 text-center">
        <Headline
          title="Web Design Integrations"
          description="Seamlessly integrate third-party software with robust features to help users manage, maintain, and update their current website or application."
        />
        <ContactUsButton variant="hover">
          Integrate Animated Designs
        </ContactUsButton>

        <Iconrender webdesignintegrations={webdesignintegrations} center />
      </PageLayout>

      <PageLayout className="py-16 space-y-8 text-center">
        <Headline
          title="Artificial Intelligence Solutions for 3D Animation"
          description="U Tech’s AI specialists transform animation production by enabling the creation of modern, intuitive animation assets promoting engagement, enhanced task automation, and reduce time-to-market with error-free automated QA testing, mitigating expenses."
        />
        <FeaturesListOpposite features={artificialIntelligencesolutions} />
      </PageLayout>

      <div className="mb-16 mt-2">
        <FaqSection
          faqs={aviationFaqs}
          title="Frequently Asked Questions for 3D Animation Services"
        />
      </div>

      <PortfolioGrid items={portfolioItems} />
    </>
  );
};

export default AnimationGraphicDesign;

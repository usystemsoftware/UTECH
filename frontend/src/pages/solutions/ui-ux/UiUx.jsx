import { TypographyMuted, TypographyH3, Headline } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { Button } from "@/components/ui/button";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import { FeaturesList } from "@/components/FeaturesList";
import { TestimonialSection } from "@/components/TestimonialSection";
import {
  aiBenefits,
  processSteps,
  uiuxfaqs,
  uiuxServices,
  uiuxtestimonials,
  uxUiTechStack,
} from "./Data";

// Logo row utility
const LogoRow = ({ logos }) => (
  <div className="flex flex-wrap items-center mt-4">
    {logos.map((src, index) => (
      <img
        key={index}
        src={src}
        alt="Tech logo"
        className="mx-auto object-contain"
      />
    ))}
  </div>
);

const UiUx = () => {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection
        backgroundImage="/banner/ui-ux-banner.jpg"
        title="UI & UX DESIGN AND DEVELOPMENT SERVICES"
        description="Empowering Businesses with Tailored UI/UX Solutions By Our Design Experts"
        buttonText="HIRE UI/UX DEVELOPMENT"
        buttonLink="#"
        imageFit="cover"
      />

      {/* UI/UX DESIGN SERVICES SECTION */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="Dynamic User Design Services for Smarter User Navigation"
          description="  The key to developing a successful app is marrying the functionality
            your users demand with an intuitive design and experience that make
            it as simple as possible to use. U Technology UI/UX experts will
            design the perfect web, desktop, or mobile app to meet your specific
            business requirements, industry needs, and product development
            goals. We design and develop
            innovative digital user experiences
            that solve complex business problems."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/solutions/ui-ux/mockup.png"
              alt="Tax Preparation"
              className="w-76 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList features={uiuxServices.slice(0, 3)} fadeUp={fadeUp} iconAlign="horizontal" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <FeaturesList features={uiuxServices.slice(3, 6)} fadeUp={fadeUp} iconAlign="horizontal" />
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/solutions/ui-ux/mobile-mockup.png"
              alt="Tax Preparation"
              className="w-82 mx-auto"
            />
          </FadeInWhenVisible>
        </div>
        <Button variant="hover">Hire Experienced UI/UX Developer</Button>
      </PageLayout>

      {/* AI BENEFITS SECTION */}
      <section className="bg-secondary py-12">
        <PageLayout className="space-y-10">
          <Headline
            title="AI-Powered UI UX Development Services"
            description="U Technology commitment to staying ahead of the technological curve is ushering in a new era of AI-powered innovation. Our commitment to seamless, intuitive design takes center stage as we harness the transformative capabilities of Artificial Intelligence."
          />
          <FeaturesList features={aiBenefits} fadeUp={fadeUp} grid3 center />

        </PageLayout>
      </section>

      {/* DESIGN & DEVELOPMENT PROCESS SECTION */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="Custom UX/UI Design & Development Processes"
          description="Our developers follow a detailed process to gain insight into your
            business goals and how to best serve your target audience with a
            seamless, intuitive, and pleasurable user experience."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <FeaturesList features={processSteps.slice(0, 2)} fadeUp={fadeUp} center />
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/solutions/ui-ux/processes.png"
              alt="Tax Preparation"
              className="w-86 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList features={processSteps.slice(2, 4)} fadeUp={fadeUp} center />
        </div>
        <Button variant="hover">CUSTOMIZE YOUR UX/UI DESIGN</Button>
      </PageLayout>

      {/* TECHNOLOGY STACK SECTION */}
      <PageLayout className="text-center py-12">
        <Headline
          title="U Technology's UX/UI Technology Stack"
          description="We use multiple platforms and programming languages to ensure our
          desktop and mobile UI/UX design services are versatile and leverage
          the full strength of these systems to provide computing power,
          enhanced graphics, robust security standards, and greater performance."
        />
        <div className="grid md:grid-cols-3 gap-12 space-y-8 text-center my-16">
          {uxUiTechStack?.map((item, idx) => (
            <FadeInWhenVisible key={idx}>
              <TypographyH3 className="text-lg font-semibold mb-2">
                {item.title}
              </TypographyH3>
              <TypographyMuted className="text-gray-600">
                {item.description}
              </TypographyMuted>
              <LogoRow logos={item.logos} />
            </FadeInWhenVisible>
          ))}
        </div>

        <Button variant="hover">
          Hire Developers with UX/UI Design Experience
        </Button>
      </PageLayout>

      {/* TESTIMONIAL SECTION */}
      <TestimonialSection
        title="Hear What Our Clients Have to Say"
        testimonials={uiuxtestimonials}
      />

      {/* FAQ SECTION */}
      <div className="my-16">
        <FaqSection faqs={uiuxfaqs} title="FAQ's" />
      </div>
    </>
  );
};

export default UiUx;

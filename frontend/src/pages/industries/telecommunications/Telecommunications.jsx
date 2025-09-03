import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/custom/ContactUsButton";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import FaqSection from "@/custom/FaqSection";
import { FeaturesList2 } from "@/components/FeaturesList2";
import { Headline } from "@/custom/Typography";
import {
  AITelecomFeatures,
  gamingtelecommunication,
  TelecommunicationSolutions,
  telcommunicationSoftwareSolutions,
  telecommunicationFaqs,
  TelecomSolutions,
  telecomSolutions,
} from "./Data";

const Telecommunications = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/banner/telecom-hero-banner.jpg"
        title="TELECOM SOFTWARE DEVELOPMENT SERVICES | OSS/BSS & AI SOLUTIONS"
        description="Elevating the Telecom Experience Through AI-Integrated Custom Solutions"
        buttonText="Talk to Our Telecom Software Experts"
        buttonLink="/telecommunications"
        imageFit="cover"
      />

      {/* Section: Hire Dedicated Telecom Software Developers */}
      <PageLayout className="space-y-8 text-center py-10">
        <Headline
          title="Hire Dedicated Telecom Software Developers"
          description="Accelerate your telecom projects with our specialized developers, delivering cutting-edge solutions for OSS/BSS, VoIP, mobile & web applications, machine learning algorithms, and AI-powered networks..."
        />

        <FeaturesList2
          features={TelecomSolutions.slice(0, 1)}
          image="/assets/industries/telecommunications/operations.png"
          imageClass="xl:w-175 2xl:w-195 mx-auto"
        />

        <FeaturesList2
          features={TelecomSolutions.slice(1, 2)}
          image="/assets/industries/telecommunications/online.png"
          reverse
          imageClass="xl:w-175 2xl:w-195 mx-auto"
        />

        <FeaturesList2
          features={TelecomSolutions.slice(2, 3)}
          image="/assets/industries/telecommunications/interface.png"
          imageClass="sm:w-145 xl:w-185 2xl:w-200 mx-auto"
        />

        <FeaturesList2
          features={TelecomSolutions.slice(3, 4)}
          image="/assets/industries/telecommunications/telecom.png"
          imageClass="xl:w-175 2xl:w-195 mx-auto"
          reverse
        />
        <ContactUsButton variant="hover">
          Book a Demo of Our Telecom Software Solutions
        </ContactUsButton>
      </PageLayout>

      {/* Section: AI-Powered Telecommunications Solutions */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="AI-Powered Telecommunications Solutions"
            description="Leverage AI-driven telecom software to cut costs, boost efficiency, and future-proof your operations..."
          />
          <FeaturesList2
            features={AITelecomFeatures}
            grid
          />
          <ContactUsButton variant="hover">GET AI-POWERED TELECOM SOLUTIONS</ContactUsButton>
        </PageLayout>
      </section>

      {/* Section: Custom Telecommunications Software Solutions */}
      <PageLayout className="text-center space-y-6 py-12">
        <Headline
          title="Custom Telecommunications Software Solutions"
          description="We deliver tailored software solutions for Communications Service Providers (CSPs)..."
        />

        <FeaturesList features={gamingtelecommunication} grid3 center />

        <ContactUsButton variant="hover">Get Your Telecom Software Audit</ContactUsButton>
      </PageLayout>

      {/* Section: Telecom Software Support Services */}
      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="Telecom Software Support Services"
            description="We deliver end-to-end support services for telecom applications..."
          />
          <FeaturesListOpposite
            features={TelecommunicationSolutions}
          />
          <ContactUsButton variant="hover">GET TELECOM APPLICATION SUPPORT</ContactUsButton>
        </PageLayout>
      </section>

      {/* Section: Custom Telecom IoT & VAS Application Integration */}
      <PageLayout className="space-y-10 py-12 text-center">
        <Headline
          title="Custom Telecom IOT & VAS Application Integration"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 items-center">
          <FeaturesList features={telecomSolutions.slice(0, 2)} center />
          <img
            loading="lazy"
            src="/assets/industries/telecommunications/mobiles.png"
            alt="Telecommunication Planning Dashboard"
            className="sm:w-66 w-48 md:w-78 xl:w-86 2xl:w-96 mx-auto"
          />
          <FeaturesList features={telecomSolutions.slice(2, 4)} center />
        </div>
        <ContactUsButton variant="hover">GET TELECOM IOT SOLUTIONS</ContactUsButton>
      </PageLayout>

      {/* Section: Custom Telecom Integration Services with Partner Logos */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Custom Telecom Integration Services"
            description="We integrate third-party telecommunications APIs, cloud platforms, and enterprise systems..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
            {telcommunicationSoftwareSolutions?.map((item, index) => (
              <div key={index} className="grid mt-10 ">
                <FeaturesList features={[item]} center />

                <div className="flex items-center flex-wrap justify-center gap-8 text-center mt-6">
                  {item?.partners.map((partner) => (
                    <img
                      loading="lazy"
                      src={`/assets/industries/telecommunications/images/${partner}.png`}
                      alt={`${item.title} - ${partner}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <ContactUsButton variant="hover">GET INTEGRATED TELECOM SOFTWARE</ContactUsButton>
        </PageLayout>
      </section>

      {/* Section: FAQ */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={telecommunicationFaqs} title="FAQ's" />
      </div>
    </>
  );
};

export default Telecommunications;

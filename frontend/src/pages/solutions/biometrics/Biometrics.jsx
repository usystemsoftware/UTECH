import HeroSection from "@/components/HeroSection";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
  biometricIndustries,
  biometricServices,
  biometricSolutions,
  biometricSolutions2,
  Faqs,
  portfolioItems,
} from "./Data";

const Biometrics = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/biometrics.jpg"
        title="CUSTOM AUTODESK CONSULTING & IMPLEMENTATION SOLUTIONS"
        buttonText="Hire Expert Developers"
        buttonLink="#"
        imageFit="cover"
      />

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="Modernizing Identity Verification and Access Control"
          description="U Tech’s custom biometric software ensures secure identity verification and access control, meeting industry standards for encryption, privacy, and trust."
        />

        <ContactUsButton variant="hover">
          GET BIOMETRIC SOLUTIONS
        </ContactUsButton>

        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
          <img
            loading="lazy"
            src="/assets/solutions/biometrics/10034.gif"
            alt="Portfolio"
            className="w-42 sm:w-66 md:w-72 mx-auto"
          />
          <FeaturesList features={biometricSolutions} iconAlign="horizontal" />
        </div>

        <div className="mt-10">
          <FeaturesList
            features={biometricServices}
            grid
            iconAlign="horizontal"
          />
          <ContactUsButton variant="hover">
            Hire Industry Tech Experts
          </ContactUsButton>
        </div>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Industry Solutions"
            description="U Tech’s biometric software development services in the following sectors: finance, healthcare, government, education, and many more. We develop cutting-edge biometric solutions software aimed at enhancing operations and security within specific industries."
          />
          <FeaturesList features={biometricIndustries} grid3 center />
          <ContactUsButton variant="hover">
            Get Biometric Solutions
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-12 text-center">
        <Headline
          title="AI-Powered Biometric System Solutions"
          description="Our biometric software development incorporates artificial intelligence for better accuracy, security, and flexibility. Being a tailored biometric software development firm, we provide cutting-edge advanced biometric solutions software powered by AI and machine learning technologies."
        />
        <FeaturesList
          features={biometricSolutions2}
          grid
          iconAlign="horizontal"
        />
        <ContactUsButton variant="hover">
          Hire a Reliable Biometric System Developer
        </ContactUsButton>
      </PageLayout>

      <div className="py-8">
        <FaqSection
          faqs={Faqs}
          title="Biometric Software: Frequently Asked Questions"
        />
      </div>

      <PortfolioGrid items={portfolioItems} />
    </>
  );
};

export default Biometrics;

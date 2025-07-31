import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Headline } from "@/custom/Typography";

// Importing data arrays for different service categories
import {
  hospitalityAdditionalServices,
  hospitalityFaqs,
  hospitalityServices,
  hospitalitySupportServices,
  sabreSoftwareSolutions,
  travelportIntegrationServices,
} from "./Data";

export default function HospitalandTravelling() {
  return (
    <>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/hospitality-banner2.jpg"
        title="HOSPITALITY SOFTWARE DEVELOPMENT SERVICES"
        buttonText="HIRE HOSPITALITY SOFTWARE DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === MAIN SERVICES SECTION === */}
      <PageLayout className="space-y-16 py-16 text-center">
        <Headline
          title="We have the Best Solution for Hospitality Management Software"
          description="Our Hospitality Management System software solutions are tailored to your hospitality technology needs..."
        />

        <div className="block md:hidden">
          <FeaturesList features={hospitalityServices} fadeUp={fadeUp} grid />
        </div>

        {/* Service features split into 3 columns */}
        <div className="md:grid hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <FeaturesList
            features={hospitalityServices.slice(0, 2)}
            fadeUp={fadeUp}
          />
          <FeaturesList
            features={hospitalityServices.slice(2, 4)}
            fadeUp={fadeUp}
          />
          <FeaturesList
            features={hospitalityServices.slice(4, 6)}
            fadeUp={fadeUp}
          />
        </div>

        <FadeInWhenVisible>
          <Button variant="hover">GET HOSPITILITY MGMT SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === ADDITIONAL SERVICES SECTION === */}
      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-16">
          <Headline
            title="Maximize Your Business Impact and Transform Hospitality with U Tech Developers"
            description="Our team of developers unlock the full potential of property management systems..."
          />

          <div className="block md:hidden">
            <FeaturesList
              features={hospitalityAdditionalServices}
              fadeUp={fadeUp}
              grid
            />
          </div>

          <div className="md:grid hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <FeaturesList
              features={hospitalityAdditionalServices.slice(0, 2)}
              fadeUp={fadeUp}
            />
            <FeaturesList
              features={hospitalityAdditionalServices.slice(2, 4)}
              fadeUp={fadeUp}
            />
            <FeaturesList
              features={hospitalityAdditionalServices.slice(4, 6)}
              fadeUp={fadeUp}
            />
          </div>

          <FadeInWhenVisible>
            <Button variant="hover">GET HOSPITILITY MGMT SOLUTIONS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === SUPPORT SERVICES SECTION === */}
      <PageLayout className="space-y-16 py-16 text-center">
        <Headline
          title="Empower Your Hospitality & Travel Business with U Tech’s Software Development & Support Servicess"
          description="U Tech empowers the booming hospitality industry with customized solutions..."
        />

        <FeaturesList
          features={hospitalitySupportServices}
          fadeUp={fadeUp}
          grid
        />

        <FadeInWhenVisible>
          <Button variant="hover">GET HOSPITILITY & TRAVEL SOFTWARE</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === TRAVELPORT INTEGRATION SECTION === */}
      <section className="bg-secondary py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Travelport API Integration Solutions"
            description="U Tech’s developers ensure Travelport technologies connect effortlessly..."
          />

          {/* Layout: Image left, features right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/industries/hospital-travel/flight-planning-software-solutions.png"
                alt="Portfolio"
                className="w-120 mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={travelportIntegrationServices}
              fadeUp={fadeUp}
            />
          </div>

          <FadeInWhenVisible>
            <Button variant="hover">GET TRAVEL PORT SOFTWARE SOLUTIONS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === SABRE INTEGRATION SECTION === */}
      <PageLayout className="space-y-10 text-center py-16">
        <Headline
          title="Custom Sabre Development & Integration Solutions"
          description="U Tech’s development team is highly skilled in creating custom B2B & B2C travel apps..."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/hospital-travel/custom-sabre-development-and-integration-solutions-new.png"
              alt="Portfolio"
              className="w-56 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList features={sabreSoftwareSolutions} fadeUp={fadeUp} />
        </div>

        <FadeInWhenVisible>
          <Button variant="hover">GET SABRE SOFTWARE SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === FAQ SECTION === */}
      <div className="mb-10">
        <FaqSection faqs={hospitalityFaqs} title="FAQ's" />
      </div>
    </>
  );
}

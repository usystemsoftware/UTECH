import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import VideoPoster from "@/custom/VideoPoster";

// Importing data arrays for different service categories
import {
  aiHospitalitySolutions,
  features,
  hospitalityAdditionalServices,
  hospitalityFaqs,
  hospitalityServices,
  hospitalitySupportServices,
  sabreSoftwareSolutions,
  travelportIntegrationServices,
} from "./Data";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

export default function HospitalandTravelling() {
  return (
    <>
    <SeoHead
        title="U Tech | Company Blog - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
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

        <FeaturesList features={hospitalityServices} grid3 center />

        <ContactUsButton variant="hover">
          GET HOSPITILITY MGMT SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      <section className="relative w-full overflow-hidden">
        <VideoPoster
          features={features}
          title="The Hospitality Industry Is Changing! Must-Know New Tech"
        />
      </section>

      {/* === ADDITIONAL SERVICES SECTION === */}
      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-16">
          <Headline
            title="Maximize Your Business Impact and Transform Hospitality with U Tech Developers"
            description="Our team of developers unlock the full potential of property management systems..."
          />

          <FeaturesList features={hospitalityAdditionalServices} grid3 center />

          <ContactUsButton variant="hover">
            GET HOSPITILITY MGMT SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-16 py-16 text-center">
        <Headline
          title="Revolutionizing Hospitality & Travel Software with AI-Driven Solutions"
          description="U Tech AI technology improves many operations and guest experiences in hospitality."
        />

        <FeaturesListOpposite features={aiHospitalitySolutions} grid />
        <ContactUsButton variant="hover">
          GET HOSPITILITY & TRAVEL SOFTWARE
        </ContactUsButton>
      </PageLayout>

      {/* === SUPPORT SERVICES SECTION === */}
      <PageLayout className="space-y-16 py-16 text-center">
        <Headline
          title="Empower Your Hospitality & Travel Business with U Tech’s Software Development & Support Servicess"
          description="U Tech empowers the booming hospitality industry with customized solutions..."
        />

        <FeaturesListOpposite features={hospitalitySupportServices} grid />

        <ContactUsButton variant="hover">
          GET HOSPITILITY & TRAVEL SOFTWARE
        </ContactUsButton>
      </PageLayout>

      {/* === TRAVELPORT INTEGRATION SECTION === */}
      <section className="bg-secondary py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Travelport API Integration Solutions"
            description="U Tech’s developers ensure Travelport technologies connect effortlessly..."
          />

          {/* Layout: Image left, features right */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <img
              loading="lazy"
              src="/assets/Industries/hospital-travel/flight-planning-software-solutions.png"
              alt="Portfolio"
              className="w-145 xl:w-155 2xl:w-165 mx-auto"
            />
            <FeaturesList
              features={travelportIntegrationServices}
              iconAlign="horizontal"
            />
          </div>

          <ContactUsButton variant="hover">
            GET TRAVEL PORT SOFTWARE SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === SABRE INTEGRATION SECTION === */}
      <PageLayout className="space-y-10 text-center py-16">
        <Headline
          title="Custom Sabre Development & Integration Solutions"
          description="U Tech’s development team is highly skilled in creating custom B2B & B2C travel apps..."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <img
            loading="lazy"
            src="/assets/Industries/hospital-travel/custom-sabre-development-and-integration-solutions-new.png"
            alt="Portfolio"
            className="w-52 sm:w-62 xl:w-68 2xl:w-72 mx-auto"
          />
          <FeaturesList
            features={sabreSoftwareSolutions}
            iconAlign="horizontal"
          />
        </div>

        <ContactUsButton variant="hover">
          GET SABRE SOFTWARE SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      {/* === FAQ SECTION === */}
      <div className="mb-10">
        <FaqSection faqs={hospitalityFaqs} title="FAQ's" />
      </div>
    </>
  );
}

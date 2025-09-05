import SplitSection from "@/custom/SplitSection";
import { TypographyH2, TypographyMuted } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import HeroSection from "@/components/HeroSection";
import { FeaturesListOpposite } from "@/components/FeaturesList";
import CaseStrudyCard2 from "@/components/CaseStudyCard2";
import ContactUsButton from "@/custom/ContactUsButton";

import {
  cardsData,
  microsoftFeaturesOpposite,
  microsoftMenu,
  splitSectionData,
} from "./Data";


export default function Microsoft() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/banner/microsoft-banner.jpg"
        title="Microsoft Integration Services from Top-Notch Certified Provider"
        buttonText="SCHEDULE YOUR CONSULTATION NOW"
        bottombgcolor="bg-[#000]"
        bottomLinks={microsoftMenu}
        partnerLogo="/assets/solutions/microsoft/partner.png"
      />

      {/* Headline Section */}
      <PageLayout className="py-16 space-y-10">
        <Headline
          title="Microsoft Solutions: Work With Certified Microsoft Legacy Gold Partners"
          description="Chetu's custom Microsoft services range from modernizing web applications on Azure to building collaborative solutions on SharePoint. Unlock business value and chat with our experts today. Chetu has years of experience deploying and implementing Microsoft solutions as a Microsoft Legacy Gold Partner. We work hand in hand with Microsoft to provide our clients with the most up-to-date technology solutions that drive innovation, productivity, and increased revenue."
        />

        {/* Features Opposite */}
        <FeaturesListOpposite
          features={microsoftFeaturesOpposite}
          titleClassName="text-black"
        />
      </PageLayout>

      {/* Cards Section */}
      <div className="py-16 space-y-10 px-6 md:px-8">
        <Headline
          title=" Microsoft Solutions: Digital Transformation For The Modern Workplace"
          description="Scale business growth through Microsoft technology"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cardsData.map((option, idx) => (
            <CaseStrudyCard2
              key={idx}
              image={option?.image}
              title={option?.title}
              description={option?.description}
            />
          ))}
        </div>
      </div>

      <section
        className="relative w-full py-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/solutions/microsoft/intention.jpg')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <PageLayout className="relative w-full text-white text-center space-y-10 overflow-auto">

          {/* Title */}
          <TypographyH2>
            Discover More About Our Microsoft Integration Services
          </TypographyH2>

          {/* Description */}
          <TypographyMuted>
            Master the Modern Workplace With Microsoft Cloud. We are a recognized cloud expert that has taken more than a thousand user
            to Microsoft Cloud. But that’s just part of the story.
            Building a modern workplace requires new technologies, new strategies, and a new psychology that embraces both.
            We help you design, and implement integrated solutions that will transform your organization into a modern workplace.
          </TypographyMuted>

          <TypographyH2>
            Exceptional Customer Experience, Always
          </TypographyH2>

          <TypographyMuted>
            Your customer experience must be nothing short of exceptional, or your customers will go elsewhere. Creating that experience requires collecting and using
            customer data, effective digital marketing and commerce, and the underlying development platform, infrastructure, and data center solutions. Microsoft has
            the tools you need to deliver.

          </TypographyMuted>

          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Build, test, deploy, and manage applications and services with Azure</li>
            <li>Collect actionable customer data with Dynamics CRM and organize your company operations with Dynamics ERP</li>
            <li>Make sense of data and make more-informed decisions with SharePoint, Power BI, Delve, and dynamic search</li>
            <li>Partner products like Sitecore, built on the Microsoft platform, help you establish continual connectedness and manage every aspect of mail, web, and digital marketing</li>
          </ul>


          <ContactUsButton className="bg-orange-600 text-base hover:bg-orange-500 rounded-full">
            Get Started Today
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Split Sections - Dynamically from Data.jsx */}
      <PageLayout>
        {splitSectionData.map((section, idx) => (
          <SplitSection
            key={idx}
            coverImage={section.coverImage}
            title={section.title}
            description={section.description}
            imageRight={section.imageRight}
          />
        ))}
      </PageLayout>

    </>
  );
}

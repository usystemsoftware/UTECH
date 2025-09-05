import SplitSection from "@/custom/SplitSection";
import { TypographyH2, TypographyMuted } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import {
  cardsData,
  microsoftFeaturesOpposite,
  microsoftMenu,
  splitSectionData, //  Import here
  bottomBannerData, // e
} from "./Data";
import CaseStrudyCard2 from "@/components/CaseStudyCard2";

export default function Microsoft() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/banner/microsoft.jpg"
        title="Microsoft Integration Services from Top-Notch Certified Provider"
        buttonText="SCHEDULE YOUR CONSULTATION NOW"
        bottombgcolor="bg-[#000]"
        bottomLinks={microsoftMenu}
        partnerLogo="/banner/MicrosoftPartner.png"
      />

      {/* Headline Section */}
      <PageLayout>
        <TypographyH2 className="text-center">
          <span className="text-black">Microsoft Solutions: </span>
          <span className="text-[#B8860B]">
            Work With Certified Microsoft Legacy Gold <br />
            Partners
          </span>
        </TypographyH2>
<br/>

<div className="">
  <p className="text-center font-medium">
    Chetu's custom Microsoft services range from modernizing web applications on Azure to building collaborative solutions on SharePoint.
  </p>

  <p className="text-center">
    Unlock business value and chat with our experts today.
  </p>

  <p className="text-center">
    Chetu has years of experience deploying and implementing Microsoft solutions as a Microsoft Legacy Gold Partner. We work hand in hand with Microsoft to provide our clients with the most up-to-date technology solutions that drive innovation, productivity, and increased revenue.
  </p>
  </div><br/>
  <br/>
  


      {/* Features Opposite */}
          <FeaturesListOpposite
            features={microsoftFeaturesOpposite}
            titleClassName="text-black"
          />
        </PageLayout>

      {/* Cards Section */}
      <PageLayout className="py-16 space-y-10">
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
      </PageLayout>




      <section
        className="relative w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('${bottomBannerData.backgroundImage}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative w-full h-full flex flex-col justify-center items-center text-center text-white px-6 md:px-16 overflow-auto">

          {/* Title */}
          <TypographyH2>
            Discover More About Our Microsoft Integration Services
          </TypographyH2>

          <div className="my-4"></div>

          {/* Description */}
          <TypographyMuted>
            Master the Modern Workplace With Microsoft Cloud. We are a recognized cloud expert that has taken more than a thousand users <br />
            to Microsoft Cloud. But that’s just part of the story.
          </TypographyMuted>

          <TypographyMuted>
            Building a modern workplace requires new technologies, new strategies, and a new psychology that embraces both.<br />
            Microsoft has the solutions to support your digital transformation, empowering both internal users and external consumers.<br />
            We help you design, and implement integrated solutions that will transform your organization into a modern workplace.
          </TypographyMuted>

          <div className="my-4"></div>

          <TypographyH2>
            Exceptional Customer Experience, Always
          </TypographyH2>

          <TypographyMuted>
            Your customer experience must be nothing short of exceptional, or your customers will go elsewhere. Creating that experience requires collecting and using<br />
            customer data, effective digital marketing and commerce, and the underlying development platform, infrastructure, and data center solutions. Microsoft has<br />
            the tools you need to deliver.<br /><br />
            <TypographyMuted>
              <TypographyMuted>
                <ul className="list-disc list-inside space-y-2 text-left">
                  <li>Build, test, deploy, and manage applications and services with Azure</li>
                  <li>Collect actionable customer data with Dynamics CRM and organize your company operations with Dynamics ERP</li>
                  <li>Make sense of data and make more-informed decisions with SharePoint, Power BI, Delve, and dynamic search</li>
                  <li>Partner products like Sitecore, built on the Microsoft platform, help you establish continual connectedness and manage every aspect of mail, web, and digital marketing</li>
                </ul>
              </TypographyMuted>

            </TypographyMuted>

          </TypographyMuted>

          {/* Button */}
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            {bottomBannerData.buttonText}
          </button>
        </div>
      </section>



      {/* Split Sections - Dynamically from Data.jsx */}
      {splitSectionData.map((section, idx) => (
        <SplitSection
          key={idx}
          coverImage={section.coverImage}
          title={section.title}
          description={section.description}
          imageRight={section.imageRight}
        />
      ))}

    </>
  );
}

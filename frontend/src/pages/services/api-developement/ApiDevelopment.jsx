import { Headline, TypographyH3 } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";

import {
  AiApiFeatures,
  faqs,
  portfolioItems,
  services,
  support,
  features,
  apiFunctionality,
} from "./Data";

const ApiDevelopment = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/banner/api-development-banner.jpg"
        title=" CUSTOM API DEVELOPMENT & INTEGRATION SOLUTIONS "
        description="Expert API Development with AI-Powered Solutions for Seamless Integrations"
        buttonText="GET API DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* ===== FEATURES SECTION ===== */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Hire Experienced and Dedicated API Developers"
          description="U Tech custom API solutions support a range of integration protocols, including REST, SOAP, XML, and RPC API. Our developers have extensive experience creating custom application programming interfaces using these protocols to ensure seamless integration between your systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 ">
          {/* Left Features List */}
          <FeaturesList
            features={features.slice(0, 2)}
            iconAlign="horizontal"
          />

          {/* Center Animation */}
          <img
            loading="lazy"
            src="/assets/services/api-development/cellphone-animation.gif"
            alt="Mobile Analytics App"
            className="w-42 sm:w-52 xl:w-56 2xl:w-62 mx-auto"
          />

          {/* Right Features List */}
          <FeaturesList
            features={features.slice(3, 6)}
            iconAlign="horizontal"
          />
        </div>

        {/* Call to Action ContactUsButton */}
        {/* <FadeInWhenVisible> */}
        <ContactUsButton variant="hover">
          CUSTOMIZE YOUR BANKING SOLUTION NOW
        </ContactUsButton>
        {/* </FadeInWhenVisible> */}
      </PageLayout>

      {/* ===== AI API FEATURES SECTION ===== */}
      <PageLayout className="text-center space-y-14">
        <Headline
          title="Software QA Web & Mobile App Testing"
          description="U Tech’s seasoned test architects and engineers provide world-class QA testing services for web and mobile applications, ensuring full compliance and high-quality software every time. We harness the power of innovative AI, IoT, and RPA technologies to perform advanced QA web & mobile app testing.."
        />

        {/* Feature Cards Grid */}
        <FeaturesList features={AiApiFeatures} grid3 center />

        {/* Call to Action */}
        {/* <FadeInWhenVisible> */}
        <ContactUsButton variant="hover">HIRE AI API DEVELOPER</ContactUsButton>
        {/* </FadeInWhenVisible> */}
      </PageLayout>

      {/* ===== API-AS-A-SERVICE SECTION ===== */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="U Tech’s API-as-a-Service (APIaaS) Solutions"
          description="U Tech's API-as-a-Service (APIaaS) solutions utilize a range of protocols, including cloud natural language APIs and Java, JSON, AJAX, SOAP, HTTP/HTTPS, XML, XHTML, TCP/IP, and EDI development services. Our experienced developers can create secure and efficient web APIs using these protocols to ensure seamless integration with your existing systems."
        />

        {/* APIaaS Image + Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets/services/api-development/third-party-software-integration.png"
            alt="Mobile Analytics App"
            className="w-42 sm:w-52 xl:w-56 2xl:w-62 mx-auto"
          />
          <FeaturesList features={services} grid />
        </div>

        {/* CTA */}
        {/* <FadeInWhenVisible> */}
        <ContactUsButton variant="hover">
          GET LOAN MANAGEMENT SOFTWARE SOLUTIONS
        </ContactUsButton>
        {/* </FadeInWhenVisible> */}
      </PageLayout>

      {/* ===== THIRD-PARTY API FUNCTIONALITY ===== */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Extend Your API Functionality with New & Existing Third-Party Systems"
          description="U Tech’s been delivering highly secure, scalable, and flexible application programming interface development services to our clients over the last 22 years and have become leading experts in the software development and integration of public APIs, including:"
        />

        {/* Two-Column Functionality Grid */}
        <FeaturesList features={apiFunctionality} grid />

        {/* CTA */}
        {/* <FadeInWhenVisible> */}
        <ContactUsButton variant="hover">
          GET THIRD-PARTY API FUNCTIONALITY
        </ContactUsButton>
        {/* </FadeInWhenVisible> */}
      </PageLayout>

      {/* ===== SUPPORT SERVICES SECTION ===== */}
      <PageLayout className="py-16 space-y-10">
        <Headline
          title="API Development Support Services"
          description="Our specialists offer guidance and troubleshooting for REST, SOAP, XML, and RPC implementation, creating streamlined performance of all APIs and ensuring all end-users enjoy enhanced API efficiency and accurate data processing."
        />

        {/* Support Cards */}
        <FeaturesList features={support} grid iconAlign="horizontal" />
      </PageLayout>

      {/* ===== FAQ SECTION ===== */}
      <div className="my-16">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>

      {/* ===== PORTFOLIO SECTION ===== */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                loading="lazy"
                src={item.img}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.overlayText && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <TypographyH3 className="text-white text-center">
                    {item.overlayText}
                  </TypographyH3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ApiDevelopment;

import { Headline, TypographyH3, TypographyMuted } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import CaseStudyCard from "@/components/CaseStudyCard";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";

// Data imports
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
        backgroundImage="/assets/industries/banking/banking-header.avif"
        title=" CUSTOM API DEVELOPMENT & INTEGRATION SOLUTIONS "
        description="Expert API Development with AI-Powered Solutions for Seamless Integrations"
        buttonText="GET API DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.6}
      />

      {/* ===== FEATURES SECTION ===== */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Hire Experienced and Dedicated API Developers"
          description="U Tech custom API solutions support a range of integration protocols, including REST, SOAP, XML, and RPC API. Our developers have extensive experience creating custom application programming interfaces using these protocols to ensure seamless integration between your systems."
        />

        <div className="flex flex-col md:flex-row justify-baseline gap-4">
          {/* Left Features List */}
          <FeaturesList features={features.slice(0, 2)} fadeUp={fadeUp} />

          {/* Center Animation */}
          <FadeInWhenVisible className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/services/api-development/cellphone-animation.gif"
              alt="Mobile Analytics App"
              className="w-64"
            />
          </FadeInWhenVisible>

          {/* Right Features List */}
          <FeaturesList features={features.slice(3, 6)} fadeUp={fadeUp} />
        </div>

        {/* Call to Action Button */}
        <FadeInWhenVisible>
          <Button variant="hover">CUSTOMIZE YOUR BANKING SOLUTION NOW</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ===== AI API FEATURES SECTION ===== */}
      <PageLayout className="text-center space-y-14">
        <Headline
          title="Software QA Web & Mobile App Testing"
          description="Chetu’s seasoned test architects and engineers provide world-class QA testing services for web and mobile applications, ensuring full compliance and high-quality software every time. We harness the power of innovative AI, IoT, and RPA technologies to perform advanced QA web & mobile app testing.."
        />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {AiApiFeatures.map((item, index) => (
            <CaseStudyCard
              key={index}
              index={index}
              icon={item?.icon}
              title={item?.title}
              description={item?.description}
              link={item?.link}
            />
          ))}
        </div>

        {/* Call to Action */}
        <FadeInWhenVisible>
          <Button variant="hover">HIRE AI API DEVELOPER</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ===== API-AS-A-SERVICE SECTION ===== */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="U Tech’s API-as-a-Service (APIaaS) Solutions"
          description="U Tech's API-as-a-Service (APIaaS) solutions utilize a range of protocols, including cloud natural language APIs and Java, JSON, AJAX, SOAP, HTTP/HTTPS, XML, XHTML, TCP/IP, and EDI development services. Our experienced developers can create secure and efficient web APIs using these protocols to ensure seamless integration with your existing systems."
        />

        {/* APIaaS Image + Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 text-left">
          {services.map((item, index) => (
            <CaseStudyCard
              key={index}
              index={index}
              icon={item?.icon}
              title={item?.title}
              description={item?.description}
              link={item?.link}
            />
          ))}
        </div>

        {/* CTA */}
        <FadeInWhenVisible>
          <Button variant="hover">
            GET LOAN MANAGEMENT SOFTWARE SOLUTIONS
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ===== THIRD-PARTY API FUNCTIONALITY ===== */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Extend Your API Functionality with New & Existing Third-Party Systems"
          description="U Tech’s been delivering highly secure, scalable, and flexible application programming interface development services to our clients over the last 22 years and have become leading experts in the software development and integration of public APIs, including:"
        />

        {/* Two-Column Functionality Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-16">
          {apiFunctionality.map((feature, index) => (
            <div key={index}>
              <TypographyH3>{feature?.title}</TypographyH3>
              <TypographyMuted>{feature?.description}</TypographyMuted>
              <div
                key={index}
                className="flex items-center sm:gap-12 gap-8 mt-8 flex-wrap"
              >
                {feature.logos.map((logo, index) => (
                  <img
                    loading="lazy"
                    src={`/assets/services/api-development/api-conf/${logo}.png`}
                    className="h-8 cursor-pointer hover:scale-105"
                    alt={feature?.title}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <FadeInWhenVisible>
          <Button variant="hover">GET THIRD-PARTY API FUNCTIONALITY</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ===== SUPPORT SERVICES SECTION ===== */}
      <PageLayout className="py-16 space-y-10">
        <Headline
          title="API Development Support Services"
          description="Our specialists offer guidance and troubleshooting for REST, SOAP, XML, and RPC implementation, creating streamlined performance of all APIs and ensuring all end-users enjoy enhanced API efficiency and accurate data processing."
        />

        {/* Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {support.map((item, index) => (
            <CaseStudyCard
              key={index}
              index={index}
              icon={item?.icon}
              title={item?.title}
              description={item?.description}
              link={item?.link}
            />
          ))}
        </div>
      </PageLayout>

      {/* ===== FAQ SECTION ===== */}
      <div className="my-16">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>

      {/* ===== PORTFOLIO SECTION ===== */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <FadeInWhenVisible
              delay={index * 0.2}
              key={index}
              className="relative group overflow-hidden"
            >
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
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </>
  );
};

export default ApiDevelopment;

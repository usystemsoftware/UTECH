import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Headline, TypographyH4, TypographyH1 } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/custom/ContactUsButton";

import { FaCheck } from "react-icons/fa";
import {
  digitalTransformationFeatures,
  dxFeatures,
  facilityAssurance,
  facilityHighlights,
  features,
  growthInnovationFeaturesData,
  industrySolutions,
  points,
  readingData,
  services,
} from "./Data";

const DigitalTransformation = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/banner/digital-transformation-banner.jpg"
        title="DIGITAL TRANSFORMATION SERVICES & SOLUTIONS"
        buttonText="Hire A Reliable DX Resource"
        buttonLink="#"
        imageFit="cover"
      />

      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="Drive Growth and Innovation With Our Digital Transformation
            Solutions"
          description="U Technology’s digital transformation consulting experts will help your
            business reach optimal performance through innovative strategies and
            implementation of digital transformation initiatives. Our DevOps
            specialists are available to provide workflow automation, deploy,
            and support technical solutions."
        />

        <FeaturesList
          features={growthInnovationFeaturesData}
          fadeUp={fadeUp}
          grid
          iconAlign="horizontal"
        />

        <ContactUsButton variant="hover">WORK WITH TRASFORAMTION EXPERTS</ContactUsButton>
      </PageLayout>

      <section className="py-16 bg-secondary text-center">
        <PageLayout className="space-y-12">
          <Headline
            title="Work With Top Digital Transformation Experts"
            description="We provide digital transformation services that will optimize your
            business by increasing efficiency and enabling a greater competitive
            advantage. We can integrate systems, automate processes, and provide
            staff augmentation to help you fulfill your core objectives."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/services/digital-transformation/digital-transformation-team.jpg"
                alt="Financial Planning Dashboard"
                className="w-155 mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={digitalTransformationFeatures}
              fadeUp={fadeUp}
              iconAlign="horizontal"
            />
          </div>

          <FeaturesList
            features={services}
            fadeUp={fadeUp}
            grid3
            center
          />

          <ContactUsButton variant="hover">GET DIGITAL TRANSFORMATION SERVICES</ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Industry-Specific Digital Transformation Solutions"
          description="U Technology provides customized digital transformation solutions to meet
          the specific needs of businesses across different industries,
          including finance, healthcare, and retail."
        />

        <FeaturesList features={industrySolutions} fadeUp={fadeUp} grid iconAlign="horizontal" />

        {/* ContactUsButton */}
        <ContactUsButton variant="hover">Get Industry DX Solution</ContactUsButton>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Reliable Digital Transformation Service Providers"
            description="We have the infrastructure and bandwidth to provide streamlined
            service and support in digital transformation and business process
            outsourcing. Our facilities and resources are secure and reliable."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/services/digital-transformation/unique-threat-prevention-strategies.png"
                alt="Financial Planning Dashboard"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList features={facilityHighlights} fadeUp={fadeUp} iconAlign="horizontal" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FeaturesList features={facilityAssurance} fadeUp={fadeUp} iconAlign="horizontal" />
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/services/digital-transformation/remote-workforce-network-security-protection.png"
                alt="Financial Planning Dashboard"
                className="w-145 mx-auto"
              />
            </FadeInWhenVisible>
          </div>

          <ContactUsButton variant="hover">Hire A Reliable DX Resource</ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-20 text-center space-y-10">
        <Headline
          title="Top Talent & Industry Expertise"
          description="U Technology recruits top talent that goes through a rigorous hiring
          process followed by thorough training and development to provide
          optimal service."
        />

        <FeaturesList
          features={features}
          fadeUp={fadeUp}
          grid4
          center
        />

        <FadeInWhenVisible>
          <ContactUsButton variant="hover">WORK WITH TOP TALENT</ContactUsButton>
        </FadeInWhenVisible>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="py-20 text-center space-y-10">
          <Headline
            title="One-Stop Digital Transformation Solution Provider"
            description="Our specialized industry-specific teams provide skill, intelligence,
            and efficiency to drive value and growth. With our innovative
            resources, we will help you increase operational flexibility."
          />


          <FeaturesList
            features={dxFeatures}
            fadeUp={fadeUp}
            grid3
            center
          />
          <FadeInWhenVisible>
            <ContactUsButton variant="hover">HIRE A ONE-STOP SHOP</ContactUsButton>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      <PageLayout className="py-12">
        <Headline
          title="Compliance Measures"
          description="Our expert management team will help you make business process
            outsourcing as seamless as possible as we implement processes per
            industry standards."
        />

        <div className="flex justify-center space-y-10 sm:flex-row flex-col items-center gap-6">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/digital-transformation/newsroom.png"
              alt="Financial Planning Dashboard"
              className="w-84 mx-auto"
            />
          </FadeInWhenVisible>

          <ul className="text-left space-y-4">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm sm:text-base"
              >
                <FaCheck className="text-teal-600 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <TypographyH1>SUGGESTED READING</TypographyH1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {readingData?.map((item, index) => (
              <div key={index} className="space-y-4 text-start">
                <FadeInWhenVisible>
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-sm"
                  />
                </FadeInWhenVisible>
                <TypographyH4>{item.title}</TypographyH4>
                <FadeInWhenVisible>
                  <ContactUsButton className="w-full">READ MORE</ContactUsButton>
                </FadeInWhenVisible>
              </div>
            ))}
          </div>
        </PageLayout>
      </section>
    </>
  );
};

export default DigitalTransformation;

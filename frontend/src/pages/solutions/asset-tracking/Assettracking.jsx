import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";

import {
  hiresoftwaredevelopers,
  assetManagementSolutions,
  aiAssetSolutions,
  assetTrackingSolutions,
  equipmentTrackingSolutions,
  scanningTrackingSolutions,
  inventoryManagementSolutions,
  ediSolutions,
  applicationSupport,
  assetIntegrationSolutions,
  Faqs,
} from './Data';

const Assettracking = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/asset-tracking.jpg"
        title="Asset Tracking Software"
        buttonText="REQUEST A CONSULT"
        buttonLink="#"
        imageFit="cover"
      />

      <section className="py-10">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Hire Experienced Asset Tracking Software Developers"
            description="Our expert developers have many years of combined experience in the supply chain industry and developing shipping & logistics, warehouse management, freighting & shipping, freight broker, and order processing software solutions to simplify asset tracking workflows throughout the transportation of goods from start to finish."
          />
          <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
            <div className="space-y-8">
              <FeaturesList
                fadeUp={fadeUp}
                features={hiresoftwaredevelopers}
                iconAlign="horizontal"

              />
            </div>
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/solutions/asset-tracking/10002.png"
                alt="Portfolio"
                className="w-96 sm:w-110 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
          <ContactUsButton variant="hover">BOOK YOUR FREE AI CONSULTATION</ContactUsButton>
        </PageLayout>
      </section>

      <section className="py-16">
        <PageLayout className="space-y-10 text-center">
          <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/solutions/asset-tracking/10006.png"
                alt="Portfolio"
                className="w-46 md:w-54 mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={assetManagementSolutions}
              iconAlign="horizontal"
            />
          </div>
          <ContactUsButton variant="hover">
            Get Asset Tracking Developers
          </ContactUsButton>
        </PageLayout>
      </section>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="AI-Powered Asset Tracking Software Solutions"
            description="U Tech offers asset tracking in real time with AI for anomalies and predictive analytics. Advanced automation improves productivity while eliminating operational risks and simplifying management so that organizations can make better decisions with higher confidence."
          />
          <FeaturesList
            features={aiAssetSolutions}
            grid3
            center
          />
          <ContactUsButton variant="hover">
            GET AI-POWERED ASSET TRACKING SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      <section className="py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Asset Tracking Solutions"
            description="Our asset tracking experts develop custom solutions for the tracking and management of assets such as heavy equipment, tools, vehicles, and technology with features to effectively monitor assets throughout your entire organization and supply chain."
          />
          <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/solutions/asset-tracking/10016.png"
                alt="Portfolio"
                className="w-96 sm:w-115 mx-auto"
              />
            </FadeInWhenVisible>
            <div className="space-y-8">
              <FeaturesList
                fadeUp={fadeUp}
                features={assetTrackingSolutions}
                iconAlign="horizontal"

              />
            </div>
          </div>
        </PageLayout>
      </section>

      <section className="py-16">
        <PageLayout className="space-y-10 text-center">
          <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
            <FeaturesList
              features={equipmentTrackingSolutions}
              iconAlign="horizontal"
            />
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/solutions/asset-tracking/10020.png"
                alt="Portfolio"
                className="w-82 sm:w-110 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
          <ContactUsButton variant="hover">GET CUSTOM SOLUTIONS</ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-12 text-center">
        <Headline
          title="Custom Features"
          description="Our experts engineer asset tracking software designed to track and monitor all supply chain assets and inventory items as they move throughout the supply chain process in real-time, enabling SCM professionals to keep a watchful eye on your asset journey from start to finish."
        />
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/solutions/asset-tracking/10024.png"
              alt="Portfolio"
              className="md:w-48 w-42 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList
            features={scanningTrackingSolutions}
            iconAlign="horizontal"
          />
        </div>
        <div className="grid grid-cols-1 mt-8 items-center sm:grid-cols-2 gap-6">
          <div className="space-y-8">
            <FeaturesList
              fadeUp={fadeUp}
              features={inventoryManagementSolutions}
              iconAlign="horizontal"

            />
          </div>
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/solutions/asset-tracking/10028.png"
              alt="Portfolio"
              className="w-145 mx-auto"
            />
          </FadeInWhenVisible>
        </div>
        <ContactUsButton variant="hover">CUSTOMIZE YOUR SOFTWARE</ContactUsButton>
      </PageLayout>

      <PageLayout className="space-y-10 py-16 text-center">
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/solutions/asset-tracking/10032.png"
              alt="Portfolio"
              className="md:w-56 w-50 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList
            features={ediSolutions}
            iconAlign="horizontal"
          />
        </div>
        <ContactUsButton variant="hover">Get Custom EDI Integrations</ContactUsButton>
      </PageLayout>

      <PageLayout className="py-16 space-y-10 text-center">
        <FeaturesListOpposite
          features={applicationSupport}
        />
        <ContactUsButton variant="hover">GET APPLICATION SUPPORT</ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Asset Tracking Integrations"
            description="U Tech’s experts custom-develop and provide seamless integrations with leading third-party asset tracking, monitoring, and management to streamline maintenance, reduce costs, and prevent loss."
          />
          <FeaturesList
            iconSize={40}
            features={assetIntegrationSolutions}
            grid3
            center
          />
          <ContactUsButton variant="hover">GET AI-POWERED ASSET TRACKING SOLUTIONS</ContactUsButton>
        </PageLayout>
      </section>

      <div className="py-16">
        <FaqSection faqs={Faqs} title="Frequently Asked Questions for 3D Animation Services" />
      </div>

    </>
  )
}

export default Assettracking

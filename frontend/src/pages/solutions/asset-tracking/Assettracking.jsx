import React from 'react'
import HeroSection from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
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

      <section className="py-10 ">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Hire Experienced Asset Tracking Software Developers"
            description="Our expert developers have many years of combined experience in the supply chain industry and developing shipping & logistics, warehouse management, freighting & shipping, freight broker, and order processing software solutions to simplify asset tracking workflows throughout the transportation of goods from start to finish."
          />
          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <div className="space-y-8">
              <FeaturesList
                fadeUp={fadeUp}
                features={hiresoftwaredevelopers}
                iconAlign="horizontal"

              />
            </div>
            <FadeInWhenVisible delay={0.5} className="md:block hidden">
              <img
                loading="lazy"
                src="/assets/solutions/asset-tracking/10002.png"
                alt="Portfolio"
                className="w-125 mx-auto"
              />
            </FadeInWhenVisible>

          </div>
          <Button variant="hover">BOOK YOUR FREE AI CONSULTATION</Button>

        </PageLayout>

      </section>

      <section className="py-5 ">
        <PageLayout className="space-y-10 text-center">

          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <FadeInWhenVisible delay={0.5} className="md:block hidden">
              <img
                loading="lazy"
                src="/assets/solutions/asset-tracking/10006.png"
                alt="Portfolio"
                className="w-70 mx-auto"
              />
            </FadeInWhenVisible>
            <div className="space-y-8">
              <FeaturesList
                fadeUp={fadeUp}
                features={assetManagementSolutions}
                iconAlign="horizontal"

              />
            </div>
          </div>
          <Button variant="hover">Get Asset Tracking Developers</Button>

        </PageLayout>

      </section>
      <section className="bg-secondary py-5">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="AI-Powered Asset Tracking Software Solutions"
            description="U Tech offers asset tracking in real time with AI for anomalies and predictive analytics. Advanced automation improves productivity while eliminating operational risks and simplifying management so that organizations can make better decisions with higher confidence."
          />
          <FeaturesList features={aiAssetSolutions} grid3 fadeUp={fadeUp} center />
          <Button variant="hover">GET AI-POWERED ASSET TRACKING SOLUTIONS</Button>


        </PageLayout>

      </section>

      <section className="py-5 ">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Asset Tracking Solutions"
            description="Our asset tracking experts develop custom solutions for the tracking and management of assets such as heavy equipment, tools, vehicles, and technology with features to effectively monitor assets throughout your entire organization and supply chain."
          />
          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <FadeInWhenVisible delay={0.5} className="md:block hidden">
              <img
                loading="lazy"
                src="/assets/solutions/asset-tracking/10016.png"
                alt="Portfolio"
                className="w-120 mx-auto"
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
      <section className="py-10 ">
        <PageLayout className="space-y-10 text-center">
          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <div className="space-y-8">
              <FeaturesList
                fadeUp={fadeUp}
                features={equipmentTrackingSolutions}
                iconAlign="horizontal"

              />
            </div>
            <FadeInWhenVisible delay={0.5} className="md:block hidden">
              <img
                loading="lazy"
                src="/assets/solutions/asset-tracking/10020.png"
                alt="Portfolio"
                className="w-125 mx-auto"
              />
            </FadeInWhenVisible>

          </div>
          <Button variant="hover">GET CUSTOM SOLUTIONS</Button>

        </PageLayout>

      </section>


      <section className="py-5 ">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Features"
            description="Our experts engineer asset tracking software designed to track and monitor all supply chain assets and inventory items as they move throughout the supply chain process in real-time, enabling SCM professionals to keep a watchful eye on your asset journey from start to finish."
          />
          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <FadeInWhenVisible delay={0.5} className="md:block hidden">
              <img
                loading="lazy"
                src="/assets/solutions/asset-tracking/10024.png"
                alt="Portfolio"
                className="w-50 mx-auto"
              />
            </FadeInWhenVisible>
            <div className="space-y-8">
              <FeaturesList
                fadeUp={fadeUp}
                features={scanningTrackingSolutions}
                iconAlign="horizontal"

              />
            </div>
          </div>

        </PageLayout>

      </section>
      <section className="py-10 ">
        <PageLayout className="space-y-10 text-center">
          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <div className="space-y-8">
              <FeaturesList
                fadeUp={fadeUp}
                features={inventoryManagementSolutions}
                iconAlign="horizontal"

              />
            </div>
            <FadeInWhenVisible delay={0.5} className="md:block hidden">
              <img
                loading="lazy"
                src="/assets/solutions/asset-tracking/10028.png"
                alt="Portfolio"
                className="w-150 mx-auto"
              />
            </FadeInWhenVisible>

          </div>
          <Button variant="hover">CUSTOMIZE YOUR SOFTWARE</Button>

        </PageLayout>

      </section>

      <section className="py-10 ">
        <PageLayout className="space-y-10 text-center">
          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <div className="space-y-8">
              <FeaturesList
                fadeUp={fadeUp}
                features={ediSolutions}
                iconAlign="horizontal"

              />
            </div>
            <FadeInWhenVisible delay={0.5} className="md:block hidden">
              <img
                loading="lazy"
                src="/assets/solutions/asset-tracking/10032.png"
                alt="Portfolio"
                className="w-65 mx-auto"
              />
            </FadeInWhenVisible>

          </div>
          <Button variant="hover">Get Custom EDI Integrations</Button>

        </PageLayout>

      </section>

      <section>
        <PageLayout className="py-16 space-y-8 text-center">
          <FeaturesListOpposite
            features={applicationSupport}
          />
          <Button variant="hover">GET APPLICATION SUPPORT</Button>
        </PageLayout>
      </section>

      <section className="bg-secondary py-5">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Asset Tracking Integrations"
            description="U Tech’s experts custom-develop and provide seamless integrations with leading third-party asset tracking, monitoring, and management to streamline maintenance, reduce costs, and prevent loss."
          />
          <FeaturesList iconSize={40} features={assetIntegrationSolutions} grid3 fadeUp={fadeUp} center />
          <Button variant="hover">GET AI-POWERED ASSET TRACKING SOLUTIONS</Button>


        </PageLayout>

      </section>
      <section>
        <div className="mb-16 mt-2">
          <FaqSection faqs={Faqs} title="Frequently Asked Questions for 3D Animation Services" />
        </div>
      </section>

    </>
  )
}

export default Assettracking

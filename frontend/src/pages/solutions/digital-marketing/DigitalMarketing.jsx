import React from "react";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import {
  DriveMore,
  CustomDigitalMarketing,
  WebApps,
  TestingSolutions,
  TestSolution,
} from "./Data";
import { Button } from "@/components/ui/button";
import {
  Headline,
  TypographyH4,
  TypographyP,
  TypographyH3,
  TypographyMuted,
} from "@/custom/Typography";

const DigitalMarketing = () => {
  return (
    <div>
      {/* === HERO SECTION === */}
      <HeroSection
        title="Digital Marketing Software Development"
        description="HIRE DIGITAL MARKETING EXPERTS"
        backgroundImage="/assets/solutions/digital-marketing/picture.jpg"
        buttonText="Get App Developers"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.6}
      />

      <PageLayout className="py-10 text-center space-y-10 ">
        <Headline
          title="Drive More Revenue with Digital Marketing Software Development"
          description="Whether you require digital marketing software developers-for-hire to augment your existing in-house development team, or a newly developed digital marketing software solution to help your business drive more revenue, U Technology’s got you covered."
        />

        {/* Features split into 2 columns */}
        <FadeInWhenVisible className="space-y-8 grid grid-cols-1 md:grid-cols-3 items-- gap-10">
          <FeaturesList features={DriveMore.slice(0, 2)} />
          <FeaturesList features={DriveMore.slice(2, 4)} />
          <FeaturesList features={DriveMore.slice(4, 6)} />
        </FadeInWhenVisible>

        {/* CTA button */}
        <FadeInWhenVisible>
          <Button variant="hover">SPEAK TO MARKETING EXPERTS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      <section className="bg-secondary">
        <PageLayout className="py-16">
          {/* Intro headline */}
          <FadeInWhenVisible className="mb-10">
            <Headline
              title="Custom Digital Marketing Software Solutions"
              description="We develop full-scale digital marketing software solutions built with workflow automation modules, reporting & analysis tools, CRM & marketing automation software, competitor analysis, ERP integration, and more for startups, SMBs, and enterprise-level businesses."
            />
          </FadeInWhenVisible>

          {/* Cross-platform features and image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 space-y-12 items-center">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/solutions/digital-marketing/software.png"
                alt="Mobile App Devices"
                className="w-110 mx-auto"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <FeaturesList features={CustomDigitalMarketing} />
            </FadeInWhenVisible>
          </div>
        </PageLayout>
      </section>

      <PageLayout className="py-16">
        {/* Intro headline */}
        <FadeInWhenVisible className="mb-10">
          <Headline
            title="Custom Digital Marketing Applications"
            description="We develop custom mobile & web applications that automate data gathering from your Google ads, social media ads, email campaigns, CRM, and other channels to ultimately determine your marketing successes and failures."
          />
        </FadeInWhenVisible>

        {/* Cross-platform features and image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 space-y-12 items-center">
          <FadeInWhenVisible>
            <FeaturesList features={WebApps} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/solutions/digital-marketing/application.png"
              alt="Mobile App Devices"
              className="w-55 mx-auto"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible className="text-center">
          <Button variant="hover">Manage Your Marketing Needs</Button>
        </FadeInWhenVisible>
      </PageLayout>

      <section  className="bg-secondary">
        <PageLayout className="py-12 space-y-10 text-center">
          <Headline
            title="Custom Marketing Software Features & Functions"
            description="Our custom-tailored marketing software systems are jam-packed with every kind of feature, functionality, and integration that you could ever want in an all-in-one marketing automation platform, built to enable users to track all marketing performance metrics across their entire workspace in seconds.."
          />
          <div className="mt-16 flex flex-col lg:flex-row  items-center justify-between gap-10">
            <FeaturesList
              features={TestingSolutions.slice(0, 6)}
              fadeUp={fadeUp}
            />
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/solutions/digital-marketing/functions.png"
                alt="Tax Preparation"
                className="md:w-250 w-68"
              />
            </FadeInWhenVisible>
            <FeaturesList features={TestSolution.slice(0, 6)} fadeUp={fadeUp} />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">MAXIMIZE YOUR MARKETING EFFORTS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>
    </div>
  );
};

export default DigitalMarketing;

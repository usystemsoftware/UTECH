"use client";
import React from "react";
import PageLayout from "@/custom/PageLayout";
import HeroSection from "@/components/HeroSection";
import { IconRenderer } from "@/custom/IconRenderer";

// Typography components
import {
  Headline,
  TypographyH4,
  TypographyP,
  TypographyH3,
  TypographyMuted,
} from "@/custom/Typography";

// Features list & cards
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/CaseStudyCard";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import FaqSection from "@/custom/FaqSection";

// Data arrays
import {
  introText,
  crossPlatformText,
  mobileAppPlatforms,
  aiApplicationServices,
  aiHeadline,
  AiApiFeatures,
  enterpriseSolutionsData,
  CustomServices,
  pciDssComplianceContent,
  apiLogs,
  faqs,
  portfolioItems,
} from "./Data";

// Main component
const ApplicationDevelopment = () => {
  // Destructure compliance section content
  const { title, description, videoPath, complianceTags } =
    pciDssComplianceContent;

  return (
    <>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/assets/services/application-development/banner.jpg"
        description="Harnessing The Power of AI to Drive Innovative App Development"
        title="APPLICATION DEVELOPMENT SERVICES"
        buttonText="Get App Developers"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.6}
      />

      {/* === CROSS PLATFORM INTRO + PLATFORMS SECTION === */}
      <PageLayout className="py-16">
        {/* Intro headline */}
        <FadeInWhenVisible>
          <Headline
            title={introText.title}
            description={introText.description}
          />
        </FadeInWhenVisible>

        {/* Cross-platform features and image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 space-y-12 items-center">
          <FadeInWhenVisible className="space-y-8">
            <Headline
              title={crossPlatformText.title}
              description={crossPlatformText.description}
            />
            <FeaturesList features={mobileAppPlatforms} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/application-development/developers.png"
              alt="Mobile App Devices"
              className="w-56 sm:w-84 mx-auto"
            />
          </FadeInWhenVisible>
        </div>
      </PageLayout>

      {/* === AI-POWERED CUSTOM APP DEVELOPMENT SECTION === */}
      <section className="bg-secondary">
        <PageLayout className="py-20 text-center space-y-10 ">
          <Headline
            title={aiHeadline.title}
            description={aiHeadline.description}
          />

          {/* Features split into 2 columns */}
          <FadeInWhenVisible className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            <FeaturesList features={aiApplicationServices.slice(0, 3)} />
            <FeaturesList features={aiApplicationServices.slice(3, 6)} />
          </FadeInWhenVisible>

          {/* CTA button */}
          <FadeInWhenVisible>
            <Button variant="hover">
              GET AI-POWERED CUSTOM APP DEVELOPMENT
            </Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === APIaaS Feature Cards Section === */}
      <PageLayout className="py-16 text-center space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 text-left">
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

        {/* CTA button */}
        <FadeInWhenVisible>
          <Button variant="hover">
            GET LOAN MANAGEMENT SOFTWARE SOLUTIONS
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === ENTERPRISE-CLASS DEVELOPMENT SOLUTIONS SECTION === */}
      <section className="bg-secondary py-20 text-center">
        <PageLayout className="space-y-10">
          {/* Overview headline */}
          <Headline
            title="Build Amazing Apps with Our App Development Solutions"
            description="At TechnologU y, we provide exceptional app development..."
          />

          {/* Content with image + features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/services/application-development/solutions.png"
                alt="Time Clock App"
                className="w-56 sm:w-64 mx-auto"
              />
            </FadeInWhenVisible>

            <div className="space-y-8">
              <Headline
                title="Enterprise-Class Development Solutions"
                description="Covering every aspect of the entire enterprise app development process..."
              />

              {/* Feature list */}
              <FadeInWhenVisible>
                <FeaturesList features={enterpriseSolutionsData} />
              </FadeInWhenVisible>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* === CUSTOM SERVICE SECTION === */}
      <PageLayout className="py-20 text-center space-y-10">
        <FadeInWhenVisible className="grid-cols-1 grid md:grid-cols-2 gap-10">
          <FeaturesList features={CustomServices.slice(0, 3)} />
          <FeaturesList features={CustomServices.slice(3, 6)} />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Button variant="hover">Create Your Custom App</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === COMPLIANCE VIDEO SECTION === */}
      <section className=" bg-secondary py-20">
        <PageLayout className="bg-[#E5F8FF] p-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
            {/* Left text section */}
            <FadeInWhenVisible>
              <div>
                <TypographyH4 className="text-black font-bold mb-4">
                  {title}
                </TypographyH4>
                <TypographyP className="text-muted-foreground">
                  {description}
                </TypographyP>
              </div>
            </FadeInWhenVisible>

            {/* Right video with floating tags */}
            <FadeInWhenVisible>
              <div className="relative flex justify-center">
                <div className="relative z-10">
                  <video
                    width="300"
                    height="200"
                    controls
                    className="rounded-xl shadow-lg"
                  >
                    <source src={videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Floating compliance tags */}
                <div className="absolute inset-0 flex flex-col items-end justify-between py-2 pr-2 pointer-events-none">
                  <div className="space-y-2">
                    {complianceTags.slice(0, 2).map((tag, idx) => (
                      <div
                        key={idx}
                        className="bg-white px-4 py-1 rounded-full shadow text-sm font-semibold"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {complianceTags.slice(2, 4).map((tag, idx) => (
                      <div
                        key={idx}
                        className="bg-white px-4 py-1 rounded-full shadow text-sm font-semibold"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-[45%] translate-x-[-50%] translate-y-[80%] bg-white px-4 py-1 rounded-full shadow text-sm font-semibold">
                    {complianceTags[4]}
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </PageLayout>
      </section>

      {/* === THIRD-PARTY API FUNCTIONALITY SECTION === */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="We’ve Got Custom App Developers With On-Demand Experience"
          description="Our programmers, developers, and engineers are highly proficient..."
        />

        {/* Features with tech logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-16">
          {apiLogs.map((feature, index) => (
            <div key={index}>
              <TypographyH3>{feature?.title}</TypographyH3>
              <TypographyMuted>{feature?.description}</TypographyMuted>
              <div
                key={index}
                className="flex items-center sm:gap-12 gap-8 mt-8 flex-wrap"
              >
                {feature.logos.map((logo, index) => (
                  <img
                    key={index}
                    loading="lazy"
                    src={`/assets/services/application-development/Logos/${logo}.png`}
                    className="h-8 cursor-pointer hover:scale-105 transition-transform"
                    alt={logo}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <FadeInWhenVisible>
          <Button variant="hover">HIRE DEDICATED APP DEVELOPERS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === FAQ SECTION === */}
      <div className="mb-8">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>

      {/* === PORTFOLIO GRID SECTION === */}
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
              {/* Hover overlay */}
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

export default ApplicationDevelopment;

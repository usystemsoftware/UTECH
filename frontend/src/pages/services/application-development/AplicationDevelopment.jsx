"use client";
import React from "react";
import PageLayout from "@/custom/PageLayout";
import HeroSection from "@/components/HeroSection";
import { IconRenderer } from "@/custom/IconRenderer";
// import lodo from "../../../../public/assets/services/application-development/Logos"
import {
  Headline,
  TypographyH4,
  TypographyP,
  TypographyH3,
  TypographyMuted,
} from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/CaseStudyCard";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";

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

const ApplicationDevelopment = () => {
  const { title, description, videoPath, complianceTags } =
    pciDssComplianceContent;

  return (
    <>
      {/* HERO SECTION */}
      <HeroSection
        backgroundImage="/assets/services/application-development/banner.jpg"
        description="Harnessing The Power of AI to Drive Innovative App Development"
        title="APPLICATION DEVELOPMENT SERVICES"
        buttonText="Get App Developers"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.6}
      />

      {/* CROSS PLATFORM SECTION */}
      <PageLayout>
        <section className="py-8 px-6 max-w-7xl mx-auto text-center">
          <FadeInWhenVisible>
            <Headline
              title={introText.title}
              description={introText.description}
            />
          </FadeInWhenVisible>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div>
                <Headline
                  title={crossPlatformText.title}
                  description={crossPlatformText.description}
                />
                <div className="space-y-10 mt-8">
                  {mobileAppPlatforms.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="p-3 text-primary">
                        <IconRenderer name={item.icon} className="h-6 w-6" />
                      </div>
                      <div>
                        <TypographyH4>{item.title}</TypographyH4>
                        <TypographyP className="text-muted-foreground">
                          {item.description}
                        </TypographyP>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/assets/services/application-development/developers.png"
                  alt="Mobile App Devices"
                  className="w-56 sm:w-84"
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </PageLayout>

      {/* AI-POWERED CUSTOM DEVELOPMENT SECTION */}
      <section className="bg-secondary">
        <PageLayout className="py-20 text-center space-y-10 ">
          <FadeInWhenVisible>
            <Headline
              title={aiHeadline.title}
              description={aiHeadline.description}
            />
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left max-w-7xl mx-auto">
            {aiApplicationServices.map((item, index) => (
              <FadeInWhenVisible key={index}>
                <div className="space-y-4">
                  <div className="text-primary flex justify-center sm:justify-start">
                    <IconRenderer name={item.icon} className="h-6 w-6" />
                  </div>
                  <TypographyH4>{item.title}</TypographyH4>
                  <TypographyP className="text-muted-foreground">
                    {item.description}
                  </TypographyP>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible>
            <Button variant="hover">
              GET AI-POWERED CUSTOM APP DEVELOPMENT
            </Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      <PageLayout className="py-16 text-center space-y-10">
        {/* APIaaS Image + Feature Grid */}
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

        {/* CTA */}
        <FadeInWhenVisible>
          <Button variant="hover">
            GET LOAN MANAGEMENT SOFTWARE SOLUTIONS
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ENTERPRISE-CLASS DEVELOPMENT SOLUTIONS SECTION */}
      <section className="bg-secondary">
        <PageLayout className="py-20">
          {/* Centered Intro Headline */}
          <section className="mb-16">
            <FadeInWhenVisible>
              <div className="max-w-4xl mx-auto text-center">
                <Headline
                  title="Build Amazing Apps with Our App Development Solutions"
                  description="At U Technology, we provide exceptional app development to help you build custom applications tailored to your unique business needs. Our team of expert developers has extensive experience in Java, JavaScript, Python, C#, and C++, using cutting-edge technologies to create high-performance applications that are scalable, secure, and user-friendly. We work closely with you to understand your requirements and deliver solutions that exceed your expectations, ensuring your success in today's rapidly evolving digital landscape."
                />
              </div>
            </FadeInWhenVisible>
          </section>

          {/* Enterprise-Class Development Section */}
          <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
            {/* LEFT: Mobile Device Image */}
            <FadeInWhenVisible>
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/assets/services/application-development/solutions.png"
                  alt="Time Clock App"
                  // className="w-full max-w-xs sm:max-w-sm"
                  className="w-56 sm:w-64"
                />
              </div>
            </FadeInWhenVisible>

            {/* RIGHT: Enterprise-Class Headline + Features */}
            <FadeInWhenVisible>
              <div className="space-y-8">
                <Headline
                  title="Enterprise-Class Development Solutions"
                  description="Covering every aspect of the entire enterprise app development process, our developers build applications that provide users with an immersive, 360-degree viewing experience. This helps companies to oversee their ERP, CRM, SCM, and business objectives with ease."
                />

                <div className="space-y-8">
                  {enterpriseSolutionsData.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-muted text-primary">
                        <IconRenderer name={item.icon} className="h-6 w-6" />
                      </div>
                      <div>
                        <TypographyH4>{item.title}</TypographyH4>
                        <TypographyP className="text-muted-foreground">
                          {item.description}
                        </TypographyP>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </section>
        </PageLayout>
      </section>

      <PageLayout className="py-20 text-center space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left max-w-7xl mx-auto">
          {CustomServices.map((item, index) => (
            <FadeInWhenVisible key={index}>
              <div className="space-y-4">
                <div className="text-primary flex justify-center sm:justify-start">
                  <IconRenderer name={item.icon} className="h-6 w-6" />
                </div>
                <TypographyH4>{item.title}</TypographyH4>
                <TypographyP className="text-muted-foreground">
                  {item.description}
                </TypographyP>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible>
          <Button variant="hover">Create Your Custom App</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ApplicationDevelopment component, */}
      <section className=" bg-secondary py-20">
        <PageLayout className="py-20 bg-[#E5F8FF]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
            {/* LEFT TEXT CONTENT */}
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

            {/* RIGHT VIDEO + FLOATING TAGS */}
            <FadeInWhenVisible>
              <div className="relative flex justify-center">
                {/* VIDEO */}
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

                {/* FLOATING TAGS */}
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

      {/* ===== THIRD-PARTY API FUNCTIONALITY ===== */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="We’ve Got Custom App Developers With On-Demand Experience"
          description="Our programmers, developers, and engineers are highly proficient in all popular programming languages, frameworks, databases, and development tools."
        />

        {/* Two-Column Functionality Grid */}
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

        {/* CTA */}
        <FadeInWhenVisible>
          <Button variant="hover">HIRE DEDICATED APP DEVELOPERS</Button>
        </FadeInWhenVisible>
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

export default ApplicationDevelopment;

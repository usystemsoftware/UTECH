import React from "react";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import {
  MeetingEventSoftwareLeftFeatures,
  MeetingEventSoftwareRightFeatures,
  MeetingTransformationfedu,
  FoodBeverageTraceabilityIcons,
} from "./Data";
import {
  TypographyH5,
  TypographyMuted,
  Headline,
  TypographyH3,
} from "@/custom/Typography";
const MeetingEvents = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/industries/meeting-events/hero.jpg"
        title="CUSTOM MEETINGS & EVENT PLANNING SOFTWARE SOLUTIONS"
        description="Transform Meetings & Events With Custom AI-Powered Solutions For Seamless Experiences"
        buttonText="HIRE EVENT SOFTWARE DEVELOPERS"
        buttonLink="/FoodBeverage"
        imageFit="cover"
        overlayOpacity={0.2}
      />
      <PageLayout className="text-center py-10">
        <Headline title="Our Meetings & Events Software Development Solutions" />
        <FeaturesGrid
          leftFeatures={MeetingEventSoftwareLeftFeatures}
          rightFeatures={MeetingEventSoftwareRightFeatures}
          centerImage="/assets/industries/meeting-events/events.png"
          fadeUp={fadeUp}
          iconSize={38}
        />
      </PageLayout>

      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Custom Event Management Software Solutions"
          description="We develop custom event management software solutions to allow your teams to manage every type of event from start to finish.."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-6">
          <div className="text-start space-y-4">
            <TypographyH5>Event Management Software</TypographyH5>
            <TypographyMuted>
              We create custom event planning solutions with event registration
              tools that integrate with venue and hotel apps, budget tracking,
              staff management systems, and more.
            </TypographyMuted>
            <FeaturesList
              features={MeetingTransformationfedu}
              fadeUp={fadeUp}
            />
          </div>
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/meeting-events/phone.png"
              alt="Financial Planning Dashboard"
              className="w-60 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
        </div>
        <TypographyMuted className="text-start">
          We integrate with industry-leading event management solutions to{" "}
          <br />
          provide the ultimate user experience and streamline the event planning
          lifecycle.
        </TypographyMuted>
        {FoodBeverageTraceabilityIcons.map((feature, index) => (
          <div key={index}>
            {feature.logos && (
              <div className="flex items-center sm:gap-10 gap-6 mt-6 flex-wrap">
                {feature.logos.map((logo, idx) => (
                  <img
                    key={idx}
                    loading="lazy"
                    src={`/assets/industries/meeting-events/images/${logo}.png`}
                    className="h-8 cursor-pointer hover:scale-105 transition-transform"
                    alt={logo}
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        <FadeInWhenVisible>
          <Button variant="hover">Get Event Mgmt Solutions</Button>
        </FadeInWhenVisible>
      </PageLayout>
    </>
  );
};

export default MeetingEvents;

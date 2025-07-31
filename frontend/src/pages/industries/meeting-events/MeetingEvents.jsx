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
  MeetingFeatures,
  FoodBeverageTransformation,
  AIPoweredConstructionMeeting,
  MeetingFeaturesgive,
  MeetingEventTransformationFeatures,
  meetngManagementSolutions,
  MeetingEventAssociation,
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
      <PageLayout className="space-y-10  text-center py-12">
        <Headline
          title="Meetings & Web Conferencing Software Development"
          description="We build online meeting & web conferencing software solutions to provide effective communication & collaboration, multi-device support, and enhanced interoperability.."
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <FeaturesList features={MeetingFeatures} fadeUp={fadeUp} grid />
          <FadeInWhenVisible className="hidden md:block">
            <img
              loading="lazy"
              src="/assets/industries/meeting-events/conferencing.png"
              alt="Trading Dashboard"
              className="w-200"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">Get Meeting Mgmt Software</Button>
        </FadeInWhenVisible>
      </PageLayout>
      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Event Registration Management Software Solutions"
          description="We develop smart, flexible, and powerful event registration software solutions custom-tailored to your specific business and event management needs.."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-4">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/meeting-events/registration.png"
              alt="Food & Beverage Service Management"
              className="w-60 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <div className="text-start space-y-4">
            <TypographyH5>Event Registration Software</TypographyH5>
            <TypographyMuted>
              We engineer on-site, kiosk, online, and mobile registration
              applications with built-in customizable reporting modules and
              form-building features.
            </TypographyMuted>
            <FeaturesList
              features={FoodBeverageTransformation}
              fadeUp={fadeUp}
            />
          </div>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">Get Event Registration Solutions</Button>
        </FadeInWhenVisible>
      </PageLayout>
      <div className="bg-secondary py-12">
        <PageLayout className="text-center space-y-12">
          <Headline
            title="Smart Event Planning Software with AI"
            description="Our expert team develops AI Event solutions to enhance your events and meetings for improved functionality. Features include event planner virtual assistants, Machine Learning in event planning, and an event planning and coordination system."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            <FeaturesList features={AIPoweredConstructionMeeting.slice(0, 2)} />
            <FeaturesList features={AIPoweredConstructionMeeting.slice(2, 4)} />
          </div>
          {/* <FadeInWhenVisible>
            <Button variant="hover">
              Get AI Powered Construction Solutions
            </Button>
          </FadeInWhenVisible> */}
        </PageLayout>
      </div>
      <PageLayout className="space-y-10  text-center py-12">
        <Headline
          title="Custom Dating App Solutions"
          description="We implement custom features, functions, and capabilities into existing or newly developed dating app solutions to create a more immersive online dating experience.."
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <FadeInWhenVisible className="hidden md:block">
            <img
              loading="lazy"
              src="/assets/industries/meeting-events/developers.png"
              alt="Trading Dashboard"
              className="w-200"
            />
          </FadeInWhenVisible>
          <FeaturesList features={MeetingFeaturesgive} fadeUp={fadeUp} grid />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">Customize Your Dating App</Button>
        </FadeInWhenVisible>
      </PageLayout>
      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Custom Trade Show Software Solutions"
          description="We create custom trade show planning and management software solutions to enable attendee tracking, lead retrieval, and entry badge security verification."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <TypographyH5>Trade Show Management Software</TypographyH5>
            <TypographyMuted>
              We develop and integrate robust, feature-rich trade show
              management software solutions designed for organizing conferences,
              conventions, trade shows, and expos.
            </TypographyMuted>
            <FeaturesList
              features={MeetingEventTransformationFeatures}
              fadeUp={fadeUp}
            />
          </div>
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/meeting-events/trade.png"
              alt="Financial Planning Dashboard"
              className="w-120 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
        </div>

        <FadeInWhenVisible>
          <Button variant="hover">Get Trade Show Solutions</Button>
        </FadeInWhenVisible>
      </PageLayout>
      <PageLayout className="space-y-8 text-center">
        <Headline
          title="Lead Retrieval Application Solutions"
          description="We develop lead retrieval applications that allow businesses to capture, analyze, and categorize all of the leads retrieved from events and trade shows."
        />

        <div className="flex flex-col sm:flex-row justify-baseline gap-8 md:gap-26">
          {/* Left Features List */}
          <FeaturesList
            features={meetngManagementSolutions.slice(0, 2)}
            fadeUp={fadeUp}
          />

          {/* Center Animation */}
          <FadeInWhenVisible className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/meeting-events/laptop.png"
              alt="Mobile Analytics App"
              className="w-200"
            />
          </FadeInWhenVisible>

          {/* Right Features List */}
          <FeaturesList
            features={meetngManagementSolutions.slice(2, 4)}
            fadeUp={fadeUp}
          />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">Retrieve Leads Now</Button>
        </FadeInWhenVisible>
      </PageLayout>
      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Association Management System Development"
          description="We program custom association management software that helps associations manage finances, website updates, individual members, and association/corporate events.."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/meeting-events/confrence.png"
              alt="Association Planning Dashboard"
              className="w-90 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <div className="space-y-4">
            <TypographyH5>Association Management Solutions</TypographyH5>
            <TypographyMuted>
              We develop association management solutions that include
              configurations of dues, financial reporting capabilities,
              strategic marketing features, and more.
            </TypographyMuted>
            <FeaturesList features={MeetingEventAssociation} fadeUp={fadeUp} />
          </div>
        </div>

        <FadeInWhenVisible>
          <Button variant="hover">Get Association Mgmt Software</Button>
        </FadeInWhenVisible>
      </PageLayout>
    </>
  );
};

export default MeetingEvents;

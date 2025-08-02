import React from "react";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import FaqSection from "@/custom/FaqSection";
import {
  TypographyH5,
  TypographyMuted,
  Headline,
  TypographyH3,
} from "@/custom/Typography";
import {
  politicalSoftwareLeftFeatures,
  politicalSoftwareRightFeatures,
  gamingPoliticalCompaign,
  featTerminalPolitical,
  PoliticalManagement,
  PoliticalManagementCampaign,
  politicalExtraFeatures,
  faqs,
} from "./Data";

const PoliticalCompaign = () => {
  return (
    <>
      {/* Hero section with banner and main CTA */}
      <HeroSection
        backgroundImage="/assets/industries/political-campaign/background.jpg"
        title="POLITICAL CAMPAIGN SOFTWARE DEVELOPMENT"
        buttonText="GET POLITICAL CAMPAIGN SOFTWARE"
        buttonLink="/political-campaign-software-development"
        imageFit="cover"
        overlayOpacity={0.2}
      />

      {/* Section: Campaign Management Systems intro */}
      <PageLayout className="text-center py-10">
        <Headline
          title="Hire Experienced and Dedicated Campaign Management Systems Developers"
          description="U Tech caters to the technical needs of the political industry by delivering world-class political campaign software with integrated features for mobile voter outreach, online donation management, voter database systems, and more to improve political marketing efforts and help win more elections.."
        />
        <FeaturesGrid
          leftFeatures={politicalSoftwareLeftFeatures}
          rightFeatures={politicalSoftwareRightFeatures}
          centerImage="/assets/industries/political-campaign/combo.png"
          fadeUp={fadeUp}
          iconSize={48}
        />
      </PageLayout>

      {/* Section: AI Solutions for Political Campaigns */}
      <PageLayout className="text-center py-10 space-y-10">
        <Headline
          title="AI Solutions for Political Campaigns"
          description="Our custom AI solutions empower political campaigns with predictive modeling, chatbots, virtual assistants, fundraising optimization, and more to enhance political marketing efforts for electoral success. Discover the transformative power of AI for political campaigning."
        />
        <div className="md:grid hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeaturesList features={gamingPoliticalCompaign.slice(0, 2)} />
          <FeaturesList features={gamingPoliticalCompaign.slice(2, 4)} />
          <FeaturesList features={gamingPoliticalCompaign.slice(4, 6)} />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">SPEAK TO MARKETING EXPERTS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* Section: Marketing Automation System */}
      <PageLayout className="space-y-8 text-center">
        <Headline
          title="Marketing Automation System"
          description="Chetu’s marketing automation system solutions enable political campaign managers, PACs, advocacy & government affairs teams, grassroots organizations, and political fundraising managers to automate their interactions with voters and political donors through multiple digital channels."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div className="text-start space-y-4">
            <FeaturesList features={featTerminalPolitical} fadeUp={fadeUp} />
          </div>
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/political-campaign/automation.png"
              alt="Payment Planning Dashboard"
              className="w-130 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">GET MARKETING AUTOMATION SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* Section: Event & Resource Management Software */}
      <PageLayout className="space-y-8 py-6 text-center">
        <Headline
          title="Event & Resource Management Software"
          description="Manage your campaigns both online and at physical venues, streamlining online payment processing for political fundraising, integrating CRM solutions, and engineering booking portal systems to make running a campaign event as easy and hassle-free as possible.."
        />
        <div className="flex flex-col sm:flex-row justify-baseline gap-8 md:gap-26">
          <FeaturesList
            features={PoliticalManagement.slice(0, 2)}
            fadeUp={fadeUp}
          />
          <FadeInWhenVisible className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/political-campaign/event.png"
              alt="Mobile Analytics App"
              className="w-120"
            />
          </FadeInWhenVisible>
          <FeaturesList
            features={PoliticalManagement.slice(2, 4)}
            fadeUp={fadeUp}
          />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">GET EVENT & RESOURCE MGMT SOFTWARE</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* Section: Campaigns Management & Analysis System */}
      <PageLayout className="space-y-8 py-6 text-center">
        <Headline
          title="Campaigns Management & Analysis System"
          description="U Tech builds a full-service political campaign management software that provides campaign managers & team members with full control & visibility over campaign events, attendee registrations, campaign donor database, accounting/finances, lobbying tools, vendors, and more."
        />
        <div className="flex flex-col sm:flex-row justify-baseline gap-8 md:gap-26">
          <FeaturesList
            features={PoliticalManagementCampaign.slice(0, 2)}
            fadeUp={fadeUp}
          />
          <FadeInWhenVisible className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/political-campaign/campaign.png"
              alt="Mobile Analytics App"
              className="w-270"
            />
          </FadeInWhenVisible>
          <FeaturesList
            features={PoliticalManagementCampaign.slice(2, 4)}
            fadeUp={fadeUp}
          />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">VIEW YOUR CAMPAIGN ANALYTICS NOW</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* Section: Demographic Data Management Software */}
      <PageLayout className="space-y-10 py-10 text-center">
        <Headline
          title="Demographic Data Management Software"
          description="Chetu’s custom demographic data software is built with tools that enable campaigners to access the most up-to-date national voter list data, mover list data, and national donor list data, all corresponding with demographic info for more accurate targeting.."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <FeaturesList features={politicalExtraFeatures} fadeUp={fadeUp} />
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/political-campaign/automation.png"
              alt="Portfolio"
              className="w-120 mx-auto"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">GET DEMOGRAPHIC INSIGHTS NOW</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* FAQ Section at the bottom */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default PoliticalCompaign;

import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";

import {
  aiSportsSolutions,
  fitnessManagementSolutions,
  golfSoftwareSolutions,
  kinesiologySolutions,
  performanceTrackingSolutions,
  sportsAndFitnessSolutions,
  sportsFaqs,
  sportsHealthSolutions,
  sportsTrainingSolutions,
} from "./Data";

export default function Sports() {
  return (
    <>
      {/* === Hero Banner Section === */}
      <HeroSection
        backgroundImage="/banner/sport-banner.jpg"
        title="Sports Management Software Development"
        description="Revolutionizing Sports Management Software With AI-Driven Innovation"
        buttonText="HIRE SPORT MANAGEMENT SOFTWARE DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === Main Features Grid Section === */}
      <PageLayout className="py-10">
        <Headline
          title="Hire Experienced Sports Software Developers"
          description="U Tech has a strong history of developing custom sports management software solutions for fitness clubs, athletic programs, and sports medicine practices. We have on-demand developers to help you navigate your sports management technology challenges."
        />

        <FeaturesGridnew
          leftFeatures={sportsAndFitnessSolutions.slice(0, 3)}
          rightFeatures={sportsAndFitnessSolutions.slice(3, 6)}
          centerImage="/assets/Industries/sports/desktop-combo-sports.png"
          iconGap="md:gap-18"
        />
      </PageLayout>

      {/* === AI-Powered Sports Solutions Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Artificial Intelligence Solutions for Sports Management"
            description="U Tech leverages cutting-edge AI analytics to modernize sports management by designing intuitive wearables for customized training, personalized nutrition, and performance monitoring."
          />
          <FeaturesListOpposite features={aiSportsSolutions} />
          <ContactUsButton variant="hover">
            OPTIMIZE SPORTS SOFTWARE WITH AI
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === Athlete Performance & Analytics Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Sports Analytics & Athlete Performance Solutions"
          description="Our sports software developers build a suite of sports analytics tools designed for ultimate performance intelligence with tailor-made data capture modules for training, injury monitoring, and tactical game analysis. "
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <img
            loading="lazy"
            src="/assets/Industries/sports/sports-analytics-and-athlete-performance-solutions-1.png"
            alt="Portfolio"
            className="w-110  md:w-135 xl:w-145 2xl:w-165 mx-auto"
          />
          <FeaturesList
            features={performanceTrackingSolutions}
            iconAlign="horizontal"
          />
        </div>
        <ContactUsButton variant="hover">
          DEVELOP SPORT ANALYTICS SOFTWARE
        </ContactUsButton>
      </PageLayout>

      {/* === Fitness Club & Gym Management Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Fitness Club and Gym Management Web Platform"
            description="We engineer custom fitness & gym management software solutions from scratch at a low cost, as well as integrate, modify, and implement specific features to your existing off-the-shelf solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <FeaturesList
              center
              features={fitnessManagementSolutions.slice(0, 2)}
            />
            <img
              loading="lazy"
              src="/assets/Industries/sports/fitness-club-and-gym-management-software.png"
              alt="Portfolio"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList
              center
              features={fitnessManagementSolutions.slice(2, 4)}
            />
          </div>
          <ContactUsButton variant="hover">
            HIRE GYM MANAGEMENT SOFTWARE DEVELOPES
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === Golf Course Software Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Golf Course Management Software Development"
          description="Our cloud-based golf management systems are configurable, customizable, and intuitive for the golf industry, incorporating customized features for scheduling online tee time, live leaderboard programming, POS integration, tournament management, and so much more."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <img
            loading="lazy"
            src="/assets/Industries/sports/golf-cource-management-software-development.png"
            alt="Portfolio"
            className="md:w-110 w-76 sm:w-96 xl:w-120 2xl:w-130 mx-auto"
          />
          <FeaturesList features={golfSoftwareSolutions} grid center />
        </div>
        <ContactUsButton variant="hover">
          HIRE GOLF MANAGEMENT SOFTWARE DEVELOPER
        </ContactUsButton>
      </PageLayout>

      {/* === Sports Training Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Sports Training Software Solutions"
            description="Our robust, feature-rich, and custom-tailored sports training and management software solutions capture, organize, and translate data into valuable knowledge for coaches, athletes, teams, and sporting organizations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <FeaturesList
              features={sportsTrainingSolutions}
              iconAlign="horizontal"
            />
            <img
              loading="lazy"
              src="/assets/Industries/sports/sports-training-software-solution.png"
              alt="Portfolio"
              className="w-110 sm:w-125 md:w-145 xl:w-155 2xl:w-175 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            HIRE SPORT TRANNING SOFTWARE DEVELOPER
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === Kinesiology & Motion Analysis Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Sports Kinesiology & Motion Analysis Software"
          description="We engineer cutting-edge motion & muscle movement kinesiology software solutions to support sports institutions, educators, course curriculums, and health-related programs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <img
            loading="lazy"
            src="/assets/Industries/sports/sports-kinesiology-and-motion-analysis-software.png"
            alt="Portfolio"
            className="w-42 sm:w-52 xl:w-62 2xl:w-68 mx-auto"
          />
          <FeaturesList
            features={kinesiologySolutions}
            iconAlign="horizontal"
          />
        </div>
        <ContactUsButton variant="hover">
          OPTIMIZE SPORTS KINESIOLOGY SOFTWARE DEVELOPER
        </ContactUsButton>
      </PageLayout>

      {/* === Sports Medicine Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Sports Medicine Management Software Solutions"
            description="We fully integrate custom sports medicine systems and build sports injury tracking software to better evaluate injury statuses and overall fitness levels."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
            <FeaturesList
              features={sportsHealthSolutions}
              iconAlign="horizontal"
            />
            <img
              loading="lazy"
              src="/assets/Industries/sports/sports-medicine-management-software-solutions.png"
              alt="Portfolio"
              className="w-78 md:w-110 xl:w-120 2xl:w-130 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            DEVELOP SPORT MEDICINE MANAGEMENT SOFTWARE
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === FAQ Section === */}
      <div className="py-16">
        <FaqSection
          faqs={sportsFaqs}
          title="FAQ's About Sports Management Software"
        />
      </div>
    </>
  );
}

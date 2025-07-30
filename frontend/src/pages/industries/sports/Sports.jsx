import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
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
        backgroundImage="/assets/industries/sports/hero.jpg"
        title="Sports Management Software Development"
        description="Revolutionizing Sports Management Software With AI-Driven Innovation"
        buttonText="HIRE SPORT MANAGEMENT SOFTWARE DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.2}
      />

      {/* === Main Features Grid Section === */}
      <PageLayout className="py-10">
        <Headline
          title="Hire Experienced Sports Software Developers"
          description="Chetu has a strong history of developing custom sports management software solutions for fitness clubs, athletic programs, and sports medicine practices. We have on-demand developers to help you navigate your sports management technology challenges."
        />
        <FeaturesGrid
          leftFeatures={sportsAndFitnessSolutions.slice(0, 3)}
          rightFeatures={sportsAndFitnessSolutions.slice(3, 6)}
          centerImage="/assets/industries/sports/desktop-combo-sports.png"
          fadeUp={fadeUp}
        />
      </PageLayout>

      {/* === AI-Powered Sports Solutions Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Artificial Intelligence Solutions for Sports Management"
            description="Chetu leverages cutting-edge AI analytics to modernize sports management by designing intuitive wearables for customized training, personalized nutrition, and performance monitoring."
          />
          <FeaturesList features={aiSportsSolutions} fadeUp={fadeUp} grid />
          <FadeInWhenVisible>
            <Button variant="hover">OPTIMIZE SPORTS SOFTWARE WITH AI</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Athlete Performance & Analytics Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Sports Analytics & Athlete Performance Solutions"
          description="Our sports software developers build a suite of sports analytics tools designed for ultimate performance intelligence with tailor-made data capture modules for training, injury monitoring, and tactical game analysis. "
        />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <FadeInWhenVisible delay={0.5} className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/sports/sports-analytics-and-athlete-performance-solutions-1.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList
            fadeUp={fadeUp}
            features={performanceTrackingSolutions}
            grid
          />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">DEVELOP SPORT ANALYTICS SOFTWARE</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Fitness Club & Gym Management Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Fitness Club and Gym Management Web Platform"
            description="We engineer custom fitness & gym management software solutions from scratch at a low cost, as well as integrate, modify, and implement specific features to your existing off-the-shelf solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2">
            <FeaturesList
              fadeUp={fadeUp}
              features={fitnessManagementSolutions}
              grid
            />
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/industries/sports/fitness-club-and-gym-management-software.png"
                alt="Portfolio"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">
              HIRE GYM MANAGEMENT SOFTWARE DEVELOPES
            </Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Golf Course Software Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Golf Course Management Software Development"
          description="Our cloud-based golf management systems are configurable, customizable, and intuitive for the golf industry, incorporating customized features for scheduling online tee time, live leaderboard programming, POS integration, tournament management, and so much more."
        />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/sports/golf-cource-management-software-development.png"
              alt="Portfolio"
              className="w-96 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList fadeUp={fadeUp} features={golfSoftwareSolutions} grid />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">
            HIRE GOLF MANAGEMENT SOFTWARE DEVELOPER
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Sports Training Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Sports Training Software Solutions"
            description="Our robust, feature-rich, and custom-tailored sports training and management software solutions capture, organize, and translate data into valuable knowledge for coaches, athletes, teams, and sporting organizations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <FeaturesList fadeUp={fadeUp} features={sportsTrainingSolutions} />
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/industries/sports/sports-training-software-solution.png"
                alt="Portfolio"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">
              HIRE SPORT TRANNING SOFTWARE DEVELOPER
            </Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Kinesiology & Motion Analysis Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Sports Kinesiology & Motion Analysis Software"
          description="We engineer cutting-edge motion & muscle movement kinesiology software solutions to support sports institutions, educators, course curriculums, and health-related programs."
        />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <FadeInWhenVisible delay={0.5} className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/sports/sports-kinesiology-and-motion-analysis-software.png"
              alt="Portfolio"
              className="w-48 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList fadeUp={fadeUp} features={kinesiologySolutions} grid />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">
            OPTIMIZE SPORTS KINESIOLOGY SOFTWARE DEVELOPER
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Sports Medicine Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Sports Medicine Management Software Solutions"
            description="We fully integrate custom sports medicine systems and build sports injury tracking software to better evaluate injury statuses and overall fitness levels."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <FeaturesList fadeUp={fadeUp} features={sportsHealthSolutions} />
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/industries/sports/sports-medicine-management-software-solutions.png"
                alt="Portfolio"
                className="w-96 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">
              DEVELOP SPORT MEDICINE MANAGEMENT SOFTWARE
            </Button>
          </FadeInWhenVisible>
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

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
import { Headline } from "@/custom/Typography";

const DigitalMarketing = () => {
  return (
    <>
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

      {/* === DRIVE MORE REVENUE SECTION === */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Drive More Revenue with Digital Marketing Software Development"
          description="Whether you require digital marketing software developers-for-hire to augment your existing in-house development team, or a newly developed digital marketing software solution to help your business drive more revenue, U Technology’s got you covered."
        />

        {/* === Features Grid: DriveMore Items === */}
        <FadeInWhenVisible className="space-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeaturesList features={DriveMore.slice(0, 2)} />
          <FeaturesList features={DriveMore.slice(2, 4)} />
          <FeaturesList features={DriveMore.slice(4, 6)} />
        </FadeInWhenVisible>

        {/* === CTA Button: Marketing Experts === */}
        <FadeInWhenVisible>
          <Button variant="hover">SPEAK TO MARKETING EXPERTS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === CUSTOM DIGITAL MARKETING SOFTWARE SECTION === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10">
          <Headline
            title="Custom Digital Marketing Software Solutions"
            description="We develop full-scale digital marketing software solutions built with workflow automation modules, reporting & analysis tools, CRM & marketing automation software, competitor analysis, ERP integration, and more for startups, SMBs, and enterprise-level businesses."
          />

          {/* === Features + Image Grid: CustomDigitalMarketing === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 space-y-12 items-center">
            {/* Left: Image */}
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/solutions/digital-marketing/software.png"
                alt="Mobile App Devices"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>

            {/* Right: Feature List */}
            <FeaturesList features={CustomDigitalMarketing} />
          </div>
        </PageLayout>
      </section>

      {/* === CUSTOM APPLICATIONS SECTION === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Custom Digital Marketing Applications"
          description="We develop custom mobile & web applications that automate data gathering from your Google ads, social media ads, email campaigns, CRM, and other channels to ultimately determine your marketing successes and failures."
        />

        {/* === Features + Image Grid: WebApps === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 space-y-12 items-center">
          {/* Left: Feature List */}
          <FeaturesList features={WebApps} />

          {/* Right: Image */}
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/solutions/digital-marketing/application.png"
              alt="Mobile App Devices"
              className="md:w-55 w-32 mx-auto"
            />
          </FadeInWhenVisible>
        </div>

        {/* === CTA Button: Manage Marketing === */}
        <FadeInWhenVisible>
          <Button variant="hover">Manage Your Marketing Needs</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === SOFTWARE FEATURES & FUNCTIONS SECTION === */}
      <section className="bg-secondary py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Marketing Software Features & Functions"
            description="Our custom-tailored marketing software systems are jam-packed with every kind of feature, functionality, and integration that you could ever want in an all-in-one marketing automation platform, built to enable users to track all marketing performance metrics across their entire workspace in seconds.."
          />

          {/* === Features + Image + Features Split Grid === */}
          <div className="mt-16 flex flex-col lg:flex-row justify-between gap-10">
            {/* Left Features List: TestingSolutions */}
            <FeaturesList
              features={TestingSolutions.slice(0, 3)}
              fadeUp={fadeUp}
            />

            {/* Center Image */}
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/solutions/digital-marketing/functions.png"
                alt="Tax Preparation"
                className="md:w-250 w-68"
              />
            </FadeInWhenVisible>

            {/* Right Features List: TestSolution */}
            <FeaturesList
              features={TestingSolutions.slice(3, 6)}
              fadeUp={fadeUp}
            />
          </div>

          <FeaturesList features={TestSolution} fadeUp={fadeUp} grid />

          {/* === CTA Button: Maximize Marketing === */}
          <FadeInWhenVisible>
            <Button variant="hover">MAXIMIZE YOUR MARKETING EFFORTS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>
    </>
  );
};

export default DigitalMarketing;

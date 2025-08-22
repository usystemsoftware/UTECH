import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import { Button } from "@/components/ui/button";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Headline } from "@/custom/Typography";
import ImageNearScreen from "@/custom/ImageNearScreen";
import VideoTvPoster from "@/custom/VideoTvPoster";
import {
  agricultureFaq,
  agricultureSolutions,
  agricultureSupportSolutions,
  aiAgricultureSolutions,
  aquacultureSolutions,
  cannabisSolutions,
  droneFarmingSolutions,
  farmingSolutions,
  farmMonitoringSolutions,
  foodSafetySolutions,
  landTechSolutions,
  portfolioItems,
  tvpoasterDescription,
} from "./Data";

export default function Agriculture() {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/agriculture-banner.jpg"
        title="AGRICULTURE SOFTWARE DEVELOPMENT"
        description="U Tech’s AI-powered solutions transform agriculture, offering real-time insights and precision for increased yields and sustainable practices."
        buttonText="GET AGTECH SOLUTIONS"
        buttonLink="#"
      />

      <PageLayout className="text-center my-12">
        <Headline
          title="Hire Experienced and Dedicated AgTech Software Developers"
          description="AgTech solutions encompass innovative technologies transforming agriculture, boosting efficiency, profitability, and sustainability, while ensuring global food security. U Tech’s agricultural software development enables farmers and growers to achieve complete control and real-time visibility over their land, crops, livestock, and equipment. With our advanced technology, you can optimize your agricultural operations, increase yield, and reduce costs. Our software suite includes precision agriculture solutions and advanced analytics, all designed to enhance your agricultural productivity and profitability."
        />
        <FeaturesGridnew
          leftFeatures={agricultureSolutions.slice(0, 5)}
          rightFeatures={agricultureSolutions.slice(5, 10)}
          centerImage="/assets/industries/agriculture/main-agriculture.png"
        />
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="AI Solutions For Precision Agriculture"
            description="Our developers can implement Artificial Intelligence (AI) that analyzes data from satellites, drones, and sensors to provide real-time insights about soil conditions, moisture levels, and crop health. This data can be used to optimize irrigation, fertilization, and pest control, leading to increased yields and resource savings. Revolutionize agriculture through invaluable technology and insights that allow you to enhance productivity and resource allocation while minimizing environmental impact."
          />
          <FeaturesList features={aiAgricultureSolutions} center grid3 />

          <Button variant="hover">GET AI-POWERED AGRICULTURE SOLUTIONS</Button>
        </PageLayout>
      </section>

      <PageLayout className="text-center py-12 space-y-10">
        <Headline
          title="Land Management Software Solutions"
          description="U Tech’s land management software developers have vast agricultural industry-experience and first-hand knowledge of how to develop world-class solutions for agricultural operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/agriculture/land-management-software2.png"
              alt="Migration Planning Dashboard"
              className="mx-auto w-96 sm:w-135 2xl:w-175"
            />
          </FadeInWhenVisible>
          <FeaturesList features={landTechSolutions} iconAlign="horizontal" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 md:grid-cols-3 gap-4 items-center">
          <FeaturesList features={farmingSolutions.slice(0, 2)} center />
          <FadeInWhenVisible className="hidden md:block">
            <img
              loading="lazy"
              src="/assets/industries/agriculture/land-management-software1.png"
              alt="Mobile Analytics App"
              className="mx-auto w-46 sm:w-54 2xl:w-58"
            />
          </FadeInWhenVisible>
          <FeaturesList features={farmingSolutions.slice(2, 4)} center />
        </div>

        <Button variant="hover">GET LAND MGMT SOFTWARE DEVELOPERS</Button>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Dispensary Seed-To-Sale Software Development Services"
            description="Our seed-to-sale software solutions incorporate material requirements planning (MRP), reorder point (ROP) formulas, monitor economic order quality (EOQ) assessments, waste management analysis, and so much more."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div className="order-2 sm:order-1">
              <FeaturesList
                features={cannabisSolutions.slice(0, 3)}
                iconAlign="horizontal"
              />
            </div>
            <FadeInWhenVisible className="order-1 sm:order-2">
              <img
                loading="lazy"
                src="/assets//industries/agriculture/dispensary-seed-to-sale-software-development-services1.png"
                alt="Migration Planning Dashboard"
                className="mx-auto w-42 sm:w-52 md:w-62"
              />
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets//industries/agriculture/dispensary-seed-to-sale-software-development-services2.png"
                alt="Migration Planning Dashboard"
                className="mx-auto w-42 sm:w-52 md:w-62"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={cannabisSolutions.slice(3, 6)}
              iconAlign="horizontal"
            />
          </div>
          <Button variant="hover">GET SEED-TO-SALE SOFTWARE DEVELOPERS</Button>
        </PageLayout>
      </section>

      <section className="py-16 bg-white flex flex-col gap-6 justify-center items-center">
        <Headline
          title="Smart Farming Software Development Services"
          description="U Tech develops smart farming software that allows smart farming technologies to interface with existing monitoring & sensor software for added interoperability."
        />
        <ImageNearScreen
          features={farmMonitoringSolutions}
          src="/assets/industries/agriculture/precision-agriculture-software.png"
          imageAlign="left"
        />
        <Button variant="hover">
          GET PRECISION AGRICULATURE SOFTWARE DEVELOPERS
        </Button>
      </section>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Agriculture Drone Software"
            description="U Tech leverages advanced machine learning software tools to develop custom agriculture drone software that enables UAV drones to spray pesticides, herbicides, and fertilizer."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div className="order-2 sm:order-1">
              <FeaturesList
                features={droneFarmingSolutions.slice(0, 3)}
                iconAlign="horizontal"
              />
            </div>
            <FadeInWhenVisible className="order-1 sm:order-2">
              <img
                loading="lazy"
                src="/assets//industries/agriculture/agriculture-drone-software-development-services1.png"
                alt="Migration Planning Dashboard"
                className="mx-auto w-42 sm:w-52 md:w-62"
              />
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible className="md:block sm:hidden block">
              <img
                loading="lazy"
                src="/assets//industries/agriculture/agriculture-drone-software-solutions2.png"
                alt="Migration Planning Dashboard"
                className="mx-auto w-42 sm:w-62"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={droneFarmingSolutions.slice(3, 8)}
              center
              grid
            />
          </div>
          <Button variant="hover">GET DRONE SOFTWARE DEVELOPERS</Button>
        </PageLayout>
      </section>

      <VideoTvPoster information={tvpoasterDescription} />

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Food Safety & Compliance Software Solutions"
            description="Our food safety & compliance software solutions adhere to USDA, FDA, FSMA, EPA, FSIS, and all other regulatory standards associated with the food safety, environmental, & health industries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="order-2 md:order-1">
              <FeaturesList
                features={foodSafetySolutions.slice(0, 3)}
                iconAlign="horizontal"
              />
            </div>
            <FadeInWhenVisible className="order-1 md:order-2">
              <img
                loading="lazy"
                src="/assets//industries/agriculture/food-safety-&-compliance-software-development1.png"
                alt="Migration Planning Dashboard"
                className="mx-auto w-96 sm:w-145 2xl:w-175"
              />
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 items-center gap-6">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets//industries/agriculture/food-safety-&-compliance-software-development2.png"
                alt="Migration Planning Dashboard"
                className="mx-auto w-96 sm:w-155 2xl:w-185"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={foodSafetySolutions.slice(3, 8)}
              iconAlign="horizontal"
            />
          </div>
          <Button variant="hover">GET FOOD SAFETY SOFTWARE DEVELOPERS</Button>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-10">
        <Headline
          title="Aquaculture Software Solutions"
          description="U Tech’s aquaculture software solutions incorporate embedded sensors, ID tags, and more to allow users to breed, harvest, and track their entire aquaculture population."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div className="order-2 sm:order-1">
            <FeaturesList
              features={aquacultureSolutions.slice(0, 3)}
              iconAlign="horizontal"
            />
          </div>
          <FadeInWhenVisible className="order-1 sm:order-2">
            <img
              loading="lazy"
              src="/assets//industries/agriculture/aquaculture-software-solutions-laptop1.png"
              alt="Migration Planning Dashboard"
              className="mx-auto w-96 sm:w-145 2xl:w-185"
            />
          </FadeInWhenVisible>
        </div>
      </PageLayout>

      <section className="text-center pb-16">
        <ImageNearScreen
          features={aquacultureSolutions.slice(3, 8)}
          src="/assets/industries/agriculture/aquaculture-software-solutions-new-graphic.png"
          imageAlign="left"
          imgClass="2xl:w-200"
        />

        <Button variant="hover">GET AQUACULTURE SOFTWARE DEVELOPERS</Button>
      </section>

      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="IT Support Services for Agriculture Software"
            description="U Tech’s IT specialists and support team design, implement, and monitor the performance of today’s agriculture software solutions. Our support services team provides scalable solutions to exceed evolving demands and offers continuous guidance and troubleshooting while mitigating workflow interruption."
          />

          <FeaturesListOpposite
            features={agricultureSupportSolutions}
            iconAlign="horizontal"
          />
        </PageLayout>
      </section>

      {/* === FAQ SECTION === */}
      <div className="py-16">
        <FaqSection
          faqs={agricultureFaq}
          title="Agriculture Software Development: FAQ's"
        />
      </div>

      {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
      <PortfolioGrid items={portfolioItems} />
    </>
  );
}

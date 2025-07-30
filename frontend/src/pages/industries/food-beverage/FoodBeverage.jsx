import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { FeaturesGrid } from "@/components/FeaturesGridCard";

import {
  TypographyH5,
  TypographyMuted,
  Headline,
  TypographyH3,
} from "@/custom/Typography";
import {
  FoodBeverageSoftwareLeftFeatures,
  FoodBeverageSoftwareRightFeatures,
  FoodBeverageTransformationfedu,
  FoodBeverageTransformation,
  FoodBeverageFeture,
  FoodBeverageSoftware,
  FoodBeverageInventory,
  FoodBeverageTraceability,
} from "./Data";

// Main Component
const FoodBeverage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/assets/industries/food-beverage/building.jpg"
        title="FOOD AND BEVERAGE SOFTWARE DEVELOPMENT"
        buttonText="HIRE F&B SOFTWARE DEVELOPERSS"
        buttonLink="/FoodBeverage"
        imageFit="cover"
        overlayOpacity={0.2}
      />

      {/* Food & Beverage Software Development Solutions */}
      <PageLayout className="text-center py-10">
        <Headline
          title="Food & Beverage Software Development Solutions"
          description="We develop custom software solutions used in the food & beverage industry, designed and configured to boost delivery efficiency, drive sales, and maximize profitability."
        />
        <FeaturesGrid
          leftFeatures={FoodBeverageSoftwareLeftFeatures}
          rightFeatures={FoodBeverageSoftwareRightFeatures}
          centerImage="/assets/industries/food-beverage/foodbeverage.png"
          fadeUp={fadeUp}
          iconSize={38}
        />
      </PageLayout>

      {/* Food & Beverage Service Management Software Section */}
      <section className="bg-secondary">
        <PageLayout className="space-y-8 py-12 text-center">
          <Headline
            title="Food & Beverage Service Management Software"
            description="We develop food service ordering software solutions built to facilitate menu, inventory, food cost, kitchen, catering, report tracking, and more."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-4">
            {/* Left Image */}
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/industries/food-beverage/software.png"
                alt="Food & Beverage Service Management"
                className="w-130 mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>

            {/* Right Content with Features */}
            <div className="text-start space-y-4">
              <TypographyH5>Legal Management Workflow Automation</TypographyH5>
              <TypographyMuted>
                We develop Legal Management Software that streamlines workflows
                through advanced automation...
              </TypographyMuted>
              <FeaturesList
                features={FoodBeverageTransformationfedu}
                fadeUp={fadeUp}
              />
            </div>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">GET F&B MGMT SOLUTIONS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* Food & Beverage ERP Solutions Section */}
      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Food & Beverage Service Management Software"
          description="We develop food service ordering software solutions..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-4">
          <FeaturesList features={FoodBeverageTransformation} fadeUp={fadeUp} />
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/food-beverage/systems.png"
              alt="Food & Beverage ERP System"
              className="w-40 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">GET F&B ERP SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* Food & Beverage Quality Management Section */}
      <section className="bg-secondary">
        <PageLayout className="space-y-8 py-12 text-center">
          <Headline
            title="Food & Beverage Quality Management Software"
            description="Utilize trigger-based automation to monitor moisture, acidity..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-4">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/industries/food-beverage/management.png"
                alt="Food & Beverage Quality Management"
                className="w-110 mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
            <FeaturesList features={FoodBeverageFeture} fadeUp={fadeUp} />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">GET F&B QA SOLUTIONS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* Food & Beverage Distribution Section */}
      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Food & Beverage Distribution Software"
          description="Custom food distribution software streamlines inventory management..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-4">
          <FeaturesList features={FoodBeverageSoftware} fadeUp={fadeUp} />
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/food-beverage/distribution.png"
              alt="Food & Beverage Distribution"
              className="w-110 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">GET F&B DISTRIBUTION SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* Food & Beverage Inventory Management Section */}
      <section className="bg-secondary">
        <PageLayout className="space-y-8 py-12 text-center">
          <Headline
            title="Food & Beverage Inventory Management Software"
            description="Custom food & beverage inventory management solutions offer detailed SKU..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-4">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/industries/food-beverage/inventory.png"
                alt="Food & Beverage Inventory Management"
                className="w-110 mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
            <FeaturesList features={FoodBeverageInventory} fadeUp={fadeUp} />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">GET F&B INVENTORY MGMT SOLUTIONS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* USDA & FDA Compliance Section */}
      <PageLayout className="py-12 bg-cyan-50 my-12 flex flex-col sm:flex-row justify-between items-center md:space-x-8">
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <TypographyH3 className="text-black">
            WE ENSURE YOUR COMPLIANCE WITH THE USDA & FDA
          </TypographyH3>
          <TypographyMuted>
            U Technology's food and beverage software development,
            integration...
          </TypographyMuted>
        </div>

        {/* Compliance Video with Labels */}
        <FadeInWhenVisible>
          <div className="flex-1 relative flex items-center justify-center sm:ml-20">
            <video
              controls
              className="w-full max-w-md rounded-lg shadow-lg"
              poster="https://via.placeholder.com/600x400?text=Video+Thumbnail"
            >
              <source src="your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Label Badges */}
            <div className="absolute -left-10 top-5 hidden md:block">
              <div className="mb-6 px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                USDA
              </div>
            </div>
            <div className="absolute -left-10 bottom-5 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                FDA
              </div>
            </div>
            <div className="absolute -right-10 top-24 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                HACCP
              </div>
            </div>
            <div className="absolute -right-10 bottom-5 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                cGMP
              </div>
            </div>
            <div className="absolute -right-10 bottom-5 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                FSIS
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </PageLayout>

      {/* Food Traceability Section */}
      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Food Traceability Software Services"
          description="Food traceability software solutions empower F&B producers to track-and-trace food..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center gap-4">
          <FeaturesList features={FoodBeverageTraceability} fadeUp={fadeUp} />
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/food-beverage/development.png"
              alt="Food & Beverage Traceability"
              className="w-110 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">GET F&B TRACEABILITY SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>
    </>
  );
};

export default FoodBeverage;

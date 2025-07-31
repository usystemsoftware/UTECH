import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { TypographyH5, TypographyMuted, Headline } from "@/custom/Typography";
import {
  mobileRetailSolutions,
  retailAiSolutions,
  retailCustomerSolutions,
  retailEcommerceSolutions,
  retailFaqs,
  retailSoftwareSolutions,
  retailSolutions,
  shoppingCartSoftwares,
  shoppingCartSolutions,
} from "./Data";

export default function Retail() {
  return (
    <>
      {/* === Hero Banner Section === */}
      <HeroSection
        backgroundImage="/banner/retail-banner.jpg"
        title="RETAIL SOFTWARE DEVELOPMENT"
        buttonText="GET RETAIL SOFTWARE DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === Core Retail Solutions Overview with Center Image === */}
      <FeaturesGrid
        leftFeatures={retailSolutions.slice(0, 3)}
        rightFeatures={retailSolutions.slice(3, 6)}
        centerImage="/assets/industries/retail/retail-banner-3.png"
        fadeUp={fadeUp}
      />

      {/* === Experienced Retail Developers Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="We Have Retail Software Developers with Industry-Experience"
            description="Chetu, an retail software development company provides custom retail software development solutions for brick and mortar, e-commerce, c-store & grocery, dealerships, shopping cart, and mobile systems."
          />

          <div className="block md:hidden">
            <FeaturesList
              features={retailSoftwareSolutions}
              fadeUp={fadeUp}
              grid
            />
          </div>

          {/* Retail Software Capabilities Grid */}
          <div className="md:grid hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <FeaturesList
              features={retailSoftwareSolutions.slice(0, 2)}
              fadeUp={fadeUp}
            />
            <FeaturesList
              features={retailSoftwareSolutions.slice(2, 4)}
              fadeUp={fadeUp}
            />
            <FeaturesList
              features={retailSoftwareSolutions.slice(4, 6)}
              fadeUp={fadeUp}
            />
          </div>

          {/* CTA Button */}
          <FadeInWhenVisible>
            <Button variant="hover">GET RETAIL SOFTWARE SOLUTIONS</Button>
          </FadeInWhenVisible>

          {/* Developer Experience Image */}
          <FadeInWhenVisible className="hidden md:block">
            <img
              src="/assets/industries/retail/we-have-software-developers-with-retail-industry-experience.png"
              alt="Accounting Dashboard"
              loading="lazy"
              className="w-[50%] mx-auto"
            />
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === AI-Powered Retail Solutions Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Custom AI-Powered Retail Solutionss"
          description="We leverage the power of artificial intelligence (AI) to develop innovative solutions for all sectors of retail. These AI-powered technology solutions provide powerful avenues for modernization and optimization."
        />

        <div className="block md:hidden">
          <FeaturesList features={retailAiSolutions} fadeUp={fadeUp} grid />
        </div>

        {/* AI Retail Features */}
        <div className="md:grid hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <FeaturesList
            features={retailAiSolutions.slice(0, 2)}
            fadeUp={fadeUp}
          />
          <FeaturesList
            features={retailAiSolutions.slice(2, 4)}
            fadeUp={fadeUp}
          />
          <FeaturesList
            features={retailAiSolutions.slice(4, 6)}
            fadeUp={fadeUp}
          />
        </div>

        {/* CTA Button */}
        <FadeInWhenVisible>
          <Button variant="hover">GET AI-POWERED RETAIL SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Retail & Wholesale Software Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Custom Retail & Wholesale Software Development"
          description="We develop custom retail & wholesale software solutions as full-featured retail systems or integrated modules for corporate infrastructures. "
        />

        {/* Image and Customer-Facing Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/retail/ar-software-development.png"
              alt="Portfolio"
              className="w-48 mx-auto"
            />
          </FadeInWhenVisible>

          <FeaturesList
            fadeUp={fadeUp}
            features={retailCustomerSolutions}
            grid
          />
        </div>

        {/* CTA Button */}
        <FadeInWhenVisible>
          <Button variant="hover">HIRE RETAIL SOFTWARE DEVELOPES</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === E-Commerce Software Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom E-Commerce Software Solutions"
            description="We deliver custom e-commerce software solutions, leveraging industry-leading tools to create the ideal shopping experience."
          />

          {/* Text + Feature List + Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
            {/* Features */}
            <div className="text-start space-y-6">
              <TypographyH5>E-Commerce Software Solutions</TypographyH5>
              <TypographyMuted className="mb-8">
                We engineer mobile-responsive e-commerce software solutions that
                offer automated synchronization of your physical inventory with
                your e-commerce store.
              </TypographyMuted>
              <FeaturesList
                fadeUp={fadeUp}
                features={retailEcommerceSolutions}
              />
            </div>

            {/* Image */}
            <FadeInWhenVisible delay={0.5} className="sm:block hidden">
              <img
                loading="lazy"
                src="/assets/industries/retail/custom-e-commerce-software-solutions.png"
                alt="Portfolio"
                className="w-110 mx-auto"
              />
            </FadeInWhenVisible>
          </div>

          {/* CTA Button */}
          <FadeInWhenVisible>
            <Button variant="hover">GET RETAIL E-COMMERCE SOLUTIONS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Shopping Cart Software Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Custom Shopping Cart Software Solutions"
          description="We harness the power of industry-leading tools to develop shopping cart platforms that provide catalog features and branded category management."
        />

        {/* Image + Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
          <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/retail/custom-shopping-cart-software-solutions.png"
              alt="Portfolio"
              className="w-96 mx-auto"
            />
          </FadeInWhenVisible>

          <div className="text-start space-y-6">
            <TypographyH5>Shopping Cart Solutions</TypographyH5>
            <TypographyMuted className="mb-8">
              We create powerful, mobile-responsive shopping cart solutions for
              all types of retail businesses, focusing on providing the ultimate
              shopping experience.
            </TypographyMuted>
            <FeaturesList fadeUp={fadeUp} features={shoppingCartSolutions} />
            <TypographyMuted>
              We leverage top shopping cart software solutions, like ZenCart,
              OpenCart, and Weebly, and integrate them into your current
              e-commerce store.
            </TypographyMuted>

            {/* Tool Logos */}
            <div className="flex items-center flex-wrap gap-6 mt-6">
              {shoppingCartSoftwares.map((item, index) => (
                <FadeInWhenVisible
                  key={index}
                  delay={0.5}
                  className="md:block hidden"
                >
                  <img
                    loading="lazy"
                    src={`/assets/industries/retail/shopping-software/${item?.img}.png`}
                    alt={item.label}
                    className="mx-auto"
                  />
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <FadeInWhenVisible>
          <Button variant="hover">GET SHOPPING CARD SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Mobile Retail Software Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Mobile E-Commerce Solutions"
            description="We develop customer-facing and employee-facing mobile e-commerce application solutions built with customizable themes and templates."
          />

          {/* Text + Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
            <div className="text-start space-y-6">
              <TypographyH5>Mobile E-Commerce Solutions</TypographyH5>
              <TypographyMuted className="mb-8">
                We create mobile e-commerce solutions for customers, wholesale
                distributors, and retail companies, mobilizing enterprises with
                advanced automation & streamlined approaches.
              </TypographyMuted>
              <FeaturesList fadeUp={fadeUp} features={mobileRetailSolutions} />
            </div>
            <FadeInWhenVisible delay={0.5} className="sm:block hidden">
              <img
                loading="lazy"
                src="/assets/industries/retail/e-commerce-automation.png"
                alt="Portfolio"
                className="w-48 mx-auto"
              />
            </FadeInWhenVisible>
          </div>

          {/* CTA Button */}
          <FadeInWhenVisible>
            <Button variant="hover">GET MOBILE RETAIL SOLUTIONS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Retail FAQ Section === */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={retailFaqs} title="FAQ's" />
      </div>
    </>
  );
}

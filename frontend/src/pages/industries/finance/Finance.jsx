import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import PageLayout from "@/custom/PageLayout";
import ContactUsButton from "@/custom/ContactUsButton";
import { TypographyH3, TypographyMuted, Headline } from "@/custom/Typography";
import {
  leftFeatures,
  rightFeatures,
  aiBenefits,
  accountingFeatures,
  portfolioFeatures,
  planningFeatures,
  insuranceFeatures,
  factoringFeatures,
  supportFeatures,
  faqs,
  testimonials,
  taxFeatures,
} from "./Data";
import IntigrateWith from "@/custom/IntigrateWith";

const Finance = () => {
  return (
    <>
      {/* Banner */}
      <HeroSection
        backgroundImage="/banner/finance-banner.jpg"
        title="FINANCIAL SOFTWARE DEVELOPMENT SERVICES"
        description="Transforming banking with AI, fraud detection, wealth management & more."
        buttonText="GET FINTECH DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.2}
      />

      {/* Features Grid */}
      <PageLayout className="text-center my-12 space-y-8">
        <Headline
          title="U Technology’s Financial Software Development Services"
          description="U Technology’s custom financial software development services cater to the finance industry, providing custom-tailored solutions for accounting, portfolio management, financial planning, insurance, and taxes."
        />
        <FeaturesGridnew
          leftFeatures={leftFeatures}
          rightFeatures={rightFeatures}
          centerImage="/assets/industries/finance/combo-finance.png"
        />
        <ContactUsButton variant="hover">
          CUSTOMIZE YOUR BANKING SOLUTION NOW
        </ContactUsButton>
      </PageLayout>

      {/* AI Benefits */}
      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Optimizing Finance with Artificial Intelligence"
            description="With the ever-evolving landscape of financial services becoming increasingly complex and digital, AI is a game-changer. U Technology’s Financial Software Development Services are here to help you transform your operations, improve your customer experiences, and aid in strategic decision-making."
          />
          <FeaturesList features={aiBenefits} grid3 center />

          <ContactUsButton variant="hover">
            GET AI-POWERED FINANCIAL SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Accounting Section */}
      <PageLayout className="text-center space-y-8 my-12">
        <Headline
          title="Custom Accounting Software Development"
          description="U Technology’s custom accounting software development services include API programming & integrations, AIS architecture, bookkeeping app development, and much more."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <img
            src="/assets/industries/finance/accounting-development.png"
            alt="Accounting Dashboard"
            loading="lazy"
            className="w-96 sm:w-120 xl:w-135 2xl:w-145 mx-auto"
          />
          <FeaturesList features={accountingFeatures} iconAlign="horizontal" />
        </div>
        <TypographyMuted>
          U Technology integrates your current accounting management system with
          industry-leading ERP and bookkeeping solutions, including:
        </TypographyMuted>
        <IntigrateWith
          title="Integrate with Leading Accounting Platforms"
          description="Sync your financial data with top financial tools for better efficiency and accuracy."
        />
        <ContactUsButton variant="hover">
          GET ACCOUNTING SOFTWARE SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      {/* Portfolio Section */}
      <section className="py-16 bg-secondary space-y-8 text-center">
        <Headline
          title="Custom Portfolio Management Software Development"
          description="U Technology’s custom portfolio management software solutions encompass everything from risk analysis and investments to stock trading apps and fund management in a centralized platform."
        />
        <PageLayout className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          <FeaturesList
            features={portfolioFeatures}
            iconSize={36}
            iconAlign="horizontal"
          />
          <img
            loading="lazy"
            src="/assets/industries/finance/portfolio-development.png"
            alt="Portfolio"
            className="w-135 xl:w-145 2xl:w-165 mx-auto"
          />
        </PageLayout>
        <ContactUsButton variant="hover">
          GET PORTFOLIO MGMT SOFTWARE SOLUTIONS
        </ContactUsButton>
      </section>

      {/* Planning Section */}
      <section className="py-16">
        <PageLayout className="text-center space-y-8">
          <Headline
            title="Custom Financial Planning Software Development"
            description="U Technology’s custom financial planning software solutions streamline day-to-day processes, including invoicing, payment processing, audit archiving, report generation, and more."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <img
              loading="lazy"
              src="/assets/industries/finance/planning-development.png"
              alt="Financial Planning Dashboard"
              className="w-78 sm:w-110 xl:w-120 2xl:w-125 mx-auto"
            />
            <FeaturesList features={planningFeatures} grid center />
          </div>
          <ContactUsButton variant="hover">
            GET FINANCIAL PLANNING SOFTWARE SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Compliance Section */}
      <PageLayout className="py-12 bg-cyan-50 my-12 flex flex-col sm:flex-row justify-between items-center md:space-x-8">
        <div className="flex-1 space-y-4">
          <TypographyH3 className="text-black">
            WE ENSURE YOU A 100% COMPLIANCE WITH THE IRS & FASB!
          </TypographyH3>
          <TypographyMuted>
            U Technology's finance software development experts comply with
            regulatory standards including anti-money laundering and consumer
            protection standards such as Financial Accounting Standards Boards
            (FASB), SOX, Dodd-Frank, the Securities Act of 1933, and Payment
            Application Data Security Standard (PA-DSS).
          </TypographyMuted>
        </div>
        <div>
          <div className="flex-1 relative flex items-center justify-center sm:ml-20">
            <video
              controls
              className="w-full max-w-md rounded-lg shadow-lg"
              poster="https://via.placeholder.com/900x600?text=Video+Thumbnail"
            >
              <source src="your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Labels */}
            <div className="absolute -left-10 top-5 hidden md:block">
              <div className="mb-6 px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                FASB
              </div>
            </div>
            <div className="absolute -left-10 bottom-5 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                SOX
              </div>
            </div>
            <div className="absolute -right-10 top-24 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                PA-Dss
              </div>
            </div>
            <div className="absolute -right-10 bottom-5 hidden md:block">
              <div className="px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                IRS
              </div>
            </div>
          </div>
        </div>
      </PageLayout>

      {/* Insurance Section */}
      <section className="py-16 bg-secondary text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Custom Insurance Software Development"
            description="U Technology’s custom insurance software solutions ensures success-driven insurance automation to help insurance companies drive momentum and drive productivity."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <FeaturesList features={insuranceFeatures} grid center />
            <img
              loading="lazy"
              src="/assets/industries/finance/insurance-development.png"
              alt="Insurance Dashboard"
              className="w-96 sm:w-120 xl:w-135 2xl:w-145 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            GET INSURANCE SOFTWARE SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Tax Preparation Section */}
      <section className="py-12 space-y-10 text-center">
        <Headline
          title="Custom Tax Preparation Software Development"
          description="U Technology’s custom tax prep software solutions support the preparation, calculation, and reporting of personal and business taxes."
        />
        <PageLayout className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            loading="lazy"
            src="/assets/industries/finance/preparation-development.png"
            alt="Tax Preparation"
            className="w-145 xl:w-155 2xl:w-165 mx-auto"
          />
          <FeaturesList features={taxFeatures} iconAlign="horizontal" />
        </PageLayout>
        <ContactUsButton variant="hover">
          GET TAX PREP SOFTWARE SOLUTIONS
        </ContactUsButton>
      </section>

      {/* Factoring Section */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Tailored Factoring Software Development Solutions"
          description="Leverage U Technology's profound financial software development expertise to drive your business forward with advanced factoring solutions. Our innovative services are meticulously designed to streamline your financial processes and set you apart in the competitive landscape."
        />
        <FeaturesListOpposite features={factoringFeatures} grid center />
        <ContactUsButton variant="hover">
          GET FACTORING SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      {/* Support Section */}
      <section className="py-16 space-y-8 bg-seconadry text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Tailored Factoring Software Development Solutions"
            description="Leverage U Technology's profound financial software development expertise to drive your business forward with advanced factoring solutions. Our innovative services are meticulously designed to streamline your financial processes and set you apart in the competitive landscape."
          />
          <FeaturesListOpposite features={supportFeatures} grid />
          <ContactUsButton variant="hover">
            GET FINANCE SOFTWARE SUPPORT
          </ContactUsButton>
        </PageLayout>

        {/* Testimonials */}
        <TestimonialSection testimonials={testimonials} />
      </section>

      {/* FAQ Section */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default Finance;

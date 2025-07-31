import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { TypographyH4, TypographyMuted, Headline } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import {
  BankingACHfeatures,
  BankingAtmFeatures,
  BankingCoreFeatures,
  BankingCustomEMVServices,
  BankingFaqs,
  BankingSoftwareAIFeatures,
  BankingSoftwareLeftFeatures,
  BankingSoftwareRightFeatures,
  BankingSupportItems,
  CustomLoanServicingfeatures,
  GetMobileBankingOnlineSoftwareSolutions,
  GetMobileBankingSoftwareSolutions,
} from "./Data";

export const Banking = () => (
  <>
    <HeroSection
      backgroundImage="/banner/new-banking-banner.jpg"
      title="BANKING SOFTWARE DEVELOPMENT"
      description="Transforming banking with AI, fraud detection, wealth management & more."
      buttonText="Hire Banking Software Developers"
      buttonLink="/contact"
      imageFit="cover"
      overlayOpacity={0.2}
    />

    {/* Features Grid */}
    <PageLayout className="text-center py-16">
      <Headline
        title="Custom Banking Software Development"
        description="U Technology’s team of expert developers cater to the technical needs of the ever-evolving banking sector by offering high quality software solutions that transform your core environment to streamline banking & financial workflows."
      />
      <FeaturesGrid
        leftFeatures={BankingSoftwareLeftFeatures}
        rightFeatures={BankingSoftwareRightFeatures}
        centerImage="/assets/industries/banking/contentBanking.png"
        fadeUp={fadeUp}
        iconSize={38}
      />
      <FadeInWhenVisible>
        <Button variant="hover" className="mt-8">
          CUSTOMIZE YOUR BANKING SOLUTION NOW
        </Button>
      </FadeInWhenVisible>
    </PageLayout>

    {/* AI Features */}
    <section className="py-16 bg-secondary text-center">
      <PageLayout className="space-y-8">
        <Headline
          title="Transforming the Banking Industry with AI-Powered Solutions"
          description="Following best practices, we harness the power of Artificial Intelligence (AI) in our financial software development process to build transformative solutions for the Banking industry. Our AI-driven software solution experts develop cutting-edge capabilities such as advanced fraud detection, AI-enhanced credit assessment, and AI-enhanced financial forecasting."
        />
        <div className="block md:hidden">
          <FeaturesList
            features={BankingSoftwareAIFeatures}
            fadeUp={fadeUp}
            iconSize={40}
            grid
          />
        </div>
        <div className="md:grid grid-cols-1 hidden sm:grid-cols-3 md:gap-6 xl:gap-16 items-center mt-8">
          <FeaturesList
            features={BankingSoftwareAIFeatures.slice(0, 2)}
            fadeUp={fadeUp}
            iconSize={40}
          />
          <FeaturesList
            features={BankingSoftwareAIFeatures.slice(2, 4)}
            fadeUp={fadeUp}
            iconSize={40}
          />
          <FeaturesList
            features={BankingSoftwareAIFeatures.slice(4, 6)}
            fadeUp={fadeUp}
            iconSize={40}
          />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover" className="mt-8">
            Get AI-Powered Banking Software Solutions
          </Button>
        </FadeInWhenVisible>
      </PageLayout>
    </section>

    {/* Loan Servicing Section */}
    <PageLayout className="my-10 text-center space-y-8">
      <Headline
        title="Custom Loan Servicing & Origination Solutions"
        description="U Technology’s custom loan servicing and origination personalized solutions handle underwriting, origination, disbursement, servicing, amortization, processing, and so much more for financial services and institutions."
      />
      <FeaturesList
        features={CustomLoanServicingfeatures}
        fadeUp={fadeUp}
        iconSize={38}
        image="/assets/industries/banking/softwareSolutions.png"
        imageClass="w-135"
        reverse
      />
      <FadeInWhenVisible>
        <Button variant="hover">Get Loan Management Software Solutions</Button>
      </FadeInWhenVisible>
    </PageLayout>

    {/* Mobile Banking Section */}
    <section className="py-12 space-y-10 bg-secondary text-center">
      <Headline
        title="Custom Mobile Banking Software Solutions"
        description="U Technology makes it possible for mobile banking software providers to customize features, such as electronic bill payments, remote check deposits, P2P payments, fund transfers between accounts, text messaging, and statement downloading & printing."
      />
      <PageLayout className="grid grid-cols-1 sm:grid-cols-2 items-center">
        <FeaturesList
          features={GetMobileBankingSoftwareSolutions}
          fadeUp={fadeUp}
          iconSize={36}
        />
        <FadeInWhenVisible delay={0.4} className="hidden sm:block">
          <img
            loading="lazy"
            src="/assets/industries/banking/Phone.png"
            alt="Mobile Banking App"
            className="w-56 mx-auto"
          />
        </FadeInWhenVisible>
      </PageLayout>
      <FadeInWhenVisible>
        <Button variant="hover">Get Mobile Banking Software Solutions</Button>
      </FadeInWhenVisible>
    </section>

    {/* Online Banking Section */}
    <PageLayout className="py-10 text-center space-y-10">
      <Headline
        title="Custom Online Banking Software Systems"
        description="U Technology’s financial software development services create robust, straightforward customizations to online banking systems for brick-and-mortar and FinTech companies of any size, built with incorporated branding for enhanced consistency & visibility."
      />
      <FeaturesList
        features={GetMobileBankingOnlineSoftwareSolutions}
        fadeUp={fadeUp}
        iconSize={36}
        image="/assets/industries/banking/softwareSolutions.png"
        imageClass="w-135 "
        reverse
      />
      <FadeInWhenVisible>
        <Button variant="hover" className="mt-8">
          Get Online Banking Software Solution
        </Button>
      </FadeInWhenVisible>
    </PageLayout>

    {/* Compliance Section */}
    <PageLayout className="flex flex-col sm:flex-row bg-cyan-50 p-6 items-center justify-between md:gap-12">
      <div className="flex-1 space-y-3">
        <TypographyH4>
          U Technology ENSURES 100% PCI-DSS COMPLIANCE
        </TypographyH4>
        <TypographyMuted>
          U Technology’s banking software developers ensure your software
          complies with the strict regulatory standards on anti-money laundering
          and consumer protection standards. This includes the Payment Card
          Industry Security Standards Council (PCI SSC), Payment Card Industry
          Data Security Standard (PCI-DSS), and Payment Application Data
          Security Standard (PA-DSS). Also, Payment Application-Qualified
          Security Accessors (PA-QSA), SOX, Dodd-Frank, Check 21, and the
          Securities Act of 1933.
        </TypographyMuted>
      </div>
      <FadeInWhenVisible>
        <div className="flex-1 relative flex items-center justify-center ml-0 md:ml-20">
          <video
            controls
            className="w-full max-w-md rounded-lg shadow-lg"
            poster="https://via.placeholder.com/600x400?text=Video+Thumbnail"
          >
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Labels */}
          {["PCI-DSS", "PA-DSS", "PCI SSC", "SOX", "PA-QSA"].map((label, i) => (
            <div
              key={label}
              className={`absolute ${
                i === 0
                  ? "-left-10 top-5"
                  : i === 1
                  ? "-left-10 bottom-5"
                  : i === 2
                  ? "-right-10 top-5"
                  : i === 3
                  ? "-right-10 top-24"
                  : "-right-10 bottom-5"
              } hidden md:block`}
            >
              <div className="mb-6 px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
                {label}
              </div>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>
    </PageLayout>

    {/* ATM Software Section */}
    <PageLayout className="py-12 space-y-10 text-center">
      <Headline
        title="Custom ATM Software Development"
        description="U Technology's banking software developers are at the forefront of the industry, configuring and customizing existing ATM software, as well as providing end-to-end ATM software development services for national and international financial institutions."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <FeaturesList
          features={BankingAtmFeatures.slice(0, 2)}
          fadeUp={fadeUp}
          iconSize={36}
        />
        <FadeInWhenVisible delay={0.4} className="md:block hidden">
          <img
            loading="lazy"
            src="/assets/industries/banking/customatm.png"
            alt="Loan Software"
            className="w-64 mx-auto"
          />
        </FadeInWhenVisible>
        <FeaturesList
          features={BankingAtmFeatures.slice(2, 4)}
          fadeUp={fadeUp}
          iconSize={36}
        />
      </div>
      <FadeInWhenVisible>
        <Button variant="hover">Get ATM Software Solutions</Button>
      </FadeInWhenVisible>
    </PageLayout>

    {/* CORE Banking Section */}
    <section className="bg-secondary py-16 space-y-8 text-center">
      <Headline
        title="Custom CORE Banking Solutions"
        description="U Technology’s developers provide Centralized Online Real-Time Exchange (CORE) banking software services that effortlessly support all of a bank’s most common transactions, including making and servicing loans, opening new accounts, and processing cash deposits & withdrawals."
      />
      <PageLayout className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FeaturesList
          features={BankingCoreFeatures}
          fadeUp={fadeUp}
          iconSize={36}
          grid
        />
        <FadeInWhenVisible delay={0.4} className="hidden md:block">
          <img
            loading="lazy"
            src="/assets/industries/banking/customcore.png"
            alt="Loan Software"
            className="w-110"
          />
        </FadeInWhenVisible>
      </PageLayout>
      <FadeInWhenVisible>
        <Button variant="hover">Get Online Banking Software Solutions</Button>
      </FadeInWhenVisible>
    </section>

    {/* EMV Software Section */}
    <PageLayout className="text-center space-y-8 my-12">
      <Headline
        title="Custom EMV Software Solutions"
        description="U Technology provides a comprehensive, broad range of EMV software solutions from custom-coded programming to advanced feature implementation, enabling institutions to deliver secure data in sensitive environments."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <FeaturesList
          features={BankingCustomEMVServices.slice(0, 2)}
          fadeUp={fadeUp}
          iconSize={36}
        />
        <FadeInWhenVisible delay={0.4} className="hidden md:block">
          <img
            loading="lazy"
            src="/assets/industries/banking/mobilebrowser.png"
            alt="Loan Software"
            className="w-64 mx-auto"
          />
        </FadeInWhenVisible>
        <FeaturesList
          features={BankingCustomEMVServices.slice(2, 4)}
          fadeUp={fadeUp}
          iconSize={36}
        />
      </div>
      <FadeInWhenVisible>
        <Button variant="hover">Get EMV Software Solutions</Button>
      </FadeInWhenVisible>
    </PageLayout>

    {/* ACH Processing Section */}
    <section className="py-16 bg-secondary space-y-10 text-center">
      <Headline
        title="Check 21 Software & ACH Processing Solutions"
        description="At U Technology, we customize your ACH payment processing and Check 21 capabilities to seamlessly integrate e-check processing functionality and credit card processing with secure verification systems and enhanced UX designs."
      />
      <PageLayout className="grid grid-cols-1 sm:grid-cols-2 items-center">
        <FadeInWhenVisible delay={0.4}>
          <img
            loading="lazy"
            src="/assets/industries/banking/payment.png"
            alt="Mobile Banking App"
            className="w-52 mx-auto hidden sm:block"
          />
        </FadeInWhenVisible>
        <FeaturesList features={BankingACHfeatures} fadeUp={fadeUp} />
      </PageLayout>
      <FadeInWhenVisible>
        <Button variant="hover">Get Check 21 & ACH Processing Solutions</Button>
      </FadeInWhenVisible>
    </section>

    {/* Banking Software Support */}
    <PageLayout className="py-16 space-y-8 text-center">
      <Headline
        title="Banking Software Support"
        description="Banking and fiscal services have seen a significant transformation because of the use of new software solutions and apps. U Technology’s banking software support enhances efficiency, reliability, and regulatory compliance while improving the customer experience."
      />
      <div className="block md:hidden">
        <FeaturesList features={BankingSupportItems} fadeUp={fadeUp} grid />
      </div>

      <div className="md:grid hidden grid-cols-1 md:grid-cols-2 gap-12 text-left">
        <FeaturesList
          features={BankingSupportItems.slice(0, 5)}
          fadeUp={fadeUp}
          grid
        />
        <FeaturesList
          features={BankingSupportItems.slice(5, 10)}
          fadeUp={fadeUp}
          grid
        />
      </div>
      <FadeInWhenVisible delay={0.4}>
        <Button variant="hover">Get Finance Software Support</Button>
      </FadeInWhenVisible>
    </PageLayout>

    {/* FAQ Section */}
    <div className="mb-16 mt-2">
      <FaqSection faqs={BankingFaqs} title="FAQ's" />
    </div>
  </>
);

export default Banking;

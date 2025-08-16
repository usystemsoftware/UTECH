import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import VideoTvPoster from "@/custom/VideoTvPoster";

import {
  AIPoweredSolutions,
  BankingACHfeatures,
  BankingAtmFeatures,
  BankingCoreFeatures,
  BankingCustomEMVServices,
  BankingFaqs,
  BankingSoftwareLeftFeatures,
  BankingSoftwareRightFeatures,
  BankingSupportItems,
  CustomLoanServicingfeatures,
  GetMobileBankingOnlineSoftwareSolutions,
  GetMobileBankingSoftwareSolutions,
  tvpoasterDescription,
} from "./Data";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";

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
      <FeaturesGridnew
        leftFeatures={BankingSoftwareLeftFeatures}
        rightFeatures={BankingSoftwareRightFeatures}
        centerImage="/assets/industries/banking/contentBanking.png"
        iconGap="md:gap-26"
      />

      <Button variant="hover" className="mt-8">
        CUSTOMIZE YOUR BANKING SOLUTION NOW
      </Button>
    </PageLayout>

    <PageLayout className="py-12 space-y-10 text-center">
      <Headline
        title="Transforming the Banking Industry with AI-Powered Solutions"
        description="Following best practices, we harness the power of Artificial Intelligence (AI) in our financial software development process to build transformative solutions for the Banking industry. Our AI-driven software solution experts develop cutting-edge capabilities such as advanced fraud detection, AI-enhanced credit assessment, and AI-enhanced financial forecasting."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <FeaturesList
          features={AIPoweredSolutions.slice(0, 2)}
          iconSize={36}
          center
        />
        <FadeInWhenVisible delay={0.4} className="md:block hidden">
          <img
            loading="lazy"
            src="/assets/industries/banking/BankingPhone.png"
            alt="Loan Software"
            className="w-57 mx-auto"
          />
        </FadeInWhenVisible>
        <FeaturesList
          features={AIPoweredSolutions.slice(2, 4)}
          iconSize={36}
          center
        />
      </div>
      <Button variant="hover">Get ATM Software Solutions</Button>
    </PageLayout>

    <section className="py-16 bg-secondary space-y-10 text-center">
      <Headline
        title="Custom Loan Servicing & Origination Solutions"
        description="U Technology’s custom loan servicing and origination personalized solutions handle underwriting, origination, disbursement, servicing, amortization, processing, and so much more for financial services and institutions."
      />
      <PageLayout className="grid grid-cols-1 sm:grid-cols-2 items-center">
        <FadeInWhenVisible delay={0.4}>
          <img
            loading="lazy"
            src="/assets/industries/banking/softwareSolutions.png"
            alt="Mobile Banking App"
            className="w-140 mx-auto hidden sm:block"
          />
        </FadeInWhenVisible>
        <FeaturesList
          features={CustomLoanServicingfeatures}
          iconAlign="horizontal"
        />
      </PageLayout>
      <Button variant="hover">Get Loan Management Software Solutions</Button>
    </section>

    {/* Mobile Banking Section */}
    <section className="py-12 space-y-10 bg-secondary text-center">
      <Headline
        title="Custom Mobile Banking Software Solutions"
        description="U Technology makes it possible for mobile banking software providers to customize features, such as electronic bill payments, remote check deposits, P2P payments, fund transfers between accounts, text messaging, and statement downloading & printing."
      />
      <PageLayout className="grid grid-cols-1 sm:grid-cols-2 items-center">
        <FeaturesList
          features={GetMobileBankingSoftwareSolutions}
          iconAlign="horizontal"

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
      <Button variant="hover">Get Mobile Banking Software Solutions</Button>
    </section>

    {/* Online Banking Section */}
    <section className="py-16 bg-secondary space-y-10 text-center">
      <Headline
        title="Custom Online Banking Software Systems"
        description="U Technology’s financial software development services create robust, straightforward customizations to online banking systems for brick-and-mortar and FinTech companies of any size, built with incorporated branding for enhanced consistency & visibility."
      />
      <PageLayout className="grid grid-cols-1 sm:grid-cols-2 items-center">
        <FadeInWhenVisible delay={0.4}>
          <img
            loading="lazy"
            src="/assets/industries/banking/10001.png"
            alt="Mobile Banking App"
            className="w-130 mx-auto  hidden sm:block"
          />
        </FadeInWhenVisible>
        <FeaturesList
          features={GetMobileBankingOnlineSoftwareSolutions}
          iconAlign="horizontal"
        />
      </PageLayout>
      <Button variant="hover" className="mt-8">
        Get Online Banking Software Solution
      </Button>
    </section>

    <section>
      <VideoTvPoster
        information={tvpoasterDescription}
      />
    </section>

    {/* ATM Software Section */}
    <PageLayout className="py-12 space-y-10 text-center">
      <Headline
        title="Custom ATM Software Development"
        description="U Technology's banking software developers are at the forefront of the industry, configuring and customizing existing ATM software, as well as providing end-to-end ATM software development services for national and international financial institutions."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <FeaturesList
          features={BankingAtmFeatures.slice(0, 2)}
          center
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
          center
        />
      </div>
      <Button variant="hover">Get ATM Software Solutions</Button>
    </PageLayout>

    {/* CORE Banking Section */}
    <section className="bg-secondary py-16 space-y-8 text-center">
      <Headline
        title="Custom CORE Banking Solutions"
        description="U Technology’s developers provide Centralized Online Real-Time Exchange (CORE) banking software services that effortlessly support all of a bank’s most common transactions, including making and servicing loans, opening new accounts, and processing cash deposits & withdrawals."
      />
      <PageLayout className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <FeaturesList
          features={BankingCoreFeatures}
          iconAlign="horizontal"
        />
        <FadeInWhenVisible delay={0.4} className="hidden md:block">
          <img
            loading="lazy"
            src="/assets/industries/banking/customcore.png"
            alt="Loan Software"
            className="w-110 mx-auto"
          />
        </FadeInWhenVisible>
      </PageLayout>
      <Button variant="hover">Get Online Banking Software Solutions</Button>
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
          center
        />
        <FadeInWhenVisible delay={0.4} className="hidden md:block">
          <img
            loading="lazy"
            src="/assets/industries/banking/mobilebrowser.png"
            alt="Loan Software"
            className="w-82 mx-auto"
          />
        </FadeInWhenVisible>
        <FeaturesList
          features={BankingCustomEMVServices.slice(2, 4)}
          center
        />
      </div>
      <Button variant="hover">Get EMV Software Solutions</Button>
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
        <FeaturesList
          features={BankingACHfeatures}
          iconAlign="horizontal"
        />
      </PageLayout>
      <Button variant="hover">Get Check 21 & ACH Processing Solutions</Button>
    </section>

    {/* Banking Software Support */}
    <PageLayout className="py-16 space-y-8 text-center">
      <Headline
        title="Banking Software Support"
        description="Banking and fiscal services have seen a significant transformation because of the use of new software solutions and apps. U Technology’s banking software support enhances efficiency, reliability, and regulatory compliance while improving the customer experience."
      />
      <FeaturesListOpposite
        features={BankingSupportItems}
      />
      <Button variant="hover">Get Finance Software Support</Button>
    </PageLayout>

    {/* FAQ Section */}
    <div className="mb-16 mt-2">
      <FaqSection faqs={BankingFaqs} title="FAQ's" />
    </div>
  </>
);

export default Banking;

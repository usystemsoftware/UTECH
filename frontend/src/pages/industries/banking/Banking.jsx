import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/custom/ContactUsButton";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import VideoTvPoster from "@/custom/VideoTvPoster";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import Img_phone from "./Phone.png";
import CenterIMG from "../../../../public/assets/Industries/banking/contentBanking.png";
import BankingPhone from "../../../../public/assets/Industries/banking/BankingPhone.png";
import softwareSolutions from "../../../../public/assets/Industries/banking/softwareSolutions.png";
import img10001 from "../../../../public/assets/Industries/banking/10001.png";
import customatm from "../../../../public/assets/Industries/banking/customatm.png";
import customcore from "../../../../public/assets/Industries/banking/customcore.png";
import mobilebrowser from "../../../../public/assets/Industries/banking/mobilebrowser.png";
import payment from "../../../../public/assets/Industries/banking/payment.png"

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
  GetMobileBankingSoftwareSolutions,
  tvpoasterDescription,
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
        description="U Tech’s team of expert developers cater to the technical needs of the ever-evolving banking sector by offering high quality software solutions that transform your core environment to streamline banking & financial workflows."
      />
      <FeaturesGridnew
        leftFeatures={BankingSoftwareLeftFeatures}
        rightFeatures={BankingSoftwareRightFeatures}
        centerImage={CenterIMG}
        iconGap="md:gap-26"
      />

      <ContactUsButton variant="hover" className="mt-8">
        CUSTOMIZE YOUR BANKING SOLUTION NOW
      </ContactUsButton>
    </PageLayout>

    <PageLayout className="py-12 space-y-10 text-center">
      <Headline
        title="Transforming the Banking Industry with AI-Powered Solutions"
        description="Following best practices, we harness the power of Artificial Intelligence (AI) in our financial software development process to build transformative solutions for the Banking industry. Our AI-driven software solution experts develop cutting-edge capabilities such as advanced fraud detection, AI-enhanced credit assessment, and AI-enhanced financial forecasting."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
        <FeaturesList
          features={AIPoweredSolutions.slice(0, 2)}
          iconSize={36}
          center
        />
        <img
          loading="lazy"
          src={BankingPhone}
          alt="Loan Software"
          className="w-42 md:w-57 xl:w-62 mx-auto"
        />
        <FeaturesList
          features={AIPoweredSolutions.slice(2, 4)}
          iconSize={36}
          center
        />
      </div>
      <ContactUsButton variant="hover">
        Get ATM Software Solutions
      </ContactUsButton>
    </PageLayout>

    <section className="py-16 bg-secondary space-y-10 text-center">
      <Headline
        title="Custom Loan Servicing & Origination Solutions"
        description="U Tech’s custom loan servicing and origination personalized solutions handle underwriting, origination, disbursement, servicing, amortization, processing, and so much more for financial services and institutions."
      />
      <PageLayout className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          loading="lazy"
          src={softwareSolutions}
          alt="Mobile Banking App"
          className="md:w-140 w-130 xl:w-145 2xl:w-155 mx-auto"
        />
        <FeaturesList
          features={CustomLoanServicingfeatures}
          iconAlign="horizontal"
        />
      </PageLayout>
      <ContactUsButton variant="hover">
        Get Loan Management Software Solutions
      </ContactUsButton>
    </section>

    {/* Mobile Banking Section */}
    <section className="py-12 space-y-10 bg-secondary text-center">
      <Headline
        title="Custom Mobile Banking Software Solutions"
        description="U Tech makes it possible for mobile banking software providers to customize features, such as electronic bill payments, remote check deposits, P2P payments, fund transfers between accounts, text messaging, and statement downloading & printing."
      />
      <PageLayout className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <FeaturesList
          features={GetMobileBankingSoftwareSolutions}
          iconAlign="horizontal"
        />
        <img
          loading="lazy"
          src={Img_phone}
          alt="Mobile Banking App"
          className="md:w-56 w-42 xl:w-62 2xl:w-64 mx-auto sm:hidden md:block block"
        />
      </PageLayout>
      <ContactUsButton variant="hover">
        Get Mobile Banking Software Solutions
      </ContactUsButton>
    </section>

    {/* Online Banking Section */}
    <section className="py-16 bg-secondary space-y-10 text-center">
      <Headline
        title="Custom Online Banking Software Systems"
        description="U Tech’s financial software development services create robust, straightforward customizations to online banking systems for brick-and-mortar and FinTech companies of any size, built with incorporated branding for enhanced consistency & visibility."
      />
      <PageLayout className="grid grid-cols-1 md:grid-cols-2 items-center">
        <img
          loading="lazy"
          src={img10001}
          alt="Mobile Banking App"
          className="md:w-130 w-110 2xl:w-145 mx-auto"
        />
        <FeaturesList
          features={GetMobileBankingSoftwareSolutions}
          iconAlign="horizontal"
        />
      </PageLayout>
      <ContactUsButton variant="hover" className="mt-8">
        Get Online Banking Software Solution
      </ContactUsButton>
    </section>

    <section>
      <VideoTvPoster information={tvpoasterDescription} />
    </section>

    {/* ATM Software Section */}
    <PageLayout className="py-12 space-y-10 text-center">
      <Headline
        title="Custom ATM Software Development"
        description="U Tech's banking software developers are at the forefront of the industry, configuring and customizing existing ATM software, as well as providing end-to-end ATM software development services for national and international financial institutions."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeaturesList features={BankingAtmFeatures.slice(0, 2)} center />
        <img
          loading="lazy"
          src={customatm}
          alt="Loan Software"
          className="md:w-64 sm:w-56 w-52 xl:w-68 2xl:w-96 mx-auto"
        />
        <FeaturesList features={BankingAtmFeatures.slice(2, 4)} center />
      </div>
      <ContactUsButton variant="hover">
        Get ATM Software Solutions
      </ContactUsButton>
    </PageLayout>

    {/* CORE Banking Section */}
    <section className="bg-secondary py-16 space-y-8 text-center">
      <Headline
        title="Custom CORE Banking Solutions"
        description="U Tech’s developers provide Centralized Online Real-Time Exchange (CORE) banking software services that effortlessly support all of a bank’s most common transactions, including making and servicing loans, opening new accounts, and processing cash deposits & withdrawals."
      />
      <PageLayout className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <FeaturesList features={BankingCoreFeatures} iconAlign="horizontal" />
        <div className="hidden md:block">
          <img
            loading="lazy"
            src={customcore}
            alt="Loan Software"
            className="w-110 xl:w-120 2xl:w-135 mx-auto"
          />
        </div>
      </PageLayout>
      <ContactUsButton variant="hover">
        Get Online Banking Software Solutions
      </ContactUsButton>
    </section>

    {/* EMV Software Section */}
    <PageLayout className="text-center space-y-8 my-12">
      <Headline
        title="Custom EMV Software Solutions"
        description="U Tech provides a comprehensive, broad range of EMV software solutions from custom-coded programming to advanced feature implementation, enabling institutions to deliver secure data in sensitive environments."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <FeaturesList features={BankingCustomEMVServices.slice(0, 2)} center />
        <img
          loading="lazy"
          src={mobilebrowser}
          alt="Loan Software"
          className="sm:w-82 w-72 xl:w-92 2xl:w-120 mx-auto"
        />
        <FeaturesList features={BankingCustomEMVServices.slice(2, 4)} center />
      </div>
      <ContactUsButton variant="hover">
        Get EMV Software Solutions
      </ContactUsButton>
    </PageLayout>

    {/* ACH Processing Section */}
    <section className="py-16 bg-secondary space-y-10 text-center">
      <Headline
        title="Check 21 Software & ACH Processing Solutions"
        description="At U Tech, we customize your ACH payment processing and Check 21 capabilities to seamlessly integrate e-check processing functionality and credit card processing with secure verification systems and enhanced UX designs."
      />
      <PageLayout className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <img
          loading="lazy"
          src={payment}
          alt="Mobile Banking App"
          className="sm:w-52 w-42 xl:w-56 2xl:w-62 mx-auto"
        />
        <FeaturesList features={BankingACHfeatures} iconAlign="horizontal" />
      </PageLayout>
      <ContactUsButton variant="hover">
        Get Check 21 & ACH Processing Solutions
      </ContactUsButton>
    </section>

    {/* Banking Software Support */}
    <PageLayout className="py-16 space-y-8 text-center">
      <Headline
        title="Banking Software Support"
        description="Banking and fiscal services have seen a significant transformation because of the use of new software solutions and apps. U Tech’s banking software support enhances efficiency, reliability, and regulatory compliance while improving the customer experience."
      />
      <FeaturesListOpposite features={BankingSupportItems} />
      <ContactUsButton variant="hover" className="mt-8">
        Get Finance Software Support
      </ContactUsButton>
    </PageLayout>

    {/* FAQ Section */}
    <div className="mb-16 mt-2">
      <FaqSection faqs={BankingFaqs} title="FAQ's" />
    </div>
  </>
);

export default Banking;

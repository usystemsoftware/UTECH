import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/Button";
import PageLayout from "@/custom/PageLayout";
import {
  TypographyH4,
  TypographyH5,
  TypographyMuted,
  Headline,
} from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import { IconRenderer } from "@/custom/IconRenderer";
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
  GetMobileBankingSoftwareSolutions
} from "./Data";

// FeaturesGrid component
const FeaturesGrid = ({
  leftFeatures = [],
  rightFeatures = [],
  centerImage,
  fadeUp,
  iconSize = 40,
}) => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
    <div className="flex flex-col gap-8 text-right w-full lg:w-1/3">
      {leftFeatures.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-3"
          custom={index}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="flex-shrink-0">
            {/* Increased logo size */}
            <IconRenderer name={item.icon} size={iconSize} className="text-primary flex-shrink-1" />
          </span>
          <TypographyMuted>{item.label}</TypographyMuted>
        </motion.div>
      ))}
    </div>
    {centerImage && (
      <motion.div
        className="w-full max-w-md my-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={3}
      >
        <img loading="lazy" src={centerImage} alt="" className="mx-auto w-[80%] max-w-xs sm:max-w-md" />
      </motion.div>
    )}
    <div className="flex flex-col gap-8 items-start text-left w-full lg:w-1/3">
      {rightFeatures.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-3"
          custom={index}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="flex-shrink-0">
            <IconRenderer name={item.icon} size={iconSize} className="text-primary" />
          </span>
          <TypographyMuted>{item.label}</TypographyMuted>
        </motion.div>
      ))}
    </div>
  </div>
);

// Responsive FeaturesList component
const FeaturesList = ({
  features,
  fadeUp,
  iconSize = 34,
  grid = false,
  image,
  imageClass = "",
  reverse = false,
}) => (
  <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-center gap-10`}>
    <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 gap-8 text-left w-full" : "w-full max-w-2xl space-y-10 text-left"}>
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          className="flex items-start gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={i + 3}
        >
          <span className="flex-shrink-0">
            <IconRenderer name={feature.icon} size={iconSize} className="text-primary" />
          </span>
          <div>
            <TypographyH5>{feature.title}</TypographyH5>
            <TypographyMuted>{feature.description}</TypographyMuted>
          </div>
        </motion.div>
      ))}
    </div>
    {image && (
      <motion.div
        className={`flex-shrink-0 ${imageClass} w-full max-w-xs sm:max-w-md`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        custom={2}
      >
        <img loading="lazy" src={image} alt="" className="w-full rounded-md shadow-md" />
      </motion.div>
    )}
  </div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const BankingPage = () => (
  <>
    <HeroSection
      backgroundImage='/assets/industries/banking/banking-header.avif'
      title="BANKING SOFTWARE DEVELOPMENT"
      description="Transforming banking with AI, fraud detection, wealth management & more."
      buttonText="Hire Banking Software Developers"
      buttonLink="/contact"
      imageFit="cover"
      overlayOpacity={0.6}
    />

    {/* Features Grid */}
    <PageLayout className="text-center py-16 bg-card">
      <Headline
        title="Custom Banking Software Development"
        description="U Technology’s team of expert developers cater to the technical needs of the ever-evolving banking sector by offering high quality software solutions that transform your core environment to streamline banking & financial workflows."
      />
      <FeaturesGrid
        leftFeatures={BankingSoftwareLeftFeatures}
        rightFeatures={BankingSoftwareRightFeatures}
        centerImage="/assets/industries/banking/contentBanking.png"
        fadeUp={fadeUp}
        iconSize={48}
      />
      <Button variant="hover" className="mt-8">
        CUSTOMIZE YOUR BANKING SOLUTION NOW
      </Button>
    </PageLayout>

    {/* AI Features */}
    <section className="py-16 bg-secondary text-center">
      <PageLayout>
        <Headline
          title="Transforming the Banking Industry with AI-Powered Solutions"
          description="Following best practices, we harness the power of Artificial Intelligence (AI) in our financial software development process to build transformative solutions for the Banking industry. Our AI-driven software solution experts develop cutting-edge capabilities such as advanced fraud detection, AI-enhanced credit assessment, and AI-enhanced financial forecasting."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-8">
          <FeaturesList
            features={BankingSoftwareAIFeatures.slice(0, 2)}
            fadeUp={fadeUp}
            iconSize={40}
          />
          <motion.div
            className="w-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            <img loading="lazy" src='/assets/industries/banking/BankingPhone.png' alt="AI-powered banking analytics" className="mx-auto w-[45%] max-w-xs sm:max-w-md" />
          </motion.div>
          <FeaturesList
            features={BankingSoftwareAIFeatures.slice(2)}
            fadeUp={fadeUp}
            iconSize={40}
          />
        </div>
        <Button variant="hover" className="mt-8">
          Get AI-Powered Banking Software Solutions
        </Button>
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
        iconSize={48}
        image="/assets/industries/banking/softwareSolutions.png"
        imageClass="w-[400px]"
        reverse
      />
      <Button variant="hover">
        Get Loan Management Software Solutions
      </Button>
    </PageLayout>

    {/* Mobile Banking Section */}
    <section className="py-12 sm:py-16 bg-secondary text-center">
      <Headline
        title="Custom Mobile Banking Software Solutions"
        description="U Technology makes it possible for mobile banking software providers to customize features, such as electronic bill payments, remote check deposits, P2P payments, fund transfers between accounts, text messaging, and statement downloading & printing."
      />
      <PageLayout className="mt-12 lg:mt-16 sm:max-w-5xl flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <FeaturesList
          features={GetMobileBankingSoftwareSolutions}
          fadeUp={fadeUp}
          iconSize={36}
        />
        <motion.div
          className="w-full flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={4}
        >
          <img loading="lazy" src="/assets/industries/banking/Phone.png" alt="Mobile Banking App" className="max-h-[400px] w-auto object-contain" />
        </motion.div>
      </PageLayout>
      <Button variant="hover">
        Get Mobile Banking Software Solutions
      </Button>
    </section>

    {/* Online Banking Section */}
    <PageLayout className="py-10 text-center space-y-8">
      <Headline
        title='Custom Online Banking Software Systems'
        description='U Technology’s financial software development services create robust, straightforward customizations to online banking systems for brick-and-mortar and FinTech companies of any size, built with incorporated branding for enhanced consistency & visibility.'
      />
      <FeaturesList
        features={GetMobileBankingOnlineSoftwareSolutions}
        fadeUp={fadeUp}
        iconSize={36}
        image="/assets/industries/banking/softwareSolutions.png"
        imageClass="h-56"
        reverse
      />
      <Button variant="hover">
        Get Online Banking Software Solution
      </Button>
    </PageLayout>

    {/* Compliance Section */}
    <PageLayout className="flex flex-col md:flex-row bg-cyan-50 p-6 items-center justify-between gap-12">
      <div className="flex-1 space-y-3">
        <TypographyH4>
          U Technology ENSURES 100% PCI-DSS COMPLIANCE
        </TypographyH4>
        <TypographyMuted>
          U Technology’s banking software developers ensure your software complies with the strict regulatory standards on anti-money laundering and consumer protection standards. This includes the Payment Card Industry Security Standards Council (PCI SSC), Payment Card Industry Data Security Standard (PCI-DSS), and Payment Application Data Security Standard (PA-DSS). Also, Payment Application-Qualified Security Accessors (PA-QSA), SOX, Dodd-Frank, Check 21, and the Securities Act of 1933.
        </TypographyMuted>
      </div>
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
            className={`absolute ${i === 0 ? "-left-10 top-5" : i === 1 ? "-left-10 bottom-5" : i === 2 ? "-right-10 top-5" : i === 3 ? "-right-10 top-24" : "-right-10 bottom-5"} hidden md:block`}
          >
            <div className="mb-6 px-4 py-1 bg-white rounded-full shadow text-sm font-semibold">
              {label}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>

    {/* ATM Software Section */}
    <PageLayout className="py-12 text-center">
      <Headline
        title="Custom ATM Software Development"
        description="U Technology's banking software developers are at the forefront of the industry, configuring and customizing existing ATM software, as well as providing end-to-end ATM software development services for national and international financial institutions."
      />
      <FeaturesList
        features={BankingAtmFeatures}
        fadeUp={fadeUp}
        iconSize={36}
        image="/assets/industries/banking/customatm.png"
        imageClass="w-64 md:w-72"
        grid
      />
      <Button variant="hover" className="mt-12">
        Get ATM Software Solutions
      </Button>
    </PageLayout>

    {/* CORE Banking Section */}
    <section className="bg-secondary py-16 space-y-8 text-center">
      <Headline
        title='Custom CORE Banking Solutions'
        description='U Technology’s developers provide Centralized Online Real-Time Exchange (CORE) banking software services that effortlessly support all of a bank’s most common transactions, including making and servicing loans, opening new accounts, and processing cash deposits & withdrawals.'
      />
      <PageLayout className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-12">
        <FeaturesList
          features={BankingCoreFeatures}
          fadeUp={fadeUp}
          iconSize={36}
        />
        <motion.div
          className="flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={2}
        >
          <img loading="lazy" src='/assets/industries/banking/customcore.png' alt="Loan Software" className="w-96" />
        </motion.div>
      </PageLayout>
      <Button variant="hover">
        Get Online Banking Software Solutions
      </Button>
    </section>

    {/* EMV Software Section */}
    <PageLayout className="text-center space-y-8 my-12">
      <Headline
        title="Custom EMV Software Solutions"
        description="U Technology provides a comprehensive, broad range of EMV software solutions from custom-coded programming to advanced feature implementation, enabling institutions to deliver secure data in sensitive environments."
      />
      <FeaturesList
        features={BankingCustomEMVServices}
        fadeUp={fadeUp}
        iconSize={36}
        image="/assets/industries/banking/mobilebrowser.png"
        imageClass="w-62"
        reverse
      />
      <Button variant="hover">
        Get EMV Software Solutions
      </Button>
    </PageLayout>

    {/* ACH Processing Section */}
    <section className="py-16 bg-secondary space-y-8 text-center">
      <Headline
        title="Check 21 Software & ACH Processing Solutions"
        description="At U Technology, we customize your ACH payment processing and Check 21 capabilities to seamlessly integrate e-check processing functionality and credit card processing with secure verification systems and enhanced UX designs."
      />
      <PageLayout className="flex flex-col lg:flex-row items-center justify-center gap-16">
        <motion.div
          className="flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={4}
        >
          <img loading="lazy" src='/assets/industries/banking/payment.png' alt="Mobile Banking App" className="w-62" />
        </motion.div>
        <FeaturesList
          features={BankingACHfeatures}
          fadeUp={fadeUp}
          iconSize={36}
        />
      </PageLayout>
      <Button variant="hover">
        Get Check 21 & ACH Processing Solutions
      </Button>
    </section>

    {/* Banking Software Support */}
    <PageLayout className="py-16 space-y-8 text-center">
      <Headline
        title='Banking Software Support'
        description="Banking and fiscal services have seen a significant transformation because of the use of new software solutions and apps. U Technology’s banking software support enhances efficiency, reliability, and regulatory compliance while improving the customer experience."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
        {BankingSupportItems?.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-start gap-4 ${item.reverse ? "lg:justify-end lg:text-right flex-row-reverse" : ""}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={index + 2}
          >
            <IconRenderer name={item.icon} size={36} className="text-primary flex-shrink-0" />
            <div>
              <TypographyH5>{item.title}</TypographyH5>
              <TypographyMuted>{item.description}</TypographyMuted>
            </div>
          </motion.div>
        ))}
      </div>
      <Button variant="hover">
        Get Finance Software Support
      </Button>
    </PageLayout>

    {/* FAQ Section */}
    <div className="my-16">
      <FaqSection
        faqs={BankingFaqs}
        title="FAQ's"
        hightlight="Construction Software"
      />
    </div>
  </>
);

export default BankingPage;
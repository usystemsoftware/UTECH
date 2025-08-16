import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import VideoPoster from "@/custom/VideoPoster";
import FaqSection from "@/custom/FaqSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import {
  TypographyH5,
  TypographyMuted,
  Headline,
  TypographyH3,
} from "@/custom/Typography";
import {
  PymentSoftwareLeftFeatures,
  PymentSoftwareRightFeatures,
  pymentSolutions,
  Pymentlogs,
  gamingPayment,
  testimonials,
  PaymentTransformationFeatures,
  PaymentManagementSolutions,
  PaymentTransformationTerminal,
  Pymentlogsonline,
  featTerminalPayment,
  SoftwareTechnologies,
  BillingSoftware,
  ACHPayment,
  FraudManagement,
  faqs,
  LegalManagement,
  features,
} from "./Data";

const Payments = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/banner/payment-banner.jpg"
        title="PAYMENTS SOFTWARE SOLUTIONS"
        buttonText="HIRE PAYMENTS DEVELOPERS"
        buttonLink="/payments"
        imageFit="cover"
        overlayOpacity={0.2}
      />

      <PageLayout className="text-center space-y-10 py-10">
        <Headline
          title="Get U Tech’s Custom Payments Software Development"
          description="U Tech is a proud leader in providing high-quality, custom payment software solutions using our payments industry experience combined with our extensive knowledge for leveraging best-in-class programming tools and technologies to enable fast, secure, and seamless payment transactions.."
        />

        <FeaturesGridnew
          leftFeatures={PymentSoftwareLeftFeatures}
          rightFeatures={PymentSoftwareRightFeatures}
          centerImage="/assets/industries/payments/combo.png"
        />
      </PageLayout>


      <section className="relative w-full overflow-hidden">
        <VideoPoster
          features={features}
          title="Revolutionizing Payments! Key Technologies Transforming Transactions"
        />
      </section>

      <section className=" bg-secondary py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Payment Gateway & Processing Solutions"
            description="We configure and integrate custom payment gateways, processors, and other payment software from industry-leading vendors.."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <FeaturesList
              features={pymentSolutions}
              grid
              center
            />
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/industries/payments/processing.png"
                alt="Portfolio"
                className="md:w-50 w-42 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {Pymentlogs.map((logo, index) => (
              <img
                key={index}
                loading="lazy"
                src={`/assets/industries/payments/images/${logo}.png`}
                className="cursor-pointer h-10 hover:scale-105 transition-transform"
                alt={logo}
              />
            ))}
          </div>
          <Button variant="hover">Get Payment Processing Solutions</Button>
        </PageLayout>
      </section>

      <PageLayout className="text-center py-10 space-y-10">
        <Headline
          title="AI-Powered Payment Software Solutions"
          description="Our AI-driven payment solutions leverage Machine Learning algorithms to enhance efficiency, automate processes, and optimize transaction routes. The self-learning payment systems adapt to changing transaction patterns, ensuring real-time processing and improved overall performance.."
        />

        <FeaturesList
          features={gamingPayment}
          grid3
          center
        />

        <Button variant="hover">GET FINANCE SOFTWARE SUPPORT</Button>

        {/* Testimonials */}
        <TestimonialSection testimonials={testimonials} />
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className=" text-center space-y-10">
          <Headline
            title="Mobile Payment Processing Solutions"
            description="We build and seamlessly integrate personalized mobile payment processing and security solutions for reliable P2P, e-commerce, and credit card processing payment systems.."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/industries/payments/mobile-payment-processing-solutions.png"
                alt="Financial Planning Dashboard"
                className="w-52 mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
            <div className="text-start space-y-3">
              <TypographyH5 className="font-extrabold">Mobile & Online Payment Processing</TypographyH5>
              <TypographyMuted>
                We provide native, web, and hybrid payment application solutions
                for peer-to-peer (P2P) payment exchanges on Android, iOS, and
                Windows platforms.
              </TypographyMuted>
              <FeaturesList
                features={PaymentTransformationFeatures}
                iconAlign="horizontal"
              />
            </div>
          </div>
          <Button variant="hover">Get Mobile Payment Solutions</Button>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-12 text-center">
        <Headline
          title="Custom Online Payment Software Solutions"
          description="Our developers create customized online payment systems and security modules for businesses to accept every type of payment online with ease.."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Left Features List */}
          <FeaturesList
            features={PaymentManagementSolutions.slice(0, 2)}
            center
          />

          {/* Center Animation */}
          <FadeInWhenVisible className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/payments/online.png"
              alt="Mobile Analytics App"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>

          {/* Right Features List */}
          <FeaturesList
            features={PaymentManagementSolutions.slice(2, 4)}
            center
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {Pymentlogsonline.map((logo, index) => (
            <img
              key={index}
              loading="lazy"
              src={`/assets/industries/payments/imagesonline/${logo}.png`}
              className="h-10 cursor-pointer hover:scale-105 transition-transform"
              alt={logo}
            />
          ))}
        </div>

        <Button variant="hover">Get Online Payment Solutions</Button>
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Point of Sale (POS) Software Solutions"
            description="Our development experts create custom point of sale (POS) solutions with unique features to promote scalability and business growth"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div className="text-start space-y-4">
              <TypographyH5 className="font-extrabold">Custom Mobile Payment Solutions</TypographyH5>
              <TypographyMuted>
                We engineer secure, simple, and PCI-compliant mobile point of
                sale (mPOS) solutions that transform smartphones and tablets
                into fully functioning registers.
              </TypographyMuted>
              <FeaturesList
                features={featTerminalPayment}
                iconAlign="horizontal"
              />
            </div>
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/industries/payments/pos.png"
                alt="Payment Planning Dashboard"
                className="w-130 mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
          </div>
          <Button variant="hover">Get Pos Solutions</Button>
        </PageLayout>
      </section>

      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Online Payment Terminal Solutions"
          description="We provide comprehensive custom POS terminal solutions and services to enable merchants to simplify operations and achieving maximum efficiency.."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FadeInWhenVisible className="sm:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/payments/terminal.png"
              alt="Financial Planning Dashboard"
              className="w-130 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <div className="fleex flex-col gap-4 text-center justify-center items-center">
            {PaymentTransformationTerminal.map((feature, idx) => (
              <div key={idx}              >
                {feature.img && (
                  <img
                    src={`/assets/industries/payments/Terminals/${feature.img}.png`}
                    alt={feature.title}
                    className="w-30 h-14 mx-auto object-contain"
                    loading="lazy"
                  />
                )}
                <TypographyH5 className="font-extrabold">
                  {feature.title}
                </TypographyH5>
                <TypographyMuted>
                  {feature.description}
                </TypographyMuted>
              </div>
            ))}
          </div>
        </div>

        <Button variant="hover">Get Pos Terminal Solutions</Button>
      </PageLayout>

      <section className=" bg-secondary py-14">
        <PageLayout className="space-y-12 text-center">
          <Headline
            title="Custom EMV Software Solutions"
            description="Our developers customize EMV chip software technologies for a variety of businesses to support payment protection and compliance."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div className="text-start space-y-4">
              <TypographyH5 className="font-extrabold">EMV Chip Software Technologies</TypographyH5>
              <TypographyMuted>
                We provide a comprehensive broad range of custom EMV software
                solutions, enabling financial institutions to deliver secure
                data in sensitive environments.
              </TypographyMuted>
              <FeaturesList
                features={SoftwareTechnologies}
                iconAlign="horizontal"
              />
            </div>
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/industries/payments/customm.png"
                alt="Payment Planning Dashboard"
                className="w-120 mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
          </div>
          <Button variant="hover">Get Emv Solutions</Button>
        </PageLayout>
      </section>

      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Custom Billing Software Solutions"
          description="We create end-to-end custom automatic billing software platforms with dynamic tools that allow businesses to navigate the digital economy easily.."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/payments/billing.gif"
              alt="Payment Planning Dashboard"
              className="w-50 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <div className="text-start space-y-4">
            <TypographyH5 className="font-extrabold">Custom Payments & Billing Software</TypographyH5>
            <TypographyMuted>
              We buld custom-tailored payment and billing platforms,
              encompassing all of the features and functionalities that your
              business needs to succeed.
            </TypographyMuted>
            <FeaturesList
              features={BillingSoftware}
              iconAlign="horizontal"
            />
          </div>
        </div>
        <Button variant="hover">Get Billing Solutions</Button>
      </PageLayout>

      <section className=" bg-secondary py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="ACH Payment Processing & Check 21 Solutions"
            description="We customize ACH payments and provide check 21 software solutions for merchants who want a secure integrated payment system."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div className="text-start space-y-4">
              <TypographyH5 className="font-extrabold">ACH Payments & Check 21 Software</TypographyH5>
              <TypographyMuted>
                We seamlessly integrate eCheck processing functionalities to
                propel your payment processing workflows at new levels.
              </TypographyMuted>
              <FeaturesList
                features={ACHPayment}
                iconAlign="horizontal"
              />
            </div>
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/industries/payments/achprocessing.png"
                alt="Payment Planning Dashboard"
                className="w-50 mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
          </div>
          <Button variant="hover">Get Ach & Check Solutions</Button>
        </PageLayout>
      </section>

      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Fraud Management Solutions"
          description="We deliver custom fraud management solutions and modules for monitoring user behaviors, calculating risk, and protecting sensitive consumer/business information."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div className="text-start space-y-4">
            <TypographyH5 className="font-extrabold">Fraud Protection & Prevention</TypographyH5>
            <TypographyMuted>
              We configure intelligent fraud protection and detection software
              solutions, designed to fit your organization and offer real-time
              monitoring to prevent fraud.
            </TypographyMuted>
            <FeaturesList
              features={FraudManagement}
              iconAlign="horizontal"
            />
          </div>
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/payments/management.png"
              alt="Payment Planning Dashboard"
              className="w-70 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
        </div>
        <Button variant="hover">Get Fraud Protection</Button>
      </PageLayout>

      <section className=" bg-secondary py-12">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="Payment Software Support Services"
            description="At U Tech, we provide comprehensive payment software support services, including troubleshooting gateway issues, customer support, maintenance & upgrades, and cross-platform payment integration.."
          />

          <FeaturesList
            features={LegalManagement}
            grid3
            center
          />

          <Button variant="hover">GET PAYMENT SOFTWARE SUPPORT</Button>
        </PageLayout>
      </section>

      <section className="bg-[#009698] py-12">
        <div className="max-w-5xl mx-auto text-center px-4">
          <TypographyH3 className="text-white uppercase font-bold">
            We Ensure You a 100% Compliance With PCI & EMV!
          </TypographyH3>
          <TypographyMuted className="mt-4 text-base sm:text-lg text-white">
            U Tech's Payments software development experts ensure your software
            complies with consumer protection standards, including Credit Card
            Payment Industry Data Security Standard (PCI-DSS), Payment
            Application Data Security Standard (PA-DSS), EMV, Check-21, and
            other payments standards.
          </TypographyMuted>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default Payments;

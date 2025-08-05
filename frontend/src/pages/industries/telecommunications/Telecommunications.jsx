import React from "react";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import FaqSection from "@/custom/FaqSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FeaturesList2 } from "@/components/FeaturesList2";
import {
  TypographyH5,
  TypographyMuted,
  Headline,
  TypographyH6,
} from "@/custom/Typography";
import {
  featTerminalTelecommunication,
  TerminalTelecommunication,
  DataTelecommunication,
  DataTelecommunicationSystem,
  telecommunicationgSupportItems,
  AITelecomFeatures,
  gamingtelecommunication,
  TelecommunicationSolutions,
  telcommunicationSoftwareSolutions,
  telecommunicationFaqs
} from "./Data";

const Telecommunications = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/banner/telecom-hero-banner.jpg"
        title="TELECOM SOFTWARE DEVELOPMENT SERVICES | OSS/BSS & AI SOLUTIONS"
        description="Elevating the Telecom Experience Through AI-Integrated Custom Solutions"
        buttonText="Talk to Our Telecom Software Experts"
        buttonLink="/telecommunications"
        imageFit="cover"
        overlayOpacity={0.2}
      />

      {/* Hire Dedicated Telecom Developers */}
      <PageLayout className="space-y-8 text-center py-12">
        <Headline
          title="Hire Dedicated Telecom Software Developers"
          description="Accelerate your telecom projects with our specialized developers, delivering cutting-edge solutions for OSS/BSS, VoIP, mobile & web applications, machine learning algorithms, and AI-powered networks. With 20+ years in telecom software development, we help you: Reduce operational costs with automated workflows, enhance customer experience through AI-driven tools, and scale securely with cloud-native and 5G-ready architectures."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          <div className="text-start space-y-4">
            <TypographyH5>Operations Support Systems (OSS)</TypographyH5>
            <TypographyMuted>
              Streamline your telecom infrastructure with our custom OSS
              solutions, designed to automate and secure critical operations:
            </TypographyMuted>
            <FeaturesList2
              features={featTerminalTelecommunication}
              fadeUp={fadeUp}
            />
          </div>
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/telecommunications/operations.png"
              alt="Telecommunication Planning Dashboard"
              className="w-120 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/telecommunications/support.png"
              alt="Telecommunication Planning Dashboard"
              className="w-120 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <div className="text-start space-y-4">
            <TypographyH5>Business Support Systems (BSS)</TypographyH5>
            <TypographyMuted>
              We build custom BSS Telecom solutions to manage your products,
              orders, revenue stream, and customer management processes,
              equipped with tailor-made platforms, applications, tools, and
              systems, including:
            </TypographyMuted>
            <FeaturesList2 features={DataTelecommunication} fadeUp={fadeUp} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
          <div className="text-start space-y-4">
            <TypographyH5>Telecom BI Solutions</TypographyH5>
            <TypographyMuted>
              We develop telecom business intelligence (BI) solutions that
              leverage critical data from your operations to maximize your ROI
              and foster strategic decisions through implementing the following
              functionalities:
            </TypographyMuted>
            <FeaturesList2
              features={TerminalTelecommunication}
              fadeUp={fadeUp}
            />
          </div>
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/telecommunications/interface.png"
              alt="Telecommunication Planning Dashboard"
              className="w-120 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/telecommunications/support.png"
              alt="Telecommunication Planning Dashboard"
              className="w-120 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <div className="text-start space-y-4">
            <TypographyH5>VoIP-Based Telecom Solutions</TypographyH5>
            <TypographyMuted>
              We engineer custom VoIP-based telecom solutions to improve
              automatic data conversions, data routing, and voice traffic
              transmissions using the following multi-faceted VoIP
              communications feature kit:
            </TypographyMuted>
            <FeaturesList2
              features={DataTelecommunicationSystem}
              fadeUp={fadeUp}
            />
          </div>
        </div>
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">
            Book a Demo of Our Telecom Software Solutions
          </Button>
        </FadeInWhenVisible>
      </PageLayout>
      <PageLayout className="space-y-6 text-center">
        <Headline
          title="AI-Powered Telecommunications Solutions"
          description="Leverage AI-driven telecom software to cut costs, boost efficiency, and future-proof your operations. Our solutions integrate predictive AI, automation, and real-time analytics to deliver: 40% lower operational costs through AI-optimized networks, 99.9% uptime with proactive anomaly detection, hyper-personalized customer experiences via AI/ML.."
        />
        <FeaturesList2 features={AITelecomFeatures} fadeUp={fadeUp} grid />
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">GET AI-POWERED TELECOM SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>
      <PageLayout className="text-center space-y-6 py-6">
        <Headline
          title="Custom Telecommunications Software Solutions"
          description="We deliver tailored software solutions for Communications Service Providers (CSPs) to reduce costs, generate new revenue streams through AI-driven diagnostics and system optimization. Our expertise spans end-to-end telecom ecosystems, from legacy modernization to 5G-ready architectures, ensuring seamless user experiences and rapid issue resolution."
        />

        <div className="block md:hidden">
          <FeaturesList
            features={gamingtelecommunication}
            fadeUp={fadeUp}
            grid
          />
        </div>

        <FadeInWhenVisible className="md:grid hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeaturesList features={gamingtelecommunication.slice(0, 2)} />
          <FeaturesList features={gamingtelecommunication.slice(2, 4)} />
          <FeaturesList features={gamingtelecommunication.slice(4, 6)} />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Button variant="hover">Get Your Telecom Software Audit</Button>
        </FadeInWhenVisible>
      </PageLayout>
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Telecom Software Support Services"
          description="We deliver end-to-end support services for telecom applications, ensuring peak performance, security, and scalability for your mission-critical systems. Our team specializes in proactive monitoring, rapid issue resolution, and future-proof optimizations—minimizing downtime while maximizing ROI."
        />
        <FeaturesList
          features={TelecommunicationSolutions}
          fadeUp={fadeUp}
          grid
        />
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">GET TELECOM APPLICATION SUPPORT</Button>
        </FadeInWhenVisible>
      </PageLayout>

      <PageLayout className="space-y-10 py-12 text-center">
        <Headline
          title="Custom Telecom IOT & VAS Application Integration"
          description=""
        />
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 items-center">
          <FeaturesList
            features={TelecommunicationSolutions.slice(0, 2)}
            fadeUp={fadeUp}
          />
          <FadeInWhenVisible className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/telecommunications/mobiles.png"
              alt="Telecommunication Planning Dashboard"
              className="w-70 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList
            features={TelecommunicationSolutions.slice(2, 4)}
            fadeUp={fadeUp}
          />
        </div>
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">GET TELECOM IOT SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>
      <PageLayout className="space-y-8 py-10 text-center">
        <Headline
          title="Custom Telecom Integration Services"
          description="We integrate third-party telecommunications APIs, cloud platforms, and enterprise systems to your existing infrastructure, driving operational efficiency and cost savings. Our integrations unify communications, data, and workflows across your organization.."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 text-center">
          {telcommunicationSoftwareSolutions?.map((item, index) => (
            <div key={index} className="grid mt-10 ">
              <FeaturesList fadeUp={fadeUp} features={[item]} />

              <div className="flex items-center flex-wrap justify-center gap-8 text-center mt-6">
                {item?.partners.map((partner, pIndex) => (
                  <FadeInWhenVisible key={pIndex} delay={0.5}>
                    <img
                      loading="lazy"
                      src={`/assets/industries/telecommunications/images/${partner}.png`}
                      alt={`${item.title} - ${partner}`}
                      className=""
                    />
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          ))}
        </div>
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">GET INTEGRATED TELECOM SOFTWARE</Button>
        </FadeInWhenVisible>
      </PageLayout>
      {/* FAQ Section */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={telecommunicationFaqs} title="FAQ's" />
      </div>
    </>
  );
};

export default Telecommunications;

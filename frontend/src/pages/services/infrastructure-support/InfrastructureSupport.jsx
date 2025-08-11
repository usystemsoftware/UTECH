import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import {
  Headline,
  TypographyMuted,
  TypographyH5,
} from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import {
  infrastructureCustom,
  infrastructureFeatures,
  infrastructuresupportSolutions,
  dicominfrastructure,
  Custominfrastructuregame,
  infrastructureServicesfedus,
  faqs,
} from "./Data";

const InfrastructureSupport = () => {
  return (
    <>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/infrastructuresupport.jpg"
        title="IT Infrastructure Support Services"
        buttonText="Get Infrastructure Support"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === INTRO & CORE SERVICES SECTION === */}
      <PageLayout className="space-y-8 text-center py-10">
        <Headline
          title="We Provide Top IT Infrastructure Support Services"
          description="U Tech will lead your outsourced IT infrastructure with care, modernizing platforms and technologies for enhanced agility and scalability with top infrastructure managed services."
        />

        {/* === DBMS Support Section === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-4 md:text-start text-center">
            <TypographyH5>Data Storage & Database IT Support Services</TypographyH5>
            <TypographyMuted>
              We offer cross-platform support for cloud-based and on-premise databases, leveraging machine learning technologies to revamp database management systems (DBMS).
            </TypographyMuted>
            <FeaturesList
              features={infrastructureCustom.slice(0, 3)}
              fadeUp={fadeUp}
            />
          </div>
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/introstructure-support/introstructuresupport.png"
              alt="Secure Planning Dashboard"
              className="mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
        </div>

        {/* === Help Desk Section === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/introstructure-support/recovery.png"
              alt="Secure Planning Dashboard"
              className="h-110 md:h-135 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <div className="space-y-4 md:text-start text-center">
            <TypographyH5>24/7 IT Infrastructure Help Desk Management</TypographyH5>
            <TypographyMuted>
              We provide 24/7 support for your business user community to address all technical requests and IT inquiries, infrastructure management, enabling onsite & remote help desk architecture creation & management.
            </TypographyMuted>
            <FeaturesList
              features={infrastructureCustom.slice(3, 7)}
              fadeUp={fadeUp}
              reverse
            />
          </div>
        </div>
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">GET IT SUPPORT & MAINTENANCE</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === SECURITY & MODERNIZATION SECTION === */}
      <section className="bg-secondary py-12">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="Secure & Modernize Your IT Operations With U Tech"
            description="U Tech secures & modernizes your IT operations by adopting, integrating, and implementing innovative technologies that keep your business systems up-to-date."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div className="text-start space-y-4">
              <TypographyH5>IT Infrastructure Security & Modernization</TypographyH5>
              <TypographyMuted>
                We perform vulnerability scans, SSL/AES encryptions, and other server security best practices for SQL Server, MySQL, PostgreSQL, MongoDB, Oracle, Informix, Db2, and other databases.
              </TypographyMuted>
              <FeaturesList features={infrastructureFeatures} fadeUp={fadeUp} />
            </div>
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/services/introstructure-support/secure.png"
                alt="Secure Planning Dashboard"
                className=" mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible className="py-10">
            <Button variant="hover">MODERNIZE IT OPERATIONS NOW</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === SUPPORT INTEGRATION SERVICES SECTION === */}
      <PageLayout className="space-y-10 py-12 text-center">
        <Headline
          title="Support Integration Services in IT Infrastructure"
          description="Our developers create customized online payment systems and security modules for businesses to accept every type of payment online with ease.."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
          <FeaturesList
            features={infrastructuresupportSolutions.slice(0, 2)}
            fadeUp={fadeUp}
          />
          <FadeInWhenVisible className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/services/introstructure-support/modernization.png"
              alt="Mobile Analytics App"
              className="mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList
            features={infrastructuresupportSolutions.slice(2, 4)}
            fadeUp={fadeUp}
          />
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">GET IT SUPPORT INTEGRATION NOW</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === MONITORING TOOL INTEGRATIONS SECTION === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="IT Infrastructure Monitoring Tool Integrations"
            description="We leverage leading IT infrastructure monitoring solutions for your existing IT infrastructures to maintain the health and integrity of your databases, servers, applications, and resources.."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FeaturesList
              fadeUp={fadeUp}
              features={dicominfrastructure}
              grid
            />
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/services/introstructure-support/integrations.png"
                alt="Portfolio"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">GET IT INFRASTRUCTURE MONITORING NOW</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === AI-ENABLED INFRASTRUCTURE SECTION === */}
      <PageLayout className="text-center space-y-6 py-12">
        <Headline
          title="Elevate Your IT Infrastructure with Intelligent AI Solutions"
          description="U Tech harnesses the power of Artificial Intelligence to transform your IT infrastructure. Our skilled developers customize and deploy intelligent solutions to optimize your systems and drive unparalleled performance."
        />
        <FeaturesList
          features={Custominfrastructuregame}
          fadeUp={fadeUp}
          grid3
        />
        <FadeInWhenVisible>
          <Button variant="hover">Get AI-enabled It Infrastructure</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === ENHANCED SUPPORT SERVICES SECTION === */}
      <section className="bg-secondary py-12">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="Enhanced IT Infrastructure Support Services "
            description="U Tech understands the value of an optimized IT infrastructure and its impact on all business operations. Continuous monitoring of all network and hardware performance enables the development of proactive strategies to reduce and eliminate costly network and server downtimes that hinder all operations and project completions."
          />
          <FeaturesList
            features={infrastructureServicesfedus}
            fadeUp={fadeUp}
            grid
          />
          <FadeInWhenVisible delay={0.4}>
            <Button variant="hover">Enhance IT Infrastructure Now</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === FAQ SECTION === */}
      <div className="mb-8 bg-secondary py-6">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default InfrastructureSupport;

import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, TypographyMuted, TypographyH5 } from "@/custom/Typography";
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
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

const InfrastructureSupport = () => {
  return (
    <>
    <SeoHead
        title="U Tech | InfrastructureSupport - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
        componentName="InfrastructureSupport"
      />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4 md:text-start text-center order-2 md:order-1">
            <TypographyH5>
              Data Storage & Database IT Support Services
            </TypographyH5>
            <TypographyMuted>
              We offer cross-platform support for cloud-based and on-premise
              databases, leveraging machine learning technologies to revamp
              database management systems (DBMS).
            </TypographyMuted>
            <FeaturesList
              features={infrastructureCustom.slice(0, 3)}
              iconAlign="horizontal"
            />
          </div>
          <img
            loading="lazy"
            src="/assets/services/introstructure-support/introstructuresupport.png"
            alt="Secure Planning Dashboard"
            className="w-145 xl:w-155 2xl:w-175 mx-auto order-1 md:order-2"
          />
        </div>

        {/* === Help Desk Section === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <img
            loading="lazy"
            src="/assets/services/introstructure-support/recovery.png"
            alt="Secure Planning Dashboard"
            className="h-78 sm:h-110 md:h-130 mx-auto"
          />

          <div className="space-y-4 md:text-start text-center">
            <TypographyH5>
              24/7 IT Infrastructure Help Desk Management
            </TypographyH5>
            <TypographyMuted>
              We provide 24/7 support for your business user community to
              address all technical requests and IT inquiries, infrastructure
              management, enabling onsite & remote help desk architecture
              creation & management.
            </TypographyMuted>
            <FeaturesList
              features={infrastructureCustom.slice(3, 7)}
              reverse
              iconAlign="horizontal"
            />
          </div>
        </div>
        <ContactUsButton variant="hover">
          GET IT SUPPORT & MAINTENANCE
        </ContactUsButton>
      </PageLayout>

      {/* === SECURITY & MODERNIZATION SECTION === */}
      <section className="bg-secondary py-12">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="Secure & Modernize Your IT Operations With U Tech"
            description="U Tech secures & modernizes your IT operations by adopting, integrating, and implementing innovative technologies that keep your business systems up-to-date."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="text-start space-y-4 order-2 md:order-1">
              <TypographyH5>
                IT Infrastructure Security & Modernization
              </TypographyH5>
              <TypographyMuted>
                We perform vulnerability scans, SSL/AES encryptions, and other
                server security best practices for SQL Server, MySQL,
                PostgreSQL, MongoDB, Oracle, Informix, Db2, and other databases.
              </TypographyMuted>
              <FeaturesList
                features={infrastructureFeatures}
                iconAlign="horizontal"
              />
            </div>
            <img
              loading="lazy"
              src="/assets/services/introstructure-support/secure.png"
              alt="Secure Planning Dashboard"
              className="w-145 xl:w-155 2xl:w-175 mx-auto order-1 md:order-2"
            />
          </div>
          <ContactUsButton variant="hover">
            MODERNIZE IT OPERATIONS NOW
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === SUPPORT INTEGRATION SERVICES SECTION === */}
      <PageLayout className="space-y-10 py-12 text-center">
        <Headline
          title="Support Integration Services in IT Infrastructure"
          description="Our developers create customized online payment systems and security modules for businesses to accept every type of payment online with ease.."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
          <FeaturesList
            features={infrastructuresupportSolutions.slice(0, 2)}
            center
          />
          <img
            loading="lazy"
            src="/assets/services/introstructure-support/modernization.png"
            alt="Mobile Analytics App"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
          <FeaturesList
            features={infrastructuresupportSolutions.slice(2, 4)}
            center
          />
        </div>
        <ContactUsButton variant="hover">
          GET IT SUPPORT INTEGRATION NOW
        </ContactUsButton>
      </PageLayout>

      {/* === MONITORING TOOL INTEGRATIONS SECTION === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="IT Infrastructure Monitoring Tool Integrations"
            description="We leverage leading IT infrastructure monitoring solutions for your existing IT infrastructures to maintain the health and integrity of your databases, servers, applications, and resources.."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <FeaturesList features={dicominfrastructure} grid center />
            <img
              loading="lazy"
              src="/assets/services/introstructure-support/integrations.png"
              alt="Portfolio"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            GET IT INFRASTRUCTURE MONITORING NOW
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === AI-ENABLED INFRASTRUCTURE SECTION === */}
      <PageLayout className="text-center space-y-6 py-12">
        <Headline
          title="Elevate Your IT Infrastructure with Intelligent AI Solutions"
          description="U Tech harnesses the power of Artificial Intelligence to transform your IT infrastructure. Our skilled developers customize and deploy intelligent solutions to optimize your systems and drive unparalleled performance."
        />
        <FeaturesList features={Custominfrastructuregame} grid3 center />
        <ContactUsButton variant="hover">
          Get AI-enabled It Infrastructure
        </ContactUsButton>
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
            grid
            iconAlign="horizontal"
          />
          <ContactUsButton variant="hover">
            Enhance IT Infrastructure Now
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* === FAQ SECTION === */}
      <div className="py-10">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default InfrastructureSupport;

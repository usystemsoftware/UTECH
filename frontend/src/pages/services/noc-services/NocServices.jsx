import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import {
  NocFeatures,
  NocSolutions,
  NocSupport,
  NocSupportservices,
  NocServicesfedus,
  faqs,
} from "./Data";

const NocServices = () => {
  return (
    <>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/noc.jpg"
        title="24/7 NOC SERVICES"
        description="Eliminate workflow bottlenecks and costly network downtime with U Tech’s network operations center services."
        buttonText="SPEAK WITH A NOC EXPERT"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === Comprehensive NOC Service Models Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Comprehensive NOC Service Models"
          description="Our certified NOC analysts design flexible service models tailored to your unique business challenges. U Tech offers fully managed and co-managed NOC services and NOC as service."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/noc-services/noc.png"
              alt="Migration Planning Dashboard"
              className="mx-auto w-155"
            />
          </FadeInWhenVisible>
          <FeaturesList
            features={NocFeatures}
            iconAlign="horizontal"
          />
        </div>
        <ContactUsButton variant="hover">GET NOC SERVICES</ContactUsButton>
      </PageLayout>

      {/* === Infrastructure Monitoring Services Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Infrastructure Monitoring Services"
            description="Let U Tech’s software and IT specialists proactively monitor your infrastructure assets in real-time, proactively performing health checks to ensure optimum performance uptime, mitigating costly downtime."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
            <FeaturesList features={NocSolutions.slice(0, 2)} fadeUp={fadeUp} center />
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/services/noc-services/monitoring.png"
                alt="Mobile Analytics App"
                className="mx-auto md:w-80 w-62"
              />
            </FadeInWhenVisible>
            <FeaturesList features={NocSolutions.slice(2, 4)} fadeUp={fadeUp} center />
          </div>
          <ContactUsButton variant="hover">HIRE OUR NOC SERVICE PROVIDERS</ContactUsButton>
        </PageLayout>
      </section>

      {/* === NOC Support & Management Services Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="NOC Support & Management Services"
          description="U Tech offers comprehensive NOC support & management services to efficiently complete backup and disaster recovery tasks, ultimately ensuring optimal network performance and full protection of critical data assets and invaluable hardware."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FeaturesList features={NocSupport} fadeUp={fadeUp} iconAlign="horizontal" />
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/noc-services/services.png"
              alt="Noc Planning Dashboard"
              className="mx-auto w-135"
            />
          </FadeInWhenVisible>
        </div>
        <ContactUsButton variant="hover">GET NOC SUPPORT SERVICES</ContactUsButton>
      </PageLayout>

      {/* === NOC Automation & AI-Powered Solutions Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="NOC Automation & AI-Powered Solutions"
            description="U Tech leverages modernized AI-driven NOC resources to automate tasks, efficiently monitor large data sets, and proactively improve performance utilizing cloud-based infrastructures."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/services/noc-services/powered.png"
                alt="Noc Planning Dashboard"
                className="mx-auto w-155"
              />
            </FadeInWhenVisible>
            <FeaturesList features={NocSupportservices} fadeUp={fadeUp} iconAlign="horizontal" />
          </div>
          <ContactUsButton variant="hover">GET AI-POWERED NOC SOLUTIONS</ContactUsButton>
        </PageLayout>
      </section>

      {/* === Why Choose U Tech for NOC Services Section === */}
      <PageLayout className="text-center space-y-10 py-16">
        <Headline
          title="Why Choose U Tech for NOC Services?"
          description="U Tech’s certified NOC analysts enable efficient and proactive monitoring and troubleshooting of all cloud-based resources, professionally servicing hybrid and multi-cloud ecosystems. We leverage deep knowledge and versatile development to deliver exceptional client services, safeguarding your critical data assets."
        />
        <FeaturesList features={NocServicesfedus} fadeUp={fadeUp} grid center />
        <ContactUsButton variant="hover">SPEAK WITH A NOC EXPERT</ContactUsButton>
      </PageLayout>

      {/* === FAQ Section === */}
      <div className="bg-secondary py-12">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default NocServices;

import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import { Headline } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import {
  implementationgame,
  implementationFeatures,
  implementationdeploymentSolutions,
  faqs,
} from "./Data";

const ImplementationDeployment = () => {
  return (
    <>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/implementation.jpg"
        title="SOFTWARE DEPLOYMENT SERVICES"
        description="Streamlined Software Deployment Services for Seamless Implementation."
        buttonText="REQUEST A CONSULT"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === Team Augmentation Overview Section === */}
      <PageLayout className="text-center space-y-6 py-12">
        <Headline
          title="Augment Your IT Team with Low-Cost Software Developers"
          description="U Tech has over 2,800 dedicated software developers to augment your existing IT team."
        />
        <FeaturesList features={implementationgame} fadeUp={fadeUp} grid3 center />
        <FadeInWhenVisible>
          <Button variant="hover">Get Your Telecom Software Audit</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Deployment & Implementation Process Overview Section === */}
      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <Headline
            title="We Make Software Deployment and Implementation Easy and Cost-Effective"
            description="Without an exhaustive and carefully considered plan for custom deployment and implementation, launching an application can be a nightmare. U Tech's software deployment specialists assess and assemble apps for all environments, effortlessly delivering new technology to end-users without the headache."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible className="hidden sm:block">
              <img
                loading="lazy"
                src="/assets/services/implementation-deployment/deployment.png"
                alt="Custom Planning Dashboard"
                className="mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList features={implementationFeatures} fadeUp={fadeUp} iconAlign="horizontal" />
          </div>
        </PageLayout>
      </section>

      {/* === Third-Party Software Deployment Section === */}
      <PageLayout className="space-y-8 text-center py-6">
        <Headline
          title="Third-party Custom Deployment and Implementation Services"
          description="We provide custom deployment and implementation services for third-party software from vendors like Sage, Epicor, Oracle, NetSuite, SAP, and Cognos."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {implementationdeploymentSolutions?.map((item, index) => (
            <div key={index} className="mt-10 text-center">
              {/* === Partner Logos Above Title === */}
              <div className="flex items-center flex-wrap justify-center gap-8 text-center mb-6">
                {item?.partners.map((partner, pIndex) => (
                  <FadeInWhenVisible key={pIndex} delay={0.5}>
                    <img
                      loading="lazy"
                      src={`/assets/services/implementation-deployment/images/${partner}.png`}
                      alt={`${item.title} - ${partner}`}
                      className="mx-auto"
                    />
                  </FadeInWhenVisible>
                ))}
              </div>

              {/* === Title + Description (FeaturesList) === */}
              <FeaturesList fadeUp={fadeUp} features={[item]} center/>
            </div>
          ))}
        </div>
      </PageLayout>

      {/* === FAQ SECTION === */}
      <div className="bg-secondary py-8">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default ImplementationDeployment;

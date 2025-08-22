import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, TypographyH3 } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import FaqSection from "@/custom/FaqSection";
import {
  faqs,
  goodCompany,
  itSupportServices,
  itSupportServices2,
  portfolioItems,
  slaServices,
  whiteLabelItSupport,
} from "./Data";

export default function SLASupport() {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/sla-support.jpeg"
        title="IT support services"
        description="Scalable IT Support Services For Businesses Of All Sizes"
        buttonText="GET IT SUPPORT SERVICES"
        buttonLink="#"
        imageFit="cover"
      />

      <PageLayout className="space-y-10 py-16">
        <Headline
          title="Let Us Manage Your Outsourced IT Support Needs"
          description="U Tech's IT support services are tailored to your business needs. Our IT support specialists align network architecture and end-to-end communication, to ensure your company has the best IT solutions built by certified technology experts. We provide small, midsize, and enterprise size businesses with scalable IT support both onsite and remotely."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <FeaturesList features={itSupportServices.slice(0, 2)} center />
          <img
            loading="lazy"
            src="/assets/services/sla-support/let-us-manage-your-outsourced-it-support-needs.png"
            alt="Mobile Analytics App"
            className="mx-auto w-42 sm:w-52 xl:w-56 2xl:w-64"
          />
          <FeaturesList features={itSupportServices.slice(2, 4)} center />
        </div>
      </PageLayout>

      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Elevate Your IT Support System with Our White-Label Support Services"
            description="Discover how U Tech's expert IT support services can transform your IT support capabilities, providing scalable, cost-effective support solutions from top-tier professionals to elevate your technology services for clients."
          />
          <FeaturesList features={whiteLabelItSupport} center grid3 />
          <ContactUsButton variant="hover">
            GET WHITE-LABEL IT SUPPORT
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-10">
        <Headline
          title="Customized Business IT Support Services"
          description="We work with many types of IT customers with unique service needs. We craft an IT support plan and for each customer to help them get the best value and strategically select their services."
        />
        <FeaturesList features={itSupportServices2} center grid3 />
      </PageLayout>

      <section className="bg-secondary py-16 text-center">
        <PageLayout className="space-y-10">
          <Headline
            title="Remote & Reliable: 24-hour SLA Management (IT Support)"
            description="U Tech offers the best IT Support to meet your contracted Service Level Agreements (SLA). We guarantee your SLA compliance from downtime through our speedy recoveries using best practice protocols. We combine industry talent and up-to-date technology to ensure optimal monitoring, reporting and management of your SLA services. Clients want seamless uptime and 24-hour support. We are the individuals with the know how to meet their expectations and exceed yours!"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 mt-16 items-center gap-6">
            <img
              loading="lazy"
              src="/assets/services/sla-support/remote-and-reliable.png"
              alt="Migration Planning Dashboard"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList features={slaServices} iconAlign="horizontal" />
          </div>

          <ContactUsButton variant="hover">GET IT SUPPORT NOW</ContactUsButton>
        </PageLayout>
      </section>

      {/* company info */}
      <PageLayout className="text-center space-y-10 py-12">
        <TypographyH3 className="text-primary uppercase">
          You're In Good Company
        </TypographyH3>

        <div className="grid grid-cols-2 max-w-6xl mx-auto items-center sm:grid-cols-3 md:grid-cols-4 gap-6">
          {goodCompany.map((item, index) => (
            <div key={index}>
              <img
                loading="lazy"
                src={item?.img}
                alt={item?.label}
                className="object-contain w-44 mx-auto"
              />
            </div>
          ))}
        </div>
      </PageLayout>

      {/* === FAQ SECTION === */}
      <div className="py-16">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>

      {/* PORTFOLIO GRID SECTION WITH ANIMATION */}
      <PortfolioGrid items={portfolioItems} />
    </>
  );
}

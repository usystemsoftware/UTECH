import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import { TypographyH3, TypographyMuted } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import {
  services,
  services2,
  services3,
  industryRoutes,
  services4,
  services5,
  services6,
  services7,
  services8,
  techRoutes,
  softwareAiFaq,
  portfolioItems,
} from "./Data";
import { Link } from "react-router-dom";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

const Services = () => {
  return (
    <>
    <SeoHead
        title="U Tech | Company Blog - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      <HeroSection
        backgroundImage="/banner/services.jpg"
        title="CUSTOM SOFTWARE DEVELOPMENT SERVICES"
        description="Transforming Industries with AI-Powered Custom Software Development Solutions"
        buttonText="GET CUSTOM SOFTWARE SOLUTIONS"
        buttonLink="#"
        imageFit="cover"
      />

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="Custom Software Development Company With Dedicated Developers Offering Vast Industry-Specific Experience"
          description="We provide world-class custom software development services for startups, small-to-midsize (SMB), and enterprise-size businesses. Our expertise also extends to providing dedicated software development support, ensuring optimal performance and long-term success for your projects."
        />
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <img
            loading="lazy"
            src="/assets/services/services/10035.png"
            alt="Portfolio"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
          <FeaturesList features={services} iconAlign="horizontal" />
        </div>
      </PageLayout>

      <PageLayout className="space-y-10 text-center py-16">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
          <FeaturesList features={services2} iconAlign="horizontal" />
          <img
            loading="lazy"
            src="/assets/services/services/10036.png"
            alt="Portfolio"
            className="w-66 sm:w-90 md:w-100 xl:w-110 mx-auto"
          />
        </div>
        <ContactUsButton variant="hover">
          HIRE APPLICATION SOFTWARE DEVELOPMENT SERVICES
        </ContactUsButton>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Software Solutions"
            description="Augment your existing development team to complete a big project or build a new software solution or application from scratch with the best custom software development company, U tech."
          />
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <img
              loading="lazy"
              src="/assets/services/services/10037.png"
              alt="Portfolio"
              className="w-76 sm:w-90 md:w-130 2xl:w-135 mx-auto"
            />
            <FeaturesList features={services3} iconAlign="horizontal" />
          </div>
          <ContactUsButton variant="hover">
            GET CUSTOM SOFTWARE SERVICES
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-16 text-center">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <TypographyH3 className="text-left">
                Our Developers Have Industry Expertise
              </TypographyH3>
              <TypographyMuted className="text-left">
                Our dedicated team of in-house software developers has extensive
                industry-specific experience building custom software solutions
                and applications for
              </TypographyMuted>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center ">
              <div>
                <ul>
                  {industryRoutes.slice(0, 9).map((item, index) => (
                    <li key={index} className="flex items-start space-y-2">
                      <span className="text-black text-2xl mr-2 -mt-1">•</span>
                      <Link
                        to={item?.path}
                        className="text-teal-600 hover:text-teal-700 transition-colors duration-200 cursor-pointer"
                      >
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  {industryRoutes.slice(9, 16).map((item, index) => (
                    <li key={index} className="flex items-start space-y-2">
                      <span className="text-black text-2xl mr-2 -mt-1">•</span>
                      <Link
                        to={item?.path}
                        className="text-teal-600 hover:text-teal-700 transition-colors duration-200 cursor-pointer"
                      >
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <img
            loading="lazy"
            src="/assets/services/services/10038.png"
            alt="Portfolio"
            className="w-145 xl:w-155 2xl:w-185 mx-auto"
          />
        </div>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Industry-Specific Software Solutions"
            description="Integrate scalable and customized industry-specific software with U tech into workflows for industries such as healthcare, finance, and retail."
          />
          <FeaturesList features={services4} grid3 center />
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="Software Development Support"
          description="Discover comprehensive software support services, including consulting, optimization, maintenance, and patch management to enhance system performance."
        />
        <FeaturesListOpposite features={services5} />
        <ContactUsButton variant="hover">
          GET RELIABLE SOFTWARE SUPPORT
        </ContactUsButton>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="AI-Powered Custom Software Development Services"
            description="We are a software development services company that also offers AI-powered custom software development services that are designed to align perfectly with your unique business requirements. Maximize the potential of your projects with intelligent automation, data-driven insights, personalized user interactions, and more."
          />
          <FeaturesList features={services6} grid3 center />
          <ContactUsButton variant="hover">
            AI-POWERED CUSTOM SOFTWARE SERVICES
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 text-center py-16">
        <Headline
          title="Product Lifecycle Management (PLM)"
          description="Our agile, end-to-end product lifecycle management (PLM) model covers everything from conceptualization, concurrent front-end & back-end coding, deployment, QA, and more.
"
        />
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <img
            loading="lazy"
            src="/assets/services/services/10039.png"
            alt="Portfolio"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />

          <FeaturesList features={services7} iconAlign="horizontal" />
        </div>
      </PageLayout>

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="We Have On-Demand Developers"
          description="We are proud to employ over 2,800 in-house developers with many years of combined software development experience in a wide array of industries."
        />
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <img
            loading="lazy"
            src="/assets/services/services/10035.png"
            alt="Portfolio"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
          <FeaturesList features={services8} iconAlign="horizontal" />
        </div>
        <ContactUsButton variant="hover">
          HIRE CUSTOM SOFTWARE DEVELOPERS
        </ContactUsButton>
      </PageLayout>

      <PageLayout className="space-y-10 py-16 text-center">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <TypographyH3 className="text-left">
                Hire Developers With Programming Expertise
              </TypographyH3>
              <TypographyMuted className="text-left">
                Our highly experienced software developers have a deep
                understanding of how to leverage top programming languages,
                frameworks, and other software development tools to create the
                ideal solution for your digital transformation goals.
              </TypographyMuted>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center ">
              <div>
                <ul>
                  {techRoutes.slice(0, 6).map((item, index) => (
                    <li key={index} className="flex items-start space-y-2">
                      <span className="text-black text-2xl mr-2 -mt-1">•</span>
                      <Link
                        to={item?.path}
                        className="text-teal-600 hover:text-teal-700 transition-colors duration-200 cursor-pointer"
                      >
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  {techRoutes.slice(6, 12).map((item, index) => (
                    <li key={index} className="flex items-start space-y-2">
                      <span className="text-black text-2xl mr-2 -mt-1">•</span>
                      <Link
                        to={item?.path}
                        className="text-teal-600 hover:text-teal-700 transition-colors duration-200 cursor-pointer"
                      >
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <img
            loading="lazy"
            src="/assets/services/services/10040.png"
            alt="Portfolio"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
        </div>
      </PageLayout>

      <div className="py-16">
        <FaqSection
          faqs={softwareAiFaq}
          title="AI Software Services: Answers to Commonly Asked Questions"
        />
      </div>

      <PortfolioGrid items={portfolioItems} />
    </>
  );
};

export default Services;

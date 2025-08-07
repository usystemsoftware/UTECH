import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import FaqSection from "@/custom/FaqSection";
import { Headline, TypographyH3, TypographyMuted, TypographyH4 } from "@/custom/Typography";
import { Link } from 'react-router-dom'
import {
  TelecomCustom,
  CustomTransformationFeatures,
  TelecomCustomservices,
  CustomServicesgame,
  Telecommunicationfedus,
  CustomServiceAi,
  CustomTransformation,
  CustomDeveloper,
  ProgrammerCustomservices,
  faqs,
} from "./Data";


const CustomServices = () => {
  return (
    <>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/customservices.jpg"
        title="CUSTOM SOFTWARE DEVELOPMENT SERVICES"
        description="Transforming Industries with AI-Powered Custom Software Development Solutions"
        buttonText="GET CUSTOM SOFTWARE SOLUTIONS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === Overview + First FeatureList3 Pair (Migrations + Integration) === */}
      <PageLayout className="space-y-8 text-center py-10">
        <Headline
          title="Custom Software Development Company With Dedicated Developers Offering Vast Industry-Specific Experience"
          description="We provide world-class custom software development services for startups, small-to-midsize (SMB), and enterprise-size businesses. Our expertise also extends to providing dedicated software development support, ensuring optimal performance and long-term success for your projects."
        />

        {/* === Migration Solutions === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <FadeInWhenVisible className="hidden sm:block">
            <img
              loading="lazy"
              src="/assets/services/customservices/migrations.png"
              alt="Custom Planning Dashboard"
              className="mx-auto w-135"
            />
          </FadeInWhenVisible>
          <div className="block md:hidden">
            <FeaturesList
              features={TelecomCustom.slice(0, 5)}
              fadeUp={fadeUp}
              reverse
            />
          </div>
          <div className="md:block hidden">
            <FeaturesList
              features={TelecomCustom.slice(0, 5)}
              fadeUp={fadeUp}
              reverse
              grid
            />
          </div>
        </div>

        {/* === Integration Solutions === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="md:block hidden">
            <FeaturesList
              features={TelecomCustom.slice(5, 10)}
              fadeUp={fadeUp}
              reverse
              grid
            />
          </div>
          <div className="block md:hidden">
            <FeaturesList
              features={TelecomCustom.slice(5, 10)}
              fadeUp={fadeUp}
              reverse
            />
          </div>
          <FadeInWhenVisible className="hidden sm:block">
            <img
              loading="lazy"
              src="/assets/services/customservices/integration.png"
              alt="Custom Planning Dashboard"
              className="mx-auto"
            />
          </FadeInWhenVisible>
        </div>

        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">
            HIRE APPLICATION SOFTWARE DEVELOPMENT SERVICES
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Product Engineering Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center py-10 space-y-10">
          <Headline
            title="Custom Software Solutions"
            description="Augment your existing development team to complete a big project or build a new software solution or application from scratch with the best custom software development company, U Tech.."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible className="hidden sm:block">
              <img
                loading="lazy"
                src="/assets/services/customservices/product.png"
                alt="Custom Planning Dashboard"
                className="w-135 mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={CustomTransformationFeatures}
              fadeUp={fadeUp}
            />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">GET CUSTOM SOFTWARE SERVICES</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Solution Showcase (with image) === */}
      <PageLayout className="space-y-8 grid grid-cols-1 sm:grid-cols-2 items-center py-10">
        <div>
          <TypographyH3>
            Our Developers Have Industry Expertise
          </TypographyH3>
          <TypographyMuted>
            Our dedicated team of in-house software developers has extensive industry-specific experience building custom software solutions and applications for:
          </TypographyMuted>
          <div className="flex items-center mt-4 gap-12">
            <div className="flex flex-col text-blue-700 space-y-2">
              {TelecomCustomservices.slice(0, 6).map((item, idx) => (
                <Link to={item?.path} key={idx}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col text-blue-700 space-y-2">
              {TelecomCustomservices.slice(6, 12).map((item, idx) => (
                <Link to={item?.path} key={idx}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <FadeInWhenVisible className="hidden sm:block">
          <img
            loading="lazy"
            src="/assets/services/customservices/solutions.png"
            alt="Custom Planning Dashboard"
            className="w-145"
          />
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Industry-Specific Software Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center space-y-6 py-12">
          <Headline
            title="Industry-Specific Software Solutions"
            description="Integrate scalable and customized industry-specific software with U Tech into workflows for industries such as healthcare, finance, and retail.."
          />
          <FeaturesList features={CustomServicesgame} fadeUp={fadeUp} grid3 />
          <FadeInWhenVisible>
            <Button variant="hover">Get Your Telecom Software Audit</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Software Support Services Section === */}
      <PageLayout className="text-center space-y-10">
        <Headline
          title="Software Development Support"
          description="Discover comprehensive software support services, including consulting, optimization, maintenance, and patch management to enhance system performance."
        />
        <FeaturesList features={Telecommunicationfedus} fadeUp={fadeUp} grid />
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">GET RELIABLE SOFTWARE SUPPORT</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === AI-Powered Custom Software Development Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center space-y-6 py-12">
          <Headline
            title="AI-Powered Custom Software Development Services"
            description="We are a software development services company that also offers AI-powered custom software development services that are designed to align perfectly with your unique business requirements. Maximize the potential of your projects with intelligent automation, data-driven insights, personalized user interactions, and more."
          />
          <FeaturesList features={CustomServiceAi} fadeUp={fadeUp} grid3 />
          <FadeInWhenVisible>
            <Button variant="hover">AI-POWERED CUSTOM SOFTWARE SERVICES</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Product Lifecycle Management (PLM) Section === */}
      <PageLayout className="text-center py-10 space-y-10">
        <Headline
          title="Product Lifecycle Management (PLM)"
          description="Our agile, end-to-end product lifecycle management (PLM) model covers everything from conceptualization, concurrent front-end & back-end coding, deployment, QA, and more.."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-15">
          <FadeInWhenVisible className="hidden sm:block">
            <img
              loading="lazy"
              src="/assets/services/customservices/management.png"
              alt="Custom Planning Dashboard"
            />
          </FadeInWhenVisible>
          <FeaturesList features={CustomTransformation} fadeUp={fadeUp} />
        </div>
      </PageLayout>

      {/* === On-Demand Developer Section === */}
      <section className="bg-secondary">
        <PageLayout className="text-center py-10 space-y-10 gap-15">
          <Headline
            title="We Have On-Demand Developers"
            description="We are proud to employ over 2,800 in-house developers with many years of combined software development experience in a wide array of industries."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible className="hidden sm:block">
              <img
                loading="lazy"
                src="/assets/services/customservices/migrations.png"
                alt="Custom Planning Dashboard"
              />
            </FadeInWhenVisible>
            <FeaturesList features={CustomDeveloper} fadeUp={fadeUp} />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">HIRE CUSTOM SOFTWARE DEVELOPERS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Final Expertise Highlights Section === */}
      <PageLayout className="space-y-8 grid grid-cols-1 sm:grid-cols-2 items-center gap-4 py-10">
        <div>
          <TypographyH3>
            Hire Developers With Programming Expertise
          </TypographyH3>
          <TypographyMuted>
            Our highly experienced software developers have a deep understanding of how to leverage top programming languages, frameworks, and other software development tools to create the ideal solution for your digital transformation goals.
          </TypographyMuted>
          <div className="flex items-center mt-4 gap-12">
            <div className="grid gap-1">
              <TypographyH4>
                Programming Languages
              </TypographyH4>
              {ProgrammerCustomservices.slice(0, 6).map((item, idx) => (
                <>
                  <Link to={item?.path} key={idx} className="flex flex-col text-blue-700 space-y-2">
                    {item.title}
                  </Link>
                </>
              ))}
            </div>
            <div className="grid gap-1">
              <TypographyH4>
                Frameworks
              </TypographyH4>
              {ProgrammerCustomservices.slice(6, 12).map((item, idx) => (
                <>
                  <Link to={item?.path} key={idx} className="flex flex-col text-blue-700 space-y-2">
                    {item.title}
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
        <FadeInWhenVisible className="hidden sm:block">
          <img
            loading="lazy"
            src="/assets/services/customservices/expertise.png"
            alt="Custom Planning Dashboard"
          />
        </FadeInWhenVisible>
      </PageLayout >

      {/* === FAQ SECTION === */}
      <div div className="mb-8" >
        <FaqSection faqs={faqs} title="FAQ's" />
      </div >
    </>
  );
};

export default CustomServices;

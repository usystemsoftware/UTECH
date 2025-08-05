import { Button } from "@/components/ui/button";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import { FeaturesList } from "@/components/FeaturesList";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import PageLayout from "@/custom/PageLayout";
import TechnologyStatCard from "@/components/TechnologyStatCard";
import { Headline, TypographyH4 } from "@/custom/Typography";
import {
  aiDevCardData,
  backendTechDetails,
  frontendTech,
  supportServices,
  webDevCardData,
  webDevelopmentFaqs,
  webDevelopmentServices,
} from "./Data";

const WebDevelopment = () => {
  return (
    <>
      {/* ====== Hero Section ====== */}
      <HeroSection
        backgroundImage="/banner/web-development-banner.jpg"
        title="CUSTOM WEB DEVELOPMENT SERVICES"
        description="We’ve Got Experienced Website Developers"
        buttonText="GET CUSTOM WEB DEVELOPMENT SOLUTIONS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* ====== Feature Section 1 ====== */}
      <PageLayout className="space-y-12 py-16 text-center">
        <Headline
          title="Our Website Development Company Can Build Your Dream Web Application"
          description="Our professional web development services can build a web
            application suited to your business needs. We design engaging and
            user-friendly web applications and websites that optimize the user
            experience. We deliver high-quality solutions for optimal business
            outcomes."
        />

        {/* First two features */}
        <FeaturesList features={webDevCardData} fadeUp={fadeUp} grid />

        {/* Call to action button */}
        <FadeInWhenVisible>
          <Button variant="hover">HIRE WEB DEVELOPER</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ====== Services Section ====== */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Professional Web Design and Development Company"
          description=" Our  Full-Stack Web Developers have the programming expertise
          and industry-specific experience to build, integrate, and customize
          your website or application to align perfectly with your vision."
        />

        {/* List of web development services */}
        <FeaturesList features={webDevelopmentServices} fadeUp={fadeUp} grid3 />

        <FadeInWhenVisible>
          <Button variant="hover">HIRE FULL-STACK WEB DEVELOPERS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ====== Tech Stack Section ====== */}
      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Full-Stack Technology"
            description="Our Website Developers utilize multiple software platforms,
            providing greater computing power, enhanced graphics, robust
            security standards, and improved performance levels."
          />

          {/* Frontend tech */}
          <TypographyH4 className="mt-6">
            Client Software (Front-End)
          </TypographyH4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left mt-10">
            {frontendTech.map((tech, index) => (
              <TechnologyStatCard key={index} tech={tech} />
            ))}
          </div>

          {/* Backend tech */}
          <TypographyH4 className="mt-6">
            Server Software (Back-End)
          </TypographyH4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left mt-10">
            {backendTechDetails.map((tech, index) => (
              <TechnologyStatCard key={index} tech={tech} />
            ))}
          </div>

          <FadeInWhenVisible>
            <Button variant="hover">REQUEST WEB DEVELOPMENT SERVICES</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* ====== AI Features Section ====== */}
      <PageLayout className="py-16 text-center space-y-12">
        <Headline
          title="AI-Powered Web Development Solutions"
          description="Catalyze your website development journey with our cutting-edge AI
          solutions. From enhancing user experiences and automating
          development processes to optimizing content and deploying
          intelligent applications, our expert team harnesses the power of AI
          to drive innovation and success."
        />

        <FeaturesList features={aiDevCardData} fadeUp={fadeUp} grid />

        <FadeInWhenVisible>
          <Button variant="hover">HIRE WEB APP DEVELOPER</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ====== Support Section ====== */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-12 text-center">
          <Headline
            title="Web Development Support Services"
            description="Web development has become increasingly more complex and, as a
            result, more error-prone. Understanding this, our developers and
            support providers are ready to use their skills and knowledge for
            your benefit."
          />

          <FeaturesList features={supportServices} fadeUp={fadeUp} grid />

          <FadeInWhenVisible>
            <Button variant="hover">GET WEB SUPPORT ON-DEMAND</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* ====== FAQ Section ====== */}
      <div className="my-16">
        <FaqSection faqs={webDevelopmentFaqs} title="FAQ's" />
      </div>
    </>
  );
};

export default WebDevelopment;

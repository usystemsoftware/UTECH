import HeroSection from "@/components/HeroSection";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import PageLayout from "@/custom/PageLayout";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline } from "@/custom/Typography";
import PortfolioGrid from "@/components/PortfolioGrid";
import { TypographyList2 } from "@/custom/Typography";
import {
  autodeskAISolutions,
  autodeskIndustrySolutions,
  autodeskProductsData,
  autodeskServices,
  autodeskSupportData,
  consultingServices,
  Faqs,
  portfolioItems,
  tvpoasterDescription,
} from "./Data";
import VideoTvPoster from "@/custom/VideoTvPoster";

const Autodesk = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/autodesk.jpg"
        title="CUSTOM AUTODESK CONSULTING & IMPLEMENTATION SOLUTIONS"
        buttonText="HIRE AWS DEVELOPERS"
        partnerLogo="/assets//solutions/autodesk/partner.png"
      />

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="AWS Migration Services"
          description="U Tech offers comprehensive migration services to help businesses transition to Amazon Web Services (AWS). We tailor solutions to your needs, ensuring efficient data and application transfer with minimal disruption."
        />
        <FeaturesList features={autodeskServices} grid3 center />
        <img
          loading="lazy"
          src="/assets/solutions/autodesk/10019.gif"
          alt="Portfolio"
          className="sm:w-125 xl:w-135 2xl:w-165 w-86 mx-auto"
        />
        <ContactUsButton variant="hover">
          CONTACT FOR AUTODESK CONSULTING SERVICES
        </ContactUsButton>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Hire Certified Autodesk Experts with Industry Experience"
            description="U Tech’s certified industry experts use Autodesk solutions to provide end-to-end project services for businesses in all kinds of professional fields."
          />
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <img
              loading="lazy"
              src="/assets/solutions/autodesk/10020.png"
              alt="Portfolio"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />
            <FeaturesList
              features={autodeskIndustrySolutions}
              iconAlign="horizontal"
            />
          </div>
          <ContactUsButton variant="hover">
            CHECK METRICS ON AWS NOW
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="U Tech Provides Cutting-Edge AI-Powered Autodesk Solutions"
          description="U Tech’s AI experts and certified Autodesk solutions team empower today’s architects, engineers, and designers by creating and integrating scalable, robust resources, facilitating innovation and unprecedented efficiency."
        />
        <FeaturesList features={autodeskAISolutions} grid3 center />
        <ContactUsButton variant="hover">
          Get AI-Powered Autodesk Solutions
        </ContactUsButton>
      </PageLayout>

      <section>
        <VideoTvPoster imageHeight="250px" information={tvpoasterDescription} />
      </section>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Advanced Autodesk Support Solutions"
            description="Our technical prowess expands beyond designing customized software solutions; we offer seamless Autodesk integration with continuous technical support and monitoring, ensuring 24/7 expertise and the optimal performance of all enhanced Autodesk resources to provide enriching, end-user experiences."
          />
          <FeaturesListOpposite features={autodeskSupportData} />
          <ContactUsButton variant="hover">
            Seamless Autodesk Support – Let’s Talks
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="U Tech’s Autodesk Product Expertise"
          description="We have unparalleled expertise in a wide variety of Autodesk products, including Revit, BIM 360, AutoCAD, Platform Services, Maya, Fusion 360, Inventor, Civil 3D, and many more. Our services include custom programming and integration solutions to tailor these tools to business needs and ensure seamless connectivity with other Autodesk products."
        />
        <FeaturesList features={autodeskProductsData} grid3 center />
        <ContactUsButton variant="hover">
          Get AI-Powered Autodesk Solutions
        </ContactUsButton>
      </PageLayout>

      <PageLayout className="space-y-10 py-16 text-center">
        <Headline
          title="AWS Tools & Technologies"
          description="U Tech will customize, test, and deploy your custom web or mobile applications to AWS using top-of-the-line AWS products, tools, & technologies throughout the entire project lifecycle."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <img
            loading="lazy"
            src="/assets/solutions/autodesk/10030.png"
            alt="Portfolio"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
          <div className="grid md:justify-center px-8">
            <TypographyList2
              className="text-slate-800 text-left [&>li]:mt-3"
              items={consultingServices}
            />
          </div>
        </div>
        <ContactUsButton variant="hover">
          GET AUTODESK BOH SUPPORT
        </ContactUsButton>
      </PageLayout>

      <div className="py-10">
        <FaqSection faqs={Faqs} title="Frequently Asked Questions" />
      </div>

      <PortfolioGrid items={portfolioItems} />
    </>
  );
};

export default Autodesk;

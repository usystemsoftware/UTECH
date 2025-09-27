import { FeaturesList } from "@/components/FeaturesList";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import ContactUsButton from "@/custom/ContactUsButton";
import { TypographyMuted, Headline, TypographyH5 } from "@/custom/Typography";

import {
  aiUtilitySolutions,
  electricSoftwareSolutions,
  heatSoftwareSolutions,
  nuclearSolutions,
  smartGridSolutions,
  solarSoftwareSolutions,
  utilityFeatures,
  utilityManagementSolutions,
  wasteManagementSolutions,
  waterSoftwareSolutions,
  windSolutions,
} from "./Data";

// Main component for the Energy & Utilities page
export default function EnergyUtilities() {
  return (
    <>
      {/* Hero section for banner */}
      <HeroSection
        backgroundImage="/banner/utilities-banner.jpg"
        title="Utility Management with Energy Saving AI Technology"
        description="Leverage the power of AI to revolutionize energy and utilities with cutting-edge solutions for electric, water, smart grid, heat, solar, waste management, wind, and nuclear sectors."
        buttonText="GET ENERGY DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* Feature grid for top utility software areas */}
      <PageLayout className="py-12">
        <Headline
          title="Custom Energy And Utilities Software Solutions"
          description="Our experts produce cutting-edge energy management solutions that cater to the growing technical needs of the energy & utilities industry."
        />

        <FeaturesGridnew
          leftFeatures={utilityFeatures.slice(0, 4)}
          rightFeatures={utilityFeatures.slice(4, 8)}
          centerImage="/assets/Industries/energy-utilities/desktop-combo-utilities.png"
        />
      </PageLayout>

      {/* Utility management software with illustration */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Energy Management Software Solutions"
            description="U Tech developers engineer custom energy management solutions built to streamline, automate, and simplify energy management workflows, providing resolutions for utility asset management, billing services and much more."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              loading="lazy"
              src="/assets/Industries/energy-utilities/custom-energy-mamagement-software.png"
              alt="Portfolio"
              className="sm:w-110 w-86 xl:w-130 2xl:w-145 mx-auto"
            />
            <FeaturesList
              features={utilityManagementSolutions}
              iconAlign="horizontal"
            />
          </div>
          <ContactUsButton variant="hover">GET AI ENERGY DEVELOPERS</ContactUsButton>
        </PageLayout>
      </section>

      {/* AI-specific energy solutions */}
      <PageLayout className="space-y-16 py-8">
        <Headline
          title="AI-Powered Energy and Utilities Solutions"
          description="AI-Powered Energy and Utilities Solutions U Tech’s experts design powerful AI solutions for energy and utility companies that want more efficiency, productivity, and resourcefulness. Let U Tech’s AI technology help your staff maximize their efforts to benefit loyal customers."
        />
        <FeaturesList features={aiUtilitySolutions} grid3 center />
      </PageLayout>

      {/* Electric utility section */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Electric Utility Software Solutions"
            description="U Tech delivers custom electric utility software solutions designed for grid modernization, automating and simplifying the management of electrical power sources and all other electric operations management workflows."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FeaturesList
              features={electricSoftwareSolutions}
              iconAlign="horizontal"
            />
            <img
              loading="lazy"
              src="/assets/Industries/energy-utilities/electric-management-solutions.png"
              alt="Portfolio"
              className="sm:w-52 xl:w-56 2xl:w-62 w-42 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">GET ELECTRIC MANAGEMENT DEVELOPERS</ContactUsButton>
        </PageLayout>
      </section>

      {/* Water software section */}
      <PageLayout className="space-y-10 py-8 text-center">
        <Headline
          title="Custom Water Management Solutions"
          description="We develop custom water quality monitoring solutions to help businesses manage and meet all of their water and wastewater management needs, tracking sampling activities, producing region-specific discharge monitoring reports (DMRs) and ensuring continual compliance with all water and wastewater requirements."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            loading="lazy"
            src="/assets/Industries/energy-utilities/custom-water-management-solutions.png"
            alt="Portfolio"
            className="w-135 xl:w-145 2xl:w-150 mx-auto"
          />
          <FeaturesList
            features={waterSoftwareSolutions}
            iconAlign="horizontal"
          />
        </div>
        <ContactUsButton variant="hover">GET WATER MANAGEMENT SOLUTIONS</ContactUsButton>
      </PageLayout>

      {/* Smart Grid section */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Smart Grid Technology Software"
            description="Our developers can either augment existing systems or provide custom solutions to fit specific business needs, engineering advanced technologies for grid distribution, transmission, consumption processes and more."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <FeaturesList
                features={smartGridSolutions}
                iconAlign="horizontal"
              />
            </div>
            <img
              loading="lazy"
              src="/assets/Industries/energy-utilities/custom-smart-grid-technology-services.png"
              alt="Portfolio"
              className="w-125 md:w-135 xl:w-145 2xl:w-150 mx-auto order-1 md:order-2"
            />
          </div>
          <ContactUsButton variant="hover">HIRE SMART GRID DEVELOPERS</ContactUsButton>
        </PageLayout>
      </section>

      {/* Heat utility section */}
      <PageLayout className="space-y-10 py-8 text-center">
        <Headline
          title="Custom Heat Software Solutions"
          description="At U Tech, our software developers are well-versed in the energy & utilities industry along with developing comprehensive heat monitoring software, creating all-in-one solutions for district heating systems, individual heating systems, heating plants, heat monitoring software, and much more."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div>
            <img
              loading="lazy"
              src="/assets/Industries/energy-utilities/custom-heat-software-solutions.png"
              alt="Portfolio"
              className="sm:w-56 xl:w-58 2xl:w-62 w-42 mx-auto"
            />
          </div>
          <FeaturesList
            features={heatSoftwareSolutions}
            iconAlign="horizontal"
          />
        </div>
        <ContactUsButton variant="hover">HIRE HEAT SOFTWARE DEVELOPERS</ContactUsButton>
      </PageLayout>

      {/* Solar asset software section */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Solar Asset Management Software Solutions"
            description="U Tech’s expert developers utilize a wide range of technologies, such as solar heating, artificial photosynthesis, photovoltaics, and more to customize solar asset management software solutions engineered to improve the design, construction, and management of solar power as a sustainable, renewable energy source."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-8">
            <div className="order-2 md:order-1">
              <FeaturesList
                features={solarSoftwareSolutions}
                iconAlign="horizontal"
              />
            </div>
            <img
              loading="lazy"
              src="/assets/Industries/energy-utilities/custom-solar-software-solutions.png"
              alt="Portfolio"
              className="w-72 sm:w-86 md:w-105 xl:w-120 2xl:w-125 mx-auto order-1 md:order-2"
            />
          </div>
          <ContactUsButton variant="hover">GET SOLAR SOFTWARE DEVELOPERS</ContactUsButton>
        </PageLayout>
      </section>

      {/* Waste management section */}
      <PageLayout className="space-y-10 py-8 text-center">
        <Headline
          title="Waste Management Software Solutions"
          description="Our software developers have a vast amount of knowledge and experience building custom software for the waste industry, aumenting existing IT teams and optimizing solutions through custom integrations to create a more interoperable system that encompasses all aspects of waste management."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <img
            loading="lazy"
            src="/assets/Industries/energy-utilities/custom-waste-management-software-solutions.png"
            alt="Portfolio"
            className="w-145 xl:w-155 2xl:w-185 mx-auto"
          />
          <FeaturesList
            features={wasteManagementSolutions}
            iconAlign="horizontal"
          />
        </div>
        <ContactUsButton variant="hover">GET STARTES WITH WASTE TRACKING APP</ContactUsButton>
      </PageLayout>

      {/* Compliance highlight section */}
      <section className="bg-[#009896] py-8">
        <PageLayout className="text-center space-y-4">
          <TypographyH5 className="text-white">
            We Ensure Compliance With ERP & RCRA Stanadards
          </TypographyH5>
          <TypographyMuted className="text-white">
            U tech energyand utilities software expert ensure compliance withthe
            uniteds states environments protections energy(ERP)and resource
            conversion and recovery act(RCRA) laws.
          </TypographyMuted>
        </PageLayout>
      </section>

      {/* Wind software development section */}
      <PageLayout className="space-y-10 py-8 text-center">
        <Headline
          title="Custom Wind Software Solutions"
          description="U Tech delivers custom-developed wind software solutions and applications designed to assist in the operation and development of wind farms, as well as monitoring wind speed forecasting, utilizing 3D farm modeling & visualization, monitoring wind flow/energy output window simulations, and more."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center md:gap-8">
          <img
            loading="lazy"
            src="/assets/Industries/energy-utilities/custom-wind-software-development.png"
            alt="Portfolio"
            className="w-125 md:w-135 xl:w-145 2xl:w-150 mx-auto"
          />
          <FeaturesList features={windSolutions} iconAlign="horizontal" />
        </div>
        <ContactUsButton variant="hover">HIRE WIND SOFTWARTE DEVELOPERS</ContactUsButton>
      </PageLayout>

      {/* Nuclear software section */}
      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Nuclear Energy Software Solutions"
            description="At U Tech, we deliver comprehensive nuclear energy software solutions to help businesses with nuclear facilities to automate & streamline their workflows regarding their nuclear power plant planning, power plant equipment design, spent fuel analysis & safety management monitoring, and operations management & analysis."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
            <FeaturesList features={nuclearSolutions} iconAlign="horizontal" />
            <img
              loading="lazy"
              src="/assets/Industries/energy-utilities/custom-nuclear-energy-software.png"
              alt="Portfolio"
              className="sm:w-110 w-86 xl:w-120 2xl:w-135 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            HIRE NUCLEAR ENERGY SOFTWARE DEVELOPERS
          </ContactUsButton>
        </PageLayout>
      </section>
    </>
  );
}

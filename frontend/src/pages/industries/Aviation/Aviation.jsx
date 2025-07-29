import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { TypographyH5, TypographyMuted, Headline } from "@/custom/Typography";
import {
  airlineAIandAutomationServices,
  airlineOperationsServices,
  airlinePartner,
  airlineReservationSolutions,
  airlineSoftwareServices,
  aviationFaqs,
  aviationMroSolutions,
  dronePartner,
  droneSoftwareSolutions,
} from "./Data";

export default function Aviation() {
  return (
    <>
      {/* Banner */}
      <HeroSection
        backgroundImage="/assets/industries/aviation/hero.jpeg"
        title="AVIATION SOFTWARE DEVELOPMENT"
        description="Revolutionize aviation operations with AI-powered solutions for seamless integration and enhanced efficiency."
        buttonText="GET AIRLINE SOFTWARE DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.2}
      />

      <PageLayout className="text-center my-12">
        <Headline
          title="Hire Experienced and Dedicated Airline Software Developers"
          description="U Tech’s engineers have many years of industry experience programming a scalable management software solution for airlines, airports, and independent vendors."
        />
        <FeaturesGrid
          leftFeatures={airlineSoftwareServices.slice(0, 2)}
          rightFeatures={airlineSoftwareServices.slice(2, 4)}
          centerImage="/assets/industries/aviation/desktop-combo-aviation.png"
          fadeUp={fadeUp}
        />
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-8">
          <Headline
            title="AI Solutions for the Airline Industry"
            description="U Tech's advanced AI solutions revolutionize the airline industry by optimizing revenue management, flight management, predictive maintenance, and more. With cutting-edge technology and industry expertise, our AI-driven systems provide real-time insights, streamline workflows, and ensure regulatory compliance. Seamlessly integrating with existing infrastructure, our solutions empower airlines, MROs, and flight operators to enhance operational efficiency and deliver superior customer support."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <FeaturesList
              features={airlineAIandAutomationServices.slice(0, 3)}
              fadeUp={fadeUp}
            />
            <FadeInWhenVisible className="hidden md:block">
              <img
                src="/assets/industries/aviation/flightaware-custom-integration.png"
                alt="Accounting Dashboard"
                loading="lazy"
                className="w-135"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={airlineAIandAutomationServices.slice(3, 6)}
              fadeUp={fadeUp}
            />
          </div>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Custom Airline Technology Solutions"
          description="U Tech provides custom airline management software for OEMs, MROs, Airports, and flight operators to streamline their operational workflows."
        />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <FeaturesList
            fadeUp={fadeUp}
            features={airlineOperationsServices}
            grid
          />
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/aviation/custom-flight-operations-management-software-development.png"
              alt="Portfolio"
              className="w-96 mx-auto"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">GET FLIGHT OPS SOFTWARE DEVELOPES</Button>
        </FadeInWhenVisible>
      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Airline Reservation & Ticketing Software Development"
            description="U Tech provides custom airline reservation & ticketing software development services for airlines, airline call centers, OTAs, internet booking & ticket vendors, and more."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/industries/aviation/sabre-travel-network-solutions-gif.gif"
                alt="Portfolio"
                className="w-48 mx-auto"
              />
            </FadeInWhenVisible>
            <div className="space-y-8">
              <FeaturesList
                fadeUp={fadeUp}
                features={airlineReservationSolutions}
                grid
              />
              <TypographyMuted>
                Integrate with leading GDSs and airline reservation system
                providers, such as Sabre, Galileo, Amadeus, and FlightsLogic, to
                create a unified platform for airline operators.
              </TypographyMuted>
              <div className="flex items-center justify-center gap-6 flex-wrap mt-8">
                {airlinePartner?.map((item, index) => (
                  <FadeInWhenVisible key={index} delay={0.5}>
                    <img
                      loading="lazy"
                      src={`/assets/industries/aviation/airline/${item?.img}.png`}
                      alt="Portfolio"
                      className="w-32 hover:scale-105 cursor-pointer mx-auto"
                    />
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">GET AIRLINE SOFTWARE DEVELOPES</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      <PageLayout className="my-16 py-16 grid grid-cols-1 sm:grid-cols-2 space-y-10 bg-cyan-50">
        <div className="space-y-8">
          <TypographyH5>
            U Tech ENSURES COMPLIANCE WITH AVIATION INDUSTRY REGULATORY
            STANDARDS
          </TypographyH5>
          <TypographyMuted>
            U Tech’s Custom MRO solutions meets regulatory safety-related
            standards and requirements of the Federal Aviation Administration
            (FAA), Civil Aeronautics Board (CAB), Occupational Safety & Health
            Administration (OSHA), Airworthiness Directives (AD), Temporary
            Flight Restrictions (TFR), Advisory Circulars (AC), and other
            standards associated with the industry.
          </TypographyMuted>
        </div>
        <FadeInWhenVisible delay={0.5}>
          <img
            loading="lazy"
            src="/assets/industries/healthcare/get-hl7-solutions.png"
            alt="Portfolio"
            className="w-135 mx-auto"
          />
        </FadeInWhenVisible>
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-8">
          <Headline
            title="Custom Maintenance, Repair, & Overhaul (MRO) Solutions"
            description="U Tech delivers aviation maintenance, repair, and overhaul (MRO) software solutions to aircraft maintenance directors, flight schedulers & dispatchers, inventory parts managers, and more."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
            <FeaturesList
              features={aviationMroSolutions.slice(0, 2)}
              fadeUp={fadeUp}
            />
            <FadeInWhenVisible>
              <img
                src="/assets/industries/aviation/mro-aviation-software-developers.png"
                alt="Accounting Dashboard"
                loading="lazy"
                className="w-64 mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList
              features={aviationMroSolutions.slice(2, 4)}
              fadeUp={fadeUp}
            />
          </div>
        </PageLayout>
      </section>

      <PageLayout className="py-12 space-y-12 text-center">
        <Headline
          title="Custom Drone Software Development"
          description="U Tech develops custom drone software for agriculture, construction, cinematography, indoor/outdoor inspections, search-and-rescue, and many other industry sectors."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <FadeInWhenVisible>
            <img
              src="/assets/industries/aviation/custom-drone-software-development.png"
              alt="Accounting Dashboard"
              loading="lazy"
              className="w-110 mx-auto"
            />
          </FadeInWhenVisible>
          <div className="grid gap-9">
            <FeaturesList features={droneSoftwareSolutions} fadeUp={fadeUp} grid />
            <TypographyMuted>
              Leverage ArcGIS by ESRI, along with other leading drone software
              solutions like FlytBase, DroneDeploy, and Pix4DMapper to transform
              drone image capture.
            </TypographyMuted>
            <div className="flex items-center gap-6 justify-center flex-wrap mt-8">
              {dronePartner?.map((item, index) => (
                <FadeInWhenVisible key={index} delay={0.5}>
                  <img
                    loading="lazy"
                    src={`/assets/industries/aviation/drone/${item?.img}.png`}
                    alt="Portfolio"
                    className="w-32 hover:scale-105 cursor-pointer mx-auto"
                  />
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">GET DRONE SOFTWARE DEVELOPES</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* FAQ Section */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={aviationFaqs} title="FAQ's" />
      </div>
    </>
  );
}

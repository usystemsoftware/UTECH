import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import ContactUsButton from "@/custom/ContactUsButton";
import { TypographyMuted, Headline } from "@/custom/Typography";
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
  tvpoasterDescription,
} from "./Data";
import ImageNearScreen from "@/custom/ImageNearScreen";
import VideoTvPoster from "@/custom/VideoTvPoster";

export default function Aviation() {
  return (
    <>
      {/* Banner */}
      <HeroSection
        backgroundImage="/banner/aviation-banner.jpg"
        title="AVIATION SOFTWARE DEVELOPMENT"
        description="Revolutionize aviation operations with AI-powered solutions for seamless integration and enhanced efficiency."
        buttonText="GET AIRLINE SOFTWARE DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* Airline Software Services */}
      <PageLayout className="text-center my-12">
        <Headline
          title="Hire Experienced and Dedicated Airline Software Developers"
          description="U Tech’s engineers have many years of industry experience programming scalable management software solutions for airlines, airports, and independent vendors."
        />
        <FeaturesGridnew
          leftFeatures={airlineSoftwareServices.slice(0, 2)}
          rightFeatures={airlineSoftwareServices.slice(2, 4)}
          centerImage="/assets/industries/aviation/desktop-combo-aviation.png"
          iconGap="md:gap-32"
        />
      </PageLayout>

      {/* AI Airline Solutions */}
      <section className="bg-secondary py-12">
        <PageLayout className="space-y-8">
          <Headline
            title="AI Solutions for the Airline Industry"
            description="U Tech's advanced AI solutions revolutionize the airline industry by optimizing revenue management, flight management, predictive maintenance, and more. With cutting-edge technology and industry expertise, our AI-driven systems provide real-time insights, streamline workflows, and ensure regulatory compliance."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
            <FeaturesList features={airlineAIandAutomationServices.slice(0, 3)} fadeUp={fadeUp} center />
            <FadeInWhenVisible className="hidden md:block">
              <img
                src="/assets/industries/aviation/flightaware-custom-integration.png"
                alt="AI-driven flight management system"
                loading="lazy"
                className="w-110 mx-auto"
              />
            </FadeInWhenVisible>
            <FeaturesList features={airlineAIandAutomationServices.slice(3, 6)} center />
          </div>
        </PageLayout>
      </section>

      {/* Custom Airline Technology */}
      <section className="py-16 flex flex-col gap-6 justify-center items-center">
        <Headline
          title="Custom Airline Technology Solutions"
          description="U Tech provides custom airline management software for OEMs, MROs, Airports, and flight operators to streamline their operational workflows."
        />
        <ImageNearScreen
          features={airlineOperationsServices}
          src="/assets/industries/aviation/custom-flight-operations-management-software-development.png"
          imageAlign="right"
        />
        <ContactUsButton variant="hover">GET FLIGHT OPS SOFTWARE DEVELOPERS</ContactUsButton>
      </section>

      {/* Reservation Software */}
      <section className="py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Airline Reservation & Ticketing Software Development"
            description="U Tech provides reservation & ticketing software for airlines, call centers, OTAs, internet booking & ticket vendors, and more."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <FadeInWhenVisible delay={0.5} className="md:block hidden">
              <img
                loading="lazy"
                src="/assets/industries/aviation/sabre-travel-network-solutions-gif.gif"
                alt="Airline reservation system integration"
                className="w-52 mx-auto"
              />
            </FadeInWhenVisible>
            <div className="space-y-8">
              <FeaturesList features={airlineReservationSolutions} grid center />
              <div className="flex items-center justify-center gap-6 flex-wrap mt-10">
                {airlinePartner?.map((item, index) => (
                  <FadeInWhenVisible key={index} delay={0.5}>
                    <img
                      loading="lazy"
                      src={`/assets/industries/aviation/airline/${item?.img}.png`}
                      alt={`${item?.name || "Airline partner"} logo`}
                      className="w-32 hover:scale-105 cursor-pointer mx-auto"
                    />
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
          <ContactUsButton variant="hover">GET AIRLINE SOFTWARE DEVELOPERS</ContactUsButton>
        </PageLayout>
      </section>

      {/* Video Poster */}
      <VideoTvPoster information={tvpoasterDescription} />

      {/* MRO Solutions */}
      <PageLayout className="space-y-8 py-12">
        <Headline
          title="Custom Maintenance, Repair, & Overhaul (MRO) Solutions"
          description="U Tech delivers aviation MRO software for aircraft maintenance directors, flight schedulers, dispatchers, and parts managers."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <FeaturesList features={aviationMroSolutions.slice(0, 2)} center />
          <FadeInWhenVisible>
            <img
              src="/assets/industries/aviation/mro-aviation-software-developers.png"
              alt="MRO aviation software interface"
              loading="lazy"
              className="w-64 mx-auto"
            />
          </FadeInWhenVisible>
          <FeaturesList features={aviationMroSolutions.slice(2, 4)} center />
        </div>
      </PageLayout>

      {/* Drone Software */}
      <PageLayout className="py-12 space-y-12 text-center">
        <Headline
          title="Custom Drone Software Development"
          description="U Tech develops drone software for agriculture, construction, cinematography, inspections, search-and-rescue, and more."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <FadeInWhenVisible>
            <img
              src="/assets/industries/aviation/custom-drone-software-development.png"
              alt="Drone software for agriculture and construction"
              loading="lazy"
              className="md:w-120 w-72 mx-auto"
            />
          </FadeInWhenVisible>
          <div className="grid gap-9">
            <FeaturesList features={droneSoftwareSolutions} grid center />
            <TypographyMuted>
              Leverage ArcGIS by ESRI, FlytBase, DroneDeploy, and Pix4DMapper to transform drone image capture and analysis.
            </TypographyMuted>
            <div className="flex items-center gap-6 justify-center flex-wrap mt-8">
              {dronePartner?.map((item, index) => (
                <FadeInWhenVisible key={index} delay={0.5}>
                  <img
                    loading="lazy"
                    src={`/assets/industries/aviation/drone/${item?.img}.png`}
                    alt={`${item?.name || "Drone partner"} logo`}
                    className="w-32 hover:scale-105 cursor-pointer mx-auto"
                  />
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>
        <ContactUsButton variant="hover">GET DRONE SOFTWARE DEVELOPERS</ContactUsButton>
      </PageLayout>

      {/* FAQ Section */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={aviationFaqs} title="FAQ's" />
      </div>
    </>
  );
}
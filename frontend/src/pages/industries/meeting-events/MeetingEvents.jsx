import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/custom/ContactUsButton";
import FaqSection from "@/custom/FaqSection";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import {
  MeetingEventSoftwareLeftFeatures,
  MeetingEventSoftwareRightFeatures,
  MeetingTransformationfedu,
  FoodBeverageTraceabilityIcons,
  MeetingFeatures,
  FoodBeverageTransformation,
  AIPoweredConstructionMeeting,
  MeetingFeaturesgive,
  MeetingEventTransformationFeatures,
  meetngManagementSolutions,
  MeetingEventAssociation,
  eventTechnologySolutions,
  eventAppSolutions,
  eventPlanningFAQ,
} from "./Data";
import { TypographyH5, TypographyMuted, Headline } from "@/custom/Typography";

const MeetingEvents = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/meetings-events-banner.jpg"
        title="CUSTOM MEETINGS & EVENT PLANNING SOFTWARE SOLUTIONS"
        description="Transform Meetings & Events With Custom AI-Powered Solutions For Seamless Experiences"
        buttonText="HIRE EVENT SOFTWARE DEVELOPERS"
        buttonLink="/FoodBeverage"
        imageFit="cover"
      />

      <PageLayout className="text-center py-10">
        <Headline title="Our Meetings & Events Software Development Solutions" />

        <FeaturesGridnew
          leftFeatures={MeetingEventSoftwareLeftFeatures}
          rightFeatures={MeetingEventSoftwareRightFeatures}
          centerImage="/assets/Industries/meeting-events/events.png"
        />
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Custom Event Management Software Solutions"
            description="We develop custom event management software solutions to allow your teams to manage every type of event from start to finish.."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div className="text-start space-y-4">
              <TypographyH5 className="font-extrabold">
                Event Management Software
              </TypographyH5>
              <TypographyMuted>
                We create custom event planning solutions with event
                registration tools that integrate with venue and hotel apps,
                budget tracking, staff management systems, and more.
              </TypographyMuted>
              <FeaturesList
                features={MeetingTransformationfedu}
                iconAlign="horizontal"
              />
            </div>
            <img
              loading="lazy"
              src="/assets/Industries/meeting-events/phone.png"
              alt="Financial Planning Dashboard"
              className="w-40 sm:w-52 xl:w-56 2xl:w-58 mx-auto"
            />
          </div>
          <TypographyMuted className="text-start">
            We integrate with industry-leading event management solutions to{" "}
            <br />
            provide the ultimate user experience and streamline the event
            planning lifecycle.
          </TypographyMuted>
          {FoodBeverageTraceabilityIcons.map((feature, index) => (
            <div key={index}>
              {feature.logos && (
                <div className="flex items-center sm:gap-10 gap-6 mt-6 flex-wrap">
                  {feature.logos.map((logo, idx) => (
                    <img
                      key={idx}
                      loading="lazy"
                      src={`/assets/Industries/meeting-events/images/${logo}.png`}
                      className="cursor-pointer hover:scale-105 transition-transform"
                      alt={logo}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}

          <ContactUsButton variant="hover">Get Event Mgmt Solutions</ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-10 text-center py-12">
        <Headline
          title="Meetings & Web Conferencing Software Development"
          description="We build online meeting & web conferencing software solutions to provide effective communication & collaboration, multi-device support, and enhanced interoperability.."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
          <FeaturesList features={MeetingFeatures.slice(0, 2)} center />
          <img
            loading="lazy"
            src="/assets/Industries/meeting-events/conferencing.png"
            alt="Trading Dashboard"
            className="w-135 xl:w-145 2xl:w-165 mx-auto"
          />
          <FeaturesList features={MeetingFeatures.slice(2, 4)} center />
        </div>
        <ContactUsButton variant="hover">Get Meeting Mgmt Software</ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Event Registration Management Software Solutions"
            description="We develop smart, flexible, and powerful event registration software solutions custom-tailored to your specific business and event management needs.."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <img
              loading="lazy"
              src="/assets/Industries/meeting-events/registration.png"
              alt="Food & Beverage Service Management"
              className="w-40 sm:w-52 xl:w-56 2xl:w-58 mx-auto"
            />
            <div className="text-start space-y-4">
              <TypographyH5 className="font-extrabold">
                Event Registration Software
              </TypographyH5>
              <TypographyMuted>
                We engineer on-site, kiosk, online, and mobile registration
                applications with built-in customizable reporting modules and
                form-building features.
              </TypographyMuted>
              <FeaturesList
                features={FoodBeverageTransformation}
                iconAlign="horizontal"
              />
            </div>
          </div>
          <ContactUsButton variant="hover">Get Event Registration Solutions</ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="text-center py-12 space-y-12">
        <Headline
          title="Smart Event Planning Software with AI"
          description="Our expert team develops AI Event solutions to enhance your events and meetings for improved functionality. Features include event planner virtual assistants, Machine Learning in event planning, and an event planning and coordination system."
        />
        <FeaturesList features={AIPoweredConstructionMeeting} grid center />
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Custom Dating App Solutions"
            description="We implement custom features, functions, and capabilities into existing or newly developed dating app solutions to create a more immersive online dating experience.."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
            <FeaturesList features={MeetingFeaturesgive.slice(0, 2)} center />
            <img
              loading="lazy"
              src="/assets/Industries/meeting-events/developers.png"
              alt="Trading Dashboard"
              className="w-135 xl:w-145 2xl:w-165 mx-auto"
            />
            <FeaturesList features={MeetingFeaturesgive.slice(2, 4)} center />
          </div>
          <ContactUsButton variant="hover">Customize Your Dating App</ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Custom Trade Show Software Solutions"
          description="We create custom trade show planning and management software solutions to enable attendee tracking, lead retrieval, and entry badge security verification."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div className="space-y-4 text-center sm:text-start">
            <TypographyH5 className="font-extrabold">
              Trade Show Management Software
            </TypographyH5>
            <TypographyMuted>
              We develop and integrate robust, feature-rich trade show
              management software solutions designed for organizing conferences,
              conventions, trade shows, and expos.
            </TypographyMuted>
            <FeaturesList
              features={MeetingEventTransformationFeatures}
              iconAlign="horizontal"
            />
          </div>
          <img
            loading="lazy"
            src="/assets/Industries/meeting-events/trade.png"
            alt="Financial Planning Dashboard"
            className="w-135 xl:w-145 2xl:w-165 mx-auto"
          />
        </div>

        <ContactUsButton variant="hover">Get Trade Show Solutions</ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Lead Retrieval Application Solutions"
            description="We develop lead retrieval applications that allow businesses to capture, analyze, and categorize all of the leads retrieved from events and trade shows."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Left Features List */}
            <FeaturesList features={meetngManagementSolutions} grid center />

            {/* Center Animation */}
            <img
              loading="lazy"
              src="/assets/Industries/meeting-events/laptop.png"
              alt="Mobile Analytics App"
              className="w-135 xl:w-145 2xl:w-165 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">Retrieve Leads Now</ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Association Management System Development"
          description="We program custom association management software that helps associations manage finances, website updates, individual members, and association/corporate events.."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <img
            loading="lazy"
            src="/assets/Industries/meeting-events/confrence.png"
            alt="Association Planning Dashboard"
            className="w-66 sm:w-88 xl:w-94 2xl:w-105 mx-auto"
          />
          <div className="space-y-4 text-center sm:text-start">
            <TypographyH5 className="font-extrabold">
              Association Management Solutions
            </TypographyH5>
            <TypographyMuted>
              We develop association management solutions that include
              configurations of dues, financial reporting capabilities,
              strategic marketing features, and more.
            </TypographyMuted>
            <FeaturesList
              features={MeetingEventAssociation}
              iconAlign="horizontal"
            />
          </div>
        </div>

        <ContactUsButton variant="hover">Get Association Mgmt Software</ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Event Technology Solutions"
            description="We engineer and program event technology solutions to create AR/VR experiences, integrate with wearable technologies, and produce digital presentations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            {/* Left Features List */}
            <FeaturesList
              features={eventTechnologySolutions.slice(0, 2)}
              center
            />

            {/* Center Animation */}
            <img
              loading="lazy"
              src="/assets/Industries/meeting-events/event-technology-solutions.png"
              alt="Mobile Analytics App"
              className="w-135 xl:w-145 2xl:w-165 mx-auto"
            />

            {/* Right Features List */}
            <FeaturesList
              features={eventTechnologySolutions.slice(2, 4)}
              center
            />
          </div>
          <ContactUsButton variant="hover">Get Event Touch Solutions</ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="U Tech Powers Up Your Events and Meetings with Advanced Support Solutions"
          description="U Tech’s developers offer the best technical support for meeting software, event feedback software, and virtual meeting software. Our AI enabled mobile event apps ensure seamlessness for users, and our integration capabilities will enhance your event and meetings.."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets/Industries/meeting-events/powers-up-your-events-and-meetings.png"
            alt="Association Planning Dashboard"
            className="w-135 xl:w-145 2xl:w-165 mx-auto"
          />
          <FeaturesList features={eventAppSolutions} iconAlign="horizontal" />
        </div>
      </PageLayout>

      {/* Uses: faqData */}
      <div className="py-10">
        <FaqSection faqs={eventPlanningFAQ} title="FAQ's" />
      </div>
    </>
  );
};

export default MeetingEvents;

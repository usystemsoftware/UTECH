import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";

export default function UiPathManufacturing() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <PageLayout>
        {/* Heading */}
        <div className="text-center mb-16">
          <Headline title="Manufacturing & UiPath" description="" />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Features */}
          <div className="flex flex-col items-center space-y-10 lg:items-center">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/38.svg"
              title="Regulatory Compliance"
              text="We value security so we never store any process-related data on customers, suppliers and company information throughout the automation process. We store the robots' actions so they can be monitored and reviewed ensuring visibility throughout a manufacturer's supply chain and operations."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/39.svg"
              title="Paperless Operations"
              text="We design solutions enabling manufacturers to digitize their paper files and integrate physical data into their existing digital operations."
            />
          </div>

          {/* Center Image */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <img
              src="/assets/solutions/ui-path/Inventory.gif"
              alt="UiPath Manufacturing Automation"
              className="h-[550px] w-auto object-contain rounded-xl shadow-lg"
            />
          </div>

          {/* Right Features */}
          <div className="flex flex-col items-center space-y-10 lg:items-center">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/40.svg"
              title="Digital Communication"
              text="We utilize UiPath to provide manufacturers with named entity recognition, language detection, and sentiment analysis capabilities. We give manufacturers the ability to respond to customers and suppliers by applying UiPath's automation capabilities to email and chat-based communication."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/41.svg"
              title="Process Monitoring"
              text="We provide non-invasive data extraction using UiPath to provide data analytics. We develop real-time reporting provided by the software robots that allows manufacturers to determine optimal inventory levels based on previous needs."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <ContactUsButton variant="hover">GET UIPATH AUTOMATION</ContactUsButton>
        </div>
      </PageLayout>
    </section>
  );
}

// Reusable Feature Component
const FeatureItem = ({ icon, title, text }) => (
  <div className="flex flex-col items-center text-center space-y-3 px-4 md:px-0">
    {/* Icon centered */}
    <div className="flex justify-center">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 md:w-20 md:h-20 object-contain"
      />
    </div>

    {/* Title */}
    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
      {title}
    </h3>

    {/* Text justified */}
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
      {text}
    </p>
  </div>
);

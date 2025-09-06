import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";

export default function UiPathManufacturing() {
  return (
    <section className="py-16 bg-white">
      <PageLayout>
        {/* Heading */}
        <div className="text-center mb-12">
          <Headline title="Manufacturing & UiPath" description="" />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-12">
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
          <div className="flex justify-center">
            <img
              src="/assets/solutions/ui-path/Inventory.gif"
              alt="UiPath Manufacturing Automation"
              className="max-h-[450px] object-contain"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-12">
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
        <div className="text-center mt-12">
          <ContactUsButton variant="hover">GET UIPATH AUTOMATION</ContactUsButton>
        </div>
      </PageLayout>
    </section>
  );
}

// Reusable Feature Component
const FeatureItem = ({ icon, title, text }) => (
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 px-4">
    <img src={icon} alt={title} className="w-12 h-12" />
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);

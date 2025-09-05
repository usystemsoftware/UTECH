import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";

export default function UiPathInsurance() {
  return (
    <section className="py-16 bg-white">
      <PageLayout>
        {/* Heading */}
        <div className="text-center mb-12">
          <Headline title="UiPath for Insurance" description="" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-12">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/25.svg"
              title="Legacy Integration"
              text="We build RPA processes that work with legacy systems, including spreadsheets, PDFs, scanned documents, and applications like Duckcreek, Guidewire, and LexisNexis. Some insurance firms processes rely heavily on legacy systems – we develop integrations that bridge the gap between legacy and modern applications."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/28.svg"
              title="Improved Regulatory Compliance"
              text="We develop fully intelligent automation processes for the insurance industry that improve governance and regulatory compliance. Detailed logs of activities are maintained, allowing more cases to be processed in real-time while reducing workloads and backlogs."
            />
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src="/assets/solutions/ui-path/Uipathinsurance.png"
              alt="UiPath for Insurance"
              className="max-h-[450px] object-contain"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-12">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/26.svg"
              title="Non-Invasive Deployment"
              text="Our RPA runs everyday tasks on any system or application without affecting underlying systems. It offers an alternative to core-platform integrations or replacements, requires no coding, and delivers significant savings."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/29.svg"
              title="Data Encryption"
              text="We use end-to-end encryption to transit your data. Robots never store data, ensuring risk profiling and compliance with secure audits."
            />
          </div>
        </div>

        {/* CTA Button */}
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

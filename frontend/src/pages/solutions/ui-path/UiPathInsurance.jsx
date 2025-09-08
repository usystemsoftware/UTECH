import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";

export default function UiPathInsurance() {
  return (
    <section className="py-16 bg-white">
      <PageLayout>
        {/* Heading */}
        <div className="text-center mb-16">
          <Headline title="UiPath for Insurance" description="" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Features */}
          <div className="flex flex-col items-center space-y-10 lg:items-center">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/26.svg"
              title="Legacy Integration"
              text="We build RPA processes that work with legacy systems, including spreadsheets, PDFs, scanned documents, and applications like Duckcreek, Guidewire, and LexisNexis."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/25.svg"
              title="Improved Regulatory Compliance"
              text="We develop fully intelligent automation processes for the insurance industry that improve governance and regulatory compliance."
            />
          </div>

          {/* Center Image */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <img
              src="/assets/solutions/ui-path/Uipathinsurance.png"
              alt="UiPath for Insurance"
              className="h-[550px] w-auto object-contain rounded-xl shadow-lg"
            />
          </div>

          {/* Right Features */}
          <div className="flex flex-col items-center space-y-10 lg:items-center">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/28.svg"
              title="Non-Invasive Deployment"
              text="Our RPA runs everyday tasks on any system or application without affecting underlying systems."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/29.svg"
              title="Data Encryption"
              text="We use end-to-end encryption to transit your data. Robots never store data, ensuring risk profiling and compliance with secure audits."
            />
          </div>
        </div>

        {/* CTA Button */}
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
    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h3>

    {/* Text justified */}
    <p className="text-gray-600 leading-relaxed text-justify">{text}</p>
  </div>
);

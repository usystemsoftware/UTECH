import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";

export default function UiPathHealthcare() {
  return (
    <section className="py-16 bg-white">
      <PageLayout>
        {/* Heading */}
        <div className="text-center mb-12">
          <Headline title="Healthcare and UiPath" description="" />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-12">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/front-office.svg"
              title="Front Office Support"
              text="Our RPA solutions allow service providers to improve the quality of their forward-facing operations. We utilize UiPath's cognitive RPA, to achieve complex language, named entity recognition, and sentiment analysis capabilities by integrating Google, Microsoft, IBM & ABBYY cognitive and OCR services."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/system-compatibility.svg"
              title="Superior System Compatibility"
              text="We utilize UiPath to non-intrusively run automation with the user interface using intelligent computer vision. We automate existing healthcare systems and applications with UiPath without affecting the underlying code."
            />
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src="/assets/solutions/ui-path/mockups/healthcare-phone.png"
              alt="UiPath Healthcare Automation"
              className="max-h-[450px] object-contain"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-12">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/cost-benefit.svg"
              title="Cost Benefit"
              text="Our RPA delivers cost benefits by utilizing UiPath's intelligent scheduling and multi-tenancy. Healthcare providers can leverage a cost-effective workforce and significantly reduce operating costs. We deploy robots in the Cloud or on-premises from a single central server."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/data-transfer.svg"
              title="HIPPA Compliant Patient Data Transfer"
              text="We utilize encryption to secure patient information during automation of data transfers or claims processing. Our solutions never locally store process-related data from software robots, ensuring compliance and security."
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

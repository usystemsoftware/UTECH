import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";

export default function UiPathHealthcare() {
  return (
    <section className="py-16 bg-white">
      <PageLayout>
        {/* Heading */}
        <div className="text-center mb-16">
          <Headline title="Healthcare and UiPath" description="" />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Features */}
          <div className="flex flex-col items-center space-y-10 lg:items-center">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/30.svg"
              title="Front Office Support"
              text="Our RPA solutions allow service providers to improve the quality of their forward-facing operations. We utilize UiPath's cognitive RPA to achieve complex language, named entity recognition, and sentiment analysis capabilities."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/31.svg"
              title="Superior System Compatibility"
              text="We utilize UiPath to non-intrusively run automation with the user interface using intelligent computer vision. We automate existing healthcare systems and applications without affecting the underlying code."
            />
          </div>

          {/* Center Image */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <img
              src="/assets/solutions/ui-path/healthcare.png"
              alt="UiPath Healthcare Automation"
              className="max-h-[450px] w-full object-contain rounded-xl shadow-lg"
            />
          </div>

          {/* Right Features */}
          <div className="flex flex-col items-center space-y-10 lg:items-center">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/32.svg"
              title="Cost Benefit"
              text="Our RPA delivers cost benefits by utilizing UiPath's intelligent scheduling and multi-tenancy. Healthcare providers can leverage a cost-effective workforce and reduce operating costs."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/33.svg"
              title="HIPPA Compliant Patient Data Transfer"
              text="We utilize encryption to secure patient information during automation of data transfers or claims processing. Our solutions never locally store process-related data from software robots, ensuring compliance and security."
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
    {/* Icon centered with title */}
    <div className="flex justify-center">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 md:w-20 md:h-20 object-contain"
      />
    </div>

    {/* Title */}
    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h3>

    {/* Text */}
    <p className="text-gray-600 leading-relaxed text-justify">{text}</p>
  </div>
);

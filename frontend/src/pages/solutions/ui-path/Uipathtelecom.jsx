import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";

export default function UiPathTelecom() {
  return (
    <section className="py-16 bg-white">
      <PageLayout>
        {/* Heading */}
        <div className="text-center mb-16">
          <Headline title="UiPath for Telecom" description="" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeatureItem
            icon="/assets/solutions/ui-path/icons/34.svg"
            title="Data Transmission"
            text="We implement UiPath platform interacts with the user interface like a human and gets implemented non-invasively in addition to existing programs."
          />
          <FeatureItem
            icon="/assets/solutions/ui-path/icons/35.svg"
            title="Cost Reduction"
            text="We facilitate cost reduction by using UiPath during BPMS or ERP implementation. The UiPath platform enables telecommunications providers to attain rapid internal cost reduction and ROI."
          />
          <FeatureItem
            icon="/assets/solutions/ui-path/icons/36.svg"
            title="Scalability"
            text="We expertly scale UiPath's software robotic workforce up or down, to fit the current needs with no additional costs. We use UiPath's intelligent scheduling to deploy an agile workforce in the Cloud or on-premises from a single central server."
          />
          <FeatureItem
            icon="/assets/solutions/ui-path/icons/37.svg"
            title="High Levels of Data Security"
            text="We maintain data security by utilizing UiPath to ensure that all customer and company information is kept confidential throughout automated operations for enterprises. The UiPath automation platform maintains robot-related activity reports and analytics but never locally stores any process-related data from the software robots."
          />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <ContactUsButton variant="hover">GET UIPATH AUTOMATION</ContactUsButton>
        </div>
      </PageLayout>
    </section>
  );
}

// Reusable feature block
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

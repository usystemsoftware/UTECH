import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";

export default function UiPathFinanceBanking() {
  return (
    <section className="py-16 bg-white">
      <PageLayout>
        {/* Heading */}
        <div className="text-center mb-12">
          <Headline
            title="UiPath for Finance & Banking"
            description=""
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <FeatureItem
            icon="/assets/solutions/ui-path/icons/21.svg"
            title="Banking Automation"
            text="We streamline core banking processes with banking automation. From processing loan payments and onboarding new customers, to online sales processes, automation in banking is easier with RPA."
          />
          <FeatureItem
            icon="/assets/solutions/ui-path/icons/22.svg"
            title="Risk Management"
            text="We improve the risk profile of financial institutions by utilizing Robots to update automations as quickly as regulations change to keep pace with requirements."
          />
          <FeatureItem
            icon="/assets/solutions/ui-path/icons/23.svg"
            title="Compliance"
            text="We develop our Robots with Artificial Intelligence to keep financial institutions compliant with banking and FDIC regulations. Our software reduces compliance backlogs and streamlines processes."
          />
          <FeatureItem
            icon="/assets/solutions/ui-path/icons/24.svg"
            title="Legacy Systems Management"
            text="We utilize UiPath for Banking & Finance automation to help financial institutions manage legacy core systems."
          />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <ContactUsButton variant="hover">GET UIPATH AUTOMATION</ContactUsButton>
        </div>
      </PageLayout>
    </section>
  );
}

// Reusable feature block
const FeatureItem = ({ icon, title, text }) => (
  <div className="flex flex-col items-center text-center space-y-4 px-4">
    <img src={icon} alt={title} className="w-12 h-12" />
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);

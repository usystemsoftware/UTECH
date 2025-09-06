import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";

export default function UiPathPublicServices() {
  return (
    <section className="py-16 bg-white">
      <PageLayout>
        {/* Heading */}
        <div className="text-center mb-12">
          <Headline title="UiPath & Public Services" description="" />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Features */}
          <div className="space-y-12">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/43.svg"
              title="Applications"
              text="We utilize UiPath Robots to work with all applications with human like interactions like clicking, typing and reading screen information. It can handle browsers, emails, terminals, excel, word, PDFs, databases, and many others."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/44.svg"
              title="Security"
              text="We create security systems for Private and Public Sector organizations. We protect and preserve sensitive data and access control via a Password Vault. Our solution runs automation under locked screens and uses the TLS 1.2 protocol to provide privacy and data integrity."
            />
          </div>

          {/* Right Features */}
          <div className="space-y-12">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/45.svg"
              title="RPA Development"
              text="Visually intuitive, feature-rich and extensible Studio designer allows ease of automation of complex processes with fewer man-hours – so ROI and performance benefits arrive faster. It is packed with template activities and a powerful recorder that can follow your clicks and keyboard strokes and turn them into an automation sequence, helping you jumpstart your automation."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/46.svg"
              title="Compliance"
              text="We create compliance solutions that provide logging, monitoring, and a full audit trails of your business practices. We store the actions of the user and robots in a log file and create custom dashboards for monitoring compliance."
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

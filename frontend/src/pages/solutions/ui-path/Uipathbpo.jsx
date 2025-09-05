import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";

export default function UiPathBPO() {
  return (
    <section className="py-16 bg-white">
      <PageLayout>
        {/* Heading */}
        <div className="text-center mb-12">
          <Headline
            title="UiPath & BPO: The Perfect Fit"
            description=""
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side features */}
          <div className="space-y-10">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/17.svg"
              title="Automation"
              text="We utilize UiPath's intelligent computer vision and image recognition technology to seamlessly automate enterprises’ processes at speeds up to 10X faster."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/18.svg"
              title="Intelligent Operations Platform"
              text="We utilize Intelligent Scheduling, Intelligent Execution, Intelligent Scalability & AI/Cognitive Automation to deliver best in class BPO solutions."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/19.svg"
              title="Virtual Delivery Centers"
              text="Chetu develops VDCs that allow BPOs to manage their workforce virtually. Our solutions centralize operations allowing work-teams from multiple locations to coordinate activities via the cloud."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/20.svg"
              title="Reporting"
              text="We develop operations platforms for reporting. Our reporting solutions provide data driven analytics coupled with graphical outputs and customizable dashboards."
            />
          </div>

          {/* Right side image */}
          <div className="flex justify-center">
            <img
              src="/assets/solutions/ui-path/uipathbpo.png"
              alt="UiPath BPO Dashboard"
              className="max-w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <ContactUsButton variant="hover">GET UIPATH DEVELOPERS</ContactUsButton>
        </div>
      </PageLayout>
    </section>
  );
}

// Reusable feature item
const FeatureItem = ({ icon, title, text }) => (
  <div className="flex items-start space-x-4">
    <img src={icon} alt={title} className="w-10 h-10 flex-shrink-0" />
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2 leading-relaxed">{text}</p>
    </div>
  </div>
);









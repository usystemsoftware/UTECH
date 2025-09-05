import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import ContactUsButton from "@/custom/ContactUsButton";

export default function UiPathRetail() {
  return (
    <section className="py-16 bg-white">
      <PageLayout>
        {/* Heading */}
        <div className="text-center mb-12">
          <Headline title="Retail & CPG Meet UiPath" description="" />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-12">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/trade-promotions.svg"
              title="Trade Promotions"
              text="We utilize RPA to quickly track and analyze how promotions are performing. Our solutions eliminate the need for manual entry on spreadsheet based programs saving time and money."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/sales-analytics.svg"
              title="Sales Data Analytics"
              text="We provide sales analytics using RPAs. Our solutions provides full audits with real-time insights, helping retailers and suppliers analyze the huge amounts of sales data at their disposal."
            />
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src="/assets/solutions/ui-path/mockups/retail.png"
              alt="UiPath Retail & CPG Automation"
              className="max-h-[450px] object-contain"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-12">
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/new-product.svg"
              title="New Product Introductions"
              text="We easily automate processes related to alerts and client opinions in real time. Our solutions allow retailers to adjust pricing, production or inventory to respond to consumer behavior."
            />
            <FeatureItem
              icon="/assets/solutions/ui-path/icons/store-layout.svg"
              title="Store Layout Planning"
              text="Our RPA solutions utilize existing databases giving retailers access to more accurate information on a store-by-store basis. You can respond to customer behavior by segmenting store layouts according to consumer demographics and preferences."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <ContactUsButton variant="hover">GET UIPATH DEVELOPERS</ContactUsButton>
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

import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { Headline, TypographyH4, TypographyMuted } from "@/custom/Typography";
import { privacyPolicyData } from "./Data";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/banner/privacy-banner.jpeg"
        title="Privacy Policy"
      />

      {/* Privacy Content */}
      <section className="py-16">
        <PageLayout className="space-y-12">
          <Headline
            title="U Tech Privacy Policy"
            description="We take your privacy seriously. U Tech remains committed to respecting your privacy while you use our website. The policy below is applicable to our site visitor information collection practices."
          />

          <div className="space-y-10">
            {privacyPolicyData.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="space-y-2 text-primary">
                  <TypographyH4>{item.heading}</TypographyH4>
                  <div className="w-22 h-0.5 bg-primary"></div>
                </div>
                <TypographyMuted>{item.content}</TypographyMuted>

                {item.list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {item.list.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-600 text-sm dark:text-gray-200"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </PageLayout>
      </section>
    </>
  );
}

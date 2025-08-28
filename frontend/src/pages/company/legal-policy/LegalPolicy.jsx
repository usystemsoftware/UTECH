import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { TypographyH4, TypographyMuted, Headline } from "@/custom/Typography";
import { legalPolicyData } from "./Data";

export default function LegalPolicy() {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/legel-policy-banner.jpeg"
        title="Procedures & Legal Policies"
      />

      <section className="py-16">
        <PageLayout className="space-y-12">
          <Headline
            title="Terms of Use"
            description="The use of any product, service or feature (the Materials) available through this website ( Web Site) by any user of the Web Site (you or your) shall be governed by the following Terms of Use:"
          />

          <div className="space-y-10">
            {legalPolicyData.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="space-y-2 text-primary">
                  <TypographyH4>{item.heading}</TypographyH4>
                  <div className="w-22 h-0.5 bg-primary"></div>
                </div>
                {item.content && (
                  <TypographyMuted>{item.content}</TypographyMuted>
                )}
                {item.list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {item.list.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-200 text-sm"
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

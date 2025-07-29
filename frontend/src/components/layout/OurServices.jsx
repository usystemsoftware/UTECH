import HeadingSection from "@/custom/HeadingSection";
import PageLayout from "@/custom/PageLayout";
import { services } from "@/data/LandingData";
import CaseStudyCard from "@/components/CaseStudyCard";
import BubblesBackground from "@/components/BubblesBackground";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

export default function OurServices() {
  return (
    <PageLayout className="relative overflow-hidden">
      {/* Background Bubbles */}
      <BubblesBackground />

      <div className="relative z-10">
        <HeadingSection
          title="Our"
          highlight="Services"
          description="Comprehensive digital transformation services to accelerate your business growth."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
          {services?.map((service, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <CaseStudyCard
                index={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                year={service.year}
                features={service.features}
                link={service.link}
                color={service.color}
              />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

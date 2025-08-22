import HeadingSection from "@/custom/HeadingSection";
import PageLayout from "@/custom/PageLayout";
import { services } from "@/data/LandingData";
import CaseStudyCard from "@/components/CaseStudyCard";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

export default function OurServices() {
  return (
    <PageLayout className="relative overflow-hidden">
      <div className="relative z-10">
        <HeadingSection
          title="Our"
          highlight="Services"
          description="Comprehensive digital transformation services to accelerate your business growth."
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-8">
          {services?.map((service, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <CaseStudyCard
                index={index}
                image={service.img}
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

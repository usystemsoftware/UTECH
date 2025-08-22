import PageLayout from "@/custom/PageLayout";
import HeadingSection from "@/custom/HeadingSection";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import CaseStudyCard from "@/components/CaseStudyCard";
import { projects } from "@/data/LandingData";

export default function Projects() {
  return (
    <PageLayout className="relative py-10 overflow-hidden">
      <HeadingSection
        title="Our"
        highlight="Projects"
        description="Accelerate your business with our expertise."
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-8">
        {projects?.map((project, index) => (
          <FadeInWhenVisible key={index} delay={index * 0.1}>
            <CaseStudyCard
              index={index}
              image={project?.img}
              title={project?.title}
              description={project?.description}
              year={project?.year}
              color={project?.color}
              features={project?.features}
              link={project?.link}
            />
          </FadeInWhenVisible>
        ))}
      </div>
    </PageLayout>
  );
}

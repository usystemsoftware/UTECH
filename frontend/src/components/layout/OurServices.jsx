import HeadingSection from "@/custom/HeadingSection";
import PageLayout from "@/custom/PageLayout";
import { services } from "@/data/LandingData";
import CaseStudyCard from "@/components/CaseStudyCard";
import { motion } from "framer-motion";
import BubblesBackground from "@/components/BubblesBackground";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function OurServices() {
  return (
    <PageLayout className="relative overflow-hidden">
      {/* Background Bubbles */}
      <BubblesBackground />

      <div className="container mx-auto relative z-10">
        <HeadingSection
          title="Our"
          highlight="Services"
          description="Comprehensive digital transformation services to accelerate your business growth."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-6 mb-8">
          {services?.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

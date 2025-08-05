import PageLayout from "@/custom/PageLayout";
import HeadingSection from "@/custom/HeadingSection";
import { motion } from "framer-motion";
import CaseStudyCard from "@/components/CaseStudyCard";
import { projects } from "@/data/LandingData";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function Projects() {
    return (
        <PageLayout className="relative py-10 overflow-hidden">

            <HeadingSection
                title="Our"
                highlight="Projects"
                description="Accelerate your business with our expertise."
            />

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                {projects?.map((project, index) => (
                    <motion.div key={index} variants={cardVariants}>
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
                    </motion.div>
                ))}
            </motion.div>
        </PageLayout>
    );
}

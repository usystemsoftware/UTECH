import { motion } from "framer-motion";
import { TypographyH3, TypographySmall, TypographyMuted } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";

export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
};

export function TestimonialSection({ testimonials, title = "Hear What Our Clients Have to Say" }) {
    return (
        <section className="py-20 bg-secondary">
            <PageLayout className="space-y-8 text-center">
                <TypographyH3>{title}</TypographyH3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="bg-card shadow-lg rounded-lg p-8 grid gap-8 relative"
                            custom={i + 1}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <span className="absolute top-4 left-4 text-6xl text-primary font-serif">“</span>
                            <TypographyMuted>{t.text}</TypographyMuted>
                            <span className="absolute bottom-4 right-4 text-6xl text-primary font-serif">”</span>
                            <TypographySmall>{t.author}</TypographySmall>
                        </motion.div>
                    ))}
                </div>
            </PageLayout>
        </section>
    );
}

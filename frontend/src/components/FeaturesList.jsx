import { motion } from "framer-motion";
import {
    TypographyH5,
    TypographyMuted,
} from "@/custom/Typography";
import { IconRenderer } from "@/custom/IconRenderer";

export const FeaturesList = ({
    features,
    fadeUp,
    iconSize = 28,
    grid = false,
    image,
    imageClass = "",
    reverse = false,
}) => (
    <div className={`flex px-4 md:px-8 flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-center gap-10`}>
        <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 gap-8 text-left w-full" : "w-full max-w-2xl space-y-10 text-left"}>
            {features.map((feature, i) => (
                <motion.div
                    key={feature.title}
                    className="flex items-start gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    custom={i + 3}
                >
                    <span className="flex-shrink-0">
                        <IconRenderer name={feature.icon} size={iconSize} className="text-primary" />
                    </span>
                    <div>
                        <TypographyH5>{feature.title}</TypographyH5>
                        <TypographyMuted>{feature.description}</TypographyMuted>
                    </div>
                </motion.div>
            ))}
        </div>
        {image && (
            <motion.div
                className={`flex-shrink-0 ${imageClass} w-full max-w-xs sm:max-w-md`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={2}
            >
                <img loading="lazy" src={image} alt="" className="w-135" />
            </motion.div>
        )}
    </div>
);
import { motion } from "framer-motion";
import { TypographyMuted } from "@/custom/Typography";
import { IconRenderer } from "@/custom/IconRenderer";

export const FeaturesGrid = ({
    leftFeatures = [],
    rightFeatures = [],
    centerImage,
    fadeUp,
    iconSize = 40,
}) => (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="flex flex-col gap-8 text-right w-full lg:w-1/3">
            {leftFeatures.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    custom={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="flex-shrink-0">
                        {/* Increased logo size */}
                        <IconRenderer name={item.icon} size={iconSize} className="text-primary flex-shrink-1" />
                    </span>
                    <TypographyMuted>{item.label}</TypographyMuted>
                </motion.div>
            ))}
        </div>
        {centerImage && (
            <motion.div
                className="w-full max-w-md my-10"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={3}
            >
                <img loading="lazy" src={centerImage} alt="" className="w-135" />
            </motion.div>
        )}
        <div className="flex flex-col gap-8 items-start text-left w-full lg:w-1/3">
            {rightFeatures.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    custom={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="flex-shrink-0">
                        <IconRenderer name={item.icon} size={iconSize} className="text-primary" />
                    </span>
                    <TypographyMuted>{item.label}</TypographyMuted>
                </motion.div>
            ))}
        </div>
    </div>
);
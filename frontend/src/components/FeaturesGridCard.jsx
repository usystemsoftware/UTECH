import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
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
        {/* Left Column */}
        <div className="flex flex-col gap-8 text-right w-full lg:w-1/3">
            {leftFeatures.map((item, index) => (
                <FadeInWhenVisible
                    key={index}
                    className="flex items-center gap-3"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    custom={index}
                >
                    <TypographyMuted>{item.label}</TypographyMuted>
                    <span className="flex-shrink-0">
                        <IconRenderer name={item.icon} size={iconSize} className="text-primary flex-shrink-1" />
                    </span>
                </FadeInWhenVisible>
            ))}
        </div>

        {/* Center Image */}
        {centerImage && (
            <FadeInWhenVisible
                className="w-full max-w-md my-10"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <img loading="lazy" src={centerImage} alt="" className="w-135" />
            </FadeInWhenVisible>
        )}

        {/* Right Column */}
        <div className="flex flex-col gap-8 items-start text-left w-full lg:w-1/3">
            {rightFeatures.map((item, index) => (
                <FadeInWhenVisible
                    key={index}
                    className="flex items-center gap-3"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    custom={index}
                >
                    <span className="flex-shrink-0">
                        <IconRenderer name={item.icon} size={iconSize} className="text-primary" />
                    </span>
                    <TypographyMuted>{item.label}</TypographyMuted>
                </FadeInWhenVisible>
            ))}
        </div>
    </div>
);

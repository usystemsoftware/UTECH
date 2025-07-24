// src/components/FeaturesList.jsx
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { TypographyH5, TypographyMuted } from "@/custom/Typography";
import { IconRenderer } from "@/custom/IconRenderer";

export const FeaturesList = ({
    features = [],
    fadeUp,
    iconSize = 28,
    grid = false,
    image,
    imageClass = "",
    reverse = false,
}) => (
    <div
        className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-center gap-10`}
    >
        <div
            className={
                grid
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-8 text-left w-full"
                    : "w-full max-w-2xl space-y-10 text-left"
            }
        >
            {features.map((feature, index) => (
                <FadeInWhenVisible
                    key={index}
                    className="flex items-start gap-4"
                >
                    <span className="flex-shrink-0">
                        <IconRenderer
                            name={feature.icon}
                            size={iconSize}
                            className="text-primary"
                        />
                    </span>
                    <div>
                        <TypographyH5 className="text-base md:text-base">{feature.title}</TypographyH5>
                        <TypographyMuted>{feature.description}</TypographyMuted>
                    </div>
                </FadeInWhenVisible>
            ))}
        </div>

        {image && (
            <FadeInWhenVisible
                className={`flex-shrink-0 ${imageClass} w-full max-w-xs sm:max-w-md`}
                variants={fadeUp}
            >
                <img loading="lazy" src={image} alt="feature" className="w-135" />
            </FadeInWhenVisible>
        )}
    </div>
);

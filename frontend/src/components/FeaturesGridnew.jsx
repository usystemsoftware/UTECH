import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { TypographyMuted } from "@/custom/Typography";

export const FeaturesGridnew = ({
    leftFeatures = [],
    rightFeatures = [],
    centerImage,
    imgSize = "sm:w-[70%] md:w-[80%]",
    fadeUp,
    iconGap,
}) => (
    <div className="flex flex-col md:flex-row items-center w-full justify-center gap-4 mt-10">
        {/* Left Column */}
        <div className={`flex flex-col gap-4 sm:gap-12 ${iconGap} text-start sm:text-right w-full`}>
            {leftFeatures.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center lg:justify-end justify-start gap-4 sm:gap-6"
                >
                    {/* Icon */}
                    <span className="flex-shrink-0 order-1 lg:order-2">
                        {item?.icon ? (
                            <img
                                src={item.icon}
                                alt={item.label || "feature"}
                                className="w-12 h-12 object-contain"
                            />
                        ) : null}
                    </span>

                    {/* Label */}
                    <TypographyMuted className="leading-none border-b-2 pb-2 border-gray-400 break-words order-2 sm:order-1">
                        {item.label}
                    </TypographyMuted>
                </div>
            ))}
        </div>

        {/* Center Image */}
        {centerImage && (
            <FadeInWhenVisible
                className="flex-shrink-0 w-full sm:max-w-3xl"
                variants={fadeUp}
            >
                <img
                    loading="lazy"
                    src={centerImage}
                    alt="Center Graphic"
                    className={`w-full ${imgSize} mx-auto object-contain`}
                />
            </FadeInWhenVisible>
        )}

        {/* Right Column */}
        <div className={`flex flex-col gap-4 md:gap-12 ${iconGap} items-start text-left w-full`}>
            {rightFeatures.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center justify-start gap-4 sm:gap-6"
                >
                    {/* Icon */}
                    <span className="flex-shrink-0 order-1 sm:order-1">
                        {item?.icon ? (
                            <img
                                src={item.icon}
                                alt={item.label || "feature"}
                                className="w-12 h-12 object-contain"
                            />
                        ) : null}
                    </span>

                    {/* Label */}
                    <TypographyMuted className="leading-none border-b-2 pb-2 border-gray-400 break-words order-2 sm:order-2">
                        {item.label}
                    </TypographyMuted>
                </div>
            ))}
        </div>
    </div>
);
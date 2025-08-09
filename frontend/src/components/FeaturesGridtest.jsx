import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { TypographyMuted } from "@/custom/Typography";

export const FeaturesGridtest = ({
    leftFeatures = [],
    rightFeatures = [],
    centerImage,
    fadeUp,
    iconSize = 40,
}) => (
    <div className="flex flex-col lg:flex-row items-center w-full justify-center lg:justify-between gap-16 lg:gap-2 mt-10">
        {/* Left Column */}
        <div className="flex flex-col gap-10 text-start sm:text-right w-full max-w-xs lg:max-w-sm">
            {leftFeatures.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center lg:justify-end justify-start  gap-4 sm:gap-6"
                >
                    {/* Icon on mobile first, desktop last */}
                    <span className="flex-shrink-0 order-1 lg:order-2">
                        {item?.img ? (
                            <img
                                src={item.img}
                                alt={item.label || "feature"}
                                className="w-10 h-10 object-contain"
                                style={{ width: iconSize, height: iconSize }}
                            />
                        ) : null}
                    </span>


                    {/* Label */}
                    <TypographyMuted className="leading-none border-b pb-2 border-foreground whitespace-nowrap order-2 sm:order-1">
                        {item.label}
                    </TypographyMuted>
                </div>
            ))}
        </div>

        {/* Center Image */}
        {centerImage && (
            <FadeInWhenVisible
                className="flex-shrink-0 w-full max-w-md lg:max-w-xl my-8 lg:my-0 hidden lg:block"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <img
                    loading="lazy"
                    src={centerImage}
                    alt="Center Graphic"
                    className="w-full h-auto mx-auto md:w-[80%]"
                />
            </FadeInWhenVisible>
        )}

        {/* Right Column */}
        <div className="flex flex-col gap-10 items-start text-left w-full max-w-xs lg:max-w-sm">
            {rightFeatures.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center justify-start gap-4 sm:gap-6"
                >
                    {/* Icon always first on desktop, second on mobile */}
                    <span className="flex-shrink-0 order-1 sm:order-1">
                        {item?.img ? (
                            <img
                                src={item.img}
                                alt={item.label || "feature"}
                                className="w-10 h-10 object-contain"
                                style={{ width: iconSize, height: iconSize }}
                            />
                        ) : null}
                    </span>

                    {/* Label */}
                    <TypographyMuted className="leading-none border-b pb-2 border-foreground whitespace-nowrap order-2 sm:order-2">
                        {item.label}
                    </TypographyMuted>
                </div>
            ))}
        </div>
    </div>
);

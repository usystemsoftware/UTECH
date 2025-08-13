import React from "react";
import { FeaturesList } from "../components/FeaturesList";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

const ImageNearScreen = ({ features, src, imageAlign = "left" }) => {
    const isRight = imageAlign === "right";

    return (
        <div className="flex flex-col items-center gap-2 relative">
            <div
                className={`flex items-center w-full gap-10 my-4 ${isRight ? "flex-row-reverse" : ""
                    }`}
            >
                {/* Image */}
                <div
                    className={`flex-shrink-0 items-cente  pt-16 w-[500px] hidden md:flex ${isRight ? "justify-end" : ""
                        }`}
                >
                    <FadeInWhenVisible delay={0.5}>
                        <img
                            loading="lazy"
                            src={src}
                            alt="Portfolio"
                            className={`w-[450px] h-auto object-contain
                            `}
                        />
                    </FadeInWhenVisible>
                </div>

                {/* Content */}
                <div
                    className={`flex items-center ${isRight ? " pl-3 md:pl-16" : "md:pr-16"
                        } flex-1`}
                >
                    <FeaturesList features={features} center grid />
                </div>
            </div>
        </div>
    );
};

export default ImageNearScreen;

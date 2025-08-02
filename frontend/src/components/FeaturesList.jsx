// src/components/FeaturesList.jsx
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { TypographyH5, TypographyMuted } from "@/custom/Typography";
import { IconRenderer } from "@/custom/IconRenderer";

export const FeaturesList = ({
  features = [],
  fadeUp,
  iconSize = 40,
  grid = false,
  grid3 = false,
  image,
  imageClass = "",
  reverse = false,
}) => {
  let contentClass = "w-full text-left";

  if (grid3) {
    contentClass = "grid grid-cols-1 sm:grid-cols-3 gap-8 text-left w-full";
  } else if (grid) {
    contentClass = "grid grid-cols-1 sm:grid-cols-2 gap-8 text-left w-full";
  } else {
    contentClass = "w-full space-y-10 text-left";
  }

  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-center gap-10 xl:gap-48`}
    >
      <div className={contentClass}>
        {features.map((feature, index) => (
          <FadeInWhenVisible key={index} className="flex items-start gap-4">
            <span className="flex-shrink-0">
              <IconRenderer
                name={feature.icon}
                size={iconSize}
                className="text-primary"
              />
            </span>
            <div>
              <TypographyH5>{feature.title}</TypographyH5>
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
};

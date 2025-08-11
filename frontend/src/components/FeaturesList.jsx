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
  grid4 = false,
  center = false,
  image,
  imageClass = "",
  reverse = false,
}) => {
  // Determine text alignment class
  const textAlignClass = center ? "text-center" : "text-left";

  // Determine layout class
  let contentClass;
  if (grid3) {
    contentClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${textAlignClass} w-full`;
  } else if (grid4) {
    contentClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${textAlignClass} w-full`;
  } else if (grid) {
    contentClass = `grid grid-cols-1 sm:grid-cols-2 gap-6 ${textAlignClass} w-full`;
  } else {
    contentClass = `w-full space-y-4 ${textAlignClass}`;
  }

  return (
    <div
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center justify-center gap-8`}
    >
      <div className={contentClass}>
        {features.map((feature, index) => (
          <FadeInWhenVisible
            key={index}
            className={`flex flex-col gap-2 ${center ? "items-center" : "items-start"
              }`}
          >
            <span className="flex-shrink-0">
              <IconRenderer
                name={feature.icon}
                size={iconSize}
                className="text-primary"
              />
            </span>
            <TypographyH5 className="font-extrabold text-base tracking-tight">
              {feature.title}
            </TypographyH5>
            <TypographyMuted>{feature.description}</TypographyMuted>
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

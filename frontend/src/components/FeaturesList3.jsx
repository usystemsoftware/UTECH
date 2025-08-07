// src/components/FeaturesList2.jsx
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { TypographyH5, TypographyMuted } from "@/custom/Typography";
import { IconRenderer } from "@/custom/IconRenderer";

export const FeaturesList3 = ({
  features = [],
  fadeUp,
  iconSize = 40,
  grid = false,
  grid3 = false,
  grid4 = false,
  image,
  imageClass = "",
  reverse = false,
}) => {
  let contentClass = "w-full text-left";

  if (grid4) {
    contentClass =
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left w-full";
  } else if (grid3) {
    contentClass =
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left w-full";
  } else if (grid) {
    contentClass = "grid grid-cols-1 sm:grid-cols-2 gap-6 text-left w-full";
  } else {
    contentClass = "w-full space-y-10 text-left";
  }

  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-center gap-10`}
    >
      <div className={contentClass}>
        {features.map((feature, index) => (
          <FadeInWhenVisible
            key={index}
            className="flex items-start flex-col gap-2"
          >
            {/* Icon + Title Inline */}
            <div className="flex items-center gap-2">
              <span className="flex-shrink-0">
                <IconRenderer
                  name={feature.icon}
                  size={iconSize}
                  className="text-primary"
                />
              </span>
              <TypographyH5 className="font-extrabold text-base tracking-tight">
                {feature?.title}
              </TypographyH5>
            </div>

            {/* Description */}
            {feature?.description && (
              <TypographyMuted>{feature?.description}</TypographyMuted>
            )}

            {/* Optional List */}
            {feature?.list && (
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                {feature.list.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </FadeInWhenVisible>
        ))}
      </div>

      {/* Feature Image */}
      {image && (
        <FadeInWhenVisible className="flex-shrink-0" variants={fadeUp}>
          <img
            loading="lazy"
            src={image}
            alt="feature"
            className={imageClass}
          />
        </FadeInWhenVisible>
      )}
    </div>
  );
};

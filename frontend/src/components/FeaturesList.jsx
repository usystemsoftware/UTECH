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
  image,
  imageClass = "",
  reverse = false,
}) => {
  let contentClass = "w-full text-center";

  if (grid3) {
    contentClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full text-center";
  } else if (grid4) {
    contentClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full text-center";
  } else if (grid) {
    contentClass = "grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-center";
  } else {
    contentClass = "w-full space-y-10 text-center";
  }

  return (
    <div
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-start justify-center gap-10`}
    >
      <div className={contentClass}>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start gap-3 h-full"
          >
            {/* Icon or Image */}
            <div className="flex items-center justify-center h-16">
              {feature.icon ? (
                <IconRenderer
                  name={feature.icon}
                  size={iconSize}
                  className="text-primary"
                />
              ) : feature.img ? (
                <img
                  src={feature.img}
                  alt={feature.title || "feature"}
                  className="max-h-16 object-contain"
                  loading="lazy"
                />
              ) : null}
            </div>

            {/* Title */}
            <TypographyH5 className="font-extrabold text-base tracking-tight">
              {feature.title}
            </TypographyH5>

            {/* Description */}
            <TypographyMuted className="w-full text-xs leading-5 text-left line-clamp-4">
              {feature.description}
            </TypographyMuted>
          </div>
        ))}
      </div>

      {/* Main Side Image */}
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

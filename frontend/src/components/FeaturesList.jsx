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
  iconAlign = "vertical",
}) => {
  // Determine text alignment class
  const textAlignClass = center ? "text-center" : "sm:text-left text-center";

  // Determine layout class
  let contentClass;
  if (grid3) {
    contentClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${textAlignClass} w-full`;
  } else if (grid4) {
    contentClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${textAlignClass} w-full`;
  } else if (grid) {
    contentClass = `grid grid-cols-1 sm:grid-cols-2 gap-6 ${textAlignClass} w-full`;
  } else {
    contentClass = `w-full space-y-7 ${textAlignClass}`;
  }

  // Helper: Check if icon is an SVG file path
  const isSvgIcon = (icon) =>
    typeof icon === "string" && icon.trim().toLowerCase().endsWith(".svg");

  return (
    <div
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center justify-center gap-8`}
    >
      <div className={contentClass}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex ${iconAlign === "horizontal"
              ? `sm:flex-row flex-col gap-4 ${center ? "items-center" : "items-center sm:items-start"}`
              : `flex-col gap-2 ${center ? "items-center" : "items-center sm:items-start"}`
              }`}
          >
            {/* ICON */}
            <span className="flex-shrink-0">
              {isSvgIcon(feature.icon) ? (
                <img
                  src={feature.icon}
                  alt={feature.title}
                  width={iconSize}
                  height={iconSize}
                  className="object-contain w-14 h-14"
                />
              ) : (
                <IconRenderer
                  name={feature.icon}
                  size={iconSize}
                  className="text-primary"
                />
              )}
            </span>

            {/* TEXT */}
            <div className={iconAlign === "horizontal" ? "flex-1" : ""}>
              <TypographyH5 className="font-extrabold text-base tracking-tight">
                {feature.title}
              </TypographyH5>
              <TypographyMuted className="sm:line-clamp-4 text-start">{feature.description}</TypographyMuted>
            </div>
          </div>
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

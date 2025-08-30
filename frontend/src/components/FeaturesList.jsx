// src/components/FeaturesList.jsx
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { TypographyH5, TypographyMuted } from "@/custom/Typography";
import { IconRenderer } from "@/custom/IconRenderer";

// Helper: Check if icon is an image file path (svg, png, jpg, jpeg, webp, gif)
const isImageIcon = (icon) => {
  if (typeof icon !== "string") return false;
  const ext = icon.trim().toLowerCase();
  return (
    ext.endsWith(".svg") ||
    ext.endsWith(".png") ||
    ext.endsWith(".jpg") ||
    ext.endsWith(".jpeg") ||
    ext.endsWith(".webp") ||
    ext.endsWith(".gif")
  );
};

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
  // Alignment classes
  const textAlignClass = center
    ? "text-center items-center"
    : "text-center md:text-left md:items-start";

  // Layout classes
  let contentClass;
  if (grid3) {
    contentClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${textAlignClass} w-full`;
  } else if (grid4) {
    contentClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${textAlignClass} w-full`;
  } else if (grid) {
    contentClass = `grid grid-cols-1 sm:grid-cols-2 gap-6 ${textAlignClass} w-full`;
  } else {
    contentClass = `w-full space-y-8 ${textAlignClass}`;
  }

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
              ? `md:flex-row flex-col gap-4 ${center ? "items-center" : "items-center md:items-start"
              }`
              : `flex-col gap-4 ${center ? "items-center" : "items-center md:items-start"
              }`
              } ${center ? "text-center" : "text-center md:text-left"}`}
          >
            {/* ICON */}
            <span className="flex-shrink-0">
              {isImageIcon(feature.icon) ? (
                <img
                  src={feature.icon}
                  alt={feature.title}
                  width={iconSize}
                  height={iconSize}
                  className="object-contain w-12 h-12 lg:w-17 lg:h-17 sm:w-15 sm:h-15"
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
            <div
              className={
                iconAlign === "horizontal" && !center ? "flex-1 md:ml-4" : ""
              }
            >
              <TypographyH5 className="text-base 2xl:text-xl tracking-tight">
                {feature.title}
              </TypographyH5>
              <TypographyMuted className="break-words tracking-tight text-justify">
                {feature.description}
              </TypographyMuted>
            </div>
          </div>
        ))}
      </div>

      {image && (
        <FadeInWhenVisible
          className={`flex-shrink-0 ${imageClass} w-full`}
          variants={fadeUp}
        >
          <img
            loading="lazy"
            src={image}
            alt="feature"
            className={`w-135 mx-auto ${imageClass} `}
          />
        </FadeInWhenVisible>
      )}
    </div>
  );
};

export const FeaturesListOpposite = ({ features }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {features.map(({ icon, iconSize = 40, title, description }, index) => {
        const isRightColumn = index % 2 !== 0; // Odd index → right column
        return (
          <div
            key={index}
            className={`flex items-center gap-5 text-center
              ${isRightColumn
                ? "flex-col md:flex-row-reverse md:text-right md:items-start"
                : "flex-col md:flex-row md:text-left md:items-start"
              }`}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              {isImageIcon(icon) ? (
                <img
                  src={icon}
                  alt={title}
                  width={iconSize}
                  height={iconSize}
                  className="object-contain w-12 h-12 lg:w-17 lg:h-17 sm:w-15 sm:h-15"
                />
              ) : (
                <IconRenderer
                  name={icon}
                  size={iconSize}
                  className="text-primary"
                />
              )}
            </div>

            {/* Text */}
            <div className="w-full">
              <TypographyH5 className="text-base md:text-xl text-primary tracking-tight">
                {title}
              </TypographyH5>
              <div
                className={`max-w-sm border-b-2 border-gray-200 my-2 
                    mx-auto md:mx-0 
                    ${isRightColumn ? "md:ml-auto" : ""}`}
              />
              <TypographyMuted className="break-words tracking-tight text-justify">
                {description}
              </TypographyMuted>
            </div>
          </div>
        );
      })}
    </div>
  );
};

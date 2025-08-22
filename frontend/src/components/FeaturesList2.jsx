import { TypographyH5, TypographyMuted } from "@/custom/Typography";
import { IconRenderer } from "@/custom/IconRenderer";

const isImageIcon = (icon) => {
  if (typeof icon !== "string") return false;
  const lower = icon.trim().toLowerCase();
  return (
    lower.endsWith(".svg") ||
    lower.endsWith(".png") ||
    lower.endsWith(".jpg") ||
    lower.endsWith(".jpeg") ||
    lower.endsWith(".webp")
  );
};

export const FeaturesList2 = ({
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
          <div key={index} className="flex items-start gap-8 ">
            <span className="flex-shrink-0">
              {isImageIcon(feature.icon) ? (
                <img
                  src={feature.icon}
                  alt={feature.title}
                  width={iconSize}
                  height={iconSize}
                  className="object-contain lg:w-17 lg:h-17 w-14 h-14"
                />
              ) : (
                <IconRenderer
                  name={feature.icon}
                  size={iconSize}
                  className="text-primary"
                />
              )}
            </span>
            <div>
              <div className="flex items-center gap-4">
                <TypographyH5 className="font-extrabold text-base 2xl:text-xl tracking-tight">
                  {feature?.title}
                </TypographyH5>
              </div>

              {feature?.description && (
                <TypographyMuted>{feature?.description}</TypographyMuted>
              )}

              {feature?.list && (
                <ul className="list-disc text-sm pl-5 mt-2 space-y-4 text-muted-foreground">
                  {feature.list.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {image && (
        <div className={`flex-shrink-0 ${imageClass} w-135`} variants={fadeUp}>
          <img
            loading="lazy"
            src={image}
            alt="feature"
            className={imageClass || "w-135"}
          />
        </div>
      )}
    </div>
  );
};

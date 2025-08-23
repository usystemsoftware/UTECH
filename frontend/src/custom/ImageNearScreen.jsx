import { FeaturesList } from "@/components/FeaturesList";

const ImageNearScreen = ({
  features,
  src,
  imageAlign = "left",
  imgClass = "",
}) => {
  const isRight = imageAlign === "right";

  return (
    <div className="flex flex-col items-center gap-2 relative">
      <div
        className={`flex items-center justify-between xl:gap-20 w-full my-4 ${
          isRight ? "flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div
          className={`flex-shrink-0 items-center pt-16 ${
            imgClass || "w-120"
          } hidden md:flex ${isRight ? "justify-end" : ""}`}
        >
          <img
            loading="lazy"
            src={src}
            alt="Portfolio"
            className={`${imgClass} object-contain`}
          />
        </div>

        {/* Content */}
        <div
          className={`flex items-center ${
            isRight ? "pl-3 md:pl-28" : "px-3 md:pr-16"
          } flex-1`}
        >
          <FeaturesList features={features} center grid />
        </div>
      </div>
    </div>
  );
};

export default ImageNearScreen;

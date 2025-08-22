import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { TypographyMuted } from "@/custom/Typography";
import { IconRenderer } from "@/custom/IconRenderer";

export const FeaturesGrid = ({
  leftFeatures = [],
  rightFeatures = [],
  centerImage,
  fadeUp,
  iconSize = 40,
}) => (
  <div className="flex sm:mt-0 mt-8 flex-col sm:flex-row items-center w-full justify-between gap-8 lg:gap-12">
    {/* Left Column */}
    <div className="flex flex-col gap-8 text-start sm:text-right w-full">
      {leftFeatures.map((item, index) => (
        <FadeInWhenVisible
          key={index}
          className="flex items-center sm:justify-end gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={index}
        >
          <span className="flex-shrink-0 sm:hidden block">
            <IconRenderer
              name={item?.icon}
              size={iconSize}
              className="text-primary"
            />
          </span>
          <p className="flex-shrink-0 sm:hidden block">
            <img src={item?.img} alt="" />
          </p>
          <TypographyMuted className="leading-none border-b pb-2 border-foreground">
            {item.label}
          </TypographyMuted>
          <span className="flex-shrink-0 sm:block hidden">
            <IconRenderer
              name={item.icon}
              size={iconSize}
              className="text-primary"
            />
          </span>
        </FadeInWhenVisible>
      ))}
    </div>

    {/* Center Image */}
    {centerImage && (
      <FadeInWhenVisible
        className="w-full my-10 flex"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          loading="lazy"
          src={centerImage}
          alt=""
          className="lg:w-145 w-fit mx-auto md:flex-shrink-0"
        />
      </FadeInWhenVisible>
    )}

    {/* Right Column */}
    <div className="flex flex-col gap-8 items-start text-left w-full">
      {rightFeatures.map((item, index) => (
        <FadeInWhenVisible
          key={index}
          className="flex items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={index}
        >
          <span className="flex-shrink-0">
            <IconRenderer
              name={item.icon}
              size={iconSize}
              className="text-primary"
            />
          </span>
          <TypographyMuted className="leading-none border-b pb-2 border-foreground">
            {item.label}
          </TypographyMuted>
        </FadeInWhenVisible>
      ))}
    </div>
  </div>
);

import { TypographyH1, TypographyMuted } from "@/custom/Typography";
import clsx from "clsx";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

export default function HeadingSection({
  title,
  highlight,
  description,
  className,
}) {
  return (
    <FadeInWhenVisible
      className={clsx("text-center md:px-8 space-y-2 my-12", className)}
    >
      <TypographyH1 className="flex items-center uppercase xl:text-3xl 2xl:text-4xl justify-center gap-2">
        {title} <span className="text-primary">{highlight}</span>
      </TypographyH1>

      {description && (
        <TypographyMuted className="2xl:text-xl tracking-tight">
          {description}
        </TypographyMuted>
      )}
    </FadeInWhenVisible>
  );
}

// components/CaseStudyCard.jsx
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographyH4, TypographyMuted } from "@/custom/Typography";
import { IconRenderer } from "@/custom/IconRenderer";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

export default function CaseStudyCard({
  icon,
  title,
  description,
  year,
  features,
  link,
  image,
  color = "from-primary to-foreground/40",
  index = 0,
  direction = "bottom",
}) {
  const delay = index * 0.2;

  return (
    <FadeInWhenVisible delay={delay} direction={direction}>
      <Card className="cursor-pointer shadow-none p-0 hover:scale-[1.02] transition-transform hover:translate-y-1 rounded-xl overflow-hidden w-full max-w-sm flex flex-col justify-start">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
          />
        )}

        <div className="space-y-3 flex-1 flex flex-col">
          {icon && (
            <div
              className={`w-11 h-11 mx-3 rounded-2xl px-3 bg-gradient-to-r ${color} flex items-center justify-center z-10 mt-3`}
            >
              <IconRenderer
                name={icon}
                size={20}
                strokeWidth={2}
                className="text-white"
              />
            </div>
          )}

          <TypographyH4 className="px-3">{title}</TypographyH4>

          <TypographyMuted className="px-3 sm:line-clamp-3">
            {description}
          </TypographyMuted>

          {year && (
            <p className="text-sm text-gray-500 italic px-3">Year: {year}</p>
          )}

          {features?.length > 0 && (
            <div className="space-y-2 px-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
                  />
                  <span className="text-sm text-gray-600 font-medium sm:line-clamp-1">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}

          {link && (
            <div className="px-3 pb-4">
              <Link to={link}>
                <Button size="sm" className="w-full">
                  Learn More
                  <IconRenderer
                    name="MoveRight"
                    size={20}
                    strokeWidth={2}
                    className="text-white ml-2"
                  />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Card>
    </FadeInWhenVisible>
  );
}

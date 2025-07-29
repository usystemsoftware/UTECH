import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TypographyH4, TypographyMuted } from "@/custom/Typography";
import { Link } from "react-router-dom";
import { IconRenderer } from "@/custom/IconRenderer";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

export default function CaseStudyCard({
  icon,
  title,
  description,
  year,
  features,
  link,
  color = "from-primary to-foreground/40",
  index = 0,
}) {
  return (
    <FadeInWhenVisible delay={index * 0.2}>
      <Card className="cursor-pointer border-none shadow-primary/20 shadow-2xl hover:scale-105 transaction hover:translate-y-1">
        <FadeInWhenVisible
          whileHover={{ scale: 1.1, rotate: 5, z: 20 }}
          className={`w-11 h-11 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center relative z-10 transform-3d`}
        >
          <IconRenderer name={icon} size={20} className="text-white" />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <TypographyH4 className="sm:line-clamp-1">{title}</TypographyH4>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <TypographyMuted className="sm:line-clamp-3">
            {description}
          </TypographyMuted>
        </FadeInWhenVisible>

        {year && (
          <FadeInWhenVisible>
            <p className="text-sm text-gray-500 italic">Year: {year}</p>
          </FadeInWhenVisible>
        )}

        {features?.length > 0 && (
          <div className="space-y-3">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1 + featureIndex * 0.05,
                }}
                className="flex items-center space-x-3"
              >
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
                ></div>
                <span className="text-sm text-gray-600 font-medium sm:line-clamp-1">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        <Link to={link}>
          <button className="mt-2 w-full px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/50 text-primary text-sm cursor-pointer rounded-md font-semibold hover:from-primary/10 hover:to-primary/20 hover:text-primary transition-all duration-300 border border-gray-200 transform-3d">
            Learn More
          </button>
        </Link>
      </Card>
    </FadeInWhenVisible>
  );
}

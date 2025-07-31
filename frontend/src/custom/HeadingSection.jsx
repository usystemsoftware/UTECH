import { motion } from "framer-motion";
import { TypographyH1, TypographyMuted } from "@/custom/Typography";
import clsx from "clsx";

export default function HeadingSection({
  title,
  highlight,
  description,
  className,
}) {
  return (
    <motion.div
      className={clsx("text-center md:px-8 space-y-2 my-12", className)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <TypographyH1 className="flex items-center justify-center gap-2">
        {title}{" "}
        <span className="bg-gradient-to-r px-2 from-orange-600 to-red-600 text-pink-600 bg-clip-text">
          {highlight}
        </span>
      </TypographyH1>

      {description && <TypographyMuted>{description}</TypographyMuted>}
    </motion.div>
  );
}

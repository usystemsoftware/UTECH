import React from "react";
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
      className={clsx("text-center md:px-8 space-y-4 my-12", className)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <TypographyH1>
        {title}{" "}
        <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          {highlight}
        </span>
      </TypographyH1>

      {description && (
        <TypographyMuted
          className={clsx(
            "text-base sm:text-lg w-full sm:max-w-xl mx-auto leading-relaxed"
          )}
        >
          {description}
        </TypographyMuted>
      )}
    </motion.div>
  );
}

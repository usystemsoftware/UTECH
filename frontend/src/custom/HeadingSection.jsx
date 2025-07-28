import { motion } from "framer-motion";
import { TypographyH1, TypographyMuted } from "@/custom/Typography";
import clsx from "clsx";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

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
      <TypographyH1 className='flex items-center justify-center gap-2'>
        {title}{" "}
        <PointerHighlight>
          <span className="bg-gradient-to-r px-2 from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        </PointerHighlight>
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

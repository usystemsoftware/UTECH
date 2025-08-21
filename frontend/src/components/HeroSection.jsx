import { Link } from "react-router-dom";
import { TypographyH1, TypographyP } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import Breadcrumbs from "./Breadcrumbs";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import ShareButtons from "@/custom/ShareButtons";
import { motion } from "framer-motion";
import ContactUsButton from "@/custom/ContactUsButton";

export default function HeroSection({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink = "#",
  animationVariants = fadeUp,
  imageFit = "cover", // Accepts: 'cover', 'contain', etc.
  overlayOpacity = 0.1,
}) {
  return (
    <>
      {/* Hero Section Container */}
      <section className="relative w-full min-h-[70vh] md:min-h-[100vh] flex items-center md:justify-center overflow-hidden">
        {/* Background Image Layer */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: imageFit,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          animate={{ scale: [1, 1.1, 1] }} // zoom in/out
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />


        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }} // Opacity from 0 to 1 (e.g., 0.3 = 30%)
        />

        {/* Foreground Text & Button */}
        <div
          className="relative z-20 md:max-w-5xl mt-12 sm:mt-0 w-full mx-auto text-center px-2 space-y-6 text-white"
          variants={animationVariants}
        >
          <TypographyH1 className="md:text-5xl text-2xl uppercase">{title}</TypographyH1>

          {description && <TypographyP className="text-sm">{description}</TypographyP>}
          {buttonText && (
            <ContactUsButton
              variant="herosection"
            >
              <span
                className="inline-block border-3 uppercase border-orange-500 md:text-md hover:bg-orange-500 hover:text-white transition-colors duration-300 py-3 px-6 text-sm sm:text-lg rounded-full"
              >
                {buttonText}
              </span>
            </ContactUsButton>
          )}

        </div>
        <ShareButtons />
      </section >

      {/* Breadcrumbs Section */}
      <PageLayout PageLayout className="mt-4 dark:border-t-2 pt-4" >
        <Breadcrumbs />
      </PageLayout >
    </>
  );
}

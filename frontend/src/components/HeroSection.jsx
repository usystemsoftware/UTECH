import { Link } from "react-router-dom";
import { TypographyH1, TypographyP } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import Breadcrumbs from "./Breadcrumbs";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";

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
      <section className="relative w-full min-h-[75vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: imageFit, // Controls image fit (e.g., 'cover' or 'contain')
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }} // Opacity from 0 to 1 (e.g., 0.3 = 30%)
        />

        {/* Foreground Text & Button */}
        <FadeInWhenVisible
          className="relative z-20 max-w-6xl mx-auto text-center px-4 space-y-6 text-white"
          variants={animationVariants}
        >
          <TypographyH1>{title}</TypographyH1>

          {description && <TypographyP>{description}</TypographyP>}

          {buttonText && (
            <Link
              to={buttonLink}
              className="inline-block border-2 border-primary text-sm hover:bg-primary hover:text-secondary transition-colors duration-300 py-2 px-6 rounded-full"
            >
              {buttonText}
            </Link>
          )}
        </FadeInWhenVisible>
      </section>

      {/* Breadcrumbs Section */}
      <PageLayout className="mt-4 dark:border-t-2 pt-4">
        <Breadcrumbs />
      </PageLayout>
    </>
  );
}

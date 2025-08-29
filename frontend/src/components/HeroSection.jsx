import { Link } from "react-router-dom";
import { TypographyH1, TypographyP } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import Breadcrumbs from "./Breadcrumbs";
import { motion } from "framer-motion";
import ContactUsButton from "@/custom/ContactUsButton";

export default function HeroSection({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink = "#",
  imageFit = "cover", // Accepts: 'cover', 'contain', etc.
  overlayOpacity = 0.1,
  bottomLinks,
}) {
  return (
    <>
      {/* Hero Section Container */}
      <section className="relative w-full min-h-[65vh] sm:min-h-[70vh] md:min-h-[100vh] flex items-center md:justify-center overflow-hidden">
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
          style={{ opacity: overlayOpacity }}
        />

        {/* Foreground Text & Button */}
        <div className="relative z-20 md:max-w-5xl 2xl:max-w-6xl mt-12 sm:mt-0 w-full mx-auto text-center px-2 space-y-6 2xl:space-y-12 text-white">
          <TypographyH1 className="md:text-5xl 2xl:text-6xl leading-7 tracking-normal text-2xl uppercase">
            {title}
          </TypographyH1>

          {description && (
            <TypographyP className="text-sm 2xl:text-2xl">
              {description}
            </TypographyP>
          )}

          {buttonText && (
            <ContactUsButton variant="herosection">
              <span className="inline-block border-3 uppercase border-orange-500 text-wrap md:text-md hover:bg-orange-500 hover:text-white transition-colors duration-300 py-3 px-6 text-sm sm:text-lg rounded-full">
                {buttonText}
              </span>
            </ContactUsButton>
          )}
        </div>

        {/* Bottom Navigation + SAP Logo */}
        <div className="absolute bottom-0 left-0 w-full bg-[#0072BC] flex items-center justify-between z-30">
          {/* SAP Silver Partner Logo */}
          <div className="flex items-center px-6 py-3 bg-white">
            <img
              src="/assets/sap-silver-partner.png"
              alt="SAP Silver Partner"
              className="h-12 object-contain"
            />
          </div>

          {/* Links fill remaining space */}
          <div className="flex flex-1">
            {bottomLinks?.map((option, index) => (
              <Link
                key={index}
                to={option?.link}
                className="flex-1 text-center border-r border-white/40 px-4 py-4 text-white text-sm sm:text-base hover:bg-[#005a96] transition"
              >
                {option?.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumbs Section */}
      <PageLayout className="mt-4 dark:border-t-2 pt-4">
        <Breadcrumbs />
      </PageLayout>
    </>
  );
}

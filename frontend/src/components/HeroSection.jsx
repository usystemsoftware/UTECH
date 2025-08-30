import { Link } from "react-router-dom";
import { TypographyH1, TypographyP } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import Breadcrumbs from "./Breadcrumbs";
import { motion } from "framer-motion";
import ContactUsButton from "@/custom/ContactUsButton";
import BannerBottomLinks from "./BannerBottomLinks";

export default function HeroSection({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink = "#",
  bottombgcolor,
  imageFit = "cover",
  overlayOpacity = 0.3,
  bottomLinks,
  partnerLogo
}) {
  return (
    <>
      {/* Hero Section Container */}
      <section className="relative w-full min-h-[80vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: imageFit,
            backgroundPosition: "contain",
            backgroundRepeat: "no-repeat",
            imageRendering: "crisp-edges",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />

        {/* Foreground Content */}
        <div className="relative z-20 md:max-w-5xl text-center px-4 space-y-6 text-white">
          {/* Title */}
          <TypographyH1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-snug">
            {title}
          </TypographyH1>

          {/* Description */}
          {description && (
            <TypographyP className="text-sm md:text-lg max-w-2xl mx-auto">
              {description}
            </TypographyP>
          )}

          {/* Button */}
          {buttonText && (
            <ContactUsButton variant="herosection">
              <Link
                to={buttonLink}
                className="inline-block border-2 border-orange-500 text-white uppercase hover:bg-orange-500 hover:text-white transition-colors duration-300 py-3 px-8 text-sm md:text-lg font-medium rounded-full"
              >
                {buttonText}
              </Link>
            </ContactUsButton>
          )}
        </div>

        {/* SAP Silver Partner Logo with White Background */}
        {
          partnerLogo && <div className="absolute bottom-0 right-0 opacity-100 z-40">
            <img
              src={partnerLogo}
              alt={title}
              className="h-14 md:h-20 object-contain"
            />
          </div>
        }
      </section>

      <BannerBottomLinks
        bottomLinks={bottomLinks}
        bottombgcolor={bottombgcolor}
      />

      {/* Breadcrumbs */}
      <PageLayout className="mt-4 pt-4 border-t">
        <Breadcrumbs />
      </PageLayout>
    </>
  );
}

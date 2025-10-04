import { Link } from "react-router-dom";
import { TypographyH1, TypographyP } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import Breadcrumbs from "./Breadcrumbs";
import { motion } from "framer-motion";
import ContactUsButton from "@/custom/ContactUsButton";
import BannerBottomLinks from "./BannerBottomLinks";
import ShareButtons from "../custom/ShareButtons"; //
import { Helmet } from "react-helmet";
import SeoHead from "./SeoHead";

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
  partnerLogo,
}) {
  const shareUrl = window.location.href; // current page url

  return (
    <>
      <SeoHead
        title={title}
        description={description}
        url={shareUrl}
        image={backgroundImage} // 👈 take from hero bg
      />
      {/* SEO Open Graph Meta Tags */}
      <Helmet>
        <meta
          property="og:title"
          content={title || "Explore IT Solutions with U Tech"}
        />
        <meta
          property="og:description"
          content={description || "Check out U Tech today!"}
        />
        <meta property="og:image" content={backgroundImage} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

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
          <TypographyH1 className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize leading-snug">
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

          {/* Share Buttons */}
          <div className="mt-6 flex justify-center">
            <ShareButtons bgImage={backgroundImage} />
          </div>
        </div>

        {/* SAP Silver Partner Logo */}
        {partnerLogo && (
          <div className="absolute bottom-0 right-0 opacity-100 z-40">
            <img
              src={partnerLogo}
              alt={title}
              className="h-14 md:h-20 object-contain"
            />
          </div>
        )}
      </section>

      <BannerBottomLinks
        bottomLinks={bottomLinks}
        bottombgcolor={bottombgcolor}
      />

      {/* Breadcrumbs */}
      <PageLayout className="mt-4 pt-4">
        <Breadcrumbs />
      </PageLayout>
    </>
  );
}

import { Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  TypographyLead,
  TypographySmall,
  TypographyH1,
} from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import ShareButtons from "@/custom/ShareButtons";

export const HeroSection = () => {
  return (
    <div
      className="relative min-h-[70vh] sm:min-h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/banner/hero.jpg")' }}
    >
      {/* Overlay dark gradient */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <PageLayout className="relative z-10 flex items-center min-h-[70vh] sm:min-h-[100vh] justify-center pt-20 sm:pt-14">
        <div className="grid sm:grid-cols-2 items-center gap-10">
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-8 text-white">
            <FadeInWhenVisible delay={0.1} className="hidden md:block">
              <TypographySmall className="sm:p-3 p-2 text-center text-white bg-primary rounded-full text-sm 2xl:text-lg inline-block">
                🚀 Digital Engineering & Enterprise Modernization
              </TypographySmall>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <TypographyH1 className="tracking-tighter md:text-3xl xl:text-4xl 2xl:text-5xl text-white">
                Drive Innovation with a World-Class
                <span className="block text-primary">
                  Software Development Company
                </span>
              </TypographyH1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <TypographyLead className="text-white md:text-base xl:text-lg 2xl:text-xl">
                U Tech Systems is a global services and Custom Software
                Solutions & Support Services for Every Industry and Enterprise
                Modernization to help enterprises accelerate their Software
                Development journey.
              </TypographyLead>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/contact-us">
                  <Button className="w-full 2xl:text-lg 2xl:py-4">
                    Contact Us <Phone />
                  </Button>
                </Link>
                <Link to="/book-call">
                  <Button
                    variant="outline"
                    className="w-full  2xl:text-lg 2xl:py-4 text-black"
                  >
                    Book Call <Video />
                  </Button>
                </Link>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* RIGHT IMAGE / LOGO */}
          <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <div className="w-full flex justify-center">
              <img
                loading="lazy"
                src="/small-logo.png"
                alt="U Logo"
                className="w-[70%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[60%] max-h-[65vh] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </PageLayout>
      <ShareButtons />
    </div>
  );
};

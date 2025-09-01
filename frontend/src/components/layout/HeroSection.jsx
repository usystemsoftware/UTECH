import { Link } from "react-router-dom";
import {
  TypographyLead,
  TypographyH1,
} from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

export const HeroSection = () => {
  return (
    <div
      className="relative min-h-[80vh] sm:min-h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/banner/hero.jpg")' }}
    >
      {/* Overlay dark gradient */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <PageLayout className="relative z-10 flex items-center min-h-[80vh] sm:min-h-[100vh] justify-center pt-20 sm:pt-14">
        <div className="grid sm:grid-cols-2 items-center gap-10">
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-8 text-white">

            <FadeInWhenVisible delay={0.2}>
              <TypographyH1 className="tracking-tighter md:text-2xl xl:text-4xl text-white">
                Drive Innovation with a World-Class
                <span className="block text-primary">
                  Software Development Company
                </span>
              </TypographyH1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <TypographyLead className="text-white">
                U Tech Systems is a global services and Custom Software
                Solutions & Support Services for Every Industry and Enterprise
                Modernization to help enterprises accelerate their Software
                Development journey.
              </TypographyLead>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="flex items-center gap-4">
                <Link to="/contact-us" className="flex text-xs border-2 border-primary sm:text-sm items-center justify-center px-8 py-2 uppercase gap-2 bg-primary rounded-full">
                  Contact Us
                </Link>
                <Link to="/book-call" className="flex text-xs sm:text-sm items-center px-8 py-2 justify-center gap-2 border-2 hover:bg-primary border-primary rounded-full uppercase">
                  Book Call
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
    </div>
  );
};

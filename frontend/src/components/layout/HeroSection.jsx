import { Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TypographyLead, TypographySmall } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { AuroraBackground } from "@/components/ui/aurora-background";
import FloatingPhoneRight from "./FloatingPhone";

export const HeroSection = () => {
  return (
    <AuroraBackground className="min-h-[100vh]">
      <PageLayout className="relative flex items-center justify-center overflow-hidden pt-20 sm:pt-16">
        {/* Main Content */}
        <div className="grid sm:grid-cols-2 items-center">
          <div className="space-y-8">
            <FadeInWhenVisible delay={0.1}>
              <div className="flex items-center w-full">
                <TypographySmall className="p-3 bg-gradient-to-r from-orange-600 to-red-600 text-pink-600 bg-clip-text rounded-full text-sm border border-blue-200">
                  🚀 Digital Engineering & Enterprise Modernization
                </TypographySmall>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <h1 className="text-2xl md:text-4xl font-bold dark:text-white leading-tight">
                Drive Innovation with a World-Class
                <span className="block mt-3 bg-gradient-to-r from-orange-600 to-red-600 text-pink-600 bg-clip-text">
                  Software Development Company
                </span>
              </h1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <TypographyLead>
                U Tech Systems is a global services and Custom Software
                Solutions & Support Services for Every Industry and Enterprise
                Modernization to help enterprises accelerate their Software
                Development journey.
              </TypographyLead>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                <Link to="/contact-us">
                  <Button className="w-full">
                    Contact US
                    <Phone />
                  </Button>
                </Link>
                <Link to="/book-call">
                  <Button variant="outline" className="w-full">
                    Book Call
                    <Video />
                  </Button>
                </Link>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right Side Logo */}
          <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <FloatingPhoneRight />
          </FadeInWhenVisible>

          {/* <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <div className="w-full flex justify-center">
              <img
                loading="lazy"
                src="/small-logo.png"
                alt="U Logo"
                className="w-[70%] sm:w-[50%] md:w-[40%] lg:w-[50%] xl:w-[60%] max-h-[65vh] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </FadeInWhenVisible> */}
        </div>
      </PageLayout>
    </AuroraBackground>
  );
};

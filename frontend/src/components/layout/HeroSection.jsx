import { Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  TypographyLead,
  TypographySmall,
} from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const HeroSection = () => {

  return (
    <AuroraBackground>
      <PageLayout className="relative flex items-center justify-center overflow-hidden mt-20 sm:mt-0">

        {/* Main Content */}
        <div className="grid sm:grid-cols-2 items-center">
          <div className="space-y-8">
            <FadeInWhenVisible delay={0.1}>
              <div className="flex items-center w-full">
                <TypographySmall className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm border border-blue-200">
                  🚀 Digital Engineering & Enterprise Modernization
                </TypographySmall>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white leading-tight">
                Drive Innovation with a World-Class
                <PointerHighlight>
                  <span className="block px-2 py-2 mt-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
                    Software Development Company
                  </span>
                </PointerHighlight>
              </h1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <TypographyLead>
                U Tech Systems is a global services and Custom Software Solutions & Support Services for Every Industry
                and Enterprise Modernization to help enterprises accelerate their Software Development journey.
              </TypographyLead>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="flex flex-col md:flex-row gap-6">
                <Link to="/contact-us">
                  <Button className="w-full">
                    Contact US
                    <Phone />
                  </Button>
                </Link>
                <Link to="/book-call">
                  <Button variant="secondary" className="w-full">
                    Book Call
                    <Video />
                  </Button>
                </Link>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right Side Logo */}
          <FadeInWhenVisible delay={0.5}>
            <div className="hidden sm:block cursor-pointer perspective-[1000px]">
              <img
                src="/small-logo.png"
                alt="U Logo"
                className="h-[65vh] w-[80%] md:w-[60%] mx-auto"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </PageLayout>
    </AuroraBackground>
  );
};

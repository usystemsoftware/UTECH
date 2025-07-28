import { Zap, Globe, Users, Award, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  TypographyMuted,
  TypographySmall,
} from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import BubblesBackground from "@/components/BubblesBackground";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const HeroSection = () => {

  return (
    <AuroraBackground>
      <PageLayout className="relative flex items-center justify-center overflow-hidden">
        {/* Background Bubbles */}
        <BubblesBackground />

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
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Accelerate Your
                <PointerHighlight>
                  <span className="block px-2 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-300 bg-clip-text text-transparent">
                    Digital Transformation
                  </span>
                </PointerHighlight>
              </h1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <TypographyMuted>
                U Tech Systems is a global services and solutions company
                delivering Digital Engineering and Enterprise Modernization to
                help enterprises accelerate their digital transformation journey.
              </TypographyMuted>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="flex flex-col md:flex-row gap-4">
                <Link to="/contact-us">
                  <Button className="w-full">
                    Contact US
                    <Phone className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/book-call">
                  <Button variant="secondary" className="w-full">
                    Book Call
                    <Video className="ml-2 h-4 w-4" />
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
                className="h-[60vh] w-[80%] md:w-[50%] mx-auto"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </PageLayout>
    </AuroraBackground>
  );
};

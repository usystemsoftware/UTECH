import { useEffect, useState } from "react";
import { Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TypographyLead, TypographyH1 } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { type: "hero" }, // ✅ First slide is your HeroSection
  {
    image:
      "https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden min-h-[70vh] sm:min-h-[100vh]">
      <AnimatePresence initial={false}>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={{ x: "100%" }} // enter from right
                animate={{ x: 0 }} // center
                exit={{ x: "-100%" }} // exit to left
                transition={{ duration: 1.2, ease: "easeInOut" }} // slow smooth slide
              >
                {slide.type === "hero" ? (
                  <div
                    className="relative min-h-[70vh] sm:min-h-[100vh] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("/banner/hero.jpg")' }}
                  >
                    <div className="absolute inset-0 bg-black/50 z-0" />
                    <PageLayout className="relative z-10 flex items-center min-h-[70vh] sm:min-h-[100vh] justify-center pt-20 sm:pt-14">
                      <div className="grid sm:grid-cols-2 items-center gap-10">
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
                              U Tech Systems is a global services and Custom
                              Software Solutions & Support Services for Every
                              Industry and Enterprise Modernization to help
                              enterprises accelerate their Software Development
                              journey.
                            </TypographyLead>
                          </FadeInWhenVisible>

                          <FadeInWhenVisible delay={0.4}>
                            <div className="grid grid-cols-2 gap-4">
                              <Link to="/contact-us">
                                <Button className="w-full 2xl:py-4">
                                  Contact Us <Phone />
                                </Button>
                              </Link>
                              <Link to="/book-call">
                                <Button
                                  variant="outline"
                                  className="w-full 2xl:py-4 text-black"
                                >
                                  Book Call <Video />
                                </Button>
                              </Link>
                            </div>
                          </FadeInWhenVisible>
                        </div>

                        <FadeInWhenVisible
                          delay={0.5}
                          className="sm:block hidden"
                        >
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
                ) : (
                  // ✅ Other slides only image
                  <div
                    className="relative min-h-[70vh] sm:min-h-[100vh] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                )}
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary scale-110" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

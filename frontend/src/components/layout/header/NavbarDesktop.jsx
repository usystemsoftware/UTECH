import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AccessibilityWidget from "@/components/layout/AccessibilityWidget";
import PageLayout from "@/custom/PageLayout";
import { TypographyP, TypographySmall } from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import { Navlinks } from "@/data/Navlinks";
import { IconRenderer } from "@/custom/IconRenderer";
import ShareButtons from "@/custom/ShareButtons";

const NavbarDesktop = ({ setIsCommandOpen, scrolled, setScrolled }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const chunkArray = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 200);
  };

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full mx-auto z-50 ${scrolled ? "bg-white/40 backdrop-blur-xs shadow-md" : "bg-transparent"
        }`}
      style={{ right: 0, left: 0, margin: "0 auto" }}
    >
      <AccessibilityWidget />

      <div className="h-22 xl:h-24">
        <PageLayout className="flex justify-between items-center h-full max-w-[1440px] mx-auto px-6">
          <div className="flex items-center gap-16">
            {/* Logo */}
            <Link to="/" className="flex items-center relative z-40">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-28 md:w-40"
                loading="lazy"
              />
            </Link>


            {/* Nav Links */}
            <nav className="flex items-center gap-6 relative z-40">
              {Navlinks.map((item, index) => (
                <div
                  key={index}
                  className={`group relative ${!scrolled && "text-white"}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <TypographySmall
                      className={`font-semibold tracking-wide uppercase transition-colors duration-200 ${hoveredIndex === index
                        ? "text-primary  underline-offset-6 underline"
                        : "hover:text-primary"
                        }`}
                    >
                      {item.title}
                    </TypographySmall>
                    <IconRenderer
                      name="ChevronDown"
                      strokeWidth={2}
                      size={20}
                      className={`transition-transform duration-200 ${hoveredIndex === index ? "rotate-180 text-primary" : ""
                        }`}
                    />
                  </div>
                </div>
              ))}
              <Link to="/company/careers">
                <TypographySmall
                  className={`font-semibold tracking-wide uppercase  underline-offset-6 hover:underline hover:text-primary ${!scrolled && "text-white"
                    }`}
                >
                  Careers
                </TypographySmall>
              </Link>
            </nav>

          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4 lg:gap-8">
            <ShareButtons
              scrolled={scrolled}
              setScrolled={setScrolled}
            />

            <button
              className="cursor-pointer"
              onClick={() => setIsCommandOpen(true)}
            >
              <IconRenderer
                name="Search"
                className={`${!scrolled && "text-white"}`}
                size={22}
                strokeWidth={2}
              />
            </button>
            <Link to="/contact-us">
              <Button
                size="sm"
                className={`rounded font-bold ${!scrolled
                  ? "bg-white dark:text-black text-black hover:bg-white hover:text-black"
                  : ""
                  }`}
              >
                CONTACT US
              </Button>
            </Link>
          </div>
        </PageLayout>
      </div>

      {/* Dropdown */}
      {hoveredIndex !== null &&
        (Navlinks[hoveredIndex].items || Navlinks[hoveredIndex].groups) && (
          <div
            className="absolute top-24 xl:top-32 left-0 w-full bg-white z-30 shadow-xl"
            onMouseEnter={() => handleMouseEnter(hoveredIndex)}
            onMouseLeave={handleMouseLeave}
          >
            {Navlinks[hoveredIndex].items && (
              <PageLayout className="py-6 max-w-[1440px] mx-auto px-6">
                {(() => {
                  const items = Navlinks[hoveredIndex].items;
                  const chunked = chunkArray(
                    items,
                    Math.ceil(items.length / 4)
                  );
                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {chunked.map((col, colIndex) => (
                        <div key={colIndex}>
                          {col.map((link, idx) => (
                            <Link
                              key={idx}
                              to={link.href}
                              onClick={() => setHoveredIndex(null)}
                              className="flex items-center gap-2 dark:text-black hover:text-primary p-2 rounded-md transition-all"
                            >
                              <IconRenderer name={link.icon} strokeWidth={2} />
                              <TypographyP className="md:text-sm">
                                {link.label}
                              </TypographyP>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </PageLayout>
            )}
          </div>
        )}
    </motion.div>
  );
};

export default NavbarDesktop;

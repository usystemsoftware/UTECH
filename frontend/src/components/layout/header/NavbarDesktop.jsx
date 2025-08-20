import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AccessibilityWidget from "@/components/layout/AccessibilityWidget";
import PageLayout from "@/custom/PageLayout";
import { TypographyP, TypographySmall } from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import { Navlinks } from "@/data/Navlinks";
import { IconRenderer } from "@/custom/IconRenderer";

const NavbarDesktop = ({ setIsCommandOpen }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef(null);

  const chunkArray = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 100);

      if (currentY > lastScrollY.current && currentY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 100);
  };

  return (
    <motion.div
      initial={{ y: -120 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 hover:bg-white hover:text-black transition-all duration-300 ${scrolled ? "bg-white/40 backdrop-blur-2xl shadow-md" : "bg-transparent text-white"
        }`}
    >
      <AccessibilityWidget />

      <div className="h-20">
        <PageLayout className="flex justify-between items-center h-full max-w-[1440px] mx-auto px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-40">
            <img src="/logo.png" alt="Logo" className="w-28" loading="lazy" />
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-6 relative z-40">
            {Navlinks.map((item, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <TypographySmall
                    className={`font-semibold tracking-wide uppercase transition-colors duration-200 ${hoveredIndex === index
                      ? "text-primary border-b-2 border-primary"
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
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            <button onClick={() => setIsCommandOpen(true)}>
              <IconRenderer name="Search" size={22} strokeWidth={2} />
            </button>
            <Link to="/book-call">
              <Button size="sm">
                <IconRenderer name="HelpCircle" strokeWidth={2} />
                Help
              </Button>
            </Link>
          </div>
        </PageLayout>
      </div>

      {/* Dropdown */}
      {hoveredIndex !== null &&
        (Navlinks[hoveredIndex].items || Navlinks[hoveredIndex].groups) && (
          <div
            className="absolute top-24 left-0 w-full bg-white z-30 shadow-xl"
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
                              className="flex items-center gap-2 hover:text-primary p-2 rounded-md transition-all"
                            >
                              <IconRenderer
                                name={link.icon}
                                strokeWidth={2}
                              />
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

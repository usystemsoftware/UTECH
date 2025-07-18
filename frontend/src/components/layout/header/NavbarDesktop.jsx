import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import {
  TypographyH5,
  TypographyMuted,
  TypographySmall,
} from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import { Navlinks } from "@/data/Navlinks";
import { IconRenderer } from "@/custom/IconRenderer";

const NavbarDesktop = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      className="w-full fixed top-0 z-40 h-20 bg-card"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/">
          <img loading="lazy" src="/logo.png" alt="Logo" className="h-10 w-38" />
        </Link>
        {/* Navigation */}
        <nav className="flex items-center gap-8 relative z-40">
          {Navlinks.map((item, index) => (
            <div
              key={index}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <TypographySmall className="cursor-pointer hover:text-primary">
                {item.title}
              </TypographySmall>
            </div>
          ))}
          <div
            className="group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <TypographySmall className="cursor-pointer hover:text-primary">
              Book Call
            </TypographySmall>
          </div>
          <div
            className="group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <TypographySmall className="cursor-pointer hover:text-primary">
              Contact Us
            </TypographySmall>
          </div>
        </nav>

        <div className="flex items-center gap-6">
          {/* theme Button */}
          <ModeToggle />
          {/* theme Button */}
          <Button size="sm">
            <IconRenderer name="HelpCircle" />
            Help
          </Button>
        </div>
      </div>
      {/* Dropdown */}
      <AnimatePresence>
        {hoveredIndex !== null &&
          (Navlinks[hoveredIndex].items || Navlinks[hoveredIndex].groups) && (
            <motion.div
              key="dropdown"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              onMouseEnter={() => setHoveredIndex(hoveredIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="fixed left-0 top-20 w-screen bg-card shadow-lg z-40"
            >
              <div className="flex flex-wrap justify-evenly sm:max-w-7xl mx-auto px-8 py-8 gap-6">
                {Navlinks[hoveredIndex].items?.map((option, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                  >
                    <Link
                      onClick={() => setHoveredIndex(null)}
                      to={option.href}
                      className="flex items-center gap-3 transition w-60"
                    >
                      <IconRenderer name={option.icon} />
                      <TypographyMuted className="hover:text-primary">
                        {option.label}
                      </TypographyMuted>
                    </Link>
                  </motion.div>
                ))}
                {Navlinks[hoveredIndex].groups?.map((group, gIdx) => (
                  <motion.div
                    key={gIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: gIdx * 0.03 }}
                    className="w-60"
                  >
                    <TypographyH5
                      className={`${group.group === "" ? "mb-10" : "mb-4"}`}
                    >
                      {group.group}
                    </TypographyH5>
                    <ul className="space-y-4">
                      {group.links.map((link, lIdx) => (
                        <motion.li
                          key={lIdx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * lIdx, duration: 0.5 }}
                        >
                          <Link
                            onClick={() => setHoveredIndex(null)}
                            to={link.href}
                            className="flex items-center gap-2 text-sm hover:text-primary transition"
                          >
                            <IconRenderer name={link.icon} />
                            <TypographyMuted className="hover:text-primary">
                              {link.label}
                            </TypographyMuted>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavbarDesktop;

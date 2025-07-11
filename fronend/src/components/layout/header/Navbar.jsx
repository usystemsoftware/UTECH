// Updated Navbar with mobile animation and toggleable dropdowns
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navlinks } from "./Navlinks";
import { Link } from "react-router-dom";
import { TypographyH4 } from "../../../custom/Typography";
import { Menu, X, Plus, Minus } from "lucide-react";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleMobileExpand = (index) => {
    setExpandedMobileIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-16 z-50 bg-white shadow-xl flex items-center justify-between px-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* LOGO */}
      <div className="font-bold text-xl text-blue-600">U-Technology</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 relative z-50">
        {Navlinks.map((item, index) => (
          <div
            key={index}
            className="group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <button className="text-base text-gray-900 py-5 group-hover:text-blue-600 transition">
              {item.title}
            </button>
          </div>
        ))}
      </nav>

      {/* Sign Up button - Desktop only */}
      <div className="hidden md:flex items-center gap-2">
        <Button className="bg-blue-400 hover:bg-blue-500">Sign Up</Button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-white shadow-md z-40 px-6 pb-6"
          >
            {Navlinks.map((item, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer"
                  onClick={() => handleMobileExpand(index)}
                >
                  {item.title}
                  {expandedMobileIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>

                <AnimatePresence>
                  {expandedMobileIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Flat items */}
                      {item.items && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.items.map((option, i) => (
                            <li key={i}>
                              <Link
                                to={option.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm text-gray-700 hover:text-blue-600 block"
                              >
                                {option.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Grouped items */}
                      {item.groups && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.groups.map((group, gIdx) => (
                            <div key={gIdx} className="mt-2">
                              <div className="text-gray-700 font-medium text-sm">
                                {group.group}
                              </div>
                              <ul className="space-y-1">
                                {group.links.map((link, lIdx) => (
                                  <li key={lIdx}>
                                    <Link
                                      to={link.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-sm text-gray-700 hover:text-blue-600 block"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Sign Up button in mobile */}
            <Button className="mt-4 w-full bg-blue-400 hover:bg-blue-500">
              Sign Up
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Dropdown */}
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
              className="hidden md:block fixed left-0 top-[64px] w-screen bg-white shadow-lg border-t border-gray-200 z-40"
            >
              <div className="flex flex-wrap justify-evenly max-w-[1440px] mx-auto px-8 py-8 gap-8">
                {Navlinks[hoveredIndex].items?.map((option, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                  >
                    <Link
                      to={option.href}
                      className="flex items-center gap-3 hover:text-blue-600 transition w-60"
                    >
                      <TypographyH4>{option.label}</TypographyH4>
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
                    <h4 className={`text-xl font-semibold text-gray-800 ${group.group === '' ? 'mb-10' : 'mb-4'}`}>
                      {group.group}
                    </h4>
                    <ul className="space-y-4">
                      {group.links.map((link, lIdx) => (
                        <motion.li
                          key={lIdx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * lIdx, duration: 0.5 }}
                        >
                          <Link
                            to={link.href}
                            className="flex items-center gap-2 text-sm hover:text-blue-600 transition"
                          >
                            <TypographyH4>{link.label}</TypographyH4>
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

export default Navbar;

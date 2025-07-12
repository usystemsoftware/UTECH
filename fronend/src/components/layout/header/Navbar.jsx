// Updated Navbar with mobile animation and toggleable dropdowns
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navlinks } from "./Navlinks";
import { Link } from "react-router-dom";
import { TypographyH4 } from "../../../custom/Typography";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openMenus, setOpenMenus] = useState({});



  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-16 z-50 bg-white shadow-xl flex items-center justify-between px-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger><RxHamburgerMenu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mt-6 max-h-[calc(100vh-5rem)] overflow-y-auto pr-2">
              {Navlinks.length > 0 &&
                Navlinks.map((options, index) => {
                  const isOpen = openMenus[index];

                  return (
                    <div key={index} className="w-full px-1 mb-2">
                      {/* Main Nav Title with Toggle */}
                      <SheetTitle
                        onClick={() =>
                          setOpenMenus({ [index]: !isOpen }) // Close others
                        }
                        className="mt-1 flex justify-between items-center cursor-pointer text-base font-semibold text-gray-800 border-b pb-1"
                      >
                        {options?.title}
                        <span className="text-lg">{isOpen ? "−" : "+"}</span>
                      </SheetTitle>

                      {/* Dropdown Content */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-3 pt-2 space-y-3 text-sm text-gray-700"
                          >
                            {/* Simple Links */}
                            {options.items?.map((item, idx) => (
                              <Link
                                to={item.href}
                                key={idx}
                                className="block hover:text-blue-600"
                              >
                                {item.label}
                              </Link>
                            ))}

                            {/* Grouped Links like Strategic Partners */}
                            {options.groups?.map((group, gIdx) => (
                              <div key={gIdx} className="space-y-1">
                                <div className="mt-2 font-semibold text-gray-800 text-sm">
                                  {group.group}
                                </div>
                                {group.links?.map((link, lIdx) => (
                                  <Link
                                    to={link.href}
                                    key={lIdx}
                                    className="block pl-3 text-gray-600 hover:text-blue-600"
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
            </SheetHeader>


          </SheetContent>
        </Sheet>
      </div>
      {/* LOGO */}
      <div className="font-bold text-xl text-blue-600 hidden lg:block">U-Technology</div>

      <nav className="hidden lg:flex items-center gap-6 relative z-50">
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
      <div className="flex items-center gap-2">
        <Button className="bg-blue-400 hover:bg-blue-500">Sign Up</Button>
      </div>


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

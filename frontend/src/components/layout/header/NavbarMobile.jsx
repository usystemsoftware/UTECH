"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navlinks } from "@/data/Navlinks";
import { motion, AnimatePresence } from "framer-motion";

const IconRenderer = ({ name }) => {
  const LucideIcon = LucideIcons[name];
  return LucideIcon ? <LucideIcon className="w-4 h-4 mr-2" /> : null;
};

const menuVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  return (
    <div className="lg:hidden w-full fixed top-0 left-0 z-50 bg-card shadow-md">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Logo" className="h-10" />
        </Link>
        <div className="flex items-center space-x-4">
          <Button size="sm">
            <LucideIcons.HelpCircle /> Help
          </Button>
          <button onClick={() => setOpen((prev) => !prev)}>
            {open ? (
              <LucideIcons.X size={24} />
            ) : (
              <LucideIcons.AlignRight size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-card border-t border-b shadow-md max-h-[80vh] overflow-y-auto"
          >
            {Navlinks.map((section, idx) => {
              const isOpen = openMenus[idx];

              return (
                <div key={idx} className="p-3 mt-3 border-b">
                  <button
                    onClick={() =>
                      setOpenMenus((prev) => ({ ...prev, [idx]: !prev[idx] }))
                    }
                    className="w-full flex justify-between items-center text-sm font-medium"
                  >
                    {section.title}
                    {isOpen ? (
                      <LucideIcons.Minus size={16} />
                    ) : (
                      <LucideIcons.Plus size={16} />
                    )}
                  </button>

                  {/* Submenu */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="pl-2"
                      >
                        {/* Items */}
                        {section.items?.map((item, i) => (
                          <motion.div key={i} variants={itemVariants}>
                            <Link
                              to={item.href}
                              className="flex items-center py-2 text-muted-foreground text-sm hover:text-primary"
                              onClick={() => setOpen(false)}
                            >
                              <IconRenderer name={item.icon} />
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}

                        {/* Groups */}
                        {section.groups?.map((group, gIdx) => (
                          <div key={gIdx}>
                            <div className="font-medium text-sm mt-4 mb-2">
                              {group.group}
                            </div>
                            {group.links?.map((link, lIdx) => (
                              <motion.div key={lIdx} variants={itemVariants}>
                                <Link
                                  to={link.href}
                                  className="flex items-center py-2 pl-3 text-muted-foreground text-sm hover:text-primary"
                                  onClick={() => setOpen(false)}
                                >
                                  <IconRenderer name={link.icon} />
                                  {link.label}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;

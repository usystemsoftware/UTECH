import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Navlinks } from "@/data/Navlinks";
import { IconRenderer } from "@/custom/IconRenderer";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import AccessibilityWidget from "@/components/layout/AccessibilityWidget";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const highlightMatch = (text, query) => {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, i) => (
    <span
      key={i}
      className={
        part.toLowerCase() === query.toLowerCase()
          ? "text-blue-600 font-semibold"
          : undefined
      }
    >
      {part}
    </span>
  ));
};

const NavbarMobile = ({ setIsCommandOpen }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [selectedLink, setSelectedLink] = useState(pathname);
  const [searchTerm, setSearchTerm] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const filterNavlinks = (section) => {
    if (!searchTerm) return true;
    const lower = searchTerm.toLowerCase();
    return (
      section.title.toLowerCase().includes(lower) ||
      section.items?.some((item) => item.label.toLowerCase().includes(lower)) ||
      section.groups?.some((group) =>
        group.links?.some((link) => link.label.toLowerCase().includes(lower))
      )
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-colors ${
        open && "bg-white text-black"
      } duration-300 ${scrolled ? "bg-white shadow" : "bg-transparent"}`}
    >
      <AccessibilityWidget />
      <div className="flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center">
          <img loading="lazy" src="/logo.png" alt="Logo" className="w-26" />
        </Link>
        <div className="flex items-center space-x-5">
          <Popover>
            <PopoverTrigger>
              <button>
                <IconRenderer
                  strokeWidth={2}
                  name="Phone"
                  size={19}
                  className={`cursor-pointer mt-2 ${
                    scrolled || open
                      ? "text-black dark:text-white"
                      : "text-white"
                  }`}
                />
              </button>
            </PopoverTrigger>
            <PopoverContent className="mr-10 w-fit shadow-none rounded-none border p-0">
              <div className="space-y-3 text-sm">
                <a
                  href="tel:+6591234567"
                  className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  🇸🇬: +65 9123 4567
                </a>
                <Separator />
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  🇮🇳: +91 98765 43210
                </a>
              </div>
            </PopoverContent>
          </Popover>
          <button onClick={() => setIsCommandOpen(true)}>
            <IconRenderer
              strokeWidth={2}
              name="Search"
              size={22}
              className={`cursor-pointer ${
                scrolled || open ? "text-black dark:text-white" : "text-white"
              }`}
            />
          </button>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className={`cursor-pointer ${
              scrolled || open ? "text-black dark:text-white" : "text-white"
            }`}
          >
            <IconRenderer
              strokeWidth={2}
              name={open ? "X" : "AlignJustify"}
              size={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div>
        {open && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[100px] left-0 w-full h-[calc(100vh-100px)] flex flex-col bg-white z-50"
          >
            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 px-3 pt-3 pb-24">
              <Input
                className="border-none bg-muted mb-3 text-sm outline-none px-2"
                placeholder="Search docs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {Navlinks.filter(filterNavlinks).map((section, idx) => {
                const isOpen = openMenuIndex === idx || searchTerm.length > 0;
                return (
                  <div key={idx} className="mb-0">
                    {/* Title button */}
                    <button
                      onClick={() =>
                        setOpenMenuIndex((prev) => (prev === idx ? null : idx))
                      }
                      className={`flex w-full items-center justify-between px-4 py-3 
                        text-sm font-semibold tracking-wide uppercase
                        border-b border-gray-200
                        transition-colors duration-300
                        ${
                          isOpen
                            ? "text-blue-700"
                            : "text-gray-600 hover:text-black"
                        }
                      `}
                    >
                      <span>{highlightMatch(section.title, searchTerm)}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconRenderer
                          strokeWidth={2}
                          name="ChevronDown"
                          size={18}
                          className="text-gray-500"
                        />
                      </motion.div>
                    </button>

                    {/* Submenu */}
                    {isOpen && (
                      <div className="transition-all duration-300 mt-1 pl-6">
                        {section.items
                          ?.filter((item) =>
                            item.label
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          )
                          .map((item, i) => (
                            <FadeInWhenVisible key={i}>
                              <Link
                                to={item.href}
                                onClick={() => {
                                  setOpen(false);
                                  setSelectedLink(item.href);
                                }}
                                className={`block py-2 text-sm border-b border-gray-100
                                  ${
                                    selectedLink === item.href ||
                                    pathname === item.href
                                      ? "text-blue-700 font-medium"
                                      : "text-gray-600 hover:text-primary"
                                  }`}
                              >
                                {highlightMatch(item.label, searchTerm)}
                              </Link>
                            </FadeInWhenVisible>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Fixed Bottom Buttons */}
            <div className="p-4 border-t border-gray-200 flex gap-3">
              <Link
                to="/contact-us"
                onClick={() => setOpen(false)}
                className={`flex-1 text-center py-2 rounded font-medium transition-colors
                  ${
                    pathname === "/contact-us"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                Contact Us
              </Link>
              <Link
                to="/book-call"
                onClick={() => setOpen(false)}
                className={`flex-1 text-center py-2 rounded font-medium transition-colors
                  ${
                    pathname === "/book-call"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                Book Call
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;

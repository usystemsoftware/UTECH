import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Navlinks } from "@/data/Navlinks";
import { IconRenderer } from "@/custom/IconRenderer";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import AccessibilityWidget from "@/components/layout/AccessibilityWidget";

const highlightMatch = (text, query) => {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, i) => (
    <span
      key={i}
      className={
        part.toLowerCase() === query.toLowerCase()
          ? "text-red-500 font-semibold"
          : undefined
      }
    >
      {part}
    </span>
  ));
};

const NavbarMobile = () => {
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
          <Link to="/contact-us">
            <IconRenderer
              strokeWidth={2}
              name="Phone"
              size={19}
              className={`cursor-pointer ${
                scrolled || open ? "text-black dark:text-white" : "text-white"
              }`}
            />
          </Link>
          <IconRenderer
            strokeWidth={2}
            name="Search"
            size={22}
            className={`cursor-pointer ${
              scrolled || open ? "text-black dark:text-white" : "text-white"
            }`}
          />
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[100px] left-0 w-full h-[calc(100vh-100px)] flex flex-col bg-card z-50"
          >
            <div className="overflow-y-auto flex-1 px-3 pt-3">
              <Input
                className="border-none bg-muted mb-3 text-sm outline-none px-2"
                placeholder="Search docs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {Navlinks.filter(filterNavlinks).map((section, idx) => {
                const isOpen = openMenuIndex === idx || searchTerm.length > 0;
                const sectionMatch = section.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
                return (
                  <div key={idx} className="mb-2">
                    <button
                      onClick={() =>
                        setOpenMenuIndex((prev) => (prev === idx ? null : idx))
                      }
                      className={`flex w-full items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${
                        sectionMatch || isOpen
                          ? "bg-blue-100 text-blue-800"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span>{highlightMatch(section.title, searchTerm)}</span>
                      <IconRenderer
                        strokeWidth={2}
                        name={isOpen ? "ChevronDown" : "ChevronRight"}
                        size={16}
                      />
                    </button>
                    {isOpen && (
                      <div className="transition-all duration-300 mt-3">
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
                                onClick={() => setOpen(false)}
                                className={`px-3 py-1.5 flex items-center gap-2 rounded-md text-sm ${
                                  selectedLink === item.href
                                    ? "text-blue-800 font-medium"
                                    : "text-muted-foreground hover:text-primary"
                                }`}
                              >
                                <IconRenderer
                                  strokeWidth={2}
                                  name={item.icon}
                                  size={16}
                                />
                                {highlightMatch(item.label, searchTerm)}
                              </Link>
                            </FadeInWhenVisible>
                          ))}
                        {section.groups?.map((group, gIdx) => {
                          const matchingLinks = group.links?.filter((link) =>
                            link.label
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          );
                          if (!matchingLinks?.length) return null;
                          return (
                            <div key={gIdx}>
                              {group.group && (
                                <div className="font-medium text-sm mt-3 mb-1 text-muted-foreground px-3">
                                  {highlightMatch(group.group, searchTerm)}
                                </div>
                              )}
                              {matchingLinks.map((link, lIdx) => (
                                <FadeInWhenVisible key={lIdx}>
                                  <Link
                                    to={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`px-3 py-1.5 flex items-center gap-2 rounded-md text-sm ${
                                      selectedLink === link.href
                                        ? "text-blue-800 font-medium"
                                        : "text-muted-foreground hover:text-primary"
                                    }`}
                                  >
                                    {highlightMatch(link.label, searchTerm)}
                                  </Link>
                                </FadeInWhenVisible>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 p-3 border-t bg-background">
              <Link
                onClick={() => setOpen(false)}
                to="/book-call"
                className="bg-primary text-white py-1.5 px-3 rounded text-sm w-full text-center"
              >
                Book Call
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to="/contact-us"
                className="bg-secondary py-1.5 px-3 rounded text-sm text-muted-foreground w-full text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;

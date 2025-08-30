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
import { RiWhatsappFill } from "react-icons/ri";
import { Phone } from "lucide-react";
import ShareButtons from "@/custom/ShareButtons";

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

const NavbarMobile = ({ setIsCommandOpen, scrolledMobile, setScrolledMobile }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [selectedLink, setSelectedLink] = useState(pathname);
  const [searchTerm, setSearchTerm] = useState("");

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolledMobile(window.scrollY > 50);
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
      className={`fixed top-0 left-0 z-50 w-full transition-colors ${open && "bg-white text-black"
        } duration-300 ${scrolledMobile ? "bg-white shadow" : "bg-transparent"}`}
    >
      <AccessibilityWidget />
      <div className="flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center">
          <img loading="lazy" src="/logo.png" alt="Logo" className="w-26" />
        </Link>
        <div className="flex items-center space-x-5">
          <ShareButtons scrolledMobile={scrolledMobile} />
          <Popover>
            <PopoverTrigger>
              <button>
                <IconRenderer
                  strokeWidth={2}
                  name="Phone"
                  size={19}
                  className={`cursor-pointer mt-2 ${scrolledMobile || open ? "text-black" : "text-white"
                    }`}
                />
              </button>
            </PopoverTrigger>
            <PopoverContent className="mr-10 w-[150px] shadow-none space-y-1 p-2 rounded-none border">
              {/* Call option */}
              <a
                href="tel:+919270033002"
                className="flex flex-col gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1 text-sm hover:bg-blue-600 transition">
                  <Phone size={16} /> Call
                </div>
              </a>
              <Separator />

              {/* WhatsApp option */}
              <a
                href="https://wa.me/919270033002?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 text-sm hover:bg-green-600 transition">
                  <RiWhatsappFill size={16} className="text-white" />
                  WhatsApp
                </div>
              </a>
            </PopoverContent>
          </Popover>
          <button onClick={() => setIsCommandOpen(true)}>
            <IconRenderer
              strokeWidth={2}
              name="Search"
              size={22}
              className={`cursor-pointer ${scrolledMobile || open ? "text-black" : "text-white"
                }`}
            />
          </button>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className={`cursor-pointer ${scrolledMobile || open ? "text-black" : "text-white"
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
                        ${isOpen
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
                                className={`py-2 flex items-center gap-2 text-sm border-b border-gray-100
                                  ${selectedLink === item.href ||
                                    pathname === item.href
                                    ? "text-blue-700 font-medium"
                                    : "text-gray-600 hover:text-primary"
                                  }`}
                              >
                                <IconRenderer name={item.icon} strokeWidth={2} />
                                {highlightMatch(item.label, searchTerm)}
                              </Link>
                            </FadeInWhenVisible>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}
              {/* Company Section */}
              <div className="mb-0">
                <button
                  onClick={() =>
                    setOpenMenuIndex((prev) => (prev === "company" ? null : "company"))
                  }
                  className={`flex w-full items-center justify-between px-4 py-3 
      text-sm font-semibold tracking-wide uppercase
      border-b border-gray-200
      transition-colors duration-300
      ${openMenuIndex === "company" ? "text-blue-700" : "text-gray-600 hover:text-black"}
    `}
                >
                  <span>{highlightMatch("Company", searchTerm)}</span>
                  <motion.div
                    animate={{ rotate: openMenuIndex === "company" ? 180 : 0 }}
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

                {/* Company Submenu */}
                {openMenuIndex === "company" && (
                  <div className="transition-all duration-300 mt-1 pl-6">
                    {[
                      { label: "About Us", href: "/company/about-us" },
                      { label: "Events", href: "/company/events" },
                      { label: "Careers", href: "/company/careers" },
                    ]
                      .filter((item) =>
                        item.label.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((item, i) => (
                        <FadeInWhenVisible key={i}>
                          <Link
                            to={item.href}
                            onClick={() => {
                              setOpen(false);
                              setSelectedLink(item.href);
                            }}
                            className={`py-2 flex items-center gap-2 text-sm border-b border-gray-100
                ${selectedLink === item.href || pathname === item.href
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
            </div>

            {/* Fixed Bottom Buttons */}
            <div className="p-4 border-t border-gray-200 flex gap-3">
              <Link
                to="/contact-us"
                onClick={() => setOpen(false)}
                className={`flex-1 text-center py-2 text-sm rounded font-medium transition-colors
                  ${pathname === "/contact-us"
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
                className={`flex-1 text-center py-2 text-sm rounded font-medium transition-colors
                  ${pathname === "/book-call"
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

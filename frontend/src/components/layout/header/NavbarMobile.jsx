import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";
import { TypographyH4, TypographySmall } from "@/custom/Typography";
import { Navlinks } from "@/data/Navlinks";
import { IconRenderer } from "@/custom/IconRenderer";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

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
      style={{ display: "inline" }}
    >
      {part}
    </span>
  ));
};

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(0); // Only one section open
  const [selectedLink, setSelectedLink] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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
    <div className="md:hidden fixed top-0 left-0 z-50 w-full bg-background shadow-md overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <Link to="/" className="flex items-center relative z-50">
          <img loading="lazy" src="/logo.png" alt="Logo" className="w-26" />
        </Link>

        <div className="flex items-center space-x-6">
          <IconRenderer name="Search" size={17} className="cursor-pointer" />
          <button onClick={() => setOpen((prev) => !prev)}>
            <IconRenderer name={open ? "X" : "AlignJustify"} size={22} />
          </button>
        </div>
      </div>

      {/* Panel */}
      {open && (
        <div className="fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] px-2 bg-card flex flex-col">
          {/* Search & List Scrollable */}
          <div className="flex-1 overflow-y-auto px-3 pt-3 pb-24">
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
                      name={isOpen ? "ChevronDown" : "ChevronRight"}
                      size={16}
                    />
                  </button>

                  {isOpen && (
                    <div className="transition-all duration-300">
                      {/* Items */}
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
                              className={`px-3 py-1.5 flex items-center gap-2 rounded-md text-sm ${
                                selectedLink === item.href
                                  ? "bg-blue-100 text-blue-800 font-medium"
                                  : "text-muted-foreground hover:text-primary"
                              }`}
                            >
                              <IconRenderer name={item?.icon} size={16} />
                              {highlightMatch(item.label, searchTerm)}
                            </Link>
                          </FadeInWhenVisible>
                        ))}

                      {/* Groups */}
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
                                  onClick={() => {
                                    setOpen(false);
                                    setSelectedLink(link.href);
                                  }}
                                  className={`px-3 py-1.5 flex items-center gap-2 rounded-md text-sm ${
                                    selectedLink === link.href
                                      ? "bg-blue-100 text-blue-800 font-medium"
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

          {/* Footer (Fixed Bottom) */}
          <div className="absolute bottom-0 left-0 pl-14 w-full border-t px-4 py-2 bg-card text-xs text-muted-foreground flex items-center gap-2">
            <div className="flex justify-between items-center">
              <ModeToggle />
              <div className="right-6 absolute space-x-8">
                <Link
                  onClick={() => setOpen(false)}
                  to="book-call"
                  className="group bg-primary text-white p-2 rounded"
                >
                  <TypographySmall className="cursor-pointer uppercase text-md font-semibold hover:text-primary">
                    Book Call
                  </TypographySmall>
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="contact-us"
                  className="group bg-secondary p-2 rounded"
                >
                  <TypographySmall className="cursor-pointer uppercase text-md font-semibold hover:text-primary">
                    Contact Us
                  </TypographySmall>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;

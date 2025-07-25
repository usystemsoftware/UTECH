import React, { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import {
  TypographyH5,
  TypographyH4,
  TypographyMuted,
  TypographySmall,
} from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import { Navlinks } from "@/data/Navlinks";
import { IconRenderer } from "@/custom/IconRenderer";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

// Responsive NavbarDesktop with adaptive dropdown grid
const NavbarDesktop = ({ setIsCommandOpen }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Helper: chunk array for grid columns
  const chunkArray = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  // Responsive columns for dropdowns
  const getDropdownColumns = (itemsLength) => {
    if (itemsLength >= 18) return 4;
    if (itemsLength >= 10) return 3;
    if (itemsLength >= 5) return 2;
    return 1;
  };

  return (
    <div className="w-full fixed top-0 z-40 h-20 bg-card shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center relative">
          <img
            loading="lazy"
            src="/logo-2.png"
            alt="Logo"
            className="h-8"
          />
          <TypographyH4 className="absolute left-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Technology
          </TypographyH4>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 sm:gap-8 relative lg:ml-20 z-40">
          {Navlinks.map((item, index) => (
            <div
              key={index}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <TypographySmall
                className={`cursor-pointer hover:text-primary pb-1 uppercase text-md font-semibold transition-all duration-200 ${hoveredIndex === index
                  ? "border-b-2 border-primary text-primary"
                  : ""
                  }`}
              >
                {item.title}
              </TypographySmall>
            </div>
          ))}
          <Link
            to="book-call"
            className="group"
            onMouseEnter={() => setHoveredIndex(null)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <TypographySmall className="cursor-pointer uppercase text-md font-semibold hover:text-primary">
              Book Call
            </TypographySmall>
          </Link>
          <Link
            to="contact-us"
            className="group"
            onMouseEnter={() => setHoveredIndex(null)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <TypographySmall className="cursor-pointer uppercase text-md font-semibold hover:text-primary">
              Contact Us
            </TypographySmall>
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="h-8.5 flex items-center gap-2 rounded-md px-2 bg-accent relative"
            onClick={() => setIsCommandOpen(true)}
          >
            <IconRenderer name="Search" size={16} className="cursor-pointer text-muted-foreground" />
            <input
              placeholder="Search documentation"
              className="outline-none text-sm bg-transparent w-28 sm:w-44 cursor-pointer"
              readOnly
            />
          </div>
          <ModeToggle />
          <Button size="xs" className="py-1 px-2">
            <IconRenderer name="HelpCircle" />
            <span className="hidden sm:inline">&nbsp;Let's Talk !</span>
          </Button>
        </div>
      </div>

      {/* Dropdown */}
      {hoveredIndex !== null &&
        (Navlinks[hoveredIndex].items || Navlinks[hoveredIndex].groups) && (
          <div
            className="absolute left-0 top-14 w-full bg-card shadow-lg z-30 border-border"
            onMouseEnter={() => setHoveredIndex(hoveredIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Items Dropdown */}
            {Navlinks[hoveredIndex].items && (
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">
                {(() => {
                  const items = Navlinks[hoveredIndex].items;
                  const columns = getDropdownColumns(items.length);
                  const chunked = chunkArray(items, Math.ceil(items.length / columns));
                  return (
                    <div
                      className={`grid gap-6 ${columns === 4
                        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                        : columns === 3
                          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                          : columns === 2
                            ? "grid-cols-1 sm:grid-cols-2"
                            : "grid-cols-1"
                        }`}
                    >
                      {chunked.map((col, colIdx) => (
                        <div key={colIdx} >
                          {col.map((option, idx) => (
                            <FadeInWhenVisible key={idx} delay={idx * 0.04}>
                              <Link
                                onClick={() => setHoveredIndex(null)}
                                to={option.href}
                                className="flex items-center gap-3 transition hover:text-primary hover:underline underline-offset-4 p-3 rounded-md hover:bg-accent"
                              >
                                <IconRenderer name={option.icon} />
                                <TypographyMuted className="hover:text-primary">{option.label}</TypographyMuted>
                              </Link>
                            </FadeInWhenVisible>
                          ))}
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Groups Dropdown */}
            {Navlinks[hoveredIndex].groups && (
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                  {Navlinks[hoveredIndex].groups.map((group, gIdx) => (
                    <FadeInWhenVisible key={gIdx} delay={gIdx * 0.08} className="w-full">
                      {group.group && (
                        <TypographyH5 className="mb-4">{group.group}</TypographyH5>
                      )}
                      <ul>
                        {group.links.map((link, lIdx) => (
                          <FadeInWhenVisible key={lIdx} delay={lIdx * 0.07}>
                            <Link
                              onClick={() => setHoveredIndex(null)}
                              to={link.href}
                              className="flex items-center gap-2 text-sm hover:text-primary transition p-3 rounded-md hover:bg-accent"
                            >
                              <IconRenderer name={link.icon} />
                              <TypographyMuted className="hover:text-primary">
                                {link.label}
                              </TypographyMuted>
                            </Link>
                          </FadeInWhenVisible>
                        ))}
                      </ul>
                    </FadeInWhenVisible>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
    </div>
  );
};

export default NavbarDesktop;
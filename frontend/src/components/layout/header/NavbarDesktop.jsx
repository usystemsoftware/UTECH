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

// Responsive NavbarDesktop with fixed 4-column dropdowns
const NavbarDesktop = ({ setIsCommandOpen }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Helper: chunk array into 4 parts
  const chunkArray = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  return (
    <div className="w-full fixed top-0 z-40 h-20 bg-card shadow">
      <div className="md:max-w-7xl lg:max-w-[90%] mx-auto px-4 sm:px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center relative z-40">
          <img loading="lazy" src="/logo.png" alt="Logo" className="w-32" />
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
                className={`cursor-pointer hover:text-primary pb-1 uppercase text-md font-semibold transition-all duration-200 ${
                  hoveredIndex === index
                    ? "border-b-2 border-primary text-primary"
                    : ""
                }`}
              >
                {item.title}
              </TypographySmall>
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 z-40">
          <div
            className="h-8.5 flex items-center gap-2 rounded-md px-2 bg-accent relative"
            onClick={() => setIsCommandOpen(true)}
          >
            <IconRenderer
              name="Search"
              size={16}
              className="cursor-pointer text-muted-foreground"
            />
            <input
              placeholder="Search documentation"
              className="outline-none text-sm bg-transparent w-28 sm:w-44 cursor-pointer"
              readOnly
            />
          </div>
          <ModeToggle />
          <Link to="/book-call">
            <Button size="xs" className="py-1 px-2">
              <IconRenderer name="HelpCircle" />
              <span className="hidden sm:inline">&nbsp;Let's Meet !</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Dropdown */}
      {hoveredIndex !== null &&
        (Navlinks[hoveredIndex].items || Navlinks[hoveredIndex].groups) && (
          <div
            className="absolute left-0 top-12 w-full bg-card shadow-lg z-30 border-border"
            onMouseEnter={() => setHoveredIndex(hoveredIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Items Dropdown */}
            {Navlinks[hoveredIndex].items && (
              <div className="w-full md:max-w-7xl lg:max-w-[90%] mx-auto px-4 sm:px-8 py-6">
                {(() => {
                  const items = Navlinks[hoveredIndex].items;
                  const chunked = chunkArray(
                    items,
                    Math.ceil(items.length / 4)
                  );
                  return (
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {chunked.map((col, colIdx) => (
                        <div key={colIdx}>
                          {col.map((option, idx) => (
                            <FadeInWhenVisible key={idx} delay={idx * 0.04}>
                              <Link
                                onClick={() => setHoveredIndex(null)}
                                to={option.href}
                                className="flex items-center gap-3 transition hover:text-primary hover:underline underline-offset-4 p-3 rounded-md hover:bg-accent"
                              >
                                <IconRenderer name={option.icon} />
                                <TypographyMuted className="hover:text-primary">
                                  {option.label}
                                </TypographyMuted>
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
          </div>
        )}
    </div>
  );
};

export default NavbarDesktop;

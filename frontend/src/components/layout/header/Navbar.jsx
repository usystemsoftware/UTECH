import { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { CommandSearch } from "@/custom/CommandSearch";

const Navbar = () => {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledMobile, setScrolledMobile] = useState(false);

  useEffect(() => {
    if (isCommandOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCommandOpen]);

  return (
    <>
      <div className="block md:hidden">
        <NavbarMobile
          scrolledMobile={scrolledMobile}
          setScrolledMobile={setScrolledMobile}
          setIsCommandOpen={setIsCommandOpen}
          isCommandOpen={isCommandOpen}
        />
      </div>
      <div className="hidden md:block">
        <NavbarDesktop
          setIsCommandOpen={setIsCommandOpen}
          isCommandOpen={isCommandOpen}
          scrolled={scrolled}
          setScrolled={setScrolled}
        />
      </div>
      {isCommandOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 sm:flex sm:justify-center items-start h-screen pt-36"
          onClick={() => setIsCommandOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="mx-6">
            <CommandSearch setIsCommandOpen={setIsCommandOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

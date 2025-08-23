import { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { CommandSearch } from "@/custom/CommandSearch";

const Navbar = () => {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

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
          setIsCommandOpen={setIsCommandOpen}
          isCommandOpen={isCommandOpen}
        />
      </div>
      <div className="hidden md:block">
        <NavbarDesktop
          setIsCommandOpen={setIsCommandOpen}
          isCommandOpen={isCommandOpen}
        />
      </div>
      {isCommandOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start pt-32"
          onClick={() => setIsCommandOpen(false)} // close on background click
        >
          <div onClick={(e) => e.stopPropagation()}>
            <CommandSearch setIsCommandOpen={setIsCommandOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

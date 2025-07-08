import React from "react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <motion.div
      className="w-full flex justify-center m-3 sticky top-0 h-15  z-50 bg-white/30 backdrop-blur-md shadow-xl rounded-xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
    >
      <NavigationMenu>
        <NavigationMenuList>
          {[
            "Industries",
            "Solutions",
            "Services",
            "Portfolio",
            "Company",
            "Blog",
          ].map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger>{item}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </motion.div>
  );
};

export default Navbar;

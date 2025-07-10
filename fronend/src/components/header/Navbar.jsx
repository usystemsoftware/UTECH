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
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-16 z-50 bg-white/30 shadow-xl backdrop-blur-md flex items-center justify-between px-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div>logo here</div>
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center items-center gap-6">
          {[
            "Industries",
            "Solutions",
            "Services",
            "Portfolio",
            "Company",
            "Blog",
          ].map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger className="bg-transparent text-base text-primary">
                {item}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button className="bg-blue-400 hover:bg-blue-500">SignUp</Button>
      </div>
    </motion.div>
  );
};

export default Navbar;

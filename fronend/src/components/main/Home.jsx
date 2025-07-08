import React from "react";
import { HeroHighlight } from "./HeroHighlight";

export const Home = () => {
  return (
    <HeroHighlight containerClassName="bg-slate dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-black dark:text-white">Welcome</h1>
    </HeroHighlight>
  );
};

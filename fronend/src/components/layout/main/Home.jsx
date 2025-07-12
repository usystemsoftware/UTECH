"use client";
import React from "react";
import { HeroHighlight } from "../../../custom/HeroHighlight";
import { TypographyH4 } from "../../../custom/Typography";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BackgroundBoxes } from "../../../custom/BackgroundBoxes";

export const Home = () => {
  return (
    <>
      <HeroHighlight
        containerClassName="bg-blue-100"
        className="flex md:flex-col md:h-4/5 lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-0 pb-12 gap-10"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          {/* Brand */}
          <div className="mb-6 sm:mb-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold flex justify-center lg:justify-start items-center gap-3 sm:gap-4 flex-wrap">
            <motion.div
              initial={{ x: -60, scale: 0.3 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 30 }}
              className="text-white w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-500 flex justify-center items-center shadow-xl"
            >
              U
            </motion.div>
            <span className="bg-gradient-to-r text-2xl sm:text-3xl lg:text-4xl p-2 from-yellow-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technology
            </span>
          </div>

          {/* Typewriter */}
          <TypographyH4 className="min-h-[3rem] sm:min-h-[4rem] text-base sm:text-lg lg:text-xl font-semibold text-gray-800 dark:text-gray-300">
            <Typewriter
              options={{
                strings: [
                  "Empowering the Future with Intelligent Innovation.",
                  "Smart. Scalable. Future-Ready.",
                  "Technology that Understands You.",
                ],
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 20,
              }}
            />
          </TypographyH4>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            We build smart, scalable, and user-first solutions that shape the digital world. Whether it's AI, automation, or cutting-edge web tech — we bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full lg:w-1/2 lg:flex justify-center items-center  hidden"
        >
          <div className=" lg:overflow-hidden rounded-xl w-full flex items-center justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <motion.img
              src="/Homepage/utechlogo.png"
              alt="Hero"
              className="w-full  sm:object-contain"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              loading="lazy"
            />
          </div>
        </motion.div>
      </HeroHighlight>

      <BackgroundBoxes />
    </>
  );
};

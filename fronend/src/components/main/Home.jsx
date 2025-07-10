import React from "react";
import { HeroHighlight } from "../../custom/HeroHighlight";
import { TypographyH4 } from "../../custom/Typography";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BackgroundBoxes } from "../../custom/BackgroundBoxes";
import { PinContainer } from "../ui/3d-pin";
export const Home = () => {
  return (
    <>
      <HeroHighlight
        containerClassName="bg-blue-100"
        className="flex flex-col md:flex-row container max-w-7xl mx-auto items-center px-4 py-10 gap-10"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-left px-4"
        >
          {/* Animated U Technology */}
          <div className="mb-8 text-6xl md:text-7xl font-extrabold flex items-center gap-4">
            {/* Animated U in a gradient circle */}
            <motion.div
              initial={{ x: -60, scale: 0.3 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 30 }}
              className="text-white text-5xl md:text-6xl w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-500 flex justify-center items-center shadow-xl"
            >
              U
            </motion.div>

            {/* Gradient text for Technology */}
            <span className="bg-gradient-to-r text-5xl p-3 from-yellow-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technology
            </span>
          </div>

          {/* Moto with typewriter */}
          <TypographyH4 className=" h-10 text-2xl md:text-3xl mt-4 text-gray-800 dark:text-gray-300 font-semibold">
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
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mt-15 mb-6">
            We build smart, scalable, and user-first solutions that shape the
            digital world. Whether it's AI, automation, or cutting-edge web tech
            — we bring your vision to life.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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
          className="w-full md:w-1/2 px-4 flex justify-center items-center"
        >
          <div className="overflow-hidden rounded-xl">
            <motion.img
              src="/Homepage/utechlogo.png"
              alt="Hero"
              className=" h-150 w-150 object-cover"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }} // Hidden from top
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Fully shown
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          {/* <PinContainer /> */}
        </motion.div>
      </HeroHighlight>
      <BackgroundBoxes />
    </>
  );
};

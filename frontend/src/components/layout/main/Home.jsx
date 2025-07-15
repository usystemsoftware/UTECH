// "use client";
// import React from "react";
// import { HeroHighlight } from "../../../custom/HeroHighlight";
// import { TypographyH4 } from "../../../custom/Typography";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";
// import { BackgroundBoxes } from "../../../custom/BackgroundBoxes";

// export const Home = () => {
//   return (
//     <>
//       <HeroHighlight
//         containerClassName="bg-gradient-to-r from-black/70 via-black/60 to-transparent backdrop-black border border-white/20 shadow-xl"
//         className="flex md:flex-col md:h-4/5 lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-0 pb-12 gap-10"
//       >

//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full lg:w-1/2 text-center lg:text-left"
//         >
//           {/* Brand */}
//           <div className="mb-6 sm:mb-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold flex justify-center lg:justify-start items-center gap-3 sm:gap-4 flex-wrap">
//             <motion.div
//               initial={{ x: -60, scale: 0.3 }}
//               animate={{ x: 0, scale: 1 }}
//               transition={{ type: "spring", stiffness: 120, damping: 30 }}
//               className="text-white w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-500 flex justify-center items-center shadow-xl"
//             >
//               U
//             </motion.div>
//             <span className="bg-gradient-to-r text-2xl sm:text-3xl lg:text-4xl p-2 from-yellow-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
//               Technology
//             </span>
//           </div>

//           {/* Typewriter */}
//           <TypographyH4 className="min-h-[3rem] sm:min-h-[4rem] text-base sm:text-lg lg:text-xl font-semibold text-white dark:text-gray-300">
//             <Typewriter
//               options={{
//                 strings: [
//                   "Empowering the Future with Intelligent Innovation.",
//                   "Smart. Scalable. Future-Ready.",
//                   "Technology that Understands You.",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 delay: 45,
//                 deleteSpeed: 20,
//               }}
//             />
//           </TypographyH4>

//           {/* Description */}
//           <p className="text-sm sm:text-base lg:text-lg text-white dark:text-gray-300 mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//             We build smart, scalable, and user-first solutions that shape the digital world. Whether it's AI, automation, or cutting-edge web tech — we bring your vision to life.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
//             >
//               Get Started
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-gray-400 text-white dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//             >
//               Learn More
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="w-full lg:w-1/2 lg:flex justify-center items-center  hidden"
//         >
//           <div className=" lg:overflow-hidden rounded-xl w-full flex items-center justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
//             <motion.img
//               src="/Homepage/heroimg.gif"
//               alt="Hero"
//               className="w-full  sm:object-contain"
//               initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
//               animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//               loading="lazy"
//             />
//           </div>
//         </motion.div>
//       </HeroHighlight>

//       <BackgroundBoxes />

//     </>
//   );
// };

// "use client";
// import React from "react";
// import { HeroHighlight } from "../../../custom/HeroHighlight";
// import { TypographyH4 } from "../../../custom/Typography";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";
// import { BackgroundBoxes } from "../../../custom/BackgroundBoxes";

// export const Home = () => {
//   return (
//     <>
//       <HeroHighlight
//         // containerClassName="bg-[linear-gradient(to_right,_black_0%,_black_50%,_white_50%,_white_100%)] border border-white/10 shadow-xl"
//         containerClassName="bg-[linear-gradient(to_right,_#000000_-20%,_#0f0f0f_15%,_#1a1a1a_40%,_#ffffff_50%,_#ffffff_100%)] border border-white/15 shadow-xl"
//         className="flex md:flex-col md:h-4/5 lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-0 pb-12 gap-10"
//       >
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full lg:w-1/2 text-center lg:text-left"
//         >
//           {/* Brand */}
//           <div className="mb-6 sm:mb-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold flex justify-center lg:justify-start items-center gap-3 sm:gap-4 flex-wrap">
//             <motion.div
//               initial={{ x: -60, scale: 0.3 }}
//               animate={{ x: 0, scale: 1 }}
//               transition={{ type: "spring", stiffness: 120, damping: 30 }}
//               className="text-white w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-500 flex justify-center items-center shadow-xl"
//             >
//               U
//             </motion.div>
//             <span className="bg-gradient-to-r text-2xl sm:text-3xl lg:text-4xl p-2 from-yellow-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
//               Technology
//             </span>
//           </div>

//           {/* Typewriter Heading */}
//           <TypographyH4 className="min-h-[3rem] sm:min-h-[4rem] text-base sm:text-lg lg:text-xl font-semibold text-white dark:text-gray-300">
//             <Typewriter
//               options={{
//                 strings: [
//                   "Empowering the Future with Intelligent Innovation.",
//                   "Smart. Scalable. Future-Ready.",
//                   "Technology that Understands You.",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 delay: 45,
//                 deleteSpeed: 20,
//               }}
//             />
//           </TypographyH4>

//           {/* Description */}
//           <p className="text-sm sm:text-base lg:text-lg text-white dark:text-gray-300 mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//             We build smart, scalable, and user-first solutions that shape the
//             digital world. Whether it's AI, automation, or cutting-edge web tech
//             — we bring your vision to life.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium transition"
//             >
//               Get Started
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white hover:text-black transition"
//             >
//               Learn More
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="w-full lg:w-1/2 lg:flex justify-center items-center hidden"
//         >
//           <div className="overflow-hidden rounded-xl w-full flex items-center justify-end max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
//             <motion.img
//               src="/Homepage/heroimg.gif"
//               alt="Hero"
//               className="w-full sm:object-contain"
//               initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
//               animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//               loading="lazy"
//             />
//           </div>
//         </motion.div>
//       </HeroHighlight>

//       <BackgroundBoxes />
//     </>
//   );
// };

// "use client";
// import React from "react";
// import { HeroHighlight } from "../../../custom/HeroHighlight";
// import { TypographyH4 } from "../../../custom/Typography";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";
// import { BackgroundBoxes } from "../../../custom/BackgroundBoxes";

// export const Home = () => {
//   return (
//     <>
//       {/* <HeroHighlight
//         containerClassName="bg-[linear-gradient(to_right,_#000000_-20%,_#0f0f0f_15%,_#1a1a1a_40%,_#ffffff_50%,_#ffffff_100%)] border border-white/15 shadow-xl"
//         className="flex md:flex-col md:h-4/5 lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-0 pb-12 gap-10"
//       > */}
//       <HeroHighlight
//         containerClassName="bg-[linear-gradient(to_right,_#0a0a0a_0%,_#1a1a1a_0%,_#e5e5e5_60%,_#f5f5f5_100%)] bg-black/80 border border-white/15 shadow-xl"
//         className="flex md:flex-col md:h-4/5 lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-0 pb-12 gap-10"
//       >
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full lg:w-1/2 text-center lg:text-left"
//         >
//           {/* Background Dot Wrapper */}
//           {/* <div
//             className="relative p-6 rounded-xl"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white' fill-opacity='0.1'/%3E%3C/svg%3E")`,
//               backgroundRepeat: "repeat",
//               backgroundSize: "20px 20px",
//             }}
//           > */}
//           {/* Background Dot Wrapper */}
//           <div
//             className="relative p-6 rounded-xl"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='3' r='3' fill='white' fill-opacity='0.1'/%3E%3C/svg%3E")`,
//               backgroundRepeat: "repeat",
//               backgroundSize: "30px 30px",
//             }}
//           >
//             {/* Brand */}
//             <div className="mb-6 sm:mb-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold flex justify-center lg:justify-start items-center gap-3 sm:gap-4 flex-wrap">
//               <motion.div
//                 initial={{ x: -60, scale: 0.3 }}
//                 animate={{ x: 0, scale: 1 }}
//                 transition={{ type: "spring", stiffness: 120, damping: 30 }}
//                 className="text-white w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-500 flex justify-center items-center shadow-xl"
//               >
//                 U
//               </motion.div>
//               <span className="bg-gradient-to-r text-2xl sm:text-3xl lg:text-4xl p-2 from-yellow-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
//                 Technology
//               </span>
//             </div>

//             {/* Typewriter Heading */}
//             <TypographyH4 className="min-h-[3rem] sm:min-h-[4rem] text-base sm:text-lg lg:text-xl font-semibold text-white dark:text-gray-300">
//               <Typewriter
//                 options={{
//                   strings: [
//                     "Empowering the Future with Intelligent Innovation.",
//                     "Smart. Scalable. Future-Ready.",
//                     "Technology that Understands You.",
//                   ],
//                   autoStart: true,
//                   loop: true,
//                   delay: 45,
//                   deleteSpeed: 20,
//                 }}
//               />
//             </TypographyH4>

//             {/* Description */}
//             <p className="text-sm sm:text-base lg:text-lg text-white dark:text-gray-300 mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//               We build smart, scalable, and user-first solutions that shape the
//               digital world. Whether it's AI, automation, or cutting-edge web
//               tech — we bring your vision to life.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium transition"
//               >
//                 Get Started
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white hover:text-black transition"
//               >
//                 Learn More
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="w-full lg:w-1/2 lg:flex justify-center items-center hidden"
//         >
//           <div className="overflow-hidden rounded-xl w-full flex items-center justify-end max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
//             <motion.img
//               src="/Homepage/heroimg.gif"
//               alt="Hero"
//               className="w-full sm:object-contain"
//               initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
//               animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//               loading="lazy"
//             />
//           </div>
//         </motion.div>
//       </HeroHighlight>

//       <BackgroundBoxes />
//     </>
//   );
// };

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
        containerClassName="bg-gradient-to-r from-black via-zinc-700 to-white border border-white/15 shadow-xl"
        className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-12"
      >
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <div
            className="p-6 rounded-xl"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='3' r='3' fill='white' fill-opacity='0.1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "30px 30px",
            }}
          >
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

            <TypographyH4 className="text-white text-sm sm:text-base md:text-lg min-h-[3rem]">
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

            <p className="mt-4 text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We build smart, scalable, and user-first solutions. Whether it's AI,
              automation, or cutting-edge web tech — we bring your vision to life.
            </p>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition rounded-lg"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="overflow-hidden pt-2 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <motion.img
              src="/Homepage/heroimg.gif"
              alt="Hero"
              className="w-full object-contain"
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

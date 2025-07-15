// "use client";

// import { Boxes } from "../components/ui/background-boxes";
// import { motion } from "framer-motion";
// import { TypographyH4 } from "@/custom/Typography";

// const services = [
//   {
//     title: "Application Development",
//     description:
//       "Build robust web and mobile apps tailored to your business needs with scalable and modern technologies.",
//     icon: "🛠️",
//   },
//   {
//     title: "DevOps Services",
//     description:
//       "Accelerate delivery pipelines, automate infrastructure, and improve collaboration across teams.",
//     icon: "⚙️",
//   },
//   {
//     title: "Digital Transformation",
//     description:
//       "Modernize legacy systems and workflows to stay competitive in an ever-evolving tech landscape.",
//     icon: "💡",
//   },
//   {
//     title: "Software Security",
//     description:
//       "Protect applications and infrastructure with end-to-end security auditing, testing, and monitoring.",
//     icon: "🔒",
//   },
//   {
//     title: "QA & Testing",
//     description:
//       "Deliver high-performance products with comprehensive testing strategies for functionality and UX.",
//     icon: "✅",
//   },
// ];

// const industries = [

//   {
//     title: "Finance",
//     description:
//       "Streamline financial operations with custom software for investment management, accounting, and digital payments.",
//     icon: "💰",
//   }
//   , {
//     title: "Banking",
//     description:
//       "Innovative banking software solutions to streamline operations, risk management, and customer engagement.",
//     icon: "🏦",
//   },
//   {
//     title: "Healthcare",
//     description:
//       "Transform patient care and medical operations with digital health records, telehealth, and more.",
//     icon: "🩺",
//   },
//   {
//     title: "Insurance",
//     description:
//       "Smart insurance platforms for underwriting, claims, and customer portals.",
//     icon: "📄",
//   },
//   {
//     title: "Retail",
//     description:
//       "Enhance customer experience and manage inventory with intelligent retail software.",
//     icon: "🛒",
//   },
// ];

// const solutions = [
//   {
//     title: "Artificial Intelligence",
//     description:
//       "Leverage AI for automation, predictions, and smarter decision-making across industries.",
//     icon: "🤖",
//   },
//   {
//     title: "Cloud",
//     description:
//       "Enable scalability and flexibility with cloud-native applications and infrastructure.",
//     icon: "☁️",
//   },
//   {
//     title: "Fraud Protection",
//     description:
//       "Secure systems with AI-powered fraud detection and cybersecurity solutions.",
//     icon: "🛡️",
//   },
//   {
//     title: "Digital Marketing",
//     description:
//       "Engage and convert users with personalized, data-driven digital marketing campaigns.",
//     icon: "📈",
//   },
//   {
//     title: "Web Development",
//     description:
//       "Create fast, secure, and responsive web applications tailored to business goals.",
//     icon: "🌐",
//   },
// ];

// export function BackgroundBoxes() {
//   return (
//     <div className="relative w-full overflow-hidden bg-slate-900 rounded-2xl py-24 px-4 md:px-10">
//       {/* Background Animation Layer */}
//       <div className="absolute inset-0 w-full h-full bg-slate-900 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
//       <Boxes className='h-1' />

//       {/* Foreground Content */}
//       <div className="relative z-10 max-w-7xl mx-auto text-white text-center">
//         <TypographyH4 className="text-3xl md:text-4xl font-bold mb-10">
//           Our Most Demanded IT Services
//         </TypographyH4>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {services.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left shadow-lg backdrop-blur-md hover:shadow-xl transition"
//             >
//               <div className="text-4xl mb-4">{item.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-white">
//                 {item.title}
//               </h3>
//               <p className="text-gray-300 text-sm">{item.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <TypographyH4 className="text-3xl md:text-4xl font-bold mb-10">
//           Top Industries We Serve
//         </TypographyH4>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {industries.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left shadow-lg backdrop-blur-md hover:shadow-xl transition"
//             >
//               <div className="text-4xl mb-4">{item.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-white">
//                 {item.title}
//               </h3>
//               <p className="text-gray-300 text-sm">{item.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <TypographyH4 className="text-3xl md:text-4xl font-bold mb-10">
//           Trending Tech Solutions
//         </TypographyH4>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {solutions.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left shadow-lg backdrop-blur-md hover:shadow-xl transition"
//             >
//               <div className="text-4xl mb-4">{item.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-white">
//                 {item.title}
//               </h3>
//               <p className="text-gray-300 text-sm">{item.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// "use client";

// import { Boxes } from "../components/ui/background-boxes";
// import { motion } from "framer-motion";
// import { TypographyH4 } from "@/custom/Typography";

// const services = [
//   {
//     title: "Application Development",
//     description:
//       "Build robust web and mobile apps tailored to your business needs with scalable and modern technologies.",
//     icon: "🛠️",
//   },
//   {
//     title: "DevOps Services",
//     description:
//       "Accelerate delivery pipelines, automate infrastructure, and improve collaboration across teams.",
//     icon: "⚙️",
//   },
//   {
//     title: "Digital Transformation",
//     description:
//       "Modernize legacy systems and workflows to stay competitive in an ever-evolving tech landscape.",
//     icon: "💡",
//   },
//   {
//     title: "Software Security",
//     description:
//       "Protect applications and infrastructure with end-to-end security auditing, testing, and monitoring.",
//     icon: "🔒",
//   },
//   {
//     title: "QA & Testing",
//     description:
//       "Deliver high-performance products with comprehensive testing strategies for functionality and UX.",
//     icon: "✅",
//   },
// ];

// const industries = [
//   {
//     title: "Finance",
//     description:
//       "Streamline financial operations with custom software for investment management, accounting, and digital payments.",
//     icon: "💰",
//   },
//   {
//     title: "Banking",
//     description:
//       "Innovative banking software solutions to streamline operations, risk management, and customer engagement.",
//     icon: "🏦",
//   },
//   {
//     title: "Healthcare",
//     description:
//       "Transform patient care and medical operations with digital health records, telehealth, and more.",
//     icon: "🩺",
//   },
//   {
//     title: "Insurance",
//     description:
//       "Smart insurance platforms for underwriting, claims, and customer portals.",
//     icon: "📄",
//   },
//   {
//     title: "Retail",
//     description:
//       "Enhance customer experience and manage inventory with intelligent retail software.",
//     icon: "🛒",
//   },
// ];

// const solutions = [
//   {
//     title: "Artificial Intelligence",
//     description:
//       "Leverage AI for automation, predictions, and smarter decision-making across industries.",
//     icon: "🤖",
//   },
//   {
//     title: "Cloud",
//     description:
//       "Enable scalability and flexibility with cloud-native applications and infrastructure.",
//     icon: "☁️",
//   },
//   {
//     title: "Fraud Protection",
//     description:
//       "Secure systems with AI-powered fraud detection and cybersecurity solutions.",
//     icon: "🛡️",
//   },
//   {
//     title: "Digital Marketing",
//     description:
//       "Engage and convert users with personalized, data-driven digital marketing campaigns.",
//     icon: "📈",
//   },
//   {
//     title: "Web Development",
//     description:
//       "Create fast, secure, and responsive web applications tailored to business goals.",
//     icon: "🌐",
//   },
// ];

// export function BackgroundBoxes() {
//   return (
//     <section className="relative w-full overflow-hidden bg-slate-950 rounded-2xl py-24 px-4 md:px-10">
//       <div className="absolute inset-0 w-full h-full bg-slate-950 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
//       <Boxes className="h-1" />

//       <div className="relative z-10 max-w-7xl mx-auto text-white text-center">
//         {[
//           { title: "Our Most Demanded IT Services", data: services },
//           { title: "Top Industries We Serve", data: industries },
//           { title: "Trending Tech Solutions", data: solutions },
//         ].map((section, i) => (
//           <div key={i} className="mb-20">
//             <TypographyH4 className="text-3xl md:text-4xl font-bold mb-10">
//               {section.title}
//             </TypographyH4>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {section.data.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-left shadow-lg backdrop-blur-md hover:shadow-xl transition hover:bg-white/10"
//                 >
//                   <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 text-white">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {item.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion } from "framer-motion";
// import { TypographyH4 } from "@/custom/Typography";
// import { Boxes } from "../components/ui/background-boxes";

// const services = [
//   {
//     title: "Application Development",
//     description:
//       "Build robust web and mobile apps tailored to your business needs with scalable and modern technologies.",
//     icon: "🛠️",
//   },
//   {
//     title: "DevOps Services",
//     description:
//       "Accelerate delivery pipelines, automate infrastructure, and improve collaboration across teams.",
//     icon: "⚙️",
//   },
//   {
//     title: "Digital Transformation",
//     description:
//       "Modernize legacy systems and workflows to stay competitive in an ever-evolving tech landscape.",
//     icon: "💡",
//   },
//   {
//     title: "Software Security",
//     description:
//       "Protect applications and infrastructure with end-to-end security auditing, testing, and monitoring.",
//     icon: "🔒",
//   },
//   {
//     title: "QA & Testing",
//     description:
//       "Deliver high-performance products with comprehensive testing strategies for functionality and UX.",
//     icon: "✅",
//   },
// ];

// const industries = [
//   {
//     title: "Finance",
//     description:
//       "Streamline financial operations with custom software for investment management, accounting, and digital payments.",
//     icon: "💰",
//   },
//   {
//     title: "Banking",
//     description:
//       "Innovative banking software solutions to streamline operations, risk management, and customer engagement.",
//     icon: "🏦",
//   },
//   {
//     title: "Healthcare",
//     description:
//       "Transform patient care and medical operations with digital health records, telehealth, and more.",
//     icon: "🩺",
//   },
//   {
//     title: "Insurance",
//     description:
//       "Smart insurance platforms for underwriting, claims, and customer portals.",
//     icon: "📄",
//   },
//   {
//     title: "Retail",
//     description:
//       "Enhance customer experience and manage inventory with intelligent retail software.",
//     icon: "🛒",
//   },
// ];

// const solutions = [
//   {
//     title: "Artificial Intelligence",
//     description:
//       "Leverage AI for automation, predictions, and smarter decision-making across industries.",
//     icon: "🤖",
//   },
//   {
//     title: "Cloud",
//     description:
//       "Enable scalability and flexibility with cloud-native applications and infrastructure.",
//     icon: "☁️",
//   },
//   {
//     title: "Fraud Protection",
//     description:
//       "Secure systems with AI-powered fraud detection and cybersecurity solutions.",
//     icon: "🛡️",
//   },
//   {
//     title: "Digital Marketing",
//     description:
//       "Engage and convert users with personalized, data-driven digital marketing campaigns.",
//     icon: "📈",
//   },
//   {
//     title: "Web Development",
//     description:
//       "Create fast, secure, and responsive web applications tailored to business goals.",
//     icon: "🌐",
//   },
// ];

// export function BackgroundBoxes() {
//   return (
//     <section className="relative w-full bg-black py-24 px-4 md:px-10 overflow-hidden">
//       {/* Optional animated boxes background */}
//       <Boxes className="absolute inset-0 h-full z-0 opacity-5 animate-pulse" />

//       <div className="relative z-10 max-w-7xl mx-auto text-white">
//         {[
//           { title: "Our Most Demanded IT Services", data: services },
//           { title: "Top Industries We Serve", data: industries },
//           { title: "Trending Tech Solutions", data: solutions },
//         ].map((section, sectionIndex) => (
//           <div key={sectionIndex} className="mb-24">
//             <TypographyH4 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
//               {section.title}
//             </TypographyH4>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {section.data.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-white/0 hover:from-white/10 hover:shadow-2xl transition-all backdrop-blur-lg"
//                 >
//                   <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 text-white">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {item.description}
//                   </p>

//                   <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-10 group-hover:opacity-20 transition duration-500" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { TypographyH4 } from "@/custom/Typography";

// const sections = [
//   {
//     title: "Our Most Demanded IT Services",
//     data: [
//       {
//         title: "Application Development",
//         description:
//           "Build robust web and mobile apps tailored to your business needs with scalable and modern technologies.",
//         icon: "🛠️",
//       },
//       {
//         title: "DevOps Services",
//         description:
//           "Accelerate delivery pipelines, automate infrastructure, and improve collaboration across teams.",
//         icon: "⚙️",
//       },
//       {
//         title: "Digital Transformation",
//         description:
//           "Modernize legacy systems and workflows to stay competitive in an ever-evolving tech landscape.",
//         icon: "💡",
//       },
//       {
//         title: "Software Security",
//         description:
//           "Protect applications and infrastructure with end-to-end security auditing, testing, and monitoring.",
//         icon: "🔒",
//       },
//       {
//         title: "QA & Testing",
//         description:
//           "Deliver high-performance products with comprehensive testing strategies for functionality and UX.",
//         icon: "✅",
//       },
//     ],
//   },
//   {
//     title: "Top Industries We Serve",
//     data: [
//       {
//         title: "Finance",
//         description:
//           "Streamline financial operations with custom software for investment management, accounting, and digital payments.",
//         icon: "💰",
//       },
//       {
//         title: "Banking",
//         description:
//           "Innovative banking software solutions to streamline operations, risk management, and customer engagement.",
//         icon: "🏦",
//       },
//       {
//         title: "Healthcare",
//         description:
//           "Transform patient care and medical operations with digital health records, telehealth, and more.",
//         icon: "🩺",
//       },
//       {
//         title: "Insurance",
//         description:
//           "Smart insurance platforms for underwriting, claims, and customer portals.",
//         icon: "📄",
//       },
//       {
//         title: "Retail",
//         description:
//           "Enhance customer experience and manage inventory with intelligent retail software.",
//         icon: "🛒",
//       },
//     ],
//   },
//   {
//     title: "Trending Tech Solutions",
//     data: [
//       {
//         title: "Artificial Intelligence",
//         description:
//           "Leverage AI for automation, predictions, and smarter decision-making across industries.",
//         icon: "🤖",
//       },
//       {
//         title: "Cloud",
//         description:
//           "Enable scalability and flexibility with cloud-native applications and infrastructure.",
//         icon: "☁️",
//       },
//       {
//         title: "Fraud Protection",
//         description:
//           "Secure systems with AI-powered fraud detection and cybersecurity solutions.",
//         icon: "🛡️",
//       },
//       {
//         title: "Digital Marketing",
//         description:
//           "Engage and convert users with personalized, data-driven digital marketing campaigns.",
//         icon: "📈",
//       },
//       {
//         title: "Web Development",
//         description:
//           "Create fast, secure, and responsive web applications tailored to business goals.",
//         icon: "🌐",
//       },
//     ],
//   },
// ];

// export function BackgroundBoxes() {
//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-gray-100 py-24 px-4 md:px-10">
//       <div className="relative z-10 max-w-7xl mx-auto text-black">
//         {sections.map((section, i) => (
//           <div key={i} className="mb-24">
//             <TypographyH4 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
//               {section.title}
//             </TypographyH4>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {section.data.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group relative p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                 >
//                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-t-xl opacity-80" />

//                   <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
//                     {item.icon}
//                   </div>

//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 leading-relaxed">
//                     {item.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// src/app/components/BackgroundBoxes.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypographyH4 } from "@/custom/Typography";

const sections = [
  {
    title: "Our Most Demanded IT Services",
    data: [
      {
        title: "Application Development",
        description:
          "Build robust web and mobile apps tailored to your business needs with scalable and modern technologies.",
        icon: "🛠️",
      },
      {
        title: "DevOps Services",
        description:
          "Accelerate delivery pipelines, automate infrastructure, and improve collaboration across teams.",
        icon: "⚙️",
      },
      {
        title: "Digital Transformation",
        description:
          "Modernize legacy systems and workflows to stay competitive in an ever-evolving tech landscape.",
        icon: "💡",
      },
      {
        title: "Software Security",
        description:
          "Protect applications and infrastructure with end-to-end security auditing, testing, and monitoring.",
        icon: "🔒",
      },
      {
        title: "QA & Testing",
        description:
          "Deliver high-performance products with comprehensive testing strategies for functionality and UX.",
        icon: "✅",
      },
    ],
  },
  {
    title: "Top Industries We Serve",
    data: [
      {
        title: "Finance",
        description:
          "Streamline financial operations with custom software for investment management, accounting, and digital payments.",
        icon: "💰",
      },
      {
        title: "Banking",
        description:
          "Innovative banking software solutions to streamline operations, risk management, and customer engagement.",
        icon: "🏦",
      },
      {
        title: "Healthcare",
        description:
          "Transform patient care and medical operations with digital health records, telehealth, and more.",
        icon: "🩺",
      },
      {
        title: "Insurance",
        description:
          "Smart insurance platforms for underwriting, claims, and customer portals.",
        icon: "📄",
      },
      {
        title: "Retail",
        description:
          "Enhance customer experience and manage inventory with intelligent retail software.",
        icon: "🛒",
      },
    ],
  },
  {
    title: "Trending Tech Solutions",
    data: [
      {
        title: "Artificial Intelligence",
        description:
          "Leverage AI for automation, predictions, and smarter decision-making across industries.",
        icon: "🤖",
      },
      {
        title: "Cloud",
        description:
          "Enable scalability and flexibility with cloud-native applications and infrastructure.",
        icon: "☁️",
      },
      {
        title: "Fraud Protection",
        description:
          "Secure systems with AI-powered fraud detection and cybersecurity solutions.",
        icon: "🛡️",
      },
      {
        title: "Digital Marketing",
        description:
          "Engage and convert users with personalized, data-driven digital marketing campaigns.",
        icon: "📈",
      },
      {
        title: "Web Development",
        description:
          "Create fast, secure, and responsive web applications tailored to business goals.",
        icon: "🌐",
      },
    ],
  },
];

export function BackgroundBoxes() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-100 py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, i) => (
          <div key={i} className="mb-24">
            <TypographyH4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
              {section.title}
            </TypographyH4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-t-xl opacity-80" />

                  <div className="text-3xl sm:text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

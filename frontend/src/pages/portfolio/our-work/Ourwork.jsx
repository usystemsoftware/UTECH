// Ourwork.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { workData } from "./Data";

import heroImage from "/public/banner/ai.jpg"; 

export default function Ourwork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Team collaborating on innovative software projects"
      >
        <div className="absolute inset-0  bg-opacity-50 dark:bg-opacity-60"></div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white dark:text-gray-100 mb-4">
            Our <span className="text-teal-400">Work & Expertise</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 max-w-2xl mx-auto">
            We deliver impactful, scalable solutions through innovative technology and collaborative teamwork. Explore some of our projects to see our culture and technical expertise in action.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Project Cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-24">
            {workData.map((work, index) => (
              <motion.div
                key={index}
                className="relative bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden cursor-pointer group transform hover:scale-105 hover:rotate-1 transition-all duration-500 focus-within:outline focus-within:outline-2 focus-within:outline-teal-500"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 50 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                tabIndex={0}
                aria-labelledby={`project-${index}-title`}
              >
                <motion.img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6 text-left">
                  <h3
                    id={`project-${index}-title`}
                    className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2"
                  >
                    {work.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {(work.technologies || "React, Node.js, Tailwind CSS").split(", ").map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-700 text-teal-800 dark:text-teal-200 rounded-full text-xs font-medium"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Descriptive Sections */}
          <div className="space-y-24">
            {workData.map((work, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
                role="group"
                aria-labelledby={`section-${index}-title`}
              >
                <div className="md:w-1/2">
                  <motion.img
                    src={work.image}
                    alt={work.title}
                    className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="md:w-1/2 text-left">
                  <h3
                    id={`section-${index}-title`}
                    className="text-3xl font-bold text-teal-500 mb-4"
                  >
                    {work.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {work.description} This project demonstrates our team's ability to deliver high-performance, scalable, and innovative software solutions with a strong focus on user experience and business impact.
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Technologies & Tools
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {work.technologies || "React.js, Next.js, Node.js, Express.js, Tailwind CSS, MongoDB, PostgreSQL, AWS, Docker, Git, CI/CD pipelines"}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Methodologies & Practices
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Agile development, Test-Driven Development (TDD), and code review practices ensure quality, collaboration, and timely delivery.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Impact & Results
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Projects delivered measurable impact: improved efficiency, better user engagement, scalable architecture, and innovation-driven solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

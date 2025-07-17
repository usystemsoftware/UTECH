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

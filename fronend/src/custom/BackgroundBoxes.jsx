"use client";

import { Boxes } from "../components/ui/background-boxes";
import { motion } from "framer-motion";
import { TypographyH4 } from "@/custom/Typography";

const services = [
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
];

export function BackgroundBoxes() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 rounded-2xl py-24 px-4 md:px-10">
      {/* Background Animation Layer */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-white text-center">
        <TypographyH4 className="text-3xl md:text-4xl font-bold mb-10">
          Our Most Demanded IT Services
        </TypographyH4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left shadow-lg backdrop-blur-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

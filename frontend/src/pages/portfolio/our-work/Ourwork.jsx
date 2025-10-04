// Ourwork.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  TypographyH3,
  TypographyH4,
  TypographyMuted,
  Headline,
} from "@/custom/Typography";
import { CheckCircle2 } from "lucide-react";
import { workData } from "./Data";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

export default function Ourwork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
    <SeoHead
        title="U Tech | Company Blog - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      {/* HERO SECTION */}
      <HeroSection
        backgroundImage="/banner/Image_ourwork.jpg"
        title="Our Work & Expertise"
        description="We deliver impactful, scalable solutions through innovative technology and collaborative teamwork. Explore some of our projects to see our culture and technical expertise in action."
        buttonText="See Our Projects"
      />

      {/* PROJECTS GRID */}
      <PageLayout className="py-24 space-y-16">
        <Headline
          title="Our Projects"
          description="A showcase of innovative solutions delivered across industries."
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {workData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* DETAILED PROJECT SECTIONS */}
        <div className="space-y-24">
          {workData.map((project, index) => (
            <DetailedProject
              key={index}
              project={project}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </PageLayout>
    </>
  );
}

/* === Reusable Components === */

// Project Card for grid display
function ProjectCard({ project, index, shouldReduceMotion }) {
  return (
    <motion.div
      className="relative bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden cursor-pointer group transform hover:scale-105 hover:rotate-1 transition-all duration-500"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 50 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="p-6 text-left">
        <TypographyH4 className="text-gray-900 dark:text-gray-100 mb-2">
          {project.title}
        </TypographyH4>
        <CardDescription className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {(project.technologies || "React, Node.js, Tailwind CSS")
            .split(", ")
            .map((tech, i) => (
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
  );
}

// Detailed Project Section
function DetailedProject({ project, index, shouldReduceMotion }) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center gap-10 ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
      initial={
        shouldReduceMotion ? {} : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
      }
      whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="md:w-1/2">
        <motion.img
          src={project.image}
          alt={project.title}
          className="rounded-3xl shadow-2xl w-full h-80 object-cover"
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="md:w-1/2 text-left">
        <TypographyH3 className="text-teal-500 mb-4">
          {project.title}
        </TypographyH3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="mb-4">
          <TypographyH4 className="mb-2">Technologies & Tools</TypographyH4>
          <p className="text-gray-600 dark:text-gray-300">
            {project.technologies}
          </p>
        </div>

        <div className="mb-4">
          <TypographyH4 className="mb-2">
            Methodologies & Practices
          </TypographyH4>
          <p className="text-gray-600 dark:text-gray-300">
            Agile development, Test-Driven Development (TDD), and code review
            practices ensure quality, collaboration, and timely delivery.
          </p>
        </div>

        <div>
          <TypographyH4 className="mb-2">Impact & Results</TypographyH4>
          <p className="text-gray-600 dark:text-gray-300">
            Projects delivered measurable impact: improved efficiency, better
            user engagement, scalable architecture, and innovation-driven
            solutions.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
